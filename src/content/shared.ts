import type { NavLink, VerticalCard, CTA } from './types'

export const brand = {
  name: 'SwiftMatch Technologies',
  shortName: 'SwiftMatch',
}

export const navLinks: NavLink[] = [
  { label: 'Solutions', to: '/solution' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Impact', to: '/impact' },
  { label: 'Platform', to: '/platform' },
  { label: 'Pilot', to: '/pilot' },
]

export const primaryCta: CTA = {
  label: 'Book Demo',
  to: '/demo',
  variant: 'primary',
}

export const footerLinks: NavLink[] = [
  { label: 'Solutions', to: '/solution' },
  { label: 'Impact', to: '/impact' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Platform', to: '/platform' },
  { label: 'Pilot', to: '/pilot' },
  { label: 'Book Demo', to: '/demo' },
]

export const verticals: VerticalCard[] = [
  {
    id: 'hospitals',
    title: 'Hospitals',
    description: 'Reduce agency spend and increase clinical capacity',
    to: '/hospitals',
  },
  {
    id: 'care-homes',
    title: 'Care Homes',
    description: 'Stabilise staffing and reduce reliance on agency workers',
    to: '/care-homes',
  },
  {
    id: 'domiciliary',
    title: 'Domiciliary Care',
    description: 'Ensure every visit is covered without agency dependence',
    to: '/domiciliary',
  },
]

export const bookDemoCta: CTA = { label: 'Book a Live Demo', to: '/demo', variant: 'primary' }
export const startPilotCta: CTA = { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' }
