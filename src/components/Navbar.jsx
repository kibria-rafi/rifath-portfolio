import { useState } from 'react'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ isDark, onToggleDark }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-newsroom-border bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-heading text-xl font-bold tracking-tight text-newsroom-ink dark:text-zinc-100"
        >
          Abu Rifath Jahan
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-xs font-semibold uppercase tracking-[0.11em] text-newsroom-muted transition hover:text-newsroom-accent dark:text-zinc-300 dark:hover:text-red-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-newsroom-border text-newsroom-ink transition hover:border-newsroom-accent hover:text-newsroom-accent dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-red-500 dark:hover:text-red-400"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-newsroom-border text-newsroom-ink md:hidden dark:border-zinc-700 dark:text-zinc-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="grid gap-1 border-t border-newsroom-border bg-white px-4 py-3 md:hidden dark:border-zinc-800 dark:bg-zinc-900">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2 font-body text-sm font-semibold text-newsroom-ink transition hover:bg-newsroom-accent/10 hover:text-newsroom-accent dark:text-zinc-100 dark:hover:bg-red-500/10 dark:hover:text-red-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
