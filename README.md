# Astro Roxy — Portfolio

Personal portfolio for **Rashmi Sheoran ("Astro Roxy")** — astronomer & science
communicator (Nuremberg, Germany). A fast, single-page Vite site: vanilla-JS section
renderers, a single content source of truth, custom cursor, preloader, smooth scroll,
and scroll reveals. Clean black-and-white editorial theme so the colourful video
thumbnails and field photos lead the page. The starfield is pure CSS — no WebGL — so
the page stays light.

## Stack
- [Vite](https://vitejs.dev/) — dev server & build
- Vanilla JS (ES modules) — no framework
- [GSAP](https://gsap.com/) — reveal & cursor animation
- [Lenis](https://lenis.darkroom.engineering/) — smooth scroll
- Plain CSS (`src/styles/`)
- Fonts: Zodiak + Satoshi (Fontshare), Noto Serif Devanagari & Caveat (Google Fonts)
- Deployed on Vercel (`vercel.json`)

## Getting started
```bash
npm install
npm run dev        # local dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the build
```

## Verify (headless Chrome)
```bash
npm run dev        # in one terminal
npm run shots      # screenshots desktop + mobile to shots/, reports console errors
```

## Project structure
```
public/
  assets/
    gallery/       # "In the field" collage photos (p01…p27) + p01-about.jpg (portrait)
    thumbs/        # video thumbnails (9:16)
    og.svg         # social-share image
  favicon.svg
src/
  main.js          # boot: mounts sections into #view, starts cursor, preloader, nav, smooth scroll
  data/
    content.js     # SINGLE source of truth — all copy, links, stats, gallery
  sections/        # one renderer per page section
    hero.js  work.js  video.js  writing.js  speaking.js
    education.js  accolades.js  community.js  gallery.js  about.js  contact.js
  core/            # cosmos.js (CSS starfield parallax + coursework toggle), cursor.js,
                   # lenis.js (smooth scroll), nav.js, reveals.js (scroll reveals)
  styles/          # tokens.css, base.css, layout.css, components.css, sections.css
index.html
vercel.json
```

## Editing content
All text, links, stats and the photo gallery live in **`src/data/content.js`**. You rarely
need to touch the section renderers in `src/sections/` — just edit the data. The main exports:

- `profile` — name, role, location, email, headline, `honors`, `trustedBy`, languages, socials
- `stats` — the headline numbers (followers, posts, views, schools)
- `brands` — the "Trusted by" logos row
- `work` — experience entries (`company`, `role`, `period`, `location`, `points[]`)
- `education` — degrees, coursework (`courseworkPrimary` / `courseworkMore` toggle), `training`
- `volunteer` — community & volunteering list
- `gallery` — the "In the field" photos (see below)
- `videoGroups` — video sections (`items` render as thumbnail cards, `links` as text links)
- `writing`, `speaking` — articles, podcasts and talks
- `about` — bio paragraphs (`note`), `trilingual` line, `hobbies`

### Gallery ("In the field")
A pinned-wall collage. Photos live in `public/assets/gallery/` and show fully (no crop),
each in a print-style frame with a pushpin and a slight tilt. To add one: drop the image
in that folder and add a line to the `gallery` array in `content.js`:

```js
{ src: '/assets/gallery/p30.jpg', caption: 'New moment' },
```

The CSS columns layout reflows automatically and `:nth-child` rules keep the tilt and
pushpin colours varied — no per-photo styling needed.

### About
The portrait is `public/assets/gallery/p01-about.jpg`. The quick-facts strip
("Based in / Currently / Working in") is hard-coded in `src/sections/about.js`; the bio
paragraphs and hobbies come from `about` in `content.js`.

### Video thumbnails
Cover images live in `public/assets/thumbs/` (9:16). To add or replace a card, drop an
image there and point its `thumb` field in `videoGroups` (`content.js`) at it. Items with
no `thumb` render as text links (e.g. the YouTube "Films & guides").

## Deployment (GitHub → Vercel)
1. Push this repo to GitHub.
2. Import it in Vercel — framework preset **Vite** is auto-detected (`vercel.json` is included):
   build `npm run build`, output `dist`. No SPA rewrite needed — it's a static one-pager.
3. Pushing to the connected Vercel project builds and deploys automatically.
