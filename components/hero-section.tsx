import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(160deg, var(--orange-light) 0%, var(--white) 55%)' }} className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 border-b" style={{borderColor: 'var(--border)'}}>
      {/* Orange radial background */}
      <div className="pointer-events-none absolute -right-32 -top-32 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '1160px' }} className="mx-auto px-10 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div style={{ background: 'var(--white)', borderColor: 'var(--border)' }} className="inline-flex items-center gap-2 border rounded-full px-4 py-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--orange)' }} />
              <span style={{ color: 'var(--ink-2)', fontSize: '12px' }} className="font-bold tracking-wider uppercase">
                Ex-Microsoft Team
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 style={{ color: 'var(--ink)', fontSize: '52px', fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.08 }} className="m-0">
                We{' '}
                <span style={{ color: 'var(--orange)' }}>#build</span>{' '}
                Dynamics 365 and Power Platform tools
              </h1>
              <p style={{ color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.8 }} className="max-w-md m-0">
                Transform your Dynamics 365 investment into tangible results with seasoned ex-Microsoft partners who understand the platform inside and out.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="#products" style={{ background: 'var(--orange)', color: 'var(--white)' }} className="inline-flex items-center justify-center gap-2 font-bold rounded px-6 py-3 transition-all hover:brightness-90">
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--border-strong)' }} className="inline-flex items-center justify-center gap-2 font-bold rounded px-6 py-3 transition-all hover:border-orange hover:text-orange" style={{borderColor: 'var(--border-strong)'}} onMouseEnter={(e) => { e.target.style.borderColor = 'var(--orange)'; e.target.style.color = 'var(--orange)'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border-strong)'; e.target.style.color = 'var(--ink)'; }}>
                Chat on Teams
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ paddingTop: '28px', borderTop: '1px solid var(--border)' }} className="flex gap-12">
              <div>
                <p style={{ color: 'var(--ink)', fontSize: '28px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }} className="m-0">8,000+</p>
                <p style={{ color: 'var(--ink-3)', fontSize: '11.5px', fontWeight: 600 }} className="m-0 uppercase tracking-wider">Downloads</p>
              </div>
              <div>
                <p style={{ color: 'var(--ink)', fontSize: '28px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }} className="m-0">4</p>
                <p style={{ color: 'var(--ink-3)', fontSize: '11.5px', fontWeight: 600 }} className="m-0 uppercase tracking-wider">Products</p>
              </div>
              <div>
                <p style={{ color: 'var(--orange)', fontSize: '28px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }} className="m-0">100%</p>
                <p style={{ color: 'var(--ink-3)', fontSize: '11.5px', fontWeight: 600 }} className="m-0 uppercase tracking-wider">Focus</p>
              </div>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative hidden md:block">
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)' }} className="overflow-hidden shadow-lg">
              {/* Card header with orange */}
              <div style={{ background: 'var(--orange)', color: 'var(--white)' }} className="px-6 py-6 flex justify-between items-center">
                <h3 style={{ fontSize: '14px', fontWeight: 600, opacity: 0.9 }} className="m-0">Live Performance</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span style={{ fontSize: '11px', fontWeight: 700 }} className="m-0">LIVE</span>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ padding: '24px' }} className="space-y-6">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--white)', padding: '18px 16px' }}>
                    <p style={{ color: 'var(--ink)', fontSize: '28px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }} className="m-0">8K+</p>
                    <p style={{ color: 'var(--ink-3)', fontSize: '11.5px', fontWeight: 500 }} className="m-0">Active Users</p>
                  </div>
                  <div style={{ background: 'var(--white)', padding: '18px 16px' }}>
                    <p style={{ color: 'var(--orange)', fontSize: '28px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }} className="m-0">50+</p>
                    <p style={{ color: 'var(--ink-3)', fontSize: '11.5px', fontWeight: 500 }} className="m-0">Enterprise Clients</p>
                  </div>
                </div>

                {/* Team section */}
                <div style={{ paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ color: 'var(--ink-4)', fontSize: '11.5px', fontWeight: 600, marginBottom: '12px' }} className="m-0 uppercase tracking-wider">Our Team</p>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div style={{ background: '#C2410C' }} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div style={{ background: '#15803D' }} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
                      <div style={{ background: '#7C3AED' }} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
                      <div style={{ background: '#0369A1' }} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>
                    </div>
                    <span style={{ fontSize: '12.5px', color: 'var(--ink-2)', lineHeight: 1.5 }} className="m-0">
                      <strong>15+ years</strong> combined D365 expertise
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
