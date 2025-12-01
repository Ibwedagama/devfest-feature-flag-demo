import Link from "next/link"

export function TheFooter() {
  return (
    <footer className="border-t bg-card/60">
      <div className="base-container flex flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-foreground">
          <span className="size-2 rounded-full bg-primary" />
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
  )
}
