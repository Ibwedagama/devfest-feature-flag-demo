import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type PricingCardProps = {
  name: string
  price: string
  cadence: string
  summary: string
  features: string[]
  cta: string
  variant: "default" | "outline" | "secondary"
}

export function PricingCard({
  name,
  price,
  cadence,
  summary,
  features,
  cta,
  variant,
}: PricingCardProps) {
  return (
    <Card className="h-full border-primary/20 bg-card/70 shadow-lg backdrop-blur">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">{price}</span>
          <span className="text-sm text-muted-foreground">{cadence}</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={variant} size="lg">
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
