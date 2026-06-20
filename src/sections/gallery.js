import { gallery } from '../data/content.js'
import { line } from '../core/reveals.js'

// "In the field" — a pinned-wall collage. Each photo shows fully (no crop),
// in a print-style frame with a pushpin and a slight tilt. Rotation + pin
// colour cycle is handled in CSS via :nth-child, so this stays clean.
export function renderGallery() {
  const tiles = gallery
    .map(
      (g) => `
      <figure class="tile" data-reveal>
        <img src="${g.src}" alt="${g.caption}" loading="lazy" />
        <figcaption class="tile__cap">${g.caption}</figcaption>
      </figure>`
    )
    .join('')

  return `
  <section class="section" id="gallery">
    <div class="section-head">
      <div>
        <span class="eyebrow">In the field</span>
        <h2 class="section-title" data-reveal-lines>${line('Moments')} ${line('under the sky.')}</h2>
      </div>
      <span class="section-index">Astrocamps · shows · classrooms · stargazing</span>
    </div>
    <div class="mosaic">${tiles}</div>
  </section>`
}
