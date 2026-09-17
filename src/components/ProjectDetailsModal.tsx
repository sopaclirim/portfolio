import { useEffect, useRef, useState } from 'react'
import type { ProjectItem, ProjectLabels } from '../lib/translations'
import ProjectCover from './ProjectCover'
import { CloseIcon, CheckIcon, MapPinIcon, ExternalLinkIcon } from './icons'

interface ProjectDetailsModalProps {
  project: ProjectItem
  labels: ProjectLabels
  onClose: () => void
}

export default function ProjectDetailsModal({ project, labels, onClose }: ProjectDetailsModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [failed, setFailed] = useState<string[]>([])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const details = project.details
  const allImages = project.images ?? (project.image ? [project.image] : [])
  // Drop any image that fails to load (e.g. a screenshot not yet added) so the
  // gallery never shows a broken-image icon. If none load, fall back to the cover.
  const gallery = allImages.filter((src) => !failed.includes(src))
  const activeIndex = active < gallery.length ? active : 0

  const meta = details
    ? [
        { label: labels.company, value: details.company },
        { label: labels.location, value: details.location, icon: true },
        { label: labels.year, value: details.year },
        { label: labels.role, value: details.role },
      ]
    : []

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fade-in_0.25s_ease]"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-surface shadow-2xl outline-none animate-[modal-in_0.35s_cubic-bezier(0.16,1,0.3,1)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-border bg-surface/80 text-text-muted backdrop-blur transition-colors hover:text-accent hover:border-accent cursor-pointer"
        >
          <CloseIcon className="size-4" />
        </button>

        <div className="p-5 sm:p-7">
          {gallery.length > 0 ? (
            <div>
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-bg-soft">
                <img
                  key={gallery[activeIndex]}
                  src={gallery[activeIndex]}
                  alt={`${project.title} — ${activeIndex + 1}`}
                  onError={() => setFailed((f) => [...f, gallery[activeIndex]])}
                  className="h-full w-full object-contain"
                />
              </div>

              {gallery.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`${project.title} — ${idx + 1}`}
                      className={`shrink-0 overflow-hidden rounded-lg border transition-colors cursor-pointer ${
                        idx === activeIndex ? 'border-accent' : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        onError={() => setFailed((f) => [...f, src])}
                        className="h-14 w-20 object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <ProjectCover title={project.title} />
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text">{project.title}</h2>
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

          {details?.overview && (
            <p className="mt-4 text-text-muted leading-relaxed text-[15px]">{details.overview}</p>
          )}

          {meta.length > 0 && (
            <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-border bg-bg-soft p-5">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-accent2">{m.label}</dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-text">
                    {m.icon && <MapPinIcon className="size-3.5 text-accent" />}
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {details?.features && details.features.length > 0 && (
            <div className="mt-6">
              <h3 className="font-sans text-sm font-semibold text-text mb-3">{labels.features}</h3>
              <ul className="space-y-2">
                {details.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-accent/25 active:scale-95"
            >
              {labels.visit}
              <ExternalLinkIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
