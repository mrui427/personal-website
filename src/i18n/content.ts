import type { Language } from './context'

// CMS translations are optional; missing or empty fields retain their original value.
export function localizeContent<T>(content: T, language: Language): T {
  if (!content || language === 'en') return content
  const source = content as T & { translations?: Partial<T> }
  const translated = Object.fromEntries(
    Object.entries(source.translations ?? {}).filter(([, value]) =>
      value != null && value !== '' && (!Array.isArray(value) || value.length > 0),
    ),
  )
  return { ...source, ...translated }
}
