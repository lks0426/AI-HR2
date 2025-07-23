export const ja = {
  // 共通
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

  // ナビゲーション
  nav: {
    home: 'ホーム',
    solution: 'AIソリューション',
    market: '市場分析',
    japanMarket: '日本市場分析',
    workEngagement: 'ワークエンゲージメント',
    competition: '競合分析',
    caseStudy: '成功事例',
    strategy: '戦略提言',
    opportunities: '市場機会',
    contact: 'お問い合わせ'
  },

  // ヒーローセクション
  hero: {
    title: 'AI+HR',
    subtitle: '日本中小企業市場調査レポート',
    description: 'JD-Rモデルに基づく従業員ウェルビーイング管理プラットフォーム。AI技術を活用した精密測定、インテリジェントな予測、個別化された介入を実現',
    cta: '完全レポートを見る'
  },

  // サイトタイトル
  site: {
    title: 'AI+HR 市場調査',
    subtitle: 'プロフェッショナル事業分析レポート'
  },

  // AIソリューション
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
        shortTitle: '測定エンジン',
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
        shortTitle: 'AI予測',
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
        shortTitle: '個別化推奨',
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
        shortTitle: '統合プラットフォーム',
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

  // 市場分析
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

  // 日本市場
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
      title: 'ワークエンゲージメント三次元',
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

  // 競合分析
  competition: {
    title: '競合分析',
    analysis: '競争状況分析',
    competitors: '主要競合他社',
    marketShare: '市場シェア',
    strengths: '強み',
    weaknesses: '弱み',
    targetMarket: 'ターゲット市場'
  }
}