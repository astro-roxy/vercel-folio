import { gsap } from 'gsap'

// Custom cursor + magnetic buttons. Pointer-fine devices only.
export function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return

  const cursor = document.getElementById('cursor')
  const dot = cursor.querySelector('.cursor__dot')
  const ring = cursor.querySelector('.cursor__ring')

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  const ringPos = { x: mouse.x, y: mouse.y }

  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    gsap.set(dot, { x: mouse.x, y: mouse.y })
  })

  gsap.ticker.add(() => {
    ringPos.x += (mouse.x - ringPos.x) * 0.18
    ringPos.y += (mouse.y - ringPos.y) * 0.18
    gsap.set(ring, { x: ringPos.x, y: ringPos.y })
  })

  document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'))
  document.addEventListener('mouseenter', () => cursor.classList.remove('is-hidden'))

  const hoverTargets = 'a, button, [data-magnetic], .vcard, .podcast'
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest(hoverTargets)) cursor.classList.add('is-hover')
  })
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest(hoverTargets)) cursor.classList.remove('is-hover')
  })
}

// Magnetic effect for elements marked [data-magnetic].
export function initMagnetic(scope = document) {
  if (window.matchMedia('(pointer: coarse)').matches) return
  scope.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic) || 0.3
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.6, ease: 'power3.out' })
    })
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    })
  })
}
