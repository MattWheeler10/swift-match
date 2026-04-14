export interface CTA {
  label: string
  to?: string
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
}

export interface NavLink {
  label: string
  to: string
}

export interface VerticalCard {
  id: 'hospitals' | 'care-homes' | 'domiciliary'
  title: string
  description: string
  to: string
}

export interface PathwayStage {
  title: string
  description?: string
}

export interface Metric {
  value: string
  label?: string
}

export interface Column {
  title: string
  items: string[]
}

export interface Step {
  title: string
  description: string
}

export interface DetailedStep {
  title: string
  actors?: string[]
  process?: string[]
  swiftMatchRole?: string[]
  keyLine?: string
  additionalLine?: string
  impactLine?: string
}

export interface Role {
  role: string
  responsibility: string
}
