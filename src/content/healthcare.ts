export const healthcare = {
  // ─── 1. Hero ────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Healthcare',
    headline: 'A Healthcare Workforce Governance Platform',
    subheadline:
      'Stabilise staffing, reduce agency reliance, and hire qualified candidates in under 48 hours with full governance and auditability.',
    supportingLine:
      'A new model for controlled, auditable hiring in regulated clinical environments. Built specifically for hospitals and care providers.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
    ],
    pilotLine: 'Run a structured pilot to validate impact before full deployment.',
  },

  // ─── 2. Problem ─────────────────────────────────────────────────────────────
  problem: {
    headline: 'Healthcare Hiring Is Not Just Recruitment',
    intro: 'Most healthcare organisations are not struggling to recruit.\nThey are struggling to control their workforce.',
    points: [
      'Vacancies remain open for weeks',
      'Agency reliance increases cost and operational risk',
      'Hiring decisions are inconsistent',
      'Processes vary across departments',
    ],
    closingLine: 'This is not a recruitment problem. It is a workforce control problem.',
  },

  // ─── 3. Why Traditional Systems Fall Short ──────────────────────────────────
  traditional: {
    headline: 'Why Traditional Recruitment Systems Fall Short in Healthcare',
    intro:
      'Most recruitment systems are designed for flexibility across industries. Healthcare requires something fundamentally different:',
    points: [
      'Standardised role definitions',
      'Consistent candidate evaluation',
      'Enforced, controlled workflows',
      'Full auditability of decisions',
      'Embedded compliance at every step',
    ],
    closingLines: [
      'These requirements are not optional in regulated environments.',
      'Generic systems support hiring activity. Healthcare requires governed hiring decisions.',
    ],
  },

  // ─── 4. The Governed Model ──────────────────────────────────────────────────
  model: {
    headline: 'A Governed Workforce Model for Healthcare',
    body: 'SwiftMatch defines and enforces a governed hiring model purpose-built for regulated clinical environments.',
    principles: 'Every step is:',
    steps: ['Standardised', 'Controlled', 'Auditable'],
    pipeline: ['Define', 'Access', 'Evaluate', 'Select', 'Hire in under 48 hours'],
  },

  // ─── 5. What This Enables (4 cards) ────────────────────────────────────────
  enables: {
    headline: 'What This Enables',
    cards: [
      {
        title: 'Workforce Stability',
        points: ['Reduce vacancy duration', 'Access qualified candidates immediately'],
      },
      {
        title: 'Reduced Agency Reliance',
        points: ['Convert demand into permanent hires', 'Reduce cost and dependency'],
      },
      {
        title: 'Governed Hiring',
        points: ['Consistent, explainable decision-making', 'Aligned across all roles and departments'],
      },
      {
        title: 'Regulatory Confidence',
        points: ['Full audit trail of hiring decisions', 'Aligned with clinical and compliance standards'],
      },
    ],
  },

  // ─── 6. Designed For ────────────────────────────────────────────────────────
  designedFor: {
    headline: 'Designed for Healthcare Providers',
    providers: [
      'NHS Trusts',
      'Private hospital groups',
      'Care home operators',
      'Community healthcare providers',
    ],
    closingLine:
      'Any organisation where hiring decisions directly impact clinical outcomes and regulatory compliance.',
  },

  // ─── 7. Metrics ─────────────────────────────────────────────────────────────
  proof: {
    headline: 'Proven Impact',
    metrics: [
      { value: '<48 hours', label: 'time-to-hire' },
      { value: '3–5×', label: 'increase in recruiter capacity' },
      { value: 'Reduced', label: 'agency staffing reliance' },
    ],
    disclaimer: 'Based on pilot deployments and operational modelling',
  },

  // ─── 8. Final CTA ───────────────────────────────────────────────────────────
  finalCta: {
    headline: 'Start Controlling Your Workforce',
    subtext: 'Run a structured evaluation tailored to your organisation.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
    ],
  },
}
