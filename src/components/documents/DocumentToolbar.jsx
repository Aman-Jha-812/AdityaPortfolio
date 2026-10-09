import { Printer } from 'lucide-react'
import DownloadButton from '../ui/DownloadButton'

/**
 * Print + download controls for a document page.
 * Marked `no-print` so it does not appear in the printed version.
 */
export default function DocumentToolbar({ download }) {
  return (
    <div className="no-print flex flex-wrap items-center gap-3">
      <DownloadButton download={download} />
      <button type="button" onClick={() => window.print()} className="btn-quiet">
        <Printer size={16} aria-hidden="true" />
        Print / save as PDF
      </button>
    </div>
  )
}
