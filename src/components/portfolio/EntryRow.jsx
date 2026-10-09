import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Badge from '../ui/Badge'
import { formatDate } from '../../utils/format'

/**
 * An editorial catalogue row used for portfolio items, contracts, policy notes
 * and other lists. Deliberately not a card: just a numbered row with a thin
 * divider, matching the document-first design direction.
 */
export default function EntryRow({ index, to, title, description, meta = [], status, date }) {
  return (
    <article className="group border-b border-line">
      <Link to={to} className="flex flex-col gap-3 py-6 sm:flex-row sm:gap-8">
        {index !== undefined && (
          <span className="w-8 shrink-0 font-serif text-sm text-bronze-dark" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {status && <Badge variant="status">{status}</Badge>}
            {meta.map((m) => (
              <span key={m} className="text-xs uppercase tracking-wide text-muted">
                {m}
              </span>
            ))}
          </div>
          <h3 className="mt-2 flex items-start gap-2 text-lg text-navy group-hover:text-navy-light sm:text-xl">
            {title}
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-line transition-colors group-hover:text-bronze"
              aria-hidden="true"
            />
          </h3>
          {description && <p className="mt-2 max-w-reading text-sm text-muted">{description}</p>}
        </div>
        {date && (
          <time className="shrink-0 text-xs text-muted sm:pt-1" dateTime={date}>
            {formatDate(date)}
          </time>
        )}
      </Link>
    </article>
  )
}
