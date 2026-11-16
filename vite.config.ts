import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'wp-portfolio-theme/dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/main.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[ext]/main.[ext]'
      }
    }
  }
})
