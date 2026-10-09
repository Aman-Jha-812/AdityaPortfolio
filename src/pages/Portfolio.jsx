import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { portfolioItems, portfolioCategories } from '../data/projects'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import EntryRow from '../components/portfolio/EntryRow'
import EmptyState from '../components/ui/EmptyState'

export default function Portfolio() {
  useSeo({
    title: 'Portfolio',
    description:
      'A filterable portfolio of legal research, educational contract drafting, and case analysis work covering commercial contracts, technology law, data privacy, and public policy.',
  })

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return portfolioItems.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const haystack = [item.title, item.summary, item.category, ...(item.topics || [])]
        .join(' ')
        .toLowerCase()
      const matchesQuery = !q || haystack.includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const categories = ['All', ...portfolioCategories]

  return (
    <>
      <PageHeader
        eyebrow="Legal Portfolio"
        title="Research, drafting, and analysis"
        intro="Educational drafts and research notes across commercial contracts, technology law, data privacy, and public policy. Every item states its status honestly."
      />

      <div className="container-content py-12 sm:py-14">
        <Notice tone="warning" className="mb-10 max-w-3xl">
          All items are sample projects and educational drafts unless stated otherwise. Hypothetical
          business scenarios are used so that no real client or confidential matter is involved, and
          nothing here is legal advice.
        </Notice>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-5">
          <label className="relative block max-w-md">
            <span className="sr-only">Search portfolio</span>
            <Search
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, topic, or category…"
              className="w-full border border-line bg-paper py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:border-navy focus:outline-none"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = category === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? 'border-navy bg-navy text-white'
                      : 'border-line bg-paper text-muted hover:border-navy/40 hover:text-navy'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <p className="mb-4 text-sm text-muted" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
          {category !== 'All' && ` in ${category}`}
        </p>

        {filtered.length > 0 ? (
          <div className="border-t border-line">
            {filtered.map((item, i) => (
              <EntryRow
                key={item.id}
                index={i}
                to={`/portfolio/${item.id}`}
                title={item.title}
                description={item.summary}
                status={item.status}
                meta={[item.category, item.documentType]}
                date={item.date}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No matching items"
            message="Try a different search term or clear the category filter to see the full portfolio."
            action={
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setQuery('')
                  setCategory('All')
                }}
              >
                Clear filters
              </button>
            }
          />
        )}
      </div>
    </>
  )
}
