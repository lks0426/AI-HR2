'use client'

import { useState } from 'react'
import { TrendingUp, Building, Users, DollarSign, ChevronDown, ChevronUp, Target } from 'lucide-react'
import { japanMarketData, legalBenefits, popularBenefits } from '@/data/japanMarketData'

export default function JapanMarketAnalysis() {
  const [activeTab, setActiveTab] = useState<'market' | 'benefits' | 'challenges'>('market')
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null)

  const marketStats = [
    {
      icon: TrendingUp,
      title: '市场规模增长',
      current: `¥${japanMarketData.marketSize.current}B`,
      projected: `¥${japanMarketData.marketSize.projected}B`,
      growth: `${japanMarketData.marketSize.growth}%`,
      period: '2024-2033'
    },
    {
      icon: Building,
      title: '中小企业规模',
      current: `${japanMarketData.smeData.percentage}%`,
      projected: '企业总数占比',
      growth: `${japanMarketData.smeData.employment}%`,
      period: '雇佣劳动力'
    },
    {
      icon: Users,
      title: '人才流失挑战',
      current: `${japanMarketData.smeData.turnoverRate}%`,
      projected: '年离职率',
      growth: `${japanMarketData.smeData.bankruptcies}`,
      period: '2024年破产企业'
    }
  ]

  const pricingComparison = [
    {
      type: '外国系统',
      range: `$${japanMarketData.pricing.foreign.min}-${japanMarketData.pricing.foreign.max}`,
      period: '员工/月',
      status: '过于昂贵',
      color: 'red'
    },
    {
      type: '最佳价格点',
      range: `¥${japanMarketData.pricing.optimal.min}-${japanMarketData.pricing.optimal.max}`,
      period: '员工/月',
      status: '市场空白',
      color: 'green'
    },
    {
      type: '当前国内产品',
      range: `¥${japanMarketData.pricing.current.min}-${japanMarketData.pricing.current.max}`,
      period: '员工/月',
      status: '功能有限',
      color: 'yellow'
    }
  ]

  const challenges = [
    {
      title: '预算约束',
      description: '中小企业HR预算有限，无法承担每员工$28-38/月的外国系统成本',
      impact: '高',
      solution: '提供¥200-500/员工/月的经济实惠解决方案'
    },
    {
      title: '管理复杂度',
      description: '中小企业通常只有1-3名HR员工，需要简单易用的系统',
      impact: '高',
      solution: 'AI自动化管理，减少人工干预需求'
    },
    {
      title: '文化适应性',
      description: '日本"本音"与"建前"文化特征，传统调查方法效果有限',
      impact: '中',
      solution: '多模态测量+NLP情感分析'
    },
    {
      title: '功能分散',
      description: '现有解决方案功能单一，缺乏集成平台',
      impact: '中',
      solution: '基于JD-R模型的一体化解决方案'
    }
  ]

  const getColorClass = (color: string) => {
    const colors = {
      red: 'bg-red-100 border-red-200 text-red-800',
      green: 'bg-green-100 border-green-200 text-green-800',
      yellow: 'bg-yellow-100 border-yellow-200 text-yellow-800'
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  const getImpactColor = (impact: string) => {
    const colors = {
      '高': 'bg-red-100 text-red-800',
      '中': 'bg-yellow-100 text-yellow-800',
      '低': 'bg-green-100 text-green-800'
    }
    return colors[impact as keyof typeof colors] || colors['中']
  }

  return (
    <section id="market-analysis" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            日本中小企业HR科技市场深度分析
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            基于经团联调查、政府统计数据和行业研究的专业市场分析
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('market')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'market' ? 'bg-white text-primary-600 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            市场规模
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'benefits' ? 'bg-white text-primary-600 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            福利现状
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'challenges' ? 'bg-white text-primary-600 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            挑战分析
          </button>
        </div>

        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            {/* Market Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketStats.map((stat, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <stat.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">当前</span>
                      <span className="text-xl font-bold text-gray-900">{stat.current}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{stat.projected}</span>
                      <span className="text-lg font-semibold text-primary-600">{stat.growth}</span>
                    </div>
                    <div className="text-xs text-gray-500 text-right">{stat.period}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Analysis */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">定价策略分析</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingComparison.map((pricing, index) => (
                  <div key={index} className={`border rounded-lg p-4 ${getColorClass(pricing.color)}`}>
                    <h4 className="font-semibold mb-2">{pricing.type}</h4>
                    <div className="text-2xl font-bold mb-1">{pricing.range}</div>
                    <div className="text-sm mb-2">{pricing.period}</div>
                    <div className="text-sm font-medium">{pricing.status}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">机会窗口：</span>
                </div>
                <p className="text-green-700 mt-1">
                  在¥200-500/员工/月价格区间提供功能完整的AI驱动解决方案，填补市场空白
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-8">
            {/* Legal Benefits Overview */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">法定福利基础</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800">
                  <strong>关键数据：</strong>法定福利费用约占工资总额的30.51%，企业平均每月为员工负担84,392日元
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {legalBenefits.map((benefit, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-xs text-gray-500">占工资总额: {benefit.cost}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Benefits Ranking */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">中小企业热门法定外福利排名</h3>
              <div className="space-y-4">
                {popularBenefits.map((benefit, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div 
                      className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {benefit.rank}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{benefit.category}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                benefit.cost === 'low' ? 'bg-green-100 text-green-800' :
                                benefit.cost === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {benefit.cost === 'low' ? '低成本' : benefit.cost === 'medium' ? '中等成本' : '高成本'}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedBenefit === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </div>
                    </div>
                    {expandedBenefit === index && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <div className="pt-4">
                          <h5 className="font-medium text-gray-900 mb-2">具体示例</h5>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {benefit.examples.map((example, exIndex) => (
                              <span key={exIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {example}
                              </span>
                            ))}
                          </div>
                          <h5 className="font-medium text-gray-900 mb-2">受欢迎原因</h5>
                          <p className="text-gray-600 text-sm">{benefit.popularity}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="card p-6">
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${getImpactColor(challenge.impact)}`}>
                    <span className="text-xl font-bold">!</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(challenge.impact)}`}>
                    影响: {challenge.impact}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">{challenge.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2 text-center">解决方案</h4>
                  <p className="text-green-800 text-sm text-center">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}