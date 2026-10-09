/**
 * Global site configuration and editable personal details.
 * ---------------------------------------------------------------------------
 * Everything a student needs to personalise lives here. Replace the
 * bracketed placeholders with real information before publishing. Never add
 * internships, awards, grades, or achievements that have not actually been
 * earned.
 */

export const site = {
  studentName: 'Aditya Kumar',
  shortName: 'Aditya',
  tagline: 'Law, Technology & Public Policy',
  roleLine: 'Law Student · NLU Meghalaya',
  university: 'National Law University Meghalaya',
  universityShort: 'NLU Meghalaya',
  yearOfStudy: 'First-year law student',
  programme: 'B.A. LL.B. (Hons.)',
  location: 'Meghalaya, India',
  siteTitle: 'Aditya Kumar | Law, Technology & Public Policy',
  metaDescription:
    'Portfolio of a first-year law student at National Law University Meghalaya, exploring commercial contracts, technology law, data privacy, and public policy through research, writing, and educational drafting exercises.',
  interestLine:
    'Technology Law · Commercial Contracts · Data Privacy · Public Policy',
  interests: [
    'Technology Law',
    'Commercial Contracts',
    'Data Privacy',
    'Public Policy',
  ],
  contact: {
    // Leave a value as null to hide the row and its link on the site.
    email: 'aditya.k.vats.jha@gmail.com',
    emailIsPlaceholder: false,
    linkedin: null,
    github: null,
    writingPortfolio: null,
    note:
      'Open to academic collaboration, feedback on my research, and conversations about internship and mentorship opportunities in technology law and policy.',
  },
  // Path to a real PDF inside the public/ folder. Set to null until it exists.
  resumePdf: null,
}

export const siteDisclaimer =
  'All portfolio materials on this site are educational. Sample contracts are ' +
  'hypothetical drafting exercises, not legal advice, and are not ready for use ' +
  'without review by a qualified professional. Nothing here creates a lawyer–client ' +
  'relationship. Legislative summaries may not reflect the latest amendments or ' +
  'subordinate rules — always verify against primary sources.'
