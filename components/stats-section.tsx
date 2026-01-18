const stats = [
  { value: "8,000+", label: "Downloads", description: "Metadata Browser" },
  { value: "4", label: "Products", description: "On AppSource" },
  { value: "100%", label: "Microsoft Focus", description: "Exclusive expertise" },
  { value: "Ex-MSFT", label: "Team", description: "Insider knowledge" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
