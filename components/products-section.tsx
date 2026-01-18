import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Grid3X3, DollarSign, Bot, Activity } from "lucide-react"

const products = [
  {
    icon: Grid3X3,
    title: "Metadata Browser",
    description: "Browse and explore Dynamics 365 metadata directly in your browser. Over 8,000 downloads on the Edge Add-on store.",
    badge: "Edge Add-on",
    stats: "8,000+ downloads",
    href: "#",
  },
  {
    icon: DollarSign,
    title: "Commission 365",
    description: "Automate sales commission calculations within Dynamics 365. Flexible rules engine with real-time reporting.",
    badge: "AppSource",
    stats: "Enterprise ready",
    href: "#",
  },
  {
    icon: Bot,
    title: "AI Autocloser",
    description: "Automatically resolve and close cases using AI-powered analysis. Reduce manual workload and improve response times.",
    badge: "AI Powered",
    stats: "Save 40% time",
    href: "#",
  },
  {
    icon: Activity,
    title: "Flow Monitor",
    description: "Track and monitor your Power Automate flows in real-time. Get alerts on failures and performance issues.",
    badge: "New",
    stats: "Real-time alerts",
    href: "#",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Products built for D365
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our suite of tools designed to extend and enhance your Dynamics 365 experience.
          </p>
        </div>

        {/* Products grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="group">
              <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">
                    {product.title}
                    <ArrowUpRight className="ml-2 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium text-primary">
                    {product.stats}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
