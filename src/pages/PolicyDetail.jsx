import { useParams, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { policyNotes, getPolicyNote } from '../data/policy'
import { useSeo } from '../hooks/useSeo'
import { formatDate } from '../utils/format'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import Badge from '../components/ui/Badge'
import Notice from '../components/ui/Notice'
import NotFound from './NotFound'

function Section({ label, children }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="border-b border-line pb-2 text-lg text-navy sm:text-xl">{label}</h2>
      <div className="mt-3 text-[0.975rem] leading-relaxed text-ink/90">{children}</div>
    </section>
  )
}

export default function PolicyDetail() {
  const { id } = useParams()
  const note = getPolicyNote(id)

  useSeo({
    title: note ? note.title : 'Note not found',
    description: note ? note.researchQuestion : undefined,
  })

  if (!note) return <NotFound />

  const next = policyNotes[(policyNotes.findIndex((n) => n.id === note.id) + 1) % policyNotes.length]

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Tech Policy', to: '/tech-policy' },
          { label: note.title },
        ]}
      />

      <header className="mt-6 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="status">{note.status}</Badge>
          <span className="text-xs uppercase tracking-wide text-muted">{note.topic}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">{note.title}</h1>
        <p className="mt-4 text-sm text-muted">
          Last reviewed <time dateTime={note.lastReviewed}>{formatDate(note.lastReviewed)}</time>
          {' · '}
          {note.readingTime} min read
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
        <div className="print-document max-w-reading">
          <Section label="Research question">
            <p className="font-serif text-lg italic text-navy">{note.researchQuestion}</p>
          </Section>

          <Section label="Background">
            <p>{note.background}</p>
          </Section>

          <Section label="Relevant legal framework">
            <ul className="space-y-2 pl-6 [list-style:disc]">
              {note.framework.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </Section>

          <Section label="Key provisions or regulatory issues">
            <p>{note.keyProvisions}</p>
          </Section>

          <Section label="Impact on technology businesses">
            <p>{note.impact}</p>
          </Section>

          <Section label="Possible contractual implications">
            <p>{note.contractual}</p>
          </Section>

          <Section label="Critical analysis">
            <p>{note.analysis}</p>
          </Section>

          <Section label="Open questions">
            <ul className="space-y-2 pl-6 [list-style:disc]">
              {note.openQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </Section>

          <Section label="Primary legal sources">
            <ul className="space-y-3">
              {note.sources.map((s) => (
                <li key={s.title} className="border-b border-line pb-3 last:border-0">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
                    >
                      {s.title}
                      <ExternalLink size={13} className="mt-1 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-ink">{s.title}</span>
                  )}
                  <span className="mt-0.5 block text-muted">{s.source}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Date last reviewed">
            <p className="text-muted">{formatDate(note.lastReviewed)}</p>
          </Section>

          <Notice tone="warning" title="Educational note" className="mt-12">
            This note records my reading and analysis. It is not legal advice, and the status of any
            law or rule described here should be independently verified against primary sources.
          </Notice>

          <div className="no-print mt-10">
            <Link
              to={`/tech-policy/${next.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
            >
              Next note: {next.title}
            </Link>
          </div>
        </div>

        <aside className="no-print">
          <div className="sticky top-24 border border-line bg-paper p-5">
            <p className="eyebrow mb-2">Status</p>
            <p className="text-sm text-muted">{note.status}</p>
            <p className="eyebrow mb-2 mt-5">Topic</p>
            <p className="text-sm text-muted">{note.topic}</p>
            <p className="eyebrow mb-2 mt-5">Reading time</p>
            <p className="text-sm text-muted">{note.readingTime} minutes</p>
          </div>
        </aside>
      </div>
    </article>
  )
}
