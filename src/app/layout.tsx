import React from "react"
import Link from "next/link"

import "@/app/globals.css"
import { Button } from "@/components/ui/button"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="min-h-screen dark">
      <body className="bg-background text-foreground pt-[--spacing-navbar]">
        <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
          <div className="base-container flex items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="size-2 rounded-full bg-primary" />
              Readflow
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link href="/#pricing" className="hover:text-foreground">
                Pricing
              </Link>
              <Link href="/#about" className="hover:text-foreground">
                About
              </Link>
            </nav>
            <Button size="sm" asChild className="ml-4">
              <Link href="/#pricing">Get started</Link>
            </Button>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
