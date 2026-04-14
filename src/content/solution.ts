export const solution = {
  hero: {
    headline: 'An orchestration layer for workforce supply and performance',
    subheadline:
      'SwiftMatch connects hiring, evaluation, and workforce supply into a single coordinated system',
    supportingLine: 'Embedded into your existing workflows without replacing your systems',
    keyLine:
      'Most organisations do not lack candidates — they lack a system that can access and activate them fast enough',
    ctas: [
      { label: 'See how it works', to: '/how-it-works', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },

  whatIs: {
    headline: 'What is SwiftMatch?',
    lead: 'SwiftMatch is not a standalone recruitment tool',
    body: 'It is an orchestration layer that coordinates hiring while maintaining a continuous, pre-qualified workforce supply',
    points: [
      'Works alongside systems such as Workday and TRAC',
      'Does not require system replacement',
      'Operates across the full hiring lifecycle',
      'Maintains a persistent pipeline of pre-qualified candidates',
    ],
    keyLine:
      'Instead of restarting the hiring process for every vacancy, organisations gain access to an always-available candidate supply',
  },

  coreComponents: [
    {
      title: 'AI-Driven Candidate Evaluation',
      bullets: [
        'Processes 100% of applications',
        'Scores and ranks candidates based on role requirements',
        'Ensures consistent, high-quality shortlisting',
      ],
      outcome: 'No candidate is missed. The best candidates are identified immediately',
    },
    {
      title: 'Workflow Orchestration',
      bullets: [
        'Connects all stages of the hiring process',
        'Eliminates delays between steps',
        'Maintains continuous candidate progression',
      ],
      outcome: 'Hiring moves at the speed required to secure top candidates',
    },
    {
      title: 'Workforce Supply Layer',
      bullets: [
        'Builds and maintains structured candidate pipelines by role and location',
        'Continuously evaluates and refreshes candidate pools',
        'Ensures candidates are available before vacancies arise',
      ],
      outcome: 'Workforce supply becomes proactive rather than reactive',
    },
  ],

  supplyLayer: {
    headline: 'A continuous, pre-qualified workforce supply',
    body: 'SwiftMatch continuously builds and maintains candidate pipelines across roles, locations, and requirements',
    points: [
      'Continuously populated through ongoing applications',
      'Structured and organised by role and location',
      'Ranked and prioritised based on relevance',
      'Maintained and updated over time',
    ],
    keyLine:
      'Instead of starting from zero every time a role opens, hiring becomes the activation of an existing candidate pipeline',
    mechanismLine:
      'Faster access to pre-qualified candidates reduces vacancy duration — which directly reduces reliance on agency staffing',
  },

  orchestration: {
    headline: 'A fully coordinated hiring system',
    lead: 'SwiftMatch connects:',
    connects: ['Candidate sourcing', 'Evaluation', 'Pipeline management', 'Interview coordination'],
    becomes: ['Continuous', 'Connected', 'Data-driven'],
    closingLine:
      'Hiring is no longer a sequence of steps — it becomes a coordinated, always-on system',
  },

  transformation: {
    headline: 'From reactive hiring to workforce control',
    stages: [
      { title: 'Workflow Orchestration', description: 'Faster hiring and immediate capacity improvement' },
      { title: 'AI-Assisted Evaluation', description: 'Consistent, competency-based hiring decisions' },
      {
        title: 'Pipeline Creation and Reuse',
        description:
          'Persistent candidate pipelines provide immediate access to pre-qualified candidates. Agency reliance reduces as vacancies are filled faster',
      },
      {
        title: 'Workforce Supply Visibility',
        description: 'Clear understanding of available candidates across roles and locations',
      },
      {
        title: 'Continuous Optimisation',
        description: 'Ongoing improvement in cost, capacity, and performance',
      },
    ],
    closingLine: 'A system where workforce supply and capability improve continuously over time',
  },

  howItConnects: {
    headline: 'How it connects',
    flow: ['Hiring', 'Evaluation', 'Workforce Supply', 'Performance', 'Data', 'Improvement'],
    points: [
      'Hiring defines workforce capability',
      'Workforce capability determines performance',
      'Performance informs workforce planning',
      'Workforce supply feeds back into hiring',
    ],
    finalLines: [
      'Workforce supply, hiring, and performance are no longer separate — they operate as one continuously improving system',
      'Without a continuous workforce supply, organisations are forced to restart hiring every time a vacancy arises — driving delay, cost, and agency reliance',
    ],
  },

  finalCta: {
    headline: 'See how this works in your organisation',
    subtext:
      'Walk through your current hiring process and identify where delays, cost, and inefficiencies can be removed',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
