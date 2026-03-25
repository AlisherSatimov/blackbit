'use client'

import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const springCfg = { stiffness: 300, damping: 25, mass: 0.5 }
  const x = useSpring(0, springCfg)
  const y = useSpring(0, springCfg)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      animate={{ scale: hovered ? 1.04 : 1 }}
      transition={{ scale: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
