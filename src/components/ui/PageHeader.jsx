/**
 * The standard header block for interior pages: an eyebrow, a serif title,
 * an optional intro paragraph, and an optional slot for badges or actions.
 */
export default function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="container-content py-12 sm:py-16">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl leading-tight sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  )
}
