import type { CoreModule } from '../../types/documentation'

export const assignmentModule: CoreModule = {
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
}
