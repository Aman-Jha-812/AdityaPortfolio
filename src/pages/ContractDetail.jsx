import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { contracts, getContract } from '../data/contracts'
import { useSeo } from '../hooks/useSeo'
import { formatDate } from '../utils/format'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import Badge from '../components/ui/Badge'
import Notice from '../components/ui/Notice'
import DocumentToolbar from '../components/documents/DocumentToolbar'
import NotFound from './NotFound'

function Section({ number, title, children, id }) {
  return (
    <section id={id} className="mt-12 scroll-mt-24 first:mt-0">
      <div className="mb-4 flex items-baseline gap-3 border-b border-line pb-2">
        <span className="font-serif text-sm text-bronze-dark">{String(number).padStart(2, '0')}</span>
        <h2 className="text-xl text-navy sm:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

const sections = [
  { n: 1, id: 'overview', title: 'Project Overview' },
  { n: 2, id: 'scenario', title: 'Business Scenario' },
  { n: 3, id: 'issues', title: 'Legal Issues' },
  { n: 4, id: 'objectives', title: 'Drafting Objectives' },
  { n: 5, id: 'key-clauses', title: 'Key Clauses' },
  { n: 6, id: 'explanations', title: 'Clause-by-Clause Explanation' },
  { n: 7, id: 'negotiation', title: 'Negotiation Considerations' },
  { n: 8, id: 'framework', title: 'Relevant Legal Framework' },
  { n: 9, id: 'learned', title: 'What I Learned' },
  { n: 10, id: 'references', title: 'References and Further Reading' },
  { n: 11, id: 'download', title: 'Download Sample Draft' },
]

export default function ContractDetail() {
  const { id } = useParams()
  const project = getContract(id)

  useSeo({
    title: project ? project.title : 'Project not found',
    description: project ? project.purpose : undefined,
  })

  if (!project) return <NotFound />

  const index = contracts.findIndex((c) => c.id === project.id)
  const prev = contracts[index - 1]
  const next = contracts[index + 1]

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Contract Lab', to: '/contract-lab' },
          { label: project.title },
        ]}
      />

      <header className="mt-6 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="status">{project.status}</Badge>
          <span className="text-xs uppercase tracking-wide text-muted">Project {project.number}</span>
          <span className="text-xs uppercase tracking-wide text-muted">{project.documentType}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 max-w-reading text-lg text-muted">{project.purpose}</p>
        <p className="mt-4 text-sm text-muted">
          Last updated <time dateTime={project.updated}>{formatDate(project.updated)}</time>
        </p>
        <div className="mt-7">
          <DocumentToolbar download={project.download} />
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        {/* Table of contents */}
        <nav aria-label="On this page" className="no-print hidden lg:block">
          <div className="sticky top-24">
            <p className="eyebrow mb-3">On this page</p>
            <ol className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted underline decoration-transparent underline-offset-4 hover:text-navy hover:decoration-line"
                  >
                    <span className="mr-2 text-bronze-dark">{String(s.n).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="print-document max-w-reading">
          <Section number={1} id="overview" title="Project Overview">
            <div className="prose-legal">
              {project.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Section>

          <Section number={2} id="scenario" title="Business Scenario">
            <Notice tone="info" className="mb-4">
              Fictional parties and a hypothetical scenario are used for teaching purposes only.
            </Notice>
            <div className="prose-legal">
              {project.scenario.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Section>

          <Section number={3} id="issues" title="Legal Issues">
            <ul className="prose-legal space-y-2 pl-6 [list-style:disc]">
              {project.legalIssues.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </Section>

          <Section number={4} id="objectives" title="Drafting Objectives">
            <ul className="prose-legal space-y-2 pl-6 [list-style:disc]">
              {project.draftingObjectives.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </Section>

          <Section number={5} id="key-clauses" title="Key Clauses">
            <dl className="divide-y divide-line border-y border-line">
              {project.keyClauses.map((k) => (
                <div key={k.name} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="font-medium text-navy">{k.name}</dt>
                  <dd className="text-sm text-muted">{k.purpose}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section number={6} id="explanations" title="Clause-by-Clause Explanation">
            <div className="space-y-8">
              {project.clauseExplanations.map((c) => (
                <div key={c.clause}>
                  <h3 className="text-lg text-navy">{c.clause}</h3>
                  <div className="mt-3 border-l-2 border-bronze bg-ivory p-4">
                    <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                      Sample clause (educational)
                    </p>
                    <p className="font-serif text-[0.95rem] italic leading-relaxed text-ink/90">
                      {c.sample}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.explanation}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section number={7} id="negotiation" title="Negotiation Considerations">
            <div className="space-y-6">
              {project.negotiation.map((n) => (
                <div key={n.point} className="border border-line bg-paper p-5">
                  <h3 className="text-base text-navy">{n.point}</h3>
                  <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                        Provider position
                      </dt>
                      <dd className="mt-0.5">{n.provider}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                        Customer position
                      </dt>
                      <dd className="mt-0.5">{n.customer}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-bronze-dark">
                        Likely compromise
                      </dt>
                      <dd className="mt-0.5">{n.compromise}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </Section>

          <Section number={8} id="framework" title="Relevant Legal Framework">
            <dl className="divide-y divide-line border-y border-line">
              {project.legalFramework.map((f) => (
                <div key={f.area} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="font-medium text-navy">{f.area}</dt>
                  <dd className="text-sm text-muted">{f.note}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section number={9} id="learned" title="What I Learned">
            <ul className="prose-legal space-y-2 pl-6 [list-style:disc]">
              {project.learnings.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </Section>

          <Section number={10} id="references" title="References and Further Reading">
            <ul className="space-y-3 text-sm">
              {project.references.map((r) => (
                <li key={r.title} className="border-b border-line pb-3">
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
          </Section>

          <Section number={11} id="download" title="Download Sample Draft">
            <p className="mb-4 text-sm text-muted">
              A downloadable PDF has not been created for this exercise yet. Use “Print / save as PDF”
              above to export the page, or check back later.
            </p>
            <DocumentToolbar download={project.download} />
          </Section>

          <Notice tone="warning" title="Not legal advice" className="mt-12">
            This exercise is educational. It uses fictional parties, is not legally reviewed, and is
            not ready for use without professional assessment of the applicable law.
          </Notice>
        </div>
      </div>

      {/* Prev / next */}
      <nav aria-label="Other projects" className="no-print mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to={`/contract-lab/${prev.id}`} className="group flex items-start gap-3">
            <ArrowLeft size={18} className="mt-0.5 text-muted group-hover:text-navy" aria-hidden="true" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Previous</span>
              <span className="text-sm font-medium text-navy">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/contract-lab/${next.id}`} className="group flex items-start justify-end gap-3 text-right sm:text-right">
            <span>
              <span className="block text-xs uppercase tracking-wide text-muted">Next</span>
              <span className="text-sm font-medium text-navy">{next.title}</span>
            </span>
            <ArrowRight size={18} className="mt-0.5 text-muted group-hover:text-navy" aria-hidden="true" />
          </Link>
        )}
      </nav>
    </article>
  )
}
