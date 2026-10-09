import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Consistent section header: small eyebrow, serif title, optional intro,
 * and an optional "view all" style link on the right.
 */
export default function SectionHeading({ eyebrow, title, intro, linkTo, linkLabel }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        {intro && <p className="mt-3 text-muted">{intro}</p>}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
        >
          {linkLabel}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
