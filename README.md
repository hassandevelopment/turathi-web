# Turathi Website

Personal-brand site for Turathi, a Bahraini traditional-architecture designer.
See `CLAUDE.md` for the full brief, strategy, and conventions.

## Stack
- Astro (static output)
- Tailwind v4 (CSS-first tokens in `src/styles/tokens.css`)
- Cinzel and EB Garamond via `@fontsource`

## Status
Scaffold and structure stub only. Placeholder copy and grey image boxes
throughout, except the two locked lines (hero and belief) which are verbatim.
No integrations wired yet.

## Commands
- `npm run dev` start the local dev server
- `npm run build` build the static site to `dist/`
- `npm run preview` preview the production build

## Structure
- `src/pages/` one file per route (Home, Work with me, The Movement, Events,
  The Turathi Octagon, About). Journal is an external link to Substack, not a page.
- `src/components/` homepage section components, in locked order.
- `src/layouts/BaseLayout.astro` shared top bar, footer, floating mobile CTA.
- `src/content/` stubbed projects and octagon collections.

## Not wired yet (TODO)
- Analytics + UTM (BaseLayout head)
- Luma embed for events sign-ups
- Contact form on Work with me
- Substack feed on the Journal section
- Brand navy hex and logo (currently placeholders)

## Deploy
TODO: Cloudflare Pages. No Vercel. Build command `npm run build`, output `dist/`.
Not deployed yet.
