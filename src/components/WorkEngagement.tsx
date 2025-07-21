'use client'

import { useState } from 'react'
import { Heart, Zap, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { workEngagementDimensions } from '@/data/japanMarketData'

export default function WorkEngagement() {
  const [activeDimension, setActiveDimension] = useState(0)

  const dimensions = workEngagementDimensions.map((dim, index) => ({
    ...dim,
    icon: index === 0 ? Zap : index === 1 ? Heart : Target,
    color: index === 0 ? 'blue' : index === 1 ? 'red' : 'purple'
  }))

  const japanStats = [
    {
      metric: '积极敬业员工',
      value: '6%',
      description: '全球最低水平',
      status: 'critical'
    },
    {
      metric: '积极疏离员工',
      value: '24%',
      description: '消极比例4:1',
      status: 'warning'
    },
    {
      metric: '经济损失',
      value: '¥86万亿',
      description: '每年因低投入度造成',
      status: 'critical'
    }
  ]

  const jdrModel = {
    demands: [
      '工作负荷过重',
      '时间压力',
      '人际冲突',
      '角色模糊',
      '缺乏资源'
    ],
    resources: [
      '自主权和控制感',
      '上级支持和反馈',
      '职业发展机会',
      '工作-生活平衡',
      '福利制度支持'
    ]
  }

  const culturalChallenges = [
    {
      challenge: '"本音"与"建前"',
      description: '员工真实感受与公开表达的差异',
      solution: 'AI情感分析+多模态测量'
    },
    {
      challenge: '中性回答倾向',
      description: '避免直接批评的文化特征',
      solution: '间接测量方法+行为数据分析'
    },
    {
      challenge: '群体和谐优先',
      description: '个人意见服从集体利益',
      solution: '匿名化反馈+群体干预策略'
    }
  ]

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
            工作投入度：科学的员工幸福度衡量标准
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            基于Utrecht工作投入度量表(UWES)和JD-R模型的科学框架，将抽象的"幸福"转化为可测量、可管理的指标
          </p>
        </div>

        {/* Japan Engagement Crisis */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            日本员工投入度危机
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
              <strong>盖洛普数据显示：</strong>日本仅有6%的员工积极敬业，远低于全球平均水平，急需系统性解决方案
            </p>
          </div>
        </div>

        {/* Work Engagement Dimensions */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">工作投入度三维度模型</h3>
          
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
              工作要求 (Job Demands)
            </h3>
            <p className="text-gray-600 mb-4">过高的工作要求会消耗员工精力，导致压力和职业倦怠</p>
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
              工作资源 (Job Resources)
            </h3>
            <p className="text-gray-600 mb-4">充足的工作资源能满足心理需求，激发内在动机</p>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6">日本文化适应挑战与解决方案</h3>
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
                  <h5 className="font-medium text-blue-900 mb-1 text-center">解决方案</h5>
                  <p className="text-blue-800 text-xs text-center">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Foundation */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">科学测量方法</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">UWES</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">标准化问卷</h4>
              <p className="text-sm text-gray-600">Utrecht工作投入度量表，成熟的日语版本</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">生理监测</h4>
              <p className="text-sm text-gray-600">心率变异性(HRV)客观测量压力水平</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">行为分析</h4>
              <p className="text-sm text-gray-600">加班时长、休假模式等勤怠数据分析</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI情感分析</h4>
              <p className="text-sm text-gray-600">NLP技术分析文本捕捉真实"本音"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}