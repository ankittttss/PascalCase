import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Globe, 
  Headphones, 
  Cloud, 
  BarChart3, 
  ShoppingCart,
  Wrench,
  Zap,
  Database
} from "lucide-react"

const categories = [
  { name: "All", icon: Globe },
  { name: "Power Pages", icon: Globe },
  { name: "Customer Service", icon: Headphones },
  { name: "Azure", icon: Cloud },
  { name: "Marketing", icon: BarChart3 },
  { name: "Sales", icon: ShoppingCart },
  { name: "Field Service", icon: Wrench },
  { name: "Power Automate", icon: Zap },
]

const getCategoryIcon = (category: string) => {
  const found = categories.find(c => c.name === category)
  return found ? found.icon : Globe
}

const allPosts = [
  {
    title: "Getting Started with Power Pages Portals",
    description: "Learn how to build customer-facing portals using Power Pages and integrate them with Dynamics 365. This comprehensive guide covers everything from initial setup to advanced customizations.",
    category: "Power Pages",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    slug: "getting-started-power-pages",
    featured: true,
  },
  {
    title: "Optimizing D365 Customer Service Performance",
    description: "Best practices for improving response times and case resolution rates in your service center. Discover proven strategies used by enterprise teams.",
    category: "Customer Service",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    slug: "optimizing-customer-service",
    featured: true,
  },
  {
    title: "Azure Integration Patterns for D365",
    description: "Explore common patterns for integrating Azure services with your Dynamics 365 environment. From Logic Apps to Azure Functions.",
    category: "Azure",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    slug: "azure-integration-patterns",
    featured: true,
  },
  {
    title: "Building Custom Dashboards in D365 Marketing",
    description: "Create powerful marketing dashboards that give you real-time insights into campaign performance and customer engagement metrics.",
    category: "Marketing",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    slug: "custom-dashboards-marketing",
    featured: false,
  },
  {
    title: "Power Automate Flow Best Practices",
    description: "Learn how to build reliable, maintainable flows that scale with your business. Includes error handling and monitoring strategies.",
    category: "Power Automate",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    slug: "power-automate-best-practices",
    featured: false,
  },
  {
    title: "D365 Sales Pipeline Optimization",
    description: "Maximize your sales team productivity with advanced pipeline management techniques and automation workflows.",
    category: "Sales",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    slug: "sales-pipeline-optimization",
    featured: false,
  },
  {
    title: "Field Service Scheduling Deep Dive",
    description: "Master the Resource Scheduling Optimization (RSO) engine and deliver exceptional on-site service experiences.",
    category: "Field Service",
    date: "Dec 10, 2025",
    readTime: "11 min read",
    slug: "field-service-scheduling",
    featured: false,
  },
  {
    title: "Migrating to Dataverse: A Complete Guide",
    description: "Step-by-step guide to migrating your legacy data to Microsoft Dataverse with minimal downtime and data integrity.",
    category: "Azure",
    date: "Dec 5, 2025",
    readTime: "15 min read",
    slug: "migrating-to-dataverse",
    featured: false,
  },
  {
    title: "Customer Journey Orchestration in D365",
    description: "Design and implement personalized customer journeys that drive engagement and conversions across all touchpoints.",
    category: "Marketing",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    slug: "customer-journey-orchestration",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = allPosts.filter(post => post.featured)
  const regularPosts = allPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-xs">D365 Insights</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Technical guides, best practices, and insights from our team of Dynamics 365 
              and Power Platform experts.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => {
                const Icon = category.icon
                return (
                  <Badge
                    key={category.name}
                    variant={category.name === "All" ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5"
                  >
                    <Icon className="h-3 w-3" />
                    {category.name}
                  </Badge>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Featured Articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.category)
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                      <CategoryIcon className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs flex items-center gap-1">
                          <CategoryIcon className="h-3 w-3" />
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed line-clamp-2">
                        {post.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </p>
                        <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* All Posts */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">All Articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.category)
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs flex items-center gap-1">
                          <CategoryIcon className="h-3 w-3" />
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed line-clamp-3">
                        {post.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </p>
                        <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Stay Updated
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Get the latest D365 insights, tutorials, and product updates delivered to your inbox.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
