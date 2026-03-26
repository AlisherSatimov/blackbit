'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { contactLinks } from '@/lib/data'
import { siteConfig } from '@/lib/config'
import { useLanguage } from '@/contexts/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Contact() {
  const { t } = useLanguage()
  const emailAddress = `${siteConfig.email.user}@${siteConfig.email.domain}`
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

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
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">07</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.contact.title}</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: CTA + links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
            {t.contact.heading1}
            <br />
            <span className="text-[var(--muted)]">{t.contact.heading2}</span>
          </h3>
          <p className="text-[var(--muted)] leading-relaxed mb-10">
            {t.contact.subtext}
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={item}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-[var(--border)] px-5 py-3 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-0.5">
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

            <motion.a
              variants={item}
              href={`mailto:${emailAddress}`}
              className="group flex items-center justify-between border border-[var(--border)] px-5 py-3 hover:border-[var(--foreground)] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-0.5">
                  {t.contact.email}
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
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="sr-only">{t.contact.form.name}</label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                required
                placeholder={t.contact.form.name}
                className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm font-mono placeholder:text-[var(--muted)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="sr-only">{t.contact.form.emailField}</label>
              <input
                id="reply_to"
                type="email"
                name="reply_to"
                required
                placeholder={t.contact.form.emailField}
                className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm font-mono placeholder:text-[var(--muted)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t.contact.form.message}
                className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm font-mono placeholder:text-[var(--muted)] text-[var(--foreground)] focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-opacity disabled:opacity-40"
            >
              {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs text-green-500 text-center"
              >
                {t.contact.form.success}
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs text-red-500 text-center"
              >
                {t.contact.form.error}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
