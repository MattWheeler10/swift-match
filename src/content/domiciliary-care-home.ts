export const domiciliaryCareHome = {
  hero: {
    eyebrow: 'Domiciliary Care',
    headline: 'From Missed Visits to Workforce Coverage Control',
    subheadline:
      'A workforce platform that ensures every visit is covered, reduces agency reliance, and stabilises care delivery',
    supportingLine:
      'Visit coverage, care continuity, and cost are determined by how quickly and consistently you can deploy staff',
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
    workflow: {
      steps: ['Advert', 'ATS', 'CV Ingestion', 'Scoring', 'Ranking', 'Pipeline', 'Match', 'Schedule', 'Interview', 'Deploy'],
      label: 'From vacancy to care worker in under 48 hours',
    },
  },

  problem: {
    headline: 'Workforce shortages are causing missed visits, increasing cost, and forcing reliance on agency staff',
    points: [
      'Unfilled shifts lead to missed or late care visits',
      'Delays increase reliance on high-cost agency staff',
      'Last-minute scheduling creates operational instability',
      'Inconsistent staffing impacts continuity of care',
    ],
    supportingLines: [
      'Most domiciliary care providers are not choosing to rely on agency — they are forced into it by a system that cannot respond fast enough',
      'Most providers start from zero every time a shift or role needs to be filled — this drives delay, cost, and missed visits',
    ],
    closingLine: 'Every missed or delayed visit carries a measurable operational, financial, and reputational cost',
    link: { label: 'Learn how this impacts care delivery', to: '/impact' },
  },

  solution: {
    headline: 'A system for workforce coverage control — not just recruitment',
    steps: [],
    twoColumns: [
      {
        title: 'Hiring Execution',
        description: 'Process, score, and prioritise every candidate instantly',
      },
      {
        title: 'Workforce Supply',
        description:
          'Build and maintain a reusable pipeline of pre-qualified care workers by location and availability. Pre-qualified staff are available and ready to be deployed when visits need to be covered',
      },
    ],
    supportingLine: 'Pre-qualified staff are available and ready to be deployed when visits need to be covered',
    closingLines: ['Your systems remain. Execution improves. Coverage becomes predictable.'],
    links: [
      { label: 'Explore the solution', to: '/solution' },
      { label: 'See how it works', to: '/how-it-works' },
    ],
  },

  platform: {
    textAboveVideo: 'From CV to interview in under 48 hours',
    subtext:
      'See how SwiftMatch processes, ranks, and schedules care workers in real time — and coordinates deployment automatically',
    ctas: [
      { label: 'Watch the Platform in Action', to: '/platform', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },

  howItWorks: {
    headline: 'How It Works',
    steps: ['Applications', 'CV Ingestion', 'Score', 'Rank', 'Pipeline', 'Match', 'Schedule', 'Interview', 'Deploy'],
    supportingLine: 'Every step is coordinated — reducing delays and ensuring visits are covered',
    link: { label: 'View full workflow', to: '/how-it-works' },
  },

  impact: {
    headline: 'Measured impact across your organisation',
    columns: [
      {
        title: 'Coverage & Workforce',
        items: [
          'More consistent visit coverage',
          'Reduced missed or late visits',
          'Improved continuity of care',
          'Reduced reliance on temporary staff',
        ],
      },
      {
        title: 'Financial',
        items: [
          '20–40% reduction in agency spend',
          'Lower cost per shift',
          'Reduced cost of missed visits and emergency cover',
        ],
      },
      {
        title: 'Operational',
        items: ['<48h time-to-interview', '100% CV processing', 'Faster shift and visit coverage', 'Reduced scheduling pressure'],
      },
    ],
    closingLine: 'Workforce coverage becomes predictable, measurable, and controllable',
    link: { label: 'See full impact', to: '/impact' },
  },

  transformation: {
    headline: 'From reactive scheduling to workforce coverage control',
    stages: ['Accelerate', 'Standardise', 'Reuse', 'Reduce Agency Reliance', 'Plan', 'Control'],
    supportingLine:
      'SwiftMatch enables providers to move from last-minute scheduling to a system where pre-qualified care workers are always available',
    closingLine: 'Visit coverage shifts from reactive coordination to activating an existing workforce supply',
    links: [
      { label: 'Explore transformation', to: '/solution' },
      { label: 'See outcomes', to: '/impact' },
    ],
  },

  proof: {
    headline: 'Proven performance in domiciliary care environments',
    metrics: [
      { value: '<48 hours', label: 'to interview' },
      { value: '100%', label: 'CV coverage' },
      { value: '95%', label: 'interview attendance' },
      { value: '≥5 days', label: 'reduction in time-to-fill' },
    ],
  },

  pilot: {
    headline: 'Start with a controlled pilot in your organisation',
    points: [
      '4–6 week deployment',
      'Live roles and shift coverage',
      'Measurable KPIs',
      'No system replacement',
    ],
    supportingLine: 'Validate impact on visit coverage, staffing reliability, and agency spend',
    cta: { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
  },

  finalCta: {
    headline: 'See how this works in your organisation',
    subtext:
      'Walk through your current scheduling and staffing process and identify where visits, cost, and delays can be improved',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
