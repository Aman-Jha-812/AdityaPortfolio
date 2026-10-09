/**
 * Resume content — fully editable.
 * ---------------------------------------------------------------------------
 * Sections with no real information yet contain a single `placeholder: true`
 * item, which the Resume page renders as a clearly marked "to be added" line.
 * Never replace a placeholder with invented experience, awards, or grades.
 */

export const resume = {
  education: [
    {
      title: 'B.A. LL.B. (Hons.) — First year',
      org: 'National Law University Meghalaya',
      when: '2025 — present',
      note: 'Coursework in the standard first-year curriculum. [Add relevant electives or moot work when available.]',
    },
  ],
  interests: [
    'Technology law and digital regulation',
    'Commercial contracts and negotiation',
    'Data privacy and protection',
    'Public policy and platform regulation',
  ],
  researchWriting: [
    {
      title: 'Portfolio of research notes and explainers',
      org: 'This site',
      when: 'Ongoing',
      note: 'Short explainers, policy reading notes, and case briefs. See the Research and Portfolio sections.',
    },
  ],
  draftingProjects: [
    { title: 'Mutual Non-Disclosure Agreement', org: 'Educational draft', when: '2026' },
    { title: 'SaaS Services Agreement', org: 'Educational draft', when: '2026' },
    { title: 'Data Processing Agreement', org: 'Educational draft', when: '2026' },
    { title: 'Vendor Services Agreement', org: 'Educational draft', when: '2026' },
    { title: 'Website Terms of Service', org: 'Educational draft', when: '2026' },
  ],
  internships: [{ placeholder: true, note: 'No internships yet — add them here once completed.' }],
  responsibilities: [{ placeholder: true, note: 'No positions of responsibility listed yet.' }],
  publications: [{ placeholder: true, note: 'No publications yet — add them here when published.' }],
  skills: [
    'Legal research and source verification',
    'Contract drafting and clause analysis',
    'Plain-language legal writing',
    'Issue spotting and case analysis',
    'Structured note-taking and referencing',
  ],
  certifications: [{ placeholder: true, note: 'No certifications listed yet.' }],
}

export const resumePdf = null
