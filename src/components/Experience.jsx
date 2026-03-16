import { motion as Motion } from 'framer-motion'
import diuLogo from '../assets/diu.png'
import shomoyLogo from '../assets/shomoy.png'
import anannyaLogo from '../assets/Anannya.png'
import news71Logo from '../assets/71.png'

const workExperienceTimeline = [
  {
    role: 'Assistant Admin Officer',
    organization: 'Daffodil International University',
    period: 'Aug 2024 - Present',
    logo: diuLogo,
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
    logo: shomoyLogo,
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
    logo: diuLogo,
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
    logo: news71Logo,
    responsibilities: ['News editing', 'Reporting'],
  },
  {
    role: 'Contributor',
    organization: 'Anannya Magazine',
    period: 'June 2021 - Jan 2022',
    logo: anannyaLogo,
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
  const MotionArticle = Motion.article

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

      <div className="relative">
        <span className="absolute bottom-0 left-4 top-0 w-[2px] bg-newsroom-border dark:bg-zinc-700 md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-6 sm:space-y-7">
          {workExperienceTimeline.map((item, index) => {
            const alignRight = index % 2 === 1

            return (
              <li
                key={`${item.role}-${item.organization}`}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <span className="absolute left-4 top-5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#dc2626] bg-[#dc2626] md:left-1/2" />

                <MotionArticle
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className={`ml-10 rounded-xl border border-newsroom-border bg-newsroom-paper p-4 shadow-newsroom transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-none sm:p-5 md:ml-0 ${alignRight ? 'md:col-start-2' : 'md:col-start-1'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-newsroom-border bg-white p-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                      <img
                        src={item.logo}
                        alt={`${item.organization} logo`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted dark:text-zinc-400">
                          Role {index + 1}
                        </p>
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-newsroom-accent dark:text-red-400">
                          {item.period}
                        </p>
                      </div>

                      <h4 className="mt-1.5 font-heading text-xl leading-snug text-newsroom-ink dark:text-zinc-100 sm:text-2xl">
                        {item.role}
                      </h4>
                      <p className="mt-1 font-body text-base font-semibold text-newsroom-ink/85 dark:text-zinc-200">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.13em] text-newsroom-muted dark:text-zinc-400">
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
                </MotionArticle>
              </li>
            )
          })}
        </ol>
      </div>

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
