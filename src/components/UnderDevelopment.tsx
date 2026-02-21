interface UnderDevelopmentProps {
  title: string
  subtitle?: string
}

function UnderDevelopment({ title, subtitle }: UnderDevelopmentProps) {
  return (
    <main className="px-4 py-10 md:px-8">
      <section className="mx-auto max-w-7xl rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--color-primary))]">
          Module Workspace
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mt-3 text-sm text-[rgb(var(--color-text-secondary))] md:text-base">
          {subtitle ??
            'This page scaffold is ready. Module-specific components, API integrations, business workflows, and validations will be implemented here.'}
        </p>
        <div className="mt-6 rounded-xl border border-dashed border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] p-5 text-sm text-[rgb(var(--color-text-secondary))]">
          Under Development
        </div>
      </section>
    </main>
  )
}

export default UnderDevelopment
