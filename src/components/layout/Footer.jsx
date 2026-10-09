import { Link } from 'react-router-dom'
import { Mail, Linkedin, Github, PenLine } from 'lucide-react'
import { site, siteDisclaimer } from '../../data/site'
import { navLinks } from '../../data/nav'
import { gmailComposeUrl } from '../../utils/links'

export default function Footer() {
  const year = new Date().getFullYear()
  const { contact } = site

  return (
    <footer className="mt-20 border-t border-line bg-paper">
      <div className="container-content py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-semibold text-navy">{site.studentName}</p>
            <p className="mt-1 text-sm text-muted">{site.roleLine}</p>
            <p className="mt-4 max-w-sm text-sm text-muted">{site.interestLine}</p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-3">Sections</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted hover:text-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {contact.email && (
                <li>
                  <a
                    href={gmailComposeUrl(contact.email, { subject: `Hello Aditya — from your portfolio` })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-navy"
                  >
                    <Mail size={15} aria-hidden="true" />
                    Email
                  </a>
                </li>
              )}
              {contact.linkedin && (
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-navy"
                  >
                    <Linkedin size={15} aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              )}
              {contact.github && (
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-navy"
                  >
                    <Github size={15} aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              )}
              {contact.writingPortfolio && (
                <li>
                  <a
                    href={contact.writingPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-navy"
                  >
                    <PenLine size={15} aria-hidden="true" />
                    Writing portfolio
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">{siteDisclaimer}</p>
          <p className="mt-4 text-xs text-muted">
            © {year} {site.studentName}. Built as a personal academic portfolio.
          </p>
        </div>
      </div>
    </footer>
  )
}
