import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function MaintenancePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-6">
      <div className="border-border/60 bg-card/80 max-w-xl rounded-2xl border px-6 py-8 text-center shadow-xl backdrop-blur">
        <div className="bg-destructive/20 text-destructive mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          !
        </div>
        <h1 className="mb-2 text-2xl font-semibold">We&apos;re performing maintenance</h1>
        <p className="text-muted-foreground mb-6 text-sm">
          The app is temporarily unavailable while we resolve an issue. Please check back shortly.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/">Refresh page</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="mailto:support@readflow.app">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
