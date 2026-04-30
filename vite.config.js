import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@tailwindcss/oxide', '@tailwindcss/oxide-win32-x64-msvc']
  },
  ssr: {
    external: ['@tailwindcss/oxide', '@tailwindcss/oxide-win32-x64-msvc']
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],
})