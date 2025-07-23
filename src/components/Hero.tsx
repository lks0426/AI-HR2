'use client'

import { TrendingUp, Users, Brain, Building2 } from 'lucide-react'
import { useTranslation } from '@/i18n/config'

export default function Hero() {
  const { t } = useTranslation()
  
  const stats = [
    { icon: TrendingUp, value: '6.94%', label: 'HR科技CAGR增长率' },
    { icon: Users, value: '99.7%', label: '日本中小企业占比' },
    { icon: Brain, value: '15.3%', label: '中小企业年离职率' },
    { icon: Building2, value: '¥39B', label: '2033年预测市场规模' }
  ]

  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            基于AI的日本中小企业
            <span className="text-gradient block mt-2">员工幸福度标准化解决方案</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed animate-slide-up">
            响应政府"工作方式改革"倡议，为100-1000人规模企业提供科学的员工幸福度管理平台
          </p>


          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 animate-scale-in">
            <p className="text-blue-800 text-sm md:text-base">
              <strong>核心理念：</strong>通过AI推荐的工作资源系统性地平衡工作要求，以此"标准化幸福"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in">
            <a href="#market-analysis" className="btn-primary">
              日本市场深度分析
            </a>
            <a href="#solution" className="btn-secondary">
              AI解决方案架构
            </a>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card p-4 md:p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Problem Statement */}
          <div className="mt-12 bg-red-50 border border-red-100 rounded-xl p-6 animate-fade-in">
            <h3 className="text-lg font-semibold text-red-900 mb-4 text-center">市场痛点</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white rounded-lg p-4 border border-red-100 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 text-xl">💸</span>
                </div>
                <div className="font-medium text-gray-800 mb-2">成本压力</div>
                <div className="text-gray-600">外国系统每员工$28-38/月，超出中小企业预算</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-100 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 text-xl">📊</span>
                </div>
                <div className="font-medium text-gray-800 mb-2">功能分散</div>
                <div className="text-gray-600">现有解决方案缺乏集成化管理平台</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-100 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 text-xl">🎌</span>
                </div>
                <div className="font-medium text-gray-800 mb-2">文化适应</div>
                <div className="text-gray-600">多数系统未充分考虑日本职场文化特征</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}