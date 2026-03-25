'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useTransform(y, [0, 1], [6, -6])
  const rotateY = useTransform(x, [0, 1], [-6, 6])
  const glareX = useTransform(x, [0, 1], ['0%', '100%'])
  const glareY = useTransform(y, [0, 1], ['0%', '100%'])
  const glareOpacity = useMotionValue(0)

  const springCfg = { stiffness: 400, damping: 40 }
  const rX = useSpring(rotateX, springCfg)
  const rY = useSpring(rotateY, springCfg)

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.06), transparent 65%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
    glareOpacity.set(1)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
    glareOpacity.set(0)
  }

  return (
    <div style={{ perspective: '1000px' }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
        className="relative h-full"
      >
        {children}
        {/* Subtle glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  )
}
