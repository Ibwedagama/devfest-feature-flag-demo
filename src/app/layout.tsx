import React from 'react'

import '@/app/globals.css'
import { TheNavbar } from '@/components/the-navbar'
import { RemoteConfigLoader } from '@/components/remote-config-loader'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark min-h-screen">
      <body className="bg-background text-foreground pt-[--spacing-navbar]">
        <RemoteConfigLoader />
        <TheNavbar />
        {children}
      </body>
    </html>
  )
}
