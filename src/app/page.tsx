'use client'

import { AboutUsSection } from '@/components/about-us-section'
import { HeroSection } from '@/components/hero-section'
import { MaintenancePage } from '@/components/maintenance-page'
import { PricingSection } from '@/components/pricing-section'
import { TheFooter } from '@/components/the-footer'
import { useEffect, useState } from 'react'
import { activateRemoteConfig } from '@/lib/firebase.browser'
import { getValue } from 'firebase/remote-config'

export default function HomePage() {
  const [isMaintenance, setIsMaintenance] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadFlag() {
      const rc = await activateRemoteConfig()
      const maintenanceValue = getValue(rc, 'kill_switch_is_maintenance')
      setIsMaintenance(maintenanceValue.asBoolean())
      setIsReady(true)
    }
    loadFlag()
  }, [])

  if (!isReady) {
    return (
      <main className="bg-background text-foreground flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading…</p>
      </main>
    )
  }

  if (isMaintenance) {
    return <MaintenancePage />
  }

  return (
    <main className="from-primary/5 via-background to-background relative overflow-hidden bg-linear-to-b">
      <div className="base-container space-y-16 px-4 pt-20 pb-20 md:pt-24">
        <HeroSection />
        <PricingSection />
        <AboutUsSection />
      </div>
      <TheFooter />
    </main>
  )
}
