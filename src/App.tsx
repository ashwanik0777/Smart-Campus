import { useEffect, useMemo, useState } from 'react'

const problemPoints = [
  'Manual complaint registration via calls and paper forms',
  'No centralized tracking and monitoring platform',
  'Delayed response and resolution timelines',
  'Weak coordination among departments, vendors, and technicians',
  'Repeated complaints due to missing closure validation and follow-up',
  'No standard SLA policy visibility for campus users',
  'Inventory visibility is disconnected from complaint resolution',
  'No analytics for performance and predictive planning',
]

const objectivePoints = [
  'Single unified digital platform for all campus services',
  'Online complaint registration with real-time status tracking',
  'Optimized technician and vendor allocation workflows',
  'Complete service history and audit-ready records',
  'SLA (Service Level Agreement)-aware escalation and proactive alerting workflows',
  'Complaint closure with customer/staff verification and quality check',
  'Integrated inventory and material usage accountability',
  'Cross-role rating and feedback loop for service improvement',
  'Data-driven decision support through analytics dashboards',
]

const architectureLayers = [
  {
    title: 'Presentation Layer',
    detail: 'Web portal + PWA (Progressive Web Application) dashboards for customer/staff, technicians, admins, and vendors.',
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
    detail: 'RBAC (Role-Based Access Control), authentication, authorization, password hashing, and secure API (Application Programming Interface) access controls.',
  },
]

const moduleCatalog = [
  {
    name: 'User & Access Module',
    owner: 'Super Admin',
    purpose: 'Manage users, roles, permissions, and policy-based access for every dashboard.',
    subModules: [
      'Identity & SSO (Single Sign-On)',
      'RBAC (Role-Based Access Control) Policy Engine',
      'Session Manager',
      'Access Audit Tracker',
    ],
    capabilities: [
      'Role onboarding and profile lifecycle',
      'Role-Based Access Control (RBAC) and permission matrix',
      'Password reset, account lock, and secure login policies',
      'Session audit and activity tracing',
    ],
    workflows: [
      'User registration → role mapping → approval → activation',
      'Login attempt → policy check → MFA (Multi-Factor Authentication)/OTP (One-Time Password) validation → session issue',
      'Role update → permission recalculation → policy propagation',
    ],
    automations: [
      'Inactive account suspension after threshold',
      'Auto-force logout on high-risk login events',
      'Scheduled credential health alerts',
    ],
    validations: [
      'Mandatory unique email and mobile checks',
      'Strong password and expiry policy enforcement',
      'Permission conflict detection before role publish',
    ],
    kpis: ['Failed login rate', 'Average session duration', 'Unauthorized access attempts blocked'],
    integrations: ['Identity provider (future SSO)', 'Central directory sync', 'Audit export service'],
    futureEnhancements: [
      'Adaptive authentication based on risk score',
      'Biometric login for mobile app extension',
    ],
    inputs: ['User identity data', 'Role master data', 'Authentication events'],
    outputs: ['Authorized sessions', 'Role-bound access tokens', 'Audit-ready access logs'],
    relatedModules: ['Complaint Intake Module', 'Analytics Module', 'Audit & Compliance Module'],
  },
  {
    name: 'Complaint Intake Module',
    owner: 'Customer / Staff',
    purpose: 'Capture all complaint requests with category, location, media proof, and priority metadata.',
    subModules: [
      'Complaint Form Engine',
      'Category & Location Mapper',
      'Ticket ID Generator',
      'Complaint Timeline Builder',
    ],
    capabilities: [
      'Smart complaint form with validation',
      'Category-location-priority mapping',
      'Image/video upload support',
      'Auto-ticket creation with timestamp and unique complaint ID',
    ],
    workflows: [
      'Complaint creation → validation → ticket generation → queueing',
      'Category mismatch check → department recommendation',
      'Closure reopen request → reason capture → reassessment',
    ],
    automations: [
      'Duplicate complaint suggestion based on location+issue pattern',
      'Auto-priority hints based on category severity',
      'Auto-acknowledgement with ticket timeline link',
    ],
    validations: [
      'Category and location mandatory selection',
      'Media size/type control with secure upload checks',
      'Description quality checks for actionable complaint data',
    ],
    kpis: ['Tickets created/day', 'Reopen ratio', 'Incomplete submission rate'],
    integrations: ['Media storage service', 'Location master registry', 'Notification service'],
    futureEnhancements: [
      'Voice-to-text complaint registration',
      'AI-assisted complaint category prediction',
    ],
    inputs: ['Customer/staff requests', 'Category master', 'Location master'],
    outputs: ['New complaint tickets', 'Queue-ready complaint payloads', 'Initial status logs'],
    relatedModules: ['Assignment Module', 'Notification & Escalation Module', 'Feedback & Rating Module'],
  },
  {
    name: 'Assignment Module',
    owner: 'Vendor + Department Admin',
    purpose: 'Assign complaints to the right technician using skill, location, workload, and SLA context.',
    subModules: [
      'Skill Matching Engine',
      'SLA (Service Level Agreement) Rule Router',
      'Workload Balancer',
      'Reassignment Controller',
    ],
    capabilities: [
      'Technician skill and availability matching',
      'Manual/assisted assignment controls',
      'Reassignment and escalation support',
      'Workload balancing across vendors',
    ],
    workflows: [
      'Ticket fetch → eligibility score → assign technician/vendor',
      'No match found → escalation to department admin',
      'SLA risk detected → fast-track reassignment workflow',
    ],
    automations: [
      'Auto-assignment for high-confidence matches',
      'SLA breach risk alerts before violation',
      'Reassignment recommendation after repeated delays',
    ],
    validations: [
      'Technician active status check before assignment',
      'Skill-tag compatibility validation',
      'SLA (Service Level Agreement) class to response-time policy binding',
    ],
    kpis: [
      'Assignment turnaround time',
      'Reassignment count',
      'SLA (Service Level Agreement) at-risk ticket count',
    ],
    integrations: ['Technician roster source', 'SLA (Service Level Agreement) policy service', 'Notification module'],
    futureEnhancements: [
      'Optimization-based assignment using route efficiency',
      'Dynamic load balancing by shift prediction',
    ],
    inputs: ['Pending complaint queue', 'Technician matrix', 'SLA rules'],
    outputs: ['Assignment records', 'Technician work orders', 'Escalation triggers'],
    relatedModules: ['Technician Execution Module', 'Inventory Module', 'Notification & Escalation Module'],
  },
  {
    name: 'Technician Execution Module',
    owner: 'Technician',
    purpose: 'Execute assigned work with progress updates, completion proof, and material consumption data.',
    subModules: ['Work Order Inbox', 'Progress Tracker', 'Proof Capture Unit', 'Closure Confirmation'],
    capabilities: [
      'Job acceptance and progress stage updates',
      'Before/after proof upload',
      'Material usage declaration',
      'Closure request with work summary',
    ],
    workflows: [
      'Work order accept → site visit → stage-wise update',
      'Material consume → usage entry → verification request',
      'Resolution submit → closure review → feedback trigger',
    ],
    automations: [
      'Reminder nudges for pending stage updates',
      'Auto-capture timestamps for each progress step',
      'Closure checklist prompts before completion submit',
    ],
    validations: [
      'Mandatory proof for closure-critical categories',
      'Material usage linkage with issued inventory',
      'Completion note minimum-detail validation',
    ],
    kpis: ['First-time fix rate', 'Average resolution duration', 'Proof compliance ratio'],
    integrations: ['Assignment queue', 'Inventory issue records', 'Feedback trigger endpoint'],
    futureEnhancements: ['Offline execution mode with sync', 'Geo-fenced job completion validation'],
    inputs: ['Assigned tasks', 'Material issue records', 'On-field update events'],
    outputs: ['Resolution notes', 'Proof artifacts', 'Completion requests'],
    relatedModules: ['Inventory Module', 'Feedback & Rating Module', 'Audit & Compliance Module'],
  },
  {
    name: 'Notification & Escalation Module',
    owner: 'System + Department Admin',
    purpose: 'Deliver timely notifications and escalate delays using SLA rules and workflow thresholds.',
    subModules: ['Alert Composer', 'Escalation Engine', 'Reminder Scheduler', 'Delivery Tracker'],
    capabilities: [
      'Multi-channel alerts (SMS - Short Message Service, email, app notifications)',
      'SLA (Service Level Agreement) breach detection and automatic escalation',
      'Role-targeted update subscriptions',
      'Reminder and follow-up scheduling',
    ],
    workflows: [
      'Event received → template select → role routing → delivery',
      'SLA (Service Level Agreement) threshold cross → escalation ladder execute',
      'Delivery failure detect → retry strategy → fallback channel',
    ],
    automations: [
      'Pre-SLA (Service Level Agreement) breach warnings to assignee and admin',
      'Auto reminder campaign for unresolved tickets',
      'Escalation matrix based on priority and zone',
    ],
    validations: [
      'Template and placeholder integrity checks',
      'Notification opt-in/opt-out compliance checks',
      'Escalation level authorization guards',
    ],
    kpis: ['Notification delivery success rate', 'Escalation resolution lag', 'Reminder effectiveness ratio'],
    integrations: ['SMS gateway', 'Email provider', 'App push notification service'],
    futureEnhancements: ['WhatsApp bot escalation replies', 'Smart quiet-hours routing policy'],
    inputs: ['Status changes', 'SLA timers', 'User notification preferences'],
    outputs: ['Actionable alerts', 'Escalation records', 'Communication audit logs'],
    relatedModules: ['Complaint Intake Module', 'Assignment Module', 'Analytics Module'],
  },
  {
    name: 'Inventory Module',
    owner: 'Store + Vendor',
    purpose: 'Track material stock, issue parts for tasks, and map consumption to complaint resolutions.',
    subModules: ['Stock Ledger', 'Issue/Return Desk', 'Usage Reconciliation', 'Procurement Alert Board'],
    capabilities: [
      'Stock management and reorder thresholds',
      'Issue-return tracking per technician and complaint',
      'Material usage reconciliation',
      'Low stock and critical inventory alerts',
    ],
    workflows: [
      'Issue request → store approval → item dispatch',
      'Usage submit → complaint link check → ledger update',
      'Threshold breach → procurement alert generation',
    ],
    automations: [
      'Auto low-stock notifications',
      'Material consumption anomaly alerts',
      'Pending return reminders to technicians',
    ],
    validations: [
      'Stock availability before issue commit',
      'Complaint-ticket linkage mandatory for issue entries',
      'Negative stock prevention controls',
    ],
    kpis: ['Stock-out incidents', 'Issue-to-usage mismatch rate', 'Average replenishment cycle'],
    integrations: ['Supplier/procurement records', 'Technician module', 'Analytics dashboard'],
    futureEnhancements: ['Barcode/QR inventory scanning', 'Demand forecasting by category and season'],
    inputs: ['Inventory catalog', 'Material issue requests', 'Technician usage records'],
    outputs: ['Updated stock ledger', 'Material usage statements', 'Procurement alerts'],
    relatedModules: ['Assignment Module', 'Technician Execution Module', 'Analytics Module'],
  },
  {
    name: 'Feedback & Rating Module',
    owner: 'All Roles',
    purpose: 'Enable continuous quality improvement through structured ratings and feedback loops.',
    subModules: ['Rating Form Engine', 'Comment Analyzer', 'Quality Index Calculator', 'Corrective Action Queue'],
    capabilities: [
      'Give ratings and feedback after each resolved ticket',
      'Role-wise feedback scoring (customer/staff, technician, vendor, admin)',
      'Comment moderation and follow-up actions',
      'Satisfaction trend and root-cause indicators',
    ],
    workflows: [
      'Ticket closure → feedback prompt → rating capture → score publish',
      'Low rating detect → corrective action task creation',
      'Repeated issue sentiment trend → alert to campus admin',
    ],
    automations: [
      'Auto reminder for pending feedback submissions',
      'Escalate ratings below threshold to governance team',
      'Auto-tag comments by quality themes',
    ],
    validations: [
      'One feedback response per resolved ticket per role',
      'Comment abuse and policy moderation filters',
      'Role-aware weighted scoring integrity checks',
    ],
    kpis: ['Average satisfaction score', 'Low-rating recovery time', 'Feedback participation ratio'],
    integrations: ['Complaint closure events', 'Analytics insights engine', 'Admin corrective action queue'],
    futureEnhancements: ['NLP (Natural Language Processing)-based sentiment intelligence', 'Voice feedback capture'],
    inputs: ['Resolved complaint records', 'Role-level review forms', 'Service quality metrics'],
    outputs: ['Feedback scores', 'Corrective action recommendations', 'Quality index for analytics'],
    relatedModules: ['Complaint Intake Module', 'Technician Execution Module', 'Analytics Module'],
  },
  {
    name: 'Analytics Module',
    owner: 'Campus Admin + Super Admin',
    purpose: 'Generate operational insights for governance, planning, and predictive maintenance readiness.',
    subModules: ['KPI Dashboard Builder', 'Trend Intelligence', 'Scorecard Generator', 'Forecast Engine'],
    capabilities: [
      'SLA (Service Level Agreement), TAT (Turnaround Time), and first-time-fix dashboards',
      'Role, location, and category performance analytics',
      'Feedback-driven quality scoring',
      'Predictive trend indicators for recurring faults',
    ],
    workflows: [
      'Event ingest → model aggregation → dashboard refresh',
      'Period close → scorecard compile → governance review',
      'Trend anomaly detect → action recommendation publish',
    ],
    automations: [
      'Auto dashboard refresh and cache invalidation',
      'Scheduled weekly and monthly report generation',
      'KPI threshold breach notifications',
    ],
    validations: [
      'Metric definition consistency checks',
      'Data completeness checks before report generation',
      'Cross-module reconciliation for SLA (Service Level Agreement) metrics',
    ],
    kpis: [
      'SLA (Service Level Agreement) compliance %',
      'Mean time to resolution',
      'Recurring complaint reduction %',
    ],
    integrations: ['Feedback module', 'Inventory module', 'Audit export service'],
    futureEnhancements: [
      'Predictive maintenance ML (Machine Learning) model',
      'Natural language analytics assistant',
    ],
    inputs: ['Complaint lifecycle data', 'Feedback data', 'Inventory and technician productivity records'],
    outputs: ['KPI dashboards', 'Department/vendor scorecards', 'Forecast reports'],
    relatedModules: ['Feedback & Rating Module', 'Inventory Module', 'Audit & Compliance Module'],
  },
  {
    name: 'Audit & Compliance Module',
    owner: 'Super Admin + Compliance Team',
    purpose: 'Preserve immutable activity trails for policy checks, audits, and security investigations.',
    subModules: ['Audit Collector', 'Compliance Rule Monitor', 'Evidence Export', 'Retention Controller'],
    capabilities: [
      'Action-level audit logging',
      'Role and permission change tracking',
      'Data access traceability and export-ready evidence',
      'Backup and retention policy monitoring',
    ],
    workflows: [
      'System event capture → log indexing → retention tagging',
      'Compliance check schedule → violation detection → alert issue',
      'Audit request → evidence bundle compile → secure export',
    ],
    automations: [
      'Tamper detection alerts on critical log streams',
      'Policy breach notifications to super admin',
      'Periodic compliance health snapshot generation',
    ],
    validations: [
      'Immutable log chain verification',
      'Retention policy execution checks',
      'Secure export access authorization checks',
    ],
    kpis: ['Audit coverage %', 'Policy breach response time', 'Evidence export turnaround'],
    integrations: ['Security event stream', 'Analytics quality controls', 'External audit handoff tools'],
    futureEnhancements: ['Regulation-specific compliance packs', 'Automated risk scoring dashboard'],
    inputs: ['System events', 'Security events', 'Role and workflow transitions'],
    outputs: ['Audit reports', 'Compliance evidence packs', 'Risk and anomaly flags'],
    relatedModules: ['User & Access Module', 'Analytics Module', 'Technician Execution Module'],
  },
]

const moduleRelations = [
  'User & Access Module authorizes all role dashboards and APIs (Application Programming Interfaces).',
  'Complaint Intake Module creates tickets consumed by Assignment Module.',
  'Assignment Module pushes work orders to Technician Execution Module.',
  'Technician Execution Module updates status and requests closure.',
  'Notification & Escalation Module listens to every status event and SLA (Service Level Agreement) timer.',
  'Inventory Module links each material issue to complaint and technician records.',
  'Feedback & Rating Module activates at resolution and updates quality metrics.',
  'Analytics Module aggregates all module outputs for KPI (Key Performance Indicator) and predictive insights.',
  'Audit & Compliance Module records every critical action across modules.',
]

const roleCards = [
  {
    title: 'Customer / Staff',
    items: [
      'Raise complaints',
      'Track status in real-time',
      'Upload image/video evidence',
      'Give ratings and feedback',
    ],
  },
  {
    title: 'Vendor',
    items: [
      'Manage technicians and shifts',
      'Monitor SLA compliance',
      'Handle assignments and escalations',
      'Give ratings and feedback',
    ],
  },
  {
    title: 'Technician',
    items: [
      'Accept jobs and schedule visits',
      'Update progress milestones',
      'Add completion proof',
      'Give ratings and feedback',
    ],
  },
  
  {
    title: 'Department Admin',
    items: [
      'Review area complaints',
      'Approve/escalate delayed cases',
      'Adjust priority and SLA class',
      'Give ratings and feedback',
    ],
  },
  {
    title: 'Campus Admin',
    items: [
      'Global monitoring and governance',
      'Vendor performance governance',
      'Resource planning and optimization',
      'Give ratings and feedback',
    ],
  },
  {
    title: 'Super Admin',
    items: [
      'Role & permission control',
      'System and policy configuration',
      'Audit logs and compliance oversight',
      'Give ratings and feedback',
    ],
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
                maintenance efficiency, transparency, accountability, and continuous quality
                improvement across a distributed campus.
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
          <h2 className="text-2xl font-semibold">Core Modules (Separate but Connected)</h2>
          <p className="mt-2 text-sm text-[rgb(var(--color-text-secondary))]">
            Each module is independently designed for ownership and scalability, while data contracts
            and workflow events keep all modules interconnected.
          </p>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {moduleCatalog.map((module) => (
              <article
                key={module.name}
                className="rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] p-5"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{module.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--color-primary))]">
                    Owner: {module.owner}
                  </p>
                </div>

                <p className="mt-3 text-sm text-[rgb(var(--color-text-secondary))]">{module.purpose}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold">Sub-Modules</h4>
                  <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                    {module.subModules.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">Capabilities</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.capabilities.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">Inputs</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.inputs.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    <h4 className="mt-3 text-sm font-semibold">Outputs</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.outputs.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">Workflows</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.workflows.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    <h4 className="mt-3 text-sm font-semibold">Automations</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.automations.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">Validation Rules</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.validations.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>

                    <h4 className="mt-3 text-sm font-semibold">KPIs (Key Performance Indicators)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.kpis.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold">Related Modules</h4>
                  <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                    {module.relatedModules.map((related) => (
                      <li key={related}>• {related}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">Integrations</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.integrations.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">Future Enhancements</h4>
                    <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                      {module.futureEnhancements.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold">Inter-Module Relationship Flow</h2>
          <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--color-text-secondary))]">
            {moduleRelations.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--color-primary))]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
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
