import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { useSeo } from '../hooks/useSeo'
import PageHeader from '../components/ui/PageHeader'
import Notice from '../components/ui/Notice'
import DocumentMeta from '../components/documents/DocumentMeta'

export default function About() {
  useSeo({
    title: 'About',
    description: `About ${site.studentName}, a first-year law student at ${site.university}, interested in technology law, commercial contracts, data privacy, and public policy.`,
  })

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A first-year law student learning how law, business, and technology meet."
      >
        <DocumentMeta
          rows={[
            { label: 'Programme', value: site.programme },
            { label: 'Year of study', value: site.yearOfStudy },
            { label: 'University', value: site.university },
            { label: 'Location', value: site.location },
          ]}
        />
      </PageHeader>

      <div className="container-content grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_300px] lg:gap-16">
        <div className="prose-legal max-w-reading">
          <h2 className="mt-0 text-2xl text-navy">Academic background</h2>
          <p>
            I am in my first year of the {site.programme} programme at {site.university}. Alongside
            the standard curriculum, I am building a personal reading habit around technology law and
            commercial contracts. Most of what is on this site began as notes to myself: I read a
            statute, a policy paper, or a contract, and then tried to explain it in plain language
            until the gaps in my understanding became obvious.
          </p>

          <h2>Areas of legal interest</h2>
          <ul>
            <li>Technology law and digital regulation</li>
            <li>Commercial contracts and negotiation</li>
            <li>Data privacy and protection</li>
            <li>Public policy and platform regulation</li>
          </ul>

          <h2>Current learning goals</h2>
          <p>
            My near-term goals are modest and concrete: to read primary sources more carefully, to
            draft clauses I can explain line by line, and to write short notes that another student
            could follow. I am learning to separate what a law says from what commentators wish it
            said, and to flag where an issue is genuinely open.
          </p>

          <h2>Approach to research and writing</h2>
          <p>
            I start from the primary source, record its current status (enacted, draft, or guidance),
            and only then read commentary. I cite sources even in my own notes, and I leave questions
            open rather than guessing. Where I have drafted a contract clause or a set of platform
            terms, I treat it as an educational exercise and say so clearly.
          </p>

          <h2>Where I am heading</h2>
          <p>
            In the longer term, I am interested in the intersection of law, business, technology, and
            regulation. I would like to understand how commercial legal teams at technology companies
            think about privacy, product, and policy together. This portfolio is my attempt to start
            building that understanding early, honestly, and in public.
          </p>

          <Notice tone="note" title="Kept deliberately editable" className="mt-10">
            This page contains no grades, awards, internships, or leadership roles, because none have
            been listed yet. Replace the bracketed placeholders and add only what is genuinely true.
          </Notice>
        </div>

        <aside className="lg:pt-2">
          <div className="border border-line bg-paper p-6">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="mt-0.5 text-ink">{site.interestLine}</dd>
              </div>
              <div>
                <dt className="text-muted">University</dt>
                <dd className="mt-0.5 text-ink">{site.university}</dd>
              </div>
              <div>
                <dt className="text-muted">Year</dt>
                <dd className="mt-0.5 text-ink">{site.yearOfStudy}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/portfolio" className="btn-outline w-full">
                View portfolio
              </Link>
              <Link to="/resume" className="btn-quiet w-full">
                See resume
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
