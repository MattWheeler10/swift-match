export const hospitalsHome = {
  hero: {
    eyebrow: 'Hospitals',
    headline: 'From Workforce Shortage to Clinical Capacity Control',
    subheadline:
      'A workforce platform that reduces locum spend, accelerates hiring, and increases clinical capacity',
    supportingLine:
      'Clinical capacity, revenue, and patient outcomes are directly constrained by how quickly and consistently you hire',
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
    workflow: {
      steps: ['Vacancy', 'ATS', 'CV Ingestion', 'Score', 'Rank', 'Shortlist', 'Schedule', 'Interview', 'Hire'],
      label: 'From vacancy to clinician in under 48 hours',
    },
  },

  problem: {
    headline:
      'Workforce shortages are constraining clinical capacity, increasing cost, and forcing reliance on locums',
    points: [
      'Vacancies reduce patient throughput and delay care delivery',
      'Delays increase reliance on locums (£500–£800 per day)',
      'Missed hiring windows reduce access to top clinical talent',
      'Inconsistent staffing impacts quality and continuity of care',
    ],
    supportingLines: [
      'Most hospitals are not choosing to rely on locums and agency staff — they are forced into it by a system that cannot respond fast enough',
      'Most hospitals start from zero every time a role opens — this is what drives delay, cost, and agency reliance',
    ],
    closingLine: 'Every unfilled role reduces capacity, increases cost, and impacts patient outcomes',
    link: { label: 'Learn how this impacts hospital performance', to: '/hospitals/impact' },
  },

  solution: {
    headline: 'A system for clinical workforce control — not just recruitment',
    steps: [],
    twoColumns: [
      {
        title: 'Clinical Hiring Execution',
        description: 'Process, score, and prioritise every candidate instantly',
      },
      {
        title: 'Workforce Supply',
        description:
          'Build and maintain a reusable pipeline of pre-qualified clinicians by role, specialty, and location',
      },
    ],
    supportingLine: 'Pre-qualified clinicians are available when vacancies arise',
    closingLines: ['Your systems remain. Execution improves.'],
    links: [
      { label: 'Explore the solution', to: '/solution' },
      { label: 'See how it works', to: '/how-it-works' },
    ],
  },

  platform: {
    textAboveVideo: 'From CV to interview in under 48 hours',
    subtext:
      'See how SwiftMatch processes, ranks, and schedules clinicians in real time and coordinates interviews automatically',
    ctas: [
      { label: 'Watch the Platform in Action', to: '/platform', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },

  howItWorks: {
    headline: 'How It Works',
    steps: ['Workday / TRAC', 'CV Ingestion', 'Score', 'Rank', 'Shortlist', 'Schedule', 'Interview', 'Hire'],
    supportingLine: 'Every step is coordinated — reducing delays and securing clinicians faster',
    link: { label: 'View full workflow', to: '/how-it-works' },
  },

  impact: {
    headline: 'Measured impact across your hospital',
    columns: [
      {
        title: 'Clinical',
        items: [
          'Faster access to qualified clinicians',
          'Improved patient flow and reduced waiting times',
          'Greater continuity and consistency of care',
        ],
      },
      {
        title: 'Financial',
        items: [
          '20–40% reduction in locum spend',
          'Improved utilisation of permanent staff',
          'Increased revenue through higher throughput',
        ],
      },
      {
        title: 'Operational',
        items: ['<48h time-to-interview', '100% CV processing', 'Reduced vacancy duration'],
      },
    ],
    closingLine: 'Clinical capacity becomes predictable, measurable, and controllable',
    link: { label: 'See full impact', to: '/impact' },
  },

  transformation: {
    headline: 'From reactive hiring to clinical capacity control',
    stages: ['Accelerate', 'Standardise', 'Reuse', 'Reduce Locum Reliance', 'Plan', 'Control'],
    supportingLine:
      'SwiftMatch enables hospitals to move from reactive hiring under pressure to a controlled system where pre-qualified clinicians are continuously available',
    closingLine: 'Hiring shifts from reactive sourcing to activating an existing pipeline of qualified clinicians',
    links: [
      { label: 'Explore transformation', to: '/solution' },
      { label: 'See outcomes', to: '/impact' },
    ],
  },

  proof: {
    headline: 'Proven performance in live hospital environments',
    metrics: [
      { value: '<48 hours', label: 'to interview' },
      { value: '100%', label: 'CV coverage' },
      { value: '95%', label: 'interview attendance' },
      { value: '≥5 days', label: 'reduction in time-to-fill' },
    ],
  },

  pilot: {
    headline: 'Start with a controlled pilot in your hospital',
    points: [
      '4–6 week deployment',
      'Live clinical roles and departments',
      'Measurable KPIs',
      'No system replacement',
    ],
    supportingLine: 'Validate impact on hiring speed, clinical capacity, and locum spend',
    cta: { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
  },

  finalCta: {
    headline: 'See how this works in your hospital',
    subtext:
      'Walk through your current hiring workflow and identify where clinical capacity can be increased and cost reduced',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
