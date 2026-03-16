import { motion as Motion } from 'framer-motion'

const trainingWorkshops = [
  {
    title: 'News Presentation Course',
    provider: 'Somoyer School',
  },
  {
    title: 'TV & Radio News Presentation Workshop',
    provider: 'Daffodil International University',
  },
  {
    title: 'Mobile First Journalism',
    provider: 'CJEN Bangladesh Networking Conference',
  },
  {
    title: 'Social Media Management Course',
    provider: 'ITS Global Engagement Indonesia',
  },
  {
    title: 'Monetizing Content on Social Media',
    provider: 'Daffodil International University',
  },
]

function Training() {
  const MotionSection = Motion.section

  return (
    <MotionSection
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="news-shell mb-8 p-6 sm:mb-10 lg:p-8"
    >
      <div className="news-divider mb-6 flex items-end justify-between gap-4 pb-4">
        <div>
          <p className="news-kicker">
            Training & Workshops
          </p>
          <h3 className="news-title">
            Professional Development
          </h3>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted dark:text-zinc-400 sm:text-sm">
          Courses, Workshops & Conference Learning
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainingWorkshops.map((item) => (
          <article
            key={item.title}
            className="news-card"
          >
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-newsroom-accent dark:text-red-400">
              Completed Training
            </p>
            <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink dark:text-zinc-100">
              {item.title}
            </h4>
            <p className="mt-3 font-body text-sm font-semibold text-newsroom-muted dark:text-zinc-300">
              {item.provider}
            </p>
          </article>
        ))}
      </div>
    </MotionSection>
  )
}

export default Training
