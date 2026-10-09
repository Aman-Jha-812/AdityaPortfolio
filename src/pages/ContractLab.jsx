import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardList } from 'lucide-react'
import { contracts } from '../data/contracts'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import EntryRow from '../components/portfolio/EntryRow'

const steps = [
  'Project Overview',
  'Business Scenario',
  'Legal Issues',
  'Drafting Objectives',
  'Key Clauses',
  'Clause-by-Clause Explanation',
  'Negotiation Considerations',
  'Relevant Legal Framework',
  'What I Learned',
  'References and Further Reading',
  'Download Sample Draft',
]

export default function ContractLab() {
  useSeo({
    title: 'Contract Lab',
    description:
      'Educational contract drafting exercises for technology businesses: mutual NDA, SaaS agreement, data processing agreement, vendor services agreement, and website terms of service.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Contract Drafting Lab"
        title="Learning to draft by explaining every clause"
        intro="Five educational exercises for technology businesses. Each one works through the same eleven sections, ending with the commercial trade-offs rather than a template to copy."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="warning" className="mb-12 max-w-3xl">
          Every project below is a clearly labelled educational draft using fictional parties and
          realistic but hypothetical scenarios. None of these templates is legally approved,
          enforceable in every jurisdiction, or ready for use without professional review.
        </Notice>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <div className="border-t border-line">
              {contracts.map((c, i) => (
                <EntryRow
                  key={c.id}
                  index={i}
                  to={`/contract-lab/${c.id}`}
                  title={c.title}
                  description={c.purpose}
                  status={c.status}
                  meta={[c.documentType]}
                  date={c.updated}
                />
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border border-line bg-paper p-6">
              <div className="flex items-center gap-2 text-navy">
                <ClipboardList size={18} aria-hidden="true" />
                <p className="eyebrow !text-navy">Structure of each exercise</p>
              </div>
              <ol className="mt-4 space-y-2 text-sm text-muted">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-bronze-dark">{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-line bg-paper p-6">
              <p className="eyebrow">Also in the lab</p>
              <h3 className="mt-2 text-lg text-navy">Clause Analysis &amp; Negotiation Playbook</h3>
              <p className="mt-2 text-sm text-muted">
                Eight common clauses explained in plain language, with the trade-offs each side argues
                for and the compromises that usually settle the point.
              </p>
              <Link
                to="/contract-lab/playbook"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
              >
                Open the playbook
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
