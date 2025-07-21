// 基于日本中小企业AI+HR市场调研报告的专业数据

export interface JapanMarketData {
  marketSize: {
    current: number;
    projected: number;
    growth: number;
    year: number;
  };
  smeData: {
    percentage: number;
    employment: number;
    turnoverRate: number;
    bankruptcies: number;
  };
  pricing: {
    foreign: { min: number; max: number; currency: string };
    optimal: { min: number; max: number; currency: string };
    current: { min: number; max: number; currency: string };
  };
}

export interface LegalBenefits {
  name: string;
  description: string;
  cost: number; // 占工资百分比
}

export interface PopularBenefits {
  rank: number;
  category: string;
  examples: string[];
  popularity: string;
  cost: 'low' | 'medium' | 'high';
}

export interface WorkEngagement {
  dimension: string;
  description: string;
  indicators: string[];
}

export interface CompetitorData {
  name: string;
  type: 'domestic' | 'foreign' | 'specialist';
  marketShare?: number;
  pricing: string;
  strengths: string[];
  weaknesses: string[];
  targetMarket: string;
}

export interface CybozuCaseStudy {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

// 日本HR科技市场数据
export const japanMarketData: JapanMarketData = {
  marketSize: {
    current: 20,  // 20亿日元 (2024)
    projected: 39, // 39亿日元 (2033)
    growth: 6.94,  // CAGR 6.94%
    year: 2024
  },
  smeData: {
    percentage: 99.7,  // 占日本企业总数
    employment: 70,    // 雇佣全国70%劳动力
    turnoverRate: 15.3, // 年离职率15.3%
    bankruptcies: 350   // 2024年因劳动力短缺破产企业数
  },
  pricing: {
    foreign: { min: 28, max: 38, currency: 'USD' }, // 外国系统每员工每月
    optimal: { min: 200, max: 500, currency: 'JPY' }, // 最佳价格点
    current: { min: 300, max: 1000, currency: 'JPY' } // 当前市场价格
  }
};

// 法定福利（法定福利厚生）
export const legalBenefits: LegalBenefits[] = [
  {
    name: '健康保险',
    description: '为员工及其抚养家属提供医疗保障',
    cost: 30.51
  },
  {
    name: '厚生年金保险', 
    description: '企业员工公共养老金制度',
    cost: 30.51
  },
  {
    name: '护理保险',
    description: '40岁以上员工必须加入，应对高龄化',
    cost: 30.51
  },
  {
    name: '雇佣保险',
    description: '失业、休业期间生活保障',
    cost: 30.51
  },
  {
    name: '劳灾保险',
    description: '工作意外伤害保障',
    cost: 30.51
  }
];

// 热门法定外福利排名
export const popularBenefits: PopularBenefits[] = [
  {
    rank: 1,
    category: '健康支持',
    examples: ['人間ドック补助', '健身房费用补助', '压力测试', '流感疫苗接种'],
    popularity: '直接关乎员工身心健康，提升生活质量和工作效率',
    cost: 'medium'
  },
  {
    rank: 2,
    category: '住房补助',
    examples: ['房租补贴', '公司宿舍/公寓', '搬家补助'],
    popularity: '住房是最大生活成本，直接减轻经济负担',
    cost: 'high'
  },
  {
    rank: 3,
    category: '灵活工作方式',
    examples: ['远程办公', '弹性工作时间', '缩短工时制度'],
    popularity: '满足工作生活平衡需求，企业投入成本低但效果显著',
    cost: 'low'
  },
  {
    rank: 4,
    category: '自我发展支持',
    examples: ['资格获取费用补助', '外部培训费用支持', '书籍购买补助'],
    popularity: '提升个人价值和职业竞争力，转化为企业生产力',
    cost: 'medium'
  },
  {
    rank: 5,
    category: '餐饮补助',
    examples: ['公司食堂', '餐券/卡', '办公室零食/饮料'],
    popularity: '每日可见福利，直接降低生活成本，提升幸福感',
    cost: 'low'
  },
  {
    rank: 6,
    category: '特殊休假制度',
    examples: ['刷新假', '周年纪念假', '生日假', '夏季/冬季特别假'],
    popularity: '工作生活平衡的重要体现，帮助员工恢复精力',
    cost: 'low'
  }
];

// 工作投入度三维度
export const workEngagementDimensions: WorkEngagement[] = [
  {
    dimension: '活力 (Vigor)',
    description: '在工作中表现出高水平的精力、精神韧性',
    indicators: ['高能量水平', '坚持不懈', '愿意投入努力', '面对困难时的韧性']
  },
  {
    dimension: '热忱 (Dedication)',
    description: '对工作抱有强烈参与感，体验到意义和自豪感',
    indicators: ['工作参与感强', '感受工作意义', '对工作自豪', '热情投入']
  },
  {
    dimension: '专注 (Absorption)',
    description: '完全愉快地沉浸在工作中，感觉时间飞逝',
    indicators: ['完全专注', '时间感模糊', '难以脱离工作', '深度投入状态']
  }
];

// 主要竞争对手分析
export const competitors: CompetitorData[] = [
  {
    name: 'SmartHR',
    type: 'domestic',
    marketShare: 57,
    pricing: '可扩展定价，向中小企业渗透',
    strengths: ['市场领先地位', '1亿美元年收入', '强大的生态系统'],
    weaknesses: ['主要面向大企业', '功能复杂度高'],
    targetMarket: '大中型企业，逐步扩展至中小企业'
  },
  {
    name: 'freee人事労務',
    type: 'domestic',
    pricing: '300人以下市场主导',
    strengths: ['强大会计软件生态', '中小企业友好', '无缝集成'],
    weaknesses: ['功能相对有限', 'AI能力不足'],
    targetMarket: '300人以下中小企业'
  },
  {
    name: 'Wevox',
    type: 'specialist',
    pricing: '约300日元/人/月',
    strengths: ['专注投入度测量', '价格极具竞争力', '强大行业对标数据'],
    weaknesses: ['功能单一', '缺乏综合解决方案'],
    targetMarket: '中小企业投入度管理'
  },
  {
    name: 'Talent Palette',
    type: 'domestic',
    pricing: '需询价',
    strengths: ['最全面AI功能', '文本挖掘', '离职预警', '人才推荐'],
    weaknesses: ['功能复杂', '可能过于昂贵', '实施门槛高'],
    targetMarket: '大型企业和高端中型企业'
  },
  {
    name: 'SAP SuccessFactors',
    type: 'foreign',
    pricing: '$28-38/员工/月',
    strengths: ['全球领先', '功能完整', '企业级能力'],
    weaknesses: ['价格昂贵', '复杂性高', '文化适应性差'],
    targetMarket: '大型跨国企业'
  }
];

// Cybozu转型案例研究
export const cybozuCaseStudy: CybozuCaseStudy[] = [
  {
    metric: '员工离职率',
    before: '28%',
    after: '4%',
    improvement: '降低85.7%'
  },
  {
    metric: '工作方式选择',
    before: '统一管理',
    after: '100人100种工作方式',
    improvement: '完全个性化'
  },
  {
    metric: '业务表现',
    before: '增长停滞',
    after: '重回增长轨道',
    improvement: '可持续发展'
  },
  {
    metric: '员工自主权',
    before: '有限选择',
    after: '自由选择工作时间地点',
    improvement: '最大化自主权'
  }
];

// 日本职场文化特征
export const japaneseCulture = {
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
};

// 市场空白和机会
export const marketGaps = [
  {
    gap: '中小企业集成式心理健康平台',
    description: '现有解决方案分散且昂贵',
    opportunity: '综合性低成本解决方案'
  },
  {
    gap: '预测性幸福度分析',
    description: '现有产品多停留在"测量"而非"预测与干预"',
    opportunity: 'AI驱动的预测和个性化干预'
  },
  {
    gap: '文化特异性解决方案',
    description: '多数系统未充分适应日本职场文化',
    opportunity: '深度本土化的AI解决方案'
  },
  {
    gap: '智能化闭环管理',
    description: '缺少基于JD-R模型的智能推荐系统',
    opportunity: '"测量-诊断-干预"的完整闭环'
  }
];

// 政府支持政策
export const governmentSupport = {
  policies: [
    {
      name: '工作方式改革',
      description: '政府主导的职场环境改善倡议',
      benefit: '政策背书和试点机会'
    },
    {
      name: '健康经营战略',
      description: '经济产业省推动的企业健康管理',
      benefit: '补贴和认证机会'
    },
    {
      name: 'J-Startup计划',
      description: '支持创新企业发展',
      benefit: '资金和资源支持'
    },
    {
      name: '60万亿日元生产力投资',
      description: '国家级生产力提升计划',
      benefit: '长期政策支持保障'
    }
  ]
};