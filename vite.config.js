import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const branch = process.env.BRANCH || 'main';

export default defineConfig({
  plugins: [react()],
  base: `/${branch}/`,
});
