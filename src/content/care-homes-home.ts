export const careHomesHome = {
  hero: {
    eyebrow: 'Care Homes',
    headline: 'From Staffing Instability to Workforce Control',
    subheadline:
      'A workforce platform that stabilises staffing, reduces agency spend, and ensures consistent care delivery',
    supportingLine:
      'Occupancy, quality of care, and profitability are directly determined by how consistently you can staff your home',
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'See the Platform in Action', to: '/platform', variant: 'outline' as const },
    ],
    workflow: {
      steps: ['Advert', 'ATS', 'CV Ingestion', 'Scoring', 'Ranking', 'Pipeline', 'Shortlist', 'Schedule', 'Interview', 'Hire'],
      label: 'From vacancy to carer in under 48 hours',
    },
  },

  problem: {
    headline: 'Staff shortages are driving instability, increasing cost, and forcing reliance on agency staff',
    points: [
      'Vacancies create gaps in rota coverage and increase operational risk',
      'Delays increase reliance on high-cost agency staff',
      'High staff turnover leads to repeated hiring cycles',
      'Inconsistent staffing impacts continuity and quality of care',
    ],
    supportingLines: [
      'Most care homes are not choosing to rely on agency staff — they are forced into it by a system that cannot respond fast enough',
      'Most care homes restart the hiring process every time a role opens — driving delay, cost, and ongoing agency reliance',
    ],
    closingLine: 'Workforce instability directly impacts care quality, compliance, and financial performance',
    link: { label: 'Learn how this impacts care home performance', to: '/impact' },
  },

  solution: {
    headline: 'A system for workforce stability — not just recruitment',
    steps: [],
    twoColumns: [
      {
        title: 'Hiring Execution',
        description: 'Process, score, and prioritise every candidate instantly',
      },
      {
        title: 'Workforce Supply',
        description:
          'Build and maintain a reusable pipeline of pre-qualified carers by role and location. When a vacancy arises, top-ranked candidates are immediately activated from existing pipelines, removing the need to restart recruitment',
      },
    ],
    supportingLine: 'Pre-qualified candidates are continuously available and ready to be activated when vacancies arise',
    closingLines: ['Your systems remain. Execution improves.'],
    links: [
      { label: 'Explore the solution', to: '/solution' },
      { label: 'See how it works', to: '/how-it-works' },
    ],
  },

  platform: {
    textAboveVideo: 'From CV to interview in under 48 hours',
    subtext:
      'See how SwiftMatch processes, ranks, and schedules candidates in real time and coordinates interviews automatically',
    ctas: [
      { label: 'Watch the Platform in Action', to: '/platform', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },

  howItWorks: {
    headline: 'How It Works',
    steps: ['ATS', 'CV Ingestion', 'Score', 'Rank', 'Pipeline', 'Shortlist', 'Schedule', 'Interview', 'Hire'],
    supportingLine: 'Every step is coordinated — eliminating delays and ensuring roles are filled faster',
    link: { label: 'View full workflow', to: '/how-it-works' },
  },

  impact: {
    headline: 'Measured impact across your care home',
    columns: [
      {
        title: 'Workforce Stability',
        items: [
          'More consistent staffing levels',
          'Reduced reliance on temporary and agency workers',
          'Improved staff retention and continuity',
        ],
      },
      {
        title: 'Financial',
        items: [
          '20–40% reduction in agency spend over time',
          'Reduced cost of vacancy and last-minute cover',
          'Improved profitability through stable staffing',
        ],
      },
      {
        title: 'Operational',
        items: ['<48h time-to-interview', '100% CV processing', 'Reduced vacancy duration and rota gaps'],
      },
    ],
    closingLine: 'Workforce supply becomes predictable, stable, and controllable',
    link: { label: 'See full impact', to: '/impact' },
  },

  transformation: {
    headline: 'From reactive staffing to workforce stability',
    stages: ['Accelerate', 'Standardise', 'Reuse', 'Reduce Agency Reliance', 'Plan', 'Control'],
    supportingLine:
      'SwiftMatch enables care homes to move from reactive staffing under pressure to a controlled system with continuous access to pre-qualified staff',
    closingLine: 'Hiring shifts from reactive sourcing to activating an existing pipeline of reliable staff',
    links: [
      { label: 'Explore transformation', to: '/solution' },
      { label: 'See outcomes', to: '/impact' },
    ],
  },

  proof: {
    headline: 'Proven performance in live care environments',
    metrics: [
      { value: '<48 hours', label: 'to interview' },
      { value: '100%', label: 'CV coverage' },
      { value: '95%', label: 'interview attendance' },
      { value: '≥5 days', label: 'reduction in time-to-fill' },
    ],
  },

  pilot: {
    headline: 'Start with a controlled pilot in your care home',
    points: [
      '4–6 week deployment',
      'Live roles and staffing requirements',
      'Measurable KPIs',
      'No system replacement',
    ],
    supportingLine: 'Validate impact on staffing stability, hiring speed, and agency spend in your own environment',
    cta: { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
  },

  finalCta: {
    headline: 'See how this works in your care home',
    subtext:
      'Walk through your current staffing process and identify where gaps, cost, and instability can be reduced',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
