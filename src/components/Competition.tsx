'use client'

import { useState } from 'react'
import { TrendingUp, Award, DollarSign, Target } from 'lucide-react'
import { competitors } from '@/data/japanMarketData'
import { useTranslation } from '@/i18n/config'

export default function Competition() {
  const { t } = useTranslation()
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
      domestic: t.competition.categories.domestic,
      foreign: t.competition.categories.foreign,
      specialist: t.competition.categories.specialist
    }
    return labels[type as keyof typeof labels] || t.competition.categories.all
  }

  const marketInsights = [
    t.competition.marketInsights.domesticDominance,
    t.competition.marketInsights.pricingGap,
    t.competition.marketInsights.featureDifferentiation
  ]

  return (
    <section id="competition" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.competition.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.competition.subtitle}
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
              {category === 'all' ? t.competition.categories.all : 
               category === 'domestic' ? t.competition.categories.domestic :
               category === 'foreign' ? t.competition.categories.foreign : t.competition.categories.specialist}
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
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-medium text-blue-700 mb-1 text-center">{t.competition.labels.opportunity}</h4>
                <p className="text-blue-600 text-xs text-center">{insight.opportunity}</p>
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
                      <span className="text-sm text-gray-600 ml-1">{t.competition.labels.marketShare}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                  <div className="text-xs text-gray-600 mt-1">{t.competition.labels.pricingModel}</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                  {t.competition.labels.pricingStrategy}
                </h4>
                <p className="text-sm text-gray-700 bg-gray-50 rounded p-2">{competitor.pricing}</p>
              </div>

              {/* Target Market */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Target className="h-4 w-4 text-blue-600 mr-2" />
                  {t.competition.labels.targetMarket}
                </h4>
                <p className="text-sm text-gray-700">{competitor.targetMarket}</p>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <Award className="h-4 w-4 text-green-600 mr-2" />
                  {t.competition.labels.coreStrengths}
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
                  {t.competition.labels.challengesLimitations}
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
        <div className="card p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.competition.marketGap.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-orange-500 mr-2">⚠️</span>
                {t.competition.marketGap.currentPainPoints}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {t.competition.marketGap.painPoints.map((painPoint, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {painPoint}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <span className="text-blue-600 mr-2">💎</span>
                {t.competition.marketGap.differentiationOpportunities}
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                {t.competition.marketGap.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}