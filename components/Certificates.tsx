'use client'

import { motion } from 'framer-motion'
import { certificates } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">06</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.certificates.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {certificates.map((cert) => (
          <motion.a
            key={cert.name}
            variants={item}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[var(--border)] p-6 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
                  {cert.platform} × {cert.issuer}
                </span>
                <span className="font-mono text-xs text-[var(--muted)]">— {cert.year}</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
                {cert.name}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
                {t.certificates.description}
              </p>
            </div>
            <motion.div
              className="text-xl text-[var(--muted)] group-hover:text-[var(--foreground)] shrink-0"
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              ↗
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
