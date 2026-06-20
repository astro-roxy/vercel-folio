import { writing } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderWriting() {
  const rows = writing
    .map(
      (w, i) => `
      <a class="warticle" href="${w.url}" target="_blank" rel="noopener" data-reveal>
        <span class="warticle__pub">${String(i + 1).padStart(2, '0')} · ${w.publication}</span>
        <span class="warticle__title">${w.title}</span>
        <span class="warticle__blurb">${w.blurb}</span>
        <span class="warticle__arrow" aria-hidden="true">↗</span>
      </a>`
    )
    .join('')

  return `
  <section class="section" id="writing">
    <div class="section-head">
      <div>
        <span class="eyebrow">Writing</span>
        <h2 class="section-title" data-reveal-lines>${line('Words for the curious.')}</h2>
      </div>
    </div>
    <div class="writing-list">${rows}</div>
  </section>`
}
