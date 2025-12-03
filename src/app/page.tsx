'use client'

import { DiscountedPricingSection } from '@/components/discounted-pricing-section'
import { AISummarySection } from '@/components/ai-summary-section'
import { HeroSection } from '@/components/hero-section'
import { MaintenancePage } from '@/components/maintenance-page'
import { PricingSection } from '@/components/pricing-section'
import { TestimonialsSectionVariantA } from '@/components/testimonials-section'
import { TestimonialsSectionVariantB } from '@/components/testimonials-section-variant-b'
import { TheFooter } from '@/components/the-footer'
import useRemoteConfig from '@/hooks/use-remote-config'

export default function HomePage() {
  const { isReady, isMaintenance, isDiscounted, testimonialVariant } = useRemoteConfig()

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
        <AISummarySection />
        {isDiscounted ? <DiscountedPricingSection /> : <PricingSection />}
        {testimonialVariant === 'variant-a' ? (
          <TestimonialsSectionVariantA />
        ) : (
          <TestimonialsSectionVariantB />
        )}
      </div>
      <TheFooter />
    </main>
  )
}
