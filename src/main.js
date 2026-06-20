import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { renderHero } from './sections/hero.js'
import { renderAccolades } from './sections/accolades.js'
import { renderWork } from './sections/work.js'
import { renderEducation } from './sections/education.js'
import { renderVideo } from './sections/video.js'
import { renderWriting } from './sections/writing.js'
import { renderSpeaking } from './sections/speaking.js'
import { renderAbout } from './sections/about.js'
import { renderGallery } from './sections/gallery.js'
import { renderCommunity } from './sections/community.js'
import { renderContact } from './sections/contact.js'

import { initSmoothScroll } from './core/lenis.js'
import { initNav } from './core/nav.js'
import { initCursor, initMagnetic } from './core/cursor.js'
import { initReveals, playIntro } from './core/reveals.js'
import { initCosmos, initEducationToggle } from './core/cosmos.js'

document.documentElement.classList.add('js')
// If anything throws before content is revealed, drop the js flag so the
// CSS fallback shows everything rather than leaving a blank page.
window.addEventListener('error', () => document.documentElement.classList.remove('js'))

// Expose ScrollTrigger so UI toggles can refresh layout after expanding.
window.ScrollTrigger = ScrollTrigger

// 1 — Render all sections into the view.
const view = document.getElementById('view')
view.innerHTML = [
  renderHero(),
  renderAccolades(),
  renderWork(),
  renderEducation(),
  renderVideo(),
  renderWriting(),
  renderSpeaking(),
  renderAbout(),
  renderGallery(),
  renderCommunity(),
  renderContact(),
].join('')

// Prime masked-line reveals so text is hidden before its animation runs.
gsap.set('[data-reveal-line] > span', { yPercent: 110 })

// 2 — Smooth scroll + interactions.
const lenis = initSmoothScroll()
lenis.stop()
initCursor()
initMagnetic(document)
initNav(lenis)
initCosmos()
initEducationToggle()

// Keep ScrollTrigger correct once webfonts settle.
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => ScrollTrigger.refresh())
}

// 3 — Preloader, then unveil.
let preloaderStarted = false
function runPreloader() {
  if (preloaderStarted) return
  preloaderStarted = true
  const pre = document.getElementById('preloader')
  const countEl = document.getElementById('preloaderCount')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = () => {
    pre.classList.add('is-done')
    lenis.start()
    initReveals()
    ScrollTrigger.refresh()
    playIntro()
  }

  if (reduced) {
    countEl.textContent = '100'
    finish()
    return
  }

  const obj = { v: 0 }
  gsap.to(obj, {
    v: 100,
    duration: 1.3,
    ease: 'power2.inOut',
    onUpdate: () => {
      countEl.textContent = String(Math.floor(obj.v)).padStart(2, '0')
    },
    onComplete: () => {
      gsap.delayedCall(0.15, finish)
    },
  })
}

window.addEventListener('load', runPreloader)
// Safety net if 'load' already fired or stalls.
if (document.readyState === 'complete') runPreloader()
