import { useLanguage } from '../lib/language'
import { ArrowRightIcon, ArrowDownIcon } from './icons'

export default function Hero() {
  const { dict } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-c) 1px, transparent 1px), linear-gradient(90deg, var(--border-c) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[32rem] rounded-full bg-accent/20 blur-[100px] animate-float" />
        <div className="absolute top-40 right-0 size-72 rounded-full bg-accent2/25 blur-[90px] animate-drift" />
        <div className="absolute top-24 -left-10 size-64 rounded-full bg-accent/15 blur-[80px] animate-drift [animation-delay:-6s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p
            className="animate-fade-up font-mono text-accent text-base sm:text-lg mb-4"
            style={{ animationDelay: '0.15s' }}
          >
            {dict.hero.greeting}
          </p>

          <div className="animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <h1 className="hero-name font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] pb-1">
              {dict.hero.name}
            </h1>
          </div>

          <p
            className="animate-fade-up mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl"
            style={{ animationDelay: '0.4s' }}
          >
            {dict.hero.tagline}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg hover:opacity-90 hover:shadow-lg hover:shadow-accent/25 active:scale-95 transition-all duration-300"
            >
              {dict.hero.ctaPrimary}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text hover:border-accent hover:text-accent active:scale-95 transition-all duration-300"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={dict.hero.scroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">{dict.hero.scroll}</span>
        <ArrowDownIcon className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
