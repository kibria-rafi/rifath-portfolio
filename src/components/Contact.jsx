import { useState } from 'react'
import { motion as Motion } from 'framer-motion'

const contactDetails = [
  ['Phone', '+8801874877828'],
  ['Email', 'aburifath77@gmail.com'],
  ['Location', 'Dhamrai, Dhaka, Bangladesh'],
]

function Contact() {
  const MotionSection = Motion.section
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <MotionSection
      id="contact"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
      className="news-shell scroll-mt-24 mb-10 grid gap-6 p-6 lg:grid-cols-[1fr_1.2fr] lg:p-8"
    >
      <article>
        <p className="news-kicker">
          Contact
        </p>
        <h3 className="news-title">
          Let's Connect
        </h3>
        <p className="mt-3 font-body text-base text-newsroom-muted dark:text-zinc-300">
          Open to reporting, media, and communication opportunities.
        </p>

        <dl className="mt-5 space-y-3">
          {contactDetails.map(([label, value]) => (
            <div
              key={label}
              className="rounded-md border border-newsroom-border bg-newsroom-paper px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950"
            >
              <dt className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
                {label}
              </dt>
              <dd className="mt-1 font-body text-sm font-semibold text-newsroom-ink dark:text-zinc-100">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </article>

      <form
        onSubmit={handleSubmit}
        className="news-card p-5"
      >
        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              className="rounded-md border border-newsroom-border bg-white px-3 py-2 font-body text-sm text-newsroom-ink outline-none transition focus:border-newsroom-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-400"
            />
          </label>

          <label className="grid gap-2">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              className="rounded-md border border-newsroom-border bg-white px-3 py-2 font-body text-sm text-newsroom-ink outline-none transition focus:border-newsroom-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-400"
            />
          </label>

          <label className="grid gap-2">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted dark:text-zinc-400">
              Message
            </span>
            <textarea
              name="message"
              rows="5"
              required
              className="rounded-md border border-newsroom-border bg-white px-3 py-2 font-body text-sm text-newsroom-ink outline-none transition focus:border-newsroom-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-red-400"
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center rounded-md bg-newsroom-accent px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-newsroom-accentDark dark:bg-red-500 dark:hover:bg-red-600"
          >
            Send
          </button>

          {sent ? (
            <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-newsroom-accent dark:text-red-400">
              Message sent successfully.
            </p>
          ) : null}
        </div>
      </form>
    </MotionSection>
  )
}

export default Contact
