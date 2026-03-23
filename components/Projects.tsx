'use client'

import { motion } from 'framer-motion'
import { projects, Project } from '@/lib/data'

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

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[var(--muted)]">{project.number}</span>
          <span
            className={`font-mono text-xs tracking-widest border px-2 py-0.5 ${statusStyle[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:opacity-70 transition-opacity">
          {project.name}
        </h3>

        <p className="text-[var(--muted)] leading-relaxed max-w-2xl mb-6">
          {project.description}
        </p>

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

      {project.link && (
        <motion.div
          className="text-2xl text-[var(--muted)] group-hover:text-[var(--foreground)] shrink-0"
          whileHover={{ x: 4, y: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          ↗
        </motion.div>
      )}
    </div>
  )

  if (project.link) {
    return (
      <motion.a
        variants={item}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-[var(--border)] p-8 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      variants={item}
      className="group border border-[var(--border)] p-8 hover:border-[var(--muted)] hover:shadow-lg transition-all duration-300"
    >
      {inner}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">04</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
