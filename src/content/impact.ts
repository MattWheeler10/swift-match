export const impact = {
  hero: {
    headline: 'Improving Workforce Capacity, Cost Efficiency, and Service Outcomes',
    subheadline:
      'SwiftMatch Workforce directly impacts the metrics that define organisational performance',
    supportingLine:
      'From hiring speed to workforce stability — measurable improvements in capacity, cost, and workforce performance',
    diagramSteps: ['Hiring', 'Competency', 'Performance', 'Outcomes', 'Value'],
  },

  coreValue: {
    headline: 'Core value',
    statements: [
      'Hiring is not an isolated function — it is the primary driver of workforce capacity, cost, and performance',
      'Faster, higher-quality hiring increases capacity, reduces cost, stabilises staffing, and improves service outcomes',
      'Without a continuous workforce supply, organisations are forced to solve the same problem repeatedly — at increasing cost',
    ],
  },

  workforce: {
    headline: 'Workforce and Service Impact',
    points: [
      'Faster access to qualified staff',
      'Reduced disruption caused by vacancies and last-minute cover',
      'Improved continuity and consistency of service delivery',
      'Reduced reliance on temporary or agency staff',
      'Immediate access to pre-qualified candidates improves hiring reliability',
    ],
    supportingLine:
      'When access to qualified candidates is delayed, service delivery becomes unstable and dependent on temporary solutions',
    closingLine: 'Better hiring directly improves workforce stability and service outcomes',
  },

  financial: {
    headline: 'Financial Impact',
    points: [
      '20–40% reduction in agency and temporary staffing spend over time',
      'Reduced cost of vacancy and hiring delay',
      'Increased utilisation of permanent workforce',
      'Reduced dependency on agency staff through faster access to pre-qualified candidates',
    ],
    supportingLines: [
      'Agency spend is not inevitable — it is the result of a system that cannot respond fast enough',
      'Without a continuous pipeline of pre-qualified candidates, organisations are forced to repeatedly rely on agency staffing',
      'Agency staffing is often one of the largest uncontrolled cost areas across organisations',
    ],
    closingLine: 'Every day a role remains unfilled carries a measurable cost',
  },

  operational: {
    headline: 'Operational Impact',
    metrics: [
      '<48 hours from CV to interview',
      '100% of applications processed',
      '95% interview attendance',
      'Reduced candidate drop-off',
      'Reduced vacancy duration',
    ],
    supportingLine:
      'Immediate access to pre-qualified candidates reduces time from vacancy to interview',
    closingLine:
      'Removing delays and enabling immediate access to candidates unlocks capacity across the system',
  },

  capability: {
    headline: 'Linking workforce capability to performance and outcomes',
    supportingLine:
      'Consistent access to high-quality candidates ensures consistent workforce capability',
    points: [
      'Hiring defines the capability within your workforce',
      'Workforce capability determines how services are delivered',
      'Consistent capability leads to consistent outcomes',
    ],
    keyLine: 'Workforce outcomes are a function of workforce capability',
  },

  transformation: {
    headline: 'From hiring activity to workforce performance system',
    intro:
      'SwiftMatch Workforce enables a progression from reactive hiring to a controlled, data-driven workforce system',
    stages: [
      { title: 'Workflow Orchestration', description: 'Faster hiring and immediate capacity improvement' },
      { title: 'Structured Evaluation', description: 'Consistent, competency-based hiring decisions' },
      {
        title: 'Pipeline Creation and Reuse',
        description:
          'Persistent candidate pipelines provide immediate access to pre-qualified candidates when vacancies arise. Agency reliance reduces as permanent workforce supply increases',
      },
      { title: 'Workforce Planning', description: 'Visibility of workforce supply and demand' },
      {
        title: 'Continuous Optimisation',
        description: 'Ongoing improvement in cost, capacity, and performance',
      },
    ],
    closingLine:
      'Hiring shifts from reactive sourcing to activating an existing, high-quality candidate supply',
  },

  proof: {
    headline: 'Proven performance in live environments',
    metrics: [
      { value: '<48 hours', label: 'to interview' },
      { value: '100%', label: 'CV coverage' },
      { value: '95%', label: 'interview attendance' },
      { value: '≥5 days', label: 'reduction in time-to-fill' },
    ],
    supportingLine:
      'Measured reductions in agency reliance driven by faster hiring and pipeline reuse',
    pressureLine:
      'The cost of inaction is ongoing — every delayed hire compounds cost, instability, and reliance on agency staff',
  },

  pilot: {
    headline: 'Validate impact in your environment',
    points: ['4–6 week pilot', 'Live workflows', 'Measurable KPIs', 'No system replacement'],
    supportingLine: 'Quantify reduction in agency spend and time-to-hire using your own data',
    closingLine: 'See measurable results before committing to scale',
    cta: { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
  },

  finalCta: {
    headline: 'See the impact in your organisation',
    subtext: 'Walk through your current hiring workflow and identify measurable improvements',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
