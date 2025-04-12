import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/sairam-portfolio/' : '/',
  plugins: [react()]
}))
