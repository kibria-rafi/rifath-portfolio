import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'

const stories = [
  {
    title: 'Inside University Elections: Voices From Student Polling Booths',
    tag: 'Campus Reporting',
    summary:
      'A field report tracking voter turnout trends and candidate messaging during a high-stakes student election cycle.',
  },
  {
    title: 'When News Breaks Online First: Speed vs. Verification in Student Media',
    tag: 'Media Analysis',
    summary:
      'A newsroom-focused commentary on balancing urgency and editorial integrity in digital publishing.',
  },
  {
    title: 'Neighborhood Stories, National Relevance: Why Local Voices Matter',
    tag: 'Feature Writing',
    summary:
      'A narrative feature connecting hyperlocal community concerns with broader social policy debates.',
  },
]

const MotionDiv = Motion.div
const MotionArticle = Motion.article

function WorkPage() {
  return (
    <main className="min-h-screen bg-newsroom-paper px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-newsroom-border pb-5"
        >
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-newsroom-muted">
              Portfolio
            </p>
            <h1 className="font-heading text-3xl text-newsroom-ink sm:text-4xl">
              Selected Reporting Work
            </h1>
          </div>
          <Link
            to="/"
            className="rounded-md border border-newsroom-ink px-4 py-2 font-body text-sm font-semibold uppercase tracking-[0.08em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent"
          >
            Back To Home
          </Link>
        </MotionDiv>

        <section className="space-y-4">
          {stories.map((story, idx) => (
            <MotionArticle
              key={story.title}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 * idx, duration: 0.5 }}
              className="rounded-xl border border-newsroom-border bg-white p-6 shadow-newsroom"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-newsroom-accent">
                {story.tag}
              </p>
              <h2 className="mt-2 font-heading text-2xl leading-snug text-newsroom-ink">
                {story.title}
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-newsroom-muted">
                {story.summary}
              </p>
            </MotionArticle>
          ))}
        </section>
      </div>
    </main>
  )
}

export default WorkPage
