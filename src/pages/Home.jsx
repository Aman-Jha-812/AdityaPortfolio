import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import { portfolioItems } from '../data/projects'
import { contracts } from '../data/contracts'
import { articles } from '../data/research'
import { policyNotes } from '../data/policy'
import { formatDate } from '../utils/format'
import { useSeo } from '../hooks/useSeo'
import SectionHeading from '../components/ui/SectionHeading'
import EntryRow from '../components/portfolio/EntryRow'

export default function Home() {
  useSeo({ description: site.metaDescription })

  const featured = portfolioItems.slice(0, 3)
  const recent = [...articles, ...policyNotes]
    .sort((a, b) => new Date(b.date || b.lastReviewed) - new Date(a.date || a.lastReviewed))
    .slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="container-content grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{site.roleLine}</p>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              Law, Technology &amp; Public Policy
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              I am {site.studentName}, a first-year law student at {site.universityShort}, exploring
              commercial contracts, technology regulation, data privacy, and digital policy through
              research, writing, and practical drafting exercises.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/portfolio" className="btn-primary">
                Explore Selected Work
              </Link>
              <Link to="/research" className="link-underline text-sm font-medium">
                Read Research Notes
              </Link>
            </div>
            <p className="mt-8 text-sm tracking-wide text-muted">{site.interestLine}</p>
          </div>

          {/* Typographic composition in place of a portrait placeholder */}
          <aside className="flex items-center" aria-hidden="true">
            <div className="w-full border border-line bg-ivory p-6">
              <p className="eyebrow">Areas of inquiry</p>
              <ul className="mt-4 space-y-3 font-serif text-lg text-navy">
                <li className="border-b border-line pb-3">Commercial contracts</li>
                <li className="border-b border-line pb-3">Technology regulation</li>
                <li className="border-b border-line pb-3">Data privacy</li>
                <li>Public policy</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Selected Work */}
      <section className="container-content py-16 sm:py-20">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured research and drafting"
          intro="A selection of educational drafts and research notes. Sample and hypothetical work is clearly labelled throughout."
          linkTo="/portfolio"
          linkLabel="View full portfolio"
        />
        <div className="border-t border-line">
          {featured.map((item, i) => (
            <EntryRow
              key={item.id}
              index={i}
              to={`/portfolio/${item.id}`}
              title={item.title}
              description={item.summary}
              status={item.status}
              meta={[item.category, item.documentType]}
              date={item.date}
            />
          ))}
        </div>
      </section>

      {/* Contract Lab preview */}
      <section className="border-y border-line bg-paper">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Contract Drafting Lab"
            title="Educational contract drafting exercises"
            intro="Five annotated exercises for technology businesses, from a mutual NDA to website terms of service. Each explains not just what the clauses say, but why they are written that way."
            linkTo="/contract-lab"
            linkLabel="Open the Contract Lab"
          />
          <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {contracts.map((c) => (
              <li key={c.id} className="bg-paper">
                <Link to={`/contract-lab/${c.id}`} className="group block h-full p-6 transition-colors hover:bg-ivory">
                  <span className="font-serif text-sm text-bronze-dark">{c.number}</span>
                  <h3 className="mt-2 text-lg text-navy group-hover:text-navy-light">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted">{c.purpose}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
                    View exercise
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Current Interests */}
      <section className="container-content py-16 sm:py-20">
        <SectionHeading
          eyebrow="Current Interests"
          title="What I am reading and learning right now"
          intro="A snapshot of the questions I am following. These are learning interests, not claims of expertise."
        />
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {[
            {
              title: 'Balancing data protection with useful products',
              body: 'How privacy duties can be built into product design instead of bolted on afterwards, and how consent must be documented.',
            },
            {
              title: 'The lifecycle of a commercial contract',
              body: 'Why negotiation, drafting, and exit planning matter as much as the signed terms, and how risk moves between the parties.',
            },
            {
              title: 'Platform responsibility for user content',
              body: 'How due-diligence duties shape moderation, grievance redressal, and the line between hosting and monitoring.',
            },
            {
              title: 'Reading regulation in three layers',
              body: 'Separating enacted law, draft rules, and non-binding guidance, so that summaries do not overstate what the law requires.',
            },
          ].map((item) => (
            <div key={item.title} className="border-b border-line pb-6">
              <h3 className="text-lg text-navy">{item.title}</h3>
              <p className="mt-2 max-w-reading text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      <section className="border-y border-line bg-paper">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Recent Research Notes"
            title="Recent writing"
            intro="Short explainers, policy reading notes, and contract drafting reflections. Sample content is labelled as illustrative until replaced with my own published writing."
            linkTo="/research"
            linkLabel="All writing"
          />
          <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {recent.map((item) => {
              const isArticle = 'kind' in item
              const to = isArticle ? `/research/${item.id}` : `/tech-policy/${item.id}`
              const date = item.date || item.lastReviewed
              return (
                <li key={item.id} className="border-b border-line pb-5">
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {isArticle ? item.kind : `Policy note · ${item.topic}`}
                    {' · '}
                    <time dateTime={date}>{formatDate(date)}</time>
                  </p>
                  <h3 className="mt-1.5 text-lg text-navy">
                    <Link to={to} className="hover:text-navy-light">
                      {item.title}
                    </Link>
                  </h3>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Approach to legal learning */}
      <section className="container-content py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">How I approach legal learning</h2>
          </div>
          <div className="prose-legal max-w-reading">
            <p>
              I try to work from primary sources first. Before reading commentary on a statute or a
              judgment, I read the provision or the judgment itself, then use secondary material to
              test whether I understood it. Where the law is still developing, I record what is
              enacted, what is only draft, and what remains guidance, so I do not confuse the three.
            </p>
            <p>
              My drafting exercises are labelled as educational on purpose. The point is to practise
              the reasoning behind a clause, not to pretend the result is a finished document. When I
              am unsure, I say so and mark the question open rather than filling the gap with
              something that sounds confident but is not sourced.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-navy text-white">
        <div className="container-content py-14 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Get in touch</p>
              <h2 className="mt-2 text-2xl text-white sm:text-3xl">Open to feedback and collaboration</h2>
              <p className="mt-3 max-w-xl text-sm text-white/75">{site.contact.note}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-sm bg-white px-5 py-2.5 text-sm font-medium text-navy hover:bg-white/90"
            >
              Contact me
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
