import type { CoreModule } from '../../types/documentation'

export const analyticsModule: CoreModule = {
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
}
