import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Grid3X3, 
  DollarSign, 
  Bot, 
  Activity,
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle2,
  Star
} from "lucide-react"

const products = [
  {
    id: "metadata-browser",
    icon: Grid3X3,
    title: "Metadata Browser for Dataverse",
    tagline: "The most popular Dataverse metadata tool",
    description: "Browse, explore, and export Dynamics 365 and Power Platform metadata directly in your browser. Essential for developers and administrators working with Dataverse.",
    badge: "8,000+ Downloads",
    platform: "Microsoft Edge Add-on",
    features: [
      "Browse tables, columns, relationships, and keys",
      "Export metadata to Excel or JSON",
      "Quick search across all entities",
      "Support for all Dataverse environments",
      "No installation on server required",
      "Regular updates with new features"
    ],
    cta: {
      label: "Download for Microsoft Edge",
      href: "https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/",
      icon: Download
    },
    stats: [
      { value: "8,000+", label: "Downloads" },
      { value: "4.8", label: "Rating" },
      { value: "Free", label: "Forever" }
    ]
  },
  {
    id: "commission-365",
    icon: DollarSign,
    title: "Commission 365",
    tagline: "Automate sales commission calculations",
    description: "A powerful tool for Dynamics 365 Sales that allows you to configure commissions, incentives, and bonus plans for your sales staff. Customize plans, determine triggers, and calculate commissions automatically.",
    badge: "Enterprise Ready",
    platform: "Microsoft AppSource",
    features: [
      "Flexible commission rule engine",
      "Support for tiered commission structures",
      "Real-time commission calculations",
      "Integration with D365 Sales pipeline",
      "Detailed commission reports and analytics",
      "Multi-currency support"
    ],
    cta: {
      label: "Get on AppSource",
      href: "https://appsource.microsoft.com/",
      icon: ExternalLink
    },
    stats: [
      { value: "50+", label: "Customers" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    id: "ai-autocloser",
    icon: Bot,
    title: "AI Autocloser",
    tagline: "Resolve cases automatically with AI",
    description: "Leverage AI to automatically resolve customer service cases that require no further action. The app intelligently identifies non-actionable tickets where customers have thanked you with no additional requests.",
    badge: "AI Powered",
    platform: "Microsoft AppSource",
    features: [
      "AI-powered case analysis",
      "Automatic case resolution",
      "Configurable resolution rules",
      "Sentiment analysis integration",
      "Audit trail for all auto-closures",
      "Reduces manual workload by 40%"
    ],
    cta: {
      label: "Get on AppSource",
      href: "https://appsource.microsoft.com/",
      icon: ExternalLink
    },
    stats: [
      { value: "40%", label: "Time Saved" },
      { value: "95%", label: "Accuracy" },
      { value: "1M+", label: "Cases Processed" }
    ]
  },
  {
    id: "flow-monitor",
    icon: Activity,
    title: "Flow Monitor for Power Automate",
    tagline: "Complete visibility into your flows",
    description: "Seamless tracking and in-depth monitoring of your Power Automate flows across all environments. Gain detailed insights into flow performance, execution duration, and failure reasons.",
    badge: "New",
    platform: "Microsoft AppSource",
    features: [
      "Cross-environment flow monitoring",
      "Real-time execution tracking",
      "Failure alerts and notifications",
      "Performance analytics dashboard",
      "Historical execution data",
      "Export reports for compliance"
    ],
    cta: {
      label: "Get on AppSource",
      href: "https://appsource.microsoft.com/",
      icon: ExternalLink
    },
    stats: [
      { value: "100%", label: "Visibility" },
      { value: "Real-time", label: "Alerts" },
      { value: "All Envs", label: "Supported" }
    ]
  }
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Products</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Tools built by D365 experts, for D365 users
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Our suite of products extends and enhances your Dynamics 365 and Power Platform 
              experience. Built from real-world needs, available on Microsoft AppSource.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                id={product.id}
                className="scroll-mt-32"
              >
                <div className={`grid gap-12 lg:grid-cols-2 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{product.badge}</Badge>
                    </div>
                    
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {product.title}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-primary">
                      {product.tagline}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mt-6 flex flex-wrap gap-6">
                      {product.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href={product.cta.href} target="_blank" rel="noopener noreferrer">
                          <product.cta.icon className="mr-2 h-4 w-4" />
                          {product.cta.label}
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" className="bg-transparent" asChild>
                        <Link href="/contact">
                          Request Demo
                        </Link>
                      </Button>
                    </div>
                    
                    <p className="mt-4 text-sm text-muted-foreground">
                      Available on {product.platform}
                    </p>
                  </div>
                  
                  {/* Features Card */}
                  <Card className={`border-border/50 bg-card/50 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {index < products.length - 1 && (
                  <div className="mt-24 border-t border-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Need a custom solution?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our products started as custom solutions for specific clients. 
              If you have a unique need, let's talk about building something together.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
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
