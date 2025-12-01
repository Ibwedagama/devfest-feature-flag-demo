import Link from 'next/link'

export function TheNavbar() {
  return (
    <header className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="base-container flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="bg-primary size-2 rounded-full" />
          Readflow
        </Link>
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm sm:flex">
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
      </div>
    </header>
  )
}
