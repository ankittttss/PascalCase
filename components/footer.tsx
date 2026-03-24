import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  products: [
    { label: "Metadata Browser", href: "/products#metadata-browser" },
    { label: "Commission 365", href: "/products#commission-365" },
    { label: "AI Autocloser", href: "/products#ai-autocloser" },
    { label: "Flow Monitor", href: "/products#flow-monitor" },
  ],
  services: [
    { label: "D365 Marketing", href: "/services#marketing" },
    { label: "D365 Sales", href: "/services#sales" },
    { label: "D365 Customer Service", href: "/services#customer-service" },
    { label: "D365 Field Service", href: "/services#field-service" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-primary/2 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo black.png"
                alt="Pascalcase"
                width={90}
                height={45}
                className="h-7 w-auto dark:hidden"
                priority
              />
              <Image
                src="/logo white.png"
                alt="Pascalcase"
                width={90}
                height={45}
                className="hidden h-7 w-auto dark:block"
                priority
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground font-medium">
              Elite Dynamics 365 consultancy from ex-Microsoft engineers. Transforming enterprises through world-class solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card text-foreground hover:border-accent/60 hover:bg-accent/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-muted-foreground font-medium">
            © 2026 Pascalcase. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
