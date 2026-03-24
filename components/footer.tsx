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
    <footer className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo black.png"
                alt="Pascalcase Logo"
                width={100}
                height={50}
                className="h-8 w-auto rounded-md dark:hidden"
                priority
              />
              <Image
                src="/logo white.png"
                alt="Pascalcase Logo"
                width={100}
                height={50}
                className="hidden h-8 w-auto rounded-md dark:block"
                priority
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Expert Dynamics 365 consultancy and solutions from ex-Microsoft engineers dedicated to maximizing your platform investments.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Products</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-tight">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Pascalcase. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
