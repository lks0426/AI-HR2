'use client'

import { useState } from 'react'
import { Heart, Zap, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { workEngagementDimensions } from '@/data/japanMarketData'
import { useTranslation } from '@/i18n/config'

export default function WorkEngagement() {
  const { t } = useTranslation()
  const [activeDimension, setActiveDimension] = useState(0)

  const dimensions = workEngagementDimensions.map((dim, index) => ({
    ...dim,
    icon: index === 0 ? Zap : index === 1 ? Heart : Target,
    color: index === 0 ? 'blue' : index === 1 ? 'red' : 'purple'
  }))

  const japanStats = [
    {
      metric: t.workEngagement.japanCrisis.stats.activeEngaged,
      value: '6%',
      description: t.workEngagement.japanCrisis.stats.activeEngagedDesc,
      status: 'critical'
    },
    {
      metric: t.workEngagement.japanCrisis.stats.activeDisengaged,
      value: '24%',
      description: t.workEngagement.japanCrisis.stats.activeDisengagedDesc,
      status: 'warning'
    },
    {
      metric: t.workEngagement.japanCrisis.stats.economicLoss,
      value: t.workEngagement.japanCrisis.stats.economicLossValue,
      description: t.workEngagement.japanCrisis.stats.economicLossDesc,
      status: 'critical'
    }
  ]

  const jdrModel = {
    demands: t.workEngagement.jdrModel.demands.items,
    resources: t.workEngagement.jdrModel.resources.items
  }

  const culturalChallenges = t.workEngagement.culturalChallenges.challenges

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getStatusColor = (status: string) => {
    const colors = {
      critical: 'bg-blue-50 text-blue-700',
      warning: 'bg-amber-50 text-amber-700',
      good: 'bg-emerald-50 text-emerald-700'
    }
    return colors[status as keyof typeof colors] || colors.warning
  }

  return (
    <section id="work-engagement" className="py-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.workEngagement.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t.workEngagement.subtitle}
          </p>
        </div>

        {/* Japan Engagement Crisis */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            {t.workEngagement.japanCrisis.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {japanStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getStatusColor(stat.status)}`}>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{stat.metric}</h4>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>{t.workEngagement.japanCrisis.gallupNote}</strong>{t.workEngagement.japanCrisis.gallupDescription}
            </p>
          </div>
        </div>

        {/* Work Engagement Dimensions */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.workEngagement.dimensions.title}</h3>
          
          {/* Dimension Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {dimensions.map((dim, index) => (
              <button
                key={index}
                onClick={() => setActiveDimension(index)}
                className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                  activeDimension === index 
                    ? getColorClass(dim.color)
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <dim.icon className="h-4 w-4 mr-2" />
                {dim.dimension}
              </button>
            ))}
          </div>

          {/* Active Dimension Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              {dimensions[activeDimension].dimension}
            </h4>
            <p className="text-gray-700 mb-4">{dimensions[activeDimension].description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {dimensions[activeDimension].indicators.map((indicator, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* JD-R Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-red-600 mr-2" />
              {t.workEngagement.jdrModel.demands.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.workEngagement.jdrModel.demands.description}</p>
            <ul className="space-y-3">
              {jdrModel.demands.map((demand, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  {demand}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Heart className="h-6 w-6 text-green-600 mr-2" />
              {t.workEngagement.jdrModel.resources.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.workEngagement.jdrModel.resources.description}</p>
            <ul className="space-y-3">
              {jdrModel.resources.map((resource, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cultural Adaptation */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.workEngagement.culturalChallenges.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalChallenges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 text-xl">🎌</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.challenge}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{item.description}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-medium text-blue-900 mb-1 text-center">{t.workEngagement.culturalChallenges.solutionLabel}</h5>
                  <p className="text-blue-800 text-xs text-center">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Foundation */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.workEngagement.scientificMethods.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.workEngagement.scientificMethods.methods.map((method, index) => {
              const icons = [null, Heart, TrendingUp, Target]
              const IconComponent = icons[index]
              const colors = ['blue', 'green', 'purple', 'orange']
              const bgColor = `bg-${colors[index]}-100`
              const textColor = `text-${colors[index]}-600`
              
              return (
                <div key={index} className="text-center">
                  <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {index === 0 ? (
                      <span className={`${textColor} font-bold`}>UWES</span>
                    ) : IconComponent ? (
                      <IconComponent className={`h-8 w-8 ${textColor}`} />
                    ) : null}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}