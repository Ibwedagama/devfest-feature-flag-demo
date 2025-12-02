import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonialsVariantB = [
  {
    name: 'Jasmine Patel',
    role: 'Content Strategist',
    avatar: 'https://i.pravatar.cc/300?img=4',
    quote:
      'I trust it for daily research. The reading queue and summaries mean I never lose a thread between meetings.',
  },
  {
    name: 'Diego Alvarez',
    role: 'Lead Engineer',
    avatar: 'https://i.pravatar.cc/300?img=2',
    quote:
      'Annotations sync perfectly with my team. It feels collaborative without being noisy—exactly what we need.',
  },
  {
    name: 'Lena Fischer',
    role: 'Graduate Researcher',
    avatar: 'https://i.pravatar.cc/300?img=3',
    quote:
      'Five-star experience. Offline access on flights plus the AI recaps are game-changing for my fieldwork.',
  },
]

function AvatarGlow({ avatar }: { avatar: string }) {
  return (
    <div className="overflow-hidden rounded-full border-2">
      <img src={avatar} alt="" width={75} height={75} />
    </div>
  )
}

export function TestimonialsSectionVariantB() {
  return (
    <section id="testimonials-variant-b" className="space-y-8">
      <div className="space-y-2 text-center">
        <div className="border-primary/40 bg-card/70 text-primary mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
          <Quote className="text-primary size-3.5" />
          Reader voices
        </div>
        <h2 className="text-2xl font-semibold md:text-3xl">Stories from real readers</h2>
        <p className="text-muted-foreground">
          Hear what our users have to say about their experience.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonialsVariantB.map(testimonial => (
          <Card
            key={testimonial.name}
            className="border-primary/15 bg-card/85 relative h-full overflow-hidden backdrop-blur"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <AvatarGlow avatar={testimonial.avatar} />
              <div className="space-y-1">
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription className="text-emerald-100/80">
                  {testimonial.role}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 text-emerald-100">
                <Quote className="text-primary mt-1 size-8" />
                <p className="text-muted-foreground text-sm leading-relaxed">{testimonial.quote}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
