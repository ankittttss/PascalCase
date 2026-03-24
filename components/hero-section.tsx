import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40">
      {/* Premium background with accent accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold text-foreground tracking-wide">
                EX-MICROSOFT EXPERTS
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Dynamics 365.
                <br />
                <span className="text-accent">Done Right.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Expert consultancy and enterprise-grade tools built by engineers who architected the platform at Microsoft.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="font-semibold text-base h-12" asChild>
                <Link href="#products">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="font-semibold text-base h-12" asChild>
                <Link href="/contact">
                  Start a Project
                </Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15y+</p>
                <p className="text-sm text-muted-foreground">D365 Expertise</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative hidden md:block">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border backdrop-blur">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-7xl font-bold text-foreground/20">D365</div>
                  <p className="text-muted-foreground text-sm font-medium">Consultation & Implementation</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mb-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
