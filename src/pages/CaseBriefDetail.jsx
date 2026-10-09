import { useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { getCaseBrief } from '../data/caseStudies'
import { useSeo } from '../hooks/useSeo'
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

export default function CaseBriefDetail() {
  const { id } = useParams()
  const brief = getCaseBrief(id)

  useSeo({
    title: brief ? brief.caseName : 'Brief not found',
    description: brief ? brief.principle : undefined,
  })

  if (!brief) return <NotFound />

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Research', to: '/research' },
          { label: 'Case Briefs', to: '/research/case-briefs' },
          { label: brief.caseName },
        ]}
      />

      <header className="mt-6 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="status">{brief.status}</Badge>
          <span className="text-xs uppercase tracking-wide text-muted">{brief.court}</span>
          {brief.year !== '—' && (
            <span className="text-xs uppercase tracking-wide text-muted">{brief.year}</span>
          )}
        </div>
        <h1 className="mt-4 max-w-3xl text-2xl leading-tight sm:text-3xl">{brief.caseName}</h1>
        {brief.citation && (
          <p className="mt-3 font-serif text-lg text-navy">
            Citation: {brief.citation}
            <span className="ml-2 text-xs font-sans uppercase tracking-wide text-muted">— verify against official report</span>
          </p>
        )}
      </header>

      <div className="print-document mt-10 max-w-reading">
        <Section label="Facts">{brief.facts}</Section>

        <Section label="Legal issues">
          <ul className="space-y-2 pl-6 [list-style:disc]">
            {brief.issues.map((issue, i) => (
              <li key={i}>{issue}</li>
            ))}
          </ul>
        </Section>

        <Section label="Arguments">{brief.arguments}</Section>
        <Section label="Court’s decision">{brief.decision}</Section>
        <Section label="Reasoning">{brief.reasoning}</Section>
        <Section label="Legal principle">{brief.principle}</Section>
        <Section label="Relevance to technology businesses">{brief.relevance}</Section>
        <Section label="My analysis">{brief.analysis}</Section>

        <Section label="Official judgment or reliable source">
          {brief.source ? (
            <a
              href={brief.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1.5 text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
            >
              {brief.source.label}
              <ExternalLink size={13} className="mt-1 shrink-0" aria-hidden="true" />
            </a>
          ) : (
            <p className="text-muted">Not applicable — this is a method exercise, not a brief of a real judgment.</p>
          )}
        </Section>

        <Notice tone="warning" title="Verify before relying" className="mt-12">
          {brief.isRealJudgment
            ? 'This brief summarises a real judgment at a high level and is a study aid, not a substitute for reading the official judgment. Confirm the citation and holding against the official report.'
            : 'This is a method exercise. No real court, citation, or holding is involved, and none should be inferred.'}
        </Notice>
      </div>
    </article>
  )
}
