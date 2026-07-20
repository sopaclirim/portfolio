import { useLanguage } from '../lib/language'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Skills() {
  const { dict } = useLanguage()

  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-16 bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={dict.skills.kicker} title={dict.skills.title} subtitle={dict.skills.subtitle} />

        <div className="grid sm:grid-cols-2 gap-5">
          {dict.skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors">
                <h3 className="font-sans font-semibold text-text mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg-soft px-3 py-1.5 font-mono text-xs text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
