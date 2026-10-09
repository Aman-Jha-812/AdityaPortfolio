import { Link } from 'react-router-dom'
import { ArrowRight, Gavel } from 'lucide-react'
import { articles } from '../data/research'
import { caseBriefs } from '../data/caseStudies'
import { useSeo } from '../hooks/useSeo'
import { formatDate } from '../utils/format'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import Badge from '../components/ui/Badge'

export default function Research() {
  useSeo({
    title: 'Research & Writing',
    description:
      'Legal explainers, policy briefs, case comments, and contract drafting reflections on technology law, data privacy, and commercial contracts.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Research & Writing"
        title="Notes, explainers, and reflections"
        intro="Short legal explainers, policy briefs, case comments, and drafting reflections. Writing is how I test whether I have actually understood something."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="info" className="mb-12 max-w-3xl">
          The articles below are illustrative sample content written to demonstrate the reading layout
          and topics covered. They will be replaced with the student’s own published writing as it is
          produced.
        </Notice>

        {/* Case briefs callout */}
        <Link
          to="/research/case-briefs"
          className="group mb-14 flex flex-col gap-4 border border-line bg-paper p-6 transition-colors hover:bg-ivory sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <Gavel className="mt-0.5 shrink-0 text-navy" size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">Legal research &amp; case briefs</p>
              <h2 className="mt-1 text-xl text-navy">{caseBriefs.length} case briefs and method exercises</h2>
              <p className="mt-1 max-w-reading text-sm text-muted">
                Briefs of genuinely verifiable judgments, each with sources, alongside clearly labelled
                method exercises that assert no holding.
              </p>
            </div>
          </div>
          <ArrowRight size={20} className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-navy" aria-hidden="true" />
        </Link>

        {/* Articles */}
        <div className="border-t border-line">
          {articles.map((article, i) => (
            <article key={article.id} className="border-b border-line">
              <Link to={`/research/${article.id}`} className="group grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="navy">{article.kind}</Badge>
                    <span className="text-xs uppercase tracking-wide text-muted">{article.readingTime} min read</span>
                  </div>
                  <h3 className="mt-2 text-lg text-navy group-hover:text-navy-light sm:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-2 max-w-reading text-sm text-muted">{article.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {article.tags.map((t) => (
                      <span key={t} className="text-xs text-muted">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <time className="text-xs text-muted sm:pt-1" dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
