const stats = [
  { value: "8,000+", label: "Users", description: "Actively deployed" },
  { value: "4", label: "Products", description: "Enterprise-grade" },
  { value: "100%", label: "D365 Focused", description: "Exclusive expertise" },
  { value: "15+", label: "Years", description: "Combined experience" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-secondary/50 to-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
