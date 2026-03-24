import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Headphones, Wrench, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Marketing",
    description: "Drive engagement with sophisticated customer journeys, email marketing, and event management solutions.",
    features: ["Customer Journeys", "Email Marketing", "Event Management", "Lead Scoring"],
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "Build world-class support operations with omnichannel engagement and intelligent case management.",
    features: ["Omnichannel", "Case Management", "Knowledge Base", "SLA Tracking"],
  },
  {
    icon: Wrench,
    title: "Field Service",
    description: "Optimize on-site operations with intelligent scheduling, resource management, and mobile capabilities.",
    features: ["Resource Scheduling", "Work Orders", "Mobile App", "IoT Integration"],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Accelerate revenue cycles with AI-powered insights, pipeline analytics, and intelligent forecasting.",
    features: ["Lead Management", "Pipeline Analytics", "Sales Insights", "Forecasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Comprehensive D365 Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Expert guidance across all major modules to unlock the full potential of your Dynamics 365 investment.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl tracking-tight">
                      D365 {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
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
