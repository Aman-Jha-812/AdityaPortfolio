import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Accessible breadcrumb trail for detail pages.
 * Items are { label, to }; the final item is rendered as the current page.
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="text-muted underline decoration-transparent underline-offset-4 hover:text-navy hover:decoration-line"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-ink' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={14} className="text-line" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
