export const demo = {
  hero: {
    headline: 'Book a Live Demo',
    subheadline:
      'See how SwiftMatch improves hiring speed, reduces agency reliance, and increases workforce capacity',
    supportingLine:
      'Walk through your current recruitment workflow and identify where delays, cost, and inefficiencies can be removed',
    pressureLine:
      'Most organisations identify multiple points of delay and lost candidates within the first 15 minutes',
  },

  whatYoullSee: {
    headline: 'What the demo will cover',
    items: [
      'How CVs are scored and ranked instantly',
      'How shortlisting and scheduling are automated',
      'How a continuous pipeline of pre-qualified candidates is built and reused',
      'How the platform integrates with your existing systems (e.g. Workday, TRAC)',
    ],
    keyLine:
      'A practical walkthrough of your current hiring workflow — with immediate opportunities for improvement identified',
    additionalLine:
      'This is not a generic product demo — it is applied directly to how your organisation hires today',
  },

  whoShouldAttend: {
    headline: 'Who should attend',
    items: [
      'COO / Operations Director',
      'CFO / Finance Director',
      'Head of HR / Recruitment',
      'Workforce / Resourcing Leads',
      'Department / Service Leads',
    ],
    optionalLine:
      'Relevant stakeholders can join to assess operational, financial, and workforce impact in a single session',
  },

  preview: {
    headline: 'See the platform in action',
    subtext:
      'A short preview of how candidates move from application to interview in under 48 hours',
    note: 'Preview: scoring → ranking → scheduling',
  },

  booking: {
    headline: 'Select a time',
    subtext: 'Choose a time that works for you. The demo typically takes 20–30 minutes',
    additionalLine: 'You will receive a confirmed time and meeting link immediately',
    formFields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'organisation', label: 'Organisation', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'role', label: 'Role', type: 'text', required: false },
      { name: 'preferred', label: 'Preferred date/time', type: 'text', required: false },
    ],
  },

  reassurance: {
    items: [
      'No preparation required',
      'Tailored to your organisation',
      'No obligation',
      'Focused on practical, measurable outcomes',
    ],
    keyLine: 'A focused, practical session designed to show immediate value',
    additionalLine:
      'You will leave the session with a clear understanding of where time, cost, and capacity can be improved',
    finalLine:
      'Focused 20–30 minute session with immediate, practical insights into your hiring process',
  },
}
