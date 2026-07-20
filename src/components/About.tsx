import { useLanguage } from '../lib/language'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  const { dict } = useLanguage()

  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={dict.about.kicker} title={dict.about.title} />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
          <Reveal className="space-y-5">
            {dict.about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-[15px] sm:text-base">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border bg-surface overflow-hidden self-start">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-soft">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-amber-400/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 font-mono text-xs text-text-muted">profile.json</span>
            </div>
            <dl className="p-6 space-y-5">
              {dict.about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wide text-accent2">{fact.label}</dt>
                  <dd className="mt-1 text-text font-medium text-sm sm:text-[15px]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
