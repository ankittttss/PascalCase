import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Megaphone, 
  HeadphonesIcon, 
  Truck, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Zap,
  Settings,
  RefreshCw,
  Shield
} from "lucide-react"

const services = [
  {
    id: "marketing",
    icon: Megaphone,
    title: "Dynamics 365 Marketing",
    description: "Create complete end-to-end marketing funnels, customer journeys, and campaigns with powerful analytics and industry-specific integrations.",
    capabilities: [
      "Customer journey orchestration",
      "Email marketing automation",
      "Event management",
      "Lead scoring and nurturing",
      "Marketing analytics & insights",
      "Social media integration"
    ]
  },
  {
    id: "customer-service",
    icon: HeadphonesIcon,
    title: "Dynamics 365 Customer Service",
    description: "Connect call centers, self-help portals, knowledge bases, and more. Manage SLAs and entitlements with enterprise-grade capabilities.",
    capabilities: [
      "Omnichannel engagement",
      "Case management",
      "Knowledge management",
      "SLA & entitlement tracking",
      "Customer self-service portals",
      "AI-powered insights"
    ]
  },
  {
    id: "field-service",
    icon: Truck,
    title: "Dynamics 365 Field Service",
    description: "Bring customer service capabilities directly to customer locations. Optimize scheduling, manage work orders, and empower your field technicians.",
    capabilities: [
      "Work order management",
      "Intelligent scheduling",
      "Mobile technician app",
      "Inventory management",
      "IoT integration",
      "Preventive maintenance"
    ]
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Dynamics 365 Sales",
    description: "Get access to lead management, sales funnels, opportunity tracking, order processing, and comprehensive reports with the Sales module.",
    capabilities: [
      "Lead & opportunity management",
      "Sales forecasting",
      "Pipeline visualization",
      "Quote & order management",
      "Sales analytics",
      "LinkedIn Sales Navigator integration"
    ]
  }
]

const offerings = [
  {
    icon: Settings,
    title: "Implementation",
    description: "End-to-end D365 implementations tailored to your business processes and requirements."
  },
  {
    icon: RefreshCw,
    title: "Migration",
    description: "Seamless data migration from legacy systems with custom tools to ensure data integrity."
  },
  {
    icon: Zap,
    title: "Customization",
    description: "Custom plugins, workflows, and integrations to extend D365 beyond out-of-the-box capabilities."
  },
  {
    icon: Shield,
    title: "Support",
    description: "Ongoing support and maintenance to keep your D365 environment running smoothly."
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 h-[400px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Industry-specific solutions for Dynamics 365
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              We build, implement, and support Dynamics 365 solutions that transform your 
              business operations. Our ex-Microsoft team brings unmatched product expertise.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive services to maximize your D365 investment.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering) => (
              <Card key={offering.title} className="border-border/50 bg-background text-center">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                    <offering.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{offering.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {offering.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* D365 Modules */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dynamics 365 Modules
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Deep expertise across the full D365 ecosystem.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card 
                key={service.id} 
                id={service.id}
                className="border-border/50 bg-card/50 scroll-mt-32"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why choose Pascalcase for your D365 project?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're not just consultants—we're product builders with deep Microsoft roots.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Ex-Microsoft team with insider product knowledge",
                  "Low-cost implementations without compromising quality",
                  "Custom data migration tools for seamless transitions",
                  "License optimization to reduce your costs",
                  "Exclusive focus on Microsoft technologies",
                  "Product developers who understand real-world needs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-background p-6 text-center">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Enterprise Projects</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 text-center">
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">Microsoft Focus</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 text-center">
                <p className="text-4xl font-bold text-primary">Ex-MS</p>
                <p className="mt-1 text-sm text-muted-foreground">Founding Team</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 text-center">
                <p className="text-4xl font-bold text-primary">4</p>
                <p className="mt-1 text-sm text-muted-foreground">AppSource Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to transform your D365 investment?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how our expertise can help you get more from Dynamics 365.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/products">
                  Explore Our Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
