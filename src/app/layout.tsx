import React from "react"
import "@/app/globals.css"
import { TheNavbar } from "@/components/the-navbar"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="min-h-screen dark">
      <body className="bg-background text-foreground pt-[--spacing-navbar]">
        <TheNavbar />
        {children}
      </body>
    </html>
  )
}
