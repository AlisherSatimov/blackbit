'use client'

import { useEffect, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

interface Particle {
  x: number; y: number   // current pos
  tx: number; ty: number // target pos
  vx: number; vy: number // velocity
  r: number              // radius
  phase: number          // unique wave phase offset
}

const SPRING    = 0.058
const DAMP      = 0.86
const M_RAD     = 110
const M_STR     = 9
const GAP       = 6
const WAVE_AMP  = 2.8

interface Props {
  className?: string
  tilt?: boolean
}

export function HeroTerminal({ className = '', tilt = true }: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const cvRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef   = useRef(0)

  /* ── Scroll tilt (rotateX) + Mouse lean (rotateY) ── */
  const rotX = useSpring(0, { stiffness: 60, damping: 12, mass: 1.2 })
  const rotY = useSpring(0, { stiffness: 50, damping: 10, mass: 1.2 })

  useEffect(() => {
    let lastY = window.scrollY
    let scrollTimer: ReturnType<typeof setTimeout>

    const onScroll = () => {
      const delta = window.scrollY - lastY
      lastY = window.scrollY
      rotX.set(Math.max(-28, Math.min(28, -delta * 2.8)))
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => rotX.set(0), 450)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return
      const cx = window.innerWidth / 2
      rotY.set(((e.clientX - cx) / cx) * 10)
    }

    const onMouseLeave = () => rotY.set(0)

    window.addEventListener('scroll',     onScroll,    { passive: true })
    window.addEventListener('mousemove',  onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      clearTimeout(scrollTimer)
      window.removeEventListener('scroll',     onScroll)
      window.removeEventListener('mousemove',  onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [rotX, rotY])

  /* ── Canvas particle system ── */
  useEffect(() => {
    const wrap = wrapRef.current
    const cv   = cvRef.current
    if (!wrap || !cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    const isMobile = wrap.offsetWidth < 768
    const DPR = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)
    const gap = GAP
    const waveAmpLocal = WAVE_AMP
    const W   = wrap.offsetWidth
    const H   = wrap.offsetHeight
    if (W === 0 || H === 0) return

    cv.width  = W * DPR
    cv.height = H * DPR
    cv.style.width  = `${W}px`
    cv.style.height = `${H}px`
    ctx.scale(DPR, DPR)

    let alive = true
    let frameCount = 0

    const init = async () => {
      await document.fonts.ready

      /* sample >_ pixels from offscreen canvas */
      const off = Object.assign(document.createElement('canvas'), { width: W, height: H })
      const oc  = off.getContext('2d')!
      const fs  = Math.min(W * 0.65, H * 0.81)
      oc.fillStyle    = '#fff'
      oc.font         = `900 ${fs}px "JetBrains Mono", "Courier New", monospace`
      oc.textAlign    = 'center'
      oc.textBaseline = 'middle'
      oc.fillText('>_', W / 2, H / 2)

      const { data } = oc.getImageData(0, 0, W, H)
      const particles: Particle[] = []

      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          if (data[(y * W + x) * 4 + 3] > 110) {
            const angle  = Math.random() * Math.PI * 2
            const radius = Math.random() * Math.max(W, H) * 0.85
            particles.push({
              x: W / 2 + Math.cos(angle) * radius,
              y: H / 2 + Math.sin(angle) * radius,
              tx: x + (Math.random() - 0.5) * 0.6,
              ty: y + (Math.random() - 0.5) * 0.6,
              vx: 0, vy: 0,
              r:  Math.random() * 1.1 + 0.5,
              phase: Math.random() * Math.PI * 2,
            })
          }
        }
      }

      /* render loop */
      const t0 = performance.now()

      const draw = () => {
        if (!alive) return
        rafRef.current = requestAnimationFrame(draw)
        frameCount++
        /* throttle to ~30fps on mobile to reduce CPU usage */
        if (isMobile && frameCount % 2 !== 0) return

        ctx.clearRect(0, 0, W, H)

        const dark = document.documentElement.classList.contains('dark') ||
                     !document.documentElement.classList.contains('light')
        const rgb  = dark ? '255,255,255' : '12,12,12'
        const { x: mx, y: my } = mouseRef.current
        const t = (performance.now() - t0) / 1000

        for (const p of particles) {
          /* idle wave — disabled on mobile */
          const wx = Math.sin(t * 1.2 + p.phase) * waveAmpLocal
          const wy = Math.cos(t * 0.9 + p.phase + p.tx * 0.018) * waveAmpLocal * 0.7

          /* spring toward (target + wave) */
          p.vx += (p.tx + wx - p.x) * SPRING
          p.vy += (p.ty + wy - p.y) * SPRING

          /* mouse / touch repulsion */
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

    /* defer init — frees main thread for React hydration & LCP */
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => init(), { timeout: 800 })
    } else {
      setTimeout(() => init(), 0)
    }

    /* unified pointer tracking — window level so pointer-events-none doesn't block */
    const getPos = (clientX: number, clientY: number) => {
      const r = cv.getBoundingClientRect()
      return { x: clientX - r.left, y: clientY - r.top }
    }

    const onMouseMove   = (e: MouseEvent)  => { mouseRef.current = getPos(e.clientX, e.clientY) }
    const onTouchMove   = (e: TouchEvent)  => {
      const t = e.touches[0]
      if (t) mouseRef.current = getPos(t.clientX, t.clientY)
    }
    const onTouchStart  = (e: TouchEvent)  => {
      const t = e.touches[0]
      if (t) mouseRef.current = getPos(t.clientX, t.clientY)
    }
    const onEnd = () => { mouseRef.current = { x: -9999, y: -9999 } }

    window.addEventListener('mousemove',   onMouseMove,  { passive: true })
    window.addEventListener('mouseleave',  onEnd)
    window.addEventListener('touchstart',  onTouchStart, { passive: true })
    window.addEventListener('touchmove',   onTouchMove,  { passive: true })
    window.addEventListener('touchend',    onEnd)
    window.addEventListener('touchcancel', onEnd)

    return () => {
      alive = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove',   onMouseMove)
      window.removeEventListener('mouseleave',  onEnd)
      window.removeEventListener('touchstart',  onTouchStart)
      window.removeEventListener('touchmove',   onTouchMove)
      window.removeEventListener('touchend',    onEnd)
      window.removeEventListener('touchcancel', onEnd)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{ perspective: '900px' }}
      className={`flex items-center justify-center w-full min-h-[280px] lg:min-h-[440px] ${className}`}
    >
      {tilt ? (
        <motion.div
          initial={{ rotateX: 0, rotateY: 0 }}
          style={{ rotateX: rotX, rotateY: rotY, willChange: 'transform' }}
        >
          <canvas ref={cvRef} className="block cursor-none" />
        </motion.div>
      ) : (
        <div style={{ willChange: 'transform' }}>
          <canvas ref={cvRef} className="block cursor-none" />
        </div>
      )}
    </div>
  )
}
