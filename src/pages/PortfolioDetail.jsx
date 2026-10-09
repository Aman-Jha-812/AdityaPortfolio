import { useParams, Link } from 'react-router-dom'
import { portfolioItems, getPortfolioItem } from '../data/projects'
import { useSeo } from '../hooks/useSeo'
import { formatDate } from '../utils/format'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import Badge from '../components/ui/Badge'
import Notice from '../components/ui/Notice'
import ContentSection from '../components/documents/ContentSection'
import DocumentToolbar from '../components/documents/DocumentToolbar'
import NotFound from './NotFound'

export default function PortfolioDetail() {
  const { id } = useParams()
  const item = getPortfolioItem(id)

  useSeo({
    title: item ? item.title : 'Item not found',
    description: item ? item.summary : undefined,
  })

  if (!item) return <NotFound />

  const related = portfolioItems
    .filter((p) => p.id !== item.id && p.category === item.category)
    .slice(0, 3)

  return (
    <article className="container-content py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Portfolio', to: '/portfolio' },
          { label: item.title },
        ]}
      />

      <header className="mt-6 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="status">{item.status}</Badge>
          <span className="text-xs uppercase tracking-wide text-muted">{item.category}</span>
          <span className="text-xs uppercase tracking-wide text-muted">{item.documentType}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">{item.title}</h1>
        <p className="mt-4 max-w-reading text-lg text-muted">{item.summary}</p>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div>
            <dt className="inline text-muted">Created </dt>
            <dd className="inline text-ink">{formatDate(item.date)}</dd>
          </div>
          {item.updated && (
            <div>
              <dt className="inline text-muted">Last updated </dt>
              <dd className="inline text-ink">{formatDate(item.updated)}</dd>
            </div>
          )}
        </dl>

        <div className="mt-7">
          <DocumentToolbar download={item.download} />
        </div>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="print-document max-w-reading">
          <div className="prose-legal">
            {item.body.map((section, i) => (
              <ContentSection key={i} index={i} {...section} />
            ))}
          </div>

          <Notice tone="warning" title="Educational material" className="mt-12">
            This is an educational sample or research note, not legal advice, and it is not ready for
            use without review by a qualified professional.
          </Notice>
        </div>

        <aside className="no-print space-y-8">
          {item.topics?.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Legal topics</p>
              <div className="flex flex-wrap gap-2">
                {item.topics.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          )}

          {item.learningObjectives?.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Learning objectives</p>
              <ul className="space-y-2 text-sm text-muted">
                {item.learningObjectives.map((o, i) => (
                  <li key={i} className="border-b border-line pb-2">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {related.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Related in {item.category}</p>
              <ul className="space-y-3 text-sm">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link to={`/portfolio/${r.id}`} className="link-underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
