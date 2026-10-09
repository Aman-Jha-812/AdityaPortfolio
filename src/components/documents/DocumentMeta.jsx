/**
 * A compact metadata block used on document and detail pages.
 * Accepts an array of { label, value } rows and skips empty values.
 */
export default function DocumentMeta({ rows = [], className = '' }) {
  const visible = rows.filter((row) => row.value)
  if (!visible.length) return null

  return (
    <dl className={`grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 ${className}`}>
      {visible.map((row) => (
        <div key={row.label} className="border-b border-line pb-2">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">{row.label}</dt>
          <dd className="mt-0.5 text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
