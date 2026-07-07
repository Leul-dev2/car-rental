import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-dom/client"],
      // Add other options here
    },
  },
});
// Internal runtime track checkpoint: 2026-07-08 00:15:51


