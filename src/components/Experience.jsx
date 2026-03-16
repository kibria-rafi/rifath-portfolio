import { motion as Motion } from 'framer-motion'

const workExperienceTimeline = [
  {
    role: 'Assistant Admin Officer',
    organization: 'Daffodil International University',
    period: 'Aug 2024 - Present',
    responsibilities: [
      'Press release writing',
      'Media relations',
      'Campus TV and Campus Radio planning',
    ],
    current: true,
  },
  {
    role: 'Reporter (Trainee)',
    organization: 'Somoy Media Ltd',
    period: 'Feb 2024 - Aug 2024',
    responsibilities: [
      'Event coverage',
      'News reporting',
      'Article writing',
      'Source development',
    ],
  },
  {
    role: 'Intern Public Relations Associate',
    organization: 'Daffodil International University',
    period: 'Feb 2022 - Feb 2023',
    responsibilities: [
      'Videography',
      'Video editing',
      'Campaign management',
      'Media relations',
    ],
  },
  {
    role: 'Sub-Editor',
    organization: 'Dhaka News 71',
    period: 'July 2019 - May 2021',
    responsibilities: ['News editing', 'Reporting'],
  },
  {
    role: 'Contributor',
    organization: 'Anannya Magazine',
    period: 'June 2021 - Jan 2022',
    responsibilities: ['Feature writing', 'News hosting'],
  },
]

const leadershipRoles = [
  {
    title: 'General Secretary',
    organization: 'Kaler Kontho Shuvo Shongho',
    unit: 'Dhamrai Unit',
  },
  {
    title: 'General Secretary',
    organization: 'Nirapod Sarak Chai (NISCHA)',
    unit: 'Dhamrai Unit',
  },
]

function Experience() {
  const MotionSection = Motion.section

  return (
    <MotionSection
      id="experience"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="scroll-mt-24 mb-8 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none sm:mb-10 lg:p-8"
    >
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-newsroom-border pb-4 dark:border-zinc-800">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent dark:text-red-400">
            Work Experience
          </p>
          <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink dark:text-zinc-100 sm:text-4xl">
            Professional Timeline
          </h3>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted dark:text-zinc-400 sm:text-sm">
          Reporting, Editing & PR
        </p>
      </div>

      <ol className="relative ml-2 border-l-2 border-newsroom-border pl-5 dark:border-zinc-700 sm:ml-3 sm:pl-7">
        {workExperienceTimeline.map((item, index) => (
          <li
            key={`${item.role}-${item.organization}`}
            className="relative pb-6 last:pb-0 sm:pb-7"
          >
            <span
              className={`absolute -left-[1.65rem] top-2 h-3.5 w-3.5 rounded-full border-2 sm:-left-[2.1rem] ${item.current ? 'border-newsroom-accent bg-newsroom-accent dark:border-red-400 dark:bg-red-400' : 'border-newsroom-ink bg-white dark:border-zinc-300 dark:bg-zinc-950'}`}
            />
            <article className="rounded-lg border border-newsroom-border bg-newsroom-paper p-4 dark:border-zinc-700 dark:bg-zinc-950 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted dark:text-zinc-400">
                  Role {index + 1}
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-newsroom-accent dark:text-red-400">
                  {item.period}
                </p>
              </div>
              <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink dark:text-zinc-100 sm:text-2xl">
                {item.role}
              </h4>
              <p className="mt-1 font-body text-base font-semibold text-newsroom-ink/85 dark:text-zinc-200">
                {item.organization}
              </p>
              <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.13em] text-newsroom-muted dark:text-zinc-400">
                Responsibilities
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {item.responsibilities.map((task) => (
                  <li
                    key={task}
                    className="rounded-md border border-newsroom-border/90 bg-white px-3 py-2 font-body text-sm text-newsroom-muted dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t border-newsroom-border pt-6 dark:border-zinc-800">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent dark:text-red-400">
          Achievements & Leadership
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {leadershipRoles.map((item) => (
            <article
              key={`${item.organization}-${item.unit}`}
              className="rounded-lg border border-newsroom-border bg-newsroom-paper p-5 dark:border-zinc-700 dark:bg-zinc-950"
            >
              <h4 className="font-heading text-2xl text-newsroom-ink dark:text-zinc-100">
                {item.title}
              </h4>
              <p className="mt-2 font-body text-base font-semibold text-newsroom-muted dark:text-zinc-300">
                {item.organization}
              </p>
              <p className="mt-1 font-body text-sm uppercase tracking-[0.08em] text-newsroom-accent dark:text-red-400">
                {item.unit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Experience
