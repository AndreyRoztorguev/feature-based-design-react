import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@/api': '/src/api',
      '@/router': 'src/app/router',
      '@/icons': '/src/assets/icons',
      '@/images': '/src/assets/images',
      '@/assets': '/src/assets',
      '@/UI': '/src/components/UI',
      '@/Layouts': '/src/components/Layouts',
      '@/components': '/src/components',
      '@/containers': '/src/containers',
      '@/features': '/src/features',
      '@/hooks': '/src/hooks',
      '@/services': '/src/services',
      '@/styles': '/src/styles',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
      '@/app': '/src/app',
      '@': '/src',
    },
  },
});
