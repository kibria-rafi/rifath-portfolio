import { useState } from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Training from '../components/Training'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const socialLinks = [
  {
    label: 'Email',
    icon: FaEnvelope,
    href: 'mailto:aburifath77@gmail.com',
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

function HomePage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-newsroom-paper bg-newsroom text-newsroom-ink transition-colors duration-300 dark:bg-zinc-950 dark:bg-none dark:text-zinc-100">
        <Navbar isDark={isDark} onToggleDark={() => setIsDark((prev) => !prev)} />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <Hero socialLinks={socialLinks} />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Training />
          <Portfolio />
          <Contact />
        </main>

        <Footer socialLinks={socialLinks} />
      </div>
    </div>
  )
}

export default HomePage
