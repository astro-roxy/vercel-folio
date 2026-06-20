import { profile } from '../data/content.js'
import { line } from '../core/reveals.js'

export function renderContact() {
  const socials = profile.socials
    .map(
      (s) => `
      <a class="social" href="${s.url}" target="_blank" rel="noopener" data-reveal data-magnetic="0.2">
        <b>${s.label}</b>
        <span>${s.handle}</span>
      </a>`
    )
    .join('')

  return `
  <section class="section contact" id="contact">
    <div class="contact__stars" aria-hidden="true"></div>
    <div class="contact__glow" aria-hidden="true"></div>
    <div class="contact__inner">
      <span class="eyebrow contact__eyebrow" data-reveal><span class="dot"></span> Available for commissions in 2026</span>
      <h2 class="contact__head" data-reveal-lines>${line("Let's make")} ${line('<em>wonder</em> together.')}</h2>
      <p class="contact__sub" data-reveal>
        Films, brand collaborations, talks, writing or workshops, across video, events &amp; podcasts,
        in Hindi, English &amp; German.
      </p>
      <a class="contact__email" href="mailto:${profile.email}" data-reveal-lines>
        ${line(profile.email)}
      </a>
      <div class="contact__socials">${socials}</div>
    </div>
  </section>

  <footer class="footer">
    <span>© ${new Date().getFullYear()} Rashmi Sheoran · Astro Roxy</span>
    <span>Astronomer &amp; Science Communicator · ${profile.location}</span>
    <span>Designed among the stars ✦</span>
  </footer>`
}
