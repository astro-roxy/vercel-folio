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
        <h2 class="section-title" data-reveal-lines>${line('The person behind the telescope.')}</h2>
      </div>
    </div>

    <div class="about-grid">
      <div class="about__note">
        ${note}
        <div class="about__facts" data-reveal>
          <div><span>Based in</span><b>${profile.location}</b></div>
          <div><span>Currently</span><b>MSc Science Communication</b></div>
          <div><span>Working in</span><b>Video · Writing · Talks</b></div>
        </div>
      </div>
      <div class="about__side">
        <figure class="about__portrait" data-reveal>
          <img src="/assets/gallery/p01-about.jpg" alt="Portrait of Rashmi (Astro Roxy)" loading="lazy" />
          <figcaption>Rashmi — Astro Roxy</figcaption>
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
