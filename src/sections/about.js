import { about, profile } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderAbout() {
  const note = about.note.map((p) => `<p data-reveal>${p}</p>`).join('')
  const hobbies = about.hobbies.map((h) => `<span class="chip" data-reveal>${h}</span>`).join('')
  const langs = profile.languages.map((l) => l.native).join(' · ')

  return `
  <section class="section" id="about">
    <div class="section-head">
      <div>
        <span class="eyebrow">About</span>
        <h2 class="section-title" data-reveal-lines>${line('The person')} ${line('behind the telescope.')}</h2>
      </div>
      <span class="section-index">05 · Personal</span>
    </div>

    <div class="about-grid">
      <div class="about__note">${note}</div>
      <div class="about__side">
        <figure class="about__portrait" data-reveal>
          <img src="/assets/portrait.svg" alt="Portrait of Rashmi (Astro Roxy)" width="720" height="900" />
        </figure>
        <div class="about__trilingual" data-reveal>
          <div class="deva">${langs}</div>
          <p>${about.trilingual}</p>
        </div>
        <div>
          <h4 class="subhead" data-reveal>Off the clock</h4>
          <div class="hobbies">${hobbies}</div>
        </div>
      </div>
    </div>
  </section>`
}
