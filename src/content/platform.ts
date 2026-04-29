export const platform = {
  hero: {
    eyebrow: 'Platform',
    headline: 'The SwiftMatch Platform',
    subheadline:
      'A Healthcare Workforce Governance Platform designed to control how hiring is performed in regulated medical environments.',
    supportingLine:
      'The platform operates as a system of record for hiring decisions, ensuring consistency, traceability, and control across the organisation.',
  },

  processShift: {
    headline: 'From Process to System',
    traditional: { label: 'Traditional platforms', flow: ['Advert', 'Process', 'Select'] },
    swiftmatch: { label: 'SwiftMatch', flow: ['Define', 'Access', 'Evaluate', 'Select', 'Activate'] },
    body: 'This shift from process to system underpins how the platform is fundamentally different.',
  },

  differentiation: {
    headline: 'What Makes the Platform Different',
    points: [
      {
        title: 'Not a Workflow Tool',
        body: 'It does not just manage hiring steps — it defines them.',
      },
      {
        title: 'Not a Sourcing Tool',
        body: 'It provides continuous access to pre-qualified candidates.',
      },
      {
        title: 'Not a Screening Tool',
        body: 'It applies structured, consistent evaluation across all candidates.',
      },
      {
        title: 'Not Just Software',
        body: 'It is an operating system for workforce supply.',
      },
    ],
    consistency: {
      headline: 'Built for Scale and Consistency',
      points: [
        'The same process is applied across all roles',
        'The same standards are applied across all decisions',
        'The same level of control is maintained across the organisation',
      ],
    },
  },

  howItWorks: {
    headline: 'How the Platform Works',
    steps: [
      {
        number: '1',
        title: 'Structured Role Definition',
        body: 'Roles are defined using standardised templates and criteria.',
        points: [
          'Pre-defined role structures',
          'Consistent evaluation frameworks',
          'Alignment across departments',
        ],
        closing: 'This ensures every hiring process starts from a controlled foundation.',
      },
      {
        number: '2',
        title: 'Continuous Candidate Supply',
        body: 'Candidates are sourced, structured, and maintained in active pools.',
        points: [
          'Role-specific candidate pools',
          'Continuous CV ingestion',
          'Ongoing candidate availability',
        ],
        closing: 'This removes the need to restart sourcing for every role.',
      },
      {
        number: '3',
        title: 'Standardised Evaluation Engine',
        body: 'Candidates are assessed using consistent scoring models.',
        points: [
          'Structured scoring criteria',
          'Transparent ranking',
          'Repeatable evaluation process',
        ],
        closing: 'This ensures fairness, consistency, and comparability across all candidates.',
      },
      {
        number: '4',
        title: 'Controlled Shortlisting',
        body: 'Shortlists are generated based on defined criteria — not manual filtering.',
        points: [
          'Ranked candidate outputs',
          'Consistent shortlist quality',
          'Reduced variability in decisions',
        ],
        closing: null,
      },
      {
        number: '5',
        title: 'Automated Scheduling & Activation',
        body: 'Once candidates are selected, the system manages progression.',
        points: [
          'Automated interview scheduling',
          'Candidate engagement workflows',
          'Rapid activation of selected candidates',
        ],
        closing: 'This reduces delay between decision and hire.',
      },
      {
        number: '6',
        title: 'Governance Framework',
        body: 'Governance is not an add-on — it is built into the system.',
        points: [
          'Full audit trail of decisions',
          'Traceable scoring and selection',
          'Enforced workflow stages',
        ],
        closing: 'Every hiring decision is controlled, recorded, and defensible.',
      },
      {
        number: '7',
        title: 'Outcome Tracking & Feedback',
        body: 'The system continuously improves through feedback.',
        points: [
          'Hiring outcomes tracked over time',
          'Performance and retention insights',
          'Continuous optimisation of evaluation models',
        ],
        closing: null,
      },
    ],
  },

  builtFor: {
    headline: 'Designed for Regulated Healthcare Environments',
    body: 'The platform is built for organisations where:',
    points: [
      'Hiring decisions impact clinical outcomes',
      'Processes must be auditable and defensible',
      'Consistency is required across departments',
      'Workforce availability directly affects performance',
    ],
  },

  security: {
    headline: 'Security and compliance built in',
    compliance: {
      label: 'Designed to align with:',
      items: ['UK GDPR', 'Data Protection Act 2018', 'Organisational data governance requirements'],
    },
    measures: {
      label: 'Security Measures',
      items: [
        'Encryption in transit (TLS 1.2+)',
        'Encryption at rest',
        'Role-based access control (RBAC)',
        'Full audit logging of system activity',
      ],
    },
  },

  finalCta: {
    headline: 'See the Platform in Your Organisation',
    subtext: 'Run a structured evaluation tailored to your organisation.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
      { label: 'Book Demo', to: '/demo', variant: 'outline' as const },
    ],
  },
}
