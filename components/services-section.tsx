import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Headphones, Wrench, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Marketing",
    description: "Funnels, customer journeys, email campaigns, event management, and marketing automation within D365 Marketing.",
    features: ["Customer Journeys", "Email Marketing", "Event Management", "Lead Scoring"],
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "Build world-class support operations with omnichannel engagement, case management, and SLA tracking.",
    features: ["Omnichannel", "Case Management", "Knowledge Base", "SLA Tracking"],
  },
  {
    icon: Wrench,
    title: "Field Service",
    description: "Optimize on-site service operations with scheduling, resource management, and mobile workforce tools.",
    features: ["Resource Scheduling", "Work Orders", "Mobile App", "IoT Integration"],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Accelerate your sales cycle with lead management, opportunity tracking, and AI-powered insights.",
    features: ["Lead Management", "Pipeline Analytics", "Sales Insights", "Forecasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industry-specific solutions for Dynamics 365
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Deep expertise across all major D365 modules to transform your business operations.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-card/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">
                  D365 {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
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
