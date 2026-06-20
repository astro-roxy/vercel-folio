import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssMinify: true,
  },
  server: {
    host: true,
    port: 5173,
  },
})
