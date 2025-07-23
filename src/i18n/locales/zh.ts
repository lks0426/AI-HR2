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
    cta: '查看完整报告',
    
    // Hero页面内容
    mainTitle: '基于AI的日本中小企业',
    mainSubtitle: '员工幸福度标准化解决方案',
    description2: '响应政府"工作方式改革"倡议，为100-1000人规模企业提供科学的员工幸福度管理平台',
    corePhilosophy: '核心理念：',
    corePhilosophyText: '通过AI推荐的工作资源系统性地平衡工作要求，以此"标准化幸福"',
    
    // CTA按钮
    cta1: '日本市场深度分析',
    cta2: 'AI解决方案架构',
    
    // 统计数据
    stats: {
      hrTechGrowth: 'HR科技CAGR增长率',
      smePercentage: '日本中小企业占比',
      turnoverRate: '中小企业年离职率',
      marketSize: '2033年预测市场规模'
    },
    
    // 市场痛点
    painPoints: {
      title: '市场痛点',
      cost: {
        title: '成本压力',
        description: '外国系统每员工$28-38/月，超出中小企业预算'
      },
      fragmentation: {
        title: '功能分散',
        description: '现有解决方案缺乏集成化管理平台'
      },
      culture: {
        title: '文化适应',
        description: '多数系统未充分考虑日本职场文化特征'
      }
    }
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

  // 市场概览
  marketOverview: {
    title: '市场概览',
    subtitle: 'AI+HR市场正经历快速增长期，技术创新与商业需求双重驱动下，市场规模持续扩大',
    
    metrics: {
      marketSize2024: '2024年市场规模',
      aiAdoption: 'AI技术采用率',
      growthRate: '年增长率',
      forecast2026: '2026年预测规模'
    },
    
    drivers: {
      title: '市场驱动因素',
      items: [
        '数字化转型加速推动HR技术升级',
        '远程工作常态化增加对智能HR工具需求',
        '企业对数据驱动决策的重视程度提升',
        '人才竞争激烈促使企业优化人才管理',
        '监管合规要求推动HR流程标准化'
      ]
    },
    
    successFactors: {
      title: '成功关键因素',
      items: [
        '明确的数字化战略和路线图',
        '高层管理支持和资源投入',
        '用户培训和变革管理',
        '数据治理和安全措施',
        '供应商选择和合作伙伴关系'
      ]
    },
    
    timeline: {
      title: '市场发展时间线',
      forecast: '预测数据'
    }
  },

  // 日本市场分析
  japanMarketAnalysis: {
    title: '日本中小企业HR科技市场深度分析',
    subtitle: '基于经团联调查、政府统计数据和行业研究的专业市场分析',
    
    tabs: {
      market: '市场规模',
      benefits: '福利现状',
      challenges: '挑战分析'
    },
    
    marketStats: {
      marketGrowth: '市场规模增长',
      smeScale: '中小企业规模',
      talentChallenge: '人才流失挑战',
      current: '当前',
      employmentRatio: '企业总数占比',
      employmentForce: '雇佣劳动力',
      annualTurnover: '年离职率',
      bankruptcies2024: '2024年破产企业'
    },
    
    pricing: {
      title: '定价策略分析',
      foreignSystems: '外国系统',
      optimalPrice: '最佳价格点',
      currentDomestic: '当前国内产品',
      employeeMonth: '员工/月',
      tooExpensive: '过于昂贵',
      marketGap: '市场空白',
      limitedFeatures: '功能有限',
      opportunityWindow: '机会窗口',
      powerfulButExpensive: '功能强大但价格过高',
      completeAndReasonable: '功能完整且价格合理',
      affordableButLimited: '价格适中但缺乏集成',
      coreOpportunity: '核心机会',
      opportunityDescription: '在¥200-500/员工/月价格区间提供功能完整的AI驱动解决方案，填补市场空白'
    },
    
    benefits: {
      legalBenefitsTitle: '法定福利基础',
      keyDataLabel: '关键数据：',
      keyDataText: '法定福利费用约占工资总额的30.51%，企业平均每月为员工负担84,392日元',
      salaryRatio: '占工资总额',
      popularBenefitsTitle: '中小企业热门法定外福利排名',
      examples: '具体示例',
      popularityReason: '受欢迎原因',
      lowCost: '低成本',
      mediumCost: '中等成本',
      highCost: '高成本'
    },
    
    challenges: {
      budgetConstraints: '预算约束',
      budgetDescription: '中小企业HR预算有限，无法承担每员工$28-38/月的外国系统成本',
      budgetSolution: '提供¥200-500/员工/月的经济实惠解决方案',
      managementComplexity: '管理复杂度',
      managementDescription: '中小企业通常只有1-3名HR员工，需要简单易用的系统',
      managementSolution: 'AI自动化管理，减少人工干预需求',
      culturalAdaptation: '文化适应性',
      culturalDescription: '日本“本音”与“建前”文化特征，传统调查方法效果有限',
      culturalSolution: '多模态测量+NLP情感分析',
      featureFragmentation: '功能分散',
      fragmentationDescription: '现有解决方案功能单一，缺乏集成平台',
      fragmentationSolution: '基于JD-R模型的一体化解决方案',
      impactLabel: '影响',
      solutionLabel: '解决方案',
      impactHigh: '高',
      impactMedium: '中',
      impactLow: '低'
    }
  },

  // 工作投入度组件
  workEngagement: {
    title: '工作投入度：科学的员工幸福度衡量标准',
    subtitle: '基于Utrecht工作投入度量表(UWES)和JD-R模型的科学框架，将抽象的"幸福"转化为可测量、可管理的指标',
    
    japanCrisis: {
      title: '日本员工投入度危机',
      gallupNote: '盖洛普数据显示：',
      gallupDescription: '日本仅有6%的员工积极敬业，远低于全球平均水平，急需系统性解决方案',
      
      stats: {
        activeEngaged: '积极敬业员工',
        activeEngagedDesc: '全球最低水平',
        activeDisengaged: '积极疏离员工', 
        activeDisengagedDesc: '消极比例4:1',
        economicLoss: '经济损失',
        economicLossDesc: '每年因低投入度造成',
        economicLossValue: '¥86万亿'
      }
    },
    
    dimensions: {
      title: '工作投入度三维度模型'
    },
    
    jdrModel: {
      demands: {
        title: '工作要求 (Job Demands)',
        description: '过高的工作要求会消耗员工精力，导致压力和职业倦怠',
        items: [
          '工作负荷过重',
          '时间压力', 
          '人际冲突',
          '角色模糊',
          '缺乏资源'
        ]
      },
      resources: {
        title: '工作资源 (Job Resources)',
        description: '充足的工作资源能满足心理需求，激发内在动机',
        items: [
          '自主权和控制感',
          '上级支持和反馈',
          '职业发展机会',
          '工作-生活平衡',
          '福利制度支持'
        ]
      }
    },
    
    culturalChallenges: {
      title: '日本文化适应挑战与解决方案',
      solutionLabel: '解决方案',
      challenges: [
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
    },
    
    scientificMethods: {
      title: '科学测量方法',
      methods: [
        {
          name: '标准化问卷',
          description: 'Utrecht工作投入度量表，成熟的日语版本'
        },
        {
          name: '生理监测',
          description: '心率变异性(HRV)客观测量压力水平'
        },
        {
          name: '行为分析',
          description: '加班时长、休假模式等勤怠数据分析'
        },
        {
          name: 'AI情感分析',
          description: 'NLP技术分析文本捕捉真实"本音"'
        }
      ]
    }
  },

  // 案例研究组件
  caseStudy: {
    title: '成功案例研究：Cybozu的幸福度转型',
    subtitle: '日本软件公司Cybozu如何通过"100人100种工作方式"理念，将离职率从28%降至4%的经典案例分析',
    
    metricsTitle: '转型成果数据对比',
    transformationTimeline: '转型历程时间线',
    coreChanges: '核心变革对比',
    keyLessons: '关键启示与AI解决方案应用',
    successFormula: 'Cybozu成功公式',
    
    beforeAfter: {
      before: '变革前：',
      after: '变革后：'
    },
    
    transformationSteps: [
      {
        phase: '危机识别',
        year: '2005年',
        description: '离职率高达28%，面临人才流失危机',
        key: '意识到问题的严重性'
      },
      {
        phase: '理念转变',
        year: '2006-2008年',
        description: '从追求"公平"转向追求"个人幸福"',
        key: '"100人100种工作方式"理念确立'
      },
      {
        phase: '制度重构',
        year: '2009-2012年',
        description: '引入极具弹性的工作制度和透明文化',
        key: '员工获得前所未有的自主权'
      },
      {
        phase: '成果显现',
        year: '2013年至今',
        description: '离职率稳定在4%，业务重回增长轨道',
        key: '员工幸福与企业发展双赢'
      }
    ],
    
    coreChangesList: [
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
    ],
    
    lessons: [
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
    ],
    
    aiApplication: 'AI解决方案应用',
    
    formula: {
      autonomy: '员工自主权',
      transparency: '透明文化',
      personalization: '个性化制度',
      engagement: '高投入度',
      description: '这一成功公式完美映证了JD-R模型理论：通过提供充足的工作资源（自主权、支持、发展机会），有效平衡工作要求，从而提升员工工作投入度。'
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
    title: '日本HR科技竞争格局分析',
    subtitle: '深度分析日本HR科技市场主要玩家，识别竞争优势与市场空白',
    
    // 分类过滤器
    categories: {
      all: '全部',
      domestic: '国内厂商',
      foreign: '外国厂商',
      specialist: '专业服务'
    },
    
    // 市场洞察
    marketInsights: {
      domesticDominance: {
        title: '国内主导地位',
        description: 'SmartHR以57%市场份额领先，但主要服务大企业',
        opportunity: '中小企业市场仍有巨大空间'
      },
      pricingGap: {
        title: '价格差异巨大',
        description: '外国系统$28-38/员工/月 vs 国内¥300-1000/员工/月',
        opportunity: '¥200-500价格区间存在市场空白'
      },
      featureDifferentiation: {
        title: '功能分化明显',
        description: '现有解决方案要么功能单一，要么过于复杂',
        opportunity: '集成化但易用的解决方案需求强烈'
      }
    },
    
    // 通用标签
    labels: {
      marketShare: '市场份额',
      pricingModel: '定价模式',
      pricingStrategy: '定价策略',
      targetMarket: '目标市场',
      coreStrengths: '核心优势',
      challengesLimitations: '挑战与局限',
      opportunity: '机会'
    },
    
    // 市场空白分析
    marketGap: {
      title: '市场空白与机会',
      currentPainPoints: '现有市场痛点',
      differentiationOpportunities: '核心差异化机会',
      painPoints: [
        '外国系统价格昂贵($28-38/员工/月)，中小企业难以承受',
        '国内产品功能分散，缺乏集成化解决方案',
        'AI能力有限，多停留在"测量"而非"预测与干预"',
        '文化适应性不足，未充分考虑日本职场特征'
      ],
      opportunities: [
        '基于JD-R模型的科学框架',
        'AI驱动的个性化资源推荐',
        '"测量-诊断-干预"的完整闭环',
        '深度适应日本文化的解决方案',
        '¥200-500/员工/月的经济实惠定价'
      ]
    }
  },

  // 战略建议
  strategy: {
    title: '战略建议',
    subtitle: '基于市场分析和机会评估，为企业进入AI+HR市场提供全面的战略指导',
    
    // 战略框架
    framework: {
      title: '战略框架总览',
      shortTerm: {
        title: '短期目标 (0-12个月)',
        description: '建立基础能力，确定市场定位，开发MVP产品'
      },
      mediumTerm: {
        title: '中期目标 (1-3年)',
        description: '扩大市场份额，完善产品生态，建立竞争优势'
      },
      longTerm: {
        title: '长期愿景 (3-5年)',
        description: '成为行业领导者，驱动市场标准，实现生态化发展'
      }
    },
    
    // 策略详情
    strategies: {
      keyActions: '关键行动',
      investment: '投资',
      positioning: {
        title: '市场定位策略',
        description: '明确目标客户群体和价值主张',
        actions: [
          '聚焦中大型企业的HR数字化转型需求',
          '强调AI驱动的智能化解决方案差异化',
          '建立行业专业化的产品和服务组合',
          '构建端到端的HR生态系统集成能力'
        ]
      },
      innovation: {
        title: '产品创新策略',
        description: '开发具有竞争优势的AI+HR产品',
        actions: [
          '投资核心AI算法和机器学习能力',
          '开发用户友好的无代码/低代码平台',
          '构建开放的API生态系统',
          '实施敏捷开发和快速迭代机制'
        ]
      },
      customerAcquisition: {
        title: '客户获取策略',
        description: '建立可持续的客户增长引擎',
        actions: [
          '建立专业的销售和客户成功团队',
          '开展内容营销和思想领导力建设',
          '发展合作伙伴渠道和生态系统',
          '实施客户推荐和口碑营销计划'
        ]
      },
      technology: {
        title: '技术发展策略',
        description: '保持技术领先和创新能力',
        actions: [
          '建立AI/ML研发中心和人才团队',
          '投资云原生和微服务架构',
          '开发数据安全和隐私保护能力',
          '构建实时分析和预测性洞察平台'
        ]
      },
      riskManagement: {
        title: '风险管控策略',
        description: '建立全面的风险防控体系',
        actions: [
          '建立数据治理和合规管理框架',
          '实施信息安全和隐私保护措施',
          '开发业务连续性和灾难恢复计划',
          '建立法律合规和知识产权保护'
        ]
      },
      ecosystem: {
        title: '生态建设策略',
        description: '构建可持续的商业生态系统',
        actions: [
          '建立技术合作伙伴和集成商网络',
          '开发第三方开发者社区和平台',
          '构建客户社区和用户群体',
          '建立行业联盟和标准化参与'
        ]
      }
    },
    
    // 优先级和投资
    priority: {
      high: '高优先级',
      medium: '中优先级',
      low: '低优先级'
    },
    
    investmentLevel: {
      high: '高',
      medium: '中等',
      low: '低'
    },
    
    timeline: {
      continuous: '持续投入',
      months3to6: '3-6个月',
      months6to12: '6-12个月',
      months9to15: '9-15个月',
      months6to9: '6-9个月',
      months12to18: '12-18个月'
    },
    
    // 实施路线图
    roadmap: {
      title: '实施路线图',
      phase1: {
        title: '第一阶段：基础建设 (0-6个月)',
        items: [
          '组建核心团队和技术架构',
          '确定目标市场和客户画像',
          '开发MVP产品和核心功能',
          '建立基础的销售和营销体系'
        ]
      },
      phase2: {
        title: '第二阶段：市场拓展 (6-18个月)',
        items: [
          '完善产品功能和用户体验',
          '获取首批企业客户和成功案例',
          '建立合作伙伴生态系统',
          '扩大团队规模和市场覆盖'
        ]
      },
      phase3: {
        title: '第三阶段：规模化发展 (18-36个月)',
        items: [
          '实现产品标准化和可规模化交付',
          '建立行业影响力和品牌认知',
          '开发高级AI功能和预测性分析',
          '考虑国际化扩张和战略合作'
        ]
      }
    },
    
    // 成功指标
    metrics: {
      title: '成功指标',
      business: {
        title: '业务指标',
        items: [
          '年度经常性收入(ARR)',
          '客户获取成本(CAC)',
          '客户生命周期价值(LTV)',
          '月度复合增长率(CMGR)',
          '客户满意度(NPS)'
        ]
      },
      product: {
        title: '产品指标',
        items: [
          '用户活跃度和使用频率',
          '功能采用率和深度使用',
          '产品稳定性和性能表现',
          '客户反馈和产品评分',
          '集成和API使用情况'
        ]
      },
      market: {
        title: '市场指标',
        items: [
          '市场份额和排名',
          '品牌知名度和影响力',
          '合作伙伴数量和质量',
          '媒体报道和行业认可',
          '竞争优势和差异化'
        ]
      }
    }
  },

  // 市场机会
  opportunities: {
    title: '商业机会分析',
    subtitle: 'AI+HR领域存在多个高价值商业机会，总市场潜力超过',
    
    // 概要统计
    summary: {
      keyOpportunities: '关键机会领域',
      totalMarketPotential: '总市场潜力',
      averageImplementation: '平均实施周期(月)',
      lowDifficultyOpportunities: '低难度机会',
      marketPotential: '市场潜力'
    },
    
    // 难度级别
    difficulty: {
      low: '低难度',
      medium: '中等难度',
      high: '高难度'
    },
    
    // 市场潜力评分
    marketPotentialScore: '市场潜力评分',
    
    // 投资优先级矩阵
    priorityMatrix: {
      title: '投资优先级矩阵',
      description: '基于市场潜力和实施难度的投资优先级分析',
      highPriority: {
        title: '高优先级',
        subtitle: '(立即投资)'
      },
      mediumPriority: {
        title: '中优先级',
        subtitle: '(规划投资)'
      },
      lowPriority: {
        title: '低优先级',
        subtitle: '(长期考虑)'
      }
    }
  },

  // Footer
  footer: {
    companyName: 'AI+HR 研究中心',
    companyTagline: '专业市场分析',
    companyDescription: '专注于人工智能与人力资源领域的前沿研究，为企业决策提供专业的数据支持和战略洞察。',
    updatedOn: '更新于',
    sections: {
      reportContent: {
        title: '报告内容',
        marketOverview: '市场概览',
        trendAnalysis: '趋势分析',
        competitiveLandscape: '竞争格局',
        businessOpportunities: '商业机会',
        strategicRecommendations: '战略建议'
      },
      researchMethods: {
        title: '研究方法',
        dataSources: '数据来源',
        analyticalFramework: '分析框架',
        predictionModels: '预测模型',
        validationMethods: '验证方法'
      },
      contactUs: {
        title: '联系我们',
        businessCooperation: '商务合作',
        customReports: '定制报告',
        consultingServices: '咨询服务'
      }
    },
    reportSummary: {
      marketSize2024: '2024年市场规模',
      aiAdoption: 'AI技术采用率',
      forecast2026: '2026年预测规模',
      keyOpportunities: '关键商业机会'
    },
    disclaimer: {
      title: '报告声明',
      mainText: '本报告基于公开信息和行业研究编制，旨在提供市场趋势和商业洞察。报告中的预测和建议仅供参考，不构成投资建议。',
      dataText: '数据来源包括但不限于：行业报告、公开财报、市场调研、专家访谈等。我们致力于确保信息的准确性，但对于数据的完整性和时效性不承担责任。'
    },
    copyright: 'AI+HR 市场调研报告. 版权所有',
    tagline: '专业 • 可信 • 前瞻',
    businessSupport: '商业决策支持'
  }
}