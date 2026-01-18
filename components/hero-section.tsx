import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

const clients = [
  "Microsoft Partner",
  "AppSource Certified",
  "Azure Experts",
  "Power Platform",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Ex-Microsoft Team
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            We{" "}
            <span className="text-primary">#build</span>{" "}
            Dynamics 365 and Power Platform tools
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty max-w-2xl mx-auto">
            Transform your Dynamics 365 investment into tangible results with seasoned 
            ex-Microsoft partners who understand the platform inside and out.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat on Teams
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-medium text-muted-foreground/60"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
