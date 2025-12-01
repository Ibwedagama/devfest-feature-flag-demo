import { PricingCard } from "@/components/pricing-card"

const plans = [
  {
    name: "Starter",
    price: "$9",
    cadence: "per month",
    summary: "For solo readers who want distraction-free focus.",
    features: ["Up to 3 devices", "Offline access", "Highlights & notes"],
    cta: "Buy Starter Pack",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    price: "$19",
    cadence: "per month",
    summary: "Best for power users who annotate and share daily.",
    features: ["Unlimited devices", "Shared libraries", "AI summaries"],
    cta: "Buy Growth Pack",
    variant: "default" as const,
  },
  {
    name: "Team",
    price: "$39",
    cadence: "per month",
    summary: "Collaborative reading rooms for teams and classrooms.",
    features: ["Spaces & permissions", "Reading analytics", "Priority support"],
    cta: "Buy Team Pack",
    variant: "secondary" as const,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Pricing made simple</h2>
        <p className="text-muted-foreground">
          Pick the plan that matches how you read. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  )
}
