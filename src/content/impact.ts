export const impact = {
  hero: {
    eyebrow: 'Impact',
    headline: 'Workforce Impact',
    subheadline:
      'A measurable shift in hiring speed, workforce stability, and agency reliance.',
    supportingLine:
      'From Process Efficiency to Workforce Outcomes',
  },

  processShift: {
    headline: 'From Process Efficiency to Workforce Outcomes',
    intro: 'Traditional recruitment focuses on process metrics:',
    traditional: ['Time-to-hire', 'Cost-per-hire', 'Activity levels'],
    note: 'These do not reflect what matters in healthcare environments.',
    matters: {
      label: 'What matters is:',
      points: ['Workforce availability', 'Vacancy duration', 'Agency dependence', 'Consistency of hiring decisions'],
    },
  },

  whatChanges: {
    headline: 'What Changes with a Healthcare Workforce Governance Platform',
    intro: 'SwiftMatch changes not just how hiring is done — but what outcomes are achieved.',
    outcomes: [
      {
        number: '1',
        title: 'Hiring Speed',
        body: 'Reduce time-to-hire from weeks to under 48 hours.',
        supporting:
          'Candidates are pre-qualified and ready to be activated, eliminating the need to restart the hiring process.',
      },
      {
        number: '2',
        title: 'Workforce Stability',
        body: 'Reduce vacancy duration and improve continuity of care.',
        supporting:
          'Continuous access to qualified candidates ensures roles are filled consistently and predictably.',
      },
      {
        number: '3',
        title: 'Reduced Agency Reliance',
        body: 'Shift from reactive agency usage to controlled permanent hiring.',
        supporting:
          'By reducing vacancy duration, organisations avoid defaulting to high-cost agency supply.',
      },
      {
        number: '4',
        title: 'Increased Hiring Capacity',
        body: 'Increase recruiter output without increasing headcount.',
        supporting:
          'Structured workflows and pre-qualified candidates enable significantly higher throughput.',
      },
      {
        number: '5',
        title: 'Consistency of Decisions',
        body: 'Apply the same evaluation approach across all roles and departments.',
        supporting: 'Reduce variability and improve the quality of hiring outcomes.',
      },
      {
        number: '6',
        title: 'Reduced Operational Risk',
        body: 'Minimise the risk associated with inconsistent or delayed hiring.',
        supporting:
          'Ensure decisions are controlled, structured, and aligned with organisational standards.',
      },
    ],
  },

  measuredOutcomes: {
    headline: 'Measured Outcomes',
    metrics: [
      { value: '<48 hours', label: 'time-to-hire' },
      { value: '3–5×', label: 'increase in hiring capacity' },
      { value: 'Reduced', label: 'agency staffing reliance' },
      { value: 'Improved', label: 'consistency across hiring decisions' },
    ],
    disclaimer: 'Based on pilot deployments and operational modelling',
  },

  valueDrivers: {
    headline: 'Where the Value Comes From',
    intro: 'Impact is driven by structural changes in how hiring is performed:',
    drivers: [
      { title: 'Reduced Vacancy Duration', body: 'Faster hiring reduces the number of unfilled roles.' },
      { title: 'Lower Agency Spend', body: 'Fewer vacancies lead to reduced reliance on agency staff.' },
      { title: 'Higher Workforce Utilisation', body: 'Roles are filled faster, improving operational efficiency.' },
      { title: 'Improved Decision Quality', body: 'Consistent evaluation reduces poor hiring outcomes.' },
    ],
  },

  financial: {
    headline: 'Financial Impact',
    points: [
      'Reduced agency spend through lower reliance on temporary staffing',
      'Lower vacancy costs through faster role fulfilment',
      'Improved workforce utilisation through consistent role coverage',
    ],
    keyStatement:
      'For large healthcare organisations, this typically represents multi-million-pound annual impact, driven primarily by reductions in agency spend and vacancy-related costs.',
    closingLine:
      'The specific financial impact is quantified during a structured pilot, based on your workforce composition, vacancy levels, and agency usage.',
  },

  finalCta: {
    headline: 'See the Impact in Your Organisation',
    subtext: 'Every organisation has a different starting point. The fastest way to understand the impact is through a structured pilot.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
    ],
  },
}
