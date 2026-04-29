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

export interface Metric {
  value: string
  label?: string
}

