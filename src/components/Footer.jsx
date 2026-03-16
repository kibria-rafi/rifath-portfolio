import { createElement } from 'react'

function Footer({ socialLinks }) {
  return (
    <footer className="border-t border-newsroom-border bg-white/95 py-6 dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <p className="font-body text-sm font-semibold text-newsroom-muted dark:text-zinc-300">
          Copyright © Abu Rifath Jahan
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map(({ label, icon, href }) => {
            const iconNode = createElement(icon, { className: 'text-sm' })

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-newsroom-border px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.08em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-red-400 dark:hover:text-red-400"
              >
                {iconNode}
                <span>{label}</span>
              </a>
            )
          })}
        </div>

        <a
          href="#home"
          className="inline-flex w-fit rounded-md border border-newsroom-ink px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.09em] text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-300 dark:text-zinc-100 dark:hover:border-red-400 dark:hover:text-red-400"
        >
          Back To Top
        </a>
      </div>
    </footer>
  )
}

export default Footer
