import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'User Access', to: '/modules/user-access' },
  { label: 'Complaint Intake', to: '/modules/complaint-intake' },
  { label: 'Assignment', to: '/modules/assignment' },
  { label: 'Technician Execution', to: '/modules/technician-execution' },
  { label: 'Notification Escalation', to: '/modules/notification-escalation' },
  { label: 'Inventory', to: '/modules/inventory' },
  { label: 'Feedback Rating', to: '/modules/feedback-rating' },
  { label: 'Analytics', to: '/modules/analytics' },
  { label: 'Audit Compliance', to: '/modules/audit-compliance' },
  { label: 'Billing', to: '/modules/billing' },
]

function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold md:text-lg">Smart Campus Platform</h1>
          <span className="text-xs text-[rgb(var(--color-text-secondary))] md:text-sm">
            Gautam Buddha University
          </span>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg border px-3 py-1.5 text-xs font-medium md:text-sm',
                  isActive
                    ? 'border-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary))] text-white'
                    : 'border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text-primary))]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
