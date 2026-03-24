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
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '64px', marginBottom: '64px' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <Image
                src="/logo black.png"
                alt="Pascalcase"
                width={30}
                height={30}
                style={{ height: '28px', width: 'auto' }}
                priority
              />
            </Link>
            <p style={{ maxWidth: '320px', fontSize: '13px', lineHeight: 1.7, color: 'var(--ink-3)', fontWeight: 500, margin: 0 }}>
              Elite Dynamics 365 consultancy from ex-Microsoft engineers. Transforming enterprises through world-class solutions.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  style={{ display: 'flex', height: '44px', width: '44px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--white)', color: 'var(--ink)', textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.target.style.borderColor = 'var(--orange)'; e.target.style.background = 'rgba(249, 115, 22, 0.05)'; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--white)'; }}
                  aria-label={social.label}
                >
                  <social.icon style={{ height: '20px', width: '20px', color: 'var(--ink)' }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Products</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '13px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--ink-3)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '13px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--ink-3)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Company</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: '13px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--ink-3)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }} className="md:flex-row">
          <p style={{ fontSize: '11px', color: 'var(--ink-3)', fontWeight: 500, margin: 0 }}>
            © 2026 Pascalcase. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="#" style={{ fontSize: '11px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--ink)'} onMouseLeave={(e) => e.target.style.color = 'var(--ink-3)'}>
              Privacy Policy
            </Link>
            <Link href="#" style={{ fontSize: '11px', color: 'var(--ink-3)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--ink)'} onMouseLeave={(e) => e.target.style.color = 'var(--ink-3)'}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
