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
