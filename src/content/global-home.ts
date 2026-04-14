export const globalHome = {
  hero: {
    headline: 'From Workforce Shortage to Workforce Control',
    subheadline:
      'A workforce system that stabilises staffing, reduces agency reliance, and builds a continuous, reusable talent pipeline',
    supportingLine:
      'Workforce supply, cost, and performance are determined by how quickly you can access and activate qualified candidates',
    keyLine:
      "Most organisations don't have a recruitment problem — they have a workforce control problem. By maintaining a continuous pipeline of pre-qualified candidates, organisations reduce vacancy duration and avoid agency reliance",
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'See the Platform in Action', to: '/platform', variant: 'outline' as const },
    ],
    workflow: {
      steps: [
        'Advert',
        'ATS',
        'CV Ingestion',
        'Scoring',
        'Ranking',
        'Shortlist',
        'Scheduling',
        'Interview',
        'Hire (<48h)',
      ],
      label: 'From weeks to <48 hours to secure top candidates',
    },
  },

  verticalSelector: {
    headline: 'Who is this for?',
    subheadline: 'Select your sector to see how this works in your organisation',
  },

  problem: {
    headline: 'Workforce shortages are not just a hiring issue — they are a system failure',
    points: [
      'Vacancies reduce capacity and service delivery',
      'Delays force reliance on high-cost agency staff',
      'Hiring cycles restart from zero every time',
      'The best candidates are lost due to slow processes',
    ],
    supportingLines: [
      'Most organisations are not choosing agency reliance — they are forced into it by a system that cannot respond fast enough',
      'Most organisations restart from zero every time a role opens — this drives delay, cost, and instability',
    ],
    closingLine: 'Every day a role remains unfilled carries a measurable cost',
    link: { label: 'Learn how this impacts performance', to: '/impact' },
  },

  solution: {
    headline: 'From candidate pipelines to reduced agency reliance',
    steps: [
      {
        title: 'Continuous Candidate Pipeline',
        description: 'Candidates are continuously sourced, evaluated, and stored in structured pipelines',
      },
      {
        title: 'Immediate Vacancy Activation',
        description: 'When roles open, top candidates are already identified and ready to engage',
      },
      {
        title: 'Reduced Agency Dependence',
        description:
          'Faster access to qualified candidates reduces vacancy duration and removes the need for agency cover',
      },
    ],
    supportingLine:
      'Instead of reacting to vacancies, organisations build and maintain a continuous pipeline of pre-qualified candidates',
    twoColumns: [
      {
        title: 'Hiring Execution',
        description: 'Process, score, and prioritise every candidate instantly',
      },
      {
        title: 'Workforce Supply',
        description:
          'Build and maintain a reusable, pre-qualified candidate pipeline by role and location. Candidates are continuously evaluated, ranked, and ready to be activated when vacancies arise',
      },
    ],
    closingLines: [
      'Agency reliance is not a workforce problem — it is a supply timing problem',
      'Your systems remain. Execution improves. Vacancies are filled from an existing pipeline — not restarted from zero',
    ],
    links: [
      { label: 'Explore the solution', to: '/solution' },
      { label: 'See how it works', to: '/how-it-works' },
    ],
  },

  howItWorks: {
    headline: 'How It Works',
    steps: ['ATS', 'CV Ingestion', 'Score', 'Rank', 'Shortlist', 'Schedule', 'Interview', 'Hire'],
    supportingLine: 'Every step is connected. No delays. No gaps',
    link: { label: 'View full workflow', to: '/how-it-works' },
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

  impact: {
    headline: 'Measured impact across your organisation',
    columns: [
      {
        title: 'Financial',
        items: [
          '20–40%+ reduction in agency spend',
          'Lower cost per role',
          'Improved workforce utilisation',
          'Reduced dependency on agency staff through faster access to pre-qualified candidates',
        ],
      },
      {
        title: 'Operational',
        items: ['<48h time-to-interview', '100% CV processing', 'Reduced vacancy duration'],
      },
      {
        title: 'Workforce',
        items: [
          'More stable staffing',
          'Reduced dependency on agency staff',
          'Improved consistency of service delivery',
        ],
      },
    ],
    closingLine:
      'When workforce supply is continuous, agency reliance becomes avoidable — not inevitable',
    link: { label: 'See full impact', to: '/impact' },
  },

  transformation: {
    headline: 'From reactive hiring to workforce control',
    stages: [
      'Accelerate',
      'Standardise',
      'Build Pipeline',
      'Reuse',
      'Reduce Agency Reliance',
      'Plan',
      'Control',
    ],
    supportingLine:
      'Move from reactive hiring to a system where a continuous pipeline of candidates is always available',
    closingLine: 'Hiring shifts from sourcing candidates to activating an existing workforce supply',
    links: [
      { label: 'Explore transformation', to: '/solution' },
      { label: 'See outcomes', to: '/impact' },
    ],
  },

  proof: {
    headline: 'Proven performance in live environments',
    metrics: [
      { value: '<48 hours', label: 'to interview' },
      { value: '100%', label: 'CV coverage' },
      { value: '95%', label: 'interview attendance' },
      { value: '≥5 days', label: 'reduction in time-to-fill' },
    ],
  },

  pilot: {
    headline: 'Start with a controlled, low-risk pilot',
    points: [
      '4–6 week deployment',
      'Live environment',
      'Measurable KPIs',
      'No system replacement',
      'Creation of a reusable pipeline of pre-qualified candidates',
    ],
    supportingLine:
      'Validate how continuous candidate pipelines reduce time-to-hire and agency reliance in your environment',
    cta: { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
  },

  finalCta: {
    headline: 'See how this works in your organisation',
    subtext:
      'Walk through your current hiring workflow and identify where delays and cost can be removed',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
