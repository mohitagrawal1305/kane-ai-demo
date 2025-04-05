import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getBase = () => {
  // For GitHub Pages deployment
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    const branch = process.env.GITHUB_REF?.split('/').pop() || ''
    return `/${repo}/${branch}/`
  }
  // For local development
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBase(),
}) 