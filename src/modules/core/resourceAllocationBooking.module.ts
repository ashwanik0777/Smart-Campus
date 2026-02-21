import type { CoreModule } from '../../types/documentation'

export const resourceAllocationBookingModule: CoreModule = {
  name: 'Resource Allocation & Booking Module',
  owner: 'Campus Admin + Department Admin + Vendor',
  purpose:
    'Plan, allocate, and book campus resources such as technicians, vehicles, tools, service slots, and shared facilities with conflict-free scheduling and utilization governance.',
  subModules: [
    'Resource Registry',
    'Booking Calendar',
    'Allocation Optimizer',
    'Conflict Resolution Engine',
  ],
  capabilities: [
    'Centralized resource catalog for manpower, equipment, and service assets',
    'Slot-based booking for maintenance tasks and planned operations',
    'Priority-aware resource assignment based on SLA and urgency',
    'Capacity balancing across departments, zones, and vendors',
  ],
  workflows: [
    'Request raised → slot availability check → reservation hold → allocation confirmation',
    'Conflict detected → alternate slot recommendation → approval workflow',
    'Booking completed → utilization log update → analytics sync',
  ],
  automations: [
    'Auto-suggest best-fit resources based on skill, location, and load',
    'Automatic booking reminders before scheduled start',
    'Escalation for unconfirmed critical bookings near SLA deadline',
  ],
  validations: [
    'No-overlap booking validation for the same resource and time window',
    'Mandatory ownership and approval checks for high-priority allocations',
    'Eligibility rules for skill, zone, and asset readiness before confirmation',
  ],
  kpis: [
    'Resource utilization percentage',
    'Booking confirmation turnaround time',
    'Schedule conflict resolution time',
  ],
  integrations: [
    'Assignment Module for technician linkage',
    'Notification & Escalation Module for reminders and alerts',
    'Analytics Module for utilization and capacity insights',
  ],
  futureEnhancements: [
    'AI-assisted predictive slot planning for peak demand windows',
    'Route-aware multi-resource scheduling optimization',
  ],
  inputs: [
    'Resource requests',
    'Technician and asset availability matrix',
    'Priority and SLA metadata',
  ],
  outputs: [
    'Confirmed bookings and allocation records',
    'Conflict alerts and alternative recommendations',
    'Utilization logs and schedule audit trail',
  ],
  relatedModules: [
    'Assignment Module',
    'Notification & Escalation Module',
    'Analytics Module',
    'Audit & Compliance Module',
  ],
}
