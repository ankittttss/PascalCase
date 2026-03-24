import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, CheckCircle } from "lucide-react"

const trustIndicators = [
  { icon: CheckCircle, text: "Microsoft Partner Network" },
  { icon: CheckCircle, text: "AppSource Certified" },
  { icon: CheckCircle, text: "Ex-Microsoft Engineers" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-foreground">
              Trusted by enterprise teams
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance leading-tight">
            Enterprise-grade{" "}
            <span className="text-primary">Dynamics 365</span> solutions
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty max-w-2xl mx-auto">
            Transform your business operations with expert-built tools and consultancy from ex-Microsoft engineers who know the platform inside out.
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="font-semibold" asChild>
              <Link href="#products">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-semibold" asChild>
              <Link href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustIndicators.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2">
                <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
