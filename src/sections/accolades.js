import { profile } from '../data/content.js'

// A short category label per honour (kept here so content.js stays the single
// source for the honour text itself — these just add rhythm/structure).
const KICKERS = ['World Record', 'Discovery', 'Interview']

// The three honours are drawn as a little constellation: a star per column,
// joined by a faint line, each labelled. Subtle, on-theme, and it gives the
// band an identity instead of three big lines floating in space.
export function renderAccolades() {
  const cols = profile.honors
    .map(
      (h, i) => `
      <div class="accolade">
        <span class="accolade__star" aria-hidden="true"></span>
        <span class="accolade__kicker">${KICKERS[i] || 'Highlight'}</span>
        <div class="accolade__lead">${h}</div>
      </div>`
    )
    .join('')

  return `
  <section class="section accolades" aria-label="Notable achievements">
    <div class="accolades__head">
      <span class="eyebrow">Highlights</span>
    </div>
    <div class="accolades__grid">
      <span class="accolades__link" aria-hidden="true"></span>
      ${cols}
    </div>
  </section>`
}
