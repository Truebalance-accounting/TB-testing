import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets are loaded relatively, 
  // preventing 404 errors when deployed to GitHub Pages subdirectories (e.g. /TB-testing/)
  base: './', 
});