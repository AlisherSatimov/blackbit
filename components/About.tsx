'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const FACT_KEYS = ['age', 'experience', 'location', 'focus', 'status', 'outsideWork'] as const

export function About() {
  const { t } = useLanguage()
  const f = t.about.facts

  const facts = [
    { label: f.age, value: '24' },
    { label: f.experience, value: f.experienceValue },
    { label: f.location, value: 'Xorazm, Uzbekistan' },
    { label: f.focus, value: 'React · Next.js · TypeScript' },
    { label: f.status, value: f.statusValue },
    { label: f.outsideWork, value: f.outsideWorkValue },
  ]

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">01</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.about.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            {t.about.p1}
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            {t.about.p2}
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            {t.about.p3}
          </motion.p>
        </motion.div>

        {/* Facts — stable keys prevent remounting on language change */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {facts.map((fact, i) => (
            <motion.div
              key={FACT_KEYS[i]}
              variants={fadeUp}
              className="flex justify-between items-center py-4 border-b border-[var(--border)]"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-[var(--muted)]">
                {fact.label}
              </span>
              <span className="text-sm font-medium text-right">{fact.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
