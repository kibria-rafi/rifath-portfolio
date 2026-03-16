import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const portfolioItems = [
  {
    title: 'Campus Election Pulse: Youth Voices and Policy Priorities',
    category: 'Campus News',
    description:
      'A reported piece on student election turnout trends, campaign messaging, and policy expectations from first-time voters.',
  },
  {
    title: 'A Day With Community Volunteers on a Safer Roads Campaign',
    category: 'Feature Stories',
    description:
      'Human-centered feature story documenting local road safety activism and public awareness efforts in Dhamrai.',
  },
  {
    title: 'Inside the Student Newsroom: Interview With Emerging Anchors',
    category: 'Interviews',
    description:
      'An interview-led report exploring presentation techniques, script preparation, and editorial ethics among student journalists.',
  },
  {
    title: 'Digital Newsroom Under Pressure: Verification in Breaking Moments',
    category: 'Media Reports',
    description:
      'Media analysis report on balancing speed and fact-checking standards when stories break first on social platforms.',
  },
]

function Portfolio() {
  const MotionSection = Motion.section

  return (
    <MotionSection
      id="portfolio"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="news-shell scroll-mt-24 mb-8 p-6 sm:mb-10 lg:p-8"
    >
      <div className="news-divider mb-6 flex items-end justify-between gap-4 pb-4">
        <div>
          <p className="news-kicker">
            Portfolio
          </p>
          <h3 className="news-title">
            Journalism Work Showcase
          </h3>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted dark:text-zinc-400 sm:text-sm">
          Articles, Features & Reports
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioItems.map((item) => (
          <article
            key={item.title}
            className="news-card"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-accent dark:text-red-400">
              {item.category}
            </p>
            <h4 className="mt-2 font-heading text-2xl leading-snug text-newsroom-ink dark:text-zinc-100">
              {item.title}
            </h4>
            <p className="mt-3 font-body text-sm leading-relaxed text-newsroom-muted dark:text-zinc-300">
              {item.description}
            </p>
            <Link
              to="/work"
              className="mt-4 inline-flex rounded-md border border-newsroom-ink px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.1em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-300 dark:text-zinc-100 dark:hover:border-red-400 dark:hover:text-red-400"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </MotionSection>
  )
}

export default Portfolio
