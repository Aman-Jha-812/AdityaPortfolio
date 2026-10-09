import { useEffect } from 'react'
import { site } from '../data/site'

/**
 * Sets the document title and meta description for each page.
 * Keeps SEO metadata in one place instead of scattering it across pages.
 */
export function useSeo({ title, description } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.siteTitle.split('|')[0].trim()}` : site.siteTitle
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)

      const og = document.querySelector('meta[property="og:description"]')
      if (og) og.setAttribute('content', description)
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', fullTitle)
    }
  }, [title, description])
}
