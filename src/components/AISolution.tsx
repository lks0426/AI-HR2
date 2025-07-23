'use client'

import { useState } from 'react'
import { Brain, Database, Target, Users, Zap, Shield, ChevronRight, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/i18n/config'

export default function AISolution() {
  const [activeModule, setActiveModule] = useState<'measurement' | 'prediction' | 'recommendation' | 'integration'>('measurement')
  const { t } = useTranslation()

  const systemArchitecture = {
    measurement: {
      title: t.solution.modules.measurement.title,
      icon: Database,
      description: t.solution.modules.measurement.description,
      features: t.solution.modules.measurement.features,
      technologies: t.solution.modules.measurement.technologies
    },
    prediction: {
      title: t.solution.modules.prediction.title,
      icon: Brain,
      description: t.solution.modules.prediction.description,
      features: t.solution.modules.prediction.features,
      technologies: t.solution.modules.prediction.technologies
    },
    recommendation: {
      title: t.solution.modules.recommendation.title,
      icon: Target,
      description: t.solution.modules.recommendation.description,
      features: t.solution.modules.recommendation.features,
      technologies: t.solution.modules.recommendation.technologies
    },
    integration: {
      title: t.solution.modules.integration.title,
      icon: Users,
      description: t.solution.modules.integration.description,
      features: t.solution.modules.integration.features,
      technologies: t.solution.modules.integration.technologies
    }
  }

  const implementationPhases = [
    {
      phase: t.solution.phases.phase1.title,
      duration: t.solution.phases.phase1.duration,
      focus: t.solution.phases.phase1.focus,
      deliverables: t.solution.phases.phase1.deliverables,
      color: 'blue'
    },
    {
      phase: t.solution.phases.phase2.title,
      duration: t.solution.phases.phase2.duration,
      focus: t.solution.phases.phase2.focus,
      deliverables: t.solution.phases.phase2.deliverables,
      color: 'purple'
    },
    {
      phase: t.solution.phases.phase3.title,
      duration: t.solution.phases.phase3.duration,
      focus: t.solution.phases.phase3.focus,
      deliverables: t.solution.phases.phase3.deliverables,
      color: 'green'
    },
    {
      phase: t.solution.phases.phase4.title,
      duration: t.solution.phases.phase4.duration,
      focus: t.solution.phases.phase4.focus,
      deliverables: t.solution.phases.phase4.deliverables,
      color: 'orange'
    }
  ]

  const aiFeatures = [
    {
      feature: t.solution.aiFeatures.textMining.feature,
      description: t.solution.aiFeatures.textMining.description,
      benefit: t.solution.aiFeatures.textMining.benefit,
      accuracy: t.solution.aiFeatures.textMining.accuracy
    },
    {
      feature: t.solution.aiFeatures.turnoverPrediction.feature,
      description: t.solution.aiFeatures.turnoverPrediction.description,
      benefit: t.solution.aiFeatures.turnoverPrediction.benefit,
      accuracy: t.solution.aiFeatures.turnoverPrediction.accuracy
    },
    {
      feature: t.solution.aiFeatures.personalizedRecommendation.feature,
      description: t.solution.aiFeatures.personalizedRecommendation.description,
      benefit: t.solution.aiFeatures.personalizedRecommendation.benefit,
      accuracy: t.solution.aiFeatures.personalizedRecommendation.accuracy
    },
    {
      feature: t.solution.aiFeatures.teamDynamics.feature,
      description: t.solution.aiFeatures.teamDynamics.description,
      benefit: t.solution.aiFeatures.teamDynamics.benefit,
      accuracy: t.solution.aiFeatures.teamDynamics.accuracy
    }
  ]

  const privacyCompliance = [
    {
      aspect: t.solution.privacy.dataMinimization.aspect,
      description: t.solution.privacy.dataMinimization.description,
      implementation: t.solution.privacy.dataMinimization.implementation
    },
    {
      aspect: t.solution.privacy.transparency.aspect,
      description: t.solution.privacy.transparency.description,
      implementation: t.solution.privacy.transparency.implementation
    },
    {
      aspect: t.solution.privacy.technicalProtection.aspect,
      description: t.solution.privacy.technicalProtection.description,
      implementation: t.solution.privacy.technicalProtection.implementation
    },
    {
      aspect: t.solution.privacy.compliance.aspect,
      description: t.solution.privacy.compliance.description,
      implementation: t.solution.privacy.compliance.implementation
    }
  ]

  const getModuleColor = (module: string) => {
    const colors = {
      measurement: 'border-blue-500 bg-blue-50',
      prediction: 'border-purple-500 bg-purple-50',
      recommendation: 'border-green-500 bg-green-50',
      integration: 'border-orange-500 bg-orange-50'
    }
    return colors[module as keyof typeof colors] || colors.measurement
  }

  const getPhaseColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      green: 'bg-green-100 text-green-800',
      orange: 'bg-orange-100 text-orange-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="solution" className="py-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.solution.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{t.solution.corePhilosophy}</h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-primary-300 rounded-lg p-6">
            <p className="text-center text-lg text-gray-700 leading-relaxed">
              {t.solution.philosophyDescription}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">{t.solution.systemArchitecture}</h3>
          
          {/* Module Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {Object.entries(systemArchitecture).map(([key, module]) => {
              const IconComponent = module.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveModule(key as any)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    activeModule === key 
                      ? getModuleColor(key)
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm font-medium text-center">
                    {(module as any).shortTitle || module.title.split('：')[0] || module.title.split(':')[0]}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Module Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {(() => {
              const module = systemArchitecture[activeModule]
              const IconComponent = module.icon
              return (
                <>
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600 mr-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{module.title}</h4>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">{t.common.coreFeatures}</h5>
                      <ul className="space-y-2">
                        {module.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">{t.common.technologies}</h5>
                      <div className="flex flex-wrap gap-2">
                        {module.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>

        {/* AI Features */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.solution.aiCapabilities}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.feature}</h4>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {item.accuracy}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{item.description}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-medium text-blue-900 mb-1 text-center">{t.common.businessValue}</h5>
                  <p className="text-blue-800 text-xs text-center">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">{t.solution.implementationPlan}</h3>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getPhaseColor(phase.color)}`}>
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    <span className="text-sm text-gray-500">{phase.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{t.common.focus}：{phase.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <span key={delIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
                {index < implementationPhases.length - 1 && (
                  <ChevronRight className="h-5 w-5 text-gray-400 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Compliance */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Shield className="h-6 w-6 text-green-600 mr-3" />
            {t.solution.privacyCompliance}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyCompliance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.aspect}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs text-gray-700 font-medium">{item.implementation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
