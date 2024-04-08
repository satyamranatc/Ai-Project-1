// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: 
      {
        "/api": "http://localhost:5600",
        "/fapi": "http://127.0.0.1:5000",
      }
      
    ,
  },
  plugins: [react()],
});
