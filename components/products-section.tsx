import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Grid3X3, DollarSign, Zap, Activity } from "lucide-react"

const products = [
  {
    icon: Grid3X3,
    title: "Metadata Browser",
    description: "Streamline D365 metadata exploration with a comprehensive browser for configurations and insights.",
    badge: "Popular",
    stat: "8,000+",
    statLabel: "Users",
    color: "from-primary/20 to-primary/5",
    href: "#",
  },
  {
    icon: DollarSign,
    title: "Commission 365",
    description: "Automate commission calculations with intelligent rules engine and real-time sales tracking.",
    badge: "Enterprise",
    stat: "99.9%",
    statLabel: "Uptime",
    color: "from-accent/20 to-accent/5",
    href: "#",
  },
  {
    icon: Zap,
    title: "AI Autocloser",
    description: "AI-powered case resolution that intelligently closes issues based on analysis and patterns.",
    badge: "AI",
    stat: "40%",
    statLabel: "Faster",
    color: "from-primary/20 to-accent/10",
    href: "#",
  },
  {
    icon: Activity,
    title: "Flow Monitor",
    description: "Real-time Power Automate monitoring with intelligent alerts and performance analytics.",
    badge: "New",
    stat: "24/7",
    statLabel: "Monitoring",
    color: "from-accent/20 to-primary/10",
    href: "#",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-28 md:py-40 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-accent tracking-wide uppercase">Products</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">
            Engineered for Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Enterprise-grade tools purpose-built to extend and optimize your Dynamics 365 platform.
          </p>
        </div>

        {/* Products grid with staggered layout */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <Link key={product.title} href={product.href} className="group">
              <Card className={`h-full overflow-hidden border border-border/60 bg-gradient-to-br ${product.color} hover:border-accent/40 hover:shadow-xl transition-all duration-500 backdrop-blur-sm ${idx % 2 === 1 ? 'md:translate-y-8' : ''}`}>
                <CardHeader className="pb-8 pt-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 group-hover:bg-accent/15 transition-all duration-300">
                      <product.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <Badge className="text-xs font-bold bg-accent/20 text-foreground border border-accent/30 hover:bg-accent/30">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </CardDescription>
                  <div className="pt-4 border-t border-border/50 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{product.stat}</p>
                      <p className="text-xs text-muted-foreground font-medium">{product.statLabel}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
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
