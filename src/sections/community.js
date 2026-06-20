import { volunteer } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderCommunity() {
  const items = volunteer
    .map(
      (v) => `
      <div class="vol" data-reveal>
        <div class="vol__name">${v.name}</div>
        <div class="vol__desc">${v.desc}</div>
      </div>`
    )
    .join('')

  return `
  <section class="section--band" id="community">
    <div class="section-inner section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Community</span>
          <h2 class="section-title" data-reveal-lines>${line('Giving the sky')} ${line('back to everyone.')}</h2>
        </div>
        <span class="section-index">06 · Volunteering & outreach</span>
      </div>
      <div class="vol-grid">${items}</div>
    </div>
  </section>`
}
