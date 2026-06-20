# Astro Roxy — gallery + about update

Every file here is a **direct replacement** — same paths as your repo. Copy them over.

## Files to overwrite
- `index.html`                  — adds the Caveat font
- `src/data/content.js`         — new 16-photo `gallery` array
- `src/sections/gallery.js`     — pinned-wall renderer
- `src/sections/about.js`       — portrait swap + quick-facts strip
- `src/styles/sections.css`     — full file, gallery + about blocks updated

## Images
Copy the 17 files in `public/assets/gallery/` into your repo's
`public/assets/gallery/`.

Then `npm run dev`.

### Adding more photos later
Drop a file into `public/assets/gallery/` and add one line to the `gallery`
array in `content.js`. The collage reflows and the tilt/pin colours stay varied.

The old `astrocamp.jpg / live-show.jpg / …` files are no longer referenced —
delete them or leave them, your call.
