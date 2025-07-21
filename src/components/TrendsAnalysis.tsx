'use client'

import { BarChart3, TrendingUp, Brain, Zap } from 'lucide-react'
import { marketTrends } from '@/data/marketData'

export default function TrendsAnalysis() {
  const trends = [
    {
      icon: Brain,
      title: 'AI智能化程度提升',
      description: '从简单的自动化到深度学习和预测分析，AI在HR中的应用越来越智能化',
      impact: '高',
      timeline: '持续发展',
      color: 'blue'
    },
    {
      icon: Zap,
      title: '实时数据分析',
      description: '企业需要实时的人力资源洞察，而不是传统的定期报告',
      impact: '中',
      timeline: '2-3年',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: '个性化员工体验',
      description: '基于员工行为和偏好提供个性化的工作环境和发展路径',
      impact: '高',
      timeline: '3-5年',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: '预测性人力分析',
      description: '利用历史数据和机器学习预测未来的人力需求和风险',
      impact: '极高',
      timeline: '5年+',
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getImpactColor = (impact: string) => {
    const colors = {
      '中': 'bg-amber-50 text-amber-700',
      '高': 'bg-blue-50 text-blue-700',
      '极高': 'bg-indigo-50 text-indigo-700'
    }
    return colors[impact as keyof typeof colors] || colors['中']
  }

  return (
    <section id="trends" className="py-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            趋势分析
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI+HR领域正在经历快速变革，以下是影响行业发展的关键趋势
          </p>
        </div>

        {/* Market Growth Chart */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">市场规模增长趋势</h3>
          <div className="space-y-4">
            {marketTrends.map((trend, index) => (
              <div key={trend.year} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-medium text-gray-600">
                  {trend.year}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      ${trend.market_size}B
                    </span>
                    <span className="text-sm text-gray-600">
                      AI采用率: {trend.ai_adoption}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        trend.year.includes('*') 
                          ? 'bg-gradient-to-r from-accent-400 to-accent-600'
                          : 'bg-gradient-to-r from-primary-400 to-primary-600'
                      }`}
                      style={{ width: `${Math.min((trend.market_size / 50) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  trend.growth_rate > 30 ? 'bg-blue-50 text-blue-700' :
                  trend.growth_rate > 20 ? 'bg-amber-50 text-amber-700' :
                  'bg-slate-50 text-slate-700'
                }`}>
                  +{trend.growth_rate}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trends.map((trend, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(trend.color)}`}>
                  <trend.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {trend.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {trend.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(trend.impact)}`}>
                      影响: {trend.impact}
                    </span>
                    <span className="text-sm text-gray-500">
                      时间线: {trend.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Adoption Timeline */}
        <div className="card p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">AI技术采用进程</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">基础自动化 (已成熟)</span>
                  <span className="text-sm text-gray-600">90%+ 企业采用</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">简历筛选、薪酬计算、考勤管理等基础流程自动化</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">智能分析 (快速发展)</span>
                  <span className="text-sm text-gray-600">65% 企业采用</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">数据驱动的绩效分析、员工满意度调查、离职预测</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">预测性分析 (新兴阶段)</span>
                  <span className="text-sm text-gray-600">35% 企业试点</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">人才需求预测、职业路径规划、组织变化分析</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">深度个性化 (探索阶段)</span>
                  <span className="text-sm text-gray-600">15% 企业实验</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">个性化学习路径、定制化福利方案、智能职业建议</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}