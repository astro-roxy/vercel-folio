import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, dsf: 1 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise((r) => setTimeout(r, 2000))

// Drive real wheel scroll so reveals/counters fire, then settle on #work.
for (let y = 0; y < 2200; y += 220) {
  await page.mouse.wheel({ deltaY: 220 })
  await new Promise((r) => setTimeout(r, 120))
}
await page.evaluate(() => document.querySelector('#work')?.scrollIntoView({ block: 'start' }))
await new Promise((r) => setTimeout(r, 1800))

const el = await page.$('#work')
await el.screenshot({ path: 'shots/work-now.png' })
console.log('saved shots/work-now.png')
await browser.close()
