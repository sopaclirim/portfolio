import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
