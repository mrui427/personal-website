import { createContext, useContext } from 'react'

export type Language = 'en' | 'zh'
export const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
  t: (text: string) => string
}>({ language: 'en', setLanguage: () => {}, t: (text) => text })

export const useLanguage = () => useContext(LanguageContext)
