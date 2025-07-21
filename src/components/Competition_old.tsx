'use client'

import { useState } from 'react'
import { TrendingUp, Award, DollarSign, Target } from 'lucide-react'
import { competitors } from '@/data/japanMarketData'

export default function Competition() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'domestic' | 'foreign' | 'specialist'>('all')

  const filteredCompetitors = activeCategory === 'all' 
    ? competitors 
    : competitors.filter(comp => comp.type === activeCategory)

  const getTypeColor = (type: string) => {
    const colors = {
      domestic: 'bg-blue-100 text-blue-800',
      foreign: 'bg-red-100 text-red-800',
      specialist: 'bg-green-100 text-green-800'
    }
    return colors[type as keyof typeof colors] || colors.domestic
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      domestic: '国内厂商',
      foreign: '外国厂商',
      specialist: '专业服务'
    }
    return labels[type as keyof typeof labels] || '其他'
  }

  const marketInsights = [
    {
      title: '国内主导地位',
      description: 'SmartHR以57%市场份额领先，但主要服务大企业',
      opportunity: '中小企业市场仍有巨大空间'
    },
    {
      title: '价格差异巨大',
      description: '外国系统$28-38/员工/月 vs 国内¥300-1000/员工/月',
      opportunity: '¥200-500价格区间存在市场空白'
    },
    {
      title: '功能分化明显',
      description: '现有解决方案要么功能单一，要么过于复杂',
      opportunity: '集成化但易用的解决方案需求强烈'
    }
  ]

  return (
    <section id="competition" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            日本HR科技竞争格局分析
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            深度分析日本HR科技市场主要玩家，识别竞争优势与市场空白
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-lg p-1 max-w-lg mx-auto">
          {(['all', 'domestic', 'foreign', 'specialist'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-white text-primary-600 shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category === 'all' ? '全部' : 
               category === 'domestic' ? '国内厂商' :
               category === 'foreign' ? '外国厂商' : '专业服务'}
            </button>
          ))}
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {marketInsights.map((insight, index) => (
            <div key={index} className="card p-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 text-center">{insight.description}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-medium text-green-900 mb-1 text-center">机会</h4>
                <p className="text-green-800 text-xs text-center">{insight.opportunity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Competitor Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCompetitors.map((competitor, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{competitor.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(competitor.type)}`}>
                    {getTypeLabel(competitor.type)}
                  </span>
                  {competitor.marketShare && (
                    <div className="mt-2">
                      <span className="text-xl font-bold text-primary-600">{competitor.marketShare}%</span>
                      <span className="text-sm text-gray-600 ml-1">市场份额</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                  <div className="text-xs text-gray-600 mt-1">定价模式</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                  定价策略
                </h4>
                <p className="text-sm text-gray-700 bg-gray-50 rounded p-2">{competitor.pricing}</p>
              </div>



              {/* Target Market */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Target className="h-4 w-4 text-blue-600 mr-2" />
                  目标市场
                </h4>
                <p className="text-sm text-gray-700">{competitor.targetMarket}</p>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <Award className="h-4 w-4 text-green-600 mr-2" />
                  核心优势
                </h4>
                <ul className="space-y-2">
                  {competitor.strengths.map((strength, strengthIndex) => (
                    <li key={strengthIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 text-orange-600 mr-2" />
                  挑战与局限
                </h4>
                <ul className="space-y-2">
                  {competitor.weaknesses.map((weakness, weaknessIndex) => (
                    <li key={weaknessIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Market Gap Analysis */}
        <div className="card p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">市场空白与机会</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">现有市场痛点</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• 外国系统价格昂贵($28-38/员工/月)，中小企业难以承受</li>
                <li>• 国内产品功能分散，缺乏集成化解决方案</li>
                <li>• AI能力有限，多停留在"测量"而非"预测与干预"</li>
                <li>• 文化适应性不足，未充分考虑日本职场特征</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">核心差异化机会</h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• 基于JD-R模型的科学框架</li>
                <li>• AI驱动的个性化资源推荐</li>
                <li>• "测量-诊断-干预"的完整闭环</li>
                <li>• 深度适应日本文化的解决方案</li>
                <li>• ¥200-500/员工/月的经济实惠定价</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}