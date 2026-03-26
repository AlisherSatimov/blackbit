'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">02</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.experience.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.div
          variants={item}
          className="border border-[var(--border)] p-8 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
                  Raqamli Ta&apos;limni Rivojlantirish Markazi
                </span>
                <span className="font-mono text-xs tracking-widest text-green-500 border border-green-500/30 px-2 py-0.5">
                  {t.experience.current}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                IT Mentor &amp; Frontend Developer
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--muted)] shrink-0">Sep 2024 — Present</span>
          </div>

          <ul className="space-y-2 mb-6">
            {t.experience.tasks.map((task, i) => (
              <li key={i} className="flex gap-3 text-[var(--muted)] text-sm leading-relaxed">
                <span className="text-[var(--muted)] opacity-40 mt-1 shrink-0">—</span>
                {task}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {['React.js', 'JavaScript', 'HTML/CSS', 'Git'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
