'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/lib/config'
import { MagneticButton } from '@/components/MagneticButton'
import { HeroTerminal } from '@/components/HeroTerminal'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function Hero() {
  const { t } = useLanguage()
  const roles = t.roles
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const rawOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const parallaxY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 })

  // Decorative elements — move at different speeds
  const deco1Y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const deco2Y = useTransform(scrollYProgress, [0, 1], [0, -180])
  const deco3Y = useTransform(scrollYProgress, [0, 1], [0, -90])

  useEffect(() => {
    setDisplayed('')
    setDeleting(false)
  }, [roleIndex, roles])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex, roles])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-24 md:pb-16 overflow-hidden">

      {/* Mobile background — >_ particles behind text, desktop da hidden */}
      <div className="absolute inset-0 lg:hidden pointer-events-none opacity-[0.15] overflow-hidden" style={{ contain: 'layout paint' }}>
        <HeroTerminal tilt={false} className="!min-h-full h-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left — text content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: parallaxY, opacity: rawOpacity }}
        className="relative z-10 flex flex-col"
      >
        {/* Availability tag */}
        {siteConfig.available && (
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase border border-[var(--border)] px-3 py-1">
              {t.hero.available}
            </span>
          </motion.div>
        )}

        {/* Name — no initial:hidden so browser paints it immediately (LCP) */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
          Alisher
          <br />
          <span className="text-[var(--muted)]">Satimov</span>
        </h1>

        {/* Typewriter */}
        <motion.div
          variants={fadeUp}
          className="font-mono text-lg md:text-xl text-[var(--muted)] mb-10 h-8"
        >
          {displayed}
          <span className="animate-blink">_</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-12"
        >
          {t.hero.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <MagneticButton>
            <a
              href="#projects"
              className="block px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              {t.hero.viewWork}
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="block px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-mono text-sm tracking-widest uppercase hover:border-[var(--foreground)] transition-colors"
            >
              {t.hero.getInTouch}
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Right — 3D Terminal (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        style={{ y: parallaxY }}
        className="hidden lg:block"
      >
        <HeroTerminal />
      </motion.div>

      </div>

      {/* Scroll indicator — hidden on mobile/tablet to avoid overlap with buttons */}
      <motion.div style={{ opacity: rawOpacity }} className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-[var(--muted)]">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-[var(--muted)] animate-pulse" />
      </motion.div>
    </section>
  )
}
