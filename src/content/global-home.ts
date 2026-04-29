export const globalHome = {
  // ─── 1. Hero ──────────────────────────────────────────────────────────────
  hero: {
    headline: 'From Workforce Shortage\nto Workforce Control',
    subheadline:
      'A healthcare workforce governance platform that gives organisations continuous access to qualified candidates — reducing vacancy duration, lowering agency reliance, and enabling hiring in under 48 hours.',
    supportingLine:
      'Built for healthcare organisations where workforce supply determines clinical and operational performance.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
      { label: 'See the Platform', to: '/platform', variant: 'outline' as const },
    ],
    workflow: {
      steps: [
        'Define',
        'Access',
        'Evaluate',
        'Select',
        'Hire (<48h)',
      ],
      label: 'From workforce shortage to workforce control',
    },
  },

  // ─── 2. Urgency ("Why Now") ───────────────────────────────────────────────
  urgency: {
    headline: 'Workforce Performance Starts with Workforce Supply',
    body: 'Workforce pressure, regulatory scrutiny, and cost escalation are increasing the need for controlled hiring systems.',
    points: [
      { label: 'Workforce Pressure', description: 'Vacancy rates are rising while candidate supply tightens across regulated healthcare.' },
      { label: 'Regulatory Scrutiny', description: 'Hiring decisions must be consistent, auditable, and aligned with clinical standards.' },
      { label: 'Cost Escalation', description: 'Agency spend continues to grow as reactive hiring cycles fail to close vacancies.' },
    ],
  },

  // ─── 3. Core Insight ──────────────────────────────────────────────────────
  coreInsight: {
    statement:
      'Workforce supply, cost, and performance are determined by how quickly you can access and activate qualified candidates.',
  },

  // ─── 4. Problem ───────────────────────────────────────────────────────────
  problem: {
    headline: 'Most Organisations Are Solving the Wrong Problem',
    intro: 'Most healthcare organisations don\'t have a recruitment problem.\nThey have a workforce control problem.',
    subtext: 'Traditional hiring starts from zero every time a role opens.',
    points: [
      'Vacancies remain open for weeks',
      'Hiring becomes reactive, inconsistent, and difficult to control',
      'Agency reliance increases cost and dependency',
    ],
    link: { label: 'See how governance changes this', to: '/governance' },
  },

  // ─── 5. Model Shift ───────────────────────────────────────────────────────
  modelShift: {
    headline: 'A Different Model',
    body: 'SwiftMatch replaces reactive hiring with a continuous workforce system designed for healthcare environments.',
    subtext:
      'Candidates are pre-qualified, available, and ready to be activated — so hiring no longer depends on restarting the process for every role.',
    transition: { from: 'Hiring Pipeline', to: 'Controlled Workforce Supply' },
    link: { label: 'Explore the Workforce Model', to: '/workforce-model' },
  },

  // ─── 6. Outcome Snapshot ──────────────────────────────────────────────────
  outcomeSnapshot: {
    headline: 'What This Delivers',
    cards: [
      {
        title: 'Faster Hiring',
        description: 'Hire qualified candidates in under 48 hours.',
      },
      {
        title: 'Reduced Agency Reliance',
        description: 'Convert demand into permanent hires and reduce cost.',
      },
      {
        title: 'Consistent Decisions',
        description: 'Standardised evaluation applied across every role.',
      },
      {
        title: 'Workforce Stability',
        description: 'Reduce vacancy duration and improve continuity of care.',
      },
    ],
  },

  // ─── 7. Proof ─────────────────────────────────────────────────────────────
  proof: {
    headline: 'Proven Impact',
    metrics: [
      { value: '<48 hours', label: 'time-to-hire' },
      { value: '3–5×', label: 'increase in recruiter capacity' },
      { value: 'Reduced', label: 'agency staffing reliance' },
    ],
    disclaimer: 'Based on pilot deployments and operational modelling',
    link: { label: 'See full impact data', to: '/impact' },
  },

  // ─── 8. Final CTA ─────────────────────────────────────────────────────────
  finalCta: {
    headline: 'Start Controlling Your Workforce',
    subtext: 'Run a structured evaluation tailored to your organisation.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
    ],
  },
}
