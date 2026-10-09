import { clauses } from '../data/clauses'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import EntryRow from '../components/portfolio/EntryRow'

export default function ClausePlaybook() {
  useSeo({
    title: 'Clause Playbook',
    description:
      'A negotiation playbook explaining common contract clauses in plain language, with the positions each side argues and the compromises that usually settle the point.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Contract Lab · Playbook"
        title="Clause Analysis & Negotiation Playbook"
        intro="Eight clauses explained in plain language, with the business problem each one solves and the trade-offs each side brings to the table."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="info" className="mb-12 max-w-3xl">
          None of these positions is automatically right. Whether a clause is appropriate depends on
          the specific transaction, the relative bargaining power, and the law that applies.
        </Notice>

        <div className="border-t border-line">
          {clauses.map((clause, i) => (
            <EntryRow
              key={clause.id}
              index={i}
              to={`/contract-lab/playbook/${clause.id}`}
              title={clause.name}
              description={clause.tagline}
              meta={['Clause analysis']}
            />
          ))}
        </div>
      </div>
    </>
  )
}
