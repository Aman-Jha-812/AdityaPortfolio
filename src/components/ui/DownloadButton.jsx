import { Download, Clock } from 'lucide-react'

/**
 * Renders a real download button only when a file actually exists.
 * If there is no file yet, it shows an honest "coming soon" state rather than
 * a button that does nothing.
 *
 * @param {object|null} download  { label, href } or null
 */
export default function DownloadButton({ download, className = '' }) {
  if (download && download.href) {
    return (
      <a
        href={download.href}
        download
        className={`btn-primary ${className}`}
        aria-label={`Download ${download.label || 'document'}`}
      >
        <Download size={16} aria-hidden="true" />
        {download.label || 'Download document'}
      </a>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border border-line bg-white px-4 py-2 text-sm text-muted ${className}`}
      title="A downloadable version of this document has not been created yet."
    >
      <Clock size={15} aria-hidden="true" />
      Document coming soon
    </span>
  )
}
