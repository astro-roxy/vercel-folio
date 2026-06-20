import { education } from '../data/content.js'
import { line } from '../core/reveals.js'

function courseCard(c) {
  return `
    <div class="course" data-reveal>
      <span class="course__title">${c.title}</span>
      ${c.tag ? `<span class="course__tag">${c.tag}</span>` : ''}
    </div>`
}

export function renderEducation() {
  const degrees = education.degrees
    .map(
      (e) => `
      <div class="degree" data-reveal>
        <div class="degree__period">${e.period}</div>
        <h3 class="degree__name">${e.degree}</h3>
        <div class="degree__place">${e.place}</div>
        <p class="degree__blurb">${e.blurb}</p>
      </div>`
    )
    .join('')

  const primary = education.courseworkPrimary.map(courseCard).join('')
  const more = education.courseworkMore.map(courseCard).join('')
  const totalCourse = education.courseworkPrimary.length + education.courseworkMore.length

  const training = education.training
    .map((t) => `<span class="pill" data-reveal>${t}</span>`)
    .join('')

  return `
  <section class="section--band" id="education">
    <div class="section-inner section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Education</span>
          <h2 class="section-title" data-reveal-lines>${line('How I learned to translate.')}</h2>
        </div>
      </div>

      <div class="degrees">${degrees}</div>

      <div class="coursework">
        <div class="coursework__head">
          <h4 class="subhead" data-reveal>Selected coursework · MSc</h4>
          <button class="coursework__toggle" id="eduToggle" type="button" aria-expanded="false">
            Show all ${totalCourse} →
          </button>
        </div>
        <div class="course-grid">${primary}</div>
        <div class="course-grid course-grid--more" id="eduMore" hidden>${more}</div>
      </div>

      <div class="training">
        <h4 class="subhead" data-reveal>Training &amp; certifications</h4>
        <div class="pillrow">${training}</div>
      </div>
    </div>
  </section>`
}
