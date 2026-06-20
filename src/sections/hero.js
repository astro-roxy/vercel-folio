import { profile, videoGroups } from '../data/content.js'
import { line } from '../core/reveals.js'

// Pull every real thumbnail from the video groups for the hero reel strip.
function reelThumbs() {
  const thumbs = []
  videoGroups.forEach((g) => (g.items || []).forEach((it) => it.thumb && thumbs.push(it.thumb)))
  return thumbs
}

export function renderHero() {
  const trust = profile.trustedBy
    .map((b) => `<span>${b}</span>`)
    .join('<span class="hero__trust-dot">·</span>')

  const thumbs = reelThumbs()
  // Build a track wide enough to exceed any viewport, so the -50% loop is always
  // seamless (no empty gap on wide / 4K screens). One "half" is repeated until it
  // comfortably exceeds the widest common monitor, then duplicated for the loop.
  const half = []
  while (half.length < Math.max(28, thumbs.length * 2)) half.push(...thumbs)
  const strip = half
    .concat(half)
    .map((src) => `<div class="reel"><img src="${src}" alt="" loading="lazy" /></div>`)
    .join('')

  return `
  <section class="hero" id="top">
    <div class="hero__stars hero__stars--far" aria-hidden="true"></div>
    <div class="hero__stars hero__stars--near" aria-hidden="true"></div>
    <div class="hero__glow" aria-hidden="true"></div>

    <div class="hero__inner">
      <div class="hero__copy">
        <div class="hero__meta" data-reveal>
          <span class="dot"></span> ${profile.location} · Available 2026
        </div>
        <h1 class="hero__title" data-reveal-lines>
          ${line('Bring the')}
          ${line('<em>cosmos</em> down')}
          ${line('to Earth.')}
        </h1>
        <p class="hero__lead" data-reveal>
          I'm Rashmi, an astronomer &amp; science communicator turning space science into
          stories for kids and curious adults, across video, film, writing, events &amp; podcasts,
          in Hindi, English &amp; German.
        </p>
        <div class="hero__actions" data-reveal>
          <a class="btn btn--primary" href="#contact" data-magnetic="0.25">
            Work with me <span class="btn__arrow">↗</span>
          </a>
          <a class="btn btn--ghost" href="#video" data-magnetic="0.25">Watch the films</a>
        </div>
        <div class="hero__trust" data-reveal>
          <span class="hero__trust-label">Trusted by</span>
          <div class="hero__trust-names">${trust}</div>
        </div>
      </div>

      <div class="hero__aside">
        <div class="hero__motif" aria-hidden="true" data-reveal>
          <span class="motif__core"></span>
          <span class="orbit orbit--1"><i></i></span>
          <span class="orbit orbit--2"><i></i></span>
          <span class="orbit orbit--3"><i></i></span>
          <span class="motif__here"><i></i><span>you are here</span></span>
        </div>
        <a class="hero__scroll" href="#work" data-reveal aria-label="Scroll down to explore the work">
          <span class="hero__scroll-track"><i></i></span>
          <span class="hero__scroll-text">Scroll · gravity does the rest</span>
        </a>
      </div>
    </div>

    <div class="reelstrip" data-reveal>
      <div class="reelstrip__inner">
        <div class="reelstrip__rail">
          <div class="reelstrip__mask">
            <div class="reelstrip__track">${strip}</div>
          </div>
        </div>
        <div class="reelstrip__aside">
          <span class="reelstrip__label">Recent reels</span>
          <span class="reelstrip__meta">47K+ followers · 500+ films &amp; posts</span>
          <a class="reelstrip__cta" href="#video">Watch all films <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>`
}
