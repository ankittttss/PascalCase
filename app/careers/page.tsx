import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  MapPin, 
  Clock, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Coffee,
  Globe
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Work on Cutting-Edge Tech",
    description: "Build products used by thousands on Microsoft's latest platforms."
  },
  {
    icon: Users,
    title: "Small Team, Big Impact",
    description: "Your work directly shapes our products and client solutions."
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Learn from ex-Microsoft experts and accelerate your career."
  },
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours that suit your lifestyle."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Generous PTO, mental health days, and no crunch culture."
  },
  {
    icon: Briefcase,
    title: "Competitive Package",
    description: "Top-tier salary, equity options, and comprehensive benefits."
  }
]

const openings = [
  {
    id: 1,
    title: "Senior Dynamics 365 Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build custom solutions and plugins for Dynamics 365 and Power Platform. Deep C# and Dataverse experience required.",
    requirements: [
      "5+ years Dynamics 365 development",
      "Strong C# and .NET skills",
      "Experience with Power Platform",
      "Dataverse/CDS expertise"
    ]
  },
  {
    id: 2,
    title: "Power Platform Consultant",
    department: "Consulting",
    location: "Remote",
    type: "Full-time",
    description: "Lead client implementations and provide technical guidance on Power Platform solutions including Power Apps, Power Automate, and Power BI.",
    requirements: [
      "3+ years Power Platform experience",
      "Client-facing consulting experience",
      "Strong communication skills",
      "Solution architecture knowledge"
    ]
  },
  {
    id: 3,
    title: "Product Manager - D365 Tools",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our AppSource products. Work closely with engineering and customers to deliver impactful features.",
    requirements: [
      "3+ years product management",
      "Experience with B2B SaaS products",
      "Technical background preferred",
      "Microsoft ecosystem knowledge"
    ]
  },
  {
    id: 4,
    title: "Technical Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description: "Create documentation, tutorials, and blog content for our products and D365 development community.",
    requirements: [
      "Strong technical writing skills",
      "Experience with developer docs",
      "Understanding of D365/Power Platform",
      "SEO knowledge a plus"
    ]
  }
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 h-[400px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              We're Hiring
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Build the future of Dynamics 365 with us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Join a team of ex-Microsoft experts creating products and solutions that 
              help businesses get more from their D365 investments.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Join Pascalcase?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe great work comes from happy, supported team members.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find your next opportunity with us.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6">
            {openings.map((job) => (
              <Card key={job.id} className="border-border/50 bg-card/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                      <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/careers/${job.id}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground mb-2">Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          {req}
                        </span>
                      ))}
                    </div>
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
              Don't see the right role?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for talented people. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/contact">
                  Get in Touch
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
