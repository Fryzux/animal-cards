import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/animal-cards/',   // ← ОБЯЗАТЕЛЬНО для GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
