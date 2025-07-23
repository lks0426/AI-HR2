'use client'

import { useState } from 'react'
import { TrendingDown, Users, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
import { cybozuCaseStudy } from '@/data/japanMarketData'
import { useTranslation } from '@/i18n/config'

export default function CaseStudy() {
  const { t } = useTranslation()
  const [activeMetric, setActiveMetric] = useState(0)

  const transformationSteps = t.caseStudy.transformationSteps.map((step, index) => ({
    ...step,
    color: ['red', 'yellow', 'blue', 'green'][index]
  }))

  const coreChanges = t.caseStudy.coreChangesList

  const getColorClass = (color: string) => {
    const colors = {
      red: 'bg-red-50 border-red-200 text-red-700',
      yellow: 'bg-amber-50 border-amber-200 text-amber-700',
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      green: 'bg-emerald-50 border-emerald-200 text-emerald-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const keyLessons = t.caseStudy.lessons

  return (
    <section id="case-study" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.caseStudy.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t.caseStudy.subtitle}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{t.caseStudy.metricsTitle}</h3>
          
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {cybozuCaseStudy.map((metric, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  activeMetric === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveMetric(index)}
              >
                <div className={`card p-6 text-center h-full flex flex-col ${
                  activeMetric === index ? 'ring-2 ring-primary-500' : ''
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-3">{metric.metric}</h4>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-gray-500 font-medium">{metric.before}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <span className="text-blue-600 font-medium">{metric.after}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium mt-auto">
                    {metric.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-4">
            {cybozuCaseStudy.map((metric, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  activeMetric === index ? 'transform scale-[1.02]' : ''
                }`}
                onClick={() => setActiveMetric(index)}
              >
                <div className={`card p-4 ${
                  activeMetric === index ? 'ring-2 ring-primary-500' : ''
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-base">{metric.metric}</h4>
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {metric.improvement}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500 text-sm font-medium">{t.caseStudy.beforeAfter.before}</span>
                      <span className="text-gray-700 text-sm flex-1">{metric.before}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 self-start ml-12" />
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-600 text-sm font-medium">{t.caseStudy.beforeAfter.after}</span>
                      <span className="text-blue-700 text-sm font-semibold flex-1">{metric.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Timeline */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">{t.caseStudy.transformationTimeline}</h3>
          <div className="space-y-6">
            {transformationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClass(step.color)}`}>
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{step.phase}</h4>
                    <span className="text-sm text-gray-500">{step.year}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  <div className="bg-gray-50 border-l-4 border-primary-500 pl-4 py-2">
                    <p className="text-sm font-medium text-primary-800">{step.key}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Changes */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.caseStudy.coreChanges}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreChanges.map((change, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                  {change.category}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-500">{t.caseStudy.beforeAfter.before}</span>
                      <p className="text-sm text-gray-600">{change.before}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1">
                      <span className="text-xs text-blue-600">{t.caseStudy.beforeAfter.after}</span>
                      <p className="text-sm text-blue-700 font-medium">{change.after}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">{change.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Lessons */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="h-6 w-6 text-yellow-600 mr-3" />
            {t.caseStudy.keyLessons}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyLessons.map((lesson, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  {lesson.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
                <div className="bg-primary-50 border border-primary-200 rounded p-3">
                  <h5 className="font-medium text-primary-900 mb-1">{t.caseStudy.aiApplication}</h5>
                  <p className="text-primary-800 text-xs">{lesson.application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Formula */}
        <div className="card p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.caseStudy.successFormula}</h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-lg p-6">
            <div className="text-center">
              {/* Desktop version */}
              <div className="hidden md:flex items-center justify-center space-x-4 text-lg font-semibold text-gray-900">
                <span className="bg-slate-50 px-4 py-2 rounded-lg text-slate-700">{t.caseStudy.formula.autonomy}</span>
                <span className="text-gray-400">+</span>
                <span className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700">{t.caseStudy.formula.transparency}</span>
                <span className="text-gray-400">+</span>
                <span className="bg-indigo-50 px-4 py-2 rounded-lg text-indigo-700">{t.caseStudy.formula.personalization}</span>
                <span className="text-gray-400">=</span>
                <span className="bg-emerald-50 px-4 py-2 rounded-lg text-emerald-700">{t.caseStudy.formula.engagement}</span>
              </div>
              
              {/* Mobile version */}
              <div className="md:hidden space-y-3">
                <div className="flex flex-col space-y-2">
                  <span className="bg-slate-50 px-4 py-3 rounded-lg text-slate-700 text-base font-semibold">{t.caseStudy.formula.autonomy}</span>
                  <span className="text-gray-400 text-2xl">+</span>
                  <span className="bg-blue-50 px-4 py-3 rounded-lg text-blue-700 text-base font-semibold">{t.caseStudy.formula.transparency}</span>
                  <span className="text-gray-400 text-2xl">+</span>
                  <span className="bg-indigo-50 px-4 py-3 rounded-lg text-indigo-700 text-base font-semibold">{t.caseStudy.formula.personalization}</span>
                  <span className="text-gray-400 text-2xl">=</span>
                  <span className="bg-emerald-50 px-4 py-3 rounded-lg text-emerald-700 text-base font-semibold">{t.caseStudy.formula.engagement}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-6 text-sm leading-relaxed px-2">
                {t.caseStudy.formula.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}