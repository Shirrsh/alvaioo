
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Set base path for asset loading
  plugins: [react()],
  server: {
    port: 3000, // Optional: specify dev server port
    open: true, // Automatically open the app in the browser on server start
  },
  build: {
    outDir: 'dist', // Default output directory for build
    sourcemap: true, // Generate sourcemaps for production builds
  },
  publicDir: 'public', // Explicitly set the public directory
})
