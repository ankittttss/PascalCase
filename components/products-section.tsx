import Link from "next/link"
import { ArrowRight, Grid3X3, DollarSign, Zap, Activity } from "lucide-react"

const products = [
  {
    icon: Grid3X3,
    title: "Metadata Browser",
    description: "Streamline D365 metadata exploration with a comprehensive browser for configurations and insights.",
    badge: "Popular",
    stat: "8,000+",
    statLabel: "Users",
    href: "#",
  },
  {
    icon: DollarSign,
    title: "Commission 365",
    description: "Automate commission calculations with intelligent rules engine and real-time sales tracking.",
    badge: "Enterprise",
    stat: "99.9%",
    statLabel: "Uptime",
    href: "#",
  },
  {
    icon: Zap,
    title: "AI Autocloser",
    description: "AI-powered case resolution that intelligently closes issues based on analysis and patterns.",
    badge: "AI",
    stat: "40%",
    statLabel: "Faster",
    href: "#",
  },
  {
    icon: Activity,
    title: "Flow Monitor",
    description: "Real-time Power Automate monitoring with intelligent alerts and performance analytics.",
    badge: "New",
    stat: "24/7",
    statLabel: "Monitoring",
    href: "#",
  },
]

export function ProductsSection() {
  return (
    <section id="products" style={{ padding: '112px 40px', position: 'relative' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ maxWidth: '768px', marginBottom: '80px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--orange)', letterSpacing: '1px', textTransform: 'uppercase' }}>Products</span>
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: 'var(--ink)', marginTop: '12px', lineHeight: 1.1 }}>
            Engineered for Excellence
          </h2>
          <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--ink-3)', maxWidth: '512px', lineHeight: 1.6 }}>
            Enterprise-grade tools purpose-built to extend and optimize your Dynamics 365 platform.
          </p>
        </div>

        {/* Products grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {products.map((product) => (
            <Link key={product.title} href={product.href} style={{ textDecoration: 'none' }}>
              <div style={{ height: '100%', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'var(--white)', transition: 'all 0.3s', cursor: 'pointer' }} className="hover:shadow-lg">
                <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', height: '48px', width: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius)', background: 'rgba(249, 115, 22, 0.1)' }}>
                      <product.icon style={{ height: '24px', width: '24px', color: 'var(--orange)' }} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, background: 'rgba(249, 115, 22, 0.15)', color: 'var(--ink)', border: '1px solid rgba(249, 115, 22, 0.3)', padding: '4px 12px', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>
                    {product.description}
                  </p>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px 0', lineHeight: 1 }}>{product.stat}</p>
                      <p style={{ fontSize: '11px', color: 'var(--ink-3)', fontWeight: 500, margin: 0, textTransform: 'uppercase' }}>{product.statLabel}</p>
                    </div>
                    <ArrowRight style={{ height: '20px', width: '20px', color: 'var(--orange)' }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
