/**
 * A small, understated label used for categories, topics, and statuses.
 * `variant="status"` uses the bronze accent for document status labels.
 */
export default function Badge({ children, variant = 'default', className = '' }) {
  const base =
    'inline-flex items-center rounded-sm border px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide'
  const styles = {
    default: 'border-line bg-white text-muted',
    status: 'border-bronze/40 bg-bronze/5 text-bronze-dark',
    navy: 'border-navy/25 bg-navy/5 text-navy',
  }
  return <span className={`${base} ${styles[variant] || styles.default} ${className}`}>{children}</span>
}
