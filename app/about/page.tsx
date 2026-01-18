import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  CheckCircle2,
  Linkedin,
  ArrowRight
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Microsoft Focused",
    description: "We work exclusively with Microsoft technologies, giving us unmatched depth of expertise in Dynamics 365 and Power Platform."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We don't just implement—we build. Our products on AppSource solve real problems that off-the-shelf solutions can't address."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We treat every engagement as a partnership. Your success is our success, and we're invested in your long-term growth."
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "From our Microsoft roots, we bring enterprise-grade standards to every project, regardless of size."
  }
]

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former Microsoft Principal PM on Dynamics 365. 12+ years building enterprise solutions.",
    linkedin: "#"
  },
  {
    name: "Sarah Mitchell",
    role: "Technical Director",
    bio: "Ex-Microsoft Senior Engineer. Specialist in Power Platform and custom integrations.",
    linkedin: "#"
  },
  {
    name: "James Wilson",
    role: "Solutions Architect",
    bio: "10+ years D365 implementations. Expert in Customer Service and Field Service modules.",
    linkedin: "#"
  },
  {
    name: "Priya Sharma",
    role: "Lead Developer",
    bio: "Creator of Metadata Browser. Full-stack developer with deep Dataverse expertise.",
    linkedin: "#"
  }
]

const achievements = [
  "8,000+ Metadata Browser downloads",
  "4 Products on Microsoft AppSource",
  "50+ Enterprise implementations",
  "100% Microsoft technology focus",
  "Ex-Microsoft founding team",
  "Global client portfolio"
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[500px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">About Us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              We are ex-Microsoft employees building the future of D365
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Pascalcase was founded by former Microsoft employees who saw an opportunity 
              to bring deep product knowledge and innovative solutions to Dynamics 365 customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Pascalcase started with a simple observation: businesses investing in Dynamics 365 
                  often struggled to get the most from their investment. Off-the-shelf solutions 
                  couldn't address their unique needs, and finding consultants with deep Microsoft 
                  product knowledge was challenging.
                </p>
                <p className="leading-relaxed">
                  As former Microsoft employees who worked directly on Dynamics 365 products, 
                  we had the expertise to bridge this gap. We launched Pascalcase to provide 
                  both custom consulting services and innovative products that extend D365 capabilities.
                </p>
                <p className="leading-relaxed">
                  Today, our Metadata Browser has been downloaded over 8,000 times, and our suite 
                  of AppSource products helps businesses automate workflows, manage commissions, 
                  and resolve customer issues faster than ever.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do at Pascalcase.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 bg-background">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A team of Microsoft veterans dedicated to your success.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="border-border/50 bg-card/50 overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    <Link 
                      href={member.linkedin}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help transform your Dynamics 365 investment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/careers">
                  Join Our Team
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
