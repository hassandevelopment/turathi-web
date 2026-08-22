// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Static site. TODO: deploy to Cloudflare Pages (No Vercel).
// Build command: npm run build, output dir: dist. Not deployed yet.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});