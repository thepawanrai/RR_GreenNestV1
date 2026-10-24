import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const whatsappNumber =
    env.WHATSAPP_PHONE_NUMBER ||
    env.VITE_WHATSAPP_PHONE_NUMBER ||
    process.env.WHATSAPP_PHONE_NUMBER ||
    process.env.VITE_WHATSAPP_PHONE_NUMBER ||
    '919235621921';

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.WHATSAPP_PHONE_NUMBER': JSON.stringify(whatsappNumber),
      'import.meta.env.VITE_WHATSAPP_PHONE_NUMBER': JSON.stringify(whatsappNumber),
      'process.env.WHATSAPP_PHONE_NUMBER': JSON.stringify(whatsappNumber),
    },
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
