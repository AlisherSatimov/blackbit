'use client'

import { motion } from 'framer-motion'
import { contactLinks } from '@/lib/data'
import { siteConfig } from '@/lib/config'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Contact() {
  const emailAddress = `${siteConfig.email.user}@${siteConfig.email.domain}`

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">05</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      {/* CTA text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Let&apos;s build
          <br />
          <span className="text-[var(--muted)]">something great.</span>
        </h3>
        <p className="text-[var(--muted)] max-w-md leading-relaxed">
          Open to freelance projects, full-time opportunities, or just a good conversation
          about tech, films, or CS2.
        </p>
      </motion.div>

      {/* Links */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            variants={item}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-[var(--border)] px-6 py-4 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
          >
            <div>
              <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-1">
                {link.label}
              </span>
              <span className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                {link.handle}
              </span>
            </div>
            <motion.span
              className="text-[var(--muted)] group-hover:text-[var(--foreground)]"
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              ↗
            </motion.span>
          </motion.a>
        ))}

        {/* Email — rendered client-side only to avoid bot scraping */}
        <motion.a
          variants={item}
          href={`mailto:${emailAddress}`}
          className="group flex items-center justify-between border border-[var(--border)] px-6 py-4 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
        >
          <div>
            <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-1">
              Email
            </span>
            <span className="text-sm font-medium group-hover:opacity-70 transition-opacity">
              {emailAddress}
            </span>
          </div>
          <motion.span
            className="text-[var(--muted)] group-hover:text-[var(--foreground)]"
            whileHover={{ x: 4, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            ↗
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
