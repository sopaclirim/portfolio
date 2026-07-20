import { useLanguage } from '../lib/language'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  const { dict } = useLanguage()

  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={dict.experience.kicker} title={dict.experience.title} />

        <ol className="relative border-l border-border ml-2 space-y-12">
          {dict.experience.items.map((item, i) => (
            <Reveal as="li" key={item.role + item.org} delay={i * 100} className="relative pl-8">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-accent bg-bg" />
              <p className="font-mono text-xs text-accent2 mb-1">{item.period}</p>
              <h3 className="font-sans text-lg sm:text-xl font-semibold text-text">{item.role}</h3>
              <p className="text-sm text-text-muted mb-3">{item.org}</p>
              <p className="text-text-muted leading-relaxed text-[15px] max-w-2xl">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
