'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number   // current pos
  tx: number; ty: number // target pos
  vx: number; vy: number // velocity
  r: number              // radius
}

const SPRING  = 0.058   // spring force toward target
const DAMP    = 0.86    // damping (< 1 = friction)
const M_RAD   = 110     // mouse repulsion radius (px)
const M_STR   = 9       // mouse repulsion strength
const GAP     = 6       // pixel gap between sampled particles

export function HeroTerminal() {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const cvRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef   = useRef(0)

  useEffect(() => {
    const wrap = wrapRef.current
    const cv   = cvRef.current
    if (!wrap || !cv) return
    const ctx  = cv.getContext('2d')
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const W   = wrap.offsetWidth
    const H   = wrap.offsetHeight

    // Guard: element hidden (display:none) or not yet laid out
    if (W === 0 || H === 0) return

    cv.width  = W * DPR
    cv.height = H * DPR
    cv.style.width  = `${W}px`
    cv.style.height = `${H}px`
    ctx.scale(DPR, DPR)

    let alive = true

    const init = async () => {
      await document.fonts.ready

      /* ── Sample >_ pixels from offscreen canvas ── */
      const off = Object.assign(document.createElement('canvas'), { width: W, height: H })
      const oc  = off.getContext('2d')!
      const fs  = Math.min(W * 0.50, H * 0.62)
      oc.fillStyle = '#fff'
      oc.font      = `900 ${fs}px "JetBrains Mono", "Courier New", monospace`
      oc.textAlign    = 'center'
      oc.textBaseline = 'middle'
      oc.fillText('>_', W / 2, H / 2)

      const { data } = oc.getImageData(0, 0, W, H)
      const particles: Particle[] = []

      for (let y = 0; y < H; y += GAP) {
        for (let x = 0; x < W; x += GAP) {
          if (data[(y * W + x) * 4 + 3] > 110) {
            /* start scattered, converge to target */
            const angle  = Math.random() * Math.PI * 2
            const radius = Math.random() * Math.max(W, H) * 0.85
            particles.push({
              x: W / 2 + Math.cos(angle) * radius,
              y: H / 2 + Math.sin(angle) * radius,
              tx: x + (Math.random() - 0.5) * 0.6,
              ty: y + (Math.random() - 0.5) * 0.6,
              vx: 0, vy: 0,
              r: Math.random() * 1.1 + 0.5,
            })
          }
        }
      }

      /* ── Render loop ── */
      const draw = () => {
        if (!alive) return
        rafRef.current = requestAnimationFrame(draw)
        ctx.clearRect(0, 0, W, H)

        const dark = !document.documentElement.classList.contains('light') ||
                      document.documentElement.classList.contains('dark')
        const rgb  = dark ? '255,255,255' : '12,12,12'
        const { x: mx, y: my } = mouseRef.current

        for (const p of particles) {
          /* spring toward target */
          p.vx += (p.tx - p.x) * SPRING
          p.vy += (p.ty - p.y) * SPRING

          /* mouse repulsion */
          const dx = p.x - mx
          const dy = p.y - my
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < M_RAD && d > 0.5) {
            const f = ((M_RAD - d) / M_RAD) ** 1.6 * M_STR
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }

          p.vx *= DAMP
          p.vy *= DAMP
          p.x  += p.vx
          p.y  += p.vy

          /* alpha: dim when settled, bright when moving */
          const speed = Math.abs(p.vx) + Math.abs(p.vy)
          const alpha = Math.min(0.35 + speed * 0.18 + 0.5, 1).toFixed(2)

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rgb},${alpha})`
          ctx.fill()
        }
      }

      draw()
    }

    init()

    /* ── Mouse tracking ── */
    const onMove  = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    cv.addEventListener('mousemove',  onMove)
    cv.addEventListener('mouseleave', onLeave)

    return () => {
      alive = false
      cancelAnimationFrame(rafRef.current)
      cv.removeEventListener('mousemove',  onMove)
      cv.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="flex items-center justify-center w-full min-h-[280px] lg:min-h-[440px]"
    >
      <canvas ref={cvRef} className="block cursor-none" />
    </div>
  )
}
