import type { CoreModule } from '../../types/documentation'

export const technicianExecutionModule: CoreModule = {
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
}
