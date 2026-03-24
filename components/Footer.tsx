'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-[var(--border)] max-w-5xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">
          blackbit.dev
        </span>
        <span className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Alisher Satimov. {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}
