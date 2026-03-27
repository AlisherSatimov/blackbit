'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springCfg = { stiffness: 700, damping: 32, mass: 0.3 }
  const x = useSpring(cursorX, springCfg)
  const y = useSpring(cursorY, springCfg)

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(true)
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(false)
      }
    }

    const onMouseDown = () => setClicked(true)
    const onMouseUp = () => setClicked(false)
    const onMouseLeaveWindow = () => setVisible(false)
    const onMouseEnterWindow = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onMouseEnterWindow)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', onMouseEnterWindow)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: clicked ? 0.85 : 1,
      }}
      transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.1 } }}
    >
      <motion.span
        className="font-mono text-sm font-bold leading-none text-[var(--foreground)] block"
        style={{ rotate: 45, letterSpacing: '0.14em' }}
        animate={{
          textShadow: hovered
            ? [
                '0 0 8px var(--foreground)',
                '0 0 16px var(--foreground)',
                '0 0 8px var(--foreground)',
              ]
            : '0 0 0px transparent',
          scale: hovered ? 1.2 : 1,
        }}
        transition={{
          textShadow: hovered
            ? { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.2 },
          scale: { type: 'spring', stiffness: 400, damping: 20 },
        }}
      >
        &lt;<span style={{ display: 'inline-block', transform: 'scaleX(1.2)', transformOrigin: 'left center' }}>-</span>
      </motion.span>
    </motion.div>
  )
}
