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
      className="mb-8 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none sm:mb-10 lg:p-8"
    >
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-newsroom-border pb-4 dark:border-zinc-800">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent dark:text-red-400">
            Training & Workshops
          </p>
          <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink dark:text-zinc-100 sm:text-4xl">
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
            className="rounded-lg border border-newsroom-border bg-newsroom-paper p-5 dark:border-zinc-700 dark:bg-zinc-950"
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
