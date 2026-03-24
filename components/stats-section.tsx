const stats = [
  { value: "8,000+", label: "Users", description: "Thriving ecosystem" },
  { value: "4", label: "Products", description: "Enterprise-proven" },
  { value: "50+", label: "Clients", description: "Global leaders" },
  { value: "15y", label: "Expertise", description: "Deep platform mastery" },
]

export function StatsSection() {
  return (
    <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)', padding: '96px 40px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-1px', color: 'var(--ink)', margin: 0, lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: 0 }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
