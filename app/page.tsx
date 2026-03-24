import { Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Certificates } from '@/components/Certificates'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'

function SectionSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 animate-pulse">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-4 h-3 bg-[var(--border)] rounded" />
        <div className="w-32 h-8 bg-[var(--border)] rounded" />
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-[var(--border)] p-6 h-40" />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Certificates />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </main>
  )
}
