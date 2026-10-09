import { Download, Mail } from 'lucide-react'
import { resume, resumePdf } from '../data/resume'
import { site } from '../data/site'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import { gmailComposeUrl } from '../utils/links'

function ResumeSection({ title, children }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="border-b border-line pb-2 text-lg uppercase tracking-wide text-navy">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function TimelineItem({ title, org, when, note }) {
  return (
    <div className="grid gap-1 border-b border-line py-4 last:border-0 sm:grid-cols-[1fr_auto] sm:gap-6">
      <div>
        <h3 className="text-base text-ink">{title}</h3>
        {org && <p className="mt-0.5 text-sm text-muted">{org}</p>}
        {note && <p className="mt-1 text-sm text-muted">{note}</p>}
      </div>
      {when && <p className="text-sm text-muted sm:text-right">{when}</p>}
    </div>
  )
}

function Placeholder({ note }) {
  return (
    <p className="border border-dashed border-line bg-paper px-4 py-3 text-sm text-muted">
      <span className="mr-2 text-[0.7rem] font-semibold uppercase tracking-wide text-bronze-dark">
        Placeholder
      </span>
      {note}
    </p>
  )
}

export default function Resume() {
  useSeo({
    title: 'Resume',
    description: `Resume of ${site.studentName} — education, legal interests, research and writing, and contract drafting projects.`,
  })

  const pdfHref = resumePdf || site.resumePdf

  return (
    <>
      <PageHeader eyebrow="Resume" title="A working resume, kept honest" >
        <div className="mt-2 flex flex-wrap items-center gap-4">
          {pdfHref ? (
            <a href={pdfHref} download className="btn-primary">
              <Download size={16} aria-hidden="true" />
              Download resume (PDF)
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-sm border border-line bg-white px-4 py-2 text-sm text-muted">
              PDF resume coming soon
            </span>
          )}
          {site.contact.email && (
            <a
              href={gmailComposeUrl(site.contact.email, { subject: 'Hello Aditya — from your portfolio' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-navy underline decoration-line underline-offset-4 hover:decoration-bronze"
            >
              <Mail size={15} aria-hidden="true" />
              {site.contact.email}
            </a>
          )}
        </div>
      </PageHeader>

      <div className="container-content py-12 sm:py-14">
        <Notice tone="warning" className="mb-10 max-w-3xl">
          This resume lists only what has actually been done. Sections without content are marked as
          placeholders and should be filled in only with genuine information. No internships,
          publications, qualifications, or experience have been invented.
        </Notice>

        <div className="max-w-reading">
          <ResumeSection title="Education">
            {resume.education.map((e) => (
              <TimelineItem key={e.title} {...e} />
            ))}
          </ResumeSection>

          <ResumeSection title="Legal interests">
            <ul className="space-y-2 text-sm text-ink/90">
              {resume.interests.map((i) => (
                <li key={i} className="border-b border-line pb-2 last:border-0 last:pb-0">
                  {i}
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Research and writing">
            {resume.researchWriting.map((r) => (
              <TimelineItem key={r.title} {...r} />
            ))}
          </ResumeSection>

          <ResumeSection title="Contract drafting projects">
            {resume.draftingProjects.map((p) => (
              <TimelineItem key={p.title} title={p.title} org={p.org} when={p.when} />
            ))}
          </ResumeSection>

          <ResumeSection title="Internships">
            {resume.internships.map((item, i) =>
              item.placeholder ? <Placeholder key={i} note={item.note} /> : <TimelineItem key={i} {...item} />,
            )}
          </ResumeSection>

          <ResumeSection title="Positions of responsibility">
            {resume.responsibilities.map((item, i) =>
              item.placeholder ? <Placeholder key={i} note={item.note} /> : <TimelineItem key={i} {...item} />,
            )}
          </ResumeSection>

          <ResumeSection title="Publications">
            {resume.publications.map((item, i) =>
              item.placeholder ? <Placeholder key={i} note={item.note} /> : <TimelineItem key={i} {...item} />,
            )}
          </ResumeSection>

          <ResumeSection title="Relevant skills">
            <ul className="flex flex-wrap gap-2">
              {resume.skills.map((s) => (
                <li key={s} className="border border-line bg-paper px-3 py-1.5 text-sm text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Certifications">
            {resume.certifications.map((item, i) =>
              item.placeholder ? <Placeholder key={i} note={item.note} /> : <TimelineItem key={i} {...item} />,
            )}
          </ResumeSection>

          <ResumeSection title="Contact details">
            <dl className="space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-muted">Email</dt>
                <dd>{site.contact.email || 'Placeholder'}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-muted">LinkedIn</dt>
                <dd>{site.contact.linkedin ? site.contact.linkedin : 'Not provided yet'}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-muted">Location</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </ResumeSection>
        </div>
      </div>
    </>
  )
}
