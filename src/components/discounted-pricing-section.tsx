import { DiscountedPricingCard } from '@/components/discounted-pricing-card'

const discountedPlans = [
  {
    name: 'Starter Plus',
    originalPrice: '$9',
    discountedPrice: '$5',
    cadence: 'per month',
    summary: 'Keep focus tools and offline access for less while the offer lasts.',
    features: ['Everything in Starter', 'Weekend reading boosts', 'Email summaries'],
    cta: 'Grab Starter Deal',
    variant: 'outline' as const,
  },
  {
    name: 'Growth Plus',
    originalPrice: '$19',
    discountedPrice: '$10',
    cadence: 'per month',
    summary: 'Best for power readers ready to lock in collaboration savings.',
    features: ['Unlimited devices', 'Shared libraries', 'AI summaries'],
    cta: 'Claim Growth Deal',
    variant: 'default' as const,
  },
  {
    name: 'Team Plus',
    originalPrice: '$39',
    discountedPrice: '$20',
    cadence: 'per month',
    summary: 'Bring your team aboard with permissions and analytics included.',
    features: ['Spaces & permissions', 'Reading analytics', 'Priority support'],
    cta: 'Secure Team Deal',
    variant: 'outline' as const,
  },
]

export function DiscountedPricingSection() {
  return (
    <section id="discounted-pricing" className="relative space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-[#ed8796]/40 bg-linear-to-br from-[#2a0f15]/80 via-[#38131d]/90 to-rose-950/70 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:p-10">
        <div className="pointer-events-none absolute top-8 -left-8 h-16 w-16 rounded-full bg-linear-to-b from-[#ed8796] to-[#f4b4c0] shadow-[0_20px_50px_rgba(237,135,150,0.35)]" />
        <div className="pointer-events-none absolute top-12 -right-10 h-20 w-20 rounded-full bg-linear-to-b from-[#ed8796] to-amber-400 shadow-[0_20px_50px_rgba(248,113,113,0.35)] blur-[1px]" />
        <div className="pointer-events-none absolute bottom-6 left-10 h-16 w-16 rounded-full bg-linear-to-br from-emerald-500/70 via-emerald-400/60 to-transparent opacity-80 blur-sm" />
        <div className="pointer-events-none absolute top-6 left-6 h-12 w-12 animate-pulse rounded-full bg-linear-to-br from-emerald-400/80 via-emerald-300/60 to-amber-300/60 opacity-70 blur-sm" />
        <div className="pointer-events-none absolute top-6 right-1/3 h-10 w-10 rotate-12 rounded-full border border-emerald-400/50 bg-emerald-500/15 shadow-[0_0_25px_rgba(16,185,129,0.45)]" />

        <div className="relative space-y-3 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#ed8796] via-amber-300 to-emerald-300 px-4 py-2 text-xs font-bold tracking-[0.2em] text-emerald-950 uppercase shadow-lg ring-2 shadow-rose-800/30 ring-[#ed8796]/50">
            🎄 Holiday Special · Up to 50% off
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl">Limited-time discounts</h2>
          <p className="text-muted-foreground">
            Unlock exclusive savings! Our launch week special slashes original prices. Secure your
            rate before it's gone.
          </p>
        </div>

        <div className="relative mt-8 grid gap-4 md:grid-cols-3">
          {discountedPlans.map(plan => (
            <DiscountedPricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
