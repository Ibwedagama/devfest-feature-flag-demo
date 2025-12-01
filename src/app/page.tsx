'use client'

import { AboutUsSection } from '@/components/about-us-section'
import { HeroSection } from '@/components/hero-section'
import { MaintenancePage } from '@/components/maintenance-page'
import { PricingSection } from '@/components/pricing-section'
import { TheFooter } from '@/components/the-footer'
import { useEffect, useState } from 'react'
import { activateRemoteConfig } from '@/lib/firebase.browser'
import { activate, getValue, onConfigUpdate } from 'firebase/remote-config'
import { FLAGS } from '@/lib/constant'

export default function HomePage() {
  const [isMaintenance, setIsMaintenance] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadFlag() {
      const rc = await activateRemoteConfig()
      setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())
      setIsReady(true)

      // Enable Firebase Remote Config Realtime updates: listen for server-pushed changes
      onConfigUpdate(rc, {
        next: configUpdate => {
          if (configUpdate.getUpdatedKeys().has(FLAGS.KILL_SWITCH_IS_MAINTENANCE)) {
            activate(rc).then(() => {
              setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())
            })
          }
        },
        error: error => {
          console.error('Config update error:', error)
        },
        complete: () => {
          console.warn('Listening stopped.')
        },
      })
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
