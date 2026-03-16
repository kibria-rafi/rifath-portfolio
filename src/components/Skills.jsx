import { createElement } from 'react'
import { motion as Motion } from 'framer-motion'
import {
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

function Skills() {
  const MotionSection = Motion.section

  return (
    <MotionSection
      id="skills"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="news-shell scroll-mt-24 mb-8 p-6 sm:mb-10 lg:p-8"
    >
      <div className="news-divider mb-6 flex items-end justify-between gap-4 pb-4">
        <div>
          <p className="news-kicker">
            Skills
          </p>
          <h3 className="news-title">
            Core Competencies
          </h3>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-newsroom-muted dark:text-zinc-400 sm:text-sm">
          Journalism & Technical Tools
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skillSections.map((section) => (
          <article
            key={section.title}
            className="news-card"
          >
            <h4 className="font-heading text-2xl text-newsroom-ink dark:text-zinc-100">
              {section.title}
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {section.items.map(({ name, icon }) => {
                const skillIcon = createElement(icon, {
                  className: 'text-newsroom-accent dark:text-red-400 text-base',
                })

                return (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-md border border-newsroom-border bg-white px-3 py-2 font-body text-sm font-semibold text-newsroom-ink dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
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
  )
}

export default Skills
