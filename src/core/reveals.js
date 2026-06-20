import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const notHero = (el) => !el.closest('.hero')

// Hero is above the fold — animate it explicitly on load rather than via ScrollTrigger.
export function playIntro() {
  const hero = document.querySelector('.hero')
  if (!hero) return
  if (reduced) {
    gsap.set(hero.querySelectorAll('[data-reveal], [data-reveal-line] > span'), { opacity: 1, y: 0, yPercent: 0 })
    return
  }
  const lines = hero.querySelectorAll('[data-reveal-line] > span')
  const rises = hero.querySelectorAll('[data-reveal]')
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.1 })
    .fromTo(rises, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, '-=0.7')
}

export function initReveals() {
  if (reduced) {
    // Make everything visible immediately; no motion.
    gsap.set('[data-reveal], [data-reveal-line] > span', { clearProps: 'all', opacity: 1, y: 0 })
    document.querySelectorAll('[data-counter]').forEach((el) => {
      el.textContent = Number(el.dataset.counter).toLocaleString('en-US')
    })
    document.querySelectorAll('.timeline__progress').forEach((p) => gsap.set(p, { scaleY: 1 }))
    gsap.set('.accolades__grid', { opacity: 1 })
    return
  }

  // Masked line reveals (below the fold).
  document.querySelectorAll('[data-reveal-lines]').forEach((group) => {
    if (!notHero(group)) return
    const spans = group.querySelectorAll('[data-reveal-line] > span')
    gsap.fromTo(
      spans,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%' },
      }
    )
  })

  // Generic fade-up, batched (below the fold).
  const revealEls = [...document.querySelectorAll('[data-reveal]')].filter(notHero)
  ScrollTrigger.batch(revealEls, {
    start: 'top 90%',
    onEnter: (els) =>
      gsap.fromTo(
        els,
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, overwrite: true }
      ),
  })

  // Accolades — draw the constellation line left→right, then pop each star in
  // sequence (a little “landing” bounce) with its label. Horizontal, not vertical.
  document.querySelectorAll('.accolades').forEach((sec) => {
    const grid = sec.querySelector('.accolades__grid')
    const link = sec.querySelector('.accolades__link')
    const cols = [...sec.querySelectorAll('.accolade')]
    if (!grid) return
    if (link) gsap.set(link, { scaleX: 0, transformOrigin: 'left center' })
    cols.forEach((c) => {
      gsap.set(c.querySelector('.accolade__star'), { scale: 0, transformOrigin: 'center center' })
      gsap.set(
        [c.querySelector('.accolade__kicker'), c.querySelector('.accolade__lead')].filter(Boolean),
        { opacity: 0, y: 10 }
      )
    })
    gsap.set(grid, { opacity: 1 })
    const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top 80%' } })
    if (link) tl.to(link, { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, 0)
    cols.forEach((c, i) => {
      const star = c.querySelector('.accolade__star')
      const txt = [c.querySelector('.accolade__kicker'), c.querySelector('.accolade__lead')].filter(Boolean)
      const at = 0.35 + i * 0.18
      tl.to(star, { scale: 1, duration: 0.5, ease: 'back.out(2.2)' }, at)
      tl.to(txt, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.06 }, at + 0.05)
    })
  })

  // Counters.
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter)
    const obj = { v: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.v).toLocaleString('en-US')
          },
        }),
    })
  })

  // Timeline progress line.
  document.querySelectorAll('.timeline').forEach((tl) => {
    const progress = tl.querySelector('.timeline__progress')
    if (!progress) return
    gsap.to(progress, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 70%', scrub: 0.6 },
    })
  })

  // Subtle parallax.
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax) || 60
    gsap.to(el, {
      yPercent: -amount / 10,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  })
}

// Helper used by sections to wrap a string in a masked-line reveal span.
export function line(text) {
  return `<span data-reveal-line><span>${text}</span></span>`
}
