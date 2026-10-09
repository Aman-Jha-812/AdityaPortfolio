import { caseBriefs } from '../data/caseStudies'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import EntryRow from '../components/portfolio/EntryRow'

export default function CaseBriefs() {
  useSeo({
    title: 'Case Briefs',
    description:
      'Case briefs of verifiable judgments and clearly labelled method exercises, focusing on privacy, free speech, and technology regulation.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Research · Case Briefs"
        title="Case briefs and legal analysis"
        intro="Briefs of genuinely verifiable judgments, each linked to its official source, alongside method exercises that practise the structure without inventing a holding."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="warning" className="mb-12 max-w-3xl">
          Only real, verifiable judgments are briefed here, and citations are given as commonly
          reported — always check the official judgment before relying on a citation. Exercises that
          do not summarise a real case are labelled “Method Exercise” and contain no invented
          citation.
        </Notice>

        <div className="border-t border-line">
          {caseBriefs.map((brief, i) => (
            <EntryRow
              key={brief.id}
              index={i}
              to={`/research/case-briefs/${brief.id}`}
              title={brief.caseName}
              description={brief.isRealJudgment ? brief.facts : brief.topics.join(' · ')}
              status={brief.status}
              meta={[brief.court, brief.year, brief.citation].filter(Boolean)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
