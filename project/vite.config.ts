// filepath: /c:/Users/kahve/OneDrive/Desktop/3B/project/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3Bros/',
  plugins: [react()],
});
