// Dark Cosmos interactions: hero + contact starfield parallax (cursor-driven),
// and the Education "show all coursework" toggle.

export function initCosmos() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  const hero = document.querySelector('.hero')
  if (hero) {
    const far = hero.querySelector('.hero__stars--far')
    const near = hero.querySelector('.hero__stars--near')
    const motif = hero.querySelector('.hero__motif')
    let raf = null
    let cx = 0
    let cy = 0
    const apply = () => {
      raf = null
      if (far) far.style.transform = `translate(${cx * -14}px, ${cy * -14}px)`
      if (near) near.style.transform = `translate(${cx * 26}px, ${cy * 26}px)`
      if (motif) motif.style.transform = `translate(${cx * 36}px, ${cy * 36}px)`
    }
    hero.addEventListener(
      'pointermove',
      (e) => {
        const r = hero.getBoundingClientRect()
        cx = (e.clientX - r.left) / r.width - 0.5
        cy = (e.clientY - r.top) / r.height - 0.5
        if (!raf) raf = requestAnimationFrame(apply)
      },
      { passive: true }
    )
  }

  const contact = document.querySelector('.contact')
  if (contact) {
    const stars = contact.querySelector('.contact__stars')
    if (stars) {
      contact.addEventListener(
        'pointermove',
        (e) => {
          const r = contact.getBoundingClientRect()
          const x = ((e.clientX - r.left) / r.width - 0.5) * 18
          const y = ((e.clientY - r.top) / r.height - 0.5) * 18
          stars.style.transform = `translate(${x}px, ${y}px)`
        },
        { passive: true }
      )
    }
  }

  // — Rare shooting stars across the whole background. Caught, never chased.
  const meteors = document.createElement('div')
  meteors.className = 'sky-meteors'
  meteors.setAttribute('aria-hidden', 'true')
  document.body.appendChild(meteors)
  const shoot = () => {
    const m = document.createElement('span')
    m.className = 'meteor'
    m.style.top = 4 + Math.random() * 42 + 'vh'
    m.style.left = 48 + Math.random() * 48 + 'vw'
    m.style.setProperty('--len', 90 + Math.random() * 80 + 'px')
    meteors.appendChild(m)
    m.addEventListener('animationend', () => m.remove())
    setTimeout(shoot, 12000 + Math.random() * 11000)
  }
  setTimeout(shoot, 5000)
}

export function initEducationToggle() {
  const btn = document.getElementById('eduToggle')
  const more = document.getElementById('eduMore')
  if (!btn || !more) return
  const showAllLabel = btn.textContent.trim()
  btn.addEventListener('click', () => {
    const open = more.hasAttribute('hidden')
    if (open) {
      more.removeAttribute('hidden')
      btn.textContent = 'Show fewer'
      btn.setAttribute('aria-expanded', 'true')
    } else {
      more.setAttribute('hidden', '')
      btn.textContent = showAllLabel
      btn.setAttribute('aria-expanded', 'false')
    }
    // Recompute scroll positions after layout change.
    if (window.ScrollTrigger) window.ScrollTrigger.refresh()
  })
}
