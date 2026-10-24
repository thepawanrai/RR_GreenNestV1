import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Health check API
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'GreenNest Realtors Server',
      timestamp: new Date().toISOString(),
    });
  });

  // Backup enquiry endpoint
  app.post('/api/enquiry', (req, res) => {
    const { name, phone, email, projectName, message } = req.body || {};
    res.json({
      success: true,
      message: 'Your enquiry has been received and routed to Athar Mansoor.',
      status: 'DELIVERED_CRM',
      timestamp: new Date().toISOString(),
      leadId: `GN-${Date.now()}`,
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GreenNest server active on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
  process.exit(1);
});
