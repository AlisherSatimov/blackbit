'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export function Education() {
  const { t } = useLanguage()
  const ed = t.education

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">03</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{ed.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-[var(--border)] p-8 hover:border-[var(--muted)] hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase block mb-2">
              {ed.short}
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
              {ed.degree}
            </h3>
            <p className="text-sm text-[var(--muted)]">{ed.specialization}</p>
          </div>
          <span className="font-mono text-xs text-[var(--muted)] shrink-0">{ed.period}</span>
        </div>

        <p className="text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-6">
          {ed.university}
        </p>
      </motion.div>
    </section>
  )
}
