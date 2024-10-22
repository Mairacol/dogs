import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dogs/', // Cambia por el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
