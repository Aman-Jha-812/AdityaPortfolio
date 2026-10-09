/**
 * Legal Research & Case Briefs.
 * ---------------------------------------------------------------------------
 * IMPORTANT: Only genuinely verifiable judgments appear below, and each is
 * described at a high level. Citations are given as commonly reported and must
 * be checked against the official judgment before being relied upon. Any
 * exercise that is not a brief of a real judgment is clearly labelled
 * 'Method Exercise' and contains no invented citation.
 */

export const caseBriefs = [
  {
    id: 'puttaswamy-privacy',
    isRealJudgment: true,
    status: 'Case Brief',
    caseName: 'Justice K.S. Puttaswamy (Retd.) v. Union of India',
    court: 'Supreme Court of India',
    year: '2017',
    citation: '(2017) 10 SCC 1',
    topics: ['Privacy', 'Fundamental rights', 'Constitutional law'],
    source: { label: 'Supreme Court of India — official judgments portal', url: 'https://main.sci.gov.in/' },
    facts:
      'A batch of petitions challenged the constitutional validity of the Aadhaar scheme, a national identity programme that collected and stored biometric and demographic data. The matter was referred to a larger bench, which first considered whether a right to privacy existed under the Constitution at all.',
    issues: [
      'Does the Constitution of India guarantee a fundamental right to privacy?',
      'If so, under which provision is it located, and how does it interact with other fundamental rights?',
      'What standard should the State meet to justify an intrusion on privacy?',
    ],
    arguments:
      'The petitioners argued that privacy is an intrinsic part of the rights to life and personal liberty and to freedom of expression, and that it must be protected against State intrusion. The respondents argued, relying on earlier decisions, that privacy was not a separately enforceable fundamental right.',
    decision:
      'A nine-judge bench unanimously held that the right to privacy is a fundamental right, located primarily in Article 21 (life and personal liberty) and also connected to other fundamental rights. The earlier line of cases to the contrary was expressly overruled.',
    reasoning:
      'The Court reasoned that dignity and autonomy lie at the core of the rights to life and liberty, and that privacy is essential to both. It held that intrusions on privacy must satisfy a requirement of legality, a legitimate State aim, and proportionality. The Court also observed that privacy is not absolute and must be balanced against competing public interests.',
    principle:
      'Privacy is a fundamental right protected under the Constitution, and any State intrusion must be authorised by law, pursue a legitimate aim, and be proportionate.',
    relevance:
      'This decision underpins modern data-protection debate in India. It is the constitutional foundation on which statutes like the Digital Personal Data Protection Act, 2023, and arguments about State and corporate handling of personal data, are built.',
    analysis:
      'The enduring value of the decision is its framework rather than a single rule. By tying privacy to dignity and by adopting proportionality, the Court created a test that later statutes and cases can be measured against. For students of technology law, it is the starting point for understanding why data-protection regulation exists at all.',
  },
  {
    id: 'shreya-singhal-speech',
    isRealJudgment: true,
    status: 'Case Brief',
    caseName: 'Shreya Singhal v. Union of India',
    court: 'Supreme Court of India',
    year: '2015',
    citation: '(2015) 5 SCC 1',
    topics: ['Free speech', 'Internet regulation', 'Intermediary liability'],
    source: { label: 'Supreme Court of India — official judgments portal', url: 'https://main.sci.gov.in/' },
    facts:
      'Petitions were filed after arrests connected to posts made on social media. The petitioners challenged the constitutional validity of Section 66A of the Information Technology Act, 2000, which penalised sending "grossly offensive" or "menacing" messages, and also challenged related intermediary and blocking provisions.',
    issues: [
      'Is Section 66A of the Information Technology Act, 2000 constitutionally valid?',
      'Is Section 69A (blocking of content) constitutionally valid?',
      'How should the intermediary safe harbour in Section 79 be understood, particularly the phrase "actual knowledge"?',
    ],
    arguments:
      'The petitioners argued that Section 66A was vague and overbroad and chilled lawful speech. The respondents argued that the provision was a necessary tool against harmful online conduct. Intermediaries argued that ambiguous takedown duties would force private censorship.',
    decision:
      'The Court struck down Section 66A in its entirety as unconstitutional for vagueness and overbreadth. It upheld Section 69A and the associated procedural safeguards, and read down Section 79 so that "actual knowledge" means knowledge from a court order or a government notification, not mere allegation.',
    reasoning:
      'The Court distinguished discussion, advocacy, and incitement, holding that only speech that reaches incitement can be restricted. Because Section 66A left the line between lawful and unlawful expression to subjective judgment, it failed the test of a reasonable restriction.',
    principle:
      'Restrictions on online speech must be precise and must target incitement rather than offensive expression; intermediary duties must be clear enough to avoid arbitrary takedowns.',
    relevance:
      'The case shapes how India regulates online content and how platforms design takedown processes. It is essential background for intermediary due-diligence rules and for any technology business hosting user content.',
    analysis:
      'The decision shows how constitutional standards directly affect product design. Reading it alongside the intermediary rules makes clear that compliance is not only about checking boxes; vague duties create real incentives to over-remove content, and the Court was alert to that risk.',
  },
  {
    id: 'method-exercise-privacy-claim',
    isRealJudgment: false,
    status: 'Method Exercise',
    caseName: 'Hypothetical Dispute — "Delay in Notifying a Data Incident"',
    court: 'Method exercise (no real court involved)',
    year: '—',
    citation: null,
    topics: ['Case method', 'Data breaches', 'Legal reasoning'],
    source: null,
    facts:
      'This is a fictional scenario used purely to practise the case-brief structure. A fictional app operator learns of unauthorised access to user records and notifies affected users six weeks later. A fictional regulator contends the delay breached a notification duty.',
    issues: [
      'When does a notification duty attach?',
      'What does "without undue delay" require in practice?',
      'How would a decision-maker weigh the operator’s investigation period against the users’ interest in prompt warning?',
    ],
    arguments:
      'The operator argues that notification followed a complete investigation, and that premature warning would have caused confusion. The regulator argues that the duty is triggered by awareness of an incident, not by completion of a forensic review.',
    decision:
      'No decision is given. This exercise deliberately stops before a holding, because inventing one would misrepresent a real court’s approach.',
    reasoning:
      'The purpose of the exercise is to practise tracing how a tribunal might reason from statutory language to a conclusion, and to notice where the outcome depends on facts that would need evidence.',
    principle:
      'Method exercise only — no legal principle is asserted, because no real judgment is summarised.',
    relevance:
      'Breach-notification timelines are a recurring issue in vendor contracts and data-processing agreements, making them a useful scenario for practising issue-spotting.',
    analysis:
      'The value of this exercise is the discipline of stopping at the question rather than manufacturing an answer. A brief that invents a holding teaches the wrong habit; a brief that identifies the open questions teaches the right one.',
  },
]

export function getCaseBrief(id) {
  return caseBriefs.find((c) => c.id === id)
}
