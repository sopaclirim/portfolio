import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/language'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCover from './ProjectCover'
import ProjectDetailsModal from './ProjectDetailsModal'
import { ArrowRightIcon } from './icons'

/** How many cards are visible at once, based on the viewport width. */
function getPerView() {
  if (typeof window === 'undefined') return 3
  const w = window.innerWidth
  return w >= 1024 ? 3 : w >= 640 ? 2 : 1
}

export default function Projects() {
  const { dict } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [perView, setPerView] = useState(getPerView)
  const [index, setIndex] = useState(0)

  const items = dict.projects.items
  const activeProject = activeIndex !== null ? items[activeIndex] : null

  useEffect(() => {
    const onResize = () => setPerView(getPerView())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, items.length - perView)

  // Keep the current slide in range when perView (or the list) changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const canSlide = items.length > perView
  const slideWidth = 100 / perView

  const arrowClass =
    'grid size-10 place-items-center rounded-full border border-border bg-surface text-text shadow-md transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-text cursor-pointer'

  return (
    <section id="projects" className="py-24 sm:py-32 scroll-mt-16 bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={dict.projects.kicker}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />

        <Reveal>
          <div className="relative">
            <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {items.map((project, i) => {
                const cover = project.images?.[0] ?? project.image

                return (
                  <li key={project.title} className="shrink-0 px-3" style={{ flexBasis: `${slideWidth}%` }}>
                    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={`${project.title} — ${dict.projects.detailsCta}`}
                        className="block cursor-pointer text-left"
                      >
                        <ProjectCover
                          image={cover}
                          title={project.title}
                          fit={project.imageFit}
                          position={project.imagePosition}
                        />
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
                  </li>
                )
              })}
            </ul>
            </div>

            {canSlide && (
              <>
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  disabled={index === 0}
                  aria-label={dict.projects.prev}
                  className={`${arrowClass} absolute left-0 top-1/2 z-10 -translate-x-[70%] -translate-y-1/2 xl:-translate-x-[135%]`}
                >
                  <ArrowRightIcon className="size-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                  disabled={index === maxIndex}
                  aria-label={dict.projects.next}
                  className={`${arrowClass} absolute right-0 top-1/2 z-10 translate-x-[70%] -translate-y-1/2 xl:translate-x-[135%]`}
                >
                  <ArrowRightIcon className="size-4" />
                </button>
              </>
            )}
          </div>

          {canSlide && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${dict.projects.title} ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-border hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
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
