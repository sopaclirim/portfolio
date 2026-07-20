import { useEffect, useState } from 'react'
import { useTheme } from '../lib/theme'
import { useLanguage } from '../lib/language'
import { profile } from '../data/content'
import { CodeIcon, SunIcon, MoonIcon, GlobeIcon, MenuIcon, CloseIcon } from './icons'

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, dict, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'about', label: dict.nav.about },
    { id: 'skills', label: dict.nav.skills },
    { id: 'experience', label: dict.nav.experience },
    { id: 'projects', label: dict.nav.projects },
    { id: 'contact', label: dict.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-sans font-semibold text-text hover:text-accent transition-colors"
        >
          <span className="grid place-items-center size-8 rounded-lg bg-accent-soft text-accent">
            <CodeIcon className="size-4" />
          </span>
          {profile.initials}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative transition-colors hover:text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  active === link.id ? 'text-accent after:scale-x-100' : 'text-text-muted after:scale-x-0'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden sm:flex items-center gap-1.5 h-9 px-3 rounded-full border border-border text-xs font-mono font-medium text-text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            <GlobeIcon className="size-3.5" />
            {lang === 'en' ? 'EN' : 'DE'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center size-9 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden grid place-items-center size-9 rounded-full border border-border text-text hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            {menuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 text-sm font-medium transition-colors ${
                    active === link.id ? 'text-accent' : 'text-text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-sm font-mono text-text-muted cursor-pointer"
              >
                <GlobeIcon className="size-3.5" />
                {lang === 'en' ? 'English' : 'Deutsch'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
