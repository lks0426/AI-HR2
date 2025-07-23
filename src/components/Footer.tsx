'use client'

import { BarChart3, Mail, FileText, Calendar } from 'lucide-react'
import { useTranslation } from '@/i18n/config'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: t.footer.sections.reportContent.title,
      links: [
        { name: t.footer.sections.reportContent.marketOverview, href: '#overview' },
        { name: t.footer.sections.reportContent.trendAnalysis, href: '#trends' },
        { name: t.footer.sections.reportContent.competitiveLandscape, href: '#competition' },
        { name: t.footer.sections.reportContent.businessOpportunities, href: '#opportunities' },
        { name: t.footer.sections.reportContent.strategicRecommendations, href: '#strategy' }
      ]
    },
    {
      title: t.footer.sections.researchMethods.title,
      links: [
        { name: t.footer.sections.researchMethods.dataSources, href: '#' },
        { name: t.footer.sections.researchMethods.analyticalFramework, href: '#' },
        { name: t.footer.sections.researchMethods.predictionModels, href: '#' },
        { name: t.footer.sections.researchMethods.validationMethods, href: '#' }
      ]
    },
    {
      title: t.footer.sections.contactUs.title,
      links: [
        { name: t.footer.sections.contactUs.businessCooperation, href: '#', icon: Mail },
        { name: t.footer.sections.contactUs.customReports, href: '#', icon: FileText },
        { name: t.footer.sections.contactUs.consultingServices, href: '#', icon: Calendar }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t.footer.companyName}</h3>
                <p className="text-sm text-gray-400">{t.footer.companyTagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t.footer.companyDescription}
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">
                <Calendar className="h-3 w-3 inline mr-1" />
                {t.footer.updatedOn} {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                    >
                      {'icon' in link && link.icon && <link.icon className="h-4 w-4 mr-2" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Report Summary */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">$24.1B</div>
              <div className="text-sm text-gray-400">{t.footer.reportSummary.marketSize2024}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-1">78%</div>
              <div className="text-sm text-gray-400">{t.footer.reportSummary.aiAdoption}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">$45.2B</div>
              <div className="text-sm text-gray-400">{t.footer.reportSummary.forecast2026}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">6</div>
              <div className="text-sm text-gray-400">{t.footer.reportSummary.keyOpportunities}</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              {t.footer.disclaimer.title}
            </h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                {t.footer.disclaimer.mainText}
              </p>
              <p>
                {t.footer.disclaimer.dataText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} {t.footer.copyright}
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>{t.footer.tagline}</span>
            <span>•</span>
            <span>{t.footer.businessSupport}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}