import { Info, AlertTriangle, BookOpen } from 'lucide-react'

const icons = {
  info: Info,
  warning: AlertTriangle,
  note: BookOpen,
}

/**
 * A restrained callout for disclaimers and contextual notes.
 * `tone="warning"` is used for the educational / not-legal-advice disclaimer.
 */
export default function Notice({ children, tone = 'info', title, className = '' }) {
  const Icon = icons[tone] || icons.info
  const tones = {
    info: 'border-line bg-ivory',
    warning: 'border-bronze/40 bg-bronze/5',
    note: 'border-navy/20 bg-navy/[0.03]',
  }
  const iconColor = tone === 'warning' ? 'text-bronze-dark' : 'text-navy'

  return (
    <div className={`flex gap-3 border p-4 text-sm ${tones[tone] || tones.info} ${className}`}>
      <Icon className={`mt-0.5 shrink-0 ${iconColor}`} size={18} aria-hidden="true" />
      <div className="text-ink/90">
        {title && <p className="mb-1 font-semibold text-navy">{title}</p>}
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
