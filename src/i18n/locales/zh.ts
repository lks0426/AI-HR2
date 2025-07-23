export const zh = {
  // 通用
  common: {
    readMore: '了解更多',
    learnMore: '学习更多',
    viewDetails: '查看详情',
    close: '关闭',
    next: '下一步',
    previous: '上一步',
    loading: '加载中...',
    error: '错误',
    success: '成功',
    coreFeatures: '核心功能',
    technologies: '技术栈',
    businessValue: '业务价值',
    focus: '聚焦',
    deliverables: '交付成果'
  },

  // 导航
  nav: {
    home: '首页',
    solution: 'AI解决方案',
    market: '市场分析',
    japanMarket: '日本市场分析',
    workEngagement: '工作投入度',
    competition: '竞争格局',
    caseStudy: '成功案例',
    strategy: '战略建议',
    opportunities: '市场机会',
    contact: '联系我们'
  },

  // 主页横幅
  hero: {
    title: 'AI+HR',
    subtitle: '日本中小企业市场调研报告',
    description: '基于JD-R模型的员工幸福度管理平台，通过AI技术实现精准测量、智能预测和个性化干预',
    cta: '查看完整报告'
  },

  // 网站标题
  site: {
    title: 'AI+HR 市场调研',
    subtitle: '专业商业分析报告'
  },

  // AI解决方案
  solution: {
    title: 'AI赋能的员工幸福度管理平台',
    subtitle: '基于JD-R模型的科学框架，通过AI技术实现"测量-诊断-干预"的完整闭环管理',
    corePhilosophy: '核心设计理念',
    philosophyDescription: '"标准化幸福" = 通过AI持续监测每位员工的工作要求，并智能推荐最适合的工作资源，系统性维持"要求-资源"动态平衡，最终促进高水平的工作投入度',
    systemArchitecture: '系统架构模块',
    implementationPlan: '分阶段实施计划',
    aiCapabilities: 'AI核心能力',
    privacyCompliance: '隐私保护与合规管理',

    modules: {
      measurement: {
        title: '测量引擎：多模态员工状态监测',
        shortTitle: '测量引擎',
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
        shortTitle: 'AI预测',
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
        shortTitle: '个性化推荐',
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
        shortTitle: '集成平台',
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
    },

    phases: {
      phase1: {
        title: '第1阶段：基础建设',
        duration: '2025年9-11月',
        focus: '核心基础设施',
        deliverables: ['数据管道建设', '基础仪表板', 'HRIS集成', '安全框架']
      },
      phase2: {
        title: '第2阶段：AI模型开发',
        duration: '2025年12月-2026年1月',
        focus: '智能算法实现',
        deliverables: ['离职预测模型', '推荐引擎', 'NLP情感分析', '异常检测']
      },
      phase3: {
        title: '第3阶段：用户界面',
        duration: '2026年2-3月',
        focus: '用户体验优化',
        deliverables: ['移动应用', '增强仪表板', '用户培训', '游戏化元素']
      },
      phase4: {
        title: '第4阶段：生产部署',
        duration: '2026年4月',
        focus: '系统上线优化',
        deliverables: ['系统优化', '安全测试', '生产部署', '持续支持']
      }
    },

    aiFeatures: {
      textMining: {
        feature: '文本挖掘和情感分析',
        description: '分析员工反馈中的隐含情绪和关键主题',
        benefit: '捕捉传统调查无法获得的深层洞察',
        accuracy: '情感分类准确率>92%'
      },
      turnoverPrediction: {
        feature: '离职风险预测',
        description: '基于多维特征的员工离职概率评估',
        benefit: '提前3-6个月识别高风险员工',
        accuracy: '预测准确率>85%'
      },
      personalizedRecommendation: {
        feature: '个性化资源推荐',
        description: '为每位员工量身定制的福利和发展建议',
        benefit: '提高福利利用率和员工满意度',
        accuracy: '推荐精度>80%'
      },
      teamDynamics: {
        feature: '团队动态分析',
        description: '识别团队情绪传染和协作模式',
        benefit: '优化团队配置和管理策略',
        accuracy: '团队风险识别率>78%'
      }
    },

    privacy: {
      dataMinimization: {
        aspect: '数据最小化',
        description: '仅收集必要的数据，明确使用目的',
        implementation: '基于APPI法规的数据收集策略'
      },
      transparency: {
        aspect: '透明度保障',
        description: '员工对数据使用有完全知情权',
        implementation: '详细的隐私声明和同意机制'
      },
      technicalProtection: {
        aspect: '技术保护',
        description: '采用先进的隐私保护技术',
        implementation: '联邦学习、差分隐私、数据加密'
      },
      compliance: {
        aspect: '合规监管',
        description: '符合日本个人信息保护法要求',
        implementation: '定期合规审计和数据保护影响评估'
      }
    }
  },

  // 市场分析
  market: {
    title: '市场分析',
    overview: '市场概览',
    trends: '市场趋势',
    insights: '关键洞察',
    drivers: [
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
    successFactors: [
      '明确的数字化战略和路线图',
      '高层管理支持和资源投入',
      '用户培训和变革管理',
      '数据治理和安全措施',
      '供应商选择和合作伙伴关系'
    ]
  },

  // 日本市场
  japanMarket: {
    title: '日本市场分析',
    marketSize: '市场规模',
    smeData: '中小企业数据',
    culture: {
      challenges: [
        'HR科技采用率低',
        '传统管理方式根深蒂固',
        '"本音"与"建前"的文化差异',
        '中性回答倾向，避免直接批评'
      ],
      opportunities: [
        '政府60万亿日元生产力投资',
        '强制性压力检查合规要求',
        '工作方式改革推动',
        '劳动力短缺催生创新需求'
      ],
      adaptations: [
        '尊重间接沟通规范',
        '基于群体的干预措施',
        '多模态测量方法',
        '文化适应性设计'
      ]
    },
    benefits: {
      legal: '法定福利',
      popular: '热门福利'
    },
    workEngagement: {
      title: '工作投入度三维度',
      vigor: {
        dimension: '活力 (Vigor)',
        description: '在工作中表现出高水平的精力、精神韧性',
        indicators: ['高能量水平', '坚持不懈', '愿意投入努力', '面对困难时的韧性']
      },
      dedication: {
        dimension: '热忱 (Dedication)',
        description: '对工作抱有强烈参与感，体验到意义和自豪感',
        indicators: ['工作参与感强', '感受工作意义', '对工作自豪', '热情投入']
      },
      absorption: {
        dimension: '专注 (Absorption)',
        description: '完全愉快地沉浸在工作中，感觉时间飞逝',
        indicators: ['完全专注', '时间感模糊', '难以脱离工作', '深度投入状态']
      }
    }
  },

  // 竞争分析
  competition: {
    title: '竞争分析',
    analysis: '竞争格局分析',
    competitors: '主要竞争对手',
    marketShare: '市场份额',
    strengths: '优势',
    weaknesses: '劣势',
    targetMarket: '目标市场'
  }
}