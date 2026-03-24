'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/lib/translations'

const locales: Locale[] = ['en', 'ru', 'uz']

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-widest">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(l)}
            className={`uppercase transition-colors ${
              locale === l
                ? 'text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
            aria-label={`Switch to ${l}`}
          >
            {l}
          </button>
          {i < locales.length - 1 && (
            <span className="text-[var(--border)]">/</span>
          )}
        </span>
      ))}
    </div>
  )
}
