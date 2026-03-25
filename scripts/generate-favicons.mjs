import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '..', 'public')

// Static SVG — dark version (no media query, always white on dark)
const SVG_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect fill="#0a0a0a" width="32" height="32" rx="5"/>
  <polyline points="6,11 14,16 6,21"
    fill="none" stroke="#ffffff" stroke-width="2.5"
    stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="17" y1="21" x2="27" y2="21"
    stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
</svg>`

const svgBuf = Buffer.from(SVG_DARK)

// PNG sizes to generate
const sizes = [16, 32, 48, 64, 180, 192, 512]
const pngBuffers = {}

console.log('Generating PNGs...')
for (const size of sizes) {
  const buf = await sharp(svgBuf)
    .resize(size, size)
    .png()
    .toBuffer()
  pngBuffers[size] = buf
  const name =
    size === 180 ? 'apple-touch-icon.png'
    : size === 192 ? 'android-chrome-192x192.png'
    : size === 512 ? 'android-chrome-512x512.png'
    : `favicon-${size}x${size}.png`
  writeFileSync(join(PUBLIC, name), buf)
  console.log(`  ✓ ${name}`)
}

// ── Build favicon.ico (16×16 + 32×32 embedded as PNG) ──────────────────────
function buildIco(pngBufs) {
  const count = pngBufs.length
  const HEADER = 6
  const DIR_ENTRY = 16
  let offset = HEADER + count * DIR_ENTRY

  const header = Buffer.alloc(HEADER)
  header.writeUInt16LE(0, 0)     // reserved
  header.writeUInt16LE(1, 2)     // type: ICO
  header.writeUInt16LE(count, 4) // image count

  const dirEntries = pngBufs.map(({ size, buf }) => {
    const entry = Buffer.alloc(DIR_ENTRY)
    entry.writeUInt8(size >= 256 ? 0 : size, 0)  // width  (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)  // height (0 = 256)
    entry.writeUInt8(0, 2)   // color count
    entry.writeUInt8(0, 3)   // reserved
    entry.writeUInt16LE(1, 4)  // color planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(buf.length, 8)   // image size
    entry.writeUInt32LE(offset, 12)      // image offset
    offset += buf.length
    return entry
  })

  return Buffer.concat([header, ...dirEntries, ...pngBufs.map(p => p.buf)])
}

const icoData = buildIco([
  { size: 16, buf: pngBuffers[16] },
  { size: 32, buf: pngBuffers[32] },
  { size: 48, buf: pngBuffers[48] },
])
writeFileSync(join(PUBLIC, 'favicon.ico'), icoData)
console.log('  ✓ favicon.ico (16+32+48px embedded)')

// ── site.webmanifest ────────────────────────────────────────────────────────
const manifest = {
  name: 'Alisher Satimov',
  short_name: 'blackbit',
  icons: [
    { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  theme_color: '#0a0a0a',
  background_color: '#0a0a0a',
  display: 'standalone',
}
writeFileSync(join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2))
console.log('  ✓ site.webmanifest')

console.log('\nDone! All favicon assets generated.')
