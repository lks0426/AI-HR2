'use client'

import { Lightbulb, Target, Users, TrendingUp, Shield, Rocket } from 'lucide-react'
import { keyInsights } from '@/data/marketData'
import { useTranslation } from '@/i18n/config'

export default function Strategy() {
  const { t } = useTranslation()
  const strategies = [
    {
      icon: Target,
      ...t.strategy.strategies.positioning,
      priority: 'high',
      timeline: t.strategy.timeline.months3to6,
      investment: t.strategy.investmentLevel.medium
    },
    {
      icon: Rocket,
      ...t.strategy.strategies.innovation,
      priority: 'high',
      timeline: t.strategy.timeline.months6to12,
      investment: t.strategy.investmentLevel.high
    },
    {
      icon: Users,
      ...t.strategy.strategies.customerAcquisition,
      priority: 'medium',
      timeline: t.strategy.timeline.months9to15,
      investment: t.strategy.investmentLevel.medium
    },
    {
      icon: TrendingUp,
      ...t.strategy.strategies.technology,
      priority: 'high',
      timeline: t.strategy.timeline.continuous,
      investment: t.strategy.investmentLevel.high
    },
    {
      icon: Shield,
      ...t.strategy.strategies.riskManagement,
      priority: 'medium',
      timeline: t.strategy.timeline.months6to9,
      investment: t.strategy.investmentLevel.medium
    },
    {
      icon: Lightbulb,
      ...t.strategy.strategies.ecosystem,
      priority: 'medium',
      timeline: t.strategy.timeline.months12to18,
      investment: t.strategy.investmentLevel.medium
    }
  ]

  const getPriorityColor = (priority: string) => {
    const colors = {
      'high': 'bg-rose-50 text-rose-600',
      'medium': 'bg-blue-50 text-blue-600',
      'low': 'bg-green-50 text-green-600'
    }
    return colors[priority as keyof typeof colors] || colors.medium
  }

  const getPriorityText = (priority: string) => {
    const texts = {
      'high': t.strategy.priority.high,
      'medium': t.strategy.priority.medium,
      'low': t.strategy.priority.low
    }
    return texts[priority as keyof typeof texts] || texts.medium
  }

  const getInvestmentColor = (investment: string) => {
    const colors = {
      [t.strategy.investmentLevel.high]: 'text-rose-600',
      [t.strategy.investmentLevel.medium]: 'text-blue-600',
      [t.strategy.investmentLevel.low]: 'text-green-600'
    }
    return colors[investment as keyof typeof colors] || colors[t.strategy.investmentLevel.medium]
  }

  return (
    <section id="strategy" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.strategy.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.strategy.subtitle}
          </p>
        </div>

        {/* Strategic Framework */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.strategy.framework.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.framework.shortTerm.title}</h4>
              <p className="text-sm text-gray-600">
                {t.strategy.framework.shortTerm.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.framework.mediumTerm.title}</h4>
              <p className="text-sm text-gray-600">
                {t.strategy.framework.mediumTerm.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.framework.longTerm.title}</h4>
              <p className="text-sm text-gray-600">
                {t.strategy.framework.longTerm.description}
              </p>
            </div>
          </div>
        </div>

        {/* Strategy Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {strategies.map((strategy, index) => (
            <div key={index} className="card p-8">
              <div className="text-center mb-6">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <strategy.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {strategy.description}
                </p>
              </div>

              {/* Action Items */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">{t.strategy.strategies.keyActions}</h4>
                <ul className="space-y-2">
                  {strategy.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy Metadata */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(strategy.priority)}`}>
                    {getPriorityText(strategy.priority)}
                  </span>
                  <span className="text-sm text-gray-600">
                    {strategy.timeline}
                  </span>
                </div>
                <span className={`text-sm font-medium ${getInvestmentColor(strategy.investment)}`}>
                  {t.strategy.strategies.investment}: {strategy.investment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Roadmap */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.strategy.roadmap.title}</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.roadmap.phase1.title}</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {t.strategy.roadmap.phase1.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.roadmap.phase2.title}</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {t.strategy.roadmap.phase2.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">{t.strategy.roadmap.phase3.title}</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {t.strategy.roadmap.phase3.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.strategy.metrics.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">{t.strategy.metrics.business.title}</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                {t.strategy.metrics.business.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">{t.strategy.metrics.product.title}</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                {t.strategy.metrics.product.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">{t.strategy.metrics.market.title}</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                {t.strategy.metrics.market.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}