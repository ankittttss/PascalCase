import { Check } from "lucide-react"

const benefits = [
  "Low-cost implementation with no hidden fees",
  "Custom data migration tools built in-house",
  "License cost reduction strategies",
  "Microsoft-exclusive focus and expertise",
  "D365 tool developers on staff",
  "Direct access to ex-Microsoft engineers",
]

export function AboutSection() {
  return (
    <section id="about" className="border-y border-border bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              We are ex-Microsoft employees with unparalleled product knowledge
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Our team brings decades of combined experience from inside Microsoft, 
              giving us unique insights into how Dynamics 365 works at its core. 
              This insider knowledge translates to better implementations, 
              smarter customizations, and solutions that truly work.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:pl-8">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
