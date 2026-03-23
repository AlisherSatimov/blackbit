'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const facts = [
  { label: 'Age', value: '24' },
  { label: 'Experience', value: '3 years professional' },
  { label: 'Location', value: 'Xorazm, Uzbekistan' },
  { label: 'Focus', value: 'React · Next.js · TypeScript' },
  { label: 'Status', value: 'Open to part-time / remote' },
  { label: 'Outside work', value: 'Table tennis · CS2 · CoC · Puzzles' },
]

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">01</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            I&apos;m a 24-year-old frontend developer from Xorazm, Uzbekistan. 4 years in
            tech, 3 of them building real products professionally.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            What pulled me into frontend was simple — I could build something and immediately
            see it working. That instant feedback loop matched my creative drive perfectly.
            I&apos;ve been here ever since.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[var(--muted)] leading-relaxed">
            Right now I&apos;m building the website for Yangiariq IT-Park while going deeper
            into advanced frontend architecture. I believe knowing <em>why</em> things work
            is just as important as knowing <em>how</em>.
          </motion.p>
        </motion.div>

        {/* Facts */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {facts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={fadeUp}
              className="flex justify-between items-center py-4 border-b border-[var(--border)]"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-[var(--muted)]">
                {fact.label}
              </span>
              <span className="text-sm font-medium text-right">{fact.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
