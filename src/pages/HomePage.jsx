import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaPenNib,
  FaMicrophoneLines,
  FaHandshake,
  FaBullhorn,
  FaKeyboard,
  FaFileVideo,
  FaImage,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from 'react-icons/fa6'
import { SiCanva, SiAudacity } from 'react-icons/si'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const socialLinks = [
  {
    label: 'Email',
    icon: FaEnvelope,
    href: 'mailto:aburifathjahan@example.com',
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'Facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/',
  },
  {
    label: 'Twitter',
    icon: FaXTwitter,
    href: 'https://twitter.com/',
  },
]

const resumeContent = encodeURIComponent(`Abu Rifath Jahan\nJournalist | Media & Communication Professional\n\nEducation\nMSS in Journalism, Media & Communication\nDaffodil International University`)

const profileDetails = [
  ['Name', 'Abu Rifath Jahan'],
  ['Date of Birth', '16 January 1998'],
  ['Nationality', 'Bangladeshi'],
  ['Languages', 'English and Bangla'],
]

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

const skillSections = [
  {
    title: 'Journalism Skills',
    items: [
      { name: 'News Writing', icon: FaPenNib },
      { name: 'Reporting', icon: FaMicrophoneLines },
      { name: 'Media Relations', icon: FaHandshake },
      { name: 'Public Relations', icon: FaBullhorn },
    ],
  },
  {
    title: 'Technical Skills',
    items: [
      { name: 'Adobe Premiere Pro', icon: FaFileVideo },
      { name: 'Adobe Photoshop', icon: FaImage },
      { name: 'Canva', icon: SiCanva },
      { name: 'Audacity', icon: SiAudacity },
      { name: 'MS Word', icon: FaFileWord },
      { name: 'MS Excel', icon: FaFileExcel },
      { name: 'PowerPoint', icon: FaFilePowerpoint },
      { name: 'Bangla Typing (Bijoy)', icon: FaKeyboard },
    ],
  },
]

const MotionHeader = Motion.header
const MotionSection = Motion.section

function HomePage() {
  return (
    <main className="relative overflow-hidden bg-newsroom-paper bg-newsroom px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <MotionHeader
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-10 flex flex-col gap-6 border-b border-newsroom-border pb-8 sm:mb-12 sm:pb-10"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-body text-xs uppercase tracking-[0.24em] text-newsroom-muted">
              Digital Press Portfolio
            </p>
            <span className="rounded-full border border-newsroom-accent/30 bg-newsroom-accent/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.16em] text-newsroom-accent">
              Available For Media Roles
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-heading text-4xl leading-tight text-newsroom-ink sm:text-5xl lg:text-7xl">
              Abu Rifath Jahan
            </h1>
            <h2 className="font-body text-lg font-semibold uppercase tracking-[0.15em] text-newsroom-accent sm:text-xl">
              Journalist | Media & Communication Professional
            </h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-newsroom-muted sm:text-lg">
              MSS student in Journalism, Media & Communication at Daffodil
              International University, focused on narrative reporting, public
              interest journalism, and digital newsroom storytelling.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-md bg-newsroom-accent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-newsroom-accentDark"
            >
              View My Work
            </Link>
            <a
              href={`data:text/plain;charset=utf-8,${resumeContent}`}
              download="Abu-Rifath-Jahan-Resume.txt"
              className="inline-flex items-center justify-center rounded-md border border-newsroom-ink px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent"
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
                    className="inline-flex items-center gap-2 rounded-full border border-newsroom-border bg-white px-4 py-2 font-body text-sm font-semibold text-newsroom-ink shadow-newsroom transition hover:-translate-y-0.5 hover:border-newsroom-accent hover:text-newsroom-accent"
                  >
                    {iconElement}
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </MotionHeader>

        <MotionSection
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.62, ease: 'easeOut' }}
          className="mb-8 grid gap-5 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom sm:mb-10 lg:grid-cols-[1.6fr_1fr] lg:gap-8 lg:p-8"
        >
          <article>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent">
              About Me
            </p>
            <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink sm:text-4xl">
              Reporting stories with clarity, context, and public value.
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted sm:text-lg">
              I am Abu Rifath Jahan, an aspiring journalist with a strong
              interest in responsible news reporting and meaningful public
              communication. My work centers on bringing human voices into
              stories that matter to communities.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted sm:text-lg">
              My career goal is to grow as a trusted journalist who delivers
              accurate, balanced, and impact-driven reporting across digital and
              broadcast media platforms.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-newsroom-muted sm:text-lg">
              I am passionate about media, newsroom culture, field reporting,
              and strategic communication that helps audiences understand complex
              issues in a clear and accessible way.
            </p>
          </article>

          <aside className="rounded-lg border border-newsroom-border/80 bg-newsroom-paper p-5">
            <h4 className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-newsroom-ink">
              Profile Snapshot
            </h4>
            <dl className="mt-4 space-y-3">
              {profileDetails.map(([label, value]) => (
                <div key={label} className="border-b border-newsroom-border pb-3 last:border-none last:pb-0">
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted">
                    {label}
                  </dt>
                  <dd className="mt-1 font-body text-base font-semibold text-newsroom-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.65, ease: 'easeOut' }}
          className="mb-8 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom sm:mb-10 lg:p-8"
        >
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-newsroom-border pb-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent">
                Education
              </p>
              <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink sm:text-4xl">
                Academic Timeline
              </h3>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted sm:text-sm">
              Journalism & Communication Path
            </p>
          </div>

          <ol className="relative ml-3 border-l-2 border-newsroom-border pl-6 sm:ml-4 sm:pl-8">
            {educationTimeline.map((item, index) => (
              <li key={item.degree} className="relative pb-8 last:pb-0">
                <span
                  className={`absolute -left-[1.95rem] top-1.5 h-4 w-4 rounded-full border-2 sm:-left-[2.45rem] ${item.current ? 'border-newsroom-accent bg-newsroom-accent' : 'border-newsroom-ink bg-newsroom-paper'}`}
                />
                <article className="rounded-lg border border-newsroom-border bg-newsroom-paper p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-newsroom-muted">
                      Step {index + 1}
                    </p>
                    {item.current ? (
                      <span className="rounded-full bg-newsroom-accent/10 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-newsroom-accent">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink sm:text-2xl">
                    {item.degree}
                  </h4>
                  {item.program ? (
                    <p className="mt-2 font-body text-base font-semibold text-newsroom-ink/90">
                      {item.program}
                    </p>
                  ) : null}
                  <p className="mt-2 font-body text-base text-newsroom-muted">
                    {item.institution}
                  </p>
                  {item.meta ? (
                    <p className="mt-2 font-body text-sm font-semibold uppercase tracking-[0.08em] text-newsroom-accent">
                      {item.meta}
                    </p>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65, ease: 'easeOut' }}
          className="mb-8 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom sm:mb-10 lg:p-8"
        >
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-newsroom-border pb-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent">
                Work Experience
              </p>
              <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink sm:text-4xl">
                Professional Timeline
              </h3>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted sm:text-sm">
              Reporting, Editing & PR
            </p>
          </div>

          <ol className="relative ml-2 border-l-2 border-newsroom-border pl-5 sm:ml-3 sm:pl-7">
            {workExperienceTimeline.map((item, index) => (
              <li key={`${item.role}-${item.organization}`} className="relative pb-6 sm:pb-7 last:pb-0">
                <span
                  className={`absolute -left-[1.65rem] top-2 h-3.5 w-3.5 rounded-full border-2 sm:-left-[2.1rem] ${item.current ? 'border-newsroom-accent bg-newsroom-accent' : 'border-newsroom-ink bg-white'}`}
                />
                <article className="rounded-lg border border-newsroom-border bg-newsroom-paper p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-newsroom-muted">
                      Role {index + 1}
                    </p>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.1em] text-newsroom-accent">
                      {item.period}
                    </p>
                  </div>
                  <h4 className="mt-2 font-heading text-xl leading-snug text-newsroom-ink sm:text-2xl">
                    {item.role}
                  </h4>
                  <p className="mt-1 font-body text-base font-semibold text-newsroom-ink/85">
                    {item.organization}
                  </p>
                  <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.13em] text-newsroom-muted">
                    Responsibilities
                  </p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((task) => (
                      <li
                        key={task}
                        className="rounded-md border border-newsroom-border/90 bg-white px-3 py-2 font-body text-sm text-newsroom-muted"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65, ease: 'easeOut' }}
          className="mb-8 rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom sm:mb-10 lg:p-8"
        >
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-newsroom-border pb-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-newsroom-accent">
                Skills
              </p>
              <h3 className="mt-2 font-heading text-3xl leading-tight text-newsroom-ink sm:text-4xl">
                Core Competencies
              </h3>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted sm:text-sm">
              Journalism & Technical Tools
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {skillSections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-newsroom-border bg-newsroom-paper p-5"
              >
                <h4 className="font-heading text-2xl text-newsroom-ink">
                  {section.title}
                </h4>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {section.items.map(({ name, icon }) => {
                    const skillIcon = createElement(icon, {
                      className: 'text-newsroom-accent text-base',
                    })

                    return (
                      <li
                        key={name}
                        className="inline-flex items-center gap-2 rounded-md border border-newsroom-border bg-white px-3 py-2 font-body text-sm font-semibold text-newsroom-ink"
                      >
                        {skillIcon}
                        <span>{name}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.65, ease: 'easeOut' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ['Campus Affairs', 'Student policy, youth culture, and civic issues.'],
            ['Media Analysis', 'Opinion pieces on ethics, framing, and influence.'],
            ['Field Reporting', 'Community-first reporting from local perspectives.'],
            ['Digital Storytelling', 'Audience-focused news writing for online readers.'],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-lg border border-newsroom-border bg-white p-5"
            >
              <h3 className="font-heading text-lg text-newsroom-ink">{title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-newsroom-muted">
                {text}
              </p>
            </article>
          ))}
        </MotionSection>
      </div>
    </main>
  )
}

export default HomePage
