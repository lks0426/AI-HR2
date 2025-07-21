'use client'

import { useState } from 'react'
import { Brain, Database, Target, Users, Zap, Shield, ChevronRight, CheckCircle } from 'lucide-react'

export default function AISolution() {
  const [activeModule, setActiveModule] = useState<'measurement' | 'prediction' | 'recommendation' | 'integration'>('measurement')

  const systemArchitecture = {
    measurement: {
      title: '测量引擎：多模态员工状态监测',
      icon: Database,
      description: '结合传统调查与AI技术，准确捕捉员工真实状态',
      features: [
        'UWES工作投入度量表(17项、9项、3项版本)',
        '高频脉冲调查(Pulse Survey)',
        'NLP情感分析处理自由文本评论',
        '心率变异性(HRV)生理监测',
        '勤怠数据行为分析',
        '文化适应性设计(应对"本音"与"建前")'
      ],
      technologies: ['自然语言处理', '情感计算', '生物识别', '统计分析']
    },
    prediction: {
      title: 'AI预测核心：智能风险预警系统',
      icon: Brain,
      description: '基于机器学习的离职预测和幸福度趋势分析',
      features: [
        '离职预测模型(随机森林、LightGBM)',
        '多维特征工程(个人信息、工作角色、绩效薪酬)',
        '情绪趋势分析和异常检测',
        '团队氛围传染效应建模',
        '实时风险评分和预警',
        '预测准确率>85%'
      ],
      technologies: ['机器学习', '深度学习', '时间序列分析', '异常检测']
    },
    recommendation: {
      title: '个性化推荐：JD-R模型驱动的资源匹配',
      icon: Target,
      description: '基于JD-R模型的智能工作资源推荐系统',
      features: [
        '个人工作要求-资源平衡分析',
        'AI驱动的福利资源推荐',
        '学习发展路径个性化定制',
        '工作方式优化建议',
        '团队干预措施推荐',
        '反馈闭环持续优化'
      ],
      technologies: ['推荐算法', '协同过滤', '强化学习', '知识图谱']
    },
    integration: {
      title: '集成平台：企业级数据中枢',
      icon: Users,
      description: '无缝集成现有HR系统，提供统一管理视图',
      features: [
        'HRIS系统深度集成',
        '实时数据同步和处理',
        '管理者仪表盘和分析视图',
        '移动端员工门户',
        '隐私保护和合规管理',
        'API开放生态系统'
      ],
      technologies: ['云原生架构', '微服务', 'API网关', '数据湖']
    }
  }

  const implementationPhases = [
    {
      phase: '第1阶段：基础建设',
      duration: '2025年9-11月',
      focus: '核心基础设施',
      deliverables: ['数据管道建设', '基础仪表板', 'HRIS集成', '安全框架'],
      color: 'blue'
    },
    {
      phase: '第2阶段：AI模型开发',
      duration: '2025年12月-2026年1月',
      focus: '智能算法实现',
      deliverables: ['离职预测模型', '推荐引擎', 'NLP情感分析', '异常检测'],
      color: 'purple'
    },
    {
      phase: '第3阶段：用户界面',
      duration: '2026年2-3月',
      focus: '用户体验优化',
      deliverables: ['移动应用', '增强仪表板', '用户培训', '游戏化元素'],
      color: 'green'
    },
    {
      phase: '第4阶段：生产部署',
      duration: '2026年4月',
      focus: '系统上线优化',
      deliverables: ['系统优化', '安全测试', '生产部署', '持续支持'],
      color: 'orange'
    }
  ]

  const aiFeatures = [
    {
      feature: '文本挖掘和情感分析',
      description: '分析员工反馈中的隐含情绪和关键主题',
      benefit: '捕捉传统调查无法获得的深层洞察',
      accuracy: '情感分类准确率>92%'
    },
    {
      feature: '离职风险预测',
      description: '基于多维特征的员工离职概率评估',
      benefit: '提前3-6个月识别高风险员工',
      accuracy: '预测准确率>85%'
    },
    {
      feature: '个性化资源推荐',
      description: '为每位员工量身定制的福利和发展建议',
      benefit: '提高福利利用率和员工满意度',
      accuracy: '推荐精度>80%'
    },
    {
      feature: '团队动态分析',
      description: '识别团队情绪传染和协作模式',
      benefit: '优化团队配置和管理策略',
      accuracy: '团队风险识别率>78%'
    }
  ]

  const privacyCompliance = [
    {
      aspect: '数据最小化',
      description: '仅收集必要的数据，明确使用目的',
      implementation: '基于APPI法规的数据收集策略'
    },
    {
      aspect: '透明度保障',
      description: '员工对数据使用有完全知情权',
      implementation: '详细的隐私声明和同意机制'
    },
    {
      aspect: '技术保护',
      description: '采用先进的隐私保护技术',
      implementation: '联邦学习、差分隐私、数据加密'
    },
    {
      aspect: '合规监管',
      description: '符合日本个人信息保护法要求',
      implementation: '定期合规审计和数据保护影响评估'
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
            AI赋能的员工幸福度管理平台
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            基于JD-R模型的科学框架，通过AI技术实现"测量-诊断-干预"的完整闭环管理
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">核心设计理念</h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-primary-300 rounded-lg p-6">
            <p className="text-center text-lg text-gray-700 leading-relaxed">
              <span className="text-gray-900">"标准化幸福"</span> = 
              通过AI持续监测每位员工的<span className="text-gray-600">工作要求</span>，
              并智能推荐最适合的<span className="text-gray-600">工作资源</span>，
              系统性维持<span className="text-gray-600">"要求-资源"动态平衡</span>，
              最终促进高水平的<span className="text-gray-600">工作投入度</span>
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">系统架构模块</h3>
          
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
                    {module.title.split('：')[0]}
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
                      <h5 className="font-semibold text-gray-900 mb-3">核心功能</h5>
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
                      <h5 className="font-semibold text-gray-900 mb-3">技术栈</h5>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6">AI核心能力</h3>
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
                  <h5 className="font-medium text-blue-900 mb-1 text-center">业务价值</h5>
                  <p className="text-blue-800 text-xs text-center">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">分阶段实施计划</h3>
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
                  <p className="text-gray-600 text-sm mb-3">聚焦：{phase.focus}</p>
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
            隐私保护与合规管理
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