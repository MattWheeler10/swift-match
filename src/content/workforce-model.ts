export const workforceModel = {
  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Workforce Model',
    headline: 'The Workforce Control Model',
    subheadline:
      'A structured, governed approach to workforce supply in regulated healthcare environments.',
    supportingLine: 'From Hiring Activity to Workforce Control',
  },

  // ─── Traditional Limitation ───────────────────────────────────────────────
  traditional: {
    headline: 'The Structural Limitation of Traditional Hiring',
    intro: 'Traditional hiring is reactive.',
    flow: ['A role opens', 'a process begins', 'candidates are sourced', 'a decision is made'],
    body: 'This model creates delay, inconsistency, and reliance on agency supply. It does not scale in environments where workforce availability directly impacts outcomes.',
    limitations: {
      intro: 'Traditional systems are built around jobs — not workforce supply. They assume:',
      assumptions: [
        'Candidate sourcing starts after a vacancy appears',
        'Evaluation is performed manually and inconsistently',
        'Decisions are difficult to standardise or audit',
      ],
      outcomes: [
        'Repeated process cycles',
        'Variable hiring outcomes',
        'Limited control over workforce supply',
      ],
    },
  },

  // ─── The New Model ────────────────────────────────────────────────────────
  newModel: {
    headline: 'A Different Model: Continuous Workforce Supply',
    body: 'The Workforce Control Model replaces reactive hiring with continuous access to qualified candidates.',
    points: [
      'Candidates are pre-qualified and continuously available',
      'Evaluation is standardised and applied consistently',
      'Hiring becomes activation — not search',
    ],
    transition: { from: 'Recruitment', to: 'Workforce Supply' },
    governance:
      'Governance is embedded within the Workforce Control Model, ensuring every decision is consistent, auditable, and compliant. In regulated healthcare environments, speed alone is not sufficient.',
    governancePoints: [
      'Consistent',
      'Explainable',
      'Auditable',
      'Aligned with clinical and compliance standards',
    ],
  },

  // ─── Model in Practice ────────────────────────────────────────────────────
  inPractice: {
    headline: 'The Model in Practice',
    pipeline: ['Define', 'Access', 'Evaluate', 'Select', 'Activate'],
    steps: [
      {
        number: '1',
        title: 'Define',
        points: [
          'Roles are structured using standardised criteria.',
          'Evaluation frameworks are applied consistently across all hiring decisions.',
        ],
      },
      {
        number: '2',
        title: 'Access',
        points: [
          'Candidates are sourced continuously and maintained in structured pools.',
          'Organisations have immediate access to pre-qualified talent.',
        ],
      },
      {
        number: '3',
        title: 'Evaluate',
        points: [
          'Candidates are assessed using consistent scoring models.',
          'Evaluation is transparent and repeatable.',
        ],
      },
      {
        number: '4',
        title: 'Select',
        points: [
          'Shortlists are generated based on defined criteria.',
          'Decisions are supported by structured evaluation — not ad hoc judgement.',
        ],
      },
      {
        number: '5',
        title: 'Activate',
        points: [
          'Candidates are engaged and hired without restarting the process.',
          'Time-to-hire is reduced from weeks to days.',
        ],
      },
    ],
  },

  // ─── Final CTA ────────────────────────────────────────────────────────────
  finalCta: {
    headline: 'See the Model in Your Organisation',
    subtext: 'Run a structured evaluation tailored to your workforce.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
      { label: 'Explore Governance', to: '/governance', variant: 'outline' as const },
    ],
  },
}
