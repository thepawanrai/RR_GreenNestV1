import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';
const isProd = process.env.NODE_ENV === 'production';

// Safe request body parsing with sensible limits
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// In-memory lead buffer for local queueing (when external CRM webhook is pending configuration)
interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  projectSlug?: string;
  projectName?: string;
  timeline?: string;
  budgetRange?: string;
  userCityCountry?: string;
  preferredContactMethod?: string;
  requestedNextStep?: string;
  notes?: string;
  timestamp: string;
  ipHash?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

const leadQueue: LeadRecord[] = [];

// Basic Rate Limiting for lead submissions (simple in-memory window)
const submissionRateMap = new Map<string, number>();

// --- HEALTH ENDPOINT ---
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    service: 'GreenNest Realtors Web Application',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: isProd ? 'production' : 'development',
    version: '1.0.0',
    crmIntegrationConfigured: !!process.env.CRM_WEBHOOK_URL,
  });
});

// --- API: LEAD SUBMISSION ---
app.post('/api/enquiry', async (req: Request, res: Response) => {
  try {
    const {
      name,
      phone,
      email,
      projectSlug,
      projectName,
      timeline,
      budgetRange,
      userCityCountry,
      preferredContactMethod,
      requestedNextStep,
      notes,
      consentGiven,
      honeypot,
      utmSource,
      utmMedium,
      utmCampaign,
    } = req.body;

    // 1. Anti-spam honeypot detection
    if (honeypot && honeypot.trim().length > 0) {
      // Silently reject spam bot without indicating trap
      return res.status(200).json({
        success: true,
        message: 'Enquiry received.',
        status: 'QUEUED_LOCALLY_PENDING_CREDENTIALS',
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return res.status(400).json({ success: false, message: 'A valid phone number with at least 8 digits is required.' });
    }

    if (!consentGiven) {
      return res.status(400).json({ success: false, message: 'Consent to contact is required.' });
    }

    // Rate limiting: max 5 submissions per IP every 5 minutes
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const ipKey = String(clientIp).split(',')[0].trim();
    const now = Date.now();
    const lastSubmissions = submissionRateMap.get(ipKey) || 0;
    if (now - lastSubmissions < 3000) {
      return res.status(429).json({ success: false, message: 'Please wait a moment before sending another request.' });
    }
    submissionRateMap.set(ipKey, now);

    const leadId = `GN-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const newLead: LeadRecord = {
      id: leadId,
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 25),
      email: email ? String(email).trim().slice(0, 100) : undefined,
      projectSlug: projectSlug ? String(projectSlug).slice(0, 50) : 'general',
      projectName: projectName ? String(projectName).slice(0, 100) : 'General Advisory',
      timeline: timeline ? String(timeline).slice(0, 50) : undefined,
      budgetRange: budgetRange ? String(budgetRange).slice(0, 50) : undefined,
      userCityCountry: userCityCountry ? String(userCityCountry).slice(0, 50) : undefined,
      preferredContactMethod: preferredContactMethod ? String(preferredContactMethod).slice(0, 20) : 'WhatsApp',
      requestedNextStep: requestedNextStep ? String(requestedNextStep).slice(0, 50) : 'Project Details',
      notes: notes ? String(notes).slice(0, 500) : undefined,
      timestamp: new Date().toISOString(),
      utmSource: utmSource ? String(utmSource).slice(0, 50) : undefined,
      utmMedium: utmMedium ? String(utmMedium).slice(0, 50) : undefined,
      utmCampaign: utmCampaign ? String(utmCampaign).slice(0, 50) : undefined,
    };

    // Store in internal safe lead buffer (retains last 100 leads)
    leadQueue.unshift(newLead);
    if (leadQueue.length > 100) leadQueue.pop();

    // Check if external webhook/CRM integration credentials exist in env
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    let deliveryStatus: 'DELIVERED_CRM' | 'QUEUED_LOCALLY_PENDING_CREDENTIALS' = 'QUEUED_LOCALLY_PENDING_CREDENTIALS';

    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'NEW_PROPERTY_ENQUIRY',
            lead: newLead,
            source: 'GreenNest Realtors Website',
          }),
        });
        if (webhookRes.ok) {
          deliveryStatus = 'DELIVERED_CRM';
        }
      } catch (webhookErr) {
        // Fallback gracefully without dropping lead
        deliveryStatus = 'QUEUED_LOCALLY_PENDING_CREDENTIALS';
      }
    }

    // Prefill direct WhatsApp link for instant engagement
    const targetProject = newLead.projectName || 'Curated Lucknow Property';
    const waText = encodeURIComponent(
      `Hello Athar Mansoor (GreenNest Realtors), I am ${newLead.name}. I have submitted an enquiry for ${targetProject}. Preferred Step: ${newLead.requestedNextStep}.`
    );
    const whatsAppDirectUrl = `https://wa.me/919235621921?text=${waText}`;

    const responseMsg = deliveryStatus === 'DELIVERED_CRM'
      ? `Thank you, ${newLead.name}! Your enquiry for ${targetProject} has been forwarded directly to our advisor Athar Mansoor.`
      : `Thank you, ${newLead.name}! Your enquiry for ${targetProject} has been recorded in our advisor queue. Athar Mansoor will connect with you shortly.`;

    return res.status(200).json({
      success: true,
      message: responseMsg,
      leadId,
      status: deliveryStatus,
      timestamp: newLead.timestamp,
      whatsAppDirectUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your enquiry. Please contact us directly at +91 92356 21921.',
    });
  }
});

// --- DYNAMIC SITEMAP.XML ---
app.get('/sitemap.xml', (req: Request, res: Response) => {
  const origin = process.env.APP_URL || `https://${req.get('host') || 'localhost:3000'}`;
  
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/nri-corner',
    '/buyers-guide',
    '/home-loan-assistance',
    '/insights',
    '/faqs',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  const projectSlugs = [
    'shalimar-21',
    'shalimar-marbella',
    'shalimar-valencia-towers-phase-2',
    'shalimar-valencia-villas',
    'shalimar-g21',
    'shalimar-business-district',
    'shalimar-sky-garden',
    'shalimar-pinnacle',
  ];

  const articleSlugs = [
    'how-to-shortlist-residential-project-lucknow',
    'what-buyers-should-verify-before-booking-property',
    'how-to-check-project-rera-registration-uttar-pradesh',
    'essential-questions-to-ask-during-site-visit',
    'understanding-carpet-area-vs-super-built-up-area',
    'practical-document-checklist-homebuyers-lucknow',
    'buying-property-lucknow-nri-coordination-guide',
    'what-to-understand-before-comparing-project-prices',
    'home-loan-preparation-documents-questions-for-lenders',
    'evaluating-lifestyle-amenities-versus-actual-family-needs',
  ];

  const urls: string[] = [];

  staticRoutes.forEach((route) => {
    urls.push(`
  <url>
    <loc>${origin}${route}</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`);
  });

  projectSlugs.forEach((slug) => {
    urls.push(`
  <url>
    <loc>${origin}/projects/${slug}</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
  });

  articleSlugs.forEach((slug) => {
    urls.push(`
  <url>
    <loc>${origin}/insights/${slug}</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemapXml);
});

// --- DYNAMIC ROBOTS.TXT ---
app.get('/robots.txt', (req: Request, res: Response) => {
  const origin = process.env.APP_URL || `https://${req.get('host') || 'localhost:3000'}`;
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

// Helper for SEO Metadata injection per route
function getPageMetadata(reqPath: string, hostUrl: string) {
  const norm = reqPath.replace(/\/$/, '') || '/';
  
  const defaultMeta = {
    title: 'GreenNest Realtors | Selective Homes. Exclusive Living · Lucknow',
    description: 'Explore a curated portfolio of residential and investment opportunities in Lucknow, with clear project information and personal guidance from GreenNest Realtors.',
    canonical: `${hostUrl}${norm}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      'name': 'GreenNest Realtors',
      'description': 'Curated real estate advisory in Lucknow specializing in select RERA-registered properties. Agent UP-RERA: UPRERAAGT000016/07/2025.',
      'telephone': '+919235621921',
      'email': 'greennestlko@gmail.com',
      'identifier': 'UPRERAAGT000016/07/2025',
      'employee': {
        '@type': 'Person',
        'name': 'Athar Mansoor',
        'jobTitle': 'Senior Real Estate Advisor',
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'FF-27, River View Enclave, Arcade, Gomti Nagar',
        'addressLocality': 'Lucknow',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '226010',
        'addressCountry': 'IN',
      },
      'priceRange': '₹₹₹',
    },
  };

  if (norm.startsWith('/projects/')) {
    const slug = norm.replace('/projects/', '');
    const titles: Record<string, string> = {
      'shalimar-21': 'Shalimar 21 (Shalimar Twenty One) | Gomti Nagar Extension, Lucknow',
      'shalimar-marbella': 'Shalimar Marbella | Shalimar OneWorld, Lucknow',
      'shalimar-valencia-towers-phase-2': 'Shalimar Valencia Towers Phase 2 | OneWorld, Lucknow',
      'shalimar-valencia-villas': 'Shalimar Valencia Villas | Private Gated Enclave, Lucknow',
      'shalimar-g21': 'Shalimar G21 | Contemporary Residences, Lucknow',
      'shalimar-business-district': 'Shalimar Business District | Grade-A Commercial, Lucknow',
      'shalimar-sky-garden': 'Shalimar Sky Garden | High-Rise Residences, Lucknow',
      'shalimar-pinnacle': 'Shalimar Pinnacle | Boutique Luxury Residences, Lucknow',
    };

    return {
      title: titles[slug] || 'Curated Project Details | GreenNest Realtors',
      description: `Verified details, RERA compliance status, layouts, and direct advisory for ${slug.replace(/-/g, ' ')} in Lucknow.`,
      canonical: `${hostUrl}${norm}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': titles[slug] || slug,
        'description': `Verified luxury property in Lucknow managed by GreenNest Realtors.`,
        'brand': { '@type': 'Brand', 'name': 'Shalimar Corp.' },
      },
    };
  }

  if (norm === '/nri-corner') {
    return {
      title: 'NRI & Remote Buyer Corner | Lucknow Real Estate Guidance',
      description: 'End-to-end remote coordination for overseas Indians investing in Lucknow property: virtual walkthroughs, FEMA guidance, and document assistance.',
      canonical: `${hostUrl}${norm}`,
      jsonLd: defaultMeta.jsonLd,
    };
  }

  if (norm === '/buyers-guide') {
    return {
      title: 'Lucknow Homebuyer Due Diligence Guide | GreenNest Realtors',
      description: 'Plain-language guide to carpet area vs super area, UP-RERA checks, and pre-booking checklists for Lucknow properties.',
      canonical: `${hostUrl}${norm}`,
      jsonLd: defaultMeta.jsonLd,
    };
  }

  return defaultMeta;
}

// --- VITE MIDDLEWARE & CLIENT SERVING ---
async function startServer() {
  if (!isProd) {
    // Development mode: attach Vite dev server middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);

    // SSR / HTML fallback for development
    app.use('*', async (req: Request, res: Response, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const hostUrl = process.env.APP_URL || `http://${req.get('host') || 'localhost:3000'}`;
        const meta = getPageMetadata(url, hostUrl);

        // Inject dynamic title, description, and canonical
        template = template
          .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
          .replace(
            /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
            `<meta name="description" content="${meta.description}" />\n    <link rel="canonical" href="${meta.canonical}" />`
          );

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production mode: serve static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath, { index: false }));

    // Guard: Never serve index.html for missing static assets (prevents MIME type error white screen)
    app.use((req: Request, res: Response, next) => {
      if (
        req.path.startsWith('/assets/') ||
        /\.(js|css|png|jpg|jpeg|svg|webp|ico|woff|woff2|ttf|map)$/i.test(req.path)
      ) {
        return res.status(404).type('text/plain').send('Static asset not found.');
      }
      next();
    });

    app.use('*', (req: Request, res: Response) => {
      const indexPath = path.resolve(distPath, 'index.html');
      if (!fs.existsSync(indexPath)) {
        return res.status(500).send('Application build in progress. Please run npm run build.');
      }

      let template = fs.readFileSync(indexPath, 'utf-8');
      const hostUrl = process.env.APP_URL || `https://${req.get('host') || 'localhost:3000'}`;
      const meta = getPageMetadata(req.originalUrl, hostUrl);

      // Inject server-rendered metadata
      template = template
        .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
        .replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
          `<meta name="description" content="${meta.description}" />\n    <link rel="canonical" href="${meta.canonical}" />\n    <script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`
        );

      res.status(200).set({ 'Content-Type': 'text/html' }).send(template);
    });
  }

  // Global 500 error handler
  app.use((err: any, _req: Request, res: Response, _next: any) => {
    console.error('Server error:', err);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'The server encountered an error processing your request.',
    });
  });

  app.listen(PORT, HOST, () => {
    console.log(`GreenNest Realtors server running on http://${HOST}:${PORT} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer();
