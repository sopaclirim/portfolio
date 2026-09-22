import { useState } from 'react'
import type { ElementType } from 'react'
import { CodeIcon } from './icons'

interface ProjectCoverProps {
  image?: string
  title: string
  className?: string
  fit?: 'cover' | 'contain'
  /** object-position for the cover image (e.g. 'center'). Defaults to top. */
  position?: string
  /** Icon for the generated (image-less) cover. Falls back to a code icon. */
  icon?: ElementType
}

/**
 * Renders a project's cover image when available, otherwise a branded
 * gradient placeholder. Also falls back to the placeholder if the image
 * fails to load (e.g. a screenshot that hasn't been added yet).
 */
export default function ProjectCover({
  image,
  title,
  className = '',
  fit = 'cover',
  position,
  icon,
}: ProjectCoverProps) {
  const [failed, setFailed] = useState(false)
  const showImage = image && !failed
  const Icon: ElementType = icon ?? CodeIcon
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
        <div
          className="relative grid h-full w-full place-items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--surface), var(--bg-soft))' }}
        >
          {/* large faint motif adds depth without clutter */}
          <Icon className="pointer-events-none absolute -bottom-8 -right-6 h-[85%] w-auto text-accent/[0.06]" />
          {/* fine dot texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(var(--border-c) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          {/* large focal icon */}
          <Icon className="relative h-[54%] w-auto text-accent drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-[1.06]" />
        </div>
      )}
    </div>
  )
}
