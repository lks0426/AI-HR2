'use client'

import { useState } from 'react'
import { TrendingUp, Building, Users, ChevronDown, ChevronUp, Target } from 'lucide-react'
import { japanMarketData, legalBenefits, popularBenefits } from '@/data/japanMarketData'
import { useTranslation } from '@/i18n/config'

export default function JapanMarketAnalysis() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'market' | 'benefits' | 'challenges'>('market')
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null)

  const marketStats = [
    {
      icon: TrendingUp,
      title: t.japanMarketAnalysis.marketStats.marketGrowth,
      current: `¥${japanMarketData.marketSize.current}B`,
      projected: `¥${japanMarketData.marketSize.projected}B`,
      growth: `${japanMarketData.marketSize.growth}%`,
      period: '2024-2033'
    },
    {
      icon: Building,
      title: t.japanMarketAnalysis.marketStats.smeScale,
      current: `${japanMarketData.smeData.percentage}%`,
      projected: t.japanMarketAnalysis.marketStats.employmentRatio,
      growth: `${japanMarketData.smeData.employment}%`,
      period: t.japanMarketAnalysis.marketStats.employmentForce
    },
    {
      icon: Users,
      title: t.japanMarketAnalysis.marketStats.talentChallenge,
      current: `${japanMarketData.smeData.turnoverRate}%`,
      projected: t.japanMarketAnalysis.marketStats.annualTurnover,
      growth: `${japanMarketData.smeData.bankruptcies}`,
      period: t.japanMarketAnalysis.marketStats.bankruptcies2024
    }
  ]

  const pricingComparison = [
    {
      type: t.japanMarketAnalysis.pricing.foreignSystems,
      range: `$${japanMarketData.pricing.foreign.min}-${japanMarketData.pricing.foreign.max}`,
      period: t.japanMarketAnalysis.pricing.employeeMonth,
      status: t.japanMarketAnalysis.pricing.tooExpensive,
      description: t.japanMarketAnalysis.pricing.powerfulButExpensive
    },
    {
      type: t.japanMarketAnalysis.pricing.optimalPrice,
      range: `¥${japanMarketData.pricing.optimal.min}-${japanMarketData.pricing.optimal.max}`,
      period: t.japanMarketAnalysis.pricing.employeeMonth,
      status: t.japanMarketAnalysis.pricing.marketGap,
      description: t.japanMarketAnalysis.pricing.completeAndReasonable,
      isOpportunity: true
    },
    {
      type: t.japanMarketAnalysis.pricing.currentDomestic,
      range: `¥${japanMarketData.pricing.current.min}-${japanMarketData.pricing.current.max}`,
      period: t.japanMarketAnalysis.pricing.employeeMonth,
      status: t.japanMarketAnalysis.pricing.limitedFeatures,
      description: t.japanMarketAnalysis.pricing.affordableButLimited
    }
  ]

  const challenges = [
    {
      title: t.japanMarketAnalysis.challenges.budgetConstraints,
      description: t.japanMarketAnalysis.challenges.budgetDescription,
      impact: t.japanMarketAnalysis.challenges.impactHigh,
      solution: t.japanMarketAnalysis.challenges.budgetSolution
    },
    {
      title: t.japanMarketAnalysis.challenges.managementComplexity,
      description: t.japanMarketAnalysis.challenges.managementDescription,
      impact: t.japanMarketAnalysis.challenges.impactHigh,
      solution: t.japanMarketAnalysis.challenges.managementSolution
    },
    {
      title: t.japanMarketAnalysis.challenges.culturalAdaptation,
      description: t.japanMarketAnalysis.challenges.culturalDescription,
      impact: t.japanMarketAnalysis.challenges.impactMedium,
      solution: t.japanMarketAnalysis.challenges.culturalSolution
    },
    {
      title: t.japanMarketAnalysis.challenges.featureFragmentation,
      description: t.japanMarketAnalysis.challenges.fragmentationDescription,
      impact: t.japanMarketAnalysis.challenges.impactMedium,
      solution: t.japanMarketAnalysis.challenges.fragmentationSolution
    }
  ]

  const getImpactColor = (impact: string) => {
    const colors = {
      [t.japanMarketAnalysis.challenges.impactHigh]: 'bg-rose-50 text-rose-600',
      [t.japanMarketAnalysis.challenges.impactMedium]: 'bg-blue-50 text-blue-600',
      [t.japanMarketAnalysis.challenges.impactLow]: 'bg-gray-50 text-gray-600'
    }
    return colors[impact as keyof typeof colors] || colors[t.japanMarketAnalysis.challenges.impactMedium]
  }

  return (
    <section id="market-analysis" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.japanMarketAnalysis.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.japanMarketAnalysis.subtitle}
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
            {t.japanMarketAnalysis.tabs.market}
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'benefits' ? 'bg-white text-primary-600 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.japanMarketAnalysis.tabs.benefits}
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'challenges' ? 'bg-white text-primary-600 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.japanMarketAnalysis.tabs.challenges}
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
                      <span className="text-sm text-gray-600">{t.japanMarketAnalysis.marketStats.current}</span>
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

            {/* Pricing Strategy Analysis */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{t.japanMarketAnalysis.pricing.title}</h3>
              
              {/* Price Segments */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {pricingComparison.map((pricing, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg p-6 text-center border-2 ${
                      pricing.isOpportunity 
                        ? 'bg-blue-50 border-blue-200 relative' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {pricing.isOpportunity && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{t.japanMarketAnalysis.pricing.opportunityWindow}</span>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      pricing.isOpportunity ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <span className={`text-xl ${pricing.isOpportunity ? 'text-blue-600' : 'text-gray-600'}`}>
                        {pricing.isOpportunity ? '🎯' : index === 0 ? '🌍' : '🏢'}
                      </span>
                    </div>
                    
                    <h4 className={`font-semibold mb-2 ${
                      pricing.isOpportunity ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {pricing.type}
                    </h4>
                    
                    <div className={`text-2xl font-bold mb-2 ${
                      pricing.isOpportunity ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {pricing.range}
                    </div>
                    
                    <div className={`text-sm mb-3 ${
                      pricing.isOpportunity ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {pricing.period}
                    </div>
                    
                    <div className={`text-xs px-2 py-1 rounded inline-block ${
                      pricing.isOpportunity 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {pricing.status}
                    </div>
                    
                    <p className={`text-xs mt-3 ${
                      pricing.isOpportunity ? 'text-blue-700' : 'text-gray-500'
                    }`}>
                      {pricing.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Opportunity Statement */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-900">{t.japanMarketAnalysis.pricing.coreOpportunity}</span>
                </div>
                <p className="text-blue-800 text-sm">
                  {t.japanMarketAnalysis.pricing.opportunityDescription}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.japanMarketAnalysis.benefits.legalBenefitsTitle}</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800">
                  <strong>{t.japanMarketAnalysis.benefits.keyDataLabel}</strong>{t.japanMarketAnalysis.benefits.keyDataText}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {legalBenefits.map((benefit, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-xs text-gray-500">{t.japanMarketAnalysis.benefits.salaryRatio}: {benefit.cost}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Benefits Ranking */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.japanMarketAnalysis.benefits.popularBenefitsTitle}</h3>
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
                                benefit.cost === 'low' ? 'bg-green-50 text-green-600' :
                                benefit.cost === 'medium' ? 'bg-blue-50 text-blue-600' :
                                'bg-rose-50 text-rose-600'
                              }`}>
                                {benefit.cost === 'low' ? t.japanMarketAnalysis.benefits.lowCost : benefit.cost === 'medium' ? t.japanMarketAnalysis.benefits.mediumCost : t.japanMarketAnalysis.benefits.highCost}
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
                          <h5 className="font-medium text-gray-900 mb-2">{t.japanMarketAnalysis.benefits.examples}</h5>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {benefit.examples.map((example, exIndex) => (
                              <span key={exIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {example}
                              </span>
                            ))}
                          </div>
                          <h5 className="font-medium text-gray-900 mb-2">{t.japanMarketAnalysis.benefits.popularityReason}</h5>
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
                    {t.japanMarketAnalysis.challenges.impactLabel}: {challenge.impact}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">{challenge.description}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2 text-center">{t.japanMarketAnalysis.challenges.solutionLabel}</h4>
                  <p className="text-blue-600 text-sm text-center">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}