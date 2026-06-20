# Astro Roxy — Portfolio

A one-page portfolio for **Rashmi "Astro Roxy" Sheoran** — astronomer & science communicator
(Nuremberg, Germany). Clean black-and-white editorial theme so her colourful video thumbnails
lead the page. Built with Vite, GSAP (ScrollTrigger) and Lenis smooth scroll.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview

```bash
npm run build      # outputs to dist/
npm run preview
```

## Verify (headless Chrome)

```bash
npm run dev        # in one terminal
npm run shots      # screenshots desktop + mobile to shots/, reports console errors
```

## Deploy (GitHub → Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel. Framework preset **Vite** is auto-detected (`vercel.json` is included):
   build `npm run build`, output `dist`.
3. Done — it's a static one-pager, no SPA rewrite needed.

## Structure

- `index.html` — shell: fixed WebGL `<canvas>`, grain/vignette overlays, nav, preloader.
- `src/data/content.js` — **single source of truth** for all copy & links. Edit here.
- `src/three/` — `space.js` (scene + parallax star layers) and `celestial.js` (the centerpiece).
- `src/core/` — `lenis.js`, `nav.js`, `cursor.js`, `reveals.js`.
- `src/sections/` — one module per section, rendered into `#view` by `src/main.js`.
- `src/styles/` — `tokens.css` (design tokens), `base`, `layout`, `components`, `sections`.

## TODO / assets to supply

- Replace `public/assets/portrait.svg` with a real portrait (`portrait.jpg`/`.webp`) and update the
  `<img>` in `src/sections/hero.js`.
- Video cover images live in `public/assets/thumbs/` (pulled from the original site). To add/replace a
  card, drop a 9:16 image there and point its `thumb` field in `videoGroups` (`content.js`) at it. Items
  with no `thumb` render as text links (e.g. the YouTube "Films & guides").
