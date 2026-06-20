import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SECTIONS = ['work', 'education', 'video', 'writing', 'speaking', 'about', 'gallery', 'community']

export function initNav(lenis) {
  const header = document.getElementById('header')
  const toggle = document.getElementById('menuToggle')
  const overlay = document.getElementById('menuOverlay')

  // Smooth anchor scrolling through Lenis.
  const scrollTo = (hash) => {
    if (hash === '#top') {
      lenis.scrollTo(0)
      return
    }
    const target = document.querySelector(hash)
    if (target) lenis.scrollTo(target, { offset: -10 })
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href')
      if (hash.length > 1 || hash === '#top') {
        e.preventDefault()
        closeMenu()
        scrollTo(hash)
      }
    })
  })

  // Header condense + tuck-on-scroll-down.
  let lastY = 0
  lenis.on('scroll', ({ scroll }) => {
    header.classList.toggle('is-condensed', scroll > window.innerHeight * 0.6)
    if (scroll > lastY && scroll > window.innerHeight) {
      header.classList.add('is-tucked')
    } else {
      header.classList.remove('is-tucked')
    }
    lastY = scroll
  })

  // Active-section highlight.
  const links = [...document.querySelectorAll('.nav a[data-nav]')]
  const setActive = (id) => {
    links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`))
  }
  SECTIONS.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    ScrollTrigger.create({
      trigger: el,
      start: 'top 45%',
      end: 'bottom 45%',
      onToggle: (self) => self.isActive && setActive(id),
    })
  })

  // Mobile menu.
  function openMenu() {
    overlay.classList.add('is-open')
    toggle.classList.add('is-open')
    toggle.setAttribute('aria-expanded', 'true')
    overlay.setAttribute('aria-hidden', 'false')
    lenis.stop()
  }
  function closeMenu() {
    overlay.classList.remove('is-open')
    toggle.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
    overlay.setAttribute('aria-hidden', 'true')
    lenis.start()
  }
  toggle.addEventListener('click', () => {
    overlay.classList.contains('is-open') ? closeMenu() : openMenu()
  })
}
