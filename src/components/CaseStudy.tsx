'use client'

import { useState } from 'react'
import { TrendingDown, Users, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
import { cybozuCaseStudy } from '@/data/japanMarketData'

export default function CaseStudy() {
  const [activeMetric, setActiveMetric] = useState(0)

  const transformationSteps = [
    {
      phase: '危机识别',
      year: '2005年',
      description: '离职率高达28%，面临人才流失危机',
      key: '意识到问题的严重性',
      color: 'red'
    },
    {
      phase: '理念转变',
      year: '2006-2008年',
      description: '从追求"公平"转向追求"个人幸福"',
      key: '"100人100种工作方式"理念确立',
      color: 'yellow'
    },
    {
      phase: '制度重构',
      year: '2009-2012年',
      description: '引入极具弹性的工作制度和透明文化',
      key: '员工获得前所未有的自主权',
      color: 'blue'
    },
    {
      phase: '成果显现',
      year: '2013年至今',
      description: '离职率稳定在4%，业务重回增长轨道',
      key: '员工幸福与企业发展双赢',
      color: 'green'
    }
  ]

  const coreChanges = [
    {
      category: '工作制度',
      before: '统一的朝九晚五工作时间',
      after: '100%灵活的工作时间和地点',
      impact: '员工可根据个人情况自由选择工作方式'
    },
    {
      category: '企业文化',
      before: '等级森严，信息不透明',
      after: '完全透明，员工有"提问的责任"',
      impact: '建立了基于信任的工作环境'
    },
    {
      category: '副业政策',
      before: '严格禁止任何副业',
      after: '鼓励并支持员工发展副业',
      impact: '员工个人发展与公司成长并行'
    },
    {
      category: '决策参与',
      before: '自上而下的单向决策',
      after: '员工深度参与公司重要决策',
      impact: '提升员工归属感和责任感'
    }
  ]

  const getColorClass = (color: string) => {
    const colors = {
      red: 'bg-red-50 border-red-200 text-red-700',
      yellow: 'bg-amber-50 border-amber-200 text-amber-700',
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      green: 'bg-emerald-50 border-emerald-200 text-emerald-700'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const keyLessons = [
    {
      title: '员工自主权是最高级的福利',
      description: '在JD-R模型中，"自主权"被证实是最强大的工作资源之一。Cybozu的成功验证了这一理论。',
      application: 'AI系统应支持和管理工作方式选择，而非仅限于物质福利推荐'
    },
    {
      title: '文化变革比制度变革更重要',
      description: '技术和制度只是工具，真正的转变需要从企业文化和理念层面开始。',
      application: '解决方案必须考虑组织文化变革，而非仅仅是技术实施'
    },
    {
      title: '信任是员工投入度的基础',
      description: '透明的信息共享和员工参与决策建立了深层次的信任关系。',
      application: 'AI推荐系统需要建立透明度和可解释性，获得员工信任'
    },
    {
      title: '个性化胜过标准化',
      description: '"100人100种工作方式"体现了个性化管理的力量。',
      application: 'AI个性化推荐的核心价值得到实践验证'
    }
  ]

  return (
    <section id="case-study" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            成功案例研究：Cybozu的幸福度转型
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            日本软件公司Cybozu如何通过"100人100种工作方式"理念，将离职率从28%降至4%的经典案例分析
          </p>
        </div>

        {/* Key Metrics */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">转型成果数据对比</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>

        {/* Transformation Timeline */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">转型历程时间线</h3>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6">核心变革对比</h3>
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
                      <span className="text-xs text-gray-500">变革前：</span>
                      <p className="text-sm text-gray-600">{change.before}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1">
                      <span className="text-xs text-blue-600">变革后：</span>
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
            关键启示与AI解决方案应用
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
                  <h5 className="font-medium text-primary-900 mb-1">AI解决方案应用</h5>
                  <p className="text-primary-800 text-xs">{lesson.application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Formula */}
        <div className="card p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Cybozu成功公式</h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-lg p-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 text-lg font-semibold text-gray-900">
                <span className="bg-slate-50 px-4 py-2 rounded-lg text-slate-700">员工自主权</span>
                <span className="text-gray-400">+</span>
                <span className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700">透明文化</span>
                <span className="text-gray-400">+</span>
                <span className="bg-indigo-50 px-4 py-2 rounded-lg text-indigo-700">个性化制度</span>
                <span className="text-gray-400">=</span>
                <span className="bg-emerald-50 px-4 py-2 rounded-lg text-emerald-700">高投入度</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                这一成功公式完美映证了JD-R模型理论：通过提供充足的工作资源（自主权、支持、发展机会），
                有效平衡工作要求，从而提升员工工作投入度。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}