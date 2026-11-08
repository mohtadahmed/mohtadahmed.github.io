import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Site is served from the root of mohtadahmed.me, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
