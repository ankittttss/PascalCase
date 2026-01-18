import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to transform your Dynamics 365 investment?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Let us show you how our tools and expertise can help you get more value 
            from your D365 implementation. Schedule a free consultation today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with us on Teams
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
