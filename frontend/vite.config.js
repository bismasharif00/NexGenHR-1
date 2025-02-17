import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    hmr: {
      overlay: false, // Disable overlay for HMR errors
    },
  },
})
