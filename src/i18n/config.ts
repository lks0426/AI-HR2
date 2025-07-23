import { useState, useEffect } from 'react'
import { zh } from './locales/zh'
import { ja } from './locales/ja' 
import { en } from './locales/en'

export type Locale = 'zh' | 'ja' | 'en'
export type Translation = typeof zh

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

const translations: Record<Locale, Translation> = {
  zh,
  ja,
  en
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
  
  const t = translations[currentLocale] || translations[defaultLocale]
  
  return {
    locale: currentLocale,
    locales,
    changeLocale,
    t,
    translate: (key: string, data?: any) => getNestedValue(t, key) || key
  }
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}