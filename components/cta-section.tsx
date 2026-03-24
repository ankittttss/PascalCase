import Link from "next/link"
import { MessageSquare, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section style={{ borderTop: '1px solid var(--border)', background: 'var(--off-white)', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.8px', color: 'var(--ink)', margin: 0, lineHeight: 1.2 }}>
            Ready to transform your Dynamics 365 investment?
          </h2>
          <p style={{ marginTop: '24px', fontSize: '15px', color: 'var(--ink-3)', lineHeight: 1.8, margin: '24px 0 0 0' }}>
            Let us show you how our tools and expertise can help you get more value 
            from your D365 implementation. Schedule a free consultation today.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }} className="sm:flex-row">
            <Link href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--orange)', color: 'white', fontWeight: 600, borderRadius: 'var(--radius-sm)', padding: '12px 20px', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.background = 'var(--orange-dark)'} onMouseLeave={(e) => e.target.style.background = 'var(--orange)'}>
              <MessageSquare style={{ height: '20px', width: '20px' }} />
              Chat with us on Teams
            </Link>
            <Link href="#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: 'var(--ink)', fontWeight: 600, borderRadius: 'var(--radius-sm)', padding: '12px 20px', cursor: 'pointer', textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--orange)'; e.target.style.color = 'var(--orange)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--ink)'; }}>
              Explore Products
              <ArrowRight style={{ height: '16px', width: '16px' }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
