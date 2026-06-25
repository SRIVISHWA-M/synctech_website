import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Plugin to rewrite /services/* requests to index.html to avoid Vite serving raw .tsx files
const rewriteServicesPlugin = () => ({
  name: 'rewrite-services',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      // If the request starts with /services/ and wants HTML, it's a client side navigation
      if (req.url && req.url.startsWith('/services/') && req.headers.accept?.includes('text/html')) {
        req.url = '/index.html';
      }
      next();
    });
  }
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss(), rewriteServicesPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          'react': path.resolve(__dirname, 'node_modules/react'),
          'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        }
      }
    };
});
