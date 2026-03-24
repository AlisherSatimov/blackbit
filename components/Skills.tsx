'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Skills() {
  const { t } = useLanguage()

  const categoryLabels: Record<string, string> = {
    Frontend: t.skills.categories.frontend,
    'State & Data': t.skills.categories.stateData,
    Styling: t.skills.categories.styling,
    Tools: t.skills.categories.tools,
  }

  const levelLabel: Record<string, string> = {
    Advanced: t.skills.advanced,
    Intermediate: t.skills.intermediate,
  }

  const levelColor: Record<string, string> = {
    Advanced: 'text-[var(--foreground)]',
    Intermediate: 'text-[var(--muted)]',
  }

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">03</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.skills.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            className="border border-[var(--border)] p-6 hover:border-[var(--muted)] hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-mono text-xs tracking-widest uppercase text-[var(--muted)] mb-4">
              {categoryLabels[group.category] ?? group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${levelColor[skill.level]}`}>
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)] opacity-60">
                    {levelLabel[skill.level] ?? skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
