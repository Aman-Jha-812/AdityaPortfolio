import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Printer } from 'lucide-react'
import { articles, getArticle } from '../data/research'
import { useSeo } from '../hooks/useSeo'
import { formatDate } from '../utils/format'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import Badge from '../components/ui/Badge'
import Notice from '../components/ui/Notice'
import Prose from '../components/documents/Prose'
import NotFound from './NotFound'

export default function ArticleDetail() {
  const { id } = useParams()
  const article = getArticle(id)

  useSeo({
    title: article ? article.title : 'Article not found',
    description: article ? article.summary : undefined,
  })

  if (!article) return <NotFound />

  const related = (article.related || [])
    .map((rid) => articles.find((a) => a.id === rid))
    .filter(Boolean)

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Research', to: '/research' },
          { label: article.title },
        ]}
      />

      <header className="mx-auto mt-6 max-w-reading border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="navy">{article.kind}</Badge>
          <time className="text-xs uppercase tracking-wide text-muted" dateTime={article.date}>
            {formatDate(article.date)}
          </time>
          <span className="text-xs uppercase tracking-wide text-muted">{article.readingTime} min read</span>
        </div>
        <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-muted">{article.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <button type="button" onClick={() => window.print()} className="no-print btn-quiet ml-auto">
            <Printer size={15} aria-hidden="true" />
            Print
          </button>
        </div>
      </header>

      <div className="print-document mx-auto mt-10 max-w-reading">
        <Prose blocks={article.body} />

        {article.references?.length > 0 && (
          <section className="mt-14 border-t border-line pt-8">
            <h2 className="text-lg text-navy">References</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {article.references.map((r) => (
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
                </li>
              ))}
            </ul>
          </section>
        )}

        <Notice tone="warning" title="Illustrative sample" className="mt-12">
          This article is sample content used to demonstrate the site’s reading layout. It is not legal
          advice and will be replaced with the student’s own writing.
        </Notice>

        {related.length > 0 && (
          <section className="no-print mt-12 border-t border-line pt-8">
            <h2 className="text-lg text-navy">Related articles</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.id}>
                  <Link to={`/research/${r.id}`} className="link-underline">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}
