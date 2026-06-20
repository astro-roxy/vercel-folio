import { stats, work, brands } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderWork() {
  const statCells = stats
    .map(
      (s) => `
      <div class="stat" data-reveal>
        <div class="stat__num"><span data-counter="${s.value}">0</span><span class="suffix">${s.suffix}</span></div>
        <div class="stat__label">${s.label}</div>
      </div>`
    )
    .join('')

  const roles = work
    .map(
      (r) => `
      <article class="role" data-reveal>
        <div class="role__period">${r.period}<br /><span>${r.location}</span></div>
        <div class="role__main">
          <h3 class="role__company">${r.company}</h3>
          <div class="role__role">${r.role}</div>
          <ul class="role__points">
            ${r.points.map((p) => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      </article>`
    )
    .join('')

  const trust = brands
    .map((b) => `<span class="pill" data-reveal>${b}</span>`)
    .join('')

  return `
  <section class="section" id="work">
    <div class="section-head">
      <div>
        <span class="eyebrow">Experience</span>
        <h2 class="section-title" data-reveal-lines>${line('A life spent')} ${line('translating the sky.')}</h2>
      </div>
      <span class="section-index">01 · Selected roles · 2018–now</span>
    </div>

    <div class="stats">${statCells}</div>

    <div class="timeline">
      <span class="timeline__progress"></span>
      ${roles}
    </div>

    <div class="trustband">
      <h4 class="subhead" data-reveal>Trusted by</h4>
      <div class="pillrow">${trust}</div>
    </div>
  </section>`
}
