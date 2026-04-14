export const howItWorks = {
  hero: {
    headline: 'How SwiftMatch Works',
    subheadline:
      'A coordinated, end-to-end recruitment workflow embedded into your existing systems',
    tensionLine:
      'Without coordination between steps, candidates are delayed, lost, or secured by competitors',
    supportingLine: 'From application to hire — every step aligned, automated, and optimised',
  },

  workflow: {
    steps: [
      'Applicant Tracking System',
      'CV Ingestion',
      'AI Scoring',
      'Ranking',
      'Pipeline',
      'Shortlist',
      'Scheduling',
      'Interview',
      'Hire',
    ],
    overlayLabel: 'From application to interview in under 48 hours',
    supportingLine:
      'Every stage is connected — eliminating delays between evaluation, shortlisting, and interview scheduling',
    additionalLine:
      'Top candidates are identified early and remain available through structured pipelines',
  },

  steps: [
    {
      title: 'Step 1: Application and CV Ingestion',
      actors: ['Candidate', 'Applicant Tracking System (e.g. Workday / TRAC)'],
      process: ['Job advert published', 'Candidates apply via existing system', 'CVs submitted'],
      swiftMatchRole: [
        'Ingests all CVs automatically',
        'Structures and prepares data for evaluation',
        'Ensures no application is missed',
      ],
      keyLine:
        'Every candidate entering your system is captured and prepared for immediate evaluation',
    },
    {
      title: 'Step 2: AI Scoring and Pipeline Creation',
      actors: ['Recruitment team'],
      process: ['Candidates assessed against role requirements'],
      swiftMatchRole: [
        'Scores and ranks 100% of CVs',
        'Stores candidates in structured pipelines',
        'Groups candidates by role and location',
        'Continuously updates rankings',
      ],
      keyLine: 'Every candidate is evaluated, ranked, and retained for current and future roles',
      additionalLine:
        'Instead of losing candidates after one vacancy, organisations build a reusable talent supply',
    },
    {
      title: 'Step 3: Vacancy Matching and Candidate Activation',
      actors: ['Hiring manager', 'Candidates'],
      process: ['Vacancy identified'],
      swiftMatchRole: [
        'Matches vacancies to top-ranked candidates in pipeline',
        'Identifies best-fit candidates immediately',
        'Engages candidates to confirm interest and availability',
      ],
      keyLine: 'Top candidates are already identified and ready to engage when a vacancy arises',
      impactLine: 'This removes the need to restart sourcing and reduces reliance on agency cover',
    },
    {
      title: 'Step 4: Interview Scheduling',
      actors: ['Hiring manager', 'Candidates'],
      process: ['Interview slots created', 'Candidates select availability'],
      swiftMatchRole: [
        'Coordinates availability automatically',
        'Enables self-service scheduling',
        'Eliminates manual back-and-forth',
      ],
      keyLine: 'Scheduling becomes automatic — not dependent on manual coordination',
    },
    {
      title: 'Step 5: Interview and Hiring',
      actors: ['Hiring manager', 'HR'],
      process: ['Interview conducted', 'Hiring decision made'],
      swiftMatchRole: [
        'Supports structured evaluation',
        'Ensures consistent assessment',
        'Returns all data to system of record',
      ],
      keyLine: 'Your existing systems remain the system of record',
    },
  ],

  roles: {
    headline: 'Roles and Responsibilities',
    rows: [
      { role: 'Recruitment Officer', responsibility: 'Initial review and shortlist coordination' },
      { role: 'Talent Specialist', responsibility: 'Final shortlist validation and pipeline management' },
      { role: 'Hiring Manager', responsibility: 'Interview and decision' },
      { role: 'HR', responsibility: 'Hiring completion' },
      { role: 'SwiftMatch', responsibility: 'Orchestration across all stages' },
    ],
    closingLine:
      'SwiftMatch supports each role without replacing them — improving execution without changing accountability',
  },

  whereOperates: {
    headline: 'Where SwiftMatch Operates',
    flow: ['ATS / Workday / TRAC', 'SwiftMatch Orchestration Layer', 'Recruitment Workflow Execution'],
    points: [
      'Does not replace existing systems',
      'Coordinates activity between them',
      'Ensures continuous candidate progression',
    ],
    keyLine: 'Your systems remain. Your process accelerates',
  },

  integration: {
    headline: 'Designed to integrate with existing systems',
    lead: 'SwiftMatch integrates with:',
    systems: ['Workday', 'TRAC', 'Other ATS platforms', 'Scheduling systems'],
    keyPoints: [
      'No system replacement required',
      'Data remains in system of record',
      'Secure, controlled data flow',
      'Minimal disruption to existing workflows',
    ],
  },

  summary: {
    headline: 'A fully coordinated recruitment workflow',
    lead: 'SwiftMatch:',
    points: [
      'Processes every candidate',
      'Maintains a continuous, pre-qualified candidate pipeline',
      'Matches candidates to roles as soon as vacancies arise',
      'Coordinates interviews without delay',
      'Eliminates gaps between stages',
    ],
    closingLine: 'From application to hire — fully coordinated, continuous, and aligned to your workflow',
  },

  finalCta: {
    headline: 'See how this fits your workflow',
    subtext:
      'Walk through your current process and identify where delays, cost, and inefficiencies can be removed',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
