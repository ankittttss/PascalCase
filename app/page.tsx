import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
