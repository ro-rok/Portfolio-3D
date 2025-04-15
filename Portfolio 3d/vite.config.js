import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/Portfolio-3D/' : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          gsap: ['gsap']
        }
      }
    }
  }
})
