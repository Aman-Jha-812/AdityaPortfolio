import { Mail, Linkedin, Github, PenLine } from 'lucide-react'
import { site } from '../data/site'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import { gmailComposeUrl } from '../utils/links'

export default function Contact() {
  useSeo({
    title: 'Contact',
    description: `Contact ${site.studentName} for academic collaboration, feedback on research, or internship and mentorship discussions in technology law and policy.`,
  })

  const { contact } = site

  const channels = [
    contact.email && {
      icon: Mail,
      label: 'Email (opens Gmail)',
      value: contact.email,
      href: gmailComposeUrl(contact.email, { subject: 'Hello Aditya — from your portfolio' }),
      external: true,
      placeholder: contact.emailIsPlaceholder,
    },
    contact.linkedin && {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contact.linkedin,
      href: contact.linkedin,
      external: true,
    },
    contact.github && {
      icon: Github,
      label: 'GitHub',
      value: contact.github,
      href: contact.github,
      external: true,
    },
    contact.writingPortfolio && {
      icon: PenLine,
      label: 'Writing portfolio',
      value: contact.writingPortfolio,
      href: contact.writingPortfolio,
      external: true,
    },
  ].filter(Boolean)

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s compare notes"
        intro={contact.note}
      />

      <div className="container-content py-12 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <h2 className="text-lg text-navy">Ways to reach me</h2>
            <ul className="mt-6 border-t border-line">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <li key={c.label} className="border-b border-line">
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 py-4"
                    >
                      <Icon size={18} className="shrink-0 text-navy" aria-hidden="true" />
                      <span className="flex-1">
                        <span className="block text-sm text-muted">{c.label}</span>
                        <span className="block text-ink group-hover:text-navy">{c.value}</span>
                      </span>
                      {c.placeholder && (
                        <span className="text-[0.7rem] uppercase tracking-wide text-bronze-dark">
                          Placeholder
                        </span>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            <Notice tone="info" title="A note on what to expect" className="mt-8">
              I am a first-year student, so I may not be able to answer every question — but I am glad
              to hear feedback on my research, suggestions for reading, or advice on how to prepare for
              technology-law and policy work.
            </Notice>
          </div>

          <aside>
            <div className="border border-line bg-paper p-6">
              <p className="eyebrow">Details</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Based in</dt>
                  <dd className="mt-0.5 text-ink">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-muted">Studying</dt>
                  <dd className="mt-0.5 text-ink">{site.programme}, {site.university}</dd>
                </div>
                <div>
                  <dt className="text-muted">Interests</dt>
                  <dd className="mt-0.5 text-ink">{site.interestLine}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 border border-line bg-paper p-6">
              <p className="eyebrow">Privacy</p>
              <p className="mt-2 text-sm text-muted">
                No private information is published here. Only a professional email and optional
                public profiles are listed.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
