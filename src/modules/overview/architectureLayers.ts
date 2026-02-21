import type { ArchitectureLayer } from '../../types/documentation'

export const architectureLayers: ArchitectureLayer[] = [
  {
    title: 'Presentation Layer',
    detail:
      'Web portal + PWA (Progressive Web Application) dashboards for customer/staff, technicians, admins, and vendors.',
  },
  {
    title: 'Application Layer',
    detail:
      'Complaint lifecycle, technician allocation, notification/escalation, feedback, and analytics engines.',
  },
  {
    title: 'Integration Layer',
    detail:
      'IoT (Internet of Things) sensor gateway, GIS (Geographic Information System) mapping, and communication channels (SMS - Short Message Service, email, WhatsApp).',
  },
  {
    title: 'Data Layer',
    detail:
      'MySQL relational model for users, complaints, assignments, inventory, feedback, and audit logs.',
  },
  {
    title: 'Security Layer',
    detail:
      'RBAC (Role-Based Access Control), authentication, authorization, password hashing, and secure API (Application Programming Interface) access controls.',
  },
]
