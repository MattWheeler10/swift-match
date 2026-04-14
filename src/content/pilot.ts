export const pilot = {
  hero: {
    headline: 'Start with a Controlled Pilot Deployment',
    subheadline: 'Validate performance, impact, and ROI in your live environment',
    supportingLine:
      'A structured, low-risk approach to improving hiring speed, workforce capacity, and cost control',
    tensionLine:
      'Every delayed hire increases cost and reliance on agency staffing — this is the fastest way to change that',
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },

  whatItIs: {
    headline: 'A live, measurable deployment',
    body: [
      'The SwiftMatch pilot is not a simulation or proof of concept',
      'It operates within your existing recruitment workflow to deliver measurable results on real roles',
    ],
    points: [
      'Runs in your live environment',
      'Integrates with your existing ATS',
      'Applied to real vacancies and hiring activity',
    ],
    keyLine: 'This is a real deployment designed to deliver measurable impact within weeks',
    additionalLine: 'You are not testing a tool — you are validating a system within your own environment',
  },

  deliverables: {
    headline: 'Immediate capability applied to your live hiring workflow',
    lead: 'During the pilot, SwiftMatch delivers:',
    items: [
      'AI-driven CV scoring and ranking',
      'Automated shortlisting and scheduling',
      'Workflow orchestration across all stages',
      'Continuous pipeline creation and reuse',
      'Structured interview support and evaluation',
      'Real-time performance tracking and reporting',
    ],
    keyLine: 'Immediate visibility into how your hiring process performs — and where it improves',
  },

  phases: [
    {
      title: 'Phase 1 — Deployment (Weeks 1–4)',
      items: [
        'Integration with existing systems',
        'Workflow configuration',
        'Deployment on live roles',
        'KPI baseline established',
      ],
    },
    {
      title: 'Phase 2 — Optimisation',
      items: ['Workflow refinement', 'Performance tuning', 'Process alignment with teams'],
    },
    {
      title: 'Phase 3 — Evaluation & Scale Decision',
      items: [
        'Results reviewed against baseline',
        'ROI assessed (including agency reduction)',
        'Decision to scale across organisation',
      ],
    },
  ],
  phasesClosingLine: 'Structured delivery with measurable outcomes at every stage',

  kpis: {
    headline: 'Defined, measurable outcomes',
    items: [
      'Time from CV to interview (<48 hours target)',
      'Time-to-fill reduction',
      'CV processing coverage (target: 100%)',
      'Interview attendance rates',
      'Reduction in manual workload',
      'Reduction in vacancy duration',
      'Reduction in agency reliance',
    ],
    keyLine:
      'By the end of the pilot, you have clear evidence of performance improvement and a defined path to scale',
    supportingLine: 'Performance is measured against defined outcomes — not assumed',
  },

  commercial: {
    headline: 'Transparent, phased investment',
    points: [
      'Fixed-cost pilot deployment',
      'Clearly defined scope and deliverables',
      'No long-term commitment required upfront',
    ],
    additionalLine: 'Scaling decisions are based entirely on proven results',
  },

  lowRisk: {
    headline: 'A controlled, low-risk approach',
    points: [
      'No replacement of existing systems',
      'Operates within current workflows',
      'Limited initial scope',
      'Measurable outcomes before scaling',
      'Full visibility of performance',
    ],
    keyLine: 'You validate impact before committing to scale',
    criticalLine:
      'The risk is not in running the pilot — it is in continuing with a system that cannot respond fast enough',
  },

  finalCta: {
    headline: 'Start your pilot deployment',
    subtext:
      'See measurable improvements in hiring speed, cost, and workforce capacity within weeks — in your own environment',
    ctas: [
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'primary' as const },
      { label: 'Book a Live Demo', to: '/demo', variant: 'outline' as const },
    ],
  },
}
