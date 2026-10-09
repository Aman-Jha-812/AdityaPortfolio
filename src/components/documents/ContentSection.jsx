/**
 * Renders a titled content section from a { heading, paragraphs, list } shape.
 * Used by portfolio detail pages and anywhere a simple structured document
 * needs to be displayed consistently.
 */
export default function ContentSection({ heading, paragraphs = [], list = [], index }) {
  return (
    <section className="mt-10 first:mt-0">
      {heading && (
        <h2 className="mb-3 flex items-baseline gap-3 text-xl text-navy sm:text-2xl">
          {typeof index === 'number' && (
            <span className="text-sm font-normal text-bronze-dark">{String(index + 1).padStart(2, '0')}</span>
          )}
          {heading}
        </h2>
      )}
      <div className="prose-legal max-w-reading">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {list.length > 0 && (
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
