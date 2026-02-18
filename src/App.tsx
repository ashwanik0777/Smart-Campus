import { useEffect, useMemo, useState } from 'react'

const problemPoints = [
  'Manual complaint registration via calls and paper forms',
  'No centralized tracking and monitoring platform',
  'Delayed response and resolution timelines',
  'Weak coordination among departments, vendors, and technicians',
  'No analytics for performance and predictive planning',
]

const objectivePoints = [
  'Single unified digital platform for all campus services',
  'Online complaint registration with real-time status tracking',
  'Optimized technician and vendor allocation workflows',
  'Complete service history and audit-ready records',
  'Data-driven decision support through analytics dashboards',
]

const architectureLayers = [
  {
    title: 'Presentation Layer',
    detail: 'Web portal + PWA dashboards for students, staff, technicians, admins, and vendors.',
  },
  {
    title: 'Application Layer',
    detail: 'Complaint lifecycle, technician allocation, notification/escalation, feedback, and analytics engines.',
  },
  {
    title: 'Integration Layer',
    detail: 'IoT sensor gateway, GIS mapping, and communication channels (SMS, email, WhatsApp).',
  },
  {
    title: 'Data Layer',
    detail: 'MySQL relational model for users, complaints, assignments, inventory, feedback, and audit logs.',
  },
  {
    title: 'Security Layer',
    detail: 'RBAC, authentication, authorization, password hashing, and secure API access controls.',
  },
]

const roleCards = [
  {
    title: 'Student / Staff',
    items: ['Raise complaints', 'Track status', 'Upload media', 'Give ratings and feedback'],
  },
  {
    title: 'Technician',
    items: ['Accept jobs', 'Update progress', 'Add completion proof', 'Record material usage'],
  },
  {
    title: 'Vendor',
    items: ['Manage technicians', 'Monitor SLA', 'Handle assignments', 'Track performance'],
  },
  {
    title: 'Department Admin',
    items: ['Review area complaints', 'Approve/escalate', 'Adjust priority', 'Generate reports'],
  },
  {
    title: 'Campus Admin',
    items: ['Global monitoring', 'Vendor governance', 'Resource planning', 'Cross-campus analytics'],
  },
  {
    title: 'Super Admin',
    items: ['Role & permission control', 'System configuration', 'Audit logs', 'Backup oversight'],
  },
]

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Frontend Foundation',
    detail: 'Role-based UI design, dashboard layouts, and static data integration.',
  },
  {
    phase: 'Phase 2',
    title: 'Backend Integration',
    detail: 'REST API development, MySQL integration, and authentication workflows.',
  },
  {
    phase: 'Phase 3',
    title: 'Advanced Intelligence',
    detail: 'Analytics dashboards, report generation, and predictive maintenance capabilities.',
  },
]

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    setIsDark((previous) => {
      const next = !previous
      document.documentElement.classList.toggle('dark', next)
      window.localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  const pageSubtitle = useMemo(
    () =>
      'Smart Campus Service & Maintenance Management System for Gautam Buddha University',
    [],
  )

  return (
    <main className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--color-text-secondary))]">
                Gautam Buddha University
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{pageSubtitle}</h1>
              <p className="mt-3 max-w-3xl text-[rgb(var(--color-text-secondary))]">
                A centralized digital platform inspired by service aggregation workflows to improve
                maintenance efficiency, transparency, and accountability across a distributed campus.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-card))]"
            >
              {isDark ? '☀️ Light Theme' : '🌙 Dark Theme'}
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Problem Statement</h2>
            <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--color-text-secondary))]">
              {problemPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--color-danger))]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Objectives</h2>
            <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--color-text-secondary))]">
              {objectivePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--color-success))]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold">System Architecture</h2>
          <p className="mt-2 text-sm text-[rgb(var(--color-text-secondary))]">
            Layered, modular, and scalable architecture with clear responsibilities across UI,
            business logic, integrations, data management, and security.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {architectureLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] p-4"
              >
                <h3 className="font-semibold">{layer.title}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--color-text-secondary))]">{layer.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold">Role-Based Dashboards</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roleCards.map((role) => (
              <article
                key={role.title}
                className="rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] p-4"
              >
                <h3 className="font-semibold">{role.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                  {role.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {roadmap.map((step) => (
            <article
              key={step.phase}
              className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--color-primary))]">
                {step.phase}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-[rgb(var(--color-text-secondary))]">{step.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
