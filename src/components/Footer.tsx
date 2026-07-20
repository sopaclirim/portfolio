import { useLanguage } from '../lib/language'
import { profile } from '../data/content'

export default function Footer() {
  const { dict } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
        <p>
          © {year} {profile.name}. {dict.footer.rights}
        </p>
        <p className="font-mono">{dict.footer.builtWith}</p>
      </div>
    </footer>
  )
}
