import { speaking } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderSpeaking() {
  const podcasts = speaking.podcasts
    .map(
      (p) => `
      <a class="podcast" href="${p.url}" target="_blank" rel="noopener" data-reveal>
        <div class="podcast__show">
          <span class="podcast__name">${p.show}</span>
          <span class="podcast__ep">${p.episode}</span>
        </div>
        <div class="podcast__title">${p.title}</div>
        <span class="podcast__listen"><span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span> Listen on Spotify <span aria-hidden="true">↗</span></span>
      </a>`
    )
    .join('')

  const talks = speaking.talks
    .map(
      (t) => `
      <a class="talk" href="${t.url}" target="_blank" rel="noopener" data-reveal>
        <span>${t.title}</span>
        <span class="arr" aria-hidden="true">↗</span>
      </a>`
    )
    .join('')

  return `
  <section class="section--band" id="speaking">
    <div class="section-inner section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Speaking</span>
          <h2 class="section-title" data-reveal-lines>${line('On mics &amp; on stage.')}</h2>
        </div>
      </div>
      <div class="speaking-grid">
        <div class="podcasts">
          <h4 class="subhead" data-reveal>Podcast interviews</h4>
          ${podcasts}
        </div>
        <div class="talks">
          <h4 class="subhead" data-reveal>Talks, panels & sessions</h4>
          <div class="talks__list">${talks}</div>
        </div>
      </div>
    </div>
  </section>`
}
