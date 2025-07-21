'use client'

import { BarChart3, Mail, FileText, Calendar } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: '报告内容',
      links: [
        { name: '市场概览', href: '#overview' },
        { name: '趋势分析', href: '#trends' },
        { name: '竞争格局', href: '#competition' },
        { name: '商业机会', href: '#opportunities' },
        { name: '战略建议', href: '#strategy' }
      ]
    },
    {
      title: '研究方法',
      links: [
        { name: '数据来源', href: '#' },
        { name: '分析框架', href: '#' },
        { name: '预测模型', href: '#' },
        { name: '验证方法', href: '#' }
      ]
    },
    {
      title: '联系我们',
      links: [
        { name: '商务合作', href: '#', icon: Mail },
        { name: '定制报告', href: '#', icon: FileText },
        { name: '咨询服务', href: '#', icon: Calendar }
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
                <h3 className="text-lg font-bold">AI+HR 研究中心</h3>
                <p className="text-sm text-gray-400">专业市场分析</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              专注于人工智能与人力资源领域的前沿研究，
              为企业决策提供专业的数据支持和战略洞察。
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">
                <Calendar className="h-3 w-3 inline mr-1" />
                更新于 {new Date().toLocaleDateString('zh-CN')}
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
                      {link.icon && <link.icon className="h-4 w-4 mr-2" />}
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
              <div className="text-sm text-gray-400">2024年市场规模</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-1">78%</div>
              <div className="text-sm text-gray-400">AI技术采用率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">$45.2B</div>
              <div className="text-sm text-gray-400">2026年预测规模</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">6</div>
              <div className="text-sm text-gray-400">关键商业机会</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              报告声明
            </h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                本报告基于公开信息和行业研究编制，旨在提供市场趋势和商业洞察。
                报告中的预测和建议仅供参考，不构成投资建议。
              </p>
              <p>
                数据来源包括但不限于：行业报告、公开财报、市场调研、专家访谈等。
                我们致力于确保信息的准确性，但对于数据的完整性和时效性不承担责任。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} AI+HR 市场调研报告. 版权所有
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>专业 • 可信 • 前瞻</span>
            <span>•</span>
            <span>商业决策支持</span>
          </div>
        </div>
      </div>
    </footer>
  )
}