import type { CoreModule } from '../../types/documentation'

export const complaintIntakeModule: CoreModule = {
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
}
