import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AISummarySection() {
  return (
    <section
      id="ai-summary"
      className="bg-card/90 relative overflow-hidden rounded-3xl border px-6 py-10 shadow-lg md:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(92,225,230,0.14),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(255,194,102,0.16),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(156,175,255,0.1),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-primary/10 via-transparent to-transparent" />

      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            AI summary & audio
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-balance md:text-3xl">
            Turn dense reads into quick recaps and podcast-style listens.
          </h2>
          <p className="text-muted-foreground text-pretty md:text-lg">
            Readflow&apos;s AI distills chapters into concise summaries, highlights what matters,
            and can narrate it as a podcast you can binge on your commute.
          </p>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="bg-primary/10 border-primary/20 flex items-start gap-2 rounded-2xl border px-3 py-3">
              <span className="bg-primary mt-1 size-2 rounded-full" />
              <div>
                <p className="font-medium text-foreground">Smart chapter recaps</p>
                <p>Capture key ideas without losing context or citations.</p>
              </div>
            </div>
            <div className="bg-secondary/40 border-secondary/30 flex items-start gap-2 rounded-2xl border px-3 py-3">
              <span className="bg-secondary-foreground mt-1 size-2 rounded-full" />
              <div>
                <p className="font-medium text-foreground">Podcast-ready audio</p>
                <p>Generate natural narration and queue episodes for later.</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="mt-2 w-fit">
            <Link href="#ai-summary">Try Now</Link>
          </Button>
        </div>
        <div className="border-muted/70 bg-background/80 relative hidden overflow-hidden rounded-2xl border px-5 py-6 shadow-lg md:block">
          <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-24 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Recap preview
              </p>
              <span className="bg-primary/15 text-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase">
                <span className="bg-primary size-2 rounded-full" />
                Ready
              </span>
            </div>
            <div className="space-y-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Summary</p>
              <p className="text-sm leading-relaxed text-foreground">
                “Chapter 5 boiled down to 6 insights with references—sentiment analysis notes which
                sections drive engagement for your team.”
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 bg-secondary/30 px-4 py-3">
              <div className="flex items-center justify-between text-sm font-medium text-foreground">
                <span className="flex items-center gap-2">
                  <span className="bg-secondary-foreground size-2 rounded-full" />
                  Podcast mix
                </span>
                <span className="text-xs text-muted-foreground">5 min listen</span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="bg-background/80 block h-2 w-full overflow-hidden rounded-full">
                  <span className="bg-foreground/70 block h-full w-2/3 rounded-full" />
                </span>
                <span className="text-xs font-semibold text-foreground">Queued</span>
              </div>
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="flex items-start gap-2 rounded-xl bg-background/60 px-3 py-2">
                <span className="bg-primary mt-1 size-2 rounded-full" />
                <div>
                  <p className="font-medium text-foreground">Share instantly</p>
                  <p>Send recap links to teammates with comments on key passages.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-xl bg-background/60 px-3 py-2">
                <span className="bg-secondary-foreground mt-1 size-2 rounded-full" />
                <div>
                  <p className="font-medium text-foreground">Listen anywhere</p>
                  <p>Sync your queue across mobile and desktop without re-uploading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
