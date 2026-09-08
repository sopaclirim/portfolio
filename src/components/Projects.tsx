import { useState } from 'react'
import { useLanguage } from '../lib/language'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCover from './ProjectCover'
import ProjectDetailsModal from './ProjectDetailsModal'
import { ArrowRightIcon } from './icons'

export default function Projects() {
  const { dict } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const items = dict.projects.items
  const activeProject = activeIndex !== null ? items[activeIndex] : null

  return (
    <section id="projects" className="py-24 sm:py-32 scroll-mt-16 bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={dict.projects.kicker}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, i) => {
            const cover = project.images?.[0] ?? project.image

            return (
              <Reveal key={project.title} delay={i * 80} className="h-full">
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`${project.title} — ${dict.projects.detailsCta}`}
                    className="block cursor-pointer text-left"
                  >
                    <ProjectCover image={cover} title={project.title} />
                  </button>

                  <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
                        {project.live && (
                          <span className="relative flex size-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                          </span>
                        )}
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-semibold text-text mb-2">{project.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className="group/btn mt-auto inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent cursor-pointer"
                    >
                      {dict.projects.detailsCta}
                      <ArrowRightIcon className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      {activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          labels={dict.projects.labels}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  )
}
