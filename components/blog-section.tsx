import Link from "next/link"
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
    <section id="blog" style={{ padding: '80px 40px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--ink)', margin: 0 }}>
              Latest from our blog
            </h2>
            <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--ink-3)', margin: '16px 0 0 0' }}>
              Insights and tutorials from our team of D365 experts.
            </p>
          </div>
          <Link
            href="/blog"
            style={{ display: 'none', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--orange)', textDecoration: 'none', transition: 'opacity 0.2s' }}
            className="md:flex"
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            View all posts
            <ArrowRight style={{ height: '16px', width: '16px' }} />
          </Link>
        </div>

        {/* Blog grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {posts.map((post) => (
            <Link key={post.title} href={post.href} style={{ textDecoration: 'none' }}>
              <div style={{ height: '100%', border: '1px solid var(--border)', background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:shadow-lg">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, background: 'rgba(249, 115, 22, 0.1)', color: 'var(--ink)', padding: '4px 12px', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--ink-3)' }}>
                    {post.date}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div style={{ marginTop: '32px', display: 'flex' }}>
          <Link
            href="/blog"
            style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--orange)', textDecoration: 'none' }}
          >
            View all posts
            <ArrowRight style={{ height: '16px', width: '16px' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
