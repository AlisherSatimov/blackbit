'use client'

import { motion } from 'framer-motion'
import { projects, Project } from '@/lib/data'
import { useLanguage } from '@/contexts/LanguageContext'
import { TiltCard } from '@/components/TiltCard'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const statusStyle: Record<Project['status'], string> = {
  Live: 'text-green-500 border-green-500/30',
  WIP: 'text-amber-500 border-amber-500/30',
  Archived: 'text-[var(--muted)] border-[var(--border)]',
}

function ProjectCard({ project, statusLabel, description }: {
  project: Project
  statusLabel: string
  description: string
}) {
  const inner = (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[var(--muted)]">{project.number}</span>
          <span className={`font-mono text-xs tracking-widest border px-2 py-0.5 ${statusStyle[project.status]}`}>
            {statusLabel}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:opacity-70 transition-opacity">
          {project.name}
        </h3>

        <p className="text-[var(--muted)] leading-relaxed max-w-2xl mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="md:col-span-1 flex flex-col items-end self-center">
        {project.image ? (
          <div className="relative w-full overflow-hidden border border-[var(--border)] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <img src={project.image} alt={`${project.name} preview`} loading="lazy" className="w-full object-cover object-top" />
            {project.link && (
              <motion.div
                className="absolute top-2 right-2 text-xl text-[var(--muted)] group-hover:text-[var(--foreground)]"
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                ↗
              </motion.div>
            )}
          </div>
        ) : project.link ? (
          <motion.div
            className="text-2xl text-[var(--muted)] group-hover:text-[var(--foreground)]"
            whileHover={{ x: 4, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            ↗
          </motion.div>
        ) : null}
      </div>
    </div>
  )

  if (project.link) {
    return (
      <TiltCard>
        <motion.a
          variants={item}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-[var(--border)] p-8 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
        >
          {inner}
        </motion.a>
      </TiltCard>
    )
  }

  return (
    <TiltCard>
    <motion.div
      variants={item}
      className="group border border-[var(--border)] p-8 hover:border-[var(--muted)] hover:shadow-lg transition-all duration-300"
    >
      {inner}
    </motion.div>
    </TiltCard>
  )
}

export function Projects() {
  const { t } = useLanguage()

  const descriptions = [
    t.projects.items.clinic.description,
    t.projects.items.itpark.description,
    t.projects.items.portfolio.description,
  ]

  const statusLabels: Record<Project['status'], string> = {
    Live: t.projects.status.live,
    WIP: t.projects.status.wip,
    Archived: t.projects.status.archived,
  }

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">05</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.projects.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            statusLabel={statusLabels[project.status]}
            description={descriptions[i] ?? ''}
          />
        ))}
      </motion.div>
    </section>
  )
}
