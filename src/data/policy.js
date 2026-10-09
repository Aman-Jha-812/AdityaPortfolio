/**
 * Technology Law & Public Policy research notes.
 * ---------------------------------------------------------------------------
 * Each note separates enacted law, draft/proposed instruments, regulatory
 * guidance, and personal analysis. Statutory descriptions are deliberately
 * general, and readers are directed to primary sources. The `status` field
 * records how settled a topic is at the time of writing.
 */

export const policyNotes = [
  {
    id: 'india-dpdp-2023',
    title: 'India’s Digital Personal Data Protection Act, 2023: What It Changes',
    topic: 'Data Protection',
    status: 'Enacted law · rules pending',
    lastReviewed: '2026-05-06',
    readingTime: 7,
    researchQuestion:
      'How does the Digital Personal Data Protection Act, 2023 restructure the obligations of organisations that handle personal data in India, and what remains to be defined by subordinate rules?',
    background:
      'India’s data-protection landscape was for years shaped by a combination of the Information Technology Act, 2000, the SPDI Rules, and constitutional privacy jurisprudence. The Digital Personal Data Protection Act, 2023 (DPDP Act) creates a single, purpose-built statute and introduces its own vocabulary and regulator.',
    framework: [
      'Digital Personal Data Protection Act, 2023 (principal statute)',
      'Rules to be notified by the Central Government (subordinate legislation)',
      'Information Technology Act, 2000 and SPDI Rules, 2011 (predecessor framework, to the extent still applicable)',
      'Constitutional right to privacy, recognised in K.S. Puttaswamy v. Union of India (2017)',
    ],
    keyProvisions:
      'The Act introduces the concepts of a "data principal" (the individual) and a "data fiduciary" (the entity deciding how personal data is processed). It builds processing around consent and "legitimate uses", sets out duties of fiduciaries, creates a Data Protection Board, and establishes a framework for notifying personal data breaches. Several operational details — including notice content, consent-manager mechanics, and breach-reporting form — depend on rules and guidance yet to be finalised.',
    impact:
      'For technology businesses, the practical shift is towards purpose limitation and demonstrable consent. Product teams will need to record why data is collected, how long it is kept, and how a user’s request to access or erase data is honoured. Consent flows baked into onboarding will need to be revisited as rules clarify.',
    contractual:
      'Contracts with vendors and data processors will likely need to reflect new roles and duties. Organisations should be able to show that processors act only on instruction, and that breach-notification timelines in vendor contracts allow the organisation to meet its own reporting obligations.',
    analysis:
      'The Act is broader and simpler in structure than the GDPR but leaves substantial detail to rules. That design gives the government flexibility, but it also means businesses cannot yet design compliance with certainty. The honest position is that the framework is enacted but not fully operational, and any compliance plan should be revisitable as rules are notified.',
    openQuestions: [
      'How will the consent-manager framework work in practice?',
      'What will the breach-notification rules require in terms of timing and content?',
      'How will the interaction with sectoral regulators be managed?',
      'What will "verifiable parental consent" require for services used by children?',
    ],
    sources: [
      { title: 'Digital Personal Data Protection Act, 2023 — official text', source: 'MeitY / India Code', url: 'https://www.meity.gov.in/' },
      { title: 'K.S. Puttaswamy v. Union of India (2017) — Supreme Court of India', source: 'Supreme Court of India', url: 'https://main.sci.gov.in/' },
    ],
  },
  {
    id: 'eu-gdpr-for-indian-teams',
    title: 'The EU GDPR for Teams Outside the EU: A Practical Reading',
    topic: 'Data Protection',
    status: 'Enacted law · guidance evolving',
    lastReviewed: '2026-04-28',
    readingTime: 8,
    researchQuestion:
      'When does the EU General Data Protection Regulation apply to a company based outside the EU, and what does that mean for its contracts and product design?',
    background:
      'The GDPR has wide territorial reach. A company with no EU establishment can still be caught where it offers goods or services to people in the EU or monitors their behaviour. For a technology business serving global users, this is often a matter of technical reach rather than physical location.',
    framework: [
      'Regulation (EU) 2016/679 (GDPR)',
      'European Data Protection Board (EDPB) guidelines and recommendations',
      'National supervisory authority guidance in EU member states',
    ],
    keyProvisions:
      'The GDPR sets principles for lawful processing, creates data-subject rights, imposes duties on controllers and processors, and governs transfers of personal data outside the EU. Article 28 sets out the mandatory content of processor contracts. Articles 44 onwards govern international transfers and the safeguards that must accompany them.',
    impact:
      'A non-EU business that falls within scope effectively has to adopt GDPR-grade practices: a lawful basis for processing, transparent notices, processes to honour data-subject rights, and a lawful transfer mechanism for any data leaving the EU. Engineering choices — where data is stored, which vendors are used — become compliance decisions.',
    contractual:
      'Standard contractual clauses are a common tool for transfers, but they must be assessed case by case. Vendor DPAs need to reflect Article 28 requirements. Transfer-impact assessments may be needed where data goes to jurisdictions with different surveillance laws.',
    analysis:
      'The GDPR rewards organisations that can demonstrate compliance, not merely assert it. For a student, the most useful lesson is that the regulation is structured around accountability: records, assessments, and documented decisions. That documentation habit is transferable to the Indian framework as its rules are notified.',
    openQuestions: [
      'How will transfer mechanisms evolve after recent adequacy and court developments?',
      'What level of due diligence is proportionate for smaller organisations?',
      'How do AI-specific rules interact with the GDPR’s existing framework?',
    ],
    sources: [
      { title: 'Regulation (EU) 2016/679 (GDPR) — official consolidated text', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
      { title: 'European Data Protection Board — guidelines', source: 'EDPB', url: 'https://www.edpb.europa.eu/' },
    ],
  },
  {
    id: 'intermediary-regulation-india',
    title: 'Intermediary Regulation in India: Safe Harbour and Due Diligence',
    topic: 'Platform Regulation',
    status: 'Enacted law · rules subject to amendment',
    lastReviewed: '2026-03-30',
    readingTime: 6,
    researchQuestion:
      'What conditions must an online platform satisfy to benefit from protection from liability for third-party content in India, and how do those conditions shape platform operations?',
    background:
      'Platforms that host user content can face liability for what users post. Indian law balances this by granting conditional protection — often called "safe harbour" — to intermediaries that meet stated due-diligence conditions. The balance between hosting and monitoring is a recurring policy question.',
    framework: [
      'Information Technology Act, 2000 (Section 79 and related provisions)',
      'Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended',
      'MeitY advisories and notifications',
    ],
    keyProvisions:
      'The framework generally conditions protection on publishing terms of use, acting on actual knowledge of unlawful content, appointing grievance and compliance officers, and following specified response timelines. Categories of intermediaries and their added duties differ — a social-media intermediary faces more than a pure conduit.',
    impact:
      'Compliance becomes a product and operations design problem: content-reporting flows, grievance redressal, and record-keeping are not just legal features but user-facing ones. A small platform must decide how much proactive monitoring it will do, knowing that monitoring itself carries cost and privacy implications.',
    contractual:
      'Terms of service should reflect the platform’s moderation rights and its process for acting on complaints. Vendor and user agreements may need clauses on cooperation with lawful requests and content takedown.',
    analysis:
      'Safe harbour is often described as a shield, but it is conditional and its conditions run through the whole product. For a first-year student, the useful habit is to read each condition as a design requirement rather than a legal footnote. The rules are enacted but have been amended and are frequently the subject of litigation and regulatory change, so their current form should always be checked against the latest official text.',
    openQuestions: [
      'How much proactive filtering is reasonable without over-blocking lawful speech?',
      'How will grievance-redressal duties scale for smaller platforms?',
      'How do these rules interact with encryption and privacy obligations?',
    ],
    sources: [
      { title: 'Information Technology Act, 2000 — official text', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/13116' },
      { title: 'Intermediary Guidelines and Digital Media Ethics Code Rules — MeitY', source: 'Ministry of Electronics and Information Technology', url: 'https://www.meity.gov.in/' },
    ],
  },
  {
    id: 'ai-governance-emerging',
    title: 'AI Governance: Regulating Technology While the Rules Are Still Forming',
    topic: 'AI Governance',
    status: 'Mixed: enacted, draft, and guidance',
    lastReviewed: '2026-05-19',
    readingTime: 8,
    researchQuestion:
      'How are governments approaching the regulation of artificial intelligence, and what should a technology business watch as the frameworks develop?',
    background:
      'AI regulation is developing in layers: general data-protection law that already applies, sector-specific rules, and dedicated AI instruments at different stages of adoption. The label "AI regulation" can therefore describe something very different depending on the jurisdiction and the stage of the instrument.',
    framework: [
      'Existing data-protection and consumer law that applies to automated decisions',
      'The EU Artificial Intelligence Act (risk-based, phased application)',
      'Draft or proposed national AI policies and guidance in various jurisdictions',
      'International standards and principles (non-binding)',
    ],
    keyProvisions:
      'Regulatory approaches commonly ask who bears responsibility for an AI system’s outputs, what transparency users are owed, and how risk is classified. Risk-based models impose heavier duties on higher-risk uses. These are described here in general terms only; the precise scope and status of each instrument must be checked against its official text and current date of application.',
    impact:
      'Businesses need to know which of their systems fall into higher-risk categories, what documentation they must keep, and how users must be informed. Transparency and human-oversight duties can change product design, not just documentation.',
    contractual:
      'AI contracts often allocate responsibility for model outputs, training data, and compliance with emerging rules. Vendors may need to promise how their models are built, while customers may need warranties about their own use. Because the rules are moving, clauses should be built to be updated.',
    analysis:
      'The temptation is to treat AI regulation as a single, settled body of law. It is not. Depending on the jurisdiction, it may be enacted but phasing in, proposed, or merely guidance. The most defensible approach is to map each instrument’s actual status and application date, and to design contracts with change in mind. This is a personal analysis and a learning note, not legal advice.',
    openQuestions: [
      'How will risk classification be applied to general-purpose models?',
      'How do AI rules interact with data-protection law?',
      'What documentation will smaller developers realistically be able to produce?',
      'How will international approaches converge or diverge?',
    ],
    sources: [
      { title: 'EU Artificial Intelligence Act — official text', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
      { title: 'OECD AI Policy Observatory', source: 'OECD', url: 'https://oecd.ai/' },
    ],
  },
  {
    id: 'cross-border-data-transfers',
    title: 'Cross-Border Data Transfers: A Compliance Map in Motion',
    topic: 'Data Transfers',
    status: 'Enacted law · mechanisms evolving',
    lastReviewed: '2026-04-28',
    readingTime: 7,
    researchQuestion:
      'How do different legal regimes regulate the movement of personal data across borders, and how should contracts reflect those rules?',
    background:
      'Global technology products rarely keep data in one country. Transfers are regulated because a receiving jurisdiction may offer different protections or permit different access by authorities. Regimes handle this through adequacy decisions, contractual safeguards, or localisation requirements.',
    framework: [
      'EU GDPR, Chapter V (transfers to third countries)',
      'India’s developing data-protection framework and any localisation requirements',
      'Sectoral rules in finance, health, and telecom',
      'Standard contractual clauses and adequacy mechanisms',
    ],
    keyProvisions:
      'Transfer rules typically require either that the destination is recognised as providing adequate protection, or that specific safeguards — commonly contractual clauses — accompany the data. Some regimes instead require certain data to be stored locally. These mechanisms change over time and are frequently the subject of litigation and regulatory revision.',
    impact:
      'Architecture and procurement decisions are legal decisions here. Where data centres are located, which cloud regions are used, and which sub-processors are engaged all affect transfer compliance. Migration between regions can be expensive, so transfer planning belongs early in product design.',
    contractual:
      'DPAs commonly incorporate transfer safeguards and require notice before new sub-processors or regions are added. Contracts should state which mechanism applies and be drafted so the mechanism can be updated without renegotiating the whole agreement.',
    analysis:
      'Because transfer rules move fastest of all, a static clause can become stale quickly. The durable approach is a transfer mechanism that is named, documented, and revisable. For a student, this topic is a good reminder that contract drafting sits inside a changing regulatory environment rather than above it.',
    openQuestions: [
      'How will adequacy decisions evolve?',
      'Will localisation requirements expand or narrow?',
      'How do transfer rules apply to backups and disaster-recovery copies?',
    ],
    sources: [
      { title: 'EU GDPR, Chapter V — official text', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
      { title: 'Information Commissioner’s Office — international transfers guidance', source: 'ICO (UK)', url: 'https://ico.org.uk/for-organisations/' },
    ],
  },
  {
    id: 'ecommerce-consumer-protection',
    title: 'Consumer Protection in E-Commerce: Fairness in the Fine Print',
    topic: 'Consumer Protection',
    status: 'Enacted law · rules in force',
    lastReviewed: '2026-04-14',
    readingTime: 6,
    researchQuestion:
      'How does consumer-protection law constrain the way an online business drafts its terms, and why does this matter even for business-facing platforms?',
    background:
      'Online businesses contract with a large, mostly silent audience. Consumer law exists to correct the imbalance that creates, by treating certain terms as unfair and by protecting non-excludable rights. Even platforms aimed mainly at businesses often have some consumer users.',
    framework: [
      'Consumer Protection Act, 2019 (India)',
      'E-Commerce Rules made under the Act',
      'General contract law on unfair terms',
    ],
    keyProvisions:
      'The framework addresses unfair trade practices, misleading advertising, unfair contract terms, and duties on e-commerce platforms to disclose information and provide grievance redressal. Descriptions here are general; the operative details are in the statute and rules, which should be read in their current form.',
    impact:
      'Product and content teams must ensure that marketing claims match reality, that return and refund policies are honoured, and that complaint channels actually work. Terms the business might prefer (broad disclaimers, distant dispute forums) may be unenforceable against consumers.',
    contractual:
      'Terms of service should preserve non-excludable consumer rights and provide a realistic complaints process. Platform rules for sellers should allocate responsibility for product descriptions and compliance.',
    analysis:
      'Consumer law is where one-sided drafting most often fails, not because a clause is illegal in itself but because it is unfair in context. Reading the terms from a user’s point of view is both good practice and good lawyering. This is a learning note, not advice.',
    openQuestions: [
      'How will e-commerce rules adapt to new business models?',
      'How should platforms allocate duties between themselves and sellers?',
      'What does effective grievance redressal look like at scale?',
    ],
    sources: [
      { title: 'Consumer Protection Act, 2019 — official text', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/15257' },
      { title: 'Department of Consumer Affairs — e-commerce framework', source: 'Government of India', url: 'https://consumeraffairs.nic.in/' },
    ],
  },
]

export function getPolicyNote(id) {
  return policyNotes.find((n) => n.id === id)
}
