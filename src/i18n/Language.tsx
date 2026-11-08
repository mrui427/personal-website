import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, useLanguage, type Language } from './context'
import translations from './zh.json'

const storageKey = 'morri-language'
const dictionary: Record<string, string> = translations
const normalize = (text: string) => text.replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(storageKey) === 'zh' ? 'zh' : 'en' }
    catch { return 'en' }
  })

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    try { localStorage.setItem(storageKey, language) } catch { /* Storage may be disabled. */ }
  }, [language])

  const t = (text: string) => language === 'zh' ? dictionary[normalize(text)] ?? text : text

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function Trans({ text }: { text: string }) {
  return useLanguage().t(text)
}
