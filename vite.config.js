import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Working for GitHub Pages under /robb/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/robb/',
})
