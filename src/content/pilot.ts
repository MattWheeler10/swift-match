export const pilot = {
  hero: {
    eyebrow: 'Pilot',
    headline: 'Deploy the Platform in Your Organisation',
    subheadline:
      'The platform is deployed through a structured pilot. Customisation to meet your precise requirements is available on request.',
    supportingLine:
      'Run a defined pilot to implement the platform and measure impact on hiring speed, workforce stability, and agency reliance.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
      { label: 'Book Demo', to: '/demo', variant: 'outline' as const },
    ],
    pilotLine: 'Run a structured pilot to validate impact before full deployment.',
  },

  whatItIs: {
    headline: 'Pilot Deployment',
    body: 'A structured introduction to the Workforce Control Model through a guided demo and executive presentation.',
    purposeHeadline: 'Understand the Model in Your Organisation',
    purpose:
      'The pilot is designed to help decision-makers evaluate:',
    points: [
      'How the model applies to your workforce',
      'Where impact will be created',
      'How the system would be deployed',
    ],
    notATrial: 'It is not a trial. It is a structured, guided process.',
  },

  phases: {
    headline: 'What Happens in the Pilot',
    steps: [
      {
        number: '1',
        title: 'Executive Briefing',
        body: 'An overview of the Workforce Control Model and its application to your organisation.',
        covers: [
          'Current hiring challenges',
          'Workforce control vs recruitment',
          'The structural limitations of existing approaches',
        ],
      },
      {
        number: '2',
        title: 'Platform Demonstration',
        body: 'A guided walkthrough of the system in practice.',
        covers: [
          'How roles are defined and structured',
          'How candidate pools are accessed',
          'How evaluation and shortlisting are performed',
          'How hiring decisions are governed and tracked',
        ],
      },
      {
        number: '3',
        title: 'Workforce Impact Discussion',
        body: 'We map the model to your organisation.',
        covers: ['Hiring speed', 'Vacancy duration', 'Agency reliance', 'Workforce stability'],
      },
      {
        number: '4',
        title: 'Pilot Scope Definition',
        body: 'If relevant, we define a structured pilot.',
        covers: ['Target roles or departments', 'Expected outcomes', 'Measurement approach'],
      },
    ],
  },

  decisionMakers: {
    headline: 'What Decision-Makers Get',
    intro: 'The pilot provides clarity on:',
    points: [
      'How the system works in practice',
      'Where measurable impact will be created',
      'How risk is controlled through governance',
      'What deployment would involve',
    ],
  },

  designedFor: {
    headline: 'Designed for Healthcare Leadership Teams',
    intro: 'The pilot is typically attended by:',
    attendees: [
      'HR and workforce leaders',
      'Operational leadership (COO / service leads)',
      'Finance stakeholders',
      'Transformation and digital teams',
    ],
    logistics: [
      '30–60 minute executive session',
      'No preparation required',
      'Tailored discussion based on your organisation',
    ],
  },

  lowRisk: {
    headline: 'A Low-Risk Way to Evaluate Change',
    body: 'The pilot is designed to:',
    points: [
      'Require minimal upfront commitment',
      'Provide clear, structured insight',
      'Enable informed decision-making',
    ],
  },

  postPilot: {
    headline: 'From Evaluation to Deployment',
    intro: 'Following the pilot, organisations typically:',
    steps: [
      'Proceed to a defined implementation',
      'Expand scope across departments',
      'Measure ongoing workforce impact',
    ],
    outcomes: {
      label: 'The outcome of the pilot is a clear view of:',
      points: [
        'Expected financial impact',
        'Operational changes required',
        'Recommended deployment approach',
      ],
    },
  },

  finalCta: {
    headline: 'Start Pilot',
    subtext: 'Run a structured evaluation tailored to your organisation.',
    ctas: [
      { label: 'Start Pilot', to: '/pilot', variant: 'primary' as const },
      { label: 'Book Demo', to: '/demo', variant: 'outline' as const },
    ],
  },
}
