'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  function backToHome() {
    reset()
    window.location.href = '/'
  }

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-6">
      <div className="border-border/60 bg-card/80 max-w-xl rounded-2xl border px-6 py-8 text-center shadow-xl backdrop-blur">
        <div className="bg-destructive/20 text-destructive mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          !
        </div>
        <h1 className="mb-2 text-2xl font-semibold">Internal Server Error</h1>
        <p className="text-muted-foreground mb-6 text-sm">
          An internal error occurred. Please try again later.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" variant="outline" onClick={backToHome}>
            Back to home
          </Button>
        </div>
        {error?.digest && (
          <p className="text-muted-foreground mt-4 text-xs">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  )
}
