import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/dogs': 'http://localhost:3001', // Ajusta la URL según tu configuración
         
    },
  },
});