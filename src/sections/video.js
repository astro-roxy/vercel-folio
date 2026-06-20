import { videoGroups } from '../data/content.js'
import { line } from '../core/reveals.js'

function platform(url) {
  if (url.includes('instagram')) return 'Instagram'
  if (url.includes('youtube') || url.includes('youtu.be')) return 'YouTube'
  return 'Watch'
}

function card(it) {
  return `
    <a class="vcard" href="${it.url}" target="_blank" rel="noopener" data-reveal>
      <div class="vcard__media">
        <img src="${it.thumb}" alt="${it.title}" loading="lazy" width="288" height="512" />
        <span class="vcard__play" aria-hidden="true">▶</span>
        <span class="vcard__platform">${platform(it.url)}</span>
      </div>
      <div class="vcard__text">
        <div class="vcard__title">${it.title}</div>
        <div class="vcard__with">${it.with}</div>
      </div>
    </a>`
}

function linkRow(it) {
  return `
    <a class="vlink" href="${it.url}" target="_blank" rel="noopener" data-reveal>
      <span class="vlink__title">${it.title}</span>
      <span class="vlink__with">${it.with}</span>
      <span class="vlink__arrow" aria-hidden="true">↗</span>
    </a>`
}

export function renderVideo() {
  const groups = videoGroups
    .map((g) => {
      const grid = g.items?.length
        ? `<div class="videogrid">${g.items.map(card).join('')}</div>`
        : ''
      const links = g.links?.length
        ? `<div class="vlinks">${g.links.map(linkRow).join('')}</div>`
        : ''
      return `
      <div class="videogroup">
        <div class="videogroup__head" data-reveal>
          <h3 class="videogroup__title">${g.title}</h3>
          <span class="videogroup__blurb">${g.blurb}</span>
        </div>
        ${grid}
        ${links}
      </div>`
    })
    .join('')

  return `
  <section class="section--band" id="video">
    <div class="section-inner section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Video</span>
          <h2 class="section-title" data-reveal-lines>${line('My largest')} ${line('body of work.')}</h2>
        </div>
        <span class="section-index">02 · Film & reels</span>
      </div>
      ${groups}
    </div>
  </section>`
}
