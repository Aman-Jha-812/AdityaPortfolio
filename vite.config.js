import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project repo at:
//   https://Aman-Jha-812.github.io/AdityaPortfolio/
// so the production build needs that base path. In local dev we keep base '/'.
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/AdityaPortfolio/' : '/',
  server: {
    port: 5173,
    open: false,
  },
}))
