import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Getting Started with Power Pages Portals",
    description: "Learn how to build customer-facing portals using Power Pages and integrate them with Dynamics 365.",
    category: "Power Pages",
    date: "Jan 15, 2026",
    href: "#",
  },
  {
    title: "Optimizing D365 Customer Service Performance",
    description: "Best practices for improving response times and case resolution rates in your service center.",
    category: "Customer Service",
    date: "Jan 10, 2026",
    href: "#",
  },
  {
    title: "Azure Integration Patterns for D365",
    description: "Explore common patterns for integrating Azure services with your Dynamics 365 environment.",
    category: "Azure",
    date: "Jan 5, 2026",
    href: "#",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest from our blog
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Insights and tutorials from our team of D365 experts.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="mt-4 text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 text-sm font-medium text-primary"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
