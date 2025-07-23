'use client'

import { useState } from 'react'
import { Menu, X, BarChart3 } from 'lucide-react'
import { useTranslation } from '@/i18n/config'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t.nav.japanMarket, href: '#market-analysis' },
    { name: t.nav.workEngagement, href: '#work-engagement' },
    { name: t.nav.competition, href: '#competition' },
    { name: t.nav.caseStudy, href: '#case-study' },
    { name: t.nav.solution, href: '#solution' },
    { name: t.nav.strategy, href: '#strategy' }
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t.site.title}</h1>
              <p className="text-sm text-gray-600">{t.site.subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}