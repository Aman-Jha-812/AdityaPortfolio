/**
 * Portfolio catalogue.
 * ---------------------------------------------------------------------------
 * This file powers the Legal Portfolio page and each individual detail page.
 * Every entry must be honest about its status:
 *   status: 'Sample Project' | 'Educational Draft' | 'Research Note' | 'Case Analysis'
 * `download` is either null or { label, href }. Only set `href` when a real
 * file exists inside /public. See src/data/README-notes at the bottom of this
 * file for how to add new entries.
 */

export const portfolioCategories = [
  'Commercial Contracts',
  'Technology Law',
  'Data Privacy',
  'Public Policy',
  'Legal Research',
  'Case Briefs and Legal Analysis',
]

export const portfolioItems = [
  {
    id: 'nda-mutual-startups',
    title: 'Mutual Non-Disclosure Agreement for an Early-Stage Software Collaboration',
    category: 'Commercial Contracts',
    status: 'Educational Draft',
    documentType: 'Annotated contract draft',
    date: '2026-02-12',
    updated: '2026-03-04',
    summary:
      'An annotated mutual NDA drafted for two fictional software companies evaluating a joint product integration. The draft shows how confidentiality is scoped, limited in time, and enforced.',
    topics: ['Confidentiality', 'Trade secrets', 'Governing law', 'Remedies'],
    learningObjectives: [
      'Understand how "Confidential Information" is defined and carved back by exclusions',
      'See how duration, permitted use, and return-of-information clauses fit together',
      'Practise writing a remedies clause that is proportionate to the risk',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This exercise models a mutual (two-way) NDA between "Northwind Labs Pvt. Ltd." and "Kestrel Systems Pvt. Ltd.", two fictional software businesses considering a product integration. Both sides will share commercially sensitive roadmaps and pricing, so the obligations run in both directions.',
          'The goal was not to produce a template to reuse blindly, but to understand why each clause exists and what happens when one is left out.',
        ],
      },
      {
        heading: 'What the draft covers',
        list: [
          'A purpose-limited definition of Confidential Information, with standard exclusions',
          'Permitted use and the narrow circumstances in which disclosure to advisers is allowed',
          'A confidentiality term running for a fixed period after discussions end',
          'Return or certified destruction of materials on request',
          'Injunctive relief as a remedy, kept alongside — not instead of — damages',
          'Governing law and a tiered dispute-resolution clause',
        ],
      },
      {
        heading: 'What I learned',
        paragraphs: [
          'The hardest part was the definition of Confidential Information. A definition that is too broad is easy to challenge; one that is too narrow leaves real information unprotected. Writing the exclusions (already public, independently developed, lawfully received from a third party) forced me to think about evidence and proof.',
        ],
      },
    ],
  },
  {
    id: 'saas-terms-study',
    title: 'SaaS Subscription Terms: Mapping the Provider–Customer Risk Allocation',
    category: 'Technology Law',
    status: 'Research Note',
    documentType: 'Structured research note',
    date: '2026-03-18',
    updated: null,
    summary:
      'A clause map of a hypothetical business-to-business SaaS subscription agreement, focused on how availability commitments, data protection, and liability caps interact.',
    topics: ['SaaS', 'Service levels', 'Liability caps', 'Data protection'],
    learningObjectives: [
      'Read a services agreement as an allocation of risk rather than a list of promises',
      'Connect an uptime commitment to the remedies that make it meaningful',
      'Identify where data protection obligations must be pulled into a separate agreement',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This note builds on the SaaS drafting exercise in the Contract Lab. It maps the main clauses of a hypothetical subscription agreement between a fictional provider and a business customer, then asks where the real commercial risk sits.',
        ],
      },
      {
        heading: 'Key observations',
        list: [
          'A service-level commitment without a service credit or termination right is largely aspirational',
          'Liability caps and indemnities should be read together, not in isolation',
          'Personal data obligations belong in a linked data processing agreement, not buried in the main body',
          'Suspension and termination rights need a defined cure period to be workable',
        ],
      },
      {
        heading: 'Open questions',
        paragraphs: [
          'How should a small customer negotiate a liability cap when its own exposure to its users is uncapped? This note does not resolve that question; it sets out the competing positions for further reading and class discussion.',
        ],
      },
    ],
  },
  {
    id: 'dpa-role-mapping',
    title: 'Data Processing Agreement: Mapping Controller, Processor, and Sub-processor Roles',
    category: 'Data Privacy',
    status: 'Educational Draft',
    documentType: 'Annotated contract draft',
    date: '2026-04-02',
    updated: '2026-04-20',
    summary:
      'An educational data processing agreement drafted under a hypothetical India–EU scenario, showing how processing instructions, security, breach notification, and cross-border transfers are addressed.',
    topics: ['DPDP Act', 'GDPR', 'Sub-processors', 'Cross-border transfers'],
    learningObjectives: [
      'Distinguish the roles of controller, processor, and sub-processor',
      'Understand the purpose limitation and instruction-following obligations',
      'See how breach notification timelines and transfer safeguards are documented',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This draft imagines a fictional analytics provider processing personal data on behalf of a European business customer while hosting some infrastructure in India. It explores how an agreement can document roles, instructions, and safeguards.',
        ],
      },
      {
        heading: 'Structure of the draft',
        list: [
          'Role statements for each party, including sub-processors',
          'Processing instructions and a stated purpose and scope',
          'Technical and organisational security measures',
          'Breach notification duties and timelines',
          'Support for data subject requests',
          'Retention, deletion, and return of data',
          'Audit and compliance cooperation',
          'Cross-border transfer mechanisms',
        ],
      },
      {
        heading: 'Caveat',
        paragraphs: [
          'This is an educational draft. The legal accuracy of any transfer mechanism depends on current law and regulatory guidance, which changes. The draft is a learning tool, not a compliance document.',
        ],
      },
    ],
  },
  {
    id: 'intermediary-rules-note',
    title: 'Intermediary Liability and Due-Diligence Duties: A Reading Note',
    category: 'Public Policy',
    status: 'Research Note',
    documentType: 'Policy reading note',
    date: '2026-02-27',
    updated: '2026-03-30',
    summary:
      'A reading note on how Indian intermediary regulation structures due-diligence duties for online platforms, and what those duties mean for a fictional early-stage platform.',
    topics: ['Intermediary liability', 'Due diligence', 'Platform regulation'],
    learningObjectives: [
      'Identify the categories of intermediaries recognised in Indian law',
      'Understand what "safe harbour" means and what it depends on',
      'Translate a compliance duty into operational checklist items',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This note summarises my reading of India’s intermediary framework and its due-diligence conditions. It is written in plain language for my own revision and is clearly a personal learning note, not a legal opinion.',
        ],
      },
      {
        heading: 'Why it matters to a young platform',
        paragraphs: [
          'A fictional community platform that hosts user content has to decide what it will monitor, what it will act on, and how quickly. Those operational choices map directly onto the statutory conditions a platform must meet to keep its protection from liability for third-party content.',
        ],
      },
      {
        heading: 'Open questions',
        list: [
          'How much proactive monitoring is reasonable for a small platform?',
          'What does "actual knowledge" mean in practice?',
          'How do grievance-redressal timelines shape product design?',
        ],
      },
    ],
  },
  {
    id: 'dpdp-basics-explainer',
    title: 'India’s Digital Personal Data Protection Act, 2023: A Student Explainer',
    category: 'Legal Research',
    status: 'Research Note',
    documentType: 'Explainer',
    date: '2026-05-06',
    updated: null,
    summary:
      'A short, source-linked explainer on the structure of the Digital Personal Data Protection Act, 2023, written for readers meeting the statute for the first time.',
    topics: ['Data protection', 'Consent', 'Data principals', 'Statutory structure'],
    learningObjectives: [
      'Map the statute’s main actors and obligations',
      'Distinguish enacted provisions from awaited rules',
      'Practise citing primary sources accurately',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This explainer walks through the basic vocabulary of the Digital Personal Data Protection Act, 2023: data principal, data fiduciary, consent, purpose limitation, and the significance of rules still to be notified.',
        ],
      },
      {
        heading: 'Approach',
        list: [
          'Describe only what the enacted text says',
          'Flag clearly wherever implementation depends on rules or guidance',
          'Link to the official text rather than paraphrasing from secondary summaries',
        ],
      },
      {
        heading: 'Review status',
        paragraphs: [
          'Statute and rules move quickly. This note records a date last reviewed so readers can judge how current it is.',
        ],
      },
    ],
  },
  {
    id: 'case-analysis-shreya',
    title: 'Case Analysis Exercise: Reading a Privacy Dispute Through the Elements of a Claim',
    category: 'Case Briefs and Legal Analysis',
    status: 'Case Analysis',
    documentType: 'Case analysis',
    date: '2026-04-11',
    updated: null,
    summary:
      'A classroom-style analysis exercise using a clearly hypothetical dispute to practise separating facts, issues, arguments, and reasoning before a holding is reached.',
    topics: ['Case method', 'Legal reasoning', 'Privacy claims'],
    learningObjectives: [
      'Practise the facts-issues-arguments-reasoning framework',
      'Avoid stating a holding without tracing the reasoning that supports it',
      'Identify what a real citation would need before the brief could be published',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'This is a method-practice exercise. The dispute is hypothetical and is used purely to rehearse how to structure a case analysis. No real judgment is summarised here, and no citation is asserted until it can be verified.',
        ],
      },
      {
        heading: 'Facts, issues, and arguments',
        list: [
          'Facts: a fictional service learns of a data incident and delays notification',
          'Issue: which duties were triggered, and when',
          'Arguments: competing readings of what "without undue delay" requires',
        ],
      },
      {
        heading: 'Why it is labelled this way',
        paragraphs: [
          'It would be misleading to publish this as a real case brief. It is an analysis exercise, and it is labelled as one until it is replaced with a brief of a genuine, verifiable judgment.',
        ],
      },
    ],
  },
  {
    id: 'tos-platform-study',
    title: 'Website Terms of Service for a Fictional Content Platform',
    category: 'Technology Law',
    status: 'Educational Draft',
    documentType: 'Annotated contract draft',
    date: '2026-03-09',
    updated: '2026-03-25',
    summary:
      'An educational set of platform terms covering eligibility, acceptable use, user content, service changes, and dispute resolution, with annotations on each choice.',
    topics: ['Terms of service', 'User content', 'Acceptable use', 'Consumer disputes'],
    learningObjectives: [
      'Draft terms a real user could actually read and follow',
      'Balance platform flexibility against fairness to users',
      'See how consumer-protection rules constrain one-sided drafting',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'These terms are drafted for a fictional content-sharing platform and are annotated to explain each drafting decision. They are an educational exercise, not a reusable template.',
        ],
      },
      {
        heading: 'Drafting choices worth noting',
        list: [
          'Acceptable-use rules written as concrete examples rather than vague prohibitions',
          'A plainly explained licence over user content, limited to operating the service',
          'Change-of-terms and termination clauses with reasonable notice',
          'A dispute-resolution clause that respects consumer-protection requirements',
        ],
      },
    ],
  },
  {
    id: 'ai-governance-reading-notes',
    title: 'AI Governance: Reading Notes on Regulating Uncertainty',
    category: 'Public Policy',
    status: 'Research Note',
    documentType: 'Reading notes',
    date: '2026-05-19',
    updated: null,
    summary:
      'Reading notes exploring how regulators approach fast-moving technology, and what a technology business should watch as governance frameworks develop.',
    topics: ['AI governance', 'Risk-based regulation', 'Emerging law'],
    learningObjectives: [
      'Compare risk-based and rules-based approaches to AI regulation',
      'Distinguish binding law, draft proposals, and non-binding guidance',
      'Consider how regulation shapes product and contract design',
    ],
    download: null,
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'These notes gather my reading on AI governance. They deliberately separate enacted law, draft or proposed instruments, and guidance, because confusing the three is one of the easiest mistakes to make when reading quickly.',
        ],
      },
      {
        heading: 'Emerging themes',
        list: [
          'Risk classification as a organising idea',
          'Transparency and documentation duties',
          'The tension between harmonisation and local rules',
        ],
      },
      {
        heading: 'Open questions',
        paragraphs: [
          'How should a small company build compliance that can adapt when rules are still forming? This remains an open question I intend to keep reading on.',
        ],
      },
    ],
  },
]

export function getPortfolioItem(id) {
  return portfolioItems.find((item) => item.id === id)
}

/*
 * To add a new portfolio item:
 *   1. Copy an existing object.
 *   2. Give it a unique `id` (used in the URL).
 *   3. Choose a `category` from portfolioCategories.
 *   4. Set `status` honestly and `download` to null unless a real file exists.
 * No layout code needs to change.
 */
