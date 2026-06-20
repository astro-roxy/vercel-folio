import { gallery } from '../data/content.js'
import { line } from '../core/reveals.js'

// "In the field" — a curated mosaic. Each tile shows a real photo when `src`
// is set in content.js; until then it shows its caption as a labelled placeholder.
export function renderGallery() {
  const tiles = gallery
    .map((g) => {
      const span = `--span:${g.span || 1};--rows:${g.rows || 1};`
      const inner = g.src
        ? `<img src="${g.src}" alt="${g.caption}" loading="lazy" /><span class="tile__cap tile__cap--over">${g.caption}</span>`
        : `<span class="tile__cap">${g.caption}</span>`
      const cls = g.src ? 'tile tile--filled' : 'tile tile--empty'
      return `<figure class="${cls}" style="${span}" data-reveal>${inner}</figure>`
    })
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
