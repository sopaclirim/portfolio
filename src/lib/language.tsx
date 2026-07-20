import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type Dictionary } from './translations'

interface LanguageContextValue {
  lang: Lang
  dict: Dictionary
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'de') return stored
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'de' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, dict: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
