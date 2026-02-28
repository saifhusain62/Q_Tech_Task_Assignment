import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
   css: {
    transformer: 'postcss',  // Use postcss instead of lightningcss
  },
  build: {
    cssMinify: 'esbuild',    // Use esbuild for CSS minification
  }
})
