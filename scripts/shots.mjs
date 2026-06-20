// Headless-Chrome verification: screenshots desktop + mobile, reports console errors,
// WebGL context loss, and failed network requests.
import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'

const URL = process.env.URL || 'http://localhost:5173/'
const OUT = 'shots'
await mkdir(OUT, { recursive: true })

const viewports = [
  { name: 'desktop', width: 1440, height: 900, dsf: 1 },
  { name: 'mobile', width: 390, height: 844, dsf: 2, mobile: true },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  headless: 'new',
  // Flags that get WebGL rendering working under headless SwiftShader.
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
})

let hadError = false

for (const vp of viewports) {
  const page = await browser.newPage()
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dsf, isMobile: !!vp.mobile, hasTouch: !!vp.mobile })

  const errors = []
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`console.error: ${m.text()}`)
  })
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
  page.on('requestfailed', (r) => errors.push(`requestfailed: ${r.url()} (${r.failure()?.errorText})`))

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 45000 })
  await sleep(2200) // let preloader finish + hero reveal

  // Scroll through with real wheel input (Lenis/ScrollTrigger need genuine
  // scroll events — programmatic scrollTo doesn't drive them).
  await page.mouse.move(vp.width / 2, vp.height / 2)
  const height = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < height; y += 320) {
    await page.mouse.wheel({ deltaY: 320 })
    await sleep(90)
  }
  await sleep(700)
  // Ease back to top for the top screenshot.
  for (let y = 0; y < height; y += 600) {
    await page.mouse.wheel({ deltaY: -600 })
    await sleep(40)
  }
  await sleep(700)

  await page.screenshot({ path: `${OUT}/${vp.name}-top.png` })
  await page.screenshot({ path: `${OUT}/${vp.name}-full.png`, fullPage: true })

  // WebGL sanity
  const glOk = await page.evaluate(() => {
    const c = document.getElementById('space')
    if (!c) return 'no-canvas'
    const gl = c.getContext('webgl') || c.getContext('webgl2')
    return gl ? (gl.isContextLost() ? 'context-lost' : 'ok') : 'no-context'
  })

  console.log(`\n[${vp.name}] ${vp.width}x${vp.height}`)
  console.log(`  WebGL: ${glOk}`)
  if (errors.length) {
    hadError = true
    console.log(`  ⚠️  ${errors.length} issue(s):`)
    errors.forEach((e) => console.log(`     - ${e}`))
  } else {
    console.log('  ✅ no console errors / failed requests')
  }
  await page.close()
}

await browser.close()
console.log(`\nScreenshots written to ./${OUT}/`)
process.exit(hadError ? 1 : 0)
