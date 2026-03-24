'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/lib/config'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export function Hero() {
  const { t } = useLanguage()
  const roles = t.roles
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

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
    <section className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-24 md:pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {/* Availability tag */}
        {siteConfig.available && (
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase border border-[var(--border)] px-3 py-1">
              {t.hero.available}
            </span>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          Alisher
          <br />
          <span className="text-[var(--muted)]">Satimov</span>
        </motion.h1>

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
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-mono text-sm tracking-widest uppercase hover:border-[var(--foreground)] transition-colors"
          >
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — hidden on mobile/tablet to avoid overlap with buttons */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-[var(--muted)]">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-[var(--muted)] animate-pulse" />
      </div>
    </section>
  )
}
