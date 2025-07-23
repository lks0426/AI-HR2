import { Locale, defaultLocale } from './config'

export interface Translation {
  // Common
  common: {
    readMore: string
    learnMore: string
    viewDetails: string
    close: string
    next: string
    previous: string
    loading: string
    error: string
    success: string
    coreFeatures: string
    technologies: string
    businessValue: string
    focus: string
    deliverables: string
  }
  
  // Navigation & Header
  nav: {
    home: string
    solution: string
    market: string
    competition: string
    opportunities: string
    contact: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  
  // AI Solution
  solution: {
    title: string
    subtitle: string
    corePhilosophy: string
    philosophyDescription: string
    systemArchitecture: string
    implementationPlan: string
    aiCapabilities: string
    privacyCompliance: string
    
    // System modules
    modules: {
      measurement: {
        title: string
        description: string
        features: string[]
        technologies: string[]
      }
      prediction: {
        title: string
        description: string
        features: string[]
        technologies: string[]
      }
      recommendation: {
        title: string
        description: string
        features: string[]
        technologies: string[]
      }
      integration: {
        title: string
        description: string
        features: string[]
        technologies: string[]
      }
    }
    
    // Implementation phases
    phases: {
      phase1: {
        title: string
        duration: string
        focus: string
        deliverables: string[]
      }
      phase2: {
        title: string
        duration: string
        focus: string
        deliverables: string[]
      }
      phase3: {
        title: string
        duration: string
        focus: string
        deliverables: string[]
      }
      phase4: {
        title: string
        duration: string
        focus: string
        deliverables: string[]
      }
    }
    
    // AI Features
    aiFeatures: {
      textMining: {
        feature: string
        description: string
        benefit: string
        accuracy: string
      }
      turnoverPrediction: {
        feature: string
        description: string
        benefit: string
        accuracy: string
      }
      personalizedRecommendation: {
        feature: string
        description: string
        benefit: string
        accuracy: string
      }
      teamDynamics: {
        feature: string
        description: string
        benefit: string
        accuracy: string
      }
    }
    
    // Privacy compliance
    privacy: {
      dataMinimization: {
        aspect: string
        description: string
        implementation: string
      }
      transparency: {
        aspect: string
        description: string
        implementation: string
      }
      technicalProtection: {
        aspect: string
        description: string
        implementation: string
      }
      compliance: {
        aspect: string
        description: string
        implementation: string
      }
    }
  }
  
  // Market Analysis
  market: {
    title: string
    overview: string
    trends: string
    insights: string
    drivers: string[]
    challenges: string[]
    successFactors: string[]
  }
  
  // Japan Market
  japanMarket: {
    title: string
    marketSize: string
    smeData: string
    culture: {
      challenges: string[]
      opportunities: string[]
      adaptations: string[]
    }
    benefits: {
      legal: string
      popular: string
    }
    workEngagement: {
      vigor: {
        dimension: string
        description: string
        indicators: string[]
      }
      dedication: {
        dimension: string
        description: string
        indicators: string[]
      }
      absorption: {
        dimension: string
        description: string
        indicators: string[]
      }
    }
  }
  
  // Competition
  competition: {
    title: string
    analysis: string
    competitors: string
    marketShare: string
    strengths: string
    weaknesses: string
    targetMarket: string
  }
}

export const translations: Record<Locale, Translation> = {
  zh: {
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
    nav: {
      home: '首页',
      solution: 'AI解决方案',
      market: '市场分析',
      competition: '竞争格局',
      opportunities: '市场机会',
      contact: '联系我们'
    },
    hero: {
      title: 'AI+HR',
      subtitle: '日本中小企业市场调研报告',
      description: '基于JD-R模型的员工幸福度管理平台，通过AI技术实现精准测量、智能预测和个性化干预',
      cta: '查看完整报告'
    },
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
    
    competition: {
      title: '竞争分析',
      analysis: '竞争格局分析',
      competitors: '主要竞争对手',
      marketShare: '市场份额',
      strengths: '优势',
      weaknesses: '劣势',
      targetMarket: '目标市场'
    }
  },
  
  ja: {
    // Japanese translations will be added here
    common: {
      readMore: '詳しく見る',
      learnMore: 'もっと学ぶ',
      viewDetails: '詳細を見る',
      close: '閉じる',
      next: '次へ',
      previous: '前へ',
      loading: '読み込み中...',
      error: 'エラー',
      success: '成功',
      coreFeatures: 'コア機能',
      technologies: '技術スタック',
      businessValue: 'ビジネス価値',
      focus: 'フォーカス',
      deliverables: '成果物'
    },
    nav: {
      home: 'ホーム',
      solution: 'AIソリューション',
      market: '市場分析',
      competition: '競合分析',
      opportunities: '市場機会',
      contact: 'お問い合わせ'
    },
    hero: {
      title: 'AI+HR',
      subtitle: '日本中小企業市場調査レポート',
      description: 'JD-Rモデルに基づく従業員ウェルビーイング管理プラットフォーム。AI技術を活用した精密測定、インテリジェントな予測、個別化された介入を実現',
      cta: '完全レポートを見る'
    },
    solution: {
      title: 'AIを活用した従業員ウェルビーイング管理プラットフォーム',
      subtitle: 'JD-Rモデルの科学的フレームワークに基づき、AI技術を通じて「測定-診断-介入」の完全なクローズドループ管理を実現',
      corePhilosophy: 'コア設計理念',
      philosophyDescription: '"標準化された幸福" = AIによる各従業員の職務要求の継続的監視と、最適な職務資源のインテリジェントな推奨により、「要求-資源」の動的バランスを体系的に維持し、最終的に高レベルのワークエンゲージメントを促進',
      systemArchitecture: 'システムアーキテクチャモジュール',
      implementationPlan: '段階的実装計画',
      aiCapabilities: 'AIコア機能',
      privacyCompliance: 'プライバシー保護とコンプライアンス管理',
      
      modules: {
        measurement: {
          title: '測定エンジン：マルチモーダル従業員状態監視',
          description: '従来の調査とAI技術を組み合わせ、従業員の真の状態を正確に捕捉',
          features: [
            'UWES職務従事度尺度（17項目、9項目、3項目版）',
            '高頻度パルス調査',
            '自由記述コメントのNLP感情分析',
            '心拍変動性（HRV）生理監視',
            '勤務データ行動分析',
            '文化適応設計（「本音」と「建前」への対応）'
          ],
          technologies: ['自然言語処理', '感情コンピューティング', '生体認証', '統計分析']
        },
        prediction: {
          title: 'AI予測コア：インテリジェントリスク警告システム',
          description: '機械学習ベースの離職予測とウェルビーイング傾向分析',
          features: [
            '離職予測モデル（ランダムフォレスト、LightGBM）',
            '多次元特徴工学（個人情報、職務役割、業績報酬）',
            '感情傾向分析と異常検出',
            'チーム雰囲気感染効果モデリング',
            'リアルタイムリスクスコアと警告',
            '予測精度>85%'
          ],
          technologies: ['機械学習', '深層学習', '時系列分析', '異常検出']
        },
        recommendation: {
          title: '個別化推奨：JD-Rモデル駆動のリソースマッチング',
          description: 'JD-Rモデルベースのインテリジェント職務リソース推奨システム',
          features: [
            '個人職務要求-リソースバランス分析',
            'AI駆動の福利厚生リソース推奨',
            '学習開発パスの個別化カスタマイズ',
            '職務方式最適化提案',
            'チーム介入措置推奨',
            'フィードバックループ継続最適化'
          ],
          technologies: ['推奨アルゴリズム', '協調フィルタリング', '強化学習', '知識グラフ']
        },
        integration: {
          title: '統合プラットフォーム：エンタープライズ級データハブ',
          description: '既存HRシステムとのシームレス統合、統一管理ビューの提供',
          features: [
            'HRISシステム深度統合',
            'リアルタイムデータ同期と処理',
            '管理者ダッシュボードと分析ビュー',
            'モバイル従業員ポータル',
            'プライバシー保護とコンプライアンス管理',
            'APIオープンエコシステム'
          ],
          technologies: ['クラウドネイティブアーキテクチャ', 'マイクロサービス', 'APIゲートウェイ', 'データレイク']
        }
      },
      
      phases: {
        phase1: {
          title: '第1段階：基盤建設',
          duration: '2025年9-11月',
          focus: 'コア基盤インフラ',
          deliverables: ['データパイプライン構築', '基本ダッシュボード', 'HRIS統合', 'セキュリティフレームワーク']
        },
        phase2: {
          title: '第2段階：AIモデル開発',
          duration: '2025年12月-2026年1月',
          focus: 'インテリジェントアルゴリズム実装',
          deliverables: ['離職予測モデル', '推奨エンジン', 'NLP感情分析', '異常検出']
        },
        phase3: {
          title: '第3段階：ユーザーインターフェース',
          duration: '2026年2-3月',
          focus: 'ユーザーエクスペリエンス最適化',
          deliverables: ['モバイルアプリケーション', '拡張ダッシュボード', 'ユーザートレーニング', 'ゲーミフィケーション要素']
        },
        phase4: {
          title: '第4段階：本番展開',
          duration: '2026年4月',
          focus: 'システム本稼働最適化',
          deliverables: ['システム最適化', 'セキュリティテスト', '本番展開', '継続サポート']
        }
      },
      
      aiFeatures: {
        textMining: {
          feature: 'テキストマイニングと感情分析',
          description: '従業員フィードバックの潜在的感情と主要テーマを分析',
          benefit: '従来の調査では得られない深い洞察を捕捉',
          accuracy: '感情分類精度>92%'
        },
        turnoverPrediction: {
          feature: '離職リスク予測',
          description: '多次元特徴に基づく従業員離職確率評価',
          benefit: '3-6ヶ月前の高リスク従業員特定',
          accuracy: '予測精度>85%'
        },
        personalizedRecommendation: {
          feature: '個別化リソース推奨',
          description: '各従業員にカスタマイズされた福利厚生と成長提案',
          benefit: '福利厚生利用率と従業員満足度向上',
          accuracy: '推奨精度>80%'
        },
        teamDynamics: {
          feature: 'チームダイナミクス分析',
          description: 'チーム感情感染と協働パターンの特定',
          benefit: 'チーム構成と管理戦略の最適化',
          accuracy: 'チームリスク特定率>78%'
        }
      },
      
      privacy: {
        dataMinimization: {
          aspect: 'データ最小化',
          description: '必要なデータのみ収集、使用目的の明確化',
          implementation: 'APPI法規に基づくデータ収集戦略'
        },
        transparency: {
          aspect: '透明性保障',
          description: '従業員のデータ使用に対する完全な知る権利',
          implementation: '詳細なプライバシー声明と同意メカニズム'
        },
        technicalProtection: {
          aspect: '技術保護',
          description: '先進的プライバシー保護技術の採用',
          implementation: 'フェデレーテッドラーニング、差分プライバシー、データ暗号化'
        },
        compliance: {
          aspect: 'コンプライアンス監督',
          description: '日本個人情報保護法要件への適合',
          implementation: '定期的コンプライアンス監査とデータ保護影響評価'
        }
      }
    },
    
    market: {
      title: '市場分析',
      overview: '市場概要',
      trends: '市場傾向',
      insights: '主要インサイト',
      drivers: [
        'デジタル変革の加速によるHR技術アップグレードの推進',
        'リモートワークの常態化によるインテリジェントHRツール需要の増加',
        'データ駆動意思決定への企業の重視度向上',
        '激しい人材競争による企業の人材管理最適化',
        '規制コンプライアンス要件によるHRプロセス標準化の推進'
      ],
      challenges: [
        'データプライバシーとセキュリティの懸念',
        '技術統合の複雑性',
        '変革管理とユーザー受容度',
        '投資収益率測定の困難',
        'スキルギャップと人材不足'
      ],
      successFactors: [
        '明確なデジタル戦略とロードマップ',
        '経営陣サポートとリソース投入',
        'ユーザートレーニングと変革管理',
        'データガバナンスとセキュリティ対策',
        'ベンダー選択とパートナーシップ'
      ]
    },
    
    japanMarket: {
      title: '日本市場分析',
      marketSize: '市場規模',
      smeData: '中小企業データ',
      culture: {
        challenges: [
          'HR技術採用率の低さ',
          '伝統的管理方式の根深い定着',
          '「本音」と「建前」の文化的差異',
          '中立的回答傾向、直接的批判の回避'
        ],
        opportunities: [
          '政府60兆円生産性投資',
          '義務的ストレスチェックコンプライアンス要件',
          '働き方改革の推進',
          '労働力不足による革新需要の創出'
        ],
        adaptations: [
          '間接的コミュニケーション規範の尊重',
          'グループベースの介入措置',
          'マルチモーダル測定方法',
          '文化適応性設計'
        ]
      },
      benefits: {
        legal: '法定福利',
        popular: '人気福利'
      },
      workEngagement: {
        vigor: {
          dimension: '活力 (Vigor)',
          description: '職務において高レベルのエネルギーと精神的回復力を示す',
          indicators: ['高エネルギーレベル', '粘り強さ', '努力を投入する意欲', '困難に直面した時の回復力']
        },
        dedication: {
          dimension: '熱意 (Dedication)',
          description: '職務に対する強い関与感を持ち、意味と誇りを体験する',
          indicators: ['職務関与感の強さ', '職務の意味を感じる', '職務に誇りを持つ', '情熱的投入']
        },
        absorption: {
          dimension: '没頭 (Absorption)',
          description: '職務に完全に楽しく没頭し、時間の経過を忘れる',
          indicators: ['完全集中', '時間感覚の曖昧化', '職務から離れ難い', '深い没入状態']
        }
      }
    },
    
    competition: {
      title: '競合分析',
      analysis: '競争状況分析',
      competitors: '主要競合他社',
      marketShare: '市場シェア',
      strengths: '強み',
      weaknesses: '弱み',
      targetMarket: 'ターゲット市場'
    }
  },
  
  en: {
    // English translations
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      coreFeatures: 'Core Features',
      technologies: 'Technologies',
      businessValue: 'Business Value',
      focus: 'Focus',
      deliverables: 'Deliverables'
    },
    nav: {
      home: 'Home',
      solution: 'AI Solution',
      market: 'Market Analysis',
      competition: 'Competition',
      opportunities: 'Opportunities',
      contact: 'Contact'
    },
    hero: {
      title: 'AI+HR',
      subtitle: 'Japan SME Market Research Report',
      description: 'Employee wellbeing management platform based on JD-R model, achieving precise measurement, intelligent prediction, and personalized intervention through AI technology',
      cta: 'View Full Report'
    },
    solution: {
      title: 'AI-Powered Employee Wellbeing Management Platform',
      subtitle: 'Based on the scientific framework of JD-R model, achieving complete closed-loop management of "Measurement-Diagnosis-Intervention" through AI technology',
      corePhilosophy: 'Core Design Philosophy',
      philosophyDescription: '"Standardized Happiness" = Through AI continuous monitoring of each employee\'s job demands, and intelligent recommendation of the most suitable job resources, systematically maintaining the dynamic balance of "Demands-Resources", ultimately promoting high-level work engagement',
      systemArchitecture: 'System Architecture Modules',
      implementationPlan: 'Phased Implementation Plan',
      aiCapabilities: 'AI Core Capabilities',
      privacyCompliance: 'Privacy Protection and Compliance Management',
      
      modules: {
        measurement: {
          title: 'Measurement Engine: Multimodal Employee State Monitoring',
          description: 'Combining traditional surveys with AI technology to accurately capture real employee conditions',
          features: [
            'UWES Work Engagement Scale (17-item, 9-item, 3-item versions)',
            'High-frequency Pulse Surveys',
            'NLP sentiment analysis for free-text comments',
            'Heart Rate Variability (HRV) physiological monitoring',
            'Behavioral analysis of attendance data',
            'Cultural adaptation design (responding to "Honne" and "Tatemae")'
          ],
          technologies: ['Natural Language Processing', 'Affective Computing', 'Biometric Recognition', 'Statistical Analysis']
        },
        prediction: {
          title: 'AI Prediction Core: Intelligent Risk Warning System',
          description: 'Machine learning-based turnover prediction and wellbeing trend analysis',
          features: [
            'Turnover prediction models (Random Forest, LightGBM)',
            'Multi-dimensional feature engineering (personal info, job roles, performance compensation)',
            'Emotional trend analysis and anomaly detection',
            'Team atmosphere contagion effect modeling',
            'Real-time risk scoring and alerts',
            'Prediction accuracy >85%'
          ],
          technologies: ['Machine Learning', 'Deep Learning', 'Time Series Analysis', 'Anomaly Detection']
        },
        recommendation: {
          title: 'Personalized Recommendation: JD-R Model-Driven Resource Matching',
          description: 'Intelligent job resource recommendation system based on JD-R model',
          features: [
            'Personal job demands-resources balance analysis',
            'AI-driven benefit resource recommendations',
            'Personalized learning and development path customization',
            'Work style optimization suggestions',
            'Team intervention measure recommendations',
            'Feedback loop continuous optimization'
          ],
          technologies: ['Recommendation Algorithms', 'Collaborative Filtering', 'Reinforcement Learning', 'Knowledge Graph']
        },
        integration: {
          title: 'Integration Platform: Enterprise-Grade Data Hub',
          description: 'Seamless integration with existing HR systems, providing unified management view',
          features: [
            'Deep HRIS system integration',
            'Real-time data synchronization and processing',
            'Manager dashboard and analytics view',
            'Mobile employee portal',
            'Privacy protection and compliance management',
            'Open API ecosystem'
          ],
          technologies: ['Cloud-Native Architecture', 'Microservices', 'API Gateway', 'Data Lake']
        }
      },
      
      phases: {
        phase1: {
          title: 'Phase 1: Foundation Building',
          duration: 'Sep-Nov 2025',
          focus: 'Core Infrastructure',
          deliverables: ['Data pipeline construction', 'Basic dashboard', 'HRIS integration', 'Security framework']
        },
        phase2: {
          title: 'Phase 2: AI Model Development',
          duration: 'Dec 2025 - Jan 2026',
          focus: 'Intelligent Algorithm Implementation',
          deliverables: ['Turnover prediction models', 'Recommendation engine', 'NLP sentiment analysis', 'Anomaly detection']
        },
        phase3: {
          title: 'Phase 3: User Interface',
          duration: 'Feb-Mar 2026',
          focus: 'User Experience Optimization',
          deliverables: ['Mobile application', 'Enhanced dashboard', 'User training', 'Gamification elements']
        },
        phase4: {
          title: 'Phase 4: Production Deployment',
          duration: 'Apr 2026',
          focus: 'System Launch Optimization',
          deliverables: ['System optimization', 'Security testing', 'Production deployment', 'Ongoing support']
        }
      },
      
      aiFeatures: {
        textMining: {
          feature: 'Text Mining and Sentiment Analysis',
          description: 'Analyze implicit emotions and key themes in employee feedback',
          benefit: 'Capture deep insights unavailable through traditional surveys',
          accuracy: 'Sentiment classification accuracy >92%'
        },
        turnoverPrediction: {
          feature: 'Turnover Risk Prediction',
          description: 'Multi-dimensional feature-based employee turnover probability assessment',
          benefit: 'Identify high-risk employees 3-6 months in advance',
          accuracy: 'Prediction accuracy >85%'
        },
        personalizedRecommendation: {
          feature: 'Personalized Resource Recommendation',
          description: 'Tailored benefit and development suggestions for each employee',
          benefit: 'Improve benefit utilization and employee satisfaction',
          accuracy: 'Recommendation precision >80%'
        },
        teamDynamics: {
          feature: 'Team Dynamics Analysis',
          description: 'Identify team emotional contagion and collaboration patterns',
          benefit: 'Optimize team configuration and management strategies',
          accuracy: 'Team risk identification rate >78%'
        }
      },
      
      privacy: {
        dataMinimization: {
          aspect: 'Data Minimization',
          description: 'Collect only necessary data with clear usage purposes',
          implementation: 'Data collection strategy based on APPI regulations'
        },
        transparency: {
          aspect: 'Transparency Assurance',
          description: 'Employees have complete right to know about data usage',
          implementation: 'Detailed privacy statements and consent mechanisms'
        },
        technicalProtection: {
          aspect: 'Technical Protection',
          description: 'Adopt advanced privacy protection technologies',
          implementation: 'Federated learning, differential privacy, data encryption'
        },
        compliance: {
          aspect: 'Compliance Supervision',
          description: 'Comply with Japan Personal Information Protection Act requirements',
          implementation: 'Regular compliance audits and data protection impact assessments'
        }
      }
    },
    
    market: {
      title: 'Market Analysis',
      overview: 'Market Overview',
      trends: 'Market Trends',
      insights: 'Key Insights',
      drivers: [
        'Digital transformation acceleration driving HR technology upgrades',
        'Remote work normalization increasing demand for intelligent HR tools',
        'Enterprises increasing emphasis on data-driven decision making',
        'Intense talent competition prompting enterprises to optimize talent management',
        'Regulatory compliance requirements driving HR process standardization'
      ],
      challenges: [
        'Data privacy and security concerns',
        'Technology integration complexity',
        'Change management and user acceptance',
        'Difficulty in measuring return on investment',
        'Skills gap and talent shortage'
      ],
      successFactors: [
        'Clear digital strategy and roadmap',
        'Senior management support and resource investment',
        'User training and change management',
        'Data governance and security measures',
        'Vendor selection and partnerships'
      ]
    },
    
    japanMarket: {
      title: 'Japan Market Analysis',
      marketSize: 'Market Size',
      smeData: 'SME Data',
      culture: {
        challenges: [
          'Low HR technology adoption rate',
          'Deeply rooted traditional management methods',
          'Cultural differences between "Honne" and "Tatemae"',
          'Neutral response tendency, avoiding direct criticism'
        ],
        opportunities: [
          'Government 60 trillion yen productivity investment',
          'Mandatory stress check compliance requirements',
          'Work style reform promotion',
          'Labor shortage driving innovation demand'
        ],
        adaptations: [
          'Respect for indirect communication norms',
          'Group-based intervention measures',
          'Multimodal measurement methods',
          'Cultural adaptability design'
        ]
      },
      benefits: {
        legal: 'Legal Benefits',
        popular: 'Popular Benefits'
      },
      workEngagement: {
        vigor: {
          dimension: 'Vigor',
          description: 'Demonstrating high levels of energy and mental resilience at work',
          indicators: ['High energy levels', 'Persistence', 'Willingness to invest effort', 'Resilience when facing difficulties']
        },
        dedication: {
          dimension: 'Dedication',
          description: 'Having strong involvement in work, experiencing meaning and pride',
          indicators: ['Strong work involvement', 'Feeling work meaning', 'Pride in work', 'Passionate engagement']
        },
        absorption: {
          dimension: 'Absorption',
          description: 'Completely and happily immersed in work, feeling time flies',
          indicators: ['Complete concentration', 'Blurred sense of time', 'Difficulty detaching from work', 'Deep immersion state']
        }
      }
    },
    
    competition: {
      title: 'Competition Analysis',
      analysis: 'Competitive Landscape Analysis',
      competitors: 'Major Competitors',
      marketShare: 'Market Share',
      strengths: 'Strengths',
      weaknesses: 'Weaknesses',
      targetMarket: 'Target Market'
    }
  }
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale as keyof typeof translations] || translations[defaultLocale as keyof typeof translations]
}