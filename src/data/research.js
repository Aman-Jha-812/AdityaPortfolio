/**
 * Research & Writing articles.
 * ---------------------------------------------------------------------------
 * Illustrative sample essays, clearly labelled as such until replaced by the
 * student's own published writing. Bodies use a simple block format that the
 * ArticleDetail page renders: { type: 'p' | 'h2' | 'ul' | 'ol' | 'quote', ... }
 */

export const articles = [
  {
    id: 'why-clauses-matter',
    title: 'Why a Single Clause Can Decide a Commercial Relationship',
    kind: 'Legal explainer',
    date: '2026-05-02',
    readingTime: 5,
    tags: ['Contract drafting', 'Negotiation', 'Commercial law'],
    summary:
      'An introduction to the idea that contracts are risk-allocation documents, told through the example of a limitation-of-liability clause.',
    references: [
      { title: 'India Code — Indian Contract Act, 1872', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
    ],
    related: ['reading-a-contract-as-risk', 'drafting-reflection-nda'],
    body: [
      { type: 'p', text: 'This is an illustrative sample essay, written to demonstrate the reading layout and topic coverage of the site. It will be replaced with genuine writing as it is produced.' },
      { type: 'p', text: 'When people first learn contracts, they often read them as lists of promises. A supplier promises to deliver; a customer promises to pay; both promise to keep secrets. That reading is not wrong, but it misses what experienced lawyers look for first: where each risk lands.' },
      { type: 'h2', text: 'A contract is an allocation of risk' },
      { type: 'p', text: 'Every commercial deal carries risks. The product might not work. The buyer might not pay. A third party might sue. A single clause can move an entire category of risk from one side to the other, and the price of the deal usually reflects where it ends up.' },
      { type: 'p', text: 'The limitation-of-liability clause is the clearest example. It does not change what either party promises to do; it changes how much they can be made to pay if something goes wrong. Read on its own, it looks technical. Read alongside the price and the indemnities, it is one of the most commercial clauses in the document.' },
      { type: 'h2', text: 'Why the wording matters' },
      { type: 'p', text: 'A cap that says "liability is limited to fees paid" is not the same as one that says "liability is limited to fees paid in the twelve months preceding the claim". The difference is not pedantry; it is money. Similarly, an exclusion of "consequential loss" means little until you ask what counts as consequential.' },
      { type: 'quote', text: 'The best drafting question is not "is this clause standard?" but "what does this clause make each side responsible for, and is that what we agreed to trade?"' },
      { type: 'h2', text: 'What I am learning from this' },
      { type: 'p', text: 'Approaching contracts as risk maps has changed how I read them. Instead of starting at the beginning and working through, I now look for liability, indemnity, termination, and data clauses first, because those are where the real trade-offs sit, then read the rest in light of them.' },
    ],
  },
  {
    id: 'reading-a-contract-as-risk',
    title: 'Reading a Contract as a Risk Map: A Method for First-Year Students',
    kind: 'Contract drafting reflection',
    date: '2026-04-25',
    readingTime: 4,
    tags: ['Contract drafting', 'Study method'],
    summary:
      'A short method note describing a repeatable way to read any commercial agreement quickly without losing the important parts.',
    references: [
      { title: 'India Code — Indian Contract Act, 1872', url: 'https://www.indiacode.nic.in/handle/123456789/2187' },
    ],
    related: ['why-clauses-matter', 'drafting-reflection-nda'],
    body: [
      { type: 'p', text: 'Illustrative sample content. This method note is a placeholder for the student’s own reflections on learning to read contracts.' },
      { type: 'p', text: 'Early in law school, long agreements are intimidating. A simple reading order helps make them manageable and keeps attention on the parts that matter.' },
      { type: 'h2', text: 'A recommended reading order' },
      { type: 'ol', items: ['Identify the parties and what each is actually providing.', 'Find the money: fees, payment, and what triggers them.', 'Find the risk clauses: liability, indemnity, warranties.', 'Find the exit: term, termination, and what survives.', 'Find the data and IP clauses, which often hide the biggest exposure.', 'Only then read the general boilerplate.'] },
      { type: 'p', text: 'This order mirrors how the deal was probably negotiated. The first clauses describe the opportunity; the later clauses describe what happens when the opportunity goes wrong.' },
    ],
  },
  {
    id: 'reflection-on-internet-reading',
    title: 'Studying Technology Law in the First Year: Notes from a Self-Directed Reading Plan',
    kind: 'Policy brief',
    date: '2026-04-08',
    readingTime: 6,
    tags: ['Technology law', 'Study method', 'Policy'],
    summary:
      'A reflection on building a personal reading plan around technology regulation while following the standard first-year curriculum.',
    references: [
      { title: 'MeitY — policy and legislation', url: 'https://www.meity.gov.in/' },
      { title: 'OECD AI Policy Observatory', url: 'https://oecd.ai/' },
    ],
    related: ['why-clauses-matter', 'reading-a-contract-as-risk'],
    body: [
      { type: 'p', text: 'Illustrative sample content, written to demonstrate the article layout.' },
      { type: 'p', text: 'Technology law is not a single subject you can finish. It is a set of questions that keep changing: how should data be protected, who is responsible for what platforms host, how should automated decisions be governed. A first-year student cannot master these, but can build good habits for following them.' },
      { type: 'h2', text: 'Three habits that helped' },
      { type: 'ul', items: ['Read the primary text first, then commentary — never the other way round.', 'Record the status of every instrument: enacted, draft, or guidance.', 'Write a short note after reading, because writing exposes what you did not understand.'] },
      { type: 'p', text: 'The third habit produced most of the notes on this site. Writing a paragraph that a careful reader could follow forces precision in a way that highlighting never does.' },
    ],
  },
  {
    id: 'drafting-reflection-nda',
    title: 'Drafting Reflection: What a Mutual NDA Taught Me About Definitions',
    kind: 'Contract drafting reflection',
    date: '2026-03-04',
    readingTime: 4,
    tags: ['Confidentiality', 'Drafting', 'NDA'],
    summary:
      'A reflection on drafting a mutual NDA and discovering that the definition clause does most of the work.',
    references: [
      { title: 'WIPO — Trade secrets', url: 'https://www.wipo.int/trade-secrets/en/' },
    ],
    related: ['why-clauses-matter', 'reading-a-contract-as-risk'],
    body: [
      { type: 'p', text: 'Illustrative sample content reflecting the Contract Lab exercise on mutual NDAs.' },
      { type: 'p', text: 'I expected the confidentiality obligations to be the hard part of an NDA. They were not. The hard part was the definition of "Confidential Information".' },
      { type: 'h2', text: 'Broad versus workable' },
      { type: 'p', text: 'A definition that captures everything is easy to write and easy to attack. A definition that is too narrow leaves genuine secrets unprotected. The compromise I settled on requires oral disclosures to be confirmed in writing within a set period, and relies on a "reasonable person" standard for the rest.' },
      { type: 'p', text: 'That single choice changed how I thought about the whole document. The exclusions, the duration, and the remedies all exist to qualify a definition. Get the definition right and the rest follows.' },
    ],
  },
  {
    id: 'case-comment-method',
    title: 'How to Write a Case Comment Without Overstating the Holding',
    kind: 'Case comment',
    date: '2026-02-18',
    readingTime: 5,
    tags: ['Legal research', 'Case method', 'Writing'],
    summary:
      'A short piece on the discipline of distinguishing what a court decided from what a commentator wishes it had decided.',
    references: [
      { title: 'Supreme Court of India — judgments', url: 'https://main.sci.gov.in/' },
    ],
    related: ['why-clauses-matter', 'reflection-on-internet-reading'],
    body: [
      { type: 'p', text: 'Illustrative sample content describing a method rather than analysing a specific judgment, so that no citation or holding is invented.' },
      { type: 'p', text: 'The most common mistake in a first case comment is to state a broad principle the court did not actually announce. A holding is limited by the facts and the questions the court was asked to decide.' },
      { type: 'h2', text: 'A discipline that helps' },
      { type: 'ol', items: ['State the facts narrowly.', 'State the issue the court actually resolved.', 'Quote or paraphrase the reasoning, not just the result.', 'Separate the ratio from any wider remarks.', 'Say what the decision does not decide.'] },
      { type: 'p', text: 'The last step is the most useful. A comment that is honest about a decision’s limits is more credible than one that inflates it into a grand principle.' },
    ],
  },
]

export function getArticle(id) {
  return articles.find((a) => a.id === id)
}
