export interface MarketTrend {
  year: string
  market_size: number
  growth_rate: number
  ai_adoption: number
}

export interface CompetitorData {
  name: string
  market_share: number
  strengths: string[]
  weaknesses: string[]
  focus_areas: string[]
}

export interface OpportunityData {
  area: string
  market_potential: number
  timeline: string
  difficulty: 'Low' | 'Medium' | 'High'
  description: string
}

export const marketTrends: MarketTrend[] = [
  { year: '2020', market_size: 8.5, growth_rate: 12, ai_adoption: 23 },
  { year: '2021', market_size: 11.2, growth_rate: 32, ai_adoption: 34 },
  { year: '2022', market_size: 15.8, growth_rate: 41, ai_adoption: 48 },
  { year: '2023', market_size: 21.3, growth_rate: 35, ai_adoption: 67 },
  { year: '2024', market_size: 24.1, growth_rate: 13, ai_adoption: 78 },
  { year: '2025*', market_size: 32.4, growth_rate: 34, ai_adoption: 89 },
  { year: '2026*', market_size: 45.2, growth_rate: 39, ai_adoption: 94 }
]

export const competitors: CompetitorData[] = [
  {
    name: 'Workday',
    market_share: 18.5,
    strengths: ['云端部署', '用户体验', '集成能力'],
    weaknesses: ['定制化限制', '价格较高'],
    focus_areas: ['人才管理', '薪酬管理', '分析报告']
  },
  {
    name: 'SAP SuccessFactors',
    market_share: 15.2,
    strengths: ['企业级功能', '全球化支持', 'AI分析'],
    weaknesses: ['复杂性高', '实施周期长'],
    focus_areas: ['绩效管理', '学习发展', '继任规划']
  },
  {
    name: 'Oracle HCM',
    market_share: 12.8,
    strengths: ['数据库集成', '安全性', '可扩展性'],
    weaknesses: ['用户界面', '移动体验'],
    focus_areas: ['核心HR', '招聘管理', '风险合规']
  },
  {
    name: 'ADP',
    market_share: 11.3,
    strengths: ['薪酬专业', '合规管理', '服务支持'],
    weaknesses: ['创新速度', 'AI能力'],
    focus_areas: ['薪酬处理', '税务管理', '时间考勤']
  },
  {
    name: '其他厂商',
    market_share: 42.2,
    strengths: ['细分领域专精', '成本优势', '本地化'],
    weaknesses: ['功能有限', '集成挑战'],
    focus_areas: ['垂直行业', '中小企业', '特定功能']
  }
]

export const opportunities: OpportunityData[] = [
  {
    area: 'AI驱动的人才招聘',
    market_potential: 8.5,
    timeline: '12-18个月',
    difficulty: 'Medium',
    description: '利用机器学习算法优化简历筛选、面试安排和候选人匹配，提高招聘效率和质量'
  },
  {
    area: '智能绩效管理',
    market_potential: 6.2,
    timeline: '6-12个月',
    difficulty: 'Low',
    description: '基于数据分析的绩效评估系统，提供实时反馈和个性化发展建议'
  },
  {
    area: '员工体验个性化',
    market_potential: 12.3,
    timeline: '18-24个月',
    difficulty: 'High',
    description: '通过AI分析员工行为和偏好，提供个性化的工作环境和福利方案'
  },
  {
    area: '预测性人力分析',
    market_potential: 9.8,
    timeline: '15-20个月',
    difficulty: 'High',
    description: '运用大数据和机器学习预测员工离职风险、技能需求和组织变化'
  },
  {
    area: '自动化HR流程',
    market_potential: 5.4,
    timeline: '3-6个月',
    difficulty: 'Low',
    description: '将重复性HR任务自动化，如薪酬计算、考勤管理和合规检查'
  },
  {
    area: '虚拟HR助手',
    market_potential: 7.1,
    timeline: '9-15个月',
    difficulty: 'Medium',
    description: '基于自然语言处理的智能助手，回答员工问题并提供HR服务支持'
  }
]

export const keyInsights = {
  market_drivers: [
    '数字化转型加速推动HR技术升级',
    '远程工作常态化增加对智能HR工具需求',
    '企业对数据驱动决策的重视程度提升',
    '人才竞争激烈促使企业优化人才管理',
    '监管合规要求推动HR流程标准化'
  ],
  challenges: [
    '数据隐私和安全concerns',
    '技术集成复杂性',
    '变革管理和用户接受度',
    '投资回报率衡量困难',
    '技能差距和人才短缺'
  ],
  success_factors: [
    '明确的数字化战略和路线图',
    '高层管理支持和资源投入',
    '用户培训和变革管理',
    '数据治理和安全措施',
    '供应商选择和合作伙伴关系'
  ]
}