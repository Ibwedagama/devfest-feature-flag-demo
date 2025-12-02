import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alicia, Product Designer",
    title: "Focus that sticks",
    quote: "The curated reading rooms keep me distraction-free. It feels like deep work, but cozy.",
  },
  {
    name: "Marcus, Educator",
    title: "Collaboration win",
    quote: "Sharing notes with students is seamless, and the synced highlights save me hours every week.",
  },
  {
    name: "Priya, Researcher",
    title: "Supercharged insights",
    quote: "AI summaries plus offline access make travel days productive. Worth every penny.",
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-amber-300/70 text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]" />
      ))}
    </div>
  )
}

export function TestimonialsSectionVariantA() {
  return (
    <section id="testimonials" className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Loved by focused readers</h2>
        <p className="text-muted-foreground">Real voices from people building their reading rituals with us.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="h-full border-emerald-500/20 bg-card/80 shadow-lg shadow-emerald-900/30 backdrop-blur"
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-lg">{testimonial.title}</CardTitle>
                <Stars />
              </div>
              <CardDescription>{testimonial.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.quote}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
