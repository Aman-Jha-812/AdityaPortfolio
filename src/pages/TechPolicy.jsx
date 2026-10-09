import { policyNotes } from '../data/policy'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import EntryRow from '../components/portfolio/EntryRow'

const learningTopics = [
  'India’s Digital Personal Data Protection Act, 2023 and applicable rules',
  'The EU General Data Protection Regulation (GDPR)',
  'Information technology and intermediary regulation in India',
  'Consumer protection in e-commerce',
  'AI governance and emerging regulation',
  'Cybersecurity and data-breach responsibilities',
  'Digital competition and platform regulation',
  'Cross-border data transfers',
  'Intellectual property in software and digital products',
]

export default function TechPolicy() {
  useSeo({
    title: 'Tech Policy',
    description:
      'Research notes connecting legislation, public policy, and technology business decisions, covering data protection, intermediary regulation, AI governance, and cross-border transfers.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Technology Law & Public Policy"
        title="Connecting regulation to technology decisions"
        intro="Research notes that ask how a law or policy shapes what a technology business can build, promise, and contract for."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="warning" className="mb-12 max-w-3xl">
          These notes distinguish enacted law, draft or proposed instruments, regulatory guidance, and
          personal analysis. Statutory descriptions are kept general and linked to primary sources.
          Legislative summaries can go out of date — always verify the current position before relying
          on them.
        </Notice>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="border-t border-line">
            {policyNotes.map((note, i) => (
              <EntryRow
                key={note.id}
                index={i}
                to={`/tech-policy/${note.id}`}
                title={note.title}
                description={note.researchQuestion}
                status={note.status}
                meta={[note.topic, `${note.readingTime} min read`]}
                date={note.lastReviewed}
              />
            ))}
          </div>

          <aside>
            <div className="border border-line bg-paper p-6">
              <p className="eyebrow">Potential learning topics</p>
              <p className="mt-2 text-sm text-muted">
                Notes will be added here as I read. Topics I am working through:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {learningTopics.map((t) => (
                  <li key={t} className="border-b border-line pb-2 last:border-0 last:pb-0">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
