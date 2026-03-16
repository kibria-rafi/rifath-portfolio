import { motion as Motion } from 'framer-motion'

const profileDetails = [
  ['Name', 'Abu Rifath Jahan'],
  ['Date of Birth', '16 January 1998'],
  ['Nationality', 'Bangladeshi'],
  ['Languages', 'English and Bangla'],
]

function About() {
  const MotionSection = Motion.section

  return (
    <MotionSection
      id="about"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="news-shell scroll-mt-24 mb-8 grid gap-5 p-6 sm:mb-10 lg:grid-cols-[1.6fr_1fr] lg:gap-8 lg:p-8"
    >
      <article>
        <p className="news-kicker">
          About Me
        </p>
        <h3 className="news-title">
          Reporting stories with clarity, context, and public value.
        </h3>
        <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted dark:text-zinc-300 sm:text-lg">
          I am Abu Rifath Jahan, an aspiring journalist with a strong interest
          in responsible news reporting and meaningful public communication. My
          work centers on bringing human voices into stories that matter to
          communities.
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted dark:text-zinc-300 sm:text-lg">
          My career goal is to grow as a trusted journalist who delivers
          accurate, balanced, and impact-driven reporting across digital and
          broadcast media platforms.
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted dark:text-zinc-300 sm:text-lg">
          I am passionate about media, newsroom culture, field reporting, and
          strategic communication that helps audiences understand complex issues
          in a clear and accessible way.
        </p>
      </article>

      <aside className="news-card rounded-xl border-newsroom-border/80 p-5">
        <h4 className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-newsroom-ink dark:text-zinc-100">
          Profile Snapshot
        </h4>
        <dl className="mt-4 space-y-3">
          {profileDetails.map(([label, value]) => (
            <div
              key={label}
              className="border-b border-newsroom-border pb-3 last:border-none last:pb-0 dark:border-zinc-700"
            >
              <dt className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted dark:text-zinc-400">
                {label}
              </dt>
              <dd className="mt-1 font-body text-base font-semibold text-newsroom-ink dark:text-zinc-100">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </MotionSection>
  )
}

export default About
