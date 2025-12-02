import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type DiscountedPricingCardProps = {
  name: string
  originalPrice: string
  discountedPrice: string
  cadence: string
  summary: string
  features: string[]
  cta: string
  variant: 'default' | 'outline' | 'secondary'
}

export function DiscountedPricingCard({
  name,
  originalPrice,
  discountedPrice,
  cadence,
  summary,
  features,
  cta,
  variant,
}: DiscountedPricingCardProps) {
  return (
    <Card className="via-card/90 to-card/80 h-full border-[#ed8796]/30 bg-linear-to-b from-[#30131b] shadow-xl shadow-rose-900/40 backdrop-blur">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            <span className="text-muted-foreground text-sm line-through decoration-2">
              {originalPrice}
            </span>
            <span className="text-3xl font-semibold text-rose-100">{discountedPrice}</span>
          </div>
          <span className="text-muted-foreground text-sm">{cadence}</span>
          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/30">
            ✨ Limited launch pricing
          </span>
        </div>
        <ul className="text-muted-foreground space-y-2 text-sm">
          {features.map(feature => (
            <li key={feature} className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn('w-full', variant === 'default' && 'bg-[#ed8796] hover:bg-[#ed8796]/80')}
          variant={variant}
          size="lg"
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
