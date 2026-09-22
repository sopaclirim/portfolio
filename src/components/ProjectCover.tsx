import { useState } from 'react'
import { CodeIcon } from './icons'

interface ProjectCoverProps {
  image?: string
  title: string
  className?: string
  fit?: 'cover' | 'contain'
  /** object-position for the cover image (e.g. 'center'). Defaults to top. */
  position?: string
}

/**
 * Renders a project's cover image when available, otherwise a branded
 * gradient placeholder. Also falls back to the placeholder if the image
 * fails to load (e.g. a screenshot that hasn't been added yet).
 */
export default function ProjectCover({ image, title, className = '', fit = 'cover', position }: ProjectCoverProps) {
  const [failed, setFailed] = useState(false)
  const showImage = image && !failed
  const fitClass =
    fit === 'contain' ? 'object-contain' : position ? 'object-cover' : 'object-cover object-top'

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-bg-soft ${className}`}
    >
      {showImage ? (
        <img
          src={image}
          alt={`${title} — preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          style={position ? { objectPosition: position } : undefined}
          className={`h-full w-full ${fitClass} transition-transform duration-500 group-hover:scale-[1.04]`}
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-accent/15 via-bg-soft to-accent2/15">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(var(--border-c) 1px, transparent 1px), linear-gradient(90deg, var(--border-c) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <span className="relative grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
            <CodeIcon className="size-6" />
          </span>
        </div>
      )}
    </div>
  )
}
