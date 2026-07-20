import Reveal from './Reveal'

interface SectionHeadingProps {
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ kicker, title, subtitle, align = 'left' }: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <Reveal className={`mb-14 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <p className="font-mono text-sm text-accent mb-3 tracking-wide">{kicker}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text">{title}</h2>
      {subtitle && <p className="mt-4 text-text-muted leading-relaxed">{subtitle}</p>}
    </Reveal>
  )
}
