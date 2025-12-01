import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AboutUsSection() {
  return (
    <section
      id="about"
      className="mt-16 grid gap-8 rounded-3xl border bg-card px-6 py-10 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:px-10"
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold md:text-3xl">About Readflow</h3>
        <p className="text-pretty text-muted-foreground">
          We built Readflow for readers who balance research, leisure, and collaboration. Our team
          of librarians, designers, and engineers ships weekly improvements that keep your
          annotations portable, your PDFs searchable, and your reading lists shared without
          friction.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="rounded-xl border px-4 py-3">
            <p className="text-sm font-medium text-foreground">Privacy-first</p>
            <p>We encrypt uploads end-to-end and let you control who sees each library.</p>
          </div>
          <div className="rounded-xl border px-4 py-3">
            <p className="text-sm font-medium text-foreground">Access anywhere</p>
            <p>Import EPUB, PDF, or web clippings and stay synced across every device.</p>
          </div>
        </div>
      </div>
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Reader spotlight</CardTitle>
          <CardDescription>See how teams get through their backlog together.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            “Readflow turned our weekly research sprints into a shared library of insight. The AI
            summaries keep everyone aligned before deep-dives.”
          </p>
          <p className="text-foreground font-medium">— Lina Chen, Research Lead</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="link" className="px-0 text-primary">
            <Link href="#">View customer stories</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
