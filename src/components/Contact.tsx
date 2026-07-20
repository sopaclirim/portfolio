import { useState } from 'react'
import { useLanguage } from '../lib/language'
import { profile } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from './icons'

export default function Contact() {
  const { dict } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — no-op, the email link still works
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={dict.contact.kicker}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
          align="center"
        />

        <Reveal as="div" className="mx-auto max-w-lg flex flex-col items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group w-full flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-6 py-4 hover:border-accent/50 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-accent-soft text-accent">
                <MailIcon className="size-4.5" />
              </span>
              <span className="text-left">
                <span className="block text-xs text-text-muted">{dict.contact.emailLabel}</span>
                <span className="block text-sm font-medium text-text">{profile.email}</span>
              </span>
            </span>
            <ArrowRightIcon className="size-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="text-xs font-mono text-text-muted hover:text-accent transition-colors cursor-pointer"
          >
            {copied ? dict.contact.copied : dict.contact.copy}
          </button>

          <div className="w-full grid sm:grid-cols-2 gap-4 mt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <span className="grid place-items-center size-10 rounded-xl bg-accent-soft text-accent">
                <GithubIcon className="size-4.5" />
              </span>
              <span className="text-left">
                <span className="block text-xs text-text-muted">{dict.contact.githubLabel}</span>
                <span className="block text-sm font-medium text-text">@{profile.githubHandle}</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <span className="grid place-items-center size-10 rounded-xl bg-accent-soft text-accent">
                <LinkedinIcon className="size-4.5" />
              </span>
              <span className="text-left">
                <span className="block text-xs text-text-muted">{dict.contact.linkedinLabel}</span>
                <span className="block text-sm font-medium text-text">{profile.linkedinHandle}</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
