import { useParams, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { clauses, getClause } from '../data/clauses'
import { useSeo } from '../hooks/useSeo'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import Notice from '../components/ui/Notice'
import NotFound from './NotFound'

function Row({ label, children, tone }) {
  return (
    <div className="mt-8 first:mt-0">
      <h2 className="border-b border-line pb-2 text-lg text-navy">{label}</h2>
      <div className={`mt-3 text-sm leading-relaxed ${tone === 'muted' ? 'text-muted' : 'text-ink/90'}`}>
        {children}
      </div>
    </div>
  )
}

export default function ClauseDetail() {
  const { id } = useParams()
  const clause = getClause(id)

  useSeo({
    title: clause ? `${clause.name} — Clause Analysis` : 'Clause not found',
    description: clause ? clause.tagline : undefined,
  })

  if (!clause) return <NotFound />

  const index = clauses.findIndex((c) => c.id === clause.id)
  const next = clauses[(index + 1) % clauses.length]

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Contract Lab', to: '/contract-lab' },
          { label: 'Playbook', to: '/contract-lab/playbook' },
          { label: clause.name },
        ]}
      />

      <header className="mt-6 border-b border-line pb-8">
        <p className="eyebrow">Clause analysis</p>
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{clause.name}</h1>
        <p className="mt-3 max-w-reading text-lg italic text-muted">{clause.tagline}</p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav aria-label="Clauses in the playbook" className="no-print hidden lg:block">
          <div className="sticky top-24">
            <p className="eyebrow mb-3">All clauses</p>
            <ol className="space-y-2 text-sm">
              {clauses.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/contract-lab/playbook/${c.id}`}
                    className={
                      c.id === clause.id
                        ? 'font-medium text-navy'
                        : 'text-muted hover:text-navy'
                    }
                    aria-current={c.id === clause.id ? 'page' : undefined}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="print-document max-w-reading">
          <Row label="Business problem" tone="muted">
            {clause.businessProblem}
          </Row>

          <Row label="Sample clause">
            <div className="border-l-2 border-bronze bg-ivory p-4">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                Educational sample
              </p>
              <p className="font-serif text-[0.95rem] italic leading-relaxed">{clause.sampleClause}</p>
            </div>
          </Row>

          <Row label="Plain-English explanation" tone="muted">
            {clause.plainEnglish}
          </Row>

          <Row label="Legal purpose" tone="muted">
            {clause.legalPurpose}
          </Row>

          <Row label="Risk addressed" tone="muted">
            {clause.riskAddressed}
          </Row>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border border-line bg-paper p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
                Position favourable to the provider
              </h3>
              <p className="mt-2 text-sm text-muted">{clause.providerFavourable}</p>
            </div>
            <div className="border border-line bg-paper p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
                Position favourable to the customer
              </h3>
              <p className="mt-2 text-sm text-muted">{clause.customerFavourable}</p>
            </div>
          </div>

          <Row label="Possible compromise">
            <div className="border-l-2 border-navy bg-navy/[0.03] p-4">{clause.compromise}</div>
          </Row>

          <Row label="Questions to consider during negotiation">
            <ul className="space-y-2 pl-6 [list-style:disc]">
              {clause.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </Row>

          <Row label="Applicable law or reference material">
            <ul className="space-y-3">
              {clause.references.map((r) => (
                <li key={r.title}>
                  {r.url ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
                    >
                      {r.title}
                      <ExternalLink size={13} className="mt-1 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-ink">{r.title}</span>
                  )}
                  <span className="mt-0.5 block text-muted">{r.source}</span>
                </li>
              ))}
            </ul>
          </Row>

          <Notice tone="warning" title="A starting point, not a rule" className="mt-12">
            Each of these clauses should be adapted to the transaction. There is no single clause that
            is appropriate for every deal.
          </Notice>

          <div className="no-print mt-10">
            <Link
              to={`/contract-lab/playbook/${next.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
            >
              Next: {next.name}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
