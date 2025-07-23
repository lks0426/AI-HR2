'use client'

import { Target, Clock, DollarSign, AlertCircle, CheckCircle } from 'lucide-react'
import { opportunities } from '@/data/marketData'
import { useTranslation } from '@/i18n/config'

export default function Opportunities() {
  const { t } = useTranslation()
  
  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Low': 'bg-emerald-50 text-emerald-700',
      'Medium': 'bg-amber-50 text-amber-700',
      'High': 'bg-blue-50 text-blue-700'
    }
    return colors[difficulty as keyof typeof colors] || colors.Medium
  }

  const getDifficultyIcon = (difficulty: string) => {
    if (difficulty === 'Low') return CheckCircle
    if (difficulty === 'High') return AlertCircle
    return Target
  }

  const totalMarketPotential = opportunities.reduce((sum, opp) => sum + opp.market_potential, 0)

  return (
    <section id="opportunities" className="py-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.opportunities.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.opportunities.subtitle} ${totalMarketPotential.toFixed(1)}B
          </p>
        </div>

        {/* Opportunity Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{opportunities.length}</div>
            <div className="text-sm text-gray-600">{t.opportunities.summary.keyOpportunities}</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">${totalMarketPotential.toFixed(1)}B</div>
            <div className="text-sm text-gray-600">{t.opportunities.summary.totalMarketPotential}</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-gray-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">12-18</div>
            <div className="text-sm text-gray-600">{t.opportunities.summary.averageImplementation}</div>
          </div>
          
          <div className="card p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {opportunities.filter(opp => opp.difficulty === 'Low').length}
            </div>
            <div className="text-sm text-gray-600">{t.opportunities.summary.lowDifficultyOpportunities}</div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {opportunities.map((opportunity, index) => {
            const DifficultyIcon = getDifficultyIcon(opportunity.difficulty)
            
            return (
              <div key={index} className="card p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {opportunity.area}
                  </h3>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary-600">
                      ${opportunity.market_potential}B
                    </div>
                    <div className="text-sm text-gray-600">{t.opportunities.summary.marketPotential}</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{opportunity.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <DifficultyIcon className="h-4 w-4" />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(opportunity.difficulty)}`}>
                      {opportunity.difficulty === 'Low' ? t.opportunities.difficulty.low : 
                       opportunity.difficulty === 'Medium' ? t.opportunities.difficulty.medium : t.opportunities.difficulty.high}
                    </span>
                  </div>
                </div>

                {/* Progress Bar for Market Potential */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{t.opportunities.marketPotentialScore}</span>
                    <span className="text-sm text-gray-600">{((opportunity.market_potential / 15) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                      style={{ width: `${Math.min((opportunity.market_potential / 15) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Investment Priority Matrix */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.opportunities.priorityMatrix.title}</h3>
          <p className="text-gray-600 mb-8">
            {t.opportunities.priorityMatrix.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* High Priority */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                {t.opportunities.priorityMatrix.highPriority.title} {t.opportunities.priorityMatrix.highPriority.subtitle}
              </h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => opp.difficulty === 'Low' && opp.market_potential >= 5)
                  .map((opp, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-green-200">
                      <div className="font-medium text-gray-900 text-sm">{opp.area}</div>
                      <div className="text-xs text-gray-600">${opp.market_potential}B • {opp.timeline}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Medium Priority */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                {t.opportunities.priorityMatrix.mediumPriority.title} {t.opportunities.priorityMatrix.mediumPriority.subtitle}
              </h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => 
                    (opp.difficulty === 'Medium') || 
                    (opp.difficulty === 'Low' && opp.market_potential < 5)
                  )
                  .map((opp, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-yellow-200">
                      <div className="font-medium text-gray-900 text-sm">{opp.area}</div>
                      <div className="text-xs text-gray-600">${opp.market_potential}B • {opp.timeline}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Low Priority */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                {t.opportunities.priorityMatrix.lowPriority.title} {t.opportunities.priorityMatrix.lowPriority.subtitle}
              </h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => opp.difficulty === 'High')
                  .map((opp, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-orange-200">
                      <div className="font-medium text-gray-900 text-sm">{opp.area}</div>
                      <div className="text-xs text-gray-600">${opp.market_potential}B • {opp.timeline}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}