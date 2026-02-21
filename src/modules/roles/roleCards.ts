import type { RoleDashboard } from '../../types/documentation'

export const roleCards: RoleDashboard[] = [
  {
    title: 'Customer / Staff',
    items: [
      'Raise complaints',
      'Track status in real-time',
      'Upload image/video evidence',
      'View service billing summary and invoice status',
      'Give ratings and feedback',
    ],
    operationalControls: [
      'Reopen ticket with reason and supporting proof',
      'Priority visibility for critical campus services',
      'Service timeline view with assigned team details',
      'Complaint history with filter by category/location',
    ],
    insightsReports: [
      'Personal service response summary',
      'Resolved vs pending ticket trend',
      'Invoice and payment status summary',
      'Feedback submission and satisfaction trend',
    ],
    automations: [
      'Auto acknowledgement after ticket creation',
      'Reminder for pending feedback submissions',
      'Escalation alerts when SLA is near breach',
    ],
  },
  {
    title: 'Vendor',
    items: [
      'Manage technicians and shifts',
      'Monitor SLA compliance',
      'Handle assignments and escalations',
      'Track invoice approvals and vendor settlements',
      'Give ratings and feedback',
    ],
    operationalControls: [
      'Technician roster and capacity planning board',
      'Assignment approval and reassignment controls',
      'Cross-zone workload balancing',
      'Material requirement planning for work orders',
      'Settlement claim submission and invoice dispute handling',
    ],
    insightsReports: [
      'Vendor-wise SLA compliance report',
      'Technician productivity and first-time-fix report',
      'Pending settlement and payment aging report',
      'Low-rating incident and recovery tracker',
    ],
    automations: [
      'Auto assignment recommendations by skill and load',
      'Pre-SLA breach warning to vendor manager',
      'Delay-based corrective action queue creation',
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
    operationalControls: [
      'Daily task queue with priority badges',
      'On-site checklist for category-wise compliance',
      'Material usage logging linked to complaint ID',
      'Closure request with mandatory completion notes',
    ],
    insightsReports: [
      'Individual resolution time dashboard',
      'Job completion and backlog trend',
      'Quality score from customer/staff feedback',
    ],
    automations: [
      'Auto reminder for delayed progress updates',
      'Timestamp capture for each work stage',
      'Closure proof validation before final submit',
    ],
  },
  {
    title: 'Department Admin',
    items: [
      'Review area complaints',
      'Approve/escalate delayed cases',
      'Adjust priority and SLA class',
      'Review exceptional cost and approval cases',
      'Give ratings and feedback',
    ],
    operationalControls: [
      'Department-level queue governance by category/zone',
      'Priority override and emergency routing',
      'Escalation matrix execution and ownership tracking',
      'Inter-department dependency coordination support',
    ],
    insightsReports: [
      'Department SLA and turnaround report',
      'Top recurring issue categories and hotspots',
      'Vendor/technician service quality comparison',
      'Department-level maintenance billing trend',
    ],
    automations: [
      'Auto escalation based on SLA thresholds',
      'Daily unresolved critical tickets digest',
      'Repeat-issue detection alerts for governance review',
    ],
  },
  {
    title: 'Campus Admin',
    items: [
      'Global monitoring and governance',
      'Vendor performance governance',
      'Resource planning and optimization',
      'Approve finance controls and billing governance',
      'Give ratings and feedback',
    ],
    operationalControls: [
      'Campus-wide operations command view',
      'Policy control for service and escalation standards',
      'Resource allocation planning across departments',
      'Strategic intervention for chronic backlog zones',
    ],
    insightsReports: [
      'Campus KPI (Key Performance Indicator) dashboard',
      'Zone-wise performance benchmarking',
      'Cost-efficiency and utilization trends',
      'Campus-wide revenue, billing, and settlement insights',
    ],
    automations: [
      'Automated weekly governance summary',
      'KPI threshold breach alerts',
      'Risk-based action recommendation prompts',
    ],
  },
  {
    title: 'Super Admin',
    items: [
      'Role & permission control',
      'System and policy configuration',
      'Audit logs and compliance oversight',
      'Financial compliance policy governance',
      'Give ratings and feedback',
    ],
    operationalControls: [
      'Role-based access and policy lifecycle governance',
      'Security control baseline and hardening checks',
      'Compliance evidence export and retention policy control',
      'Platform configuration management and release governance',
      'Billing policy, taxation, and approval matrix configuration',
    ],
    insightsReports: [
      'Security event and anomaly dashboard',
      'Audit coverage and policy breach report',
      'System health, uptime, and governance score',
    ],
    automations: [
      'Policy breach instant alerts with owner mapping',
      'Periodic compliance health snapshots',
      'Automated backup and audit archival reminders',
    ],
  },
]
