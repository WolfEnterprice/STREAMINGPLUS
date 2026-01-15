import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-htaccess',
      closeBundle() {
        // Copiar .htaccess al dist después del build
        try {
          copyFileSync(
            join(__dirname, 'public', '.htaccess'),
            join(__dirname, 'dist', '.htaccess')
          );
          console.log('✓ .htaccess copiado a dist/');
        } catch (error) {
          console.warn('⚠ No se pudo copiar .htaccess:', error);
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});