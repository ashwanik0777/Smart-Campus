import type { CoreModule } from '../../types/documentation'

export const feedbackRatingModule: CoreModule = {
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
}
