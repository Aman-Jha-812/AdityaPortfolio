/**
 * Contract Drafting Lab.
 * ---------------------------------------------------------------------------
 * Five educational drafting exercises. Each project follows the same eleven
 * sections so the detail page can render them consistently:
 *   1 Overview · 2 Business Scenario · 3 Legal Issues · 4 Drafting Objectives
 *   5 Key Clauses · 6 Clause-by-Clause Explanation · 7 Negotiation
 *   8 Legal Framework · 9 What I Learned · 10 References · 11 Download
 *
 * All parties and scenarios are fictional. These are learning drafts, not
 * legally reviewed templates, and must never be presented as ready for use.
 */

export const contracts = [
  {
    id: 'mutual-nda',
    number: '01',
    title: 'Mutual Non-Disclosure Agreement',
    shortTitle: 'Mutual NDA',
    status: 'Educational Draft',
    documentType: 'Contract draft',
    updated: '2026-03-04',
    purpose:
      'Understand how businesses protect confidential information when discussing partnerships, products, or commercial opportunities.',
    overview: [
      'This exercise drafts a mutual (two-way) non-disclosure agreement for two fictional software companies, Northwind Labs Pvt. Ltd. and Kestrel Systems Pvt. Ltd., weighing a possible product integration. Because both sides will share sensitive information, the obligations must run in both directions.',
      'A mutual NDA is a good first drafting exercise because the document is short, but nearly every clause carries a commercial judgment. The task was to understand those judgments, not to memorise a template.',
    ],
    scenario: [
      'Northwind builds scheduling software; Kestrel builds an analytics tool. Their product teams want to explore a joint integration and, later, a possible reseller arrangement. To do that, each side must see the other’s roadmap, pricing models, and technical interfaces before any commercial deal is signed.',
      'Neither company wants to hand over information that could be used if talks collapse. The NDA is the instrument that lets them talk openly while limiting that risk.',
    ],
    legalIssues: [
      'How broadly should "Confidential Information" be defined without making the clause easy to attack?',
      'What categories of information should be excluded, and who bears the burden of proving an exclusion applies?',
      'How long should confidentiality survive after discussions end, and should the term differ for trade secrets?',
      'Should the remedy be injunctive relief, damages, or both, and how can that be drafted proportionately?',
      'Which law governs, and how should disputes be resolved?',
    ],
    draftingObjectives: [
      'Scope confidentiality tightly to a stated purpose',
      'Make the exclusions workable rather than theoretical',
      'Keep the term reasonable and distinguish trade secrets where useful',
      'Provide a remedy that is strong but not punitive',
      'Set a clear governing law and dispute-resolution path',
    ],
    keyClauses: [
      { name: 'Parties and Purpose', purpose: 'Identify the parties and confine the use of information to evaluating the proposed collaboration.' },
      { name: 'Definition of Confidential Information', purpose: 'Define what is protected, including how information is marked or identified.' },
      { name: 'Exclusions', purpose: 'Carve out information that is not, or should no longer be, confidential.' },
      { name: 'Permitted Use and Disclosure', purpose: 'Allow use only for the purpose, with narrow disclosure to advisers under duty.' },
      { name: 'Duration', purpose: 'Set how long the obligations last after discussions end.' },
      { name: 'Return or Destruction', purpose: 'Require return or certified destruction on request.' },
      { name: 'Remedies and Limitation of Liability', purpose: 'Address injunctive relief and the limits of monetary liability.' },
      { name: 'Governing Law and Dispute Resolution', purpose: 'Choose the applicable law and the forum for disputes.' },
    ],
    clauseExplanations: [
      {
        clause: 'Definition of Confidential Information',
        sample:
          '"Confidential Information" means all non-public information disclosed by one party (the "Discloser") to the other (the "Recipient"), whether orally, in writing, or in any other form, that is designated as confidential at the time of disclosure or that a reasonable person would understand to be confidential given its nature and the circumstances of disclosure.',
        explanation:
          'The definition balances breadth against certainty. Covering oral disclosures is realistic, but requiring every oral disclosure to be confirmed in writing within a short window prevents disputes about what was actually said. The "reasonable person" fallback protects genuinely sensitive information that was shared without a label.',
      },
      {
        clause: 'Exclusions',
        sample:
          'Confidential Information does not include information that: (a) is or becomes public through no breach of this Agreement; (b) the Recipient already lawfully held without a duty of confidence; (c) is lawfully received from a third party without restriction; or (d) is independently developed without use of the Discloser’s Confidential Information.',
        explanation:
          'Each exclusion corresponds to a real situation. The independent-development exclusion matters most to software companies, who may be building similar features in parallel. Leaving it out can accidentally hand one party a claim over the other’s own work.',
      },
      {
        clause: 'Duration',
        sample:
          'The obligations in this Agreement continue for three (3) years from the date of disclosure. For information that constitutes a trade secret under applicable law, the obligations continue for so long as the information remains a trade secret.',
        explanation:
          'A fixed term keeps the burden predictable, while the trade-secret carve-out reflects that some protection should not simply expire by the calendar. The two-part structure is a common and defensible compromise.',
      },
      {
        clause: 'Remedies and Limitation of Liability',
        sample:
          'The parties agree that a breach may cause irreparable harm for which monetary damages would be an inadequate remedy, and the Discloser may seek injunctive relief in addition to any other remedy. Neither party is liable for indirect or consequential losses arising from this Agreement.',
        explanation:
          'Injunctive relief is standard because a disclosure cannot always be undone. The exclusion of consequential losses keeps the monetary exposure proportionate, so a smaller company is not exposed to open-ended damages for a short evaluation.',
      },
    ],
    negotiation: [
      { point: 'Length of confidentiality term', provider: 'Longer, or indefinite for all information', customer: 'Short and fixed, tied to the project', compromise: 'Fixed term with an ongoing carve-out for trade secrets' },
      { point: 'Residuals clause', provider: 'No residuals; strict return of all knowledge', customer: 'Wants to use unaided memory of general know-how', compromise: 'Narrow residuals limited to general skills, excluding trade secrets' },
      { point: 'Remedy', provider: 'Automatic injunction on any breach', customer: 'Damages only, with proof of loss', compromise: 'Injunctive relief where harm is shown, plus a liability cap' },
      { point: 'Confirmation of oral disclosures', provider: 'All oral disclosures protected automatically', customer: 'Only written, labelled disclosures count', compromise: 'Oral disclosures confirmed in writing within 30 days' },
    ],
    legalFramework: [
      { area: 'Contract law', note: 'Enforceability rests on the ordinary requirements of a valid contract: offer, acceptance, consideration, and intention to create legal relations. An NDA with no consideration may raise questions in some systems.' },
      { area: 'Confidentiality and equity', note: 'Equitable doctrines of confidence can protect information independently of contract, which is why the trade-secret carve-out matters.' },
      { area: 'Trade secrets', note: 'Several jurisdictions protect trade secrets by statute, e.g. under a trade-secrets framework, with remedies that can differ from pure contract damages.' },
      { area: 'Dispute resolution', note: 'Governing-law and arbitration choices should match where the parties and assets actually are.' },
    ],
    learnings: [
      'A definition clause does most of the work in an NDA; the rest of the document exists to qualify it.',
      'Exclusions are not boilerplate. They encode assumptions about how the two businesses operate.',
      'Drafting a proportionate remedy clause is harder than drafting a strict one.',
    ],
    references: [
      { title: 'WIPO, "Trade Secrets" — overview of protection of confidential information', source: 'WIPO', url: 'https://www.wipo.int/trade-secrets/en/' },
      { title: 'India Code — Indian Contract Act, 1872', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
      { title: 'UNCITRAL Model Law on International Commercial Arbitration', source: 'UNCITRAL', url: 'https://uncitral.un.org/en/texts/arbitration/modellaw/commercial_arbitration' },
    ],
    download: null,
  },
  {
    id: 'saas-agreement',
    number: '02',
    title: 'SaaS Services Agreement',
    shortTitle: 'SaaS Agreement',
    status: 'Educational Draft',
    documentType: 'Contract draft',
    updated: '2026-03-25',
    purpose:
      'Understand the contractual relationship between a software provider and a business customer.',
    overview: [
      'This exercise drafts a business-to-business Software-as-a-Service agreement between a fictional provider, Cirrus Cloud Solutions Pvt. Ltd., and a fictional customer, Meridian Retail Pvt. Ltd. The provider hosts a subscription analytics product that the customer uses to run its stores.',
      'A SaaS agreement is interesting because the product is a continuing service, not a one-off sale. That shifts the drafting focus towards availability, change, exit, and data over the life of the relationship.',
    ],
    scenario: [
      'Meridian wants a hosted dashboard for its retail data. It will pay a subscription fee per user, per month, under a three-year term. Cirrus controls the infrastructure and releases updates on its own schedule. Customer data will sit on Cirrus’s systems, some of which are in a different country.',
      'Most of the negotiating tension is about what happens when the service is unavailable, when the customer wants to leave early, and who is responsible for personal data in the system.',
    ],
    legalIssues: [
      'How is the service defined so that "the service" is measurable?',
      'How should availability be promised and what remedy attaches if it is missed?',
      'Who owns custom configurations, data, and improvements to the product?',
      'Where should personal data responsibilities live within the agreement?',
      'How can the customer exit, and what happens to its data afterwards?',
    ],
    draftingObjectives: [
      'Define the service and customer obligations precisely',
      'Tie availability to a real remedy rather than a slogan',
      'Separate intellectual property from customer data clearly',
      'Route personal data into a linked data processing agreement',
      'Make termination and data-return workable',
    ],
    keyClauses: [
      { name: 'Scope of Services', purpose: 'Define what is provided, where, and by reference to any order form or service description.' },
      { name: 'Customer Obligations', purpose: 'Set out account security, lawful use, and cooperation duties.' },
      { name: 'Fees and Payment', purpose: 'State pricing, invoicing, late-payment, and tax treatment.' },
      { name: 'Service Availability', purpose: 'Commit to an uptime level and describe service credits.' },
      { name: 'Intellectual Property', purpose: 'Allocate ownership of the platform versus customer data and customisations.' },
      { name: 'Data Protection', purpose: 'Point to a data processing agreement and set security expectations.' },
      { name: 'Warranties and Disclaimers', purpose: 'Give a limited service warranty and exclude implied terms to the extent allowed.' },
      { name: 'Indemnities', purpose: 'Allocate responsibility for third-party intellectual-property claims and misuse.' },
      { name: 'Limitation of Liability', purpose: 'Cap and carve out liability in a way that is commercially acceptable.' },
      { name: 'Termination and Dispute Resolution', purpose: 'Set term, termination rights, consequences, and the dispute path.' },
    ],
    clauseExplanations: [
      {
        clause: 'Service Availability',
        sample:
          'Cirrus will make the Service available at least 99.5% of the time in each calendar month, excluding Scheduled Maintenance and events outside its reasonable control. If Cirrus fails to meet this commitment, the Customer is entitled to service credits as set out in the Service Level Schedule. Service credits are the Customer’s sole financial remedy for availability failures.',
        explanation:
          'Uptime numbers mean little without a measurement method and a consequence. Naming an exclusions list, a measurement basis, and a remedy turns the clause into something both sides can apply. Making the credit the sole financial remedy keeps the provider’s exposure bounded.',
      },
      {
        clause: 'Intellectual Property',
        sample:
          'Cirrus retains all rights in the Service, its software, and any improvements. The Customer retains all rights in its data and in any configuration it creates. The Customer grants Cirrus a limited licence to host and process Customer data solely to provide the Service. Feedback may be used by Cirrus to improve the Service without obligation.',
        explanation:
          'The clause draws a clean line between the platform (provider) and the data (customer), with a narrow licence so the provider can actually run the product. The feedback sentence is deliberately narrow; broad feedback clauses are common but should be flagged in negotiation.',
      },
      {
        clause: 'Limitation of Liability',
        sample:
          'Neither party is liable for indirect or consequential losses. Each party’s total aggregate liability is capped at the fees paid or payable in the twelve months preceding the claim. These limits do not apply to a party’s breach of confidentiality, indemnity obligations, or wilful misconduct.',
        explanation:
          'The cap ties exposure to the value of the contract, which is understandable to both sides. The carve-outs reflect the risks each party takes most seriously. Everything in this clause is negotiable, and the multiplier is often the main battleground.',
      },
      {
        clause: 'Termination and Data Return',
        sample:
          'On termination, Cirrus will make Customer data available for export for thirty (30) days, after which it will delete or anonymise the data in accordance with its retention policy, subject to legal retention requirements. Sections on confidentiality, intellectual property, liability, and governing law survive termination.',
        explanation:
          'An exit plan is as important as the start. A defined export window, a deletion deadline, and surviving clauses prevent a messy ending and protect against silent data retention.',
      },
    ],
    negotiation: [
      { point: 'Liability cap', provider: 'Cap at fees paid in the last 6 months', customer: 'Higher of fees paid or a fixed sum', compromise: 'Fees in the last 12 months, with carve-outs' },
      { point: 'Uptime remedy', provider: 'Service credits only, no termination', customer: 'Right to terminate for repeated failures', compromise: 'Credits plus a termination right after sustained failure' },
      { point: 'Unilateral changes', provider: 'Right to change features at any time', customer: 'Advance notice and no material reduction', compromise: 'Notice period and a right to exit on material adverse changes' },
      { point: 'Audit and security', provider: 'Self-certified security', customer: 'Third-party audit rights', compromise: 'Annual security report plus audit on reasonable suspicion' },
    ],
    legalFramework: [
      { area: 'Contract law', note: 'Supply of a digital service is governed by the parties’ agreement and general contract principles, subject to mandatory consumer rules where the customer is an individual.' },
      { area: 'Consumer protection', note: 'Where the customer is a consumer rather than a business, mandatory consumer-protection law may override one-sided terms.' },
      { area: 'Data protection', note: 'Processing personal data on the customer’s behalf typically requires a data processing agreement and lawful basis under applicable data-protection law.' },
      { area: 'Intellectual property', note: 'Ownership of software, data, and improvements should be stated expressly; default rules may not match expectations.' },
    ],
    learnings: [
      'A service agreement is really a relationship-management document: change, availability, and exit matter more than the initial promises.',
      'Liability caps only make sense once you understand what each side is actually exposed to.',
      'Data obligations belong in a dedicated agreement that the main contract can incorporate.',
    ],
    references: [
      { title: 'United Nations Commission on International Trade Law — texts and guides', source: 'UNCITRAL', url: 'https://uncitral.un.org/en/texts' },
      { title: 'ITU / standards bodies — service-level management concepts', source: 'ITU', url: 'https://www.itu.int/' },
      { title: 'India Code — Consumer Protection Act, 2019', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/15257' },
    ],
    download: null,
  },
  {
    id: 'data-processing-agreement',
    number: '03',
    title: 'Data Processing Agreement',
    shortTitle: 'Data Processing Agreement',
    status: 'Educational Draft',
    documentType: 'Contract draft',
    updated: '2026-04-20',
    purpose:
      'Study contractual responsibilities when a business processes personal data for another organisation.',
    overview: [
      'This exercise drafts a data processing agreement (DPA) for a fictional analytics provider, Alder Insights Pvt. Ltd., processing personal data on behalf of a fictional customer, Bracken Media Ltd., across infrastructure hosted partly in India and partly in the European Union.',
      'The DPA is where the abstract duties of data-protection law become concrete contract clauses. The difficulty is that the same document often has to satisfy more than one legal regime at once.',
    ],
    scenario: [
      'Bracken collects customer data through its media platform. Alder analyses it and returns aggregated reports. Alder uses a cloud host and one email-analytics sub-processor. Some data subjects are in the EU; some infrastructure is in India.',
      'Bracken remains accountable to the data subjects. Alder needs clear instructions and a degree of operational flexibility. The DPA has to hold both pressures at the same time.',
    ],
    legalIssues: [
      'How are the roles of controller, processor, and sub-processor described?',
      'How can processing be purpose-limited without freezing the service?',
      'What security, breach-notification, and data-subject-request duties apply?',
      'How are sub-processors authorised and monitored?',
      'How are retention, deletion, and cross-border transfers handled?',
    ],
    draftingObjectives: [
      'Define the parties’ roles unambiguously',
      'Tie processing to documented instructions and a stated purpose',
      'Make security, breach, and request-support duties operational',
      'Set rules for sub-processors and cross-border transfers',
      'Provide for deletion and return at the end of the relationship',
    ],
    keyClauses: [
      { name: 'Roles of the Parties', purpose: 'State who is controller and who is processor, and identify sub-processors.' },
      { name: 'Processing Instructions', purpose: 'Bind the processor to documented instructions and applicable law.' },
      { name: 'Purpose and Scope of Processing', purpose: 'Describe purpose, categories of data, and data subjects.' },
      { name: 'Security Measures', purpose: 'Set the technical and organisational measures required.' },
      { name: 'Sub-processors', purpose: 'Authorise and control onward processing.' },
      { name: 'Personal Data Breach Notification', purpose: 'Set detection, notification, and cooperation duties.' },
      { name: 'Data Subject Requests', purpose: 'Require assistance with access, correction, and deletion requests.' },
      { name: 'Retention and Deletion', purpose: 'State how long data is kept and how it is deleted or returned.' },
      { name: 'Audit and Compliance', purpose: 'Provide for verification of compliance.' },
      { name: 'Cross-Border Transfers', purpose: 'Document the mechanism for transfers to other jurisdictions.' },
    ],
    clauseExplanations: [
      {
        clause: 'Roles of the Parties',
        sample:
          'The Customer is the controller of the Personal Data and determines the purposes and means of processing. The Processor processes Personal Data only on the Customer’s documented instructions. Each Sub-processor listed in Annex 1 is engaged in accordance with Clause 5.',
        explanation:
          'Data-protection law attaches different duties to each role, so the labels have real consequences. Stating the roles at the top avoids the common mistake of describing the processor as though it were free to decide why data is used.',
      },
      {
        clause: 'Processing Instructions',
        sample:
          'The Processor will process Personal Data only on the Customer’s documented instructions and only to the extent necessary to provide the Services. The Processor will notify the Customer without undue delay if, in its opinion, an instruction would breach applicable data-protection law.',
        explanation:
          'The notification duty protects the processor from being forced to break the law. It also gives the customer a chance to correct an instruction before anything irreversible happens.',
      },
      {
        clause: 'Personal Data Breach Notification',
        sample:
          'The Processor will notify the Customer without undue delay, and in any event within forty-eight (48) hours of becoming aware of a Personal Data Breach. The notification will describe the nature of the breach, the categories and approximate number of data subjects affected, and the measures taken or proposed.',
        explanation:
          'A fixed internal timeline matters because the controller may face its own reporting deadline to a regulator. The required content mirrors what a regulator will want, so the notification is actually useful rather than merely prompt.',
      },
      {
        clause: 'Cross-Border Transfers',
        sample:
          'The Processor will not transfer Personal Data outside the Customer’s jurisdiction without an approved transfer mechanism and the Customer’s prior written authorisation. Where required, the parties will adopt appropriate safeguards and update this Agreement to reflect them.',
        explanation:
          'Transfer rules are among the fastest-changing parts of data-protection law. Drafting a mechanism-neutral clause that must be updated as the law changes is more durable than hard-coding one mechanism that may later fall away.',
      },
    ],
    negotiation: [
      { point: 'Breach notification window', provider: '72 hours or "without undue delay"', customer: '24 hours', compromise: '48 hours with an initial summary followed by details' },
      { point: 'Audit rights', provider: 'Written questionnaires only', customer: 'On-site audit on demand', compromise: 'Annual report plus on-site audit on reasonable cause' },
      { point: 'Sub-processors', provider: 'General authorisation with notice', customer: 'Specific approval for each', compromise: 'General authorisation with objection rights and a notice period' },
      { point: 'Deletion timeline', provider: 'Retain for backups for a year', customer: 'Delete within 30 days', compromise: 'Delete from live systems promptly, backups aged out on a schedule' },
    ],
    legalFramework: [
      { area: 'India — DPDP Act, 2023', note: 'Introduces the concepts of data principal and data fiduciary and imposes obligations that flow into processor arrangements. Implementation depends on rules to be notified.' },
      { area: 'EU — GDPR', note: 'Article 28 sets the mandatory content of processor contracts for EU personal data.' },
      { area: 'Cross-border transfers', note: 'Transfer mechanisms differ by jurisdiction and change over time; verify the current position before relying on any one mechanism.' },
      { area: 'Security standards', note: 'Technical measures are often described by reference to recognised standards and frameworks rather than invented detail.' },
    ],
    learnings: [
      'A DPA is where legal duties become checklists an engineering and operations team can actually follow.',
      'Numbered timelines and content requirements make a breach clause usable under pressure.',
      'Because transfer rules move quickly, the drafting should be built to be updated.',
    ],
    references: [
      { title: 'MeitY — Digital Personal Data Protection Act, 2023 (official)', source: 'Ministry of Electronics and Information Technology', url: 'https://www.meity.gov.in/' },
      { title: 'EU GDPR — Article 28 (official text)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
      { title: 'Information Commissioner’s Office — guidance for controllers and processors', source: 'ICO (UK)', url: 'https://ico.org.uk/for-organisations/' },
    ],
    download: null,
  },
  {
    id: 'vendor-services-agreement',
    number: '04',
    title: 'Vendor Services Agreement',
    shortTitle: 'Vendor Services Agreement',
    status: 'Educational Draft',
    documentType: 'Contract draft',
    updated: '2026-04-14',
    purpose:
      'Understand how a technology company manages third-party service providers.',
    overview: [
      'This exercise drafts a vendor services agreement between a fictional technology company, Solstice Platforms Pvt. Ltd., and a fictional development vendor, Lantern Studio LLP. Solstice is outsourcing a defined piece of design and front-end work.',
      'Vendor agreements sit between two risks: the vendor delivering poor work, and the company becoming dependent on the vendor. The drafting has to address both.',
    ],
    scenario: [
      'Solstice needs a redesigned customer dashboard delivered in phases. Lantern will work on a fixed scope with milestone payments. The work involves access to Solstice’s internal systems and some personal data of end users.',
      'Solstice wants control over quality, intellectual property, and security, while Lantern wants certainty about payment, scope, and ownership of its own reusable tools.',
    ],
    legalIssues: [
      'How is scope defined so that "done" is testable?',
      'What acceptance process prevents endless rework disputes?',
      'Who owns the deliverables, and what may the vendor reuse?',
      'How far do information-security and confidentiality duties extend?',
      'What termination rights exist for convenience and for cause?',
    ],
    draftingObjectives: [
      'Define deliverables and an acceptance procedure',
      'Link payment to milestones and acceptance',
      'Split ownership between bespoke deliverables and vendor background IP',
      'Impose proportionate security and confidentiality duties',
      'Balance termination-for-convenience with a fair wind-down',
    ],
    keyClauses: [
      { name: 'Scope of Services', purpose: 'Describe the services and any statement of work that governs specific phases.' },
      { name: 'Deliverables and Acceptance', purpose: 'Set what is delivered and how it is tested and accepted.' },
      { name: 'Payment Milestones', purpose: 'Tie payment to delivery and acceptance events.' },
      { name: 'Confidentiality', purpose: 'Protect each party’s confidential information.' },
      { name: 'Intellectual Property Ownership', purpose: 'Allocate bespoke deliverables and vendor background IP.' },
      { name: 'Information Security', purpose: 'Set security duties for system access and personal data.' },
      { name: 'Service Levels', purpose: 'Describe responsiveness and quality expectations where ongoing.' },
      { name: 'Indemnification', purpose: 'Allocate responsibility for IP infringement and negligence.' },
      { name: 'Termination Rights', purpose: 'Set termination for cause, for convenience, and wind-down.' },
    ],
    clauseExplanations: [
      {
        clause: 'Deliverables and Acceptance',
        sample:
          'Lantern will deliver the items listed in Schedule A in accordance with the acceptance criteria set out there. Solstice will review each Deliverable within ten (10) business days and either accept it or provide written notice of any failure to meet the criteria. Lantern will remedy notified failures within a further ten (10) business days.',
        explanation:
          'Acceptance clauses fail when neither side defines the standard. Tying acceptance to written criteria, with a fixed review window, stops "we’ll know it when we see it" disputes and gives the vendor a clear path to payment.',
      },
      {
        clause: 'Intellectual Property Ownership',
        sample:
          'Solstice owns all intellectual property in the bespoke Deliverables created specifically for it under this Agreement. Lantern retains ownership of its pre-existing tools, libraries, and know-how and grants Solstice a perpetual, non-exclusive licence to use them to the extent embedded in the Deliverables.',
        explanation:
          'A vendor cannot hand over tools it reuses for every client. Splitting bespoke work from background IP is standard and fair, but the embedded-licence wording matters: without it, the vendor could licence-restrict the delivered product.',
      },
      {
        clause: 'Information Security',
        sample:
          'Lantern will apply the security measures described in Schedule B, will access Solstice systems only as necessary for the Services, and will notify Solstice without undue delay of any actual or suspected security incident affecting Solstice data. Lantern will not transfer Solstice data outside approved locations.',
        explanation:
          'Vendor agreements are a common source of data incidents because third parties are given system access. Making the measures concrete, limiting access, and requiring notice turn a general duty into something auditable.',
      },
      {
        clause: 'Termination Rights',
        sample:
          'Either party may terminate for material breach not cured within thirty (30) days of written notice. Solstice may terminate for convenience on sixty (60) days’ notice, in which case it will pay for work properly performed and costs reasonably committed up to the termination date. Clauses on confidentiality, IP, and liability survive.',
        explanation:
          'Termination for convenience is valuable flexibility but is only fair with a wind-down payment. Stating what survives prevents arguments about the vendor’s continued confidentiality duties after the relationship ends.',
      },
    ],
    negotiation: [
      { point: 'Ownership of deliverables', provider: 'Vendor keeps ownership, client gets a licence', customer: 'Client owns all bespoke work', compromise: 'Client owns bespoke work; vendor keeps background IP with an embedded licence' },
      { point: 'Payment terms', provider: 'Payment on invoice, net 15', customer: 'Payment only after acceptance', compromise: 'Milestone invoices, final payment on acceptance' },
      { point: 'Termination for convenience', provider: 'None, or with full remaining fees', customer: 'Immediate, no penalty', compromise: '60 days’ notice plus committed-cost reimbursement' },
      { point: 'Warranty period', provider: 'No post-acceptance warranty', customer: '12-month warranty', compromise: '90-day defect-remedy period' },
    ],
    legalFramework: [
      { area: 'Contract law', note: 'Scope, acceptance, and payment terms are ordinary contract matters; clarity reduces disputes more than clever drafting.' },
      { area: 'Intellectual property', note: 'Ownership of commissioned work is not automatic in every system, so express assignment is important.' },
      { area: 'Data protection', note: 'A vendor handling personal data usually needs processor obligations and security commitments.' },
      { area: 'Employment and tax', note: 'Long-term, controlled vendor arrangements can raise worker-classification and tax questions in some jurisdictions.' },
    ],
    learnings: [
      'The acceptance process is the clause that most affects whether the project goes well.',
      'Fair IP splitting keeps a vendor willing to reuse tools while protecting the client’s product.',
      'Termination for convenience only works commercially when the wind-down is priced.',
    ],
    references: [
      { title: 'India Code — Indian Contract Act, 1872', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
      { title: 'WIPO — intellectual property and contracts', source: 'WIPO', url: 'https://www.wipo.int/' },
      { title: 'NIST — Cybersecurity Framework', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    ],
    download: null,
  },
  {
    id: 'website-terms-of-service',
    number: '05',
    title: 'Website Terms of Service',
    shortTitle: 'Terms of Service',
    status: 'Educational Draft',
    documentType: 'Contract draft',
    updated: '2026-05-02',
    purpose:
      'Explore the contractual terms governing a digital product or online platform.',
    overview: [
      'This exercise drafts terms of service for a fictional community content platform, Meadow, operated by a fictional company, Meadow Interactive Pvt. Ltd. The terms are written to be read by users, not just enforced against them.',
      'Platform terms are unusual because they are a contract with a large, mostly silent audience. That changes how they should be written: clarity and fairness do real legal work.',
    ],
    scenario: [
      'Meadow lets users publish short-form posts, follow each other, and pay for a premium tier. Users are a mix of consumers and small businesses. The platform hosts user-generated content, which raises moderation, copyright, and consumer-protection questions.',
      'The company wants flexibility to change the service and remove harmful content, without terms that a regulator or court would treat as unfair.',
    ],
    legalIssues: [
      'How should eligibility and account responsibilities be framed?',
      'How are acceptable-use rules written so they are enforceable and fair?',
      'What licence does the platform need over user content, and how is it limited?',
      'How much freedom should the platform have to change or suspend the service?',
      'How do consumer-protection rules constrain disclaimers and dispute clauses?',
    ],
    draftingObjectives: [
      'Write terms in plain, readable language',
      'Keep the content licence narrow and purpose-limited',
      'Balance platform flexibility against user fairness',
      'Respect mandatory consumer-protection requirements',
      'Provide a clear complaints and dispute path',
    ],
    keyClauses: [
      { name: 'User Eligibility', purpose: 'Set who may use the service and any age or capacity limits.' },
      { name: 'Account Responsibilities', purpose: 'Cover account security and accurate information.' },
      { name: 'Acceptable Use', purpose: 'Define prohibited conduct with concrete examples.' },
      { name: 'User-Generated Content', purpose: 'Describe the licence over content and moderation rights.' },
      { name: 'Intellectual Property', purpose: 'State ownership of the platform and its branding.' },
      { name: 'Service Changes', purpose: 'Describe how features may change and how users are told.' },
      { name: 'Account Suspension', purpose: 'Set grounds and process for suspension or removal.' },
      { name: 'Disclaimers and Liability', purpose: 'Limit liability within the bounds of consumer law.' },
      { name: 'Complaints and Dispute Resolution', purpose: 'Provide a route for complaints and disputes.' },
    ],
    clauseExplanations: [
      {
        clause: 'User-Generated Content',
        sample:
          'You keep ownership of the content you post. By posting, you grant Meadow a worldwide, non-exclusive, royalty-free licence to host, store, display, and distribute your content solely to operate, provide, and improve the service. This licence ends when you delete your content, except for copies retained in backups for a limited period or shared by others.',
        explanation:
          'Platforms need a licence to display what users post, but an over-broad, perpetual, sub-licensable licence is both unfair and unnecessary. Limiting the licence to operating the service, and ending it on deletion, keeps the clause tied to a real purpose.',
      },
      {
        clause: 'Acceptable Use',
        sample:
          'You may not use Meadow to post content that is unlawful, that harasses another person, that infringes someone else’s rights, or that is designed to deceive users. Examples include impersonation, spam, and content that sexualises minors. We may remove content or restrict accounts that breach these rules.',
        explanation:
          'Vague rules like "no inappropriate content" are hard to apply consistently and easy to challenge. Concrete examples make moderation defensible and help users understand what is expected.',
      },
      {
        clause: 'Service Changes',
        sample:
          'We may add, change, or remove features. If we make a material change that reduces the core functionality of a paid tier, we will give you at least thirty (30) days’ notice and, if you are a paid subscriber, a pro-rata refund or the option to cancel.',
        explanation:
          'Platforms need to evolve, but "we may change anything at any time" invites unfairness claims. Notice and an exit route for paid features keep flexibility while treating users fairly.',
      },
      {
        clause: 'Disclaimers and Liability',
        sample:
          'We provide the service "as is" to the extent permitted by law. Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence, or your statutory consumer rights.',
        explanation:
          'A blanket disclaimer is not enforceable where the law forbids it. Preserving non-excludable rights and consumer protections makes the clause more credible and avoids overreach.',
      },
    ],
    negotiation: [
      { point: 'Content licence scope', provider: 'Perpetual, worldwide, sub-licensable', customer: 'Ownership retained, minimal licence', compromise: 'Purpose-limited licence that ends on deletion' },
      { point: 'Change of terms', provider: 'Effective immediately on posting', customer: 'Advance notice and right to object', compromise: 'Notice period plus a cancellation right' },
      { point: 'Suspension', provider: 'Sole discretion, no appeal', customer: 'Warning and appeal process', compromise: 'Clear grounds with a stated appeal route' },
      { point: 'Dispute resolution', provider: 'Forced arbitration far from home', customer: 'Local courts', compromise: 'Complaint process first, then the user’s local forum for consumers' },
    ],
    legalFramework: [
      { area: 'Consumer protection', note: 'Unfair contract terms and mandatory consumer rights may override one-sided clauses, particularly with individual users.' },
      { area: 'Intermediary regulation', note: 'Hosting user content brings due-diligence and grievance-redressal duties in some jurisdictions.' },
      { area: 'Copyright', note: 'Content platforms typically operate notice-and-takedown processes and must respect the rights of content owners.' },
      { area: 'Data protection', note: 'A privacy notice and lawful-basis analysis sit alongside, not inside, the terms of service.' },
    ],
    learnings: [
      'Readable terms are not just user-friendly; clarity supports enforceability.',
      'The content licence is where platform needs most often outrun legitimate scope.',
      'Consumer law quietly sets the ceiling on how one-sided the terms can be.',
    ],
    references: [
      { title: 'India Code — Consumer Protection Act, 2019', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/15257' },
      { title: 'MeitY — Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules', source: 'Ministry of Electronics and Information Technology', url: 'https://www.meity.gov.in/' },
      { title: 'WIPO — copyright basics', source: 'WIPO', url: 'https://www.wipo.int/copyright/en/' },
    ],
    download: null,
  },
]

export function getContract(id) {
  return contracts.find((c) => c.id === id)
}
