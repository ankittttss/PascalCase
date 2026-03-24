import { Check } from "lucide-react"

const benefits = [
  "Low-cost implementation with no hidden fees",
  "Custom data migration tools built in-house",
  "License cost reduction strategies",
  "Microsoft-exclusive focus and expertise",
  "D365 tool developers on staff",
  "Direct access to ex-Microsoft engineers",
]

export function AboutSection() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--off-white)', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          {/* Left column */}
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.8px', color: 'var(--ink)', margin: 0, lineHeight: 1.2 }}>
              We are ex-Microsoft employees with unparalleled product knowledge
            </h2>
            <p style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-3)', margin: '24px 0 0 0' }}>
              Our team brings decades of combined experience from inside Microsoft, 
              giving us unique insights into how Dynamics 365 works at its core. 
              This insider knowledge translates to better implementations, 
              smarter customizations, and solutions that truly work.
            </p>
          </div>

          {/* Right column */}
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: 0, padding: 0, listStyle: 'none' }}>
              {benefits.map((benefit) => (
                <li key={benefit} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ display: 'flex', height: '24px', width: '24px', flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.1)' }}>
                    <Check style={{ height: '16px', width: '16px', color: 'var(--orange)' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--ink)' }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
