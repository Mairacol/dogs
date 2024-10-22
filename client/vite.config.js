import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Establecer la ruta base para GitHub Pages
export default defineConfig({
  base: '/dogs/',  // Ruta base para desplegar en GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      '/dogs': 'http://localhost:3001', // Ajusta la URL según tu configuración
    },
  },
});
