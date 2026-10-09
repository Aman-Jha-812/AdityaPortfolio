/**
 * Renders a list of content blocks for articles and research notes.
 * Block shapes:
 *   { type: 'p', text }
 *   { type: 'h2', text } / { type: 'h3', text }
 *   { type: 'ul', items: [] } / { type: 'ol', items: [] }
 *   { type: 'quote', text }
 * Keeping content as data means new articles need no layout changes.
 */
export default function Prose({ blocks = [], className = '' }) {
  return (
    <div className={`prose-legal ${className}`}>
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  )
}

function renderBlock(block, key) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={key} className="mt-10 border-b border-line pb-2 text-xl text-navy sm:text-2xl">
          {block.text}
        </h2>
      )
    case 'h3':
      return <h3 key={key}>{block.text}</h3>
    case 'ul':
      return (
        <ul key={key}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={key}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      )
    case 'quote':
      return <blockquote key={key}>{block.text}</blockquote>
    case 'p':
    default:
      return <p key={key}>{block.text}</p>
  }
}
