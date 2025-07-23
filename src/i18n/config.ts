import { useState, useEffect } from 'react'
import { getTranslation, Translation } from './translations'

export type Locale = 'zh' | 'ja' | 'en'

export const locales: Locale[] = ['zh', 'ja', 'en']
export const defaultLocale: Locale = 'zh'

export const localeNames = {
  zh: '中文',
  ja: '日本語', 
  en: 'English'
}

export const localeFlags = {
  zh: '🇨🇳',
  ja: '🇯🇵',
  en: '🇺🇸'
}

export function useTranslation() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)
  
  useEffect(() => {
    // Get saved locale from localStorage or use default
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && locales.includes(savedLocale)) {
      setCurrentLocale(savedLocale)
    }
  }, [])
  
  const changeLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    // Force page reload to apply language changes
    window.location.reload()
  }
  
  const translations = getTranslation(currentLocale)
  
  return {
    locale: currentLocale,
    locales,
    changeLocale,
    t: translations,
    translate: (key: string, data?: any) => getNestedValue(translations, key) || key
  }
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}