/**
 * Small formatting helpers used across the site.
 */

export function formatDate(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatMonthYear(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

export function readingTimeLabel(minutes) {
  if (!minutes) return null
  return `${minutes} min read`
}

export function sortByDate(items, key = 'date') {
  return [...items].sort((a, b) => new Date(b[key] || 0) - new Date(a[key] || 0))
}
