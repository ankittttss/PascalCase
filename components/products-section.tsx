import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Grid3X3, DollarSign, Zap, Activity } from "lucide-react"

const products = [
  {
    icon: Grid3X3,
    title: "Metadata Browser",
    description: "Streamline D365 metadata exploration. Browse and inspect configurations directly from your browser with ease.",
    badge: "Popular",
    stat: "8,000+",
    statLabel: "Downloads",
    href: "#",
  },
  {
    icon: DollarSign,
    title: "Commission 365",
    description: "Automate complex commission calculations with flexible rules engine. Real-time reporting for sales management.",
    badge: "Enterprise",
    stat: "99.9%",
    statLabel: "Uptime",
    href: "#",
  },
  {
    icon: Zap,
    title: "AI Autocloser",
    description: "AI-powered case resolution that automatically closes issues based on intelligent analysis and categorization.",
    badge: "AI-Powered",
    stat: "40%",
    statLabel: "Time Saved",
    href: "#",
  },
  {
    icon: Activity,
    title: "Flow Monitor",
    description: "Real-time monitoring and analytics for Power Automate flows with intelligent alerts and performance metrics.",
    badge: "New",
    stat: "24/7",
    statLabel: "Monitoring",
    href: "#",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Purpose-built Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Enterprise solutions that extend and enhance your Dynamics 365 and Power Platform investments.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="group">
              <Card className="h-full border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <product.icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                    {product.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="pt-2 border-t border-border">
                    <p className="text-2xl font-bold text-primary">{product.stat}</p>
                    <p className="text-xs text-muted-foreground">{product.statLabel}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
