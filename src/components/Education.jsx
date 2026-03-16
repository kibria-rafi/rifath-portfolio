import { motion as Motion } from 'framer-motion'

const educationTimeline = [
  {
    degree: 'Master of Social Science (MSS)',
    subjectLabel: 'Subject',
    subject: 'Journalism, Media & Communication',
    institution: 'Daffodil International University',
    duration: '2023 - Present',
    result: 'Running',
  },
  {
    degree: "Bachelor of Social Science (Hon's)",
    subjectLabel: 'Subject',
    subject: 'Journalism, Media & Communication',
    institution: 'Daffodil International University',
    duration: 'Completed',
    result: 'CGPA 3.55',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    subjectLabel: 'Group',
    subject: 'Science',
    institution: 'BPATC School & College',
    board: 'Dhaka Board',
    result: 'GPA 4.67',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Dhamrai Hardinge Govt High School & College',
    board: 'Dhaka Board',
    result: 'GPA 5.00',
  },
]

function Education() {
  const MotionSection = Motion.section
  const MotionArticle = Motion.article

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
            Education
          </p>
          <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink dark:text-zinc-100 sm:text-4xl">
            Academic Timeline
          </h3>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted dark:text-zinc-400 sm:text-sm">
          Journalism & Communication Path
        </p>
      </div>

      <ol className="relative ml-3 border-l-2 border-newsroom-border pl-6 dark:border-zinc-700 sm:ml-4 sm:pl-8">
        {educationTimeline.map((item, index) => (
          <li key={item.degree} className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[1.95rem] top-2 h-4 w-4 rounded-full border border-[#dc2626] bg-[#dc2626] sm:-left-[2.45rem]"
            />
            <MotionArticle
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-newsroom-border bg-newsroom-paper p-4 shadow-newsroom transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-none sm:p-5"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted dark:text-zinc-400">
                Education {index + 1}
              </p>
              <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink dark:text-zinc-100 sm:text-2xl">
                {item.degree}
              </h4>

              <dl className="mt-4 grid gap-2">
                {item.subject ? (
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                      {item.subjectLabel || 'Subject'}:
                    </dt>
                    <dd className="font-body text-sm font-semibold text-newsroom-ink/90 dark:text-zinc-200">
                      {item.subject}
                    </dd>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                    Institution:
                  </dt>
                  <dd className="font-body text-sm font-semibold text-newsroom-ink/90 dark:text-zinc-200">
                    {item.institution}
                  </dd>
                </div>

                {item.duration ? (
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                      Duration:
                    </dt>
                    <dd className="font-body text-sm font-semibold text-newsroom-ink/90 dark:text-zinc-200">
                      {item.duration}
                    </dd>
                  </div>
                ) : null}

                {item.board ? (
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                      Board:
                    </dt>
                    <dd className="font-body text-sm font-semibold text-newsroom-ink/90 dark:text-zinc-200">
                      {item.board}
                    </dd>
                  </div>
                ) : null}

                {item.result ? (
                  <div className="flex flex-wrap gap-2">
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                      Result:
                    </dt>
                    <dd className="font-body text-sm font-semibold text-newsroom-accent dark:text-red-400">
                      {item.result}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </MotionArticle>
          </li>
        ))}
      </ol>
    </MotionSection>
  )
}

export default Education
