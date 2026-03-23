'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">03</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {projects.map((project) => (
          <motion.a
            key={project.name}
            variants={item}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-[var(--border)] p-8 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                {/* Number + status */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[var(--muted)]">{project.number}</span>
                  <span className="font-mono text-xs tracking-widest text-green-500 border border-green-500/30 px-2 py-0.5">
                    {project.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[var(--muted)] leading-relaxed max-w-2xl mb-6">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-2xl text-[var(--muted)] group-hover:text-[var(--foreground)] shrink-0"
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                ↗
              </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
