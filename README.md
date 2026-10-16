# GreenNest Realtors — Web Application

> **Selective Homes. Exclusive Living.**  
> Curated real estate advisory and channel-partner platform for Lucknow, Uttar Pradesh.

This repository contains the complete, production-ready website and backend application for **GreenNest Realtors**, engineered for deployment on **Hostinger’s Express Preset (Node.js 22.x)**.

---

## 1. Architecture Overview

- **Runtime:** Node.js 22.x + Express (Full-Stack)
- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons
- **Bundler:** Vite 8 + esbuild for production server bundling
- **SEO & Rendering:** Server-rendered meta injection, dynamic XML Sitemap (`/sitemap.xml`), robots.txt (`/robots.txt`), Open Graph / Twitter cards, and Schema.org JSON-LD (`RealEstateAgent`, `BreadcrumbList`, `Product`, `FAQPage`)
- **Lead Generation:** Project-attributed enquiries with anti-spam honeypot, rate limiting, and an integration adapter supporting CRM webhooks, local memory buffering, and instant prefilled WhatsApp engagement (+91 92356 21921).

---

## 2. Directory Structure

```
├── .env.example                  # Environment configuration template
├── index.html                    # HTML entry point with synchronized metadata
├── metadata.json                 # AI Studio applet metadata & capabilities
├── package.json                  # Scripts & dependencies
├── tsconfig.json                 # Strict TypeScript configuration
├── vite.config.ts                # Vite frontend bundler config
├── server.ts                     # Full-Stack Express entry point (Dev + Prod)
├── PROJECT_VERIFICATION_REPORT.md# Source audit and verification matrix
├── public/
│   ├── favicon.svg               # Brand monogram favicon
│   └── images/
│       └── greennest-logo.svg    # High-resolution brand logo SVG
└── src/
    ├── App.tsx                   # Main application router & SEO title controller
    ├── main.tsx                  # React DOM bootstrap
    ├── index.css                 # Tailwind CSS v4 design system & theme tokens
    ├── types/
    │   └── index.ts              # Data contracts for Projects, Articles, Leads, FAQs
    ├── data/
    │   ├── projects.ts           # Centralized data model for all 8 Shalimar projects
    │   ├── articles.ts           # 10 educational articles and guides
    │   └── faqs.ts               # Categorized FAQ repository
    ├── components/common/
    │   ├── Header.tsx            # Navigation, trust strip, and consultation CTA
    │   ├── Footer.tsx            # Comprehensive sitemap, RERA notices, and disclaimers
    │   ├── ProjectCard.tsx       # Zero-pill editorial project showcase card
    │   ├── AdvisorCard.tsx       # Verified advisor profile card for Athar Mansoor
    │   ├── LeadForm.tsx          # Project-attributed lead capture with honest response handling
    │   ├── LeadModal.tsx         # Global consultation modal dialog
    │   ├── Breadcrumbs.tsx       # Semantic navigation breadcrumbs
    │   └── StickyMobileCTA.tsx   # Mobile quick-action bar (Call, WhatsApp, Consult)
    └── pages/
        ├── HomePage.tsx          # Complete 12-section blueprint from Master Document
        ├── ProjectsPage.tsx      # Curated projects index with interactive category filtering
        ├── ProjectDetailPage.tsx # Dedicated landing pages with project vs. township amenities
        ├── AboutPage.tsx         # Advisory philosophy and channel partner standing
        ├── NriCornerPage.tsx     # Remote coordination, FEMA rules, and legal boundaries
        ├── BuyersGuidePage.tsx   # Carpet area math and due diligence checklist
        ├── HomeLoanPage.tsx      # Bank APF codes and loan preparation guidance
        ├── InsightsPage.tsx      # Educational blog hub with category filters
        ├── ArticleDetailPage.tsx # In-depth article reader with author credentials
        ├── FaqsPage.tsx          # Categorized FAQ hub with keyword search
        ├── ContactPage.tsx       # Direct phone, WhatsApp, email, and consultation booking
        ├── PrivacyPolicyPage.tsx # Starter privacy policy reflecting form handling
        ├── TermsPage.tsx         # Terms of website use and channel-partner scope
        ├── DisclaimerPage.tsx    # Statutory UP-RERA and pricing disclaimers
        └── NotFoundPage.tsx      # Custom 404 page with navigation fallbacks
```

---

## 3. Local Development

### Prerequisites
- Node.js 22.x (or 20.x+)
- npm 10.x+

### Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   The application starts on `http://localhost:3000` with Express running and Vite dev middleware attached.

---

## 4. Production Build & Verification

To verify that the application compiles and runs in a production environment:

1. Build both client assets and the Node 22 server:
   ```bash
   npm run build
   ```
   This generates:
   - `dist/` (Optimized client HTML, CSS, JavaScript, and static assets)
   - `server.js` (Compiled standalone Node.js 22 Express server)

2. Test the production server locally:
   ```bash
   npm start
   ```
   Verify:
   - Homepage: `http://localhost:3000/`
   - Health check: `http://localhost:3000/health`
   - XML Sitemap: `http://localhost:3000/sitemap.xml`
   - Robots: `http://localhost:3000/robots.txt`

---

## 5. Hostinger Deployment Instructions (Express Preset)

Follow these exact steps in your Hostinger Cloud / VPS or Web Application panel:

### Step 1: Create or Select Application
1. In the Hostinger dashboard, choose **Node.js Web App** or **Git Deployment**.
2. Select **Framework preset:** `Express`.
3. Select **Node.js version:** `22.x`.
4. Select **Branch:** `main`.
5. Select **Root directory:** `/`.

### Step 2: Configure Build & Start Commands
Hostinger uses standard npm scripts from `package.json`:
- **Build command:** `npm run build`
- **Start command:** `npm start`
- Hostinger automatically sets `process.env.PORT`. The application binds to `process.env.PORT || 3000` and `0.0.0.0`.

### Step 3: Configure Environment Variables
Under the **Environment Variables** section in Hostinger, set:
- `NODE_ENV`: `production`
- `APP_URL`: `https://your-greennest-domain.com` *(Replace with your confirmed GreenNest domain. Do NOT use realtyexperts.online!)*
- `CRM_WEBHOOK_URL`: *(Optional URL to forward leads to your CRM, Zapier, or Make)*
- `EMAIL_NOTIFICATION_DESTINATION`: `greennestlko@gmail.com`

### Step 4: Deploy
Click **Deploy**. Hostinger will clone the repository, run `npm install`, execute `npm run build`, and launch the Express application via `npm start`.

---

## 6. Endpoints Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | Homepage with server-injected SEO metadata |
| `/projects/:slug` | `GET` | Dedicated landing page for each curated project |
| `/health` | `GET` | Health endpoint returning uptime, status, and environment |
| `/sitemap.xml` | `GET` | Dynamic XML sitemap listing all canonical URLs |
| `/robots.txt` | `GET` | Search engine crawler instructions linking to sitemap |
| `/api/enquiry` | `POST` | Project-attributed lead capture with honeypot & CRM adapter |

---

## 7. Compliance & Legal Safeguards

1. **RERA Disclosure:** All projects feature their UP-RERA registration status. Where filings are under verification, the project is explicitly marked as *“Under Verification”* without fabricated numbers.
2. **Channel Partner Status:** GreenNest is designated as *“Authorised Channel Partner”*. No claims of exclusivity are made.
3. **Price Disclaimers:** All prices are explicitly identified as indicative benchmarks subject to official developer confirmation.
4. **No Financial Guarantees:** No statements guaranteeing property appreciation, rental yields, or loan approvals appear anywhere on the platform.
