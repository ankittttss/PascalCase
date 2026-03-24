import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Headphones, Wrench, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Marketing",
    number: "01",
    description: "Master sophisticated customer journeys, email marketing, and event management solutions.",
    features: ["Customer Journeys", "Email Marketing", "Event Management", "Lead Scoring"],
  },
  {
    icon: Headphones,
    title: "Customer Service",
    number: "02",
    description: "Build world-class omnichannel support operations with intelligent case management.",
    features: ["Omnichannel", "Case Management", "Knowledge Base", "SLA Tracking"],
  },
  {
    icon: Wrench,
    title: "Field Service",
    number: "03",
    description: "Optimize on-site operations with intelligent scheduling and resource management.",
    features: ["Resource Scheduling", "Work Orders", "Mobile App", "IoT Integration"],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    number: "04",
    description: "Accelerate revenue with AI-powered insights and intelligent pipeline analytics.",
    features: ["Lead Management", "Pipeline Analytics", "Sales Insights", "Forecasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-40 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-accent tracking-wide uppercase">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">
            Deep D365 Mastery
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Comprehensive consulting across every major module—from strategy through implementation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group border border-border/60 bg-card hover:border-accent/40 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
              <CardHeader className="pb-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-2">
                    <p className="text-6xl font-bold text-foreground/10 group-hover:text-accent/20 transition-colors">
                      {service.number}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all group-hover:scale-110">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  D365 {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-primary/5 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-foreground group-hover:bg-primary/10 group-hover:border-primary/40 transition-all"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
