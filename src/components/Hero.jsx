import { createElement } from 'react'
import { motion as Motion } from 'framer-motion'
import rifath from '../assets/rifath.png'

const resumeContent = encodeURIComponent(`Abu Rifath Jahan\nJournalist | Media & Communication Professional\n\nEducation\nMSS in Journalism, Media & Communication\nDaffodil International University`)

function Hero({ socialLinks }) {
  const MotionSection = Motion.section
  const MotionDiv = Motion.div
  const MotionImage = Motion.img

  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="scroll-mt-28 news-shell overflow-hidden border-b-0 px-5 pb-10 pt-6 sm:px-7 sm:pb-12"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-body text-xs uppercase tracking-[0.24em] text-newsroom-muted dark:text-zinc-400">
          Digital Press Portfolio
        </p>
        <span className="rounded-full border border-newsroom-accent/30 bg-newsroom-accent/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.16em] text-newsroom-accent dark:border-red-500/40 dark:bg-red-500/20 dark:text-red-400">
          Available For Media Roles
        </span>
      </div>

      <div className="mt-7 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10 lg:gap-14">
        <MotionDiv
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08, duration: 0.62, ease: 'easeOut' }}
          className="order-2 space-y-5 md:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-red-700 dark:border-red-500/40 dark:bg-red-500/20 dark:text-red-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400" />
            Campus, Feature, Media Reporting
          </div>

          <div className="space-y-4">
            <h1 className="font-heading text-4xl leading-tight text-newsroom-ink dark:text-zinc-100 sm:text-5xl lg:text-6xl xl:text-7xl">
              Abu Rifath Jahan
            </h1>
            <h2 className="font-body text-lg font-semibold uppercase tracking-[0.15em] text-newsroom-accent dark:text-red-400 sm:text-xl">
              Journalist | Media & Communication Professional
            </h2>
            <p className="max-w-3xl font-body text-base leading-relaxed text-newsroom-muted dark:text-zinc-300 sm:text-lg">
              MSS student in Journalism, Media & Communication at Daffodil
              International University.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Campus News', 'Feature Stories', 'Interviews', 'Media Reports'].map((beat) => (
              <span
                key={beat}
                className="rounded-full border border-newsroom-border bg-white px-3 py-1 font-body text-xs font-semibold text-newsroom-muted dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {beat}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md bg-newsroom-accent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-newsroom-accentDark dark:bg-red-500 dark:hover:bg-red-600"
            >
              View My Work
            </a>
            <a
              href={`data:text/plain;charset=utf-8,${resumeContent}`}
              download="Abu-Rifath-Jahan-Resume.txt"
              className="inline-flex items-center justify-center rounded-md border border-newsroom-ink px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-300 dark:text-zinc-100 dark:hover:border-red-400 dark:hover:text-red-400"
            >
              Download Resume
            </a>
          </div>

          <ul className="mt-2 flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map(({ label, icon, href }) => {
              const iconElement = createElement(icon, { className: 'text-base' })

              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-newsroom-border bg-white px-4 py-2 font-body text-sm font-semibold text-newsroom-ink shadow-newsroom transition hover:-translate-y-0.5 hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-none dark:hover:border-red-400 dark:hover:text-red-400"
                  >
                    {iconElement}
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 22, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.12, duration: 0.65, ease: 'easeOut' }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-b from-red-500/30 to-transparent blur-2xl" />
            <MotionImage
              src={rifath}
              alt="Abu Rifath Jahan"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative w-[220px] rounded-full border-4 border-newsroom-border object-cover shadow-lg dark:border-zinc-700 sm:w-[260px] lg:w-[300px]"
            />
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}

export default Hero
