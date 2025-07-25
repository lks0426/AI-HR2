'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation, localeNames, localeFlags, Locale } from '@/i18n/config'

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center min-w-[100px] px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        aria-label="Change language"
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-gray-600 flex-shrink-0" />
          <span className="text-base leading-none">{localeFlags[locale]}</span>
          <span className="text-sm font-medium text-gray-700 min-w-[45px] text-left">
            {localeNames[locale]}
          </span>
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          {Object.entries(localeNames).map(([key, name]) => {
            const localeKey = key as Locale
            const isActive = locale === localeKey
            
            return (
              <button
                key={localeKey}
                onClick={() => handleLanguageChange(localeKey)}
                className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 ${
                  isActive 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-base mr-3 flex-shrink-0">{localeFlags[localeKey]}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{name}</div>
                  <div className="text-xs text-gray-500 uppercase">{localeKey}</div>
                </div>
                {isActive && (
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 ml-2"></div>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}