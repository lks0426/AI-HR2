'use client'

import { TrendingUp, DollarSign, Users2, Globe } from 'lucide-react'
import { marketTrends, keyInsights } from '@/data/marketData'

export default function MarketOverview() {
  const currentYear = marketTrends.find(trend => trend.year === '2024')

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            市场概览
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI+HR市场正经历快速增长期，技术创新与商业需求双重驱动下，市场规模持续扩大
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">$24.1B</div>
            <div className="text-sm text-gray-600">2024年市场规模</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">78%</div>
            <div className="text-sm text-gray-600">AI技术采用率</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users2 className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">13%</div>
            <div className="text-sm text-gray-600">年增长率</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">$45.2B</div>
            <div className="text-sm text-gray-600">2026年预测规模</div>
          </div>
        </div>

        {/* Market Drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
              市场驱动因素
            </h3>
            <ul className="space-y-3">
              {keyInsights.market_drivers.map((driver, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{driver}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Users2 className="h-5 w-5 text-accent-600 mr-2" />
              成功关键因素
            </h3>
            <ul className="space-y-3">
              {keyInsights.success_factors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Market Timeline */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">市场发展时间线</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {marketTrends.map((trend, index) => (
              <div key={trend.year} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 mx-auto ${
                  trend.year.includes('*') 
                    ? 'bg-gradient-to-r from-accent-400 to-accent-600 text-white'
                    : 'bg-gradient-to-r from-primary-400 to-primary-600 text-white'
                }`}>
                  <span className="font-semibold">{trend.year.replace('*', '')}</span>
                </div>
                <div className="text-sm font-medium text-gray-900">${trend.market_size}B</div>
                <div className="text-xs text-gray-600">+{trend.growth_rate}%</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">* 预测数据</p>
        </div>
      </div>
    </section>
  )
}