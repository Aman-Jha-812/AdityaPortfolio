import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { navLinks } from '../data/nav'
import { useScrollToTop } from '../hooks/useScrollToTop'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you were looking for could not be found.' })
  useScrollToTop()

  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Compass className="text-bronze-dark" size={30} aria-hidden="true" />
      <p className="eyebrow mt-5">Error 404</p>
      <h1 className="mt-3 text-3xl sm:text-4xl">This page could not be found</h1>
      <p className="mt-4 max-w-reading text-muted">
        The link may be broken or the page may have moved. You can return home, or jump to one of the
        main sections below.
      </p>

      <div className="mt-8">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>

      <nav aria-label="Site sections" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="link-underline text-sm">
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
