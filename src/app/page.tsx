import { AboutUsSection } from '@/components/about-us-section'
import { HeroSection } from '@/components/hero-section'
import { MaintenancePage } from '@/components/maintenance-page'
import { PricingSection } from '@/components/pricing-section'
import { TheFooter } from '@/components/the-footer'

export default function HomePage() {
  const isMaintenance = false

  if (isMaintenance) {
    return <MaintenancePage />
  }

  return (
    <main className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
      <div className="base-container space-y-16 px-4 pb-20 pt-20 md:pt-24">
        <HeroSection />
        <PricingSection />
        <AboutUsSection />
      </div>
      <TheFooter />
    </main>
  )
}
