import { motion as Motion } from 'framer-motion'

const educationTimeline = [
  {
    degree: 'Master of Social Science (MSS)',
    program: 'Journalism, Media & Communication',
    institution: 'Daffodil International University',
    meta: 'Running (2023 - Present)',
    current: true,
  },
  {
    degree: 'Bachelor of Social Science (Honours)',
    program: 'Journalism, Media & Communication',
    institution: 'Daffodil International University',
  },
  {
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'BPATC School & College',
    meta: 'Dhaka Board',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Dhamrai Hardinge Govt High School & College',
    meta: 'Result: GPA 5.00',
  },
]

function Education() {
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
              className={`absolute -left-[1.95rem] top-1.5 h-4 w-4 rounded-full border-2 sm:-left-[2.45rem] ${item.current ? 'border-newsroom-accent bg-newsroom-accent dark:border-red-400 dark:bg-red-400' : 'border-newsroom-ink bg-newsroom-paper dark:border-zinc-300 dark:bg-zinc-950'}`}
            />
            <article className="rounded-lg border border-newsroom-border bg-newsroom-paper p-4 dark:border-zinc-700 dark:bg-zinc-950 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-newsroom-muted dark:text-zinc-400">
                  Step {index + 1}
                </p>
                {item.current ? (
                  <span className="rounded-full bg-newsroom-accent/10 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-newsroom-accent dark:bg-red-500/20 dark:text-red-400">
                    Current
                  </span>
                ) : null}
              </div>
              <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink dark:text-zinc-100 sm:text-2xl">
                {item.degree}
              </h4>
              {item.program ? (
                <p className="mt-2 font-body text-base font-semibold text-newsroom-ink/90 dark:text-zinc-200">
                  {item.program}
                </p>
              ) : null}
              <p className="mt-2 font-body text-base text-newsroom-muted dark:text-zinc-300">
                {item.institution}
              </p>
              {item.meta ? (
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-[0.08em] text-newsroom-accent dark:text-red-400">
                  {item.meta}
                </p>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </MotionSection>
  )
}

export default Education
