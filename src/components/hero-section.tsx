import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-card/90 relative overflow-hidden rounded-3xl border px-6 py-10 shadow-lg md:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(198,160,246,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(245,189,230,0.18),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(166,218,149,0.14),transparent_30%)]" />
      <div className="bg-primary/20 pointer-events-none absolute -top-24 -left-20 size-60 rounded-full blur-3xl" />
      <div className="bg-secondary/60 pointer-events-none absolute top-12 -right-12 size-44 rounded-full blur-3xl" />
      <div className="from-primary/10 pointer-events-none absolute inset-x-6 bottom-0 h-24 rounded-t-full bg-linear-to-t via-transparent to-transparent" />

      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="border-primary/30 bg-primary/10 text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span className="bg-primary size-2 rounded-full" />
            Readflow · Digital libraries reimagined
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl leading-tight font-semibold text-balance md:text-4xl">
              Read, annotate, and share books or PDFs from any device.
            </h1>
            <p className="text-muted-foreground text-pretty md:text-lg">
              Readflow keeps your library synced, your notes organized, and your team on the same
              page online or offline.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="font-bold">
              Start Reading
            </Button>
            <p className="text-muted-foreground text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
          <div className="border-primary/20 bg-secondary/60 text-secondary-foreground grid gap-4 rounded-2xl border px-4 py-3 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <span className="bg-primary size-2 rounded-full" />
              Offline-ready mobile & desktop apps
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-primary size-2 rounded-full" />
              Secure uploads with instant sync
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-primary size-2 rounded-full" />
              AI-powered summaries per chapter
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
