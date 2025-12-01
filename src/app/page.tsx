import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    cadence: 'per month',
    summary: 'For solo readers who want distraction-free focus.',
    features: ['Up to 3 devices', 'Offline access', 'Highlights & notes'],
    cta: 'Start free',
    variant: 'outline' as const,
  },
  {
    name: 'Growth',
    price: '$19',
    cadence: 'per month',
    summary: 'Best for power users who annotate and share daily.',
    features: ['Unlimited devices', 'Shared libraries', 'AI summaries'],
    cta: 'Upgrade',
    variant: 'default' as const,
  },
  {
    name: 'Team',
    price: '$39',
    cadence: 'per month',
    summary: 'Collaborative reading rooms for teams and classrooms.',
    features: ['Spaces & permissions', 'Reading analytics', 'Priority support'],
    cta: 'Talk to us',
    variant: 'secondary' as const,
  },
]

export default function HomePage() {
  return (
    <main className="from-primary/5 via-background to-background relative overflow-hidden bg-linear-to-b">
      <div className="base-container px-4 pt-20 pb-20 md:pt-24">
        <section className="bg-card relative overflow-hidden rounded-3xl border px-6 py-10 shadow-sm md:px-10">
          <div className="bg-primary/10 pointer-events-none absolute -top-20 -left-16 size-48 rounded-full blur-3xl" />
          <div className="bg-secondary/60 pointer-events-none absolute top-10 -right-10 size-36 rounded-full blur-3xl" />
          <div className="relative flex flex-col gap-6">
            <div className="text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="bg-primary size-2 rounded-full" />
              Readflow · Digital libraries reimagined
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl leading-tight font-semibold text-balance md:text-4xl">
                Read, annotate, and share books or PDFs from any device.
              </h1>
              <p className="text-muted-foreground text-pretty md:text-lg">
                Readflow keeps your library synced, your notes organized, and your team on the same
                page—online or offline.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button size="lg">Start reading</Button>
              <p className="text-muted-foreground text-sm">
                No credit card required. Cancel anytime.
              </p>
            </div>
            <div className="bg-secondary/60 text-secondary-foreground grid gap-4 rounded-2xl px-4 py-3 text-sm sm:grid-cols-3">
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
        </section>

        <section id="pricing" className="mt-16 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">Pricing made simple</h2>
            <p className="text-muted-foreground">
              Pick the plan that matches how you read. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map(plan => (
              <Card key={plan.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.cadence}</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="bg-primary size-2 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.variant} size="lg">
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="bg-card mt-16 grid gap-8 rounded-3xl border px-6 py-10 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:px-10"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold md:text-3xl">About Readflow</h3>
            <p className="text-muted-foreground text-pretty">
              We built Readflow for readers who balance research, leisure, and collaboration. Our
              team of librarians, designers, and engineers ships weekly improvements that keep your
              annotations portable, your PDFs searchable, and your reading lists shared without
              friction.
            </p>
            <div className="text-muted-foreground grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border px-4 py-3">
                <p className="text-foreground text-sm font-medium">Privacy-first</p>
                <p>We encrypt uploads end-to-end and let you control who sees each library.</p>
              </div>
              <div className="rounded-xl border px-4 py-3">
                <p className="text-foreground text-sm font-medium">Access anywhere</p>
                <p>Import EPUB, PDF, or web clippings and stay synced across every device.</p>
              </div>
            </div>
          </div>
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Reader spotlight</CardTitle>
              <CardDescription>See how teams get through their backlog together.</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <p>
                “Readflow turned our weekly research sprints into a shared library of insight. The
                AI summaries keep everyone aligned before deep-dives.”
              </p>
              <p className="text-foreground font-medium">— Lina Chen, Research Lead</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary px-0">
                <Link href="#">View customer stories</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <footer className="bg-card/60 border-t">
        <div className="base-container text-muted-foreground flex flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="text-foreground flex items-center gap-2">
            <span className="bg-primary size-2 rounded-full" />
            Readflow
          </div>
          <div className="flex gap-4">
            <Link href="#pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="#" className="hover:text-foreground">
              Security
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
