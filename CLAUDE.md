# CLAUDE.md — Turathi Website

## What this is
PanoPros client build. A personal-brand website for Turathi, a Bahraini
traditional-architecture designer (Instagram @turathi.bh). Confirmed paid client.

## The one job
Win him design clients (interiors and buildings rooted in Bahraini heritage).
Growing his audience is secondary. Every page pushes toward "Work with me".

## Strategy (locked)
Authority-first, NOT portfolio-first. He has no built projects yet, so the site
leads with his belief and expertise, not a Works page. Order of proof: his
manifesto, the movement, his talks, the Turathi Octagon, then his hand drawings
as receipts. A real portfolio grows in over the next year.

## Voice
His own Instagram voice: provocative but warm, plain, British spelling
(neighbourhood, human-centred). English only. Never AI-sounding. Copy is drawn
from his real captions.

## Brand (do not guess)
- Colour: deep royal NAVY pulled from his actual logo file. DO NOT use #0000FF,
  it is harsh hyperlink blue and looks cheap. White as the second colour. One
  warm accent (aged brass or muted oxblood) to be finalised. Get the real navy
  hex from the logo before styling.
- Fonts: classical, timeless, cultured feel. Working set: Cinzel (Trajan-style
  Roman caps) for the wordmark and big headings, EB Garamond for body. Both
  bundled locally via @fontsource. Times New Roman is his instinct but reads like Word on the web,
  so we upgrade the feel, not abandon it.
- Logo: his door-motif mark (navy square, white line drawing). Assets provided.

## Sitemap
Home, Work with me, The Movement (philosophy / Rebuilding the Islamic
Renaissance), Events & Sessions, The Turathi Octagon, Journal (external), About.
Contact = section on Work-with-me + footer. Works/Projects folded into About for
now. Partners strip on About.

## Homepage sections, top to bottom
1. Sticky top bar: logo, nav, "Work with me" button
2. Hero (locked): "Bahrain can grow without losing what makes it Bahrain." +
   subline + Work with me button, heritage image behind
3. The Belief: "Maybe it's not a climate issue. Maybe it's a design issue."
4. The Offer: what he designs + button
5. The Movement: teaser + link
6. Events: next session + sign up
7. The Turathi Octagon: what it is, the tiers, link
8. The Craft: row of his hand drawings + link (proof, not headline)
9. Journal: latest few Substack posts
10. Closing CTA: "Designing Bahrain like it belongs to Bahrain." + button
11. Footer: email, socials, © 2026

## Integrations (keep the backend near-zero)
- Journal: link out to his existing Substack, show the latest few posts. NO custom
  blog CMS.
- Events: Luma embed for sign-ups (collects emails he owns). No custom booking.
- Contact: simple form, spam-protected. No login, no database.

## Build in (serve the goal)
Floating "Work with me" button on mobile, real photo of him (pending his shoot),
social share image (logo + hero line), Google Analytics + UTM links, hosting
spend cap.

## Do NOT build (does not fit this site)
Dark mode toggle, breadcrumbs, site search, maps/directions, local schema,
reviews or case studies (no client work yet), app-style security (no logins/DB).
Security scope is only: HTTPS, keep keys out of code, spam protection on the form.

## Content model
Projects, Octagon entries, and editable page text live in Sanity (hosted CMS),
NOT markdown files. Turathi and his wife edit through Sanity Studio: log in,
fill a form, upload images, hit Publish. No repo, no code, no files.

## CMS (Sanity)
- Sanity free tier. Login via email/Google, not GitHub. 20 free seats covers
  Turathi, his wife, and future admins.
- Configure Sanity Studio into a simple tailored form: only the fields he needs.
- Astro pulls content from Sanity at build time. Publishing triggers a Cloudflare
  Pages rebuild (30 to 60 seconds) before the change is live. Acceptable for
  low-frequency edits.
- The scaffolded markdown collections (projects, octagon) are a temporary stub
  and get replaced by Sanity. Do not build new features on the markdown collections.

## Conventions
- Zero em-dashes anywhere.
- Stack: Astro + Tailwind, deploy Cloudflare Pages. No Vercel.
- Branches: chore/{feature}, pushed but not merged until smoke-tested.
- Placeholders for his drawings and photos until real assets arrive next week.
