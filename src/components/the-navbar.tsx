'use client'

import { Button } from '@/components/ui/button'
import useAuth from '@/hooks/use-auth'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export function TheNavbar() {
  const { user, googleSignIn, logout } = useAuth()

  return (
    <header className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="base-container flex items-center justify-between gap-3 px-4 py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="bg-primary size-2 rounded-full" />
          Readflow
        </Link>
        <div className="flex min-w-0 items-center gap-3 text-sm font-medium text-muted-foreground">
          {user ? (
            <>
              <span className="max-w-[160px] truncate text-foreground sm:max-w-xs">
                {user.email}
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="sm:hidden"
                onClick={logout}
                aria-label="Log out"
              >
                <LogOut className="size-4" />
              </Button>
              <Button size="sm" variant="outline" className="hidden sm:inline-flex" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={googleSignIn}>
              Log in
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
