import React from 'react'

import '@/app/globals.css'
import { TheNavbar } from '@/components/the-navbar'
import { AuthProvider } from '@/hooks/use-auth'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark min-h-screen">
      <body className="bg-background text-foreground pt-[--spacing-navbar]">
        <AuthProvider>
          <TheNavbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
