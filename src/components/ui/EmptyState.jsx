import { FileX2 } from 'lucide-react'

/**
 * Shown whenever a list or search returns nothing, or a page has no content
 * yet. Always gives the user a clear next step instead of a blank screen.
 */
export default function EmptyState({
  title = 'Nothing here yet',
  message = 'Content will appear here once it is added.',
  action,
}) {
  return (
    <div className="flex flex-col items-center border border-dashed border-line bg-paper px-6 py-16 text-center">
      <FileX2 className="text-muted" size={28} aria-hidden="true" />
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 max-w-reading text-sm text-muted">{message}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
