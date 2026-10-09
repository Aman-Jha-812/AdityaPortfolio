/**
 * Clause Analysis & Negotiation Playbook.
 * ---------------------------------------------------------------------------
 * Each entry explains why a common contract clause is drafted a particular
 * way and how the commercial trade-off shifts between the two sides. None of
 * these positions is "correct" in the abstract — they depend on the deal.
 */

export const clauses = [
  {
    id: 'limitation-of-liability',
    name: 'Limitation of Liability',
    shortName: 'Liability Cap',
    tagline: 'How much money is at stake, and for what?',
    businessProblem:
      'A customer worries that a service failure could cause losses far larger than the fees it paid. A provider worries that one incident could expose it to open-ended damages. Both need a way to price risk.',
    sampleClause:
      'Each party’s total aggregate liability arising out of or in connection with this Agreement is limited to the fees paid or payable by the Customer in the twelve (12) months preceding the event giving rise to the claim. Neither party is liable for indirect, special, or consequential loss, or for loss of profit, revenue, or data. These limits do not apply to breach of confidentiality, indemnity obligations, or wilful misconduct.',
    plainEnglish:
      'The clause sets a ceiling on how much either side can be made to pay, lists the kinds of "far-away" losses that are excluded, and carves out a few serious risks that stay uncapped.',
    legalPurpose:
      'Courts generally respect agreed liability limits between commercial parties, because parties are free to allocate risk. Clear drafting reduces the chance a cap is struck down for being too vague or unreadable.',
    riskAddressed:
      'It prevents a small contract from turning into a business-ending claim, and forces both sides to think about insurance for the risks they keep.',
    providerFavourable:
      'A low cap (for example, fees paid in the last six months), wide exclusions, and few carve-outs keep exposure predictable and small.',
    customerFavourable:
      'A higher cap (for example, the greater of fees paid or a fixed sum), narrow exclusions, and broad carve-outs for data, security, and IP breaches protect against real losses.',
    compromise:
      'Tie the cap to twelve months of fees, keep consequential-loss exclusions but narrow them, and pair the cap with carve-outs for confidentiality, indemnities, and wilful misconduct. Consider a higher super-cap for data incidents.',
    questions: [
      'What is the realistic worst-case loss for each side?',
      'Which risks can be insured, and who is insuring them?',
      'Should security or privacy breaches sit inside or outside the cap?',
      'Does the cap multiply in the case of wilful misconduct?',
    ],
    references: [
      { title: 'India Code — Indian Contract Act, 1872 (s. 73–74 on damages)', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
      { title: 'Overview of exclusion and limitation clauses in commercial contracts', source: 'Academic reading', url: null },
    ],
  },
  {
    id: 'confidentiality',
    name: 'Confidentiality',
    shortName: 'Confidentiality',
    tagline: 'What information is protected, and for how long?',
    businessProblem:
      'To work together, two companies must share plans, prices, and technical details. If talks fail, that information must not end up in a competitor’s hands.',
    sampleClause:
      'Each party will keep the other’s Confidential Information secret, use it only for the Purpose, and disclose it only to those employees and professional advisers who need it and are bound by equivalent duties. These obligations continue for three (3) years after the Purpose ends, and continue indefinitely for information that constitutes a trade secret.',
    plainEnglish:
      'The clause says what must be kept secret, who may see it, what it may be used for, and how long the duty lasts.',
    legalPurpose:
      'It creates a contractual duty of confidence, backed by equitable principles that protect information even without a contract.',
    riskAddressed:
      'It reduces the risk that shared know-how or commercial terms are misused or leaked.',
    providerFavourable:
      'A broad definition of confidential information, long duration, strict return obligations, and a residuals clause that preserves general know-how.',
    customerFavourable:
      'A narrow definition requiring written marking, a short fixed term, and clear exclusions for independently developed information.',
    compromise:
      'Define confidential information broadly but require oral disclosures to be confirmed in writing, use a fixed term with an indefinite trade-secret carve-out, and keep exclusions workable.',
    questions: [
      'Who will actually hold the information day to day?',
      'Does either side build similar products independently?',
      'Is there a legitimate need for a residuals clause?',
      'How will the receiving party prove an exclusion applies?',
    ],
    references: [
      { title: 'WIPO — Trade secrets', source: 'WIPO', url: 'https://www.wipo.int/trade-secrets/en/' },
    ],
  },
  {
    id: 'intellectual-property-ownership',
    name: 'Intellectual Property Ownership',
    shortName: 'IP Ownership',
    tagline: 'Who owns what is created, and what can be reused?',
    businessProblem:
      'A customer pays for work and assumes it will own the result. A provider reuses the same underlying tools for many clients and cannot give exclusive rights to all of them.',
    sampleClause:
      'The Customer owns all intellectual property rights in the Deliverables created specifically for it and paid for under this Agreement. The Supplier retains ownership of its pre-existing and independently developed tools, and grants the Customer a perpetual, worldwide, non-exclusive licence to use them to the extent embedded in the Deliverables.',
    plainEnglish:
      'Bespoke work belongs to the customer. The vendor keeps the generic tools it built earlier and simply licenses them so the delivered product works.',
    legalPurpose:
      'Express assignment avoids reliance on default ownership rules, which differ between works and between employees and contractors.',
    riskAddressed:
      'It prevents a customer from being locked out of its own product and prevents a vendor from being forced to give away its reusable assets.',
    providerFavourable:
      'The vendor keeps ownership of everything and gives the customer only a licence, even over bespoke work.',
    customerFavourable:
      'The customer owns all deliverables and all embedded components, with a full assignment.',
    compromise:
      'Split bespoke deliverables (customer) from background IP (vendor), and make sure the embedded licence is broad enough that the vendor cannot later restrict the product.',
    questions: [
      'Which components are bespoke and which are reused?',
      'What happens if the embedded licence ends?',
      'Are there third-party or open-source components with their own terms?',
      'Has ownership been assigned rather than merely promised?',
    ],
    references: [
      { title: 'WIPO — intellectual property and contracts', source: 'WIPO', url: 'https://www.wipo.int/' },
    ],
  },
  {
    id: 'indemnification',
    name: 'Indemnification',
    shortName: 'Indemnity',
    tagline: 'Who pays if a third party sues?',
    businessProblem:
      'If a customer is sued because the vendor’s software infringes a patent, or because the customer’s data was mishandled, the customer does not want to bear that cost alone.',
    sampleClause:
      'The Supplier will defend the Customer against any third-party claim that the Services infringe a patent or copyright, and will pay damages finally awarded or agreed in settlement, provided the Customer promptly notifies the Supplier and allows it to control the defence. This indemnity does not apply to claims arising from the Customer’s modifications or combination with other products.',
    plainEnglish:
      'The vendor promises to handle lawsuits that say its product infringes someone else’s rights, with sensible conditions and exceptions.',
    legalPurpose:
      'It allocates a specific, defined category of risk to the party best placed to manage it.',
    riskAddressed:
      'It protects the customer from third-party claims outside its own control.',
    providerFavourable:
      'Narrow indemnity, limited to final judgments, with procedural conditions, and made subject to the overall liability cap.',
    customerFavourable:
      'Broad indemnity covering all third-party claims, including data breaches, with no cap and including defence costs.',
    compromise:
      'Offer a strong IP indemnity with standard conditions, keep data-breach indemnities limited to serious breaches, and decide deliberately whether the indemnity sits inside or outside the liability cap.',
    questions: [
      'Which specific risks should be indemnified?',
      'Who controls the defence and settlement?',
      'Are defence costs covered as they arise?',
      'Does the indemnity sit inside or outside the liability cap?',
    ],
    references: [
      { title: 'India Code — Indian Contract Act, 1872 (contracts of indemnity)', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
    ],
  },
  {
    id: 'termination-for-convenience',
    name: 'Termination for Convenience',
    shortName: 'Termination at Will',
    tagline: 'Can a party walk away without cause?',
    businessProblem:
      'A customer wants an escape route if priorities change. A provider has already hired staff and committed costs and cannot absorb an abrupt exit.',
    sampleClause:
      'Either party may terminate this Agreement for convenience on sixty (60) days’ written notice. On termination for convenience, the Customer will pay for Services performed and for non-cancellable commitments reasonably incurred up to the termination date. Clauses on confidentiality, intellectual property, and liability survive termination.',
    plainEnglish:
      'Either side can end the deal with two months’ warning, but the customer must pay for work already done and costs the vendor cannot cancel.',
    legalPurpose:
      'It contrasts a no-fault exit with termination for breach, giving the parties a commercially clean way to end the relationship.',
    riskAddressed:
      'It prevents an unwanted relationship from being locked in while protecting the provider from a sudden, uncompensated exit.',
    providerFavourable:
      'Long notice, no termination for convenience at all, or an exit fee equal to remaining fees.',
    customerFavourable:
      'Short notice, immediate effect, and no penalty.',
    compromise:
      'A moderate notice period plus reimbursement of committed costs, with a defined list of surviving clauses.',
    questions: [
      'What costs can the provider genuinely not cancel?',
      'Should termination for convenience be one-sided or mutual?',
      'How much notice is fair given the transition time needed?',
      'Which clauses must survive for the exit to work?',
    ],
    references: [
      { title: 'India Code — Indian Contract Act, 1872', source: 'India Code', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
    ],
  },
  {
    id: 'data-breach-notification',
    name: 'Data Breach Notification',
    shortName: 'Breach Notice',
    tagline: 'How fast must a breach be reported, and to whom?',
    businessProblem:
      'When personal data is compromised, the party responsible for the data may face a reporting deadline. It cannot meet that deadline if its processor stays silent.',
    sampleClause:
      'The Processor will notify the Controller without undue delay, and in any event within forty-eight (48) hours of becoming aware of a Personal Data Breach, providing the information reasonably required for the Controller to meet its own legal obligations. The Processor will cooperate with the Controller’s investigation and remediation.',
    plainEnglish:
      'The vendor must tell the client about a breach quickly and give enough detail for the client to report it if the law requires.',
    legalPurpose:
      'It supports the controller’s own statutory notification duties and structures cooperation after an incident.',
    riskAddressed:
      'It prevents delays that turn a manageable incident into a regulatory problem.',
    providerFavourable:
      'A longer window, notification only once an incident is confirmed, and a narrow list of required details.',
    customerFavourable:
      'A short window, notification on suspicion, and detailed content requirements plus full cooperation.',
    compromise:
      'A fixed internal window (for example, 48 hours) with an initial summary followed by fuller details, and a clear definition of when the clock starts.',
    questions: [
      'When does "becoming aware" start the clock?',
      'What information can realistically be given in the first hours?',
      'Who investigates, and how are costs shared?',
      'Does the customer have its own reporting deadline to meet?',
    ],
    references: [
      { title: 'EU GDPR — Articles 33–34 (breach notification)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
      { title: 'MeitY — Digital Personal Data Protection Act, 2023', source: 'Ministry of Electronics and Information Technology', url: 'https://www.meity.gov.in/' },
    ],
  },
  {
    id: 'audit-rights',
    name: 'Audit Rights',
    shortName: 'Audit',
    tagline: 'How can a customer check that promises are kept?',
    businessProblem:
      'A customer relies on a vendor’s claims about security and compliance but has no way to verify them. Uncontrolled audit rights, however, are costly and expose the vendor’s other clients.',
    sampleClause:
      'The Supplier will provide an annual report or certification evidencing its compliance with the security requirements. The Customer may audit the Supplier’s relevant records no more than once per year on thirty (30) days’ notice, during business hours, subject to confidentiality. Audits must not disrupt the Supplier’s operations or expose other customers’ data.',
    plainEnglish:
      'The customer gets proof of compliance each year and a limited right to check records, with guardrails to protect the vendor.',
    legalPurpose:
      'It gives the customer a verification mechanism while keeping the vendor’s confidentiality and operational stability intact.',
    riskAddressed:
      'It reduces the risk of unnoticed non-compliance in a long-term arrangement.',
    providerFavourable:
      'Questionnaires and self-certification only, no on-site access.',
    customerFavourable:
      'Broad on-site audit rights, with the vendor bearing costs and no frequency limits.',
    compromise:
      'Annual third-party reports plus an on-site audit right on reasonable cause, with notice, confidentiality, and an agreed cost-sharing model.',
    questions: [
      'What evidence is genuinely useful to the customer?',
      'How often, and at whose cost?',
      'How are other customers’ data protected during an audit?',
      'What happens if the audit finds a problem?',
    ],
    references: [
      { title: 'NIST — Cybersecurity Framework', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
      { title: 'ISO/IEC 27001 information security management', source: 'ISO', url: 'https://www.iso.org/standard/27001' },
    ],
  },
  {
    id: 'service-level-agreements',
    name: 'Service Level Agreements',
    shortName: 'SLA',
    tagline: 'What uptime is promised, and what happens if it slips?',
    businessProblem:
      'A customer’s business depends on the service being available. A provider cannot promise perfection and needs a proportionate consequence for the occasional outage.',
    sampleClause:
      'The Service will be available at least 99.5% of each calendar month, excluding Scheduled Maintenance. Availability is measured as the total minutes in the month minus unavailable minutes, divided by total minutes. If the Supplier fails to meet this level, the Customer is entitled to service credits as set out in the Service Level Schedule, which are the Customer’s sole financial remedy for availability failures.',
    plainEnglish:
      'The vendor promises a specific level of uptime, defines how it is measured, and gives a credit if it is missed.',
    legalPurpose:
      'It turns a vague expectation of reliability into a measurable commitment with a defined consequence.',
    riskAddressed:
      'It avoids disputes about whether the service was "down" and gives the customer a predictable remedy.',
    providerFavourable:
      'A lower uptime target, broad exclusions, credits as the only remedy, and a cap on total credits.',
    customerFavourable:
      'A high uptime target, narrow exclusions, and a termination right if failures persist.',
    compromise:
      'A realistic uptime target with a clear measurement method, credits that scale, and a termination right after repeated failure to meet the target.',
    questions: [
      'How is "availability" defined and measured?',
      'What maintenance is excluded, and how much notice is given?',
      'Do credits accumulate into a meaningful remedy?',
      'At what point may the customer terminate?',
    ],
    references: [
      { title: 'ITU — availability and service-quality guidance', source: 'ITU', url: 'https://www.itu.int/' },
    ],
  },
]

export function getClause(id) {
  return clauses.find((c) => c.id === id)
}
