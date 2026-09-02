// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Static site. Production host is Cloudflare Pages (No Vercel), served at root.
// Build command: npm run build, output dir: dist.
//
// GH_PAGES=1 switches on the GitHub Pages preview build, which is served from a
// /turathi-web/ subpath, so it needs `site` + `base`. Cloudflare (the default,
// root) build leaves both unset and is unaffected.
const isGhPages = process.env.GH_PAGES === "1";

export default defineConfig({
  ...(isGhPages
    ? { site: "https://hassandevelopment.github.io", base: "/turathi-web" }
    : {}),
  vite: {
    plugins: [tailwindcss()]
  }
});