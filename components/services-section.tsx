import { Target, Headphones, Wrench, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Marketing",
    number: "01",
    description: "Master sophisticated customer journeys, email marketing, and event management solutions.",
    features: ["Customer Journeys", "Email Marketing", "Event Management", "Lead Scoring"],
  },
  {
    icon: Headphones,
    title: "Customer Service",
    number: "02",
    description: "Build world-class omnichannel support operations with intelligent case management.",
    features: ["Omnichannel", "Case Management", "Knowledge Base", "SLA Tracking"],
  },
  {
    icon: Wrench,
    title: "Field Service",
    number: "03",
    description: "Optimize on-site operations with intelligent scheduling and resource management.",
    features: ["Resource Scheduling", "Work Orders", "Mobile App", "IoT Integration"],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    number: "04",
    description: "Accelerate revenue with AI-powered insights and intelligent pipeline analytics.",
    features: ["Lead Management", "Pipeline Analytics", "Sales Insights", "Forecasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" style={{ padding: '112px 40px', position: 'relative' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ maxWidth: '768px', marginBottom: '80px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--orange)', letterSpacing: '1px', textTransform: 'uppercase' }}>Expertise</span>
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: 'var(--ink)', marginTop: '12px', lineHeight: 1.1 }}>
            Deep D365 Mastery
          </h2>
          <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--ink-3)', maxWidth: '512px', lineHeight: 1.6 }}>
            Comprehensive consulting across every major module—from strategy through implementation.
          </p>
        </div>

        {/* Services grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {services.map((service) => (
            <div key={service.title} style={{ border: '1px solid var(--border)', background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px 24px', transition: 'all 0.3s', overflow: 'hidden', position: 'relative' }} className="hover:shadow-lg">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <p style={{ fontSize: '56px', fontWeight: 700, color: 'rgba(15, 15, 14, 0.08)', margin: 0, lineHeight: 0.8 }}>
                    {service.number}
                  </p>
                </div>
                <div style={{ display: 'flex', height: '48px', width: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius)', background: 'rgba(249, 115, 22, 0.1)' }}>
                  <service.icon style={{ height: '24px', width: '24px', color: 'var(--orange)' }} />
                </div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px 0' }}>
                D365 {service.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                {service.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    style={{ borderRadius: '9999px', background: 'rgba(249, 115, 22, 0.08)', border: '1px solid rgba(249, 115, 22, 0.2)', padding: '6px 12px', fontSize: '11px', fontWeight: 600, color: 'var(--ink)', transition: 'all 0.2s' }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
