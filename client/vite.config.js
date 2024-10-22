import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Establece la raíz en la carpeta client
  build: {
    outDir: 'dist', // La carpeta donde se generará la build
  },
});
