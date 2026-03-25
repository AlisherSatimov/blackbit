import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { CustomCursor } from '@/components/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://blackbit.dev'),
  title: {
    default: 'Alisher Satimov — Frontend Developer',
    template: '%s | Alisher Satimov',
  },
  description:
    'Frontend Developer from Xorazm, Uzbekistan. Specializing in React, Next.js, and TypeScript. Building fast, accessible, and beautiful web experiences.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Alisher Satimov',
    'Uzbekistan',
    'Xorazm',
    'blackbit',
    'Web Developer',
  ],
  authors: [{ name: 'Alisher Satimov', url: 'https://blackbit.dev' }],
  creator: 'Alisher Satimov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blackbit.dev',
    title: 'Alisher Satimov — Frontend Developer',
    description:
      'Frontend Developer from Xorazm, Uzbekistan. Specializing in React, Next.js, and TypeScript.',
    siteName: 'Alisher Satimov',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alisher Satimov — Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alisher Satimov — Frontend Developer',
    description:
      'Frontend Developer from Xorazm, Uzbekistan. Specializing in React, Next.js, and TypeScript.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://blackbit.dev',
  },
  verification: {
    google: '7ySnK5O01zPMklrU5q0566uSmpgaKxOpP9v1lxvQc18',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Alisher Satimov',
              url: 'https://blackbit.dev',
              jobTitle: 'Frontend Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Xorazm',
                addressCountry: 'UZ',
              },
              sameAs: [
                'https://github.com/AlisherSatimov',
                'https://www.linkedin.com/in/alishersatimov/',
                'https://t.me/Alisher_Satimov',
              ],
              knowsAbout: [
                'React.js',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Tailwind CSS',
                'Frontend Development',
              ],
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
