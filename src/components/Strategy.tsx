'use client'

import { Lightbulb, Target, Users, TrendingUp, Shield, Rocket } from 'lucide-react'
import { keyInsights } from '@/data/marketData'

export default function Strategy() {
  const strategies = [
    {
      icon: Target,
      title: '市场定位策略',
      description: '明确目标客户群体和价值主张',
      actions: [
        '聚焦中大型企业的HR数字化转型需求',
        '强调AI驱动的智能化解决方案差异化',
        '建立行业专业化的产品和服务组合',
        '构建端到端的HR生态系统集成能力'
      ],
      priority: 'high',
      timeline: '3-6个月',
      investment: '中等'
    },
    {
      icon: Rocket,
      title: '产品创新策略',
      description: '开发具有竞争优势的AI+HR产品',
      actions: [
        '投资核心AI算法和机器学习能力',
        '开发用户友好的无代码/低代码平台',
        '构建开放的API生态系统',
        '实施敏捷开发和快速迭代机制'
      ],
      priority: 'high',
      timeline: '6-12个月',
      investment: '高'
    },
    {
      icon: Users,
      title: '客户获取策略',
      description: '建立可持续的客户增长引擎',
      actions: [
        '建立专业的销售和客户成功团队',
        '开展内容营销和思想领导力建设',
        '发展合作伙伴渠道和生态系统',
        '实施客户推荐和口碑营销计划'
      ],
      priority: 'medium',
      timeline: '9-15个月',
      investment: '中等'
    },
    {
      icon: TrendingUp,
      title: '技术发展策略',
      description: '保持技术领先和创新能力',
      actions: [
        '建立AI/ML研发中心和人才团队',
        '投资云原生和微服务架构',
        '开发数据安全和隐私保护能力',
        '构建实时分析和预测性洞察平台'
      ],
      priority: 'high',
      timeline: '持续投入',
      investment: '高'
    },
    {
      icon: Shield,
      title: '风险管控策略',
      description: '建立全面的风险防控体系',
      actions: [
        '建立数据治理和合规管理框架',
        '实施信息安全和隐私保护措施',
        '开发业务连续性和灾难恢复计划',
        '建立法律合规和知识产权保护'
      ],
      priority: 'medium',
      timeline: '6-9个月',
      investment: '中等'
    },
    {
      icon: Lightbulb,
      title: '生态建设策略',
      description: '构建可持续的商业生态系统',
      actions: [
        '建立技术合作伙伴和集成商网络',
        '开发第三方开发者社区和平台',
        '构建客户社区和用户群体',
        '建立行业联盟和标准化参与'
      ],
      priority: 'medium',
      timeline: '12-18个月',
      investment: '中等'
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
      'high': '高优先级',
      'medium': '中优先级',
      'low': '低优先级'
    }
    return texts[priority as keyof typeof texts] || texts.medium
  }

  const getInvestmentColor = (investment: string) => {
    const colors = {
      '高': 'text-rose-600',
      '中等': 'text-blue-600',
      '低': 'text-green-600'
    }
    return colors[investment as keyof typeof colors] || colors['中等']
  }

  return (
    <section id="strategy" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            战略建议
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            基于市场分析和机会评估，为企业进入AI+HR市场提供全面的战略指导
          </p>
        </div>

        {/* Strategic Framework */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">战略框架总览</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">短期目标 (0-12个月)</h4>
              <p className="text-sm text-gray-600">
                建立基础能力，确定市场定位，开发MVP产品
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">中期目标 (1-3年)</h4>
              <p className="text-sm text-gray-600">
                扩大市场份额，完善产品生态，建立竞争优势
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">长期愿景 (3-5年)</h4>
              <p className="text-sm text-gray-600">
                成为行业领导者，驱动市场标准，实现生态化发展
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
                <h4 className="font-medium text-gray-900 mb-3">关键行动</h4>
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
                  投资: {strategy.investment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Roadmap */}
        <div className="card p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">实施路线图</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">第一阶段：基础建设 (0-6个月)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 组建核心团队和技术架构</li>
                <li>• 确定目标市场和客户画像</li>
                <li>• 开发MVP产品和核心功能</li>
                <li>• 建立基础的销售和营销体系</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">第二阶段：市场拓展 (6-18个月)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 完善产品功能和用户体验</li>
                <li>• 获取首批企业客户和成功案例</li>
                <li>• 建立合作伙伴生态系统</li>
                <li>• 扩大团队规模和市场覆盖</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-2">第三阶段：规模化发展 (18-36个月)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 实现产品标准化和可规模化交付</li>
                <li>• 建立行业影响力和品牌认知</li>
                <li>• 开发高级AI功能和预测性分析</li>
                <li>• 考虑国际化扩张和战略合作</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">成功指标</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">业务指标</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 年度经常性收入(ARR)</li>
                <li>• 客户获取成本(CAC)</li>
                <li>• 客户生命周期价值(LTV)</li>
                <li>• 月度复合增长率(CMGR)</li>
                <li>• 客户满意度(NPS)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">产品指标</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 用户活跃度和使用频率</li>
                <li>• 功能采用率和深度使用</li>
                <li>• 产品稳定性和性能表现</li>
                <li>• 客户反馈和产品评分</li>
                <li>• 集成和API使用情况</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">市场指标</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 市场份额和排名</li>
                <li>• 品牌知名度和影响力</li>
                <li>• 合作伙伴数量和质量</li>
                <li>• 媒体报道和行业认可</li>
                <li>• 竞争优势和差异化</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}