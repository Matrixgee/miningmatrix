import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// only if you're using Tailwind v4 (next)
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // only for Tailwind v4
  ],
})
