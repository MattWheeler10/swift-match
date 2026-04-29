import type { NavLink, CTA } from './types'

export const brand = {
  name: 'SwiftMatch Workforce',
  shortName: 'SwiftMatch',
}

export const navLinks: NavLink[] = [
  { label: 'Healthcare', to: '/healthcare' },
  { label: 'Workforce Model', to: '/workforce-model' },
  { label: 'Governance', to: '/governance' },
  { label: 'Platform', to: '/platform' },
  { label: 'Impact', to: '/impact' },
  { label: 'Pilot', to: '/pilot' },
]

export const primaryCta: CTA = {
  label: 'Book Demo',
  to: '/demo',
  variant: 'primary',
}

export const footerLinks: NavLink[] = [
  { label: 'Healthcare', to: '/healthcare' },
  { label: 'Workforce Model', to: '/workforce-model' },
  { label: 'Governance', to: '/governance' },
  { label: 'Platform', to: '/platform' },
  { label: 'Impact', to: '/impact' },
  { label: 'Pilot', to: '/pilot' },
  { label: 'Book Demo', to: '/demo' },
]

export const bookDemoCta: CTA = { label: 'Book a Live Demo', to: '/demo', variant: 'primary' }
export const startPilotCta: CTA = {
  label: 'Start Pilot Deployment',
  to: '/pilot',
  variant: 'outline',
}
