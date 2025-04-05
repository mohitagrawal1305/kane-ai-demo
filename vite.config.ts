/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getBase = () => {
  // For GitHub Pages deployment
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    let branch = ''

    // Handle PR events
    if (process.env.GITHUB_EVENT_NAME === 'pull_request') {
      branch = process.env.GITHUB_HEAD_REF || ''
    } else {
      // Handle push events
      branch = process.env.GITHUB_REF?.split('/').pop() || ''
    }

    // Clean branch name for URL
    branch = branch.replace(/[^a-zA-Z0-9._-]/g, '-')
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