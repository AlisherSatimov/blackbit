'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { students, Student, StudentCertificate } from '@/lib/students'
import { useLanguage } from '@/contexts/LanguageContext'

interface StudentsModalProps {
  open: boolean
  onClose: () => void
}

/** How many certificates stay visible before the fade-out and "show more". */
const CERT_PREVIEW_COUNT = 3

type Labels = ReturnType<typeof useLanguage>['t']['students']['labels']

function CertificateRow({ cert, labels }: { cert: StudentCertificate; labels: Labels }) {
  const row = (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <div className="text-sm font-medium truncate">{cert.name}</div>
        <div className="font-mono text-xs text-[var(--muted)] mt-0.5">
          {[cert.issuer, cert.year].filter(Boolean).join(' · ')}
        </div>
      </div>
      <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 shrink-0">
        {cert.type === 'it' ? labels.it : labels.language}
      </span>
    </div>
  )

  return cert.link ? (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:opacity-70 transition-opacity"
    >
      {row}
    </a>
  ) : (
    row
  )
}

function StudentBlock({ student }: { student: Student }) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const l = t.students.labels

  const collapsed = !expanded && student.certificates.length > CERT_PREVIEW_COUNT
  const visibleCertificates = collapsed
    ? student.certificates.slice(0, CERT_PREVIEW_COUNT)
    : student.certificates
  const hiddenCount = student.certificates.length - CERT_PREVIEW_COUNT
  const info = t.students.items[student.id as keyof typeof t.students.items] as {
    bio: string
    startupDescription?: string
  }

  return (
    <div className="border border-[var(--border)] p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <span className="font-mono text-xs text-[var(--muted)]">{student.number}</span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">{student.name}</h3>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-[var(--muted)] sm:text-right sm:flex-col">
          {student.age && (
            <span>
              {l.age}: {student.age}
            </span>
          )}
          {student.grade && (
            <span>
              {student.grade}-{l.grade}
            </span>
          )}
          {student.school && (
            <span>
              {l.school} {student.school}
            </span>
          )}
          {student.location && <span>{student.location}</span>}
          {student.years && (
            <span>
              {l.experience}: {student.years} {l.years}
            </span>
          )}
          {student.languages && (
            <span>
              {l.languages}: {student.languages.map((code) => l.langNames[code]).join(', ')}
            </span>
          )}
        </div>
      </div>

      <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">{info.bio}</p>

      {/* Stack */}
      <div className="mb-6">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] opacity-60">
          {l.stack}
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {student.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      {student.projects && student.projects.length > 0 && (
        <div className="mb-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] opacity-60">
            {l.projects}
          </span>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {student.projects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/project border border-[var(--border)] p-4 hover:border-[var(--foreground)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-medium">{project.name}</span>
                  <span className="text-[var(--muted)] group-hover/project:text-[var(--foreground)] transition-colors shrink-0">
                    ↗
                  </span>
                </div>
                <div className="font-mono text-[10px] text-[var(--muted)] mt-2">
                  {project.tech.join(' · ')}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Certificates */}
      {student.certificates.length > 0 && (
        <div className="mb-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] opacity-60">
            {l.certificates}
          </span>

          <div className="mt-3 divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {visibleCertificates.map((cert) => (
              <CertificateRow key={cert.name} cert={cert} labels={l} />
            ))}
          </div>

          {collapsed ? (
            <>
              {/* Peek of the next certificate, fading out */}
              <div className="relative h-11 overflow-hidden border-b border-[var(--border)]">
                <div className="blur-[2px] opacity-50 pointer-events-none select-none" aria-hidden="true">
                  <CertificateRow cert={student.certificates[3]} labels={l} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]" />
              </div>

              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="group/more w-full flex items-center justify-center gap-2 py-3 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {l.showMore} · {hiddenCount}
                <span className="transition-transform duration-300 group-hover/more:translate-y-0.5">↓</span>
              </button>
            </>
          ) : (
            <>
              <div className="border-b border-[var(--border)]" />
              {student.certificates.length > 3 && (
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="group/less w-full flex items-center justify-center gap-2 py-3 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {l.showLess}
                  <span className="transition-transform duration-300 group-hover/less:-translate-y-0.5">↑</span>
                </button>
              )}
            </>
          )}
        </div>
      )}

      {/* Startup */}
      {student.startup && (
        <div className="mb-6">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] opacity-60">
            {l.startup}
          </span>
          <a
            href={student.startup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/startup block border border-[var(--border)] p-5 mt-3 hover:border-[var(--foreground)] transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold tracking-tight">{student.startup.name}</h4>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {student.startup.url.replace('https://', '')}
                </span>
                {student.startup.tech && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {student.startup.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-[var(--muted)] border border-[var(--border)] px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xl text-[var(--muted)] group-hover/startup:text-[var(--foreground)] transition-colors">
                ↗
              </span>
            </div>
            {info.startupDescription && (
              <p className="text-[var(--muted)] text-sm leading-relaxed mt-3">
                {info.startupDescription}
              </p>
            )}
          </a>
        </div>
      )}

      <a
        href={student.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] font-mono text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
      >
        {l.portfolio}
        <span>↗</span>
      </a>
    </div>
  )
}

export function StudentsModal({ open, onClose }: StudentsModalProps) {
  const { t } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  /* The header floats above the scroll area so content blurs behind it —
     the body needs matching top padding, and the header grows with locale. */
  useEffect(() => {
    const el = headerRef.current
    if (!open || !el) return

    const measure = () => setHeaderHeight(el.offsetHeight)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [open, t])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t.students.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col w-full max-w-3xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] bg-[var(--background)] border border-[var(--border)]"
          >
            <div
              ref={headerRef}
              className="absolute top-0 left-0 right-0 z-10 flex items-start justify-between gap-6 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 md:px-8 py-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.students.title}</h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mt-2 max-w-xl">
                  {t.students.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.students.labels.close}
                className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                ✕
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto overscroll-contain px-6 md:px-8 pb-6 space-y-6"
              style={{ paddingTop: headerHeight ? headerHeight + 24 : undefined }}
            >
              {students.map((student) => (
                <StudentBlock key={student.id} student={student} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
