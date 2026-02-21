export interface ArchitectureLayer {
  title: string
  detail: string
}

export interface CoreModule {
  name: string
  owner: string
  purpose: string
  subModules: string[]
  capabilities: string[]
  workflows: string[]
  automations: string[]
  validations: string[]
  kpis: string[]
  integrations: string[]
  futureEnhancements: string[]
  inputs: string[]
  outputs: string[]
  relatedModules: string[]
}

export interface RoleDashboard {
  title: string
  items: string[]
  operationalControls: string[]
  insightsReports: string[]
  automations: string[]
}

export interface RoadmapStep {
  phase: string
  title: string
  detail: string
}
