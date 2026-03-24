const stats = [
  { value: "8,000+", label: "Users", description: "Thriving ecosystem" },
  { value: "4", label: "Products", description: "Enterprise-proven" },
  { value: "50+", label: "Clients", description: "Global leaders" },
  { value: "15y", label: "Expertise", description: "Deep platform mastery" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border/50 bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="space-y-3 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 rounded-lg transition-all duration-300 -inset-2" />
              <div className="relative">
                <p className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors">
                  {stat.value}
                </p>
                <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <p className="text-sm font-bold text-foreground uppercase tracking-wide">
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
