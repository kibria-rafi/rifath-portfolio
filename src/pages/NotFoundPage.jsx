import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-newsroom px-4">
      <div className="news-shell w-full max-w-xl p-8 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-newsroom-accent">
          404
        </p>
        <h1 className="mt-2 font-heading text-4xl text-newsroom-ink">
          Page Not Found
        </h1>
        <p className="mt-3 font-body text-newsroom-muted">
          The story you are looking for is not published yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-newsroom-accent px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.1em] text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
