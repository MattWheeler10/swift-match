export const platform = {
  hero: {
    headline: 'An Enterprise-Grade Platform for Workforce Orchestration',
    subheadline: 'Secure, scalable, and designed to operate within your existing systems',
    supportingLine:
      'SwiftMatch delivers workforce performance without compromising security, compliance, or control',
    keyLine:
      'Your systems remain the system of record — SwiftMatch enhances execution around them',
  },

  overview: {
    headline: 'Platform Overview',
    body: [
      'SwiftMatch is an orchestration platform designed to operate alongside existing enterprise systems',
      'It enables faster, more consistent hiring without requiring system replacement',
    ],
    pillars: [
      {
        title: 'Secure by Design',
        description: 'Built with data protection, governance, and audit requirements at its core',
      },
      {
        title: 'Integration First',
        description: 'Designed to work with systems of record without replacing them',
      },
      {
        title: 'Scalable Architecture',
        description: 'Supports deployment across roles, departments, and organisations',
      },
    ],
  },

  architecture: {
    headline: 'An orchestration layer — not a system replacement',
    flow: [
      'Applicant Tracking System / Workday / TRAC',
      'SwiftMatch Orchestration Layer',
      'Workflow Execution + AI Processing',
    ],
    body: 'SwiftMatch operates as a coordination layer across your recruitment workflow',
    points: [
      'Connects existing systems',
      'Coordinates workflow execution across stages',
      'Applies AI-driven processing within defined workflows',
      'Enables continuous candidate progression',
    ],
    keyLine: 'Your systems remain the system of record',
    additionalLine:
      'SwiftMatch enhances execution without altering system ownership, governance, or control',
  },

  integrations: {
    headline: 'Designed to integrate with existing systems',
    lead: 'SwiftMatch integrates with:',
    systems: ['Workday', 'TRAC', 'Other applicant tracking systems (ATS)', 'Internal scheduling systems'],
    keyPoints: [
      'No system replacement required',
      'Minimal disruption to existing workflows',
      'Rapid integration and deployment',
      'Compatible with existing architecture',
    ],
    additionalLine:
      'Integration is designed to align with internal IT policies and operational constraints',
  },

  data: {
    headline: 'Controlled and minimal data processing',
    points: [
      'Processes only the data required for workflow execution',
      'Uses transient processing to minimise data persistence',
      'Returns processed data to the system of record',
      'Avoids duplication of candidate data',
    ],
    keyLines: [
      'Data remains under your control at all times',
      'No candidate data is stored or processed outside defined workflows and controls',
    ],
  },

  security: {
    headline: 'Security and compliance built in',
    compliance: {
      label: 'SwiftMatch is designed to align with:',
      items: ['UK GDPR', 'Data Protection Act 2018', 'Organisational data governance requirements'],
    },
    measures: {
      label: 'Security Measures',
      items: [
        'Encryption in transit (TLS 1.2+)',
        'Encryption at rest',
        'Role-based access control (RBAC)',
        'Least-privilege access model',
        'Full audit logging of system activity',
      ],
    },
    keyLine:
      'Designed for environments where security, auditability, and control are non-negotiable',
  },

  ai: {
    headline: 'AI designed for controlled, transparent use',
    lead: 'SwiftMatch applies AI to:',
    uses: ['CV scoring and ranking', 'Interview support and evaluation', 'Workflow optimisation'],
    governance: {
      label: 'Governance Principles',
      items: [
        'No fully automated hiring decisions',
        'Human oversight at all stages',
        'Transparent and configurable evaluation criteria',
        'No use of customer data for model training without agreement',
      ],
    },
    keyLine: 'AI supports decisions — humans make them',
  },

  scalability: {
    headline: 'Scalable across your organisation',
    points: [
      'Deployable across roles, departments, and locations',
      'Supports high-volume recruitment environments',
      'Phased deployment reduces implementation risk',
      'Cloud infrastructure designed for enterprise-scale performance',
    ],
    approach: {
      label: 'Deployment Approach',
      items: [
        'Start with a defined pilot',
        'Expand across roles and departments',
        'Scale across organisation',
      ],
    },
    keyLine: 'Start small. Scale with confidence',
  },

  summary: {
    headline: 'Built for performance, without compromise',
    lead: 'SwiftMatch delivers:',
    points: [
      'Secure integration into existing systems',
      'Controlled data processing',
      'Continuous workflow coordination',
      'Enterprise-scale performance',
    ],
    closingLine: 'A platform you can trust — operating within your systems, not replacing them',
  },

  finalCta: {
    headline: 'See how this integrates with your systems',
    subtext:
      'Review your current architecture and understand how SwiftMatch fits into your environment',
    ctas: [
      { label: 'Book a Live Demo', to: '/demo', variant: 'primary' as const },
      { label: 'Start Pilot Deployment', to: '/pilot', variant: 'outline' as const },
    ],
  },
}
