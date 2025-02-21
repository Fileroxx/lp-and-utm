import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "prop-types": "prop-types/index.js"
    }
  },
  build: {
    rollupOptions: {
      external: ['prop-types']
    }
  }
});
