// ──────────────────────────────────────────────
// Internationalization System for YAS 2.0
// Full translations: en, zh-TW, zh-CN, ja, vi
// Other locales use placeholder stubs for now.
// ──────────────────────────────────────────────

export type Locale =
  | 'en'
  | 'zh-TW'
  | 'zh-CN'
  | 'ja'
  | 'ko'
  | 'th'
  | 'id'
  | 'vi'
  | 'ms'
  | 'es'
  | 'fr'
  | 'de'
  | 'ar';

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
  /** BCP 47 language tag for html lang attribute */
  htmlLang: string;
}

export const locales: LocaleConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧', htmlLang: 'en' },
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文', dir: 'ltr', flag: '🇭🇰', htmlLang: 'zh-Hant' },
  { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文', dir: 'ltr', flag: '🇨🇳', htmlLang: 'zh-Hans' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', flag: '🇯🇵', htmlLang: 'ja' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', flag: '🇰🇷', htmlLang: 'ko' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr', flag: '🇹🇭', htmlLang: 'th' },
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia', dir: 'ltr', flag: '🇮🇩', htmlLang: 'id' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr', flag: '🇻🇳', htmlLang: 'vi' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr', flag: '🇲🇾', htmlLang: 'ms' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', flag: '🇪🇸', htmlLang: 'es' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', flag: '🇫🇷', htmlLang: 'fr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', flag: '🇩🇪', htmlLang: 'de' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇸🇦', htmlLang: 'ar' },
];

export type TranslationKeys = {
  // Navigation
  'nav.platform': string;
  'nav.products': string;
  'nav.solutions': string;
  'nav.proof': string;
  'nav.developers': string;
  'nav.trust': string;
  'nav.company': string;
  'nav.contact': string;
  'nav.search': string;
  'nav.bookDemo': string;
  // Hero
  'hero.kicker': string;
  'hero.headline': string;
  'hero.headlineGradient': string;
  'hero.subhead': string;
  'hero.subheadExtended': string;
  'hero.cta.primary': string;
  'hero.cta.secondary': string;
  // Trust band
  'trust.insurers': string;
  'trust.customers': string;
  'trust.footer': string;
  // Problem / Promise
  'problem.title': string;
  'problem.text': string;
  'promise.title': string;
  'promise.text': string;
  'problem.caption': string;
  // How it works
  'howItWorks.kicker': string;
  'howItWorks.title': string;
  'howItWorks.step1.label': string;
  'howItWorks.step1.desc': string;
  'howItWorks.step2.label': string;
  'howItWorks.step2.desc': string;
  'howItWorks.step3.label': string;
  'howItWorks.step3.desc': string;
  'howItWorks.step4.label': string;
  'howItWorks.step4.desc': string;
  // Infrastructure visual
  'infra.headline': string;
  'infra.headlineGradient': string;
  // Now & Next
  'nowNext.title': string;
  'now.kicker': string;
  'now.title': string;
  'now.items': string;
  'next.kicker': string;
  'next.title': string;
  'next.items': string;
  // Bridge
  'bridge.text': string;
  'bridge.textExtended': string;
  // Products
  'products.kicker': string;
  'products.title': string;
  'products.subtitle': string;
  // Platform / How it works
  'platform.kicker': string;
  'platform.title': string;
  'platform.subtitle': string;
  // Metrics
  'metrics.kicker': string;
  'metrics.title': string;
  'metrics.subtitle': string;
  // Case studies
  'caseStudies.kicker': string;
  'caseStudies.title': string;
  'caseStudies.subtitle': string;
  // Global readiness
  'global.kicker': string;
  'global.title': string;
  'global.subtitle': string;
  'global.regulatory': string;
  'global.regulatoryExtended': string;
  'global.languages': string;
  'global.cityCaption': string;
  // CTA
  'cta.title': string;
  'cta.subtitle': string;
  'cta.primary': string;
  'cta.secondary': string;
  // Trust teaser
  'trustTeaser.title': string;
  'trustTeaser.subtitle': string;
  // Common
  'common.learnMore': string;
  'common.viewAll': string;
  'common.readCase': string;
  'common.consumer': string;
  'common.sme': string;
  'common.enterprise': string;
  'common.placeholder': string;
  // Footer
  'footer.tagline': string;
  'footer.rights': string;
  'footer.privacy': string;
  'footer.terms': string;
  'footer.security': string;
  'footer.compliance': string;
  'footer.disclaimer': string;
  'footer.disclaimerExtended': string;
  // Footer sections
  'footer.platform': string;
  'footer.products': string;
  'footer.resources': string;
  'footer.company': string;
  // Mobile menu
  'mobile.bookDemo': string;
  // ── Inner page keys ──
  'inner.bookDemo': string;
  'inner.apiDocs': string;
  'inner.getStarted': string;
  'inner.explore': string;
  'inner.apply': string;
  'inner.overview': string;
  // Platform page
  'platformPage.heroTitle': string;
  'platformPage.heroGradient': string;
  'platformPage.heroSubtitle': string;
  'platformPage.pipeline': string;
  'platformPage.inPlainTerms': string;
  'platformPage.dataEthics': string;
  'platformPage.modules': string;
  'platformPage.modulesSubtitle': string;
  'platformPage.architecture': string;
  'platformPage.performance': string;
  'platformPage.integration': string;
  'platformPage.integrationSubtitle': string;
  'platformPage.whatYouGet': string;
  // Product page
  'productPage.heroKicker': string;
  'productPage.heroTitle': string;
  'productPage.heroSubtitle': string;
  'productPage.bySegment': string;
  'productPage.segmentSubtitle': string;
  'productPage.useCases': string;
  'productPage.features': string;
  'productPage.howItWorks': string;
  'productPage.performanceProof': string;
  'productPage.ecosystem': string;
  // Solutions page
  'solutionPage.heroKicker': string;
  'solutionPage.heroTitle': string;
  'solutionPage.heroGradient': string;
  'solutionPage.heroSubtitle': string;
  'solutionPage.challengeVsSolution': string;
  'solutionPage.challenges': string;
  'solutionPage.capabilities': string;
  'solutionPage.exampleJourney': string;
  'solutionPage.outcomes': string;
  // Company page
  'companyPage.aboutKicker': string;
  'companyPage.aboutTitle': string;
  'companyPage.whatYasDoes': string;
  'companyPage.whatYasIsNot': string;
  'companyPage.whatWeBelieve': string;
  'companyPage.whereWeGo': string;
  'companyPage.ourJourney': string;
  'companyPage.presence': string;
  'companyPage.leadershipTitle': string;
  'companyPage.leadershipSubtitle': string;
  'companyPage.careersTitle': string;
  'companyPage.careersSubtitle': string;
  'companyPage.openPositions': string;
  'companyPage.mediaKit': string;
  // Contact page
  'contactPage.heroKicker': string;
  'contactPage.heroTitle': string;
  'contactPage.heroGradient': string;
  'contactPage.heroSubtitle': string;
  'contactPage.formTitle': string;
  'contactPage.firstName': string;
  'contactPage.lastName': string;
  'contactPage.workEmail': string;
  'contactPage.company': string;
  'contactPage.role': string;
  'contactPage.message': string;
  'contactPage.submit': string;
  'contactPage.thankYou': string;
  'contactPage.thankYouMsg': string;
  'contactPage.responseTime': string;
  // Trust page
  'trustPage.heroTitle': string;
  'trustPage.heroGradient': string;
  'trustPage.heroSubtitle': string;
  'trustPage.commonQuestions': string;
  'trustPage.documentation': string;
  // Proof page
  'proofPage.heroTitle': string;
  'proofPage.heroGradient': string;
  'proofPage.heroSubtitle': string;
  'proofPage.press': string;
  'proofPage.partners': string;
  // Case study detail
  'caseStudy.notFound': string;
  'caseStudy.client': string;
  'caseStudy.context': string;
  'caseStudy.problem': string;
  'caseStudy.solution': string;
  'caseStudy.operationalFlow': string;
  'caseStudy.ctaTitle': string;
  'caseStudy.ctaSubtitle': string;
  // Proof sub-pages
  'proofPage.pressSubtitle': string;
  'proofPage.pressFeatured': string;
  'proofPage.partnersSubtitle': string;
};

// ──────────────────────────────────────────────
// English (source language)
// ──────────────────────────────────────────────
const en: TranslationKeys = {
  'nav.platform': 'Platform',
  'nav.products': 'Products',
  'nav.solutions': 'Solutions',
  'nav.proof': 'Proof',
  'nav.developers': 'Developers',
  'nav.trust': 'Trust',
  'nav.company': 'Company',
  'nav.contact': 'Contact',
  'nav.search': 'Search',
  'nav.bookDemo': 'Book a Demo',
  'hero.kicker': 'Real-Time Risk Infrastructure',
  'hero.headline': 'Real-Time Risk Infrastructure',
  'hero.headlineGradient': 'for the World\'s Platforms',
  'hero.subhead': 'YAS powers dynamic protection for platforms, insurers, and their customers.',
  'hero.subheadExtended': ' From signal to settlement in seconds — across 8 markets and growing.',
  'hero.cta.primary': 'Explore Products',
  'hero.cta.secondary': 'Partner with YAS',
  'trust.insurers': 'Risk Carriers & Insurer Partners',
  'trust.customers': 'Powering Protection For',
  'trust.footer': 'Built with insurers and distribution partners across HK, MY, VN, TH, SG, and more.',
  'problem.title': 'The Problem',
  'problem.text': 'Insurance prices people on averages. Static underwriting creates friction and perceived unfairness.',
  'promise.title': 'The YAS Approach',
  'promise.text': 'Dynamic coverage based on real-time context. Starts when needed, priced on your moment, stops when done.',
  'problem.caption': 'From static paperwork to real time, dynamic protection.',
  'howItWorks.kicker': 'How It Works',
  'howItWorks.title': 'Real time signals in. Real time protection out.',
  'howItWorks.step1.label': 'Capture Signals',
  'howItWorks.step1.desc': 'Platform events, device data, transaction metadata — with consent.',
  'howItWorks.step2.label': 'Score Risk',
  'howItWorks.step2.desc': 'Real time risk scoring and dynamic pricing for the moment.',
  'howItWorks.step3.label': 'Activate Coverage',
  'howItWorks.step3.desc': 'Seamless policy activation embedded inside the partner platform.',
  'howItWorks.step4.label': 'Settle',
  'howItWorks.step4.desc': 'When triggers happen, streamline claims and settle — fast.',
  'infra.headline': 'Protection should be as dynamic',
  'infra.headlineGradient': ' as the world it covers',
  'nowNext.title': 'Today & Tomorrow',
  'now.kicker': 'Shipped Today',
  'now.title': 'Live products across transport, sports, payments, and lifestyle — with automated claims and instant payouts across 8+ markets.',
  'now.items': '',
  'next.kicker': 'Building Next',
  'next.title': 'Real-time risk layer for platforms, devices, agents, and robotics — with parametric triggers and programmable settlement.',
  'next.items': '',
  'bridge.text': 'YAS is building real time risk infrastructure. Today, we deliver it through market-ready protection products with licensed partners.',
  'bridge.textExtended': ' Every policy issued and every claim served improves our ability to price risk more accurately, make coverage fairer, and unlock dynamic protection that matches how people will live in a world of smart devices, robotics, and software agents.',
  'products.kicker': 'Products',
  'products.title': 'Products',
  'products.subtitle': 'Protection infrastructure for platforms and their customers.',
  'platform.kicker': 'Infrastructure',
  'platform.title': 'How YAS Works',
  'platform.subtitle': 'From signal ingestion to settlement. End to end.',
  'metrics.kicker': 'Performance',
  'metrics.title': 'Platform Performance',
  'metrics.subtitle': 'Quantified outcomes across the YAS infrastructure.',
  'caseStudies.kicker': 'Proof',
  'caseStudies.title': 'Proof in Production',
  'caseStudies.subtitle': 'Real outcomes from live deployments.',
  'global.kicker': 'Global',
  'global.title': 'Global Readiness',
  'global.subtitle': 'Multi-market. Multi-language. Multi-regulatory.',
  'global.regulatory': 'Regulatory Posture',
  'global.regulatoryExtended': 'YAS provides technology infrastructure. Where licensing is required, risk is carried by licensed insurers and reinsurers. YAS maintains technology partnerships with regulated entities and supports compliance requirements across all active markets.',
  'global.languages': '13 languages supported:',
  'global.cityCaption': 'Hong Kong HQ & Singapore — our first two markets.',
  'cta.title': 'Build With YAS',
  'cta.subtitle': 'For platforms, insurers, and developers building the next generation of protection.',
  'cta.primary': 'Explore Products',
  'cta.secondary': 'Partner with YAS',
  'trustTeaser.title': 'Trust Hub',
  'trustTeaser.subtitle': 'Security, privacy, compliance, model governance, and claims fairness.',
  'common.learnMore': 'Learn More',
  'common.viewAll': 'View All',
  'common.readCase': 'Read Case Study',
  'common.consumer': 'Consumer',
  'common.sme': 'SME',
  'common.enterprise': 'Enterprise',
  'common.placeholder': '[Placeholder]',
  'footer.tagline': 'Real-time risk infrastructure. Powering dynamic protection for platforms and insurers globally.',
  'footer.rights': '2026 YAS Digital. All rights reserved.',
  'footer.privacy': 'Privacy',
  'footer.terms': 'Terms',
  'footer.security': 'Security',
  'footer.compliance': 'Compliance',
  'footer.disclaimer': 'YAS is not a licensed insurer. YAS provides technology infrastructure, embedded distribution rails, AI risk pricing, claims automation, and payout experience.',
  'footer.disclaimerExtended': ' Where licensing is required, insurance risk is carried by licensed insurers and reinsurers.',
  'footer.platform': 'Platform',
  'footer.products': 'Products',
  'footer.resources': 'Resources',
  'footer.company': 'Company',
  'mobile.bookDemo': 'Book a Demo',
  // Inner page
  'inner.bookDemo': 'Book a Demo',
  'inner.apiDocs': 'API Documentation',
  'inner.getStarted': 'Get Started',
  'inner.explore': 'Explore',
  'inner.apply': 'Apply',
  'inner.overview': 'Overview',
  // Platform page
  'platformPage.heroTitle': 'Protection Infrastructure',
  'platformPage.heroGradient': 'End to End',
  'platformPage.heroSubtitle': 'Real time risk signals in. Real time protection out. From signal intake to settlement, every module is designed for scale, speed, and regulatory compliance.',
  'platformPage.pipeline': 'Data Flow Pipeline',
  'platformPage.inPlainTerms': 'In Plain Terms',
  'platformPage.dataEthics': 'Data Ethics & Privacy',
  'platformPage.modules': 'Platform Modules',
  'platformPage.modulesSubtitle': 'Seven interconnected modules forming a complete protection infrastructure stack.',
  'platformPage.architecture': 'System Architecture',
  'platformPage.performance': 'Performance',
  'platformPage.integration': 'Integration & Time to Launch',
  'platformPage.integrationSubtitle': 'YAS is designed for rapid integration. API-first architecture with comprehensive SDKs.',
  'platformPage.whatYouGet': 'What you get',
  // Product page
  'productPage.heroKicker': 'Products',
  'productPage.heroTitle': 'Product Suites',
  'productPage.heroSubtitle': 'Scalable protection infrastructure across verticals. Each suite supports Consumer, SME, and Enterprise segments with dedicated use cases.',
  'productPage.bySegment': 'By Segment',
  'productPage.segmentSubtitle': 'Tailored use cases and features for every customer tier.',
  'productPage.useCases': 'Use Cases',
  'productPage.features': 'Features',
  'productPage.howItWorks': 'How It Works',
  'productPage.performanceProof': 'Performance Proof',
  'productPage.ecosystem': 'Ecosystem Partners',
  // Solutions page
  'solutionPage.heroKicker': 'Solutions',
  'solutionPage.heroTitle': 'Industry',
  'solutionPage.heroGradient': 'Solutions',
  'solutionPage.heroSubtitle': 'Embedded protection infrastructure for platforms, wallets, mobility, commerce, and emerging device ecosystems. Fast integration, clear compliance posture, carrier-backed.',
  'solutionPage.challengeVsSolution': 'Challenge vs. Solution',
  'solutionPage.challenges': 'Industry Challenges',
  'solutionPage.capabilities': 'YAS Capabilities',
  'solutionPage.exampleJourney': 'Example Journey',
  'solutionPage.outcomes': 'Outcomes',
  // Company page
  'companyPage.aboutKicker': 'Company',
  'companyPage.aboutTitle': 'About',
  'companyPage.whatYasDoes': 'What YAS Does',
  'companyPage.whatYasIsNot': 'What YAS Is Not',
  'companyPage.whatWeBelieve': 'What We Believe',
  'companyPage.whereWeGo': 'Where We\'re Going',
  'companyPage.ourJourney': 'Our Journey',
  'companyPage.presence': 'Presence',
  'companyPage.leadershipTitle': 'Leadership',
  'companyPage.leadershipSubtitle': 'The team building global fintech protection infrastructure.',
  'companyPage.careersTitle': 'Careers',
  'companyPage.careersSubtitle': 'Join us in building the infrastructure that makes protection accessible for everyone.',
  'companyPage.openPositions': 'Open Positions',
  'companyPage.mediaKit': 'Media Kit',
  // Contact page
  'contactPage.heroKicker': 'Contact',
  'contactPage.heroTitle': 'Let\'s',
  'contactPage.heroGradient': 'Talk',
  'contactPage.heroSubtitle': 'Whether you\'re an insurer exploring modern distribution, a platform looking to embed protection, or a developer evaluating our APIs.',
  'contactPage.formTitle': 'Book a Demo',
  'contactPage.firstName': 'First Name',
  'contactPage.lastName': 'Last Name',
  'contactPage.workEmail': 'Work Email',
  'contactPage.company': 'Company',
  'contactPage.role': 'I am a...',
  'contactPage.message': 'Message (optional)',
  'contactPage.submit': 'Submit',
  'contactPage.thankYou': 'Thank You',
  'contactPage.thankYouMsg': 'Your message has been received. We\'ll get back to you within 24 hours with next steps.',
  'contactPage.responseTime': 'Typical response within 24 hours',
  // Trust page
  'trustPage.heroTitle': 'Trust',
  'trustPage.heroGradient': 'Hub',
  'trustPage.heroSubtitle': 'Security, privacy, compliance, model governance, claims fairness, and audit controls. Trust is foundational to every layer of YAS infrastructure.',
  'trustPage.commonQuestions': 'Common Questions',
  'trustPage.documentation': 'Documentation & Policies',
  // Proof page
  'proofPage.heroTitle': 'Proof in',
  'proofPage.heroGradient': 'Production',
  'proofPage.heroSubtitle': 'Real outcomes from live deployments with licensed partners.',
  'proofPage.press': 'Press & News',
  'proofPage.partners': 'Partner Ecosystem',
  'caseStudy.notFound': 'Case study not found',
  'caseStudy.client': 'Client',
  'caseStudy.context': 'Context',
  'caseStudy.problem': 'Problem',
  'caseStudy.solution': 'Solution',
  'caseStudy.operationalFlow': 'Operational Flow',
  'caseStudy.ctaTitle': 'See What YAS Can Do For You',
  'caseStudy.ctaSubtitle': 'Explore how YAS infrastructure can power your protection deployment.',
  'proofPage.pressSubtitle': 'Latest coverage and announcements from YAS.',
  'proofPage.pressFeatured': 'Featured',
  'proofPage.partnersSubtitle': 'Insurers, reinsurers, distribution partners, and customers powering protection with YAS infrastructure.',
};

// ──────────────────────────────────────────────
// Traditional Chinese (繁體中文) — HK / TW
// ──────────────────────────────────────────────
const zhTW: TranslationKeys = {
  'nav.platform': '平台',
  'nav.products': '產品',
  'nav.solutions': '解決方案',
  'nav.proof': '成功案例',
  'nav.developers': '開發者',
  'nav.trust': '信任中心',
  'nav.company': '關於我們',
  'nav.contact': '聯繫我們',
  'nav.search': '搜尋',
  'nav.bookDemo': '預約演示',
  'hero.kicker': '即時風險基礎設施',
  'hero.headline': '全球平台適用的',
  'hero.headlineGradient': '即時風險基礎設施',
  'hero.subhead': 'YAS 為平台、保險公司及其客戶提供動態保障。',
  'hero.subheadExtended': '數秒內從信號到結算——覆蓋 8 個市場並持續擴張。',
  'hero.cta.primary': '探索產品',
  'hero.cta.secondary': '成為 YAS 合作夥伴',
  'trust.insurers': '風險承保及保險公司合作夥伴',
  'trust.customers': '保障賦能',
  'trust.footer': '與香港、馬來西亞、越南、泰國、新加坡等地的保險公司及分銷夥伴共建。',
  'problem.title': '行業痛點',
  'problem.text': '傳統保險以平均值定價、更新緩慢，難以適應現代生活節奏。靜態核保造成摩擦與不公平感。',
  'promise.title': 'YAS 方案',
  'promise.text': '基於即時情境的動態保障：需要時啟動，按當下定價，結束即停���你看得懂的公平定價。',
  'problem.caption': '從靜態文書到即時動態保障。',
  'howItWorks.kicker': '運作原理',
  'howItWorks.title': '即時信號輸入，即時保障輸出。',
  'howItWorks.step1.label': '擷取信號',
  'howItWorks.step1.desc': '平台事件、裝置數據、交易元數據——經用戶同意。',
  'howItWorks.step2.label': '風險評分',
  'howItWorks.step2.desc': '即時風險評分與動態定價。',
  'howItWorks.step3.label': '啟動保障',
  'howItWorks.step3.desc': '無縫嵌入合作夥伴平台的保單啟動。',
  'howItWorks.step4.label': '理賠結算',
  'howItWorks.step4.desc': '觸發事件後，快速理賠結算。',
  'infra.headline': '為未來而建的',
  'infra.headlineGradient': '基礎設施',
  'nowNext.title': '現在與未來',
  'now.kicker': '已上線',
  'now.title': '與持牌合作夥伴及保險公司推出的市場就緒保障產品。',
  'now.items': '交通、運動、支付等領域的在線產品|B2B2C 平台及直接分銷|自動化理賠與即時賠付|合作夥伴控制台與即時報告',
  'next.kicker': '建設中',
  'next.title': '面向平台、裝置、智能代理和機器人的即時風險層。',
  'next.items': '大規模動態核保|參數觸發與自動結算|裝置與物聯網信號整合|智能代理與機器���風險基礎設施',
  'bridge.text': 'YAS 正在建構即時風險基礎設施。今天，我們透過與持牌合作夥伴推出的市場就緒保障產品來實現。',
  'bridge.textExtended': '每一張簽發的保單、每一次服務的理賠，都在提升我們更精準定價風險、讓保障更公平的能力，並解鎖與智慧裝置、機器人和軟體代理共存的動態保障。',
  'products.kicker': '產品',
  'products.title': '已上線產品',
  'products.subtitle': '可即時購買的真實保障。每個產品套件支持消費者、中小企及企業客戶。',
  'platform.kicker': '基礎設施',
  'platform.title': 'YAS 如何運作',
  'platform.subtitle': '從信號接收到結算的端到端保障基礎設施。',
  'metrics.kicker': '表現',
  'metrics.title': '平台表現',
  'metrics.subtitle': 'YAS 基礎設施的量化成果。',
  'caseStudies.kicker': '成功案例',
  'caseStudies.title': '生產環境的驗證',
  'caseStudies.subtitle': '來自真實部署的成果。',
  'global.kicker': '全球',
  'global.title': '全球就緒',
  'global.subtitle': '為多市場、多語言、多監管部署而建。',
  'global.regulatory': '監管立場',
  'global.regulatoryExtended': 'YAS 提供科技基礎設施。在需要牌照的地區，風險由持牌保險公司和再保險公司承擔。YAS 與受監管實體保持技術合作，支持所有活躍市場的合規要求。',
  'global.languages': '支持 13 種語言：',
  'global.cityCaption': '香港總部與新加坡——我們的首兩個市場。',
  'cta.title': '準備好開始了嗎？',
  'cta.subtitle': '無論您是尋找符合生活需求的保障，還是平台、保險公司或開發者正在建構即時風險基礎設施。',
  'cta.primary': '立即獲取保障',
  'cta.secondary': '成為合作夥伴',
  'trustTeaser.title': '信任中心',
  'trustTeaser.subtitle': '安全、隱私、合規、模型治理與理賠公平性。',
  'common.learnMore': '了解更多',
  'common.viewAll': '查看全部',
  'common.readCase': '閱讀案例',
  'common.consumer': '消費者',
  'common.sme': '中小企',
  'common.enterprise': '企業',
  'common.placeholder': '【佔位符】',
  'footer.tagline': '金融科技保障與結算基礎設施。賦能持牌保險公司在全球提供嵌入式保障的技術。',
  'footer.rights': '2026 YAS Digital. 版權所有。',
  'footer.privacy': '私隱政策',
  'footer.terms': '使用條款',
  'footer.security': '安全',
  'footer.compliance': '合規',
  'footer.disclaimer': 'YAS 並非持牌保險公司。YAS 提供科技基礎設施、嵌入式分銷軌道、AI 風險定價、理賠自動���及賠付體驗。',
  'footer.disclaimerExtended': '在需要牌照的地區，保險風險由持牌保險公司和再保險公司承擔。',
  'footer.platform': '平台',
  'footer.products': '產品',
  'footer.resources': '資源',
  'footer.company': '公司',
  'mobile.bookDemo': '預約演示',
  'inner.bookDemo': '預約演示',
  'inner.apiDocs': 'API 文檔',
  'inner.getStarted': '立即開始',
  'inner.explore': '探索',
  'inner.apply': '申請',
  'inner.overview': '概覽',
  'platformPage.heroTitle': '保障基礎設施',
  'platformPage.heroGradient': '端到端',
  'platformPage.heroSubtitle': '即時風險信號輸入，即時保障輸出。從信號擷取到結算，每個模組均為規模、速度和合規設計。',
  'platformPage.pipeline': '數據流水線',
  'platformPage.inPlainTerms': '簡明說明',
  'platformPage.dataEthics': '數據倫理與隱私',
  'platformPage.modules': '平台模組',
  'platformPage.modulesSubtitle': '七個互聯模組構成完整的保障基礎設施堆疊。',
  'platformPage.architecture': '系統架構',
  'platformPage.performance': '性能表現',
  'platformPage.integration': '整合與上線時間',
  'platformPage.integrationSubtitle': 'YAS 專為快速整合設計。API 優先架構配備完整 SDK。',
  'platformPage.whatYouGet': '您將獲得',
  'productPage.heroKicker': '產品',
  'productPage.heroTitle': '產品套件',
  'productPage.heroSubtitle': '跨行業可擴展的保障基礎設施。每個套件支持消費者、中小企及企業客戶。',
  'productPage.bySegment': '按細分市場',
  'productPage.segmentSubtitle': '為每個客戶層量身定制的用例與功能。',
  'productPage.useCases': '使用案例',
  'productPage.features': '功能特點',
  'productPage.howItWorks': '運作原理',
  'productPage.performanceProof': '性能驗證',
  'productPage.ecosystem': '生態合作夥伴',
  'solutionPage.heroKicker': '解決方案',
  'solutionPage.heroTitle': '行業',
  'solutionPage.heroGradient': '解決方案',
  'solutionPage.heroSubtitle': '面向平台、錢包、出行、商業和新興裝置生態的嵌入式保障基礎設施。',
  'solutionPage.challengeVsSolution': '挑戰 vs 解決方案',
  'solutionPage.challenges': '行業挑戰',
  'solutionPage.capabilities': 'YAS 能力',
  'solutionPage.exampleJourney': '範例旅程',
  'solutionPage.outcomes': '成果',
  'companyPage.aboutKicker': '公司',
  'companyPage.aboutTitle': '關於',
  'companyPage.whatYasDoes': 'YAS 做什麼',
  'companyPage.whatYasIsNot': 'YAS 不是什麼',
  'companyPage.whatWeBelieve': '我們的信念',
  'companyPage.whereWeGo': '未來方向',
  'companyPage.ourJourney': '發展歷程',
  'companyPage.presence': '全球佈局',
  'companyPage.leadershipTitle': '領導團隊',
  'companyPage.leadershipSubtitle': '構建全球金融科技保障基礎設施的團隊。',
  'companyPage.careersTitle': '職業機會',
  'companyPage.careersSubtitle': '加入我們，共同構建讓保障觸手可及的基礎設施。',
  'companyPage.openPositions': '開放職位',
  'companyPage.mediaKit': '媒體資源',
  'contactPage.heroKicker': '聯繫我們',
  'contactPage.heroTitle': '讓我們',
  'contactPage.heroGradient': '聊聊',
  'contactPage.heroSubtitle': '無論您是探索現代分銷的保險公司、希望嵌入保障的平台，還是評估 API 的開發者。',
  'contactPage.formTitle': '預約演示',
  'contactPage.firstName': '名',
  'contactPage.lastName': '姓',
  'contactPage.workEmail': '工作郵箱',
  'contactPage.company': '公司',
  'contactPage.role': '我是...',
  'contactPage.message': '留言（選填）',
  'contactPage.submit': '提交',
  'contactPage.thankYou': '謝謝',
  'contactPage.thankYouMsg': '您的訊息已收到。我們將在 24 小時內回覆並告知後續步驟。',
  'contactPage.responseTime': '通常在 24 小時內回覆',
  'trustPage.heroTitle': '信任',
  'trustPage.heroGradient': '中心',
  'trustPage.heroSubtitle': '安全、隱私、合規、模型治理、理賠公平性和審計控制。信任是 YAS 基礎設施每一層的基石。',
  'trustPage.commonQuestions': '常見問題',
  'trustPage.documentation': '文檔與政策',
  'proofPage.heroTitle': '生產環境的',
  'proofPage.heroGradient': '驗證',
  'proofPage.heroSubtitle': '來自與持牌合作夥伴實際部署的真實成果。',
  'proofPage.press': '媒體報導',
  'proofPage.partners': '合作夥伴生態',
  'caseStudy.notFound': '找不到案例研究',
  'caseStudy.client': '客戶',
  'caseStudy.context': '背景',
  'caseStudy.problem': '問題',
  'caseStudy.solution': '解決方案',
  'caseStudy.operationalFlow': '運營流程',
  'caseStudy.ctaTitle': '了解 YAS 能為您做什麼',
  'caseStudy.ctaSubtitle': '探索 YAS 基礎設施如何為您的保障部署提供支持。',
  'proofPage.pressSubtitle': 'YAS 最新報導與公告。',
  'proofPage.pressFeatured': '精選',
  'proofPage.partnersSubtitle': '與 YAS 基礎設施共同驅動保障的保險公司、再保險公司、分銷夥伴及客戶。',
};

// ──────────────────────────────────────────────
// Simplified Chinese (简体中文) — Mainland China
// ──────────────────────────────────────────────
const zhCN: TranslationKeys = {
  'nav.platform': '平台',
  'nav.products': '产品',
  'nav.solutions': '解决方案',
  'nav.proof': '成功案例',
  'nav.developers': '开发者',
  'nav.trust': '信任中心',
  'nav.company': '关于我们',
  'nav.contact': '联系我们',
  'nav.search': '搜索',
  'nav.bookDemo': '预约演示',
  'hero.kicker': '实时保障基础设施',
  'hero.headline': '保障随行',
  'hero.headlineGradient': '伴你同行',
  'hero.subhead': '实时数据驱动公平、超个性化的保障方案。',
  'hero.subheadExtended': '通过我们的产品和合作伙伴，数分钟内激活保障——同时我们正在构建让保障天然动态化的基础设施。',
  'hero.cta.primary': '立即获取保障',
  'hero.cta.secondary': '成为 YAS 合作伙伴',
  'trust.insurers': '风险承保及保险公司合作伙伴',
  'trust.customers': '保障赋能',
  'trust.footer': '与香港、马来西亚、越南、泰国、新加坡等地的保险公司及分销伙伴共建。',
  'problem.title': '行业痛点',
  'problem.text': '传统保险以平均值定价、更新缓慢，难以适应现代生活节奏。静态核保造成摩擦与不公平感。',
  'promise.title': 'YAS 方案',
  'promise.text': '基于实时情境的动态保障：需要时启动，按当下定价，结束即停。你看得懂的公平定价。',
  'problem.caption': '从静态文书到实时动态保障。',
  'howItWorks.kicker': '运作原理',
  'howItWorks.title': '实时信号输入，实时保障输出。',
  'howItWorks.step1.label': '采集信号',
  'howItWorks.step1.desc': '平台事件、设备数据、交易元数据——经用户同意。',
  'howItWorks.step2.label': '风险评分',
  'howItWorks.step2.desc': '实时风险评分与动态定价。',
  'howItWorks.step3.label': '激活保障',
  'howItWorks.step3.desc': '无缝嵌入合作伙伴平台的保单激活。',
  'howItWorks.step4.label': '理赔结算',
  'howItWorks.step4.desc': '触发事件后，快速理赔结算。',
  'infra.headline': '为未来而建的',
  'infra.headlineGradient': '基础设施',
  'nowNext.title': '现在与未来',
  'now.kicker': '已上线',
  'now.title': '��持牌合作伙伴及保险公司推出的市场就绪保障产品。',
  'now.items': '交通、运动、支付等领域的在线产品|B2B2C 平台及直接分销|自动化理赔与即时赔付|合作伙伴控制台与实时报告',
  'next.kicker': '建设中',
  'next.title': '面向平台、设备、智能代理和机器人的实时风险层。',
  'next.items': '大规模动态核保|参数触发与自动结算|设备与物联网信号整合|智能代理与机器人风险基础设施',
  'bridge.text': 'YAS 正在构建实时风险基础设施。今天，我们通过与持牌合作伙伴推出的市场就绪保障产品来实现。',
  'bridge.textExtended': '每一张签发的保单、每一次服务的理赔，都在提升我们更精准定价风险、让保障更公平的能力，并解锁与智能设备、机器人和软件代理共存的动态保障。',
  'products.kicker': '产品',
  'products.title': '已上线产品',
  'products.subtitle': '可即时购买的真实保障。每个产品套件支持消费者、中小企及企业客户。',
  'platform.kicker': '基础设施',
  'platform.title': 'YAS 如何运作',
  'platform.subtitle': '从信号接收到结算的端到端保障基础设施。',
  'metrics.kicker': '表现',
  'metrics.title': '平台表现',
  'metrics.subtitle': 'YAS 基础设施的量化成果。',
  'caseStudies.kicker': '成功案例',
  'caseStudies.title': '生产环境的验证',
  'caseStudies.subtitle': '来自真实部署的成果。',
  'global.kicker': '全球',
  'global.title': '全球就绪',
  'global.subtitle': '为多市场、多语言、多监管部署而建。',
  'global.regulatory': '监管立场',
  'global.regulatoryExtended': 'YAS 提供科技基础设施。在需要牌照的地区，风险由持牌保险公司和再保险公司承担。YAS 与受监管实体保持技术合作，支持所有活跃市场的合规要求。',
  'global.languages': '支持 13 种语言：',
  'global.cityCaption': '香港总部与新加坡——我们的首两个市场。',
  'cta.title': '准备好开始了吗？',
  'cta.subtitle': '无论您是寻找符合生活需求的保障，还是平台、保险公司或开发者正在构建实时风险基础设施。',
  'cta.primary': '立即获取保障',
  'cta.secondary': '成为合作伙伴',
  'trustTeaser.title': '信任中心',
  'trustTeaser.subtitle': '安全、隐私、合规、模型治理与理赔公平性。',
  'common.learnMore': '了解更多',
  'common.viewAll': '查看全部',
  'common.readCase': '阅读案例',
  'common.consumer': '消费者',
  'common.sme': '中小企',
  'common.enterprise': '企业',
  'common.placeholder': '【占位符】',
  'footer.tagline': '金融科技保障与结算基础设施。赋能持牌保险公司在全球提供嵌入式保障的技术。',
  'footer.rights': '2026 YAS Digital. 版权所有。',
  'footer.privacy': '隐私政策',
  'footer.terms': '使用条款',
  'footer.security': '安全',
  'footer.compliance': '合规',
  'footer.disclaimer': 'YAS 并非持牌保险公司。YAS 提供科技基础设施、嵌入式分销轨道、AI 风险定价、理赔自动化及赔付体验。',
  'footer.disclaimerExtended': '在需要牌照的地区，保险风险由持牌保险公司和再保险公司承担。',
  'footer.platform': '平台',
  'footer.products': '产品',
  'footer.resources': '资源',
  'footer.company': '公司',
  'mobile.bookDemo': '预约演示',
  'inner.bookDemo': '预约演示',
  'inner.apiDocs': 'API 文档',
  'inner.getStarted': '立即开始',
  'inner.explore': '探索',
  'inner.apply': '申请',
  'inner.overview': '概览',
  'platformPage.heroTitle': '保障基础设施',
  'platformPage.heroGradient': '端到端',
  'platformPage.heroSubtitle': '实时风险信号输入，实时保障输出。从信号采集到结算，每个模块均为规模、速度和合规设计。',
  'platformPage.pipeline': '数据流水线',
  'platformPage.inPlainTerms': '简明说明',
  'platformPage.dataEthics': '数据伦理与隐私',
  'platformPage.modules': '平台模块',
  'platformPage.modulesSubtitle': '七个互联模块构成完整的保障基础设施堆栈。',
  'platformPage.architecture': '系统架构',
  'platformPage.performance': '性能表现',
  'platformPage.integration': '整合与上线时间',
  'platformPage.integrationSubtitle': 'YAS 专为快速整合设计。API 优先架构配备完整 SDK。',
  'platformPage.whatYouGet': '您将获得',
  'productPage.heroKicker': '产品',
  'productPage.heroTitle': '产品套件',
  'productPage.heroSubtitle': '跨行业可扩展的保障基础设施。每个套件支持消费者、中小企及企业客户。',
  'productPage.bySegment': '按细分市场',
  'productPage.segmentSubtitle': '为每个客户层量身定制的用例与功能。',
  'productPage.useCases': '使用案例',
  'productPage.features': '功能特点',
  'productPage.howItWorks': '运作原理',
  'productPage.performanceProof': '性能验证',
  'productPage.ecosystem': '生态合作伙伴',
  'solutionPage.heroKicker': '解决方案',
  'solutionPage.heroTitle': '行业',
  'solutionPage.heroGradient': '解决方案',
  'solutionPage.heroSubtitle': '面向平台、钱包、出行、商业和新兴设备生态的嵌入式保障基础设施。',
  'solutionPage.challengeVsSolution': '挑战 vs 解决方案',
  'solutionPage.challenges': '行业挑战',
  'solutionPage.capabilities': 'YAS 能力',
  'solutionPage.exampleJourney': '示例旅程',
  'solutionPage.outcomes': '成果',
  'companyPage.aboutKicker': '公司',
  'companyPage.aboutTitle': '关于',
  'companyPage.whatYasDoes': 'YAS 做什么',
  'companyPage.whatYasIsNot': 'YAS 不是什么',
  'companyPage.whatWeBelieve': '我们的信念',
  'companyPage.whereWeGo': '未来方向',
  'companyPage.ourJourney': '发展历程',
  'companyPage.presence': '全球布局',
  'companyPage.leadershipTitle': '领导团队',
  'companyPage.leadershipSubtitle': '构建全球金融科技保障基础设施的团队。',
  'companyPage.careersTitle': '职业机会',
  'companyPage.careersSubtitle': '加入我们，共同构建让保障触手可及的基础设施。',
  'companyPage.openPositions': '开放职位',
  'companyPage.mediaKit': '媒体资源',
  'contactPage.heroKicker': '联系我们',
  'contactPage.heroTitle': '让我们',
  'contactPage.heroGradient': '聊聊',
  'contactPage.heroSubtitle': '无论您是探索现代分销的保险公司、希望嵌入保障的平台，还是评估 API 的开发者。',
  'contactPage.formTitle': '预约演示',
  'contactPage.firstName': '名',
  'contactPage.lastName': '姓',
  'contactPage.workEmail': '工作邮箱',
  'contactPage.company': '公司',
  'contactPage.role': '我是...',
  'contactPage.message': '留言（选填）',
  'contactPage.submit': '提交',
  'contactPage.thankYou': '谢谢',
  'contactPage.thankYouMsg': '您的消息已收到。我们将在 24 小时内回复并告知后续步骤。',
  'contactPage.responseTime': '通常在 24 小时内回复',
  'trustPage.heroTitle': '信任',
  'trustPage.heroGradient': '中心',
  'trustPage.heroSubtitle': '安全、隐私、合规、模型治理、理赔公平性和审计控制。信任是 YAS 基础设施每一层的基石。',
  'trustPage.commonQuestions': '常见问题',
  'trustPage.documentation': '文档与政策',
  'proofPage.heroTitle': '生产环境的',
  'proofPage.heroGradient': '验证',
  'proofPage.heroSubtitle': '来自与持牌合作伙伴实际部署的真实成果。',
  'proofPage.press': '媒体报道',
  'proofPage.partners': '合作伙伴生态',
  'caseStudy.notFound': '找不到案例研究',
  'caseStudy.client': '客户',
  'caseStudy.context': '背景',
  'caseStudy.problem': '问题',
  'caseStudy.solution': '解决方案',
  'caseStudy.operationalFlow': '运营流程',
  'caseStudy.ctaTitle': '了解 YAS 能为您做什么',
  'caseStudy.ctaSubtitle': '探索 YAS 基础设施如何为您的保障部署提供支持。',
  'proofPage.pressSubtitle': 'YAS 最新报道与公告。',
  'proofPage.pressFeatured': '精选',
  'proofPage.partnersSubtitle': '与 YAS 基础设施共同驱动保障的保险公司、再保险公司、分销伙伴及客户。',
};

// ──────────────────────────────────────────────
// Japanese (日本語)
// ──────────────────────────────────────────────
const ja: TranslationKeys = {
  'nav.platform': '基盤',
  'nav.products': '製品',
  'nav.solutions': 'ソリューション',
  'nav.proof': '実績',
  'nav.developers': '開発者',
  'nav.trust': '信頼',
  'nav.company': '企業情報',
  'nav.contact': 'お問合せ',
  'nav.search': '検索',
  'nav.bookDemo': 'デモ予約',
  'hero.kicker': 'リアルタイム保障インフラ',
  'hero.headline': '生活に寄り添う',
  'hero.headlineGradient': 'プロテクション',
  'hero.subhead': 'リアルタイムデータで公平かつ超個別化された保障を実現。',
  'hero.subheadExtended': '当社の製品とパートナーを通じて数分で保障を有効化。保障を動的にするインフラを構築中です。',
  'hero.cta.primary': '保障を受ける',
  'hero.cta.secondary': 'パートナー提携',
  'trust.insurers': 'リスクキャリア＆保険パートナー',
  'trust.customers': '保障を提供',
  'trust.footer': '香港、マレーシア、ベトナム、タイ、シンガポール等の保険会社・販売パートナーと共に構築。',
  'problem.title': '課題',
  'problem.text': '従来の保険は平均値で価格を設定し、更新が遅く、現代生活に追いつけません。静的な引受は摩擦と不公平感を生みます。',
  'promise.title': 'YAS の解決策',
  'promise.text': 'リアルタイム文脈に基づく動的保障。必要時に開始、瞬間に応じた価格設定、終了時に停止。理解できる公正な価格。',
  'problem.caption': '静的な書類からリアルタイム動的保障へ。',
  'howItWorks.kicker': '仕組み',
  'howItWorks.title': 'リアルタイム信号入力。リアルタイム保障出力。',
  'howItWorks.step1.label': '信号取得',
  'howItWorks.step1.desc': 'イベント、デバイスデータ、取引情報を同意の上で取得。',
  'howItWorks.step2.label': 'リスク評価',
  'howItWorks.step2.desc': 'リアルタイムのリスク評価と動的プライシング。',
  'howItWorks.step3.label': '保障の有効化',
  'howItWorks.step3.desc': 'パートナー内にシームレスに組込まれた保障の有効化。',
  'howItWorks.step4.label': '決済',
  'howItWorks.step4.desc': 'トリガー発生時、迅速に請求処理・決済。',
  'infra.headline': '次世代のための',
  'infra.headlineGradient': 'インフラ',
  'nowNext.title': '今と次',
  'now.kicker': '提供中',
  'now.title': 'ライセンスパートナー及び保険会社との市場投入済み製品。',
  'now.items': '交通・スポーツ・決済分野の提供中製品|B2B2C 基盤と直接販売|自動化された請求と即時支払い|パートナー管理画���とリアルタイム報告',
  'next.kicker': '開発中',
  'next.title': '基盤、デバイス、エージェント、ロボティクス向けリアルタイムリスク層。',
  'next.items': '大規模動的引受|パラメトリックトリガーと自動決済|デバイスと IoT 信号統合|エージェントとロボティクスリスクインフラ',
  'bridge.text': 'YAS はリアルタイムリスクインフラを構築しています。現在はライセンスパートナーとの市場投入済み製品を通じて提供しています。',
  'bridge.textExtended': '発行された全てのポリシーと処理された全てのクレームが、より正確なリスク価格設定、より公平な保障、そしてスマートデバイスやロボティクスの世界に適応する動的保障の実現能力を向上させます。',
  'products.kicker': '製品',
  'products.title': '提供中の製品',
  'products.subtitle': '今すぐ購入できる保障製品。各スイートは個人・SME・企業向け。',
  'platform.kicker': 'インフラ',
  'platform.title': 'YAS の仕組み',
  'platform.subtitle': '信号取込みから決済までの一気通貫保障インフラ。',
  'metrics.kicker': '性能',
  'metrics.title': '基盤の性能',
  'metrics.subtitle': 'YAS インフラ全体の定量化された成果。',
  'caseStudies.kicker': '実績',
  'caseStudies.title': '本番環境での実証',
  'caseStudies.subtitle': '実際の導入からの成果。',
  'global.kicker': 'グローバル',
  'global.title': 'グローバル対応',
  'global.subtitle': '多市場・多言語・多規制対応の展開。',
  'global.regulatory': '規制方針',
  'global.regulatoryExtended': 'YAS は技術インフラを提供します。ライセンスが必要な場合、リスクはライセンス保有保険会社及び再保険会社が引き受けます。YAS は規制対象事業者との技術提携を維持し、全活動市場での要件を支援します。',
  'global.languages': '13 言語対応：',
  'global.cityCaption': '香港本社＆シンガポール — 最初の2市場。',
  'cta.title': '始める準備はできましたか？',
  'cta.subtitle': '生活に合った保障をお探しの方も、リアルタイムリスクインフラを構築する基盤・保険会社・開発者の方も。',
  'cta.primary': '保障を受ける',
  'cta.secondary': 'パートナー提携',
  'trustTeaser.title': '信頼センター',
  'trustTeaser.subtitle': 'セキュリティ、プライバシー、コンプライアンス、モデル管理、請求の公平性。',
  'common.learnMore': '詳しく見る',
  'common.viewAll': '全て表示',
  'common.readCase': '事例を読む',
  'common.consumer': '個人向け',
  'common.sme': 'SME向け',
  'common.enterprise': '企業向け',
  'common.placeholder': '【準備中】',
  'footer.tagline': '金融保障＆決済インフラ。ライセンス保有保険会社がグローバルに組込型保障を提供するための技術。',
  'footer.rights': '2026 YAS Digital. All rights reserved.',
  'footer.privacy': 'プライバシー',
  'footer.terms': '利用規約',
  'footer.security': 'セキュリティ',
  'footer.compliance': 'コンプライアンス',
  'footer.disclaimer': 'YAS はライセンス保有保険会社ではありません。YAS は技術インフラ、組込型流通、AI リスク価格設定、請求自動化、支払い体験を提供します。',
  'footer.disclaimerExtended': 'ライセンスが必要な場合、保険リスクはライセンス保有保険会社及び再保険会社が引き受けます。',
  'footer.platform': '基盤',
  'footer.products': '製品',
  'footer.resources': 'リソース',
  'footer.company': '企業情報',
  'mobile.bookDemo': 'デモ予約',
  'inner.bookDemo': 'デモ予約',
  'inner.apiDocs': 'APIドキュメント',
  'inner.getStarted': '始める',
  'inner.explore': '詳細',
  'inner.apply': '応募',
  'inner.overview': '概要',
  'platformPage.heroTitle': '保障インフラ',
  'platformPage.heroGradient': 'エンドツーエンド',
  'platformPage.heroSubtitle': 'リアルタイムリスク信号入力、リアルタイム保障出力。信号取込みから決済まで、全モジュールが規模・速度・コンプライアンスに対応。',
  'platformPage.pipeline': 'データフローパイプライン',
  'platformPage.inPlainTerms': '分かりやすく言うと',
  'platformPage.dataEthics': 'データ倫理とプライバシー',
  'platformPage.modules': 'プラットフォームモジュール',
  'platformPage.modulesSubtitle': '7つの相互接続モジュールで構成される完全な保障インフラスタック。',
  'platformPage.architecture': 'システムアーキテクチャ',
  'platformPage.performance': 'パフォーマンス',
  'platformPage.integration': '統合とローンチまでの時間',
  'platformPage.integrationSubtitle': 'YASは迅速な統合を前提に設計。APIファースト設計と包括的なSDK。',
  'platformPage.whatYouGet': '提供内容',
  'productPage.heroKicker': '製品',
  'productPage.heroTitle': '製品スイート',
  'productPage.heroSubtitle': '業界横断型のスケーラブルな保障インフラ。各スイートは個人・SME・企業向け。',
  'productPage.bySegment': 'セグメント別',
  'productPage.segmentSubtitle': '各顧客層に最適化されたユースケースと機能。',
  'productPage.useCases': 'ユースケース',
  'productPage.features': '機能',
  'productPage.howItWorks': '仕組み',
  'productPage.performanceProof': 'パフォーマンス実績',
  'productPage.ecosystem': 'エコシステムパートナー',
  'solutionPage.heroKicker': 'ソリューション',
  'solutionPage.heroTitle': '業界別',
  'solutionPage.heroGradient': 'ソリューション',
  'solutionPage.heroSubtitle': 'プラットフォーム、ウォレット、モビリティ、コマース、新興デバイス向け組込型保障インフラ。',
  'solutionPage.challengeVsSolution': '課題 vs ソリューション',
  'solutionPage.challenges': '業界の課題',
  'solutionPage.capabilities': 'YASの強み',
  'solutionPage.exampleJourney': '利用例',
  'solutionPage.outcomes': '成果',
  'companyPage.aboutKicker': '企業情報',
  'companyPage.aboutTitle': 'YASに',
  'companyPage.whatYasDoes': 'YASが提供するもの',
  'companyPage.whatYasIsNot': 'YASが提供しないもの',
  'companyPage.whatWeBelieve': '私たちの信念',
  'companyPage.whereWeGo': '今後の展望',
  'companyPage.ourJourney': '沿革',
  'companyPage.presence': '拠点',
  'companyPage.leadershipTitle': 'リーダーシップ',
  'companyPage.leadershipSubtitle': 'グローバル金融保障インフラを構築するチーム。',
  'companyPage.careersTitle': '採用情報',
  'companyPage.careersSubtitle': '保障をすべての人に届けるインフラを共に構築しませんか。',
  'companyPage.openPositions': '募集中のポジション',
  'companyPage.mediaKit': 'メディアキット',
  'contactPage.heroKicker': 'お問合せ',
  'contactPage.heroTitle': 'お話し',
  'contactPage.heroGradient': 'しましょう',
  'contactPage.heroSubtitle': '保険会社、プラットフォーム、開発者の方々、お気軽にご相談ください。',
  'contactPage.formTitle': 'デモ予約',
  'contactPage.firstName': '名',
  'contactPage.lastName': '姓',
  'contactPage.workEmail': 'メールアドレス',
  'contactPage.company': '会社名',
  'contactPage.role': '該当するもの',
  'contactPage.message': 'メッセージ（任意）',
  'contactPage.submit': '送信',
  'contactPage.thankYou': 'ありがとうございます',
  'contactPage.thankYouMsg': 'メッセージを受け付けました。24時間以内にご連絡いたします。',
  'contactPage.responseTime': '通常24時間以内に返信',
  'trustPage.heroTitle': '信頼',
  'trustPage.heroGradient': 'センター',
  'trustPage.heroSubtitle': 'セキュリティ、プライバシー、コンプライアンス、モデル管理、請求公平性、監査統制。信頼はYASインフラの全層の基盤です。',
  'trustPage.commonQuestions': 'よくある質問',
  'trustPage.documentation': 'ドキュメントとポリシー',
  'proofPage.heroTitle': '本番環境の',
  'proofPage.heroGradient': '実証',
  'proofPage.heroSubtitle': 'ライセンスパートナーとの実際の展開による成果。',
  'proofPage.press': 'プレス＆ニュース',
  'proofPage.partners': 'パートナーエコシステム',
  'caseStudy.notFound': 'ケーススタディが見つかりません',
  'caseStudy.client': 'クライアント',
  'caseStudy.context': '背景',
  'caseStudy.problem': '課題',
  'caseStudy.solution': 'ソリューション',
  'caseStudy.operationalFlow': '運用フロー',
  'caseStudy.ctaTitle': 'YASがお手伝いできること',
  'caseStudy.ctaSubtitle': 'YASインフラが保障展開をどのように支えるかご覧ください。',
  'proofPage.pressSubtitle': 'YASの最新報道とお知らせ。',
  'proofPage.pressFeatured': '注目',
  'proofPage.partnersSubtitle': 'YASインフラで保障を推進する保険会社、再保険会社、販売パートナー、顧客。',
};

// ──────────────────────────────────────────────
// Vietnamese (Tiếng Việt)
// ──────────────────────────────────────────────
const vi: TranslationKeys = {
  'nav.platform': 'Nền tảng',
  'nav.products': 'Sản phẩm',
  'nav.solutions': 'Giải pháp',
  'nav.proof': 'Minh chứng',
  'nav.developers': 'Nhà phát triển',
  'nav.trust': 'Tin cậy',
  'nav.company': 'Về chúng tôi',
  'nav.contact': 'Liên hệ',
  'nav.search': 'Tìm kiếm',
  'nav.bookDemo': 'Đặt lịch Demo',
  'hero.kicker': 'Hạ tầng Bảo vệ Thời gian thực',
  'hero.headline': 'Bảo vệ đồng hành',
  'hero.headlineGradient': 'cùng cuộc sống',
  'hero.subhead': 'Dữ liệu thời gian thực thúc đẩy bảo vệ công bằng, siêu cá nhân hóa.',
  'hero.subheadExtended': ' Kích hoạt bảo hiểm trong vài phút thông qua sản phẩm và đối tác — trong khi chúng tôi xây dựng hạ tầng biến bảo vệ thành mặc định động.',
  'hero.cta.primary': 'Nhận bảo vệ ngay',
  'hero.cta.secondary': 'Hợp tác với YAS',
  'trust.insurers': 'Đối tác Bảo hiểm & Chịu rủi ro',
  'trust.customers': 'Bảo vệ cho',
  'trust.footer': 'Xây dựng cùng công ty bảo hiểm và đối tác phân phối tại HK, MY, VN, TH, SG và nhiều nơi khác.',
  'problem.title': 'Vấn đề',
  'problem.text': 'Bảo hiểm truyền thống định giá theo trung bình, cập nhật chậm, không phù hợp cuộc sống hiện đại. Bảo lãnh tĩnh tạo ma sát và cảm giác bất công.',
  'promise.title': 'Cách tiếp cận YAS',
  'promise.text': 'Bảo vệ động dựa trên bối cảnh thời gian thực. Bắt đầu khi cần, định giá theo khoảnh khắc, dừng khi kết thúc. Giá cả công bằng bạn hiểu được.',
  'problem.caption': 'Từ giấy tờ tĩnh đến bảo vệ động thời gian thực.',
  'howItWorks.kicker': 'Cách hoạt động',
  'howItWorks.title': 'Tín hiệu thời gian thực đầu vào. Bảo vệ thời gian thực đầu ra.',
  'howItWorks.step1.label': 'Thu thập Tín hiệu',
  'howItWorks.step1.desc': 'Sự kiện nền tảng, dữ liệu thiết bị, siêu dữ liệu giao dịch — với sự đồng ý.',
  'howItWorks.step2.label': 'Chấm điểm Rủi ro',
  'howItWorks.step2.desc': 'Chấm điểm rủi ro thời gian thực và định giá động.',
  'howItWorks.step3.label': 'Kích hoạt Bảo vệ',
  'howItWorks.step3.desc': 'Kích hoạt hợp đồng liền mạch trong nền tảng đối tác.',
  'howItWorks.step4.label': 'Thanh toán',
  'howItWorks.step4.desc': 'Khi sự kiện kích hoạt, xử lý khiếu nại và thanh toán nhanh chóng.',
  'infra.headline': 'Hạ tầng xây dựng cho',
  'infra.headlineGradient': ' tương lai phía trước',
  'nowNext.title': 'Hiện tại & Tương lai',
  'now.kicker': 'Đã ra mắt',
  'now.title': 'Sản phẩm bảo vệ sẵn sàng thị trường với đối tác và công ty bảo hiểm được cấp phép.',
  'now.items': 'Sản phẩm trực tuyến: vận tải, thể thao, thanh toán|Nền tảng B2B2C và phân phối trực tiếp|Khiếu nại tự động và thanh toán tức thì|Bảng điều khiển đối tác và báo cáo thời gian thực',
  'next.kicker': 'Đang xây dựng',
  'next.title': 'Lớp rủi ro thời gian thực cho nền tảng, thiết bị, đại lý và robot.',
  'next.items': 'Bảo lãnh động quy mô lớn|Kích hoạt tham số và thanh toán tự động|Tích hợp tín hiệu thiết bị và IoT|Hạ tầng rủi ro cho đại lý và robot',
  'bridge.text': 'YAS đang xây dựng hạ tầng rủi ro thời gian thực. Hiện tại, chúng tôi cung cấp thông qua sản phẩm bảo vệ sẵn sàng thị trường với đối tác được cấp phép.',
  'bridge.textExtended': ' Mỗi hợp đồng phát hành và mỗi khiếu nại xử lý đều nâng cao khả năng định giá rủi ro chính xác hơn, làm bảo vệ công bằng hơn, và mở khóa bảo vệ động phù hợp với thế giới thiết bị thông minh, robot và đại lý phần mềm.',
  'products.kicker': 'Sản phẩm',
  'products.title': 'Sản phẩm đã ra mắt',
  'products.subtitle': 'Bảo vệ thực mà bạn có thể mua ngay. Mỗi bộ sản phẩm hỗ trợ Người tiêu dùng, SME và Doanh nghiệp.',
  'platform.kicker': 'Hạ tầng',
  'platform.title': 'YAS hoạt động như thế nào',
  'platform.subtitle': 'Hạ tầng bảo vệ đầu cuối từ thu thập tín hiệu đến thanh toán.',
  'metrics.kicker': 'Hiệu suất',
  'metrics.title': 'Hiệu suất Nền tảng',
  'metrics.subtitle': 'Kết quả đo lường trên hạ tầng YAS.',
  'caseStudies.kicker': 'Minh chứng',
  'caseStudies.title': 'Minh chứng trong Sản xuất',
  'caseStudies.subtitle': 'Kết quả thực từ triển khai thực tế.',
  'global.kicker': 'Toàn cầu',
  'global.title': 'Sẵn sàng Toàn cầu',
  'global.subtitle': 'Xây dựng cho triển khai đa thị trường, đa ngôn ngữ, đa quy định.',
  'global.regulatory': 'Lập trường Pháp lý',
  'global.regulatoryExtended': 'YAS cung cấp hạ tầng công nghệ. Khi cần giấy phép, rủi ro được chịu bởi các công ty bảo hiểm và tái bảo hiểm được cấp phép. YAS duy trì quan hệ đối tác công nghệ với các tổ chức được quản lý và hỗ trợ yêu cầu tuân thủ tại tất cả thị trường hoạt động.',
  'global.languages': 'Hỗ trợ 13 ngôn ngữ:',
  'global.cityCaption': 'Trụ sở Hong Kong & Singapore — hai thị trường đầu tiên.',
  'cta.title': 'Sẵn sàng bắt đầu?',
  'cta.subtitle': 'Dù bạn đang tìm bảo vệ phù hợp cuộc sống, hay là nền tảng, công ty bảo hiểm hoặc nhà phát triển xây dựng với hạ tầng rủi ro thời gian thực.',
  'cta.primary': 'Nhận bảo vệ ngay',
  'cta.secondary': 'Hợp tác cùng YAS',
  'trustTeaser.title': 'Trung tâm Tin cậy',
  'trustTeaser.subtitle': 'Bảo mật, quyền riêng tư, tuân thủ, quản trị mô hình và công bằng khiếu nại.',
  'common.learnMore': 'Tìm hiểu thêm',
  'common.viewAll': 'Xem tất cả',
  'common.readCase': 'Đọc nghiên cứu',
  'common.consumer': 'Người tiêu dùng',
  'common.sme': 'SME',
  'common.enterprise': 'Doanh nghiệp',
  'common.placeholder': '[Chỗ giữ]',
  'footer.tagline': 'Hạ tầng bảo vệ và thanh toán fintech. Công nghệ giúp công ty bảo hiểm được cấp phép cung cấp bảo vệ nhúng trên toàn cầu.',
  'footer.rights': '2026 YAS Digital. Bảo lưu mọi quyền.',
  'footer.privacy': 'Quyền riêng tư',
  'footer.terms': 'Điều khoản',
  'footer.security': 'Bảo mật',
  'footer.compliance': 'Tuân thủ',
  'footer.disclaimer': 'YAS không phải công ty bảo hiểm được cấp phép. YAS cung cấp hạ tầng công nghệ, kênh phân phối nhúng, định giá rủi ro AI, tự động hóa khiếu nại và trải nghiệm thanh toán.',
  'footer.disclaimerExtended': ' Khi cần giấy phép, rủi ro bảo hiểm được chịu bởi các công ty bảo hiểm và tái bảo hiểm được cấp phép.',
  'footer.platform': 'Nền tảng',
  'footer.products': 'Sản phẩm',
  'footer.resources': 'Tài nguyên',
  'footer.company': 'Công ty',
  'mobile.bookDemo': 'Đặt lịch Demo',
  'inner.bookDemo': 'Đặt lịch Demo',
  'inner.apiDocs': 'Tài liệu API',
  'inner.getStarted': 'Bắt đầu',
  'inner.explore': 'Khám phá',
  'inner.apply': 'Ứng tuyển',
  'inner.overview': 'Tổng quan',
  'platformPage.heroTitle': 'Hạ tầng Bảo vệ',
  'platformPage.heroGradient': 'Đầu cuối',
  'platformPage.heroSubtitle': 'Tín hiệu rủi ro thời gian thực đầu vào. Bảo vệ thời gian thực đầu ra. Từ thu thập tín hiệu đến thanh toán.',
  'platformPage.pipeline': 'Quy trình Dữ liệu',
  'platformPage.inPlainTerms': 'Giải thích đơn giản',
  'platformPage.dataEthics': 'Đạo đức Dữ liệu & Quyền riêng tư',
  'platformPage.modules': 'Mô-đun Nền tảng',
  'platformPage.modulesSubtitle': 'Bảy mô-đun kết nối tạo thành hạ tầng bảo vệ hoàn chỉnh.',
  'platformPage.architecture': 'Kiến trúc Hệ thống',
  'platformPage.performance': 'Hiệu suất',
  'platformPage.integration': 'Tích hợp & Thời gian Ra mắt',
  'platformPage.integrationSubtitle': 'YAS được thiết kế cho tích hợp nhanh. Kiến trúc API-first với SDK toàn diện.',
  'platformPage.whatYouGet': 'Bạn sẽ nhận được',
  'productPage.heroKicker': 'Sản phẩm',
  'productPage.heroTitle': 'Bộ Sản phẩm',
  'productPage.heroSubtitle': 'Hạ tầng bảo vệ có thể mở rộng. Mỗi bộ hỗ trợ Người tiêu dùng, SME và Doanh nghiệp.',
  'productPage.bySegment': 'Theo Phân khúc',
  'productPage.segmentSubtitle': 'Trường hợp sử dụng và tính năng cho mỗi nhóm khách hàng.',
  'productPage.useCases': 'Trường hợp Sử dụng',
  'productPage.features': 'Tính năng',
  'productPage.howItWorks': 'Cách hoạt động',
  'productPage.performanceProof': 'Bằng chứng Hiệu suất',
  'productPage.ecosystem': 'Đối tác Hệ sinh thái',
  'solutionPage.heroKicker': 'Giải pháp',
  'solutionPage.heroTitle': 'Giải pháp',
  'solutionPage.heroGradient': 'Ngành',
  'solutionPage.heroSubtitle': 'Hạ tầng bảo vệ nhúng cho nền tảng, ví điện tử, vận tải, thương mại và hệ sinh thái thiết bị mới.',
  'solutionPage.challengeVsSolution': 'Thách thức vs Giải pháp',
  'solutionPage.challenges': 'Thách thức Ngành',
  'solutionPage.capabilities': 'Năng lực YAS',
  'solutionPage.exampleJourney': 'Hành trình Mẫu',
  'solutionPage.outcomes': 'Kết quả',
  'companyPage.aboutKicker': 'Công ty',
  'companyPage.aboutTitle': 'Về',
  'companyPage.whatYasDoes': 'YAS làm gì',
  'companyPage.whatYasIsNot': 'YAS không phải là gì',
  'companyPage.whatWeBelieve': 'Tầm nhìn của chúng tôi',
  'companyPage.whereWeGo': 'Hướng đi tương lai',
  'companyPage.ourJourney': 'Hành trình phát triển',
  'companyPage.presence': 'Hiện diện',
  'companyPage.leadershipTitle': 'Đội ngũ Lãnh đạo',
  'companyPage.leadershipSubtitle': 'Đội ngũ xây dựng hạ tầng bảo vệ fintech toàn cầu.',
  'companyPage.careersTitle': 'Tuyển dụng',
  'companyPage.careersSubtitle': 'Cùng chúng tôi xây dựng hạ tầng bảo vệ cho mọi người.',
  'companyPage.openPositions': 'Vị trí đang tuyển',
  'companyPage.mediaKit': 'Bộ Truyền thông',
  'contactPage.heroKicker': 'Liên hệ',
  'contactPage.heroTitle': 'Hãy',
  'contactPage.heroGradient': 'Trò chuyện',
  'contactPage.heroSubtitle': 'Dù bạn là công ty bảo hiểm, nền tảng hay nhà phát triển đang đánh giá API.',
  'contactPage.formTitle': 'Đặt lịch Demo',
  'contactPage.firstName': 'Tên',
  'contactPage.lastName': 'Họ',
  'contactPage.workEmail': 'Email công việc',
  'contactPage.company': 'Công ty',
  'contactPage.role': 'Tôi là...',
  'contactPage.message': 'Tin nhắn (tùy chọn)',
  'contactPage.submit': 'Gửi',
  'contactPage.thankYou': 'Cảm ơn bạn',
  'contactPage.thankYouMsg': 'Tin nhắn đã được nhận. Chúng tôi sẽ phản hồi trong 24 giờ.',
  'contactPage.responseTime': 'Thường phản hồi trong 24 giờ',
  'trustPage.heroTitle': 'Trung tâm',
  'trustPage.heroGradient': 'Tin cậy',
  'trustPage.heroSubtitle': 'Bảo mật, quyền riêng tư, tuân thủ, quản trị mô hình, công bằng khiếu nại và kiểm soát. Tin cậy là nền tảng của mọi lớp hạ tầng YAS.',
  'trustPage.commonQuestions': 'Câu hỏi Thường gặp',
  'trustPage.documentation': 'Tài liệu & Chính sách',
  'proofPage.heroTitle': 'Minh chứng',
  'proofPage.heroGradient': 'Thực tế',
  'proofPage.heroSubtitle': 'Kết quả thực từ triển khai với đối tác được cấp phép.',
  'proofPage.press': 'Báo chí & Tin tức',
  'proofPage.partners': 'Hệ sinh thái Đối tác',
  'caseStudy.notFound': 'Không tìm thấy nghiên cứu tình huống',
  'caseStudy.client': 'Khách hàng',
  'caseStudy.context': 'Bối cảnh',
  'caseStudy.problem': 'Vấn đề',
  'caseStudy.solution': 'Giải pháp',
  'caseStudy.operationalFlow': 'Quy trình Vận hành',
  'caseStudy.ctaTitle': 'Khám phá YAS có thể làm gì cho bạn',
  'caseStudy.ctaSubtitle': 'Tìm hiểu cách hạ tầng YAS hỗ trợ triển khai bảo vệ của bạn.',
  'proofPage.pressSubtitle': 'Tin tức và thông báo mới nhất từ YAS.',
  'proofPage.pressFeatured': 'Nổi bật',
  'proofPage.partnersSubtitle': 'Công ty bảo hiểm, tái bảo hiểm, đối tác phân phối và khách hàng cùng YAS xây dựng hạ tầng bảo vệ.',
};

// ──────────────────────────────────────────────
// Korean (한국어)
// ────────────────────���─────────────────────────
const ko: TranslationKeys = {
  'nav.platform': '플랫폼', 'nav.products': '제품', 'nav.solutions': '솔루션', 'nav.proof': '실적', 'nav.developers': '개발자', 'nav.trust': '신뢰', 'nav.company': '회사', 'nav.contact': '문의', 'nav.search': '검색', 'nav.bookDemo': '데모 예약',
  'hero.kicker': '실시간 보장 인프라', 'hero.headline': '삶과 함께하는', 'hero.headlineGradient': '보장', 'hero.subhead': '실시간 데이터로 공정하고 초개인화된 보장을 실현합니다.', 'hero.subheadExtended': ' 당사 제품과 파트너를 통해 몇 분 만에 보장을 활성화하세요.', 'hero.cta.primary': '보장받기', 'hero.cta.secondary': 'YAS와 파트너',
  'trust.insurers': '리스크 캐리어 및 보험 파트너', 'trust.customers': '보장 제공 대상', 'trust.footer': 'HK, MY, VN, TH, SG 등 보험사 및 유통 파트너와 함께 구축.',
  'problem.title': '문제점', 'problem.text': '기존 보험은 평균값 기반 가격 책정과 느린 업데이트로 현대 생활에 맞지 않습니다.', 'promise.title': 'YAS 방식', 'promise.text': '실시간 맥락 기반 동적 보장. 필요할 때 시작, 순간에 맞는 가격, 종료 시 중단.', 'problem.caption': '정적 서류에서 실시간 동적 보장으로.',
  'howItWorks.kicker': '작동 방식', 'howItWorks.title': '실시간 신호 입력. 실시간 보장 출력.', 'howItWorks.step1.label': '신호 수집', 'howItWorks.step1.desc': '플랫폼 이벤트, 기기 데이터, 거래 메타데이터 — 동의 하에.', 'howItWorks.step2.label': '리스크 평가', 'howItWorks.step2.desc': '실시간 리스크 평가와 동적 가격 책정.', 'howItWorks.step3.label': '보장 활성화', 'howItWorks.step3.desc': '파트너 플랫폼 내 원활한 보장 활성화.', 'howItWorks.step4.label': '정산', 'howItWorks.step4.desc': '이벤트 발생 시 신속한 청구 처리 및 정산.',
  'infra.headline': '미래를 위해 구축된', 'infra.headlineGradient': ' 인프라',
  'nowNext.title': '현재와 미래', 'now.kicker': '현재 운영 중', 'now.title': '라이선스 파트너 및 보험사와 함께하는 시장 준비 완료 보장 제품.', 'now.items': '운송, 스포츠, 결제 분야 라이브 제품|B2B2C 플랫폼 및 직접 유통|자동화된 청구 및 즉시 지급|파트너 콘솔 및 실시간 보고', 'next.kicker': '개발 중', 'next.title': '플랫폼, 기기, 에이전트, 로보틱스를 위한 실시간 리스크 레이어.', 'next.items': '대규모 동적 언더라이팅|파라메트릭 트리거 및 자동 정산|기기 및 IoT 신호 통합|에이전트 및 로보틱스 리스크 인프라',
  'bridge.text': 'YAS는 실시간 리스크 인프라를 구축하고 있습니다. 현재 라이선스 파트너와 시장 준비 완료 보장 제품을 통해 제공합니다.', 'bridge.textExtended': ' 발행된 모든 보험증권과 처리된 모든 청구가 리스크 가격 책정을 개선하고 보장을 공정하게 만듭니다.',
  'products.kicker': '제품', 'products.title': '출시된 제품', 'products.subtitle': '지금 구매할 수 있는 보장. 각 스위트는 소비자, SME, 기업 세그먼트를 지원합니다.',
  'platform.kicker': '인프라', 'platform.title': 'YAS 작동 방식', 'platform.subtitle': '신호 수집부터 정산까지 엔드투엔드 보장 인프라.',
  'metrics.kicker': '성과', 'metrics.title': '플랫폼 성과', 'metrics.subtitle': 'YAS 인프라 전반의 정량화된 결과.',
  'caseStudies.kicker': '실적', 'caseStudies.title': '운영 실적', 'caseStudies.subtitle': '실제 배포의 성과.',
  'global.kicker': '글로벌', 'global.title': '글로벌 준비 완료', 'global.subtitle': '다중 시장, 다국어, 다중 규제 배포를 위해 구축.', 'global.regulatory': '규제 입장', 'global.regulatoryExtended': 'YAS는 기술 인프라를 제공합니다. 라이선스가 필요한 경우 리스크는 인가된 보험사가 부담합니다.', 'global.languages': '13개 언어 지원:', 'global.cityCaption': '홍콩 본사 & 싱가포르 — 첫 두 시장.',
  'cta.title': '시작할 준비가 되셨나요?', 'cta.subtitle': '보장을 찾고 계시든, 실시간 리스크 인프라를 구축하는 플랫폼이든, 개발자이든.', 'cta.primary': '보장받기', 'cta.secondary': 'YAS와 파트너',
  'trustTeaser.title': '신뢰 허브', 'trustTeaser.subtitle': '보안, 프라이버시, 컴플라이언스, 모델 거버넌스, 청구 공정성.',
  'common.learnMore': '자세히 보기', 'common.viewAll': '전체 보기', 'common.readCase': '사례 보기', 'common.consumer': '소비자', 'common.sme': 'SME', 'common.enterprise': '기업', 'common.placeholder': '[준비중]',
  'footer.tagline': '핀테크 보장 및 정산 인프라. 인가된 보험사가 글로벌 임베디드 보장을 제공할 수 있게 하는 기술.', 'footer.rights': '2026 YAS Digital. All rights reserved.', 'footer.privacy': '개인정보', 'footer.terms': '이용약관', 'footer.security': '보안', 'footer.compliance': '컴플라이언스', 'footer.disclaimer': 'YAS는 인가된 보험사가 아닙니다. YAS는 기술 인프라, 임베디드 유통, AI 리스크 가격 책정, 청구 자동화 및 지급 경험을 제공합니다.', 'footer.disclaimerExtended': ' 라이선스가 필요한 경우 보험 리스크는 인가된 보험사 및 재보험사가 부담합니다.', 'footer.platform': '플랫폼', 'footer.products': '제품', 'footer.resources': '리소스', 'footer.company': '회사', 'mobile.bookDemo': '데모 예약',
  'inner.bookDemo': '데모 예약', 'inner.apiDocs': 'API 문서', 'inner.getStarted': '시작하기', 'inner.explore': '탐색', 'inner.apply': '지원', 'inner.overview': '개요',
  'platformPage.heroTitle': '보장 인프라', 'platformPage.heroGradient': '엔드투엔드', 'platformPage.heroSubtitle': '실시간 리스크 신호 입력, 실시간 보장 출력. 모든 모듈이 규모, 속도, 규정 준수를 위해 설계.', 'platformPage.pipeline': '데이터 흐름 파이프라인', 'platformPage.inPlainTerms': '쉽게 설명하면', 'platformPage.dataEthics': '데이터 윤리 & 프라이버시', 'platformPage.modules': '플랫폼 모듈', 'platformPage.modulesSubtitle': '7개의 상호 연결 모듈로 구성된 완전한 보장 인프라 스택.', 'platformPage.architecture': '시스템 아키텍처', 'platformPage.performance': '성능', 'platformPage.integration': '통합 및 출시 시간', 'platformPage.integrationSubtitle': 'YAS는 빠른 통합을 위해 설계되었습니다. API 우선 아키텍처와 포괄적인 SDK.', 'platformPage.whatYouGet': '제공 내용',
  'productPage.heroKicker': '제품', 'productPage.heroTitle': '제품 스위트', 'productPage.heroSubtitle': '업종별 확장 가능한 보장 인프라. 각 스위트는 소비자, SME, 기업을 지원.', 'productPage.bySegment': '세그먼트별', 'productPage.segmentSubtitle': '각 고객 등급에 맞춘 사용 사례와 기능.', 'productPage.useCases': '사용 사례', 'productPage.features': '기능', 'productPage.howItWorks': '작동 방식', 'productPage.performanceProof': '성과 증명', 'productPage.ecosystem': '에코시스템 파트너',
  'solutionPage.heroKicker': '솔루션', 'solutionPage.heroTitle': '산업별', 'solutionPage.heroGradient': '솔루션', 'solutionPage.heroSubtitle': '플랫폼, 월렛, 모빌리티, 커머스, 신규 기기 생태계를 위한 임베디드 보장 인프라.', 'solutionPage.challengeVsSolution': '도전 vs 솔루션', 'solutionPage.challenges': '산업 과제', 'solutionPage.capabilities': 'YAS 역량', 'solutionPage.exampleJourney': '예시 여정', 'solutionPage.outcomes': '성과',
  'companyPage.aboutKicker': '회사', 'companyPage.aboutTitle': '소개', 'companyPage.whatYasDoes': 'YAS가 하는 일', 'companyPage.whatYasIsNot': 'YAS가 아닌 것', 'companyPage.whatWeBelieve': '우리의 신념', 'companyPage.whereWeGo': '나아갈 방향', 'companyPage.ourJourney': '연혁', 'companyPage.presence': '글로벌 현황', 'companyPage.leadershipTitle': '리더십', 'companyPage.leadershipSubtitle': '글로벌 핀테크 보장 인프라를 구축하는 팀.', 'companyPage.careersTitle': '채용', 'companyPage.careersSubtitle': '모두를 위한 보장 인프라를 함께 구축하세요.', 'companyPage.openPositions': '채용 공고', 'companyPage.mediaKit': '미디어 키트',
  'contactPage.heroKicker': '문의', 'contactPage.heroTitle': '함께', 'contactPage.heroGradient': '대화해요', 'contactPage.heroSubtitle': '보험사, 플랫폼, 개발자 등 누구든 환영합니다.', 'contactPage.formTitle': '데모 예약', 'contactPage.firstName': '이름', 'contactPage.lastName': '성', 'contactPage.workEmail': '업무 이메일', 'contactPage.company': '회사', 'contactPage.role': '역할 선택', 'contactPage.message': '메시지 (선택)', 'contactPage.submit': '제출', 'contactPage.thankYou': '감사합니다', 'contactPage.thankYouMsg': '메시지가 접수되었습니다. 24시간 이내에 회신드리겠습니다.', 'contactPage.responseTime': '보통 24시간 이내 응답',
  'trustPage.heroTitle': '신뢰', 'trustPage.heroGradient': '허브', 'trustPage.heroSubtitle': '보안, 프라이버시, 컴플라이언스, 모델 거버넌스, 청구 공정성, 감사 통제.', 'trustPage.commonQuestions': '자주 묻는 질문', 'trustPage.documentation': '문서 및 정책',
  'proofPage.heroTitle': '운영 환경의', 'proofPage.heroGradient': '실증', 'proofPage.heroSubtitle': '인가된 파트너와의 실제 배포 성과.', 'proofPage.press': '보도자료', 'proofPage.partners': '파트너 에코시스템',
  'caseStudy.notFound': '사례 연구를 찾을 수 없습니다', 'caseStudy.client': '고객', 'caseStudy.context': '배경', 'caseStudy.problem': '문제점', 'caseStudy.solution': '솔루션', 'caseStudy.operationalFlow': '운영 흐름', 'caseStudy.ctaTitle': 'YAS가 무엇을 할 수 있는지 알아보세요', 'caseStudy.ctaSubtitle': 'YAS 인프라가 보장 배포를 어떻게 지원하는지 살펴보세요.', 'proofPage.pressSubtitle': 'YAS의 최신 보도 및 공지사항.', 'proofPage.pressFeatured': '주목', 'proofPage.partnersSubtitle': 'YAS 인프라와 함께 보장을 구축하는 보험사, 재보험사, 유통 파트너 및 고객.',
};

// ──────────────────────────────────────────────
// Thai (ไทย)
// ──────────────────────────────────────────────
const th: TranslationKeys = {
  'nav.platform': 'แพลตฟอร์ม', 'nav.products': 'ผลิตภัณฑ์', 'nav.solutions': 'โซลูชัน', 'nav.proof': 'ผลลัพธ์', 'nav.developers': 'นักพัฒนา', 'nav.trust': 'ความไว้วางใจ', 'nav.company': 'บริษัท', 'nav.contact': 'ติดต่อ', 'nav.search': 'ค้นหา', 'nav.bookDemo': 'จองเดโม',
  'hero.kicker': 'โครงสร้างพื้นฐานการคุ้มครองแบบเรียลไทม์', 'hero.headline': 'การคุ้มครองที่เคลื่อนไหว', 'hero.headlineGradient': 'ไปกับชีวิตคุณ', 'hero.subhead': 'ข้อมูลเรียลไทม์ขับเคลื่อนการคุ้มครองที่ยุติธรรมและเฉพาะบุคคล', 'hero.subheadExtended': ' เปิดใช้งานความคุ้มครองภายในไม่กี่นาทีผ่านผลิตภัณฑ์และพันธมิตรของเรา', 'hero.cta.primary': 'รับการคุ้มครอง', 'hero.cta.secondary': 'เป็นพันธมิตรกับ YAS',
  'trust.insurers': 'พันธมิตรผู้รับประกันภัย', 'trust.customers': 'คุ้มครองให้กับ', 'trust.footer': 'สร้างร่วมกับบริษัทประกันภัยและพันธมิตรใน HK, MY, VN, TH, SG และอื่นๆ',
  'problem.title': 'ปัญหา', 'problem.text': 'การประกันภัยแบบดั้งเดิมตั้งราคาตามค่าเฉลี่ยและอัปเดตช้าเกินไป การค้ำประกันแบบคงที่สร้างความไม่เป็นธรรม', 'promise.title': 'แนวทาง YAS', 'promise.text': 'ความคุ้มครองแบบไดนามิกตามบริบทเรียลไทม์ เริ่มเมื่อต้องการ ตั้งราคาตามขณะนั้น หยุดเมื่อจบ', 'problem.caption': 'จากเอกสารแบบคงที่สู่การคุ้มครองแบบไดนามิกเรียลไทม์',
  'howItWorks.kicker': 'วิธีการทำงาน', 'howItWorks.title': 'สัญญาณเรียลไทม์เข้า การคุ้มครองเรียลไทม์ออก', 'howItWorks.step1.label': 'รับสัญญาณ', 'howItWorks.step1.desc': 'เหตุการณ์แพลตฟอร์ม ข้อมูลอุปกรณ์ เมตาดาต้าธุรกรรม — ด้วยความยินยอม', 'howItWorks.step2.label': 'ประเมินความเสี่ยง', 'howItWorks.step2.desc': 'การให้คะแนนความเสี่ยงและการตั้งราคาแบบไดนามิกเรียลไทม์', 'howItWorks.step3.label': 'เปิดใช้ความคุ้มครอง', 'howItWorks.step3.desc': 'การเปิดใช้กรมธรรม์อย่างราบรื่นในแพลตฟอร์มพันธมิตร', 'howItWorks.step4.label': 'การชำระเงิน', 'howItWorks.step4.desc': 'เมื่อเกิดเหตุการณ์ ดำเนินการเคลมและชำระเงินอย่างรวดเร็ว',
  'infra.headline': 'โครงสร้างพื้นฐานที่สร้างขึ้นเพื่อ', 'infra.headlineGradient': 'อนาคต',
  'nowNext.title': 'ปัจจุบัน & อนาคต', 'now.kicker': 'เปิดให้บริการแล้ว', 'now.title': 'ผลิตภัณฑ์คุ้มครองพร้อมใช้กับพันธมิตรที่มีใบอนุญาต', 'now.items': 'ผลิตภัณฑ์สดในด้านขนส่ง กีฬา การชำระเงิน|แพลตฟอร์ม B2B2C และการจัดจำหน่ายตรง|การเคลมอัตโนมัติและการจ่ายเงินทันที|คอนโซลพันธมิตรและรายงานเรียลไทม์', 'next.kicker': 'กำลังพัฒนา', 'next.title': 'ชั้นความเสี่ยงเรียลไทม์สำหรับแพลตฟอร์ม อุปกรณ์ เอเจนต์ และหุ่นยนต์', 'next.items': 'การค้ำประกันแบบไดนามิกขนาดใหญ่|ทริกเกอร์แบบพาราเมตริกและการชำระอัตโนมัติ|การรวมสัญญาณอุปกรณ์และ IoT|โครงสร้างพื้นฐานความเสี่ยงสำหรับเอเจนต์และหุ่นยนต์',
  'bridge.text': 'YAS กำลังสร้างโครงสร้างพื้นฐานความเสี่ยงแบบเรียลไทม์ ปัจจุบันเราส่งมอบผ่านผลิตภัณฑ์คุ้มครองกับพันธมิตรที่มีใบอนุญาต', 'bridge.textExtended': ' ทุกกรมธรรม์ที่ออกและทุกเคลมที่ดำเนินการช่วยปรับปรุงความสามารถในการตั้งราคาความเสี่ยงได้แม่นยำยิ่งขึ้น',
  'products.kicker': 'ผลิตภัณฑ์', 'products.title': 'ผลิตภัณ���์ที่เปิดให้บริการ', 'products.subtitle': 'การคุ้มครองจริงที่คุณซื้อได้วันนี้ แต่ละชุดรองรับผู้บริโภค SME และองค์กร',
  'platform.kicker': 'โครงสร้างพื้นฐาน', 'platform.title': 'YAS ทำงานอย่างไร', 'platform.subtitle': 'โครงสร้างพื้นฐานการคุ้มครองแบบครบวงจร',
  'metrics.kicker': 'ประสิทธิภาพ', 'metrics.title': 'ประสิทธิภาพแพลตฟอร์ม', 'metrics.subtitle': 'ผลลัพธ์เชิงปริมาณทั่วโครงสร้างพื้นฐาน YAS',
  'caseStudies.kicker': 'ผลลัพธ์', 'caseStudies.title': 'ผลลัพธ์ในการผลิต', 'caseStudies.subtitle': 'ผลลัพธ์จริงจากการใช้งานจริง',
  'global.kicker': 'ทั่วโลก', 'global.title': 'พร้อมสำหรับทั่วโลก', 'global.subtitle': 'สร้างขึ้นสำหรับการใช้งานหลายตลาด หลายภาษา หลายกฎระเบียบ', 'global.regulatory': 'จุดยืนด้านกฎระเบียบ', 'global.regulatoryExtended': 'YAS ให้บริการโครงสร้างพื้นฐานเทคโนโลยี เมื่อจำเป็นต้องมีใบอนุญาต ความเสี่ยงจะรับโดยบริษัทประกันภัยที่มีใบอนุญาต', 'global.languages': 'รองรับ 13 ภาษา:', 'global.cityCaption': 'สำนักงานใหญ่ฮ่องกง & สิงคโปร์ — สองตลาดแรกของเรา',
  'cta.title': 'พร้อมที่จะเริ่มต้นหรือยัง?', 'cta.subtitle': 'ไม่ว่าคุณจะกำลังมองหาการคุ้มครอง หรือเป็นแพลตฟอร์ม บริษัทประกัน หรือนักพัฒนา', 'cta.primary': 'รับการคุ้มครอง', 'cta.secondary': 'เป็นพันธมิตรกับ YAS',
  'trustTeaser.title': 'ศูนย์ความไว้วางใจ', 'trustTeaser.subtitle': 'ความปลอดภัย ความเป็นส่วนตัว การปฏิบัติตามกฎระเบียบ การกำกับดูแลโมเดล',
  'common.learnMore': 'เรียนรู้เพิ่มเติม', 'common.viewAll': 'ดูทั้งหมด', 'common.readCase': 'อ่านกรณีศึกษา', 'common.consumer': 'ผู้บริโภค', 'common.sme': 'SME', 'common.enterprise': 'องค์กร', 'common.placeholder': '[ตัวอย่าง]',
  'footer.tagline': 'โครงสร้างพื้นฐานการคุ้มครองและการชำระเงินฟินเทค เทคโนโลยีที่ช่วยให้บริษัทประกันภัยที่มีใบอนุญาตส่งมอบการคุ้มครองแบบฝังตัวทั่วโลก', 'footer.rights': '2026 YAS Digital. สงวนลิขสิทธิ์.', 'footer.privacy': 'ความเป็นส่วนตัว', 'footer.terms': 'ข้อกำหนด', 'footer.security': 'ความปลอดภัย', 'footer.compliance': 'การปฏิบัติตาม', 'footer.disclaimer': 'YAS ไม่ใช่บริษัทประกันภัยที่มีใบอนุญาต YAS ให้บริการโครงสร้างพื้นฐานเทคโนโลยี การจัดจำหน่ายแบบฝั�� การตั้งราคาความเสี่ยง AI การเคลมอัตโนมัติ และประสบการณ์การจ่ายเงิน', 'footer.disclaimerExtended': ' เมื่อจำเป็นต้องมีใบอนุญาต ความเสี่ยงด้านประกันภัยจะรับโดยบริษัทประกันภัยและบริษัทประกันภัยต่อที่มีใบอนุญาต', 'footer.platform': 'แพลตฟอร์ม', 'footer.products': 'ผลิตภัณฑ์', 'footer.resources': 'แหล่งข้อมูล', 'footer.company': 'บริษัท', 'mobile.bookDemo': 'จองเดโม',
  'inner.bookDemo': 'จองเดโม', 'inner.apiDocs': 'เอกสาร API', 'inner.getStarted': 'เริ่มต้น', 'inner.explore': 'สำรวจ', 'inner.apply': 'สมัคร', 'inner.overview': 'ภาพรวม',
  'platformPage.heroTitle': 'โครงสร้างพื้นฐานการคุ้มครอง', 'platformPage.heroGradient': 'แบบครบวงจร', 'platformPage.heroSubtitle': 'สัญญาณความเสี่ยงเรียลไทม์เข้า การคุ้มครองเรียลไทม์ออก ทุกโมดูลออกแบบเพื่อขนาด ความเร็ว และการปฏิบัติตามกฎระเบียบ', 'platformPage.pipeline': 'ท่อส่งข้อมูล', 'platformPage.inPlainTerms': 'อธิบายง่ายๆ', 'platformPage.dataEthics': 'จริยธรรมข้อมูล & ความเป็นส่วนตัว', 'platformPage.modules': 'โมดูลแพลตฟอร์ม', 'platformPage.modulesSubtitle': 'เจ็ดโมดูลที่เชื่อมต่อกันสร้างสแต็กโครงสร้างพื้นฐานการคุ้มครองที่สมบูรณ์', 'platformPage.architecture': 'สถาปัตยกรรมระบบ', 'platformPage.performance': 'ประสิทธิภาพ', 'platformPage.integration': 'การรวมระบบ & เวลาเปิดตัว', 'platformPage.integrationSubtitle': 'YAS ออกแบบมาเพื่อการรวมระบบอย่างรวดเร็ว สถาปัตยกรรม API-first พร้อม SDK ครบถ้วน', 'platformPage.whatYouGet': 'สิ่งที่คุณจะได้รับ',
  'productPage.heroKicker': 'ผลิตภัณฑ์', 'productPage.heroTitle': 'ชุดผลิตภัณฑ์', 'productPage.heroSubtitle': 'โครงสร้างพื้นฐานการคุ้มครองที่ปรับขนาดได้ แต่ละชุดรองรับผู้บริโภค SME และองค์กร', 'productPage.bySegment': 'ตามกลุ่ม', 'productPage.segmentSubtitle': 'กรณีใช้งานและฟีเจอร์สำหรับแต่ละกลุ่มลูกค้า', 'productPage.useCases': 'กรณีใช้งาน', 'productPage.features': 'ฟีเจอร์', 'productPage.howItWorks': 'วิธีการทำงาน', 'productPage.performanceProof': 'หลักฐานประสิทธิภาพ', 'productPage.ecosystem': 'พันธมิตรในระบบนิเวศ',
  'solutionPage.heroKicker': 'โซลูชัน', 'solutionPage.heroTitle': 'โซลูชัน', 'solutionPage.heroGradient': 'อุตสาหกรรม', 'solutionPage.heroSubtitle': 'โครงสร้างพื้นฐานการคุ้มครองแบบฝังตัวสำหรับแพลตฟอร์ม กระเป๋าเงิน การเดินทาง และระบบนิเวศอุปกรณ์ใหม่', 'solutionPage.challengeVsSolution': 'ความท้าทาย vs โซลูชัน', 'solutionPage.challenges': 'ความท้าทายของอุตสาหกรรม', 'solutionPage.capabilities': 'ความสามารถของ YAS', 'solutionPage.exampleJourney': 'ตัวอย่างการใช้งาน', 'solutionPage.outcomes': 'ผลลัพธ์',
  'companyPage.aboutKicker': 'บริษัท', 'companyPage.aboutTitle': 'เกี่ยวกับ', 'companyPage.whatYasDoes': 'YAS ทำอะไร', 'companyPage.whatYasIsNot': 'YAS ไม่ใช่อะไร', 'companyPage.whatWeBelieve': 'สิ่งที่เราเชื่อ', 'companyPage.whereWeGo': 'ทิศทางของเรา', 'companyPage.ourJourney': 'เส้นทางของเรา', 'companyPage.presence': 'สถานที่ตั้ง', 'companyPage.leadershipTitle': 'ทีมผู้นำ', 'companyPage.leadershipSubtitle': 'ทีมที่สร้างโครงสร้างพื้นฐานการคุ้มครองฟินเทคระดับโลก', 'companyPage.careersTitle': 'ร่วมงานกับเรา', 'companyPage.careersSubtitle': 'ร่วมสร้างโครงสร้างพื้นฐานที่ทำให้การคุ้มครองเข้าถึงทุกคน', 'companyPage.openPositions': 'ตำแหน่งที่เปิดรับ', 'companyPage.mediaKit': 'สื่อมวลชน',
  'contactPage.heroKicker': 'ติดต่อ', 'contactPage.heroTitle': 'มา', 'contactPage.heroGradient': 'พูดคุยกัน', 'contactPage.heroSubtitle': 'ไม่ว่าคุณจะเป็นบริษัทประกัน แพลตฟอร์ม หรือนักพัฒนา', 'contactPage.formTitle': 'จองเดโม', 'contactPage.firstName': 'ชื่อ', 'contactPage.lastName': 'นามสกุล', 'contactPage.workEmail': 'อีเมลที่ทำงาน', 'contactPage.company': 'บริษัท', 'contactPage.role': 'ฉันเป็น...', 'contactPage.message': 'ข้อความ (ไม่บังคับ)', 'contactPage.submit': 'ส่ง', 'contactPage.thankYou': 'ขอบคุณ', 'contactPage.thankYouMsg': 'ข้อความของคุณได้รับแล้ว เราจะตอบกลับภายใน 24 ชั่วโมง', 'contactPage.responseTime': 'ตอบกลับภายใน 24 ชั่วโมง',
  'trustPage.heroTitle': 'ศูนย์', 'trustPage.heroGradient': 'ความไว้วางใจ', 'trustPage.heroSubtitle': 'ความปลอดภัย ความเป็นส่วนตัว การปฏิบัติตาม การกำกับดูแลโมเดล ความยุติธรรมในการเคลม', 'trustPage.commonQuestions': 'คำถามที่พบบ่อย', 'trustPage.documentation': 'เอกสาร & นโยบาย',
  'proofPage.heroTitle': 'หลักฐาน', 'proofPage.heroGradient': 'ในการผลิต', 'proofPage.heroSubtitle': 'ผลลัพธ์จริงจากการใช้งานจริงกับพันธมิตรที่มีใบอนุญาต', 'proofPage.press': 'ข่าวสาร', 'proofPage.partners': 'ระบบนิเวศพันธมิตร',
  'caseStudy.notFound': 'ไม่พบกรณีศึกษา', 'caseStudy.client': 'ลูกค้า', 'caseStudy.context': 'บริบท', 'caseStudy.problem': 'ปัญหา', 'caseStudy.solution': 'โซลูชัน', 'caseStudy.operationalFlow': 'ขั้นตอนการดำเนินงาน', 'caseStudy.ctaTitle': 'ดูว่า YAS จะช่วยคุณได้อย่างไร', 'caseStudy.ctaSubtitle': 'สำรวจว่าโครงสร้างพื้นฐาน YAS สามารถสนับสนุนการปรับใช้การคุ้มครองของคุณอย่างไร', 'proofPage.pressSubtitle': 'ข่าวสารและประกาศล่าสุดจาก YAS', 'proofPage.pressFeatured': 'แนะนำ', 'proofPage.partnersSubtitle': 'บริษัทประกันภัย บริษัทประกันภัยต่อ พันธมิตรจัดจำหน่าย และลูกค้าที่ขับเคลื่อนการคุ้มครองด้วยโครงสร้างพื้นฐาน YAS',
};

// ──────────────────────────────────────────────
// Bahasa Indonesia
// ──────────────────────────────────────────────
const id: TranslationKeys = {
  'nav.platform': 'Platform', 'nav.products': 'Produk', 'nav.solutions': 'Solusi', 'nav.proof': 'Bukti', 'nav.developers': 'Developer', 'nav.trust': 'Kepercayaan', 'nav.company': 'Perusahaan', 'nav.contact': 'Kontak', 'nav.search': 'Cari', 'nav.bookDemo': 'Pesan Demo',
  'hero.kicker': 'Infrastruktur Perlindungan Real-Time', 'hero.headline': 'Perlindungan yang Bergerak', 'hero.headlineGradient': 'Bersama Hidupmu', 'hero.subhead': 'Data real-time mendorong perlindungan yang adil dan sangat personal.', 'hero.subheadExtended': ' Aktifkan perlindungan dalam hitungan menit melalui produk dan mitra kami.', 'hero.cta.primary': 'Dapatkan Perlindungan', 'hero.cta.secondary': 'Bermitra dengan YAS',
  'trust.insurers': 'Mitra Penanggung Risiko & Asuransi', 'trust.customers': 'Melindungi', 'trust.footer': 'Dibangun bersama perusahaan asuransi dan mitra distribusi di HK, MY, VN, TH, SG, dan lainnya.',
  'problem.title': 'Masalah', 'problem.text': 'Asuransi tradisional menetapkan harga rata-rata dan lambat diperbarui. Underwriting statis menciptakan gesekan dan ketidakadilan.', 'promise.title': 'Pendekatan YAS', 'promise.text': 'Perlindungan dinamis berdasarkan konteks real-time. Mulai saat dibutuhkan, harga sesuai momen, berhenti saat selesai.', 'problem.caption': 'Dari dokumen statis ke perlindungan dinamis real-time.',
  'howItWorks.kicker': 'Cara Kerja', 'howItWorks.title': 'Sinyal real-time masuk. Perlindungan real-time keluar.', 'howItWorks.step1.label': 'Tangkap Sinyal', 'howItWorks.step1.desc': 'Event platform, data perangkat, metadata transaksi — dengan persetujuan.', 'howItWorks.step2.label': 'Skor Risiko', 'howItWorks.step2.desc': 'Penilaian risiko dan penetapan harga dinamis real-time.', 'howItWorks.step3.label': 'Aktifkan Perlindungan', 'howItWorks.step3.desc': 'Aktivasi polis yang mulus di platform mitra.', 'howItWorks.step4.label': 'Penyelesaian', 'howItWorks.step4.desc': 'Saat pemicu terjadi, proses klaim dan penyelesaian cepat.',
  'infra.headline': 'Infrastruktur dibangun untuk', 'infra.headlineGradient': ' masa depan',
  'nowNext.title': 'Sekarang & Selanjutnya', 'now.kicker': 'Sudah Beroperasi', 'now.title': 'Produk perlindungan siap pasar dengan mitra berlisensi.', 'now.items': 'Produk aktif di transportasi, olahraga, pembayaran|Platform B2B2C dan distribusi langsung|Klaim otomatis dan pembayaran instan|Konsol mitra dan pelaporan real-time', 'next.kicker': 'Sedang Dibangun', 'next.title': 'Layer risiko real-time untuk platform, perangkat, agen, dan robotik.', 'next.items': 'Underwriting dinamis skala besar|Pemicu parametrik dan penyelesaian otomatis|Integrasi sinyal perangkat dan IoT|Infrastruktur risiko untuk agen dan robotik',
  'bridge.text': 'YAS sedang membangun infrastruktur risiko real-time. Saat ini kami menyediakannya melalui produk perlindungan siap pasar dengan mitra berlisensi.', 'bridge.textExtended': ' Setiap polis yang diterbitkan dan setiap klaim yang diproses meningkatkan kemampuan kami dalam penetapan harga risiko yang lebih akurat.',
  'products.kicker': 'Produk', 'products.title': 'Produk yang Tersedia', 'products.subtitle': 'Perlindungan nyata yang bisa Anda beli hari ini. Setiap suite mendukung Konsumen, SME, dan Enterprise.',
  'platform.kicker': 'Infrastruktur', 'platform.title': 'Cara Kerja YAS', 'platform.subtitle': 'Infrastruktur perlindungan end-to-end dari pengumpulan sinyal hingga penyelesaian.',
  'metrics.kicker': 'Kinerja', 'metrics.title': 'Kinerja Platform', 'metrics.subtitle': 'Hasil terukur di seluruh infrastruktur YAS.',
  'caseStudies.kicker': 'Bukti', 'caseStudies.title': 'Bukti di Produksi', 'caseStudies.subtitle': 'Hasil nyata dari implementasi langsung.',
  'global.kicker': 'Global', 'global.title': 'Siap Global', 'global.subtitle': 'Dibangun untuk deployment multi-pasar, multi-bahasa, multi-regulasi.', 'global.regulatory': 'Posisi Regulasi', 'global.regulatoryExtended': 'YAS menyediakan infrastruktur teknologi. Jika lisensi diperlukan, risiko ditanggung oleh perusahaan asuransi berlisensi.', 'global.languages': '13 bahasa didukung:', 'global.cityCaption': 'Kantor pusat Hong Kong & Singapura — dua pasar pertama kami.',
  'cta.title': 'Siap untuk Memulai?', 'cta.subtitle': 'Baik Anda mencari perlindungan, atau platform, perusahaan asuransi, atau developer yang membangun dengan infrastruktur risiko real-time.', 'cta.primary': 'Dapatkan Perlindungan', 'cta.secondary': 'Bermitra dengan YAS',
  'trustTeaser.title': 'Trust Hub', 'trustTeaser.subtitle': 'Keamanan, privasi, kepatuhan, tata kelola model, dan keadilan klaim.',
  'common.learnMore': 'Pelajari Lebih Lanjut', 'common.viewAll': 'Lihat Semua', 'common.readCase': 'Baca Studi Kasus', 'common.consumer': 'Konsumen', 'common.sme': 'SME', 'common.enterprise': 'Enterprise', 'common.placeholder': '[Placeholder]',
  'footer.tagline': 'Infrastruktur perlindungan dan penyelesaian fintech. Teknologi yang memungkinkan perusahaan asuransi berlisensi menyediakan perlindungan tertanam secara global.', 'footer.rights': '2026 YAS Digital. Hak cipta dilindungi.', 'footer.privacy': 'Privasi', 'footer.terms': 'Ketentuan', 'footer.security': 'Keamanan', 'footer.compliance': 'Kepatuhan', 'footer.disclaimer': 'YAS bukan perusahaan asuransi berlisensi. YAS menyediakan infrastruktur teknologi, jalur distribusi tertanam, penetapan harga risiko AI, otomasi klaim, dan pengalaman pembayaran.', 'footer.disclaimerExtended': ' Jika lisensi diperlukan, risiko asuransi ditanggung oleh perusahaan asuransi dan reasuransi berlisensi.', 'footer.platform': 'Platform', 'footer.products': 'Produk', 'footer.resources': 'Sumber Daya', 'footer.company': 'Perusahaan', 'mobile.bookDemo': 'Pesan Demo',
  'inner.bookDemo': 'Pesan Demo', 'inner.apiDocs': 'Dokumentasi API', 'inner.getStarted': 'Mulai', 'inner.explore': 'Jelajahi', 'inner.apply': 'Lamar', 'inner.overview': 'Ikhtisar',
  'platformPage.heroTitle': 'Infrastruktur Perlindungan', 'platformPage.heroGradient': 'End-to-End', 'platformPage.heroSubtitle': 'Sinyal risiko real-time masuk, perlindungan real-time keluar. Setiap modul dirancang untuk skala, kecepatan, dan kepatuhan.', 'platformPage.pipeline': 'Pipeline Data', 'platformPage.inPlainTerms': 'Secara Sederhana', 'platformPage.dataEthics': 'Etika Data & Privasi', 'platformPage.modules': 'Modul Platform', 'platformPage.modulesSubtitle': 'Tujuh modul yang saling terhubung membentuk stack infrastruktur perlindungan lengkap.', 'platformPage.architecture': 'Arsitektur Sistem', 'platformPage.performance': 'Kinerja', 'platformPage.integration': 'Integrasi & Waktu Peluncuran', 'platformPage.integrationSubtitle': 'YAS dirancang untuk integrasi cepat. Arsitektur API-first dengan SDK komprehensif.', 'platformPage.whatYouGet': 'Yang Anda dapatkan',
  'productPage.heroKicker': 'Produk', 'productPage.heroTitle': 'Suite Produk', 'productPage.heroSubtitle': 'Infrastruktur perlindungan skalabel lintas vertikal. Setiap suite mendukung Konsumen, SME, dan Enterprise.', 'productPage.bySegment': 'Per Segmen', 'productPage.segmentSubtitle': 'Kasus penggunaan dan fitur untuk setiap tingkat pelanggan.', 'productPage.useCases': 'Kasus Penggunaan', 'productPage.features': 'Fitur', 'productPage.howItWorks': 'Cara Kerja', 'productPage.performanceProof': 'Bukti Kinerja', 'productPage.ecosystem': 'Mitra Ekosistem',
  'solutionPage.heroKicker': 'Solusi', 'solutionPage.heroTitle': 'Solusi', 'solutionPage.heroGradient': 'Industri', 'solutionPage.heroSubtitle': 'Infrastruktur perlindungan tertanam untuk platform, dompet, mobilitas, perdagangan, dan ekosistem perangkat baru.', 'solutionPage.challengeVsSolution': 'Tantangan vs Solusi', 'solutionPage.challenges': 'Tantangan Industri', 'solutionPage.capabilities': 'Kapabilitas YAS', 'solutionPage.exampleJourney': 'Contoh Perjalanan', 'solutionPage.outcomes': 'Hasil',
  'companyPage.aboutKicker': 'Perusahaan', 'companyPage.aboutTitle': 'Tentang', 'companyPage.whatYasDoes': 'Apa yang YAS Lakukan', 'companyPage.whatYasIsNot': 'Apa yang Bukan YAS', 'companyPage.whatWeBelieve': 'Keyakinan Kami', 'companyPage.whereWeGo': 'Arah Kami', 'companyPage.ourJourney': 'Perjalanan Kami', 'companyPage.presence': 'Kehadiran', 'companyPage.leadershipTitle': 'Kepemimpinan', 'companyPage.leadershipSubtitle': 'Tim yang membangun infrastruktur perlindungan fintech global.', 'companyPage.careersTitle': 'Karir', 'companyPage.careersSubtitle': 'Bergabunglah membangun infrastruktur perlindungan untuk semua.', 'companyPage.openPositions': 'Posisi Terbuka', 'companyPage.mediaKit': 'Media Kit',
  'contactPage.heroKicker': 'Kontak', 'contactPage.heroTitle': 'Mari', 'contactPage.heroGradient': 'Bicara', 'contactPage.heroSubtitle': 'Apakah Anda perusahaan asuransi, platform, atau developer yang mengevaluasi API kami.', 'contactPage.formTitle': 'Pesan Demo', 'contactPage.firstName': 'Nama Depan', 'contactPage.lastName': 'Nama Belakang', 'contactPage.workEmail': 'Email Kerja', 'contactPage.company': 'Perusahaan', 'contactPage.role': 'Saya adalah...', 'contactPage.message': 'Pesan (opsional)', 'contactPage.submit': 'Kirim', 'contactPage.thankYou': 'Terima Kasih', 'contactPage.thankYouMsg': 'Pesan Anda telah diterima. Kami akan menghubungi Anda dalam 24 jam.', 'contactPage.responseTime': 'Biasanya merespons dalam 24 jam',
  'trustPage.heroTitle': 'Trust', 'trustPage.heroGradient': 'Hub', 'trustPage.heroSubtitle': 'Keamanan, privasi, kepatuhan, tata kelola model, keadilan klaim, dan kontrol audit.', 'trustPage.commonQuestions': 'Pertanyaan Umum', 'trustPage.documentation': 'Dokumentasi & Kebijakan',
  'proofPage.heroTitle': 'Bukti di', 'proofPage.heroGradient': 'Produksi', 'proofPage.heroSubtitle': 'Hasil nyata dari implementasi dengan mitra berlisensi.', 'proofPage.press': 'Berita & Pers', 'proofPage.partners': 'Ekosistem Mitra',
  'caseStudy.notFound': 'Studi kasus tidak ditemukan', 'caseStudy.client': 'Klien', 'caseStudy.context': 'Konteks', 'caseStudy.problem': 'Masalah', 'caseStudy.solution': 'Solusi', 'caseStudy.operationalFlow': 'Alur Operasional', 'caseStudy.ctaTitle': 'Lihat Apa yang YAS Bisa Lakukan untuk Anda', 'caseStudy.ctaSubtitle': 'Jelajahi bagaimana infrastruktur YAS dapat mendukung deployment perlindungan Anda.', 'proofPage.pressSubtitle': 'Liputan dan pengumuman terbaru dari YAS.', 'proofPage.pressFeatured': 'Unggulan', 'proofPage.partnersSubtitle': 'Perusahaan asuransi, reasuransi, mitra distribusi, dan pelanggan yang mendukung perlindungan dengan infrastruktur YAS.',
};

// ──────────────────────────────────────────────
// Malay (Bahasa Melayu)
// ──────────────────────────────────────────────
const ms: TranslationKeys = { ...id,
  'nav.contact': 'Hubungi', 'nav.bookDemo': 'Tempah Demo', 'hero.kicker': 'Infrastruktur Perlindungan Masa Nyata', 'hero.headline': 'Perlindungan yang Bergerak', 'hero.headlineGradient': 'Bersama Hidup Anda', 'hero.cta.primary': 'Dapatkan Perlindungan', 'hero.cta.secondary': 'Rakan Kongsi YAS',
  'footer.rights': '2026 YAS Digital. Hak cipta terpelihara.', 'mobile.bookDemo': 'Tempah Demo', 'inner.bookDemo': 'Tempah Demo',
  'contactPage.heroKicker': 'Hubungi', 'contactPage.heroTitle': 'Jom', 'contactPage.heroGradient': 'Berbual', 'contactPage.formTitle': 'Tempah Demo',
};

// ──────────────────────────────────────────────
// Spanish (Español)
// ──────────────────────────────────────────────
const es: TranslationKeys = {
  'nav.platform': 'Plataforma', 'nav.products': 'Productos', 'nav.solutions': 'Soluciones', 'nav.proof': 'Resultados', 'nav.developers': 'Desarrolladores', 'nav.trust': 'Confianza', 'nav.company': 'Empresa', 'nav.contact': 'Contacto', 'nav.search': 'Buscar', 'nav.bookDemo': 'Agendar Demo',
  'hero.kicker': 'Infraestructura de Protección en Tiempo Real', 'hero.headline': 'Protección que se Mueve', 'hero.headlineGradient': 'Con tu Vida', 'hero.subhead': 'Datos en tiempo real para una protección justa e hiperpersonalizada.', 'hero.subheadExtended': ' Activa cobertura en minutos a través de nuestros productos y socios.', 'hero.cta.primary': 'Obtén Protección', 'hero.cta.secondary': 'Ser Socio de YAS',
  'trust.insurers': 'Aseguradoras y Socios de Riesgo', 'trust.customers': 'Protegiendo a', 'trust.footer': 'Construido con aseguradoras y socios de distribución en HK, MY, VN, TH, SG y más.',
  'problem.title': 'El Problema', 'problem.text': 'El seguro tradicional fija precios promedio y se actualiza demasiado lento. La suscripción estática crea fricción y percepción de injusticia.', 'promise.title': 'El Enfoque YAS', 'promise.text': 'Cobertura dinámica basada en contexto en tiempo real. Comienza cuando se necesita, precio según el momento, se detiene al terminar.', 'problem.caption': 'De papeleo estático a protección dinámica en tiempo real.',
  'howItWorks.kicker': 'Cómo Funciona', 'howItWorks.title': 'Señales en tiempo real. Protección en tiempo real.', 'howItWorks.step1.label': 'Capturar Señales', 'howItWorks.step1.desc': 'Eventos de plataforma, datos de dispositivos, metadatos de transacciones — con consentimiento.', 'howItWorks.step2.label': 'Evaluar Riesgo', 'howItWorks.step2.desc': 'Evaluación de riesgo y fijación de precios dinámica en tiempo real.', 'howItWorks.step3.label': 'Activar Cobertura', 'howItWorks.step3.desc': 'Activación fluida de pólizas dentro de la plataforma del socio.', 'howItWorks.step4.label': 'Liquidar', 'howItWorks.step4.desc': 'Cuando ocurren eventos, procesamiento rápido de reclamos y liquidación.',
  'infra.headline': 'Infraestructura construida para', 'infra.headlineGradient': ' el futuro',
  'nowNext.title': 'Ahora y Después', 'now.kicker': 'En Producción', 'now.title': 'Productos de protección listos para el mercado con socios licenciados.', 'now.items': 'Productos activos en transporte, deportes, pagos|Plataforma B2B2C y distribución directa|Reclamos automatizados y pagos instantáneos|Consola de socios e informes en tiempo real', 'next.kicker': 'En Desarrollo', 'next.title': 'Capa de riesgo en tiempo real para plataformas, dispositivos, agentes y robótica.', 'next.items': 'Suscripción dinámica a escala|Disparadores paramétricos y liquidación automática|Integración de señales de dispositivos e IoT|Infraestructura de riesgo para agentes y robótica',
  'bridge.text': 'YAS está construyendo infraestructura de riesgo en tiempo real. Hoy la entregamos a través de productos de protección con socios licenciados.', 'bridge.textExtended': ' Cada póliza emitida y cada reclamo atendido mejora nuestra capacidad de fijar precios de riesgo más precisos.',
  'products.kicker': 'Productos', 'products.title': 'Productos Disponibles', 'products.subtitle': 'Protección real que puedes comprar hoy. Cada suite soporta segmentos de Consumidor, PyME y Empresa.',
  'platform.kicker': 'Infraestructura', 'platform.title': 'Cómo Funciona YAS', 'platform.subtitle': 'Infraestructura de protección de extremo a extremo.',
  'metrics.kicker': 'Rendimiento', 'metrics.title': 'Rendimiento de la Plataforma', 'metrics.subtitle': 'Resultados cuantificados en toda la infraestructura YAS.',
  'caseStudies.kicker': 'Resultados', 'caseStudies.title': 'Resultados en Producción', 'caseStudies.subtitle': 'Resultados reales de implementaciones en vivo.',
  'global.kicker': 'Global', 'global.title': 'Preparación Global', 'global.subtitle': 'Construido para despliegue multi-mercado, multi-idioma, multi-regulación.', 'global.regulatory': 'Postura Regulatoria', 'global.regulatoryExtended': 'YAS proporciona infraestructura tecnológica. Donde se requiere licencia, el riesgo lo asumen aseguradoras licenciadas.', 'global.languages': '13 idiomas soportados:', 'global.cityCaption': 'Sede en Hong Kong y Singapur — nuestros dos primeros mercados.',
  'cta.title': '¿Listo para Comenzar?', 'cta.subtitle': 'Ya sea que busques protección o seas una plataforma, aseguradora o desarrollador construyendo con infraestructura de riesgo en tiempo real.', 'cta.primary': 'Obtén Protección', 'cta.secondary': 'Ser Socio de YAS',
  'trustTeaser.title': 'Centro de Confianza', 'trustTeaser.subtitle': 'Seguridad, privacidad, cumplimiento, gobernanza de modelos y equidad en reclamos.',
  'common.learnMore': 'Más Información', 'common.viewAll': 'Ver Todo', 'common.readCase': 'Leer Caso', 'common.consumer': 'Consumidor', 'common.sme': 'PyME', 'common.enterprise': 'Empresa', 'common.placeholder': '[Marcador]',
  'footer.tagline': 'Infraestructura fintech de protección y liquidación. Tecnología que permite a aseguradoras licenciadas ofrecer protección integrada globalmente.', 'footer.rights': '2026 YAS Digital. Todos los derechos reservados.', 'footer.privacy': 'Privacidad', 'footer.terms': 'Términos', 'footer.security': 'Seguridad', 'footer.compliance': 'Cumplimiento', 'footer.disclaimer': 'YAS no es una aseguradora licenciada. YAS proporciona infraestructura tecnológica, distribución integrada, fijación de precios de riesgo con IA, automatización de reclamos y experiencia de pago.', 'footer.disclaimerExtended': ' Donde se requiere licencia, el riesgo de seguro lo asumen aseguradoras y reaseguradoras licenciadas.', 'footer.platform': 'Plataforma', 'footer.products': 'Productos', 'footer.resources': 'Recursos', 'footer.company': 'Empresa', 'mobile.bookDemo': 'Agendar Demo',
  'inner.bookDemo': 'Agendar Demo', 'inner.apiDocs': 'Documentación API', 'inner.getStarted': 'Comenzar', 'inner.explore': 'Explorar', 'inner.apply': 'Aplicar', 'inner.overview': 'Resumen',
  'platformPage.heroTitle': 'Infraestructura de Protección', 'platformPage.heroGradient': 'De Extremo a Extremo', 'platformPage.heroSubtitle': 'Señales de riesgo en tiempo real. Cada módulo diseñado para escala, velocidad y cumplimiento regulatorio.', 'platformPage.pipeline': 'Pipeline de Datos', 'platformPage.inPlainTerms': 'En Términos Simples', 'platformPage.dataEthics': 'Ética de Datos y Privacidad', 'platformPage.modules': 'Módulos de la Plataforma', 'platformPage.modulesSubtitle': 'Siete módulos interconectados formando un stack completo de infraestructura de protección.', 'platformPage.architecture': 'Arquitectura del Sistema', 'platformPage.performance': 'Rendimiento', 'platformPage.integration': 'Integración y Tiempo de Lanzamiento', 'platformPage.integrationSubtitle': 'YAS diseñado para integración rápida. Arquitectura API-first con SDKs completos.', 'platformPage.whatYouGet': 'Lo que obtienes',
  'productPage.heroKicker': 'Productos', 'productPage.heroTitle': 'Suites de Producto', 'productPage.heroSubtitle': 'Infraestructura de protección escalable. Cada suite soporta Consumidor, PyME y Empresa.', 'productPage.bySegment': 'Por Segmento', 'productPage.segmentSubtitle': 'Casos de uso y funcionalidades para cada nivel de cliente.', 'productPage.useCases': 'Casos de Uso', 'productPage.features': 'Funcionalidades', 'productPage.howItWorks': 'Cómo Funciona', 'productPage.performanceProof': 'Prueba de Rendimiento', 'productPage.ecosystem': 'Socios del Ecosistema',
  'solutionPage.heroKicker': 'Soluciones', 'solutionPage.heroTitle': 'Soluciones', 'solutionPage.heroGradient': 'Industriales', 'solutionPage.heroSubtitle': 'Infraestructura de protección integrada para plataformas, billeteras, movilidad y ecosistemas de dispositivos.', 'solutionPage.challengeVsSolution': 'Desafío vs Solución', 'solutionPage.challenges': 'Desafíos de la Industria', 'solutionPage.capabilities': 'Capacidades de YAS', 'solutionPage.exampleJourney': 'Ejemplo de Recorrido', 'solutionPage.outcomes': 'Resultados',
  'companyPage.aboutKicker': 'Empresa', 'companyPage.aboutTitle': 'Acerca de', 'companyPage.whatYasDoes': 'Qué Hace YAS', 'companyPage.whatYasIsNot': 'Qué No Es YAS', 'companyPage.whatWeBelieve': 'Lo Que Creemos', 'companyPage.whereWeGo': 'Hacia Dónde Vamos', 'companyPage.ourJourney': 'Nuestro Recorrido', 'companyPage.presence': 'Presencia', 'companyPage.leadershipTitle': 'Liderazgo', 'companyPage.leadershipSubtitle': 'El equipo construyendo infraestructura fintech global.', 'companyPage.careersTitle': 'Carreras', 'companyPage.careersSubtitle': 'Únete a construir infraestructura de protección para todos.', 'companyPage.openPositions': 'Posiciones Abiertas', 'companyPage.mediaKit': 'Kit de Medios',
  'contactPage.heroKicker': 'Contacto', 'contactPage.heroTitle': 'Hable', 'contactPage.heroGradient': 'mos', 'contactPage.heroSubtitle': 'Ya sea aseguradora, plataforma o desarrollador evaluando nuestras APIs.', 'contactPage.formTitle': 'Agendar Demo', 'contactPage.firstName': 'Nombre', 'contactPage.lastName': 'Apellido', 'contactPage.workEmail': 'Email de Trabajo', 'contactPage.company': 'Empresa', 'contactPage.role': 'Soy un/a...', 'contactPage.message': 'Mensaje (opcional)', 'contactPage.submit': 'Enviar', 'contactPage.thankYou': 'Gracias', 'contactPage.thankYouMsg': 'Su mensaje ha sido recibido. Le responderemos en 24 horas.', 'contactPage.responseTime': 'Respuesta típica en 24 horas',
  'trustPage.heroTitle': 'Centro de', 'trustPage.heroGradient': 'Confianza', 'trustPage.heroSubtitle': 'Seguridad, privacidad, cumplimiento, gobernanza de modelos, equidad en reclamos y controles de auditoría.', 'trustPage.commonQuestions': 'Preguntas Frecuentes', 'trustPage.documentation': 'Documentación y Políticas',
  'proofPage.heroTitle': 'Resultados en', 'proofPage.heroGradient': 'Producción', 'proofPage.heroSubtitle': 'Resultados reales de implementaciones con socios licenciados.', 'proofPage.press': 'Prensa y Noticias', 'proofPage.partners': 'Ecosistema de Socios',
  'caseStudy.notFound': 'Caso de estudio no encontrado', 'caseStudy.client': 'Cliente', 'caseStudy.context': 'Contexto', 'caseStudy.problem': 'Problema', 'caseStudy.solution': 'Solución', 'caseStudy.operationalFlow': 'Flujo Operativo', 'caseStudy.ctaTitle': 'Descubre lo que YAS puede hacer por ti', 'caseStudy.ctaSubtitle': 'Explora cómo la infraestructura YAS puede impulsar tu despliegue de protección.', 'proofPage.pressSubtitle': 'Últimas coberturas y anuncios de YAS.', 'proofPage.pressFeatured': 'Destacado', 'proofPage.partnersSubtitle': 'Aseguradoras, reaseguradoras, socios de distribución y clientes impulsando la protección con infraestructura YAS.',
};

// ──────────────────────────────────────────────
// French (Français)
// ──────────────────────────────────────────────
const fr: TranslationKeys = {
  'nav.platform': 'Plateforme', 'nav.products': 'Produits', 'nav.solutions': 'Solutions', 'nav.proof': 'Preuves', 'nav.developers': 'Développeurs', 'nav.trust': 'Confiance', 'nav.company': 'Entreprise', 'nav.contact': 'Contact', 'nav.search': 'Rechercher', 'nav.bookDemo': 'Réserver une Démo',
  'hero.kicker': 'Infrastructure de Protection en Temps Réel', 'hero.headline': 'Une Protection qui Suit', 'hero.headlineGradient': 'Votre Vie', 'hero.subhead': 'Des données en temps réel pour une protection juste et hyperpersonnalisée.', 'hero.subheadExtended': ' Activez votre couverture en quelques minutes via nos produits et partenaires.', 'hero.cta.primary': 'Obtenir une Protection', 'hero.cta.secondary': 'Devenir Partenaire YAS',
  'trust.insurers': 'Assureurs et Porteurs de Risque', 'trust.customers': 'Protection Pour', 'trust.footer': 'Construit avec des assureurs et partenaires de distribution en HK, MY, VN, TH, SG et plus.',
  'problem.title': 'Le Problème', 'problem.text': 'L\'assurance traditionnelle fixe des prix moyens et se met à jour trop lentement. La souscription statique crée des frictions et un sentiment d\'injustice.', 'promise.title': 'L\'Approche YAS', 'promise.text': 'Couverture dynamique basée sur le contexte en temps réel. Démarre quand nécessaire, tarification selon le moment, s\'arrête à la fin.', 'problem.caption': 'De la paperasse statique à la protection dynamique en temps réel.',
  'howItWorks.kicker': 'Comment Ça Marche', 'howItWorks.title': 'Signaux en temps réel. Protection en temps réel.', 'howItWorks.step1.label': 'Capter les Signaux', 'howItWorks.step1.desc': 'Événements plateforme, données appareils, métadonnées transactions — avec consentement.', 'howItWorks.step2.label': 'Évaluer le Risque', 'howItWorks.step2.desc': 'Évaluation du risque et tarification dynamique en temps réel.', 'howItWorks.step3.label': 'Activer la Couverture', 'howItWorks.step3.desc': 'Activation fluide des polices dans la plateforme partenaire.', 'howItWorks.step4.label': 'Régler', 'howItWorks.step4.desc': 'Quand un événement survient, traitement rapide des sinistres et règlement.',
  'infra.headline': 'Infrastructure conçue pour', 'infra.headlineGradient': ' l\'avenir',
  'nowNext.title': 'Maintenant & Ensuite', 'now.kicker': 'En Production', 'now.title': 'Produits de protection prêts avec des partenaires licenciés.', 'now.items': 'Produits actifs dans le transport, sport, paiements|Plateforme B2B2C et distribution directe|Sinistres automatisés et paiements instantanés|Console partenaire et rapports en temps réel', 'next.kicker': 'En Développement', 'next.title': 'Couche de risque en temps réel pour plateformes, appareils, agents et robotique.', 'next.items': 'Souscription dynamique à grande échelle|Déclencheurs paramétriques et règlement automatique|Intégration des signaux appareils et IoT|Infrastructure de risque pour agents et robotique',
  'bridge.text': 'YAS construit une infrastructure de risque en temps réel. Aujourd\'hui, nous la livrons via des produits de protection avec des partenaires licenciés.', 'bridge.textExtended': ' Chaque police émise et chaque sinistre traité améliore notre capacité à tarifer le risque plus précisément.',
  'products.kicker': 'Produits', 'products.title': 'Produits Disponibles', 'products.subtitle': 'Protection réelle achetable aujourd\'hui. Chaque suite prend en charge Consommateur, PME et Entreprise.',
  'platform.kicker': 'Infrastructure', 'platform.title': 'Comment Fonctionne YAS', 'platform.subtitle': 'Infrastructure de protection de bout en bout.',
  'metrics.kicker': 'Performance', 'metrics.title': 'Performance de la Plateforme', 'metrics.subtitle': 'Résultats quantifiés sur toute l\'infrastructure YAS.',
  'caseStudies.kicker': 'Preuves', 'caseStudies.title': 'Preuves en Production', 'caseStudies.subtitle': 'Résultats réels de déploiements en direct.',
  'global.kicker': 'Mondial', 'global.title': 'Prêt pour le Monde', 'global.subtitle': 'Conçu pour un déploiement multi-marché, multilingue, multi-réglementation.', 'global.regulatory': 'Posture Réglementaire', 'global.regulatoryExtended': 'YAS fournit une infrastructure technologique. Là où une licence est requise, le risque est porté par des assureurs licenciés.', 'global.languages': '13 langues prises en charge :', 'global.cityCaption': 'Siège à Hong Kong et Singapour — nos deux premiers marchés.',
  'cta.title': 'Prêt à Commencer ?', 'cta.subtitle': 'Que vous cherchiez une protection ou que vous soyez une plateforme, un assureur ou un développeur.', 'cta.primary': 'Obtenir une Protection', 'cta.secondary': 'Devenir Partenaire YAS',
  'trustTeaser.title': 'Centre de Confiance', 'trustTeaser.subtitle': 'Sécurité, confidentialité, conformité, gouvernance des modèles et équité des sinistres.',
  'common.learnMore': 'En Savoir Plus', 'common.viewAll': 'Tout Voir', 'common.readCase': 'Lire l\'Étude', 'common.consumer': 'Consommateur', 'common.sme': 'PME', 'common.enterprise': 'Entreprise', 'common.placeholder': '[Réservé]',
  'footer.tagline': 'Infrastructure fintech de protection et de règlement. Technologie permettant aux assureurs licenciés de fournir une protection intégrée mondialement.', 'footer.rights': '2026 YAS Digital. Tous droits réservés.', 'footer.privacy': 'Confidentialité', 'footer.terms': 'Conditions', 'footer.security': 'Sécurité', 'footer.compliance': 'Conformité', 'footer.disclaimer': 'YAS n\'est pas un assureur licencié. YAS fournit une infrastructure technologique, des rails de distribution intégrés, une tarification du risque par IA, l\'automatisation des sinistres et l\'expérience de paiement.', 'footer.disclaimerExtended': ' Là où une licence est requise, le risque d\'assurance est porté par des assureurs et réassureurs licenciés.', 'footer.platform': 'Plateforme', 'footer.products': 'Produits', 'footer.resources': 'Ressources', 'footer.company': 'Entreprise', 'mobile.bookDemo': 'Réserver une Démo',
  'inner.bookDemo': 'Réserver une Démo', 'inner.apiDocs': 'Documentation API', 'inner.getStarted': 'Commencer', 'inner.explore': 'Explorer', 'inner.apply': 'Postuler', 'inner.overview': 'Vue d\'Ensemble',
  'platformPage.heroTitle': 'Infrastructure de Protection', 'platformPage.heroGradient': 'De Bout en Bout', 'platformPage.heroSubtitle': 'Signaux de risque en temps réel. Chaque module conçu pour l\'échelle, la vitesse et la conformité.', 'platformPage.pipeline': 'Pipeline de Données', 'platformPage.inPlainTerms': 'En Termes Simples', 'platformPage.dataEthics': 'Éthique des Données et Confidentialité', 'platformPage.modules': 'Modules de la Plateforme', 'platformPage.modulesSubtitle': 'Sept modules interconnectés formant une pile complète d\'infrastructure de protection.', 'platformPage.architecture': 'Architecture du Système', 'platformPage.performance': 'Performance', 'platformPage.integration': 'Intégration et Délai de Lancement', 'platformPage.integrationSubtitle': 'YAS conçu pour une intégration rapide. Architecture API-first avec SDKs complets.', 'platformPage.whatYouGet': 'Ce que vous obtenez',
  'productPage.heroKicker': 'Produits', 'productPage.heroTitle': 'Suites Produit', 'productPage.heroSubtitle': 'Infrastructure de protection évolutive. Chaque suite prend en charge Consommateur, PME et Entreprise.', 'productPage.bySegment': 'Par Segment', 'productPage.segmentSubtitle': 'Cas d\'usage et fonctionnalités pour chaque niveau client.', 'productPage.useCases': 'Cas d\'Usage', 'productPage.features': 'Fonctionnalités', 'productPage.howItWorks': 'Comment Ça Marche', 'productPage.performanceProof': 'Preuve de Performance', 'productPage.ecosystem': 'Partenaires Écosystème',
  'solutionPage.heroKicker': 'Solutions', 'solutionPage.heroTitle': 'Solutions', 'solutionPage.heroGradient': 'Sectorielles', 'solutionPage.heroSubtitle': 'Infrastructure de protection intégrée pour plateformes, portefeuilles, mobilité et écosystèmes d\'appareils.', 'solutionPage.challengeVsSolution': 'Défi vs Solution', 'solutionPage.challenges': 'Défis du Secteur', 'solutionPage.capabilities': 'Capacités de YAS', 'solutionPage.exampleJourney': 'Exemple de Parcours', 'solutionPage.outcomes': 'Résultats',
  'companyPage.aboutKicker': 'Entreprise', 'companyPage.aboutTitle': 'À Propos de', 'companyPage.whatYasDoes': 'Ce Que Fait YAS', 'companyPage.whatYasIsNot': 'Ce Que YAS N\'Est Pas', 'companyPage.whatWeBelieve': 'Ce En Quoi Nous Croyons', 'companyPage.whereWeGo': 'Où Nous Allons', 'companyPage.ourJourney': 'Notre Parcours', 'companyPage.presence': 'Présence', 'companyPage.leadershipTitle': 'Direction', 'companyPage.leadershipSubtitle': 'L\'équipe construisant l\'infrastructure fintech mondiale.', 'companyPage.careersTitle': 'Carrières', 'companyPage.careersSubtitle': 'Rejoignez-nous pour construire une infrastructure de protection pour tous.', 'companyPage.openPositions': 'Postes Ouverts', 'companyPage.mediaKit': 'Kit Média',
  'contactPage.heroKicker': 'Contact', 'contactPage.heroTitle': 'Parl', 'contactPage.heroGradient': 'ons', 'contactPage.heroSubtitle': 'Que vous soyez assureur, plateforme ou développeur évaluant nos APIs.', 'contactPage.formTitle': 'Réserver une Démo', 'contactPage.firstName': 'Prénom', 'contactPage.lastName': 'Nom', 'contactPage.workEmail': 'Email Pro', 'contactPage.company': 'Entreprise', 'contactPage.role': 'Je suis un/e...', 'contactPage.message': 'Message (optionnel)', 'contactPage.submit': 'Envoyer', 'contactPage.thankYou': 'Merci', 'contactPage.thankYouMsg': 'Votre message a été reçu. Nous vous répondrons sous 24 heures.', 'contactPage.responseTime': 'Réponse sous 24 heures',
  'trustPage.heroTitle': 'Centre de', 'trustPage.heroGradient': 'Confiance', 'trustPage.heroSubtitle': 'Sécurité, confidentialité, conformité, gouvernance des modèles, équité des sinistres et contrôles d\'audit.', 'trustPage.commonQuestions': 'Questions Fréquentes', 'trustPage.documentation': 'Documentation et Politiques',
  'proofPage.heroTitle': 'Preuves en', 'proofPage.heroGradient': 'Production', 'proofPage.heroSubtitle': 'Résultats réels de déploiements avec des partenaires licenciés.', 'proofPage.press': 'Presse et Actualités', 'proofPage.partners': 'Écosystème Partenaire',
  'caseStudy.notFound': 'Étude de cas introuvable', 'caseStudy.client': 'Client', 'caseStudy.context': 'Contexte', 'caseStudy.problem': 'Problème', 'caseStudy.solution': 'Solution', 'caseStudy.operationalFlow': 'Flux Opérationnel', 'caseStudy.ctaTitle': 'Découvrez ce que YAS peut faire pour vous', 'caseStudy.ctaSubtitle': 'Explorez comment l\'infrastructure YAS peut soutenir votre déploiement de protection.', 'proofPage.pressSubtitle': 'Dernières couvertures et annonces de YAS.', 'proofPage.pressFeatured': 'En vedette', 'proofPage.partnersSubtitle': 'Assureurs, réassureurs, partenaires de distribution et clients propulsant la protection avec l\'infrastructure YAS.',
};

// ──────────────────────────────────────────────
// German (Deutsch)
// ──────────────────────────────────────────────
const de: TranslationKeys = {
  'nav.platform': 'Plattform', 'nav.products': 'Produkte', 'nav.solutions': 'Lösungen', 'nav.proof': 'Ergebnisse', 'nav.developers': 'Entwickler', 'nav.trust': 'Vertrauen', 'nav.company': 'Unternehmen', 'nav.contact': 'Kontakt', 'nav.search': 'Suchen', 'nav.bookDemo': 'Demo Buchen',
  'hero.kicker': 'Echtzeit-Schutzinfrastruktur', 'hero.headline': 'Schutz der sich', 'hero.headlineGradient': 'Bewegt', 'hero.subhead': 'Echtzeitdaten für fairen, hyperpersonalisierten Schutz.', 'hero.subheadExtended': ' Aktivieren Sie Deckung in Minuten über unsere Produkte und Partner.', 'hero.cta.primary': 'Schutz Erhalten', 'hero.cta.secondary': 'Partner von YAS werden',
  'trust.insurers': 'Risikoträger und Versicherungspartner', 'trust.customers': 'Schutz Für', 'trust.footer': 'Aufgebaut mit Versicherern und Vertriebspartnern in HK, MY, VN, TH, SG und weiteren.',
  'problem.title': 'Das Problem', 'problem.text': 'Traditionelle Versicherungen kalkulieren mit Durchschnittswerten und aktualisieren zu langsam. Statisches Underwriting erzeugt Reibung und wahrgenommene Unfairness.', 'promise.title': 'Der YAS-Ansatz', 'promise.text': 'Dynamischer Schutz basierend auf Echtzeitkontext. Startet bei Bedarf, Preis nach Moment, stoppt bei Ende.', 'problem.caption': 'Von statischem Papierkram zu dynamischem Echtzeitschutz.',
  'howItWorks.kicker': 'So Funktioniert Es', 'howItWorks.title': 'Echtzeitsignale rein. Echtzeitschutz raus.', 'howItWorks.step1.label': 'Signale Erfassen', 'howItWorks.step1.desc': 'Plattform-Events, Gerätedaten, Transaktionsmetadaten — mit Einwilligung.', 'howItWorks.step2.label': 'Risiko Bewerten', 'howItWorks.step2.desc': 'Echtzeit-Risikobewertung und dynamische Preisgestaltung.', 'howItWorks.step3.label': 'Deckung Aktivieren', 'howItWorks.step3.desc': 'Nahtlose Policenaktivierung in der Partnerplattform.', 'howItWorks.step4.label': 'Abrechnen', 'howItWorks.step4.desc': 'Bei Schadenereignissen schnelle Schadenbearbeitung und Abrechnung.',
  'infra.headline': 'Infrastruktur gebaut für', 'infra.headlineGradient': ' die Zukunft',
  'nowNext.title': 'Jetzt & Zukunft', 'now.kicker': 'In Produktion', 'now.title': 'Marktreife Schutzprodukte mit lizenzierten Partnern.', 'now.items': 'Live-Produkte in Transport, Sport, Zahlungen|B2B2C-Plattform und Direktvertrieb|Automatisierte Schäden und sofortige Auszahlungen|Partner-Konsole und Echtzeit-Reporting', 'next.kicker': 'In Entwicklung', 'next.title': 'Echtzeit-Risikoschicht für Plattformen, Geräte, Agenten und Robotik.', 'next.items': 'Dynamisches Underwriting im großen Maßstab|Parametrische Trigger und automatische Abrechnung|Geräte- und IoT-Signalintegration|Risiko-Infrastruktur für Agenten und Robotik',
  'bridge.text': 'YAS baut Echtzeit-Risikoinfrastruktur. Heute liefern wir sie durch marktreife Schutzprodukte mit lizenzierten Partnern.', 'bridge.textExtended': ' Jede ausgestellte Police und jeder bearbeitete Schaden verbessert unsere Fähigkeit, Risiken genauer zu bewerten.',
  'products.kicker': 'Produkte', 'products.title': 'Verfügbare Produkte', 'products.subtitle': 'Realer Schutz, den Sie heute kaufen können. Jede Suite unterstützt Verbraucher, KMU und Enterprise.',
  'platform.kicker': 'Infrastruktur', 'platform.title': 'So Funktioniert YAS', 'platform.subtitle': 'End-to-End-Schutzinfrastruktur.',
  'metrics.kicker': 'Leistung', 'metrics.title': 'Plattform-Leistung', 'metrics.subtitle': 'Quantifizierte Ergebnisse der YAS-Infrastruktur.',
  'caseStudies.kicker': 'Ergebnisse', 'caseStudies.title': 'Ergebnisse in Produktion', 'caseStudies.subtitle': 'Reale Ergebnisse aus Live-Deployments.',
  'global.kicker': 'Global', 'global.title': 'Global Bereit', 'global.subtitle': 'Gebaut für Multi-Markt, mehrsprachige, multiregulatorische Bereitstellung.', 'global.regulatory': 'Regulatorische Haltung', 'global.regulatoryExtended': 'YAS stellt technologische Infrastruktur bereit. Wo Lizenzen erforderlich sind, wird das Risiko von lizenzierten Versicherern getragen.', 'global.languages': '13 unterstützte Sprachen:', 'global.cityCaption': 'Hauptsitz Hongkong & Singapur — unsere ersten zwei Märkte.',
  'cta.title': 'Bereit Loszulegen?', 'cta.subtitle': 'Ob Sie Schutz suchen oder eine Plattform, ein Versicherer oder Entwickler sind.', 'cta.primary': 'Schutz Erhalten', 'cta.secondary': 'Partner von YAS werden',
  'trustTeaser.title': 'Vertrauenszentrum', 'trustTeaser.subtitle': 'Sicherheit, Datenschutz, Compliance, Modell-Governance und Schadensgerechtigkeit.',
  'common.learnMore': 'Mehr Erfahren', 'common.viewAll': 'Alle Anzeigen', 'common.readCase': 'Fallstudie Lesen', 'common.consumer': 'Verbraucher', 'common.sme': 'KMU', 'common.enterprise': 'Unternehmen', 'common.placeholder': '[Platzhalter]',
  'footer.tagline': 'Fintech-Schutz- und Abrechnungsinfrastruktur. Technologie, die lizenzierten Versicherern globalen eingebetteten Schutz ermöglicht.', 'footer.rights': '2026 YAS Digital. Alle Rechte vorbehalten.', 'footer.privacy': 'Datenschutz', 'footer.terms': 'AGB', 'footer.security': 'Sicherheit', 'footer.compliance': 'Compliance', 'footer.disclaimer': 'YAS ist kein lizenzierter Versicherer. YAS stellt technologische Infrastruktur, eingebettete Vertriebswege, KI-Risikopreisgestaltung, Schadenautomatisierung und Zahlungserfahrung bereit.', 'footer.disclaimerExtended': ' Wo Lizenzen erforderlich sind, wird das Versicherungsrisiko von lizenzierten Versicherern und Rückversicherern getragen.', 'footer.platform': 'Plattform', 'footer.products': 'Produkte', 'footer.resources': 'Ressourcen', 'footer.company': 'Unternehmen', 'mobile.bookDemo': 'Demo Buchen',
  'inner.bookDemo': 'Demo Buchen', 'inner.apiDocs': 'API-Dokumentation', 'inner.getStarted': 'Loslegen', 'inner.explore': 'Entdecken', 'inner.apply': 'Bewerben', 'inner.overview': 'Übersicht',
  'platformPage.heroTitle': 'Schutzinfrastruktur', 'platformPage.heroGradient': 'End-to-End', 'platformPage.heroSubtitle': 'Echtzeit-Risikosignale rein, Echtzeitschutz raus. Jedes Modul für Skalierung, Geschwindigkeit und Compliance.', 'platformPage.pipeline': 'Daten-Pipeline', 'platformPage.inPlainTerms': 'Einfach Erklärt', 'platformPage.dataEthics': 'Datenethik & Datenschutz', 'platformPage.modules': 'Plattform-Module', 'platformPage.modulesSubtitle': 'Sieben verbundene Module bilden einen vollständigen Schutzinfrastruktur-Stack.', 'platformPage.architecture': 'Systemarchitektur', 'platformPage.performance': 'Leistung', 'platformPage.integration': 'Integration & Launch-Zeit', 'platformPage.integrationSubtitle': 'YAS für schnelle Integration konzipiert. API-first-Architektur mit umfassenden SDKs.', 'platformPage.whatYouGet': 'Was Sie bekommen',
  'productPage.heroKicker': 'Produkte', 'productPage.heroTitle': 'Produktsuiten', 'productPage.heroSubtitle': 'Skalierbare Schutzinfrastruktur. Jede Suite unterstützt Verbraucher, KMU und Enterprise.', 'productPage.bySegment': 'Nach Segment', 'productPage.segmentSubtitle': 'Anwendungsfälle und Funktionen für jede Kundenebene.', 'productPage.useCases': 'Anwendungsfälle', 'productPage.features': 'Funktionen', 'productPage.howItWorks': 'So Funktioniert Es', 'productPage.performanceProof': 'Leistungsnachweis', 'productPage.ecosystem': 'Ökosystem-Partner',
  'solutionPage.heroKicker': 'Lösungen', 'solutionPage.heroTitle': 'Branchen', 'solutionPage.heroGradient': 'lösungen', 'solutionPage.heroSubtitle': 'Eingebettete Schutzinfrastruktur für Plattformen, Wallets, Mobilität und Geräte-Ökosysteme.', 'solutionPage.challengeVsSolution': 'Herausforderung vs Lösung', 'solutionPage.challenges': 'Branchenherausforderungen', 'solutionPage.capabilities': 'YAS-Fähigkeiten', 'solutionPage.exampleJourney': 'Beispiel-Journey', 'solutionPage.outcomes': 'Ergebnisse',
  'companyPage.aboutKicker': 'Unternehmen', 'companyPage.aboutTitle': 'Über', 'companyPage.whatYasDoes': 'Was YAS Tut', 'companyPage.whatYasIsNot': 'Was YAS Nicht Ist', 'companyPage.whatWeBelieve': 'Was Wir Glauben', 'companyPage.whereWeGo': 'Wohin Wir Gehen', 'companyPage.ourJourney': 'Unsere Reise', 'companyPage.presence': 'Präsenz', 'companyPage.leadershipTitle': 'Führung', 'companyPage.leadershipSubtitle': 'Das Team, das globale Fintech-Schutzinfrastruktur aufbaut.', 'companyPage.careersTitle': 'Karriere', 'companyPage.careersSubtitle': 'Bauen Sie mit uns Schutzinfrastruktur für alle.', 'companyPage.openPositions': 'Offene Stellen', 'companyPage.mediaKit': 'Pressekit',
  'contactPage.heroKicker': 'Kontakt', 'contactPage.heroTitle': 'Lass uns', 'contactPage.heroGradient': 'Reden', 'contactPage.heroSubtitle': 'Ob Versicherer, Plattform oder Entwickler — wir freuen uns auf Ihre Anfrage.', 'contactPage.formTitle': 'Demo Buchen', 'contactPage.firstName': 'Vorname', 'contactPage.lastName': 'Nachname', 'contactPage.workEmail': 'Geschäfts-E-Mail', 'contactPage.company': 'Unternehmen', 'contactPage.role': 'Ich bin...', 'contactPage.message': 'Nachricht (optional)', 'contactPage.submit': 'Absenden', 'contactPage.thankYou': 'Vielen Dank', 'contactPage.thankYouMsg': 'Ihre Nachricht wurde empfangen. Wir melden uns innerhalb von 24 Stunden.', 'contactPage.responseTime': 'Antwort innerhalb von 24 Stunden',
  'trustPage.heroTitle': 'Vertrauens', 'trustPage.heroGradient': 'zentrum', 'trustPage.heroSubtitle': 'Sicherheit, Datenschutz, Compliance, Modell-Governance, Schadensgerechtigkeit und Audit-Kontrollen.', 'trustPage.commonQuestions': 'Häufige Fragen', 'trustPage.documentation': 'Dokumentation & Richtlinien',
  'proofPage.heroTitle': 'Ergebnisse in', 'proofPage.heroGradient': 'Produktion', 'proofPage.heroSubtitle': 'Reale Ergebnisse aus Deployments mit lizenzierten Partnern.', 'proofPage.press': 'Presse & Nachrichten', 'proofPage.partners': 'Partner-Ökosystem',
  'caseStudy.notFound': 'Fallstudie nicht gefunden', 'caseStudy.client': 'Kunde', 'caseStudy.context': 'Kontext', 'caseStudy.problem': 'Problem', 'caseStudy.solution': 'Lösung', 'caseStudy.operationalFlow': 'Betriebsablauf', 'caseStudy.ctaTitle': 'Erfahren Sie, was YAS für Sie tun kann', 'caseStudy.ctaSubtitle': 'Entdecken Sie, wie die YAS-Infrastruktur Ihre Schutzbereitstellung unterstützen kann.', 'proofPage.pressSubtitle': 'Neueste Berichterstattung und Ankündigungen von YAS.', 'proofPage.pressFeatured': 'Hervorgehoben', 'proofPage.partnersSubtitle': 'Versicherer, Rückversicherer, Vertriebspartner und Kunden, die Schutz mit YAS-Infrastruktur ermöglichen.',
};

// ──────────────────────────────────────────────
// Arabic (العربية) — RTL
// ──────────────────────────────────────────────
const ar: TranslationKeys = {
  'nav.platform': 'المنصة', 'nav.products': 'المنتجات', 'nav.solutions': 'الحلول', 'nav.proof': 'الإثبات', 'nav.developers': 'المطورون', 'nav.trust': 'الثقة', 'nav.company': 'الشركة', 'nav.contact': 'اتصل بنا', 'nav.search': 'بحث', 'nav.bookDemo': 'حجز عرض',
  'hero.kicker': 'بنية تحتية للحماية في الوقت الفعلي', 'hero.headline': 'حماية تتحرك', 'hero.headlineGradient': 'مع حياتك', 'hero.subhead': 'بيانات في الوقت الفعلي تدعم حماية عادلة وشخصية للغاية.', 'hero.subheadExtended': ' فعّل التغطية في دقائق من خلال منتجاتنا وشركائنا.', 'hero.cta.primary': 'احصل على الحماية', 'hero.cta.secondary': 'كن شريكاً لـ YAS',
  'trust.insurers': 'شركاء التأمين وحاملو المخاطر', 'trust.customers': 'حماية لـ', 'trust.footer': 'مبنية مع شركات التأمين وشركاء التوزيع في هونغ كونغ وماليزيا وفيتنام وتايلاند وسنغافورة والمزيد.',
  'problem.title': 'المشكلة', 'problem.text': 'التأمين التقليدي يسعّر بالمتوسطات ويتحدث ببطء شديد. الاكتتاب الثابت يخلق احتكاكاً وشعوراً بعدم الإنصاف.', 'promise.title': 'نهج YAS', 'promise.text': 'تغطية ديناميكية بناءً على السياق في الوقت الفعلي. تبدأ عند الحاجة، تسعّر حسب اللحظة، تتوقف عند الانتهاء.', 'problem.caption': 'من الأوراق الثابتة إلى الحماية الديناميكية في الوقت الفعلي.',
  'howItWorks.kicker': 'كيف يعمل', 'howItWorks.title': 'إشارات في الوقت الفعلي. حماية في الوقت الفعلي.', 'howItWorks.step1.label': 'التقاط الإشارات', 'howItWorks.step1.desc': 'أحداث المنصة وبيانات الأجهزة وبيانات المعاملات — بموافقة.', 'howItWorks.step2.label': 'تقييم المخاطر', 'howItWorks.step2.desc': 'تقييم المخاطر والتسعير الديناميكي في الوقت الفعلي.', 'howItWorks.step3.label': 'تفعيل التغطية', 'howItWorks.step3.desc': 'تفعيل سلس للوثائق داخل منصة الشريك.', 'howItWorks.step4.label': 'التسوية', 'howItWorks.step4.desc': 'عند حدوث الأحداث، معالجة سريعة للمطالبات والتسوية.',
  'infra.headline': 'بنية تحتية مبنية لـ', 'infra.headlineGradient': 'المستقبل',
  'nowNext.title': 'الآن والتالي', 'now.kicker': 'قيد التشغيل', 'now.title': 'منتجات حماية جاهزة للسوق مع شركاء مرخصين.', 'now.items': 'منتجات حية في النقل والرياضة والمدفوعات|منصة B2B2C وتوزيع مباشر|مطالبات آلية ودفعات فورية|وحدة تحكم الشركاء وتقارير في الوقت الفعلي', 'next.kicker': 'قيد التطوير', 'next.title': 'طبقة مخاطر في الوقت الفعلي للمنصات والأجهزة والعملاء الآليين والروبوتات.', 'next.items': 'اكتتاب ديناميكي على نطاق واسع|محفزات بارامترية وتسوية تلقائية|تكامل إشارات الأجهزة وإنترنت الأشياء|بنية تحتية للمخاطر للعملاء الآليين والروبوتات',
  'bridge.text': 'YAS تبني بنية تحتية للمخاطر في الوقت الفعلي. اليوم نقدمها من خلال منتجات حماية جاهزة مع شركاء مرخصين.', 'bridge.textExtended': ' كل وثيقة صادرة وكل مطالبة معالجة تحسّن قدرتنا على تسعير المخاطر بدقة أكبر.',
  'products.kicker': 'المنتجات', 'products.title': 'المنتجات المتاحة', 'products.subtitle': 'حماية حقيقية يمكنك شراؤها اليوم. كل مجموعة تدعم المستهلك والشركات الصغيرة والمؤسسات.',
  'platform.kicker': 'البنية التحتية', 'platform.title': 'كيف يعمل YAS', 'platform.subtitle': 'بنية تحتية للحماية من البداية إلى النهاية.',
  'metrics.kicker': 'الأداء', 'metrics.title': 'أداء المنصة', 'metrics.subtitle': 'نتائج قابلة للقياس عبر بنية YAS التحتية.',
  'caseStudies.kicker': 'الإثبات', 'caseStudies.title': 'إثبات في الإنتاج', 'caseStudies.subtitle': 'نتائج حقيقية من عمليات النشر الحية.',
  'global.kicker': 'عالمي', 'global.title': 'جاهز عالمياً', 'global.subtitle': 'مبنية للنشر متعدد الأسواق واللغات والتنظيمات.', 'global.regulatory': 'الموقف التنظيمي', 'global.regulatoryExtended': 'YAS توفر بنية تحتية تقنية. حيث تكون التراخيص مطلوبة، يتحمل المخاطر شركات تأمين مرخصة.', 'global.languages': '13 لغة مدعومة:', 'global.cityCaption': 'المقر الرئيسي في هونغ كونغ وسنغافورة — أول سوقين لنا.',
  'cta.title': 'مستعد للبدء؟', 'cta.subtitle': 'سواء كنت تبحث عن حماية أو منصة أو شركة تأمين أو مطور يبني مع بنية مخاطر في الوقت الفعلي.', 'cta.primary': 'احصل على الحماية', 'cta.secondary': 'كن شريكاً لـ YAS',
  'trustTeaser.title': 'مركز الثقة', 'trustTeaser.subtitle': 'الأمان والخصوصية والامتثال وحوكمة النماذج وعدالة المطالبات.',
  'common.learnMore': 'اعرف المزيد', 'common.viewAll': 'عرض الكل', 'common.readCase': 'قراءة الدراسة', 'common.consumer': 'مستهلك', 'common.sme': 'شركات صغيرة', 'common.enterprise': 'مؤسسات', 'common.placeholder': '[عنصر نائب]',
  'footer.tagline': 'بنية تحتية للحماية والتسوية في التكنولوجيا المالية. تقنية تمكّن شركات التأمين المرخصة من تقديم حماية مدمجة عالمياً.', 'footer.rights': '2026 YAS Digital. جميع الحقوق محفوظة.', 'footer.privacy': 'الخصوصية', 'footer.terms': 'الشروط', 'footer.security': 'الأمان', 'footer.compliance': 'الامتثال', 'footer.disclaimer': 'YAS ليست شركة تأمين مرخصة. YAS توفر بنية تحتية تقنية وقنوات توزيع مدمجة وتسعير مخاطر بالذكاء الاصطناعي وأتمتة المطالبات وتجربة الدفع.', 'footer.disclaimerExtended': ' حيث تكون التراخيص مطلوبة، يتحمل مخاطر التأمين شركات تأمين وإعادة تأمين مرخصة.', 'footer.platform': 'المنصة', 'footer.products': 'المنتجات', 'footer.resources': 'الموارد', 'footer.company': 'الشركة', 'mobile.bookDemo': 'حجز عرض',
  'inner.bookDemo': 'حجز عرض', 'inner.apiDocs': 'وثائق API', 'inner.getStarted': 'ابدأ', 'inner.explore': 'استكشف', 'inner.apply': 'تقدم', 'inner.overview': 'نظرة عامة',
  'platformPage.heroTitle': 'بنية تحتية للحماية', 'platformPage.heroGradient': 'من البداية للنهاية', 'platformPage.heroSubtitle': 'إشارات مخاطر في الوقت الفعلي. كل وحدة مصممة للنطاق والسرعة والامتثال.', 'platformPage.pipeline': 'خط أنابيب البيانات', 'platformPage.inPlainTerms': 'بعبارات بسيطة', 'platformPage.dataEthics': 'أخلاقيات البيانات والخصوصية', 'platformPage.modules': 'وحدات المنصة', 'platformPage.modulesSubtitle': 'سبع وحدات مترابطة تشكل مكدس بنية تحتية كاملة للحماية.', 'platformPage.architecture': 'هندسة النظام', 'platformPage.performance': 'الأداء', 'platformPage.integration': 'التكامل ووقت الإطلاق', 'platformPage.integrationSubtitle': 'YAS مصممة للتكامل السريع. بنية API-first مع SDKs شاملة.', 'platformPage.whatYouGet': 'ما ستحصل عليه',
  'productPage.heroKicker': 'المنتجات', 'productPage.heroTitle': 'مجموعات المنتجات', 'productPage.heroSubtitle': 'بنية تحتية للحماية قابلة للتوسع. كل مجموعة تدعم المستهلك والشركات الصغيرة والمؤسسات.', 'productPage.bySegment': 'حسب الشريحة', 'productPage.segmentSubtitle': 'حالات الاستخدام والميزات لكل مستوى عميل.', 'productPage.useCases': 'حالات الاستخدام', 'productPage.features': 'الميزات', 'productPage.howItWorks': 'كيف يعمل', 'productPage.performanceProof': 'إثبات الأداء', 'productPage.ecosystem': 'شركاء النظام البيئي',
  'solutionPage.heroKicker': 'الحلول', 'solutionPage.heroTitle': 'حلول', 'solutionPage.heroGradient': 'صناعية', 'solutionPage.heroSubtitle': 'بنية تحتية للحماية المدمجة للمنصات والمحافظ والتنقل وأنظمة الأجهزة الجديدة.', 'solutionPage.challengeVsSolution': 'التحدي مقابل الحل', 'solutionPage.challenges': 'تحديات الصناعة', 'solutionPage.capabilities': 'قدرات YAS', 'solutionPage.exampleJourney': 'رحلة نموذجية', 'solutionPage.outcomes': 'النتائج',
  'companyPage.aboutKicker': 'الشركة', 'companyPage.aboutTitle': 'حول', 'companyPage.whatYasDoes': 'ماذا تفعل YAS', 'companyPage.whatYasIsNot': 'ما ليست YAS', 'companyPage.whatWeBelieve': 'ما نؤمن به', 'companyPage.whereWeGo': 'إلى أين نتجه', 'companyPage.ourJourney': 'مسيرتنا', 'companyPage.presence': 'التواجد', 'companyPage.leadershipTitle': 'القيادة', 'companyPage.leadershipSubtitle': 'الفريق الذي يبني بنية تحتية عالمية للتكنولوجيا المالية.', 'companyPage.careersTitle': 'الوظائف', 'companyPage.careersSubtitle': 'انضم إلينا لبناء بنية تحتية للحماية للجميع.', 'companyPage.openPositions': 'الوظائف المتاحة', 'companyPage.mediaKit': 'حزمة إعلامية',
  'contactPage.heroKicker': 'اتصل بنا', 'contactPage.heroTitle': 'لنتحدث', 'contactPage.heroGradient': 'معاً', 'contactPage.heroSubtitle': 'سواء كنت شركة تأمي�� أو منصة أو مطور يقيّم واجهات برمجة التطبيقات.', 'contactPage.formTitle': 'حجز عرض', 'contactPage.firstName': 'الاسم الأول', 'contactPage.lastName': 'اسم العائلة', 'contactPage.workEmail': 'البريد المهني', 'contactPage.company': 'الشركة', 'contactPage.role': 'أنا...', 'contactPage.message': 'رسالة (اختياري)', 'contactPage.submit': 'إرسال', 'contactPage.thankYou': 'شكراً لك', 'contactPage.thankYouMsg': 'تم استلام رسالتك. سنرد خلال 24 ساعة.', 'contactPage.responseTime': 'الرد عادة خلال 24 ساعة',
  'trustPage.heroTitle': 'مركز', 'trustPage.heroGradient': 'الثقة', 'trustPage.heroSubtitle': 'الأمان والخصوصية والامتثال وحوكمة النماذج وعدالة المطالبات وضوابط التدقيق.', 'trustPage.commonQuestions': 'أسئلة شائعة', 'trustPage.documentation': 'الوثائق والسياسات',
  'proofPage.heroTitle': 'إثبات في', 'proofPage.heroGradient': 'الإنتاج', 'proofPage.heroSubtitle': 'نتائج حقيقية من عمليات نشر مع شركاء مرخصين.', 'proofPage.press': 'أخبار وصحافة', 'proofPage.partners': 'نظام الشركاء البيئي',
  'caseStudy.notFound': 'لم يتم العثور على دراسة الحالة', 'caseStudy.client': 'العميل', 'caseStudy.context': 'السياق', 'caseStudy.problem': 'المشكلة', 'caseStudy.solution': 'الحل', 'caseStudy.operationalFlow': 'سير العمليات', 'caseStudy.ctaTitle': 'اكتشف ما يمكن أن يقدمه YAS لك', 'caseStudy.ctaSubtitle': 'استكشف كيف يمكن لبنية YAS التحتية دعم نشر الحماية لديك.', 'proofPage.pressSubtitle': 'أحدث التغطيات والإعلانات من YAS.', 'proofPage.pressFeatured': 'مميز', 'proofPage.partnersSubtitle': 'شركات التأمين وإعادة التأمين وشركاء التوزيع والعملاء الذين يدعمون الحماية مع بنية YAS التحتية.',
};

export const translations: Record<Locale, TranslationKeys> = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  ja,
  ko,
  th,
  id,
  vi,
  ms,
  es,
  fr,
  de,
  ar,
};

export function t(key: keyof TranslationKeys, locale: Locale = 'en'): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return locales.find((l) => l.code === locale) ?? locales[0];
}

/** Check if a locale has full (non-placeholder) translations */
export function isFullyTranslated(locale: Locale): boolean {
  return ['en', 'zh-TW', 'zh-CN', 'ja', 'vi', 'ko', 'th', 'id', 'ms', 'es', 'fr', 'de', 'ar'].includes(locale);
}

/** Get the priority translated locales for the language selector highlight */
export const fullyTranslatedLocales: Locale[] = ['en', 'zh-TW', 'zh-CN', 'ja', 'vi', 'ko', 'th', 'id', 'ms', 'es', 'fr', 'de', 'ar'];