// ──────────────────────────────────────────────
// CMS Data Models & Seed Data for YAS 2.0
// All content is CMS-driven. This file acts as
// the local CMS layer. In production, replace
// with headless CMS API calls.
// ──────────────────────────────────────────────

export type LogoType = 'insurer' | 'reinsurer' | 'distribution' | 'customer';

export interface CMSLogo {
  id: string;
  name: string;
  type: LogoType;
  regionTags: string[];
  industryTags: string[];
  approvalStatus: boolean; // default OFF
  permissionNote: string;
  assetUrl: string; // placeholder or real
  linkUrl: string;
  featuredPriority: number; // lower = higher priority
  hasCaseStudy?: boolean;
}

export interface CMSCaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientLogo: string;
  region: string;
  industry: string;
  context: string;
  problem: string;
  solution: string;
  operationalFlow: string[];
  results: { label: string; value: string; suffix?: string }[];
  quote: { text: string; author: string; role: string };
  published: boolean;
}

export interface CMSProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  outcomes: string[];
  icon: string;
  segments: {
    consumer: { useCases: string[]; features: string[] };
    sme: { useCases: string[]; features: string[] };
    enterprise: { useCases: string[]; features: string[] };
  };
}

export interface CMSPlatformModule {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface CMSMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  context: string;
  isPlaceholder: boolean;
}

export interface CMSPressItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
  featured: boolean;
}

// ──────────────────────────────────────────────
// Seed Data
// ──────────────────────────────────────────────

// Logo SVG generator — creates clean typographic logos as inline SVGs
// These serve as professional placeholders until brand-approved vector assets are supplied.
// The LogoWall component applies filter: brightness(0) invert(1) to normalize colours to white.
function logoSvg(text: string, fontSize = 18, width = 180, height = 40, letterSpacing = 2): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}"><text x="50%" y="55%" dominant-baseline="central" text-anchor="middle" fill="#000" font-family="'Inter','Helvetica Neue',Arial,sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="${letterSpacing}">${text}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const logos: CMSLogo[] = [
  {
    id: 'alipayhk',
    name: 'AlipayHK',
    type: 'customer',
    regionTags: ['Asia Pacific', 'Hong Kong'],
    industryTags: ['Payments', 'Fintech'],
    approvalStatus: true,
    permissionNote: 'Approved for public display',
    assetUrl: logoSvg('AlipayHK', 17, 160, 36, 1),
    linkUrl: '#',
    featuredPriority: 1,
    hasCaseStudy: true,
  },
  {
    id: 'kmb',
    name: 'KMB',
    type: 'customer',
    regionTags: ['Asia Pacific', 'Hong Kong'],
    industryTags: ['Transport', 'Mobility'],
    approvalStatus: true,
    permissionNote: 'Approved for public display',
    assetUrl: logoSvg('KMB', 22, 100, 36, 3),
    linkUrl: '#',
    featuredPriority: 2,
    hasCaseStudy: false,
  },
  {
    id: 'joie-taxi',
    name: 'JOIE Taxi',
    type: 'customer',
    regionTags: ['Asia Pacific', 'Hong Kong'],
    industryTags: ['Transport', 'Mobility'],
    approvalStatus: true,
    permissionNote: 'Approved for public display',
    assetUrl: logoSvg('JOIE', 20, 110, 36, 4),
    linkUrl: '#',
    featuredPriority: 3,
    hasCaseStudy: false,
  },
  {
    id: 'tada',
    name: 'TADA',
    type: 'customer',
    regionTags: ['Asia Pacific', 'Southeast Asia'],
    industryTags: ['Transport', 'Mobility'],
    approvalStatus: true,
    permissionNote: 'Approved for public display',
    assetUrl: logoSvg('TADA', 22, 120, 36, 4),
    linkUrl: '#',
    featuredPriority: 4,
    hasCaseStudy: false,
  },
  {
    id: 'oriental-watch',
    name: 'Oriental Watch Group',
    type: 'customer',
    regionTags: ['Asia Pacific', 'Hong Kong', 'Greater China'],
    industryTags: ['Retail', 'Luxury'],
    approvalStatus: true,
    permissionNote: 'Approved for public display',
    assetUrl: logoSvg('ORIENTAL WATCH', 13, 180, 36, 3),
    linkUrl: '#',
    featuredPriority: 5,
    hasCaseStudy: false,
  },
  {
    id: 'zurich',
    name: 'Zurich Insurance',
    type: 'insurer',
    regionTags: ['Global', 'Europe', 'Asia Pacific'],
    industryTags: ['Insurance'],
    approvalStatus: true,
    permissionNote: 'Approved for public display as risk carrier partner',
    assetUrl: logoSvg('ZURICH', 20, 140, 36, 4),
    linkUrl: '#',
    featuredPriority: 1,
  },
  {
    id: 'generali',
    name: 'Generali',
    type: 'insurer',
    regionTags: ['Global', 'Europe', 'Asia Pacific'],
    industryTags: ['Insurance'],
    approvalStatus: true,
    permissionNote: 'Approved for public display as risk carrier partner',
    assetUrl: logoSvg('GENERALI', 18, 160, 36, 3),
    linkUrl: '#',
    featuredPriority: 2,
  },
  {
    id: 'qbe',
    name: 'QBE Insurance',
    type: 'insurer',
    regionTags: ['Global', 'Asia Pacific', 'Australia'],
    industryTags: ['Insurance'],
    approvalStatus: true,
    permissionNote: 'Approved for public display as risk carrier partner',
    assetUrl: logoSvg('QBE', 24, 100, 36, 4),
    linkUrl: '#',
    featuredPriority: 3,
  },
  {
    id: 'china-taiping',
    name: 'China Taiping',
    type: 'insurer',
    regionTags: ['Asia Pacific', 'Greater China', 'Hong Kong'],
    industryTags: ['Insurance'],
    approvalStatus: true,
    permissionNote: 'Approved for public display as risk carrier partner',
    assetUrl: logoSvg('CHINA TAIPING', 14, 170, 36, 2),
    linkUrl: '#',
    featuredPriority: 4,
  },
  {
    id: 'etiqa',
    name: 'Etiqa',
    type: 'insurer',
    regionTags: ['Asia Pacific', 'Southeast Asia', 'Malaysia'],
    industryTags: ['Insurance'],
    approvalStatus: true,
    permissionNote: 'Approved for public display as risk carrier partner',
    assetUrl: logoSvg('ETIQA', 22, 120, 36, 4),
    linkUrl: '#',
    featuredPriority: 5,
  },
  {
    id: 'insurer-placeholder-1',
    name: 'Licensed Insurer Partner',
    type: 'insurer',
    regionTags: ['Asia Pacific'],
    industryTags: ['Insurance'],
    approvalStatus: false,
    permissionNote: 'Pending approval',
    assetUrl: '',
    linkUrl: '#',
    featuredPriority: 10,
  },
  {
    id: 'insurer-placeholder-2',
    name: 'Reinsurance Partner',
    type: 'reinsurer',
    regionTags: ['Global'],
    industryTags: ['Reinsurance'],
    approvalStatus: false,
    permissionNote: 'Pending approval',
    assetUrl: '',
    linkUrl: '#',
    featuredPriority: 11,
  },
  {
    id: 'distribution-placeholder',
    name: 'Distribution Partner',
    type: 'distribution',
    regionTags: ['Asia Pacific'],
    industryTags: ['Fintech'],
    approvalStatus: false,
    permissionNote: 'Pending approval',
    assetUrl: '',
    linkUrl: '#',
    featuredPriority: 12,
  },
];

export const approvedLogos = logos.filter((l) => l.approvalStatus);
export const approvedInsurerLogos = approvedLogos.filter(
  (l) => l.type === 'insurer' || l.type === 'reinsurer'
);
export const approvedCustomerLogos = approvedLogos.filter(
  (l) => l.type === 'customer' || l.type === 'distribution'
);

export const caseStudies: CMSCaseStudy[] = [
  {
    id: 'zurich-taxi',
    slug: 'zurich-taxi-insurance',
    title: 'Zurich Taxi Insurance: Embedded protection for Hong Kong fleets',
    client: 'Zurich Insurance (risk carrier) & JOIE Taxi',
    clientLogo: 'zurich',
    region: 'Hong Kong',
    industry: 'Mobility & Transport',
    context:
      'Hong Kong taxi operators face complex insurance requirements with fragmented purchase channels, manual claims processes, and limited digital options. Drivers need coverage that adapts to their working patterns.',
    problem:
      'Traditional taxi insurance distribution relied on brokers and paper-based processes. Claims settlement could take weeks. No embedded digital channel existed for fleet operators to manage policies at scale.',
    solution:
      'YAS provided the technology infrastructure to embed protection directly into the fleet management workflow. Risk is carried by Zurich Insurance. YAS delivered AI-powered pricing, automated policy issuance, claims automation, and instant payout rails. The integration enabled drivers to purchase and manage coverage through their existing digital tools.',
    operationalFlow: [
      'Driver data signals collected via fleet platform',
      'YAS Risk Engine generates real-time pricing',
      'Policy issued by Zurich Insurance via YAS infrastructure',
      'Active monitoring during coverage period',
      'Automated claim decision on qualifying events',
      'Instant payout to driver wallet',
      'Settlement and reconciliation via YAS Ledger',
    ],
    results: [
      { label: 'Policy issuance time', value: '< 60', suffix: 'seconds' },
      { label: 'Claims processing', value: '< 24', suffix: 'hours' },
      { label: 'Digital adoption rate', value: '85', suffix: '%' },
      { label: 'Renewal rate improvement', value: '40', suffix: '%' },
    ],
    quote: {
      text: 'The technology infrastructure YAS provides has transformed how protection reaches drivers. The embedded experience removes friction from every step.',
      author: 'Fleet Operations Lead',
      role: 'JOIE Taxi',
    },
    published: true,
  },
  {
    id: 'alipayhk-embedded',
    slug: 'alipayhk-embedded-protection',
    title: 'AlipayHK: Embedded protection within a super app ecosystem',
    client: 'AlipayHK',
    clientLogo: 'alipayhk',
    region: 'Hong Kong',
    industry: 'Payments & Fintech',
    context:
      'AlipayHK serves millions of users across Hong Kong for payments, transfers, and financial services. Adding protection products to the super app required seamless integration without disrupting the core payment experience.',
    problem:
      'Integrating protection into a high-throughput payment platform demands sub-second API response times, seamless UX within existing flows, and regulatory compliance across multiple product types. Traditional insurance distribution approaches cannot meet super app performance and UX standards.',
    solution:
      'YAS provided embedded distribution rails and API infrastructure that integrates directly into the AlipayHK user journey. Risk is underwritten by licensed insurer partners. YAS delivered real-time pricing APIs, micro-policy issuance, automated claims processing, and instant settlement. The integration enables users to add protection at point of transaction without leaving the app.',
    operationalFlow: [
      'User initiates transaction in AlipayHK',
      'YAS API returns contextual protection offer in < 200ms',
      'User opts in with single tap',
      'Policy issued in real-time by licensed insurer via YAS',
      'Event monitoring and automated claim triggers',
      'Instant payout to AlipayHK wallet',
      'Automated reconciliation and reporting',
    ],
    results: [
      { label: 'API response time', value: '< 200', suffix: 'ms' },
      { label: 'Conversion rate on offers', value: '12', suffix: '%' },
      { label: 'User satisfaction score', value: '4.6', suffix: '/5' },
      { label: 'Claims resolved automatically', value: '92', suffix: '%' },
    ],
    quote: {
      text: 'YAS infrastructure lets us offer protection as a natural part of the payment experience. Users don\'t have to think about insurance, it\'s just there when they need it.',
      author: 'Product Lead',
      role: 'AlipayHK',
    },
    published: true,
  },
];

export const products: CMSProduct[] = [
  {
    id: 'smart-transport',
    slug: 'smart-transport',
    name: 'Smart Transport',
    tagline: 'Protection infrastructure for mobility and fleets',
    description:
      'End-to-end protection technology for ride-hailing, taxi fleets, logistics, and micro-mobility. AI-powered risk pricing adapts to driver behavior, route patterns, and fleet performance data.',
    outcomes: [
      'Real-time risk pricing per trip or shift',
      'Automated claims with instant driver payouts',
      'Fleet-wide analytics and loss ratio optimization',
    ],
    icon: 'truck',
    segments: {
      consumer: {
        useCases: [
          'Per-trip protection for ride-hailing passengers',
          'Micro-mobility coverage for e-scooter and bike rentals',
          'Personal accident cover for gig drivers',
        ],
        features: [
          'Embedded checkout protection',
          'Single-tap activation',
          'Instant claim payouts to wallet',
        ],
      },
      sme: {
        useCases: [
          'Small fleet coverage management',
          'Driver onboarding with embedded protection',
          'Usage-based pricing for seasonal operations',
        ],
        features: [
          'Fleet dashboard',
          'Bulk policy management',
          'Claims automation',
          'Monthly reconciliation reports',
        ],
      },
      enterprise: {
        useCases: [
          'Large-scale fleet insurance programs',
          'Multi-region regulatory compliance',
          'Custom risk models for proprietary data',
        ],
        features: [
          'Enterprise API integration',
          'Custom risk engine configuration',
          'Dedicated partner console',
          'White-label capability',
          'SLA-backed support',
        ],
      },
    },
  },
  {
    id: 'sports-lifestyle',
    slug: 'sports-lifestyle',
    name: 'Sports & Lifestyle',
    tagline: 'Event-driven protection for active lifestyles',
    description:
      'Contextual protection products for sports events, fitness activities, travel adventures, and lifestyle experiences. Coverage activates based on activity signals and location data.',
    outcomes: [
      'Activity-triggered policy activation',
      'Parametric payouts on qualifying events',
      'Seamless integration with booking platforms',
    ],
    icon: 'activity',
    segments: {
      consumer: {
        useCases: [
          'Sports event personal accident cover',
          'Adventure activity protection',
          'Gym and fitness injury coverage',
        ],
        features: [
          'QR-code activation',
          'Location-aware coverage',
          'Instant claim submission via app',
        ],
      },
      sme: {
        useCases: [
          'Event organizer liability packages',
          'Sports club group coverage',
          'Fitness studio member protection',
        ],
        features: [
          'Group policy management',
          'Event-based pricing',
          'Automated member enrollment',
        ],
      },
      enterprise: {
        useCases: [
          'Stadium and venue protection programs',
          'National sports federation coverage',
          'Multi-venue chain deployment',
        ],
        features: [
          'Custom parametric triggers',
          'Enterprise reporting suite',
          'Multi-region deployment',
          'API-first integration',
        ],
      },
    },
  },
  {
    id: 'payments-wallets',
    slug: 'payments-wallets',
    name: 'Payments & Wallets',
    tagline: 'Embedded protection at the point of transaction',
    description:
      'Protection infrastructure for payment platforms, digital wallets, and financial super apps. Deliver contextual coverage offers within existing payment flows with sub-200ms API response times.',
    outcomes: [
      'Sub-200ms protection offer at checkout',
      'Single-tap policy activation within payment flow',
      '92% automated claims resolution',
    ],
    icon: 'wallet',
    segments: {
      consumer: {
        useCases: [
          'Purchase protection at checkout',
          'Transaction fraud coverage',
          'Travel protection bundled with payment',
        ],
        features: [
          'In-app protection offers',
          'Automatic coverage activation',
          'Wallet-based instant payouts',
        ],
      },
      sme: {
        useCases: [
          'Merchant protection bundles',
          'Payment platform value-added services',
          'Small business transaction coverage',
        ],
        features: [
          'Merchant dashboard integration',
          'Batch policy management',
          'Revenue share reporting',
        ],
      },
      enterprise: {
        useCases: [
          'Super app embedded protection programs',
          'Multi-product protection suites',
          'Cross-border payment coverage',
        ],
        features: [
          'High-throughput API infrastructure',
          'Custom product configuration',
          'Real-time analytics',
          'Regulatory compliance engine',
        ],
      },
    },
  },
  {
    id: 'liquidity-lending',
    slug: 'liquidity-lending',
    name: 'Liquidity Pool & Lending',
    tagline: 'Protection for decentralized finance and lending',
    description:
      'Risk infrastructure for lending platforms, liquidity pools, and DeFi protocols. Automated protection against default events, smart contract failures, and market volatility.',
    outcomes: [
      'Automated default protection triggers',
      'Real-time collateral monitoring',
      'Programmable payout logic via smart contracts',
    ],
    icon: 'landmark',
    segments: {
      consumer: {
        useCases: [
          'Personal loan protection',
          'Crypto wallet coverage',
          'Investment loss protection',
        ],
        features: [
          'Automated coverage activation',
          'Real-time portfolio monitoring',
          'Instant claim settlement',
        ],
      },
      sme: {
        useCases: [
          'SME lending platform protection',
          'Invoice factoring coverage',
          'Trade finance protection',
        ],
        features: [
          'Lending platform integration',
          'Batch risk assessment',
          'Automated loss reporting',
        ],
      },
      enterprise: {
        useCases: [
          'Institutional lending programs',
          'DeFi protocol coverage',
          'Multi-pool risk management',
        ],
        features: [
          'Smart contract integration',
          'Custom risk models',
          'Regulatory reporting',
          'Multi-chain support',
        ],
      },
    },
  },
];

export const platformModules: CMSPlatformModule[] = [
  {
    id: 'risk-pricing',
    slug: 'risk-pricing-engine',
    name: 'Risk & Pricing Engine',
    tagline: 'AI-powered risk assessment and dynamic pricing',
    description:
      'Real-time risk scoring and dynamic pricing powered by machine learning models. Processes behavioral signals, contextual data, and historical patterns to generate accurate, fair pricing in milliseconds.',
    capabilities: [
      'Real-time signal ingestion and feature engineering',
      'Multi-model ensemble risk scoring',
      'Dynamic pricing with configurable guardrails',
      'A/B testing for pricing strategies',
      'Model performance monitoring and drift detection',
      'Explainable AI outputs for regulatory compliance',
    ],
    icon: 'brain',
  },
  {
    id: 'distribution',
    slug: 'embedded-distribution',
    name: 'Embedded Distribution & Journey Builder',
    tagline: 'Drop-in protection flows for any digital platform',
    description:
      'Pre-built and customizable protection journeys that embed directly into partner platforms via API or SDK. Configure product offers, checkout flows, and activation triggers without code changes.',
    capabilities: [
      'API-first integration with < 200ms response time',
      'Visual journey builder for non-technical teams',
      'Multi-channel distribution: app, web, POS, IoT',
      'Contextual offer engine with personalization',
      'A/B testing and conversion optimization',
      'White-label capability',
    ],
    icon: 'route',
  },
  {
    id: 'policy-lifecycle',
    slug: 'policy-issuance',
    name: 'Policy Issuance & Lifecycle',
    tagline: 'Automated policy management from issuance to renewal',
    description:
      'End-to-end policy lifecycle management including real-time issuance, amendments, renewals, and cancellations. Supports micro-policies, usage-based coverage, and traditional term structures.',
    capabilities: [
      'Real-time policy issuance in < 1 second',
      'Micro-policy and usage-based structures',
      'Automated renewal and lapse management',
      'Policy amendment and endorsement workflows',
      'Multi-product and multi-carrier support',
      'Document generation and delivery',
    ],
    icon: 'file-check',
  },
  {
    id: 'claims',
    slug: 'claims-automation',
    name: 'Claims Automation & Instant Payouts',
    tagline: 'From event to payout in minutes, not weeks',
    description:
      'Automated claims processing powered by parametric triggers, document AI, and configurable decision rules. Instant payouts via integrated payment rails to wallets, bank accounts, or partner platforms.',
    capabilities: [
      'Parametric and event-driven claim triggers',
      'Document AI for evidence processing',
      'Configurable decision rules and thresholds',
      'Fraud detection and scoring',
      'Instant payout to 50+ payment methods',
      'Appeals and escalation workflows',
    ],
    icon: 'zap',
  },
  {
    id: 'payments-ledger',
    slug: 'payments-ledger',
    name: 'Payments, Ledger & Reconciliation',
    tagline: 'Financial operations infrastructure for protection',
    description:
      'Complete financial operations layer including premium collection, commission management, claims payouts, and multi-party reconciliation. Real-time ledger with audit trail.',
    capabilities: [
      'Multi-currency premium collection',
      'Automated commission splits',
      'Real-time settlement and reconciliation',
      'Multi-party ledger with full audit trail',
      'Regulatory reporting and tax compliance',
      'Treasury and float management',
    ],
    icon: 'book-open',
  },
  {
    id: 'partner-console',
    slug: 'partner-console',
    name: 'Partner Console & Reporting',
    tagline: 'Visibility and control for every stakeholder',
    description:
      'Role-based dashboards for insurers, distribution partners, and internal teams. Real-time analytics, portfolio monitoring, and operational controls.',
    capabilities: [
      'Role-based access for insurers, partners, and ops teams',
      'Real-time portfolio and performance dashboards',
      'Custom report builder and scheduled exports',
      'Alert and notification management',
      'Workflow and approval controls',
      'White-label partner portals',
    ],
    icon: 'layout-dashboard',
  },
  {
    id: 'data-governance',
    slug: 'data-governance',
    name: 'Data Governance & Monitoring',
    tagline: 'Trust, transparency, and compliance by design',
    description:
      'Enterprise-grade data governance including consent management, data residency controls, model monitoring, and comprehensive audit logging. Built for multi-jurisdictional compliance.',
    capabilities: [
      'Consent management and data subject rights',
      'Data residency and sovereignty controls',
      'Model bias monitoring and fairness metrics',
      'Comprehensive audit logging',
      'Regulatory change monitoring',
      'Incident response and breach notification',
    ],
    icon: 'shield-check',
  },
];

export const metrics: CMSMetric[] = [
  {
    id: 'api-response',
    label: 'API Response Time',
    value: 200,
    suffix: 'ms',
    prefix: '<',
    context: 'Average response time for pricing and offer APIs',
    isPlaceholder: false,
  },
  {
    id: 'claims-auto',
    label: 'Claims Automated',
    value: 92,
    suffix: '%',
    context: 'Percentage of claims resolved without manual intervention',
    isPlaceholder: false,
  },
  {
    id: 'policies-issued',
    label: 'Policies Processed',
    value: 10,
    suffix: 'M+',
    context: 'Total policies processed through YAS infrastructure',
    isPlaceholder: true,
  },
  {
    id: 'payout-time',
    label: 'Payout Speed',
    value: 60,
    suffix: 'sec',
    prefix: '<',
    context: 'Average time from claim approval to payout delivery',
    isPlaceholder: false,
  },
  {
    id: 'markets',
    label: 'Markets Ready',
    value: 15,
    suffix: '+',
    context: 'Regulatory frameworks supported across Asia Pacific and beyond',
    isPlaceholder: true,
  },
  {
    id: 'uptime',
    label: 'Platform Uptime',
    value: 99.95,
    suffix: '%',
    context: 'Trailing 12-month platform availability',
    isPlaceholder: false,
  },
];

export const pressItems: CMSPressItem[] = [
  {
    id: 'press-1',
    title: 'YAS raises Series B to expand fintech protection infrastructure across Asia Pacific',
    source: 'TechCrunch',
    date: '2025-09-15',
    url: '#',
    excerpt:
      'YAS, the fintech protection infrastructure company, has raised a Series B round to accelerate its embedded distribution platform across new markets.',
    featured: true,
  },
  {
    id: 'press-2',
    title: 'How embedded protection is reshaping insurance distribution in Asia',
    source: 'Insurance Asia News',
    date: '2025-07-22',
    url: '#',
    excerpt:
      'A deep dive into how technology companies like YAS are building the infrastructure layer that enables protection to be embedded at the point of need.',
    featured: true,
  },
  {
    id: 'press-3',
    title: 'YAS partners with leading Hong Kong taxi fleet for digital insurance transformation',
    source: 'South China Morning Post',
    date: '2025-05-10',
    url: '#',
    excerpt:
      'YAS Digital provides the technology platform that enables seamless insurance experiences for fleet operators and drivers.',
    featured: false,
  },
];

export const solutions = [
  {
    id: 'mobility',
    slug: 'mobility-fleets',
    name: 'Mobility & Fleets',
    tagline: 'Protection infrastructure for the future of transportation',
    pains: [
      'Fragmented insurance purchasing across fleet operations',
      'Manual claims processing causing driver downtime',
      'Inability to price risk based on real-time driver and vehicle data',
      'Lack of digital-first insurance experience for drivers',
    ],
    capabilities: [
      'AI risk pricing based on telematics and driver behavior',
      'Embedded protection in fleet management platforms',
      'Automated claims with instant payouts to driver wallets',
      'Fleet-wide analytics and loss ratio optimization',
    ],
    journey: [
      'Fleet operator integrates YAS API',
      'Drivers onboarded with embedded protection',
      'Real-time risk pricing per trip or shift',
      'Event detection triggers automated claim',
      'Instant payout settled to driver wallet',
    ],
    outcomes: [
      '85% digital adoption rate',
      '40% improvement in renewal rates',
      '< 24-hour claims processing',
      'Real-time fleet risk visibility',
    ],
  },
  {
    id: 'travel',
    slug: 'travel-cross-border',
    name: 'Travel & Cross-Border',
    tagline: 'Seamless protection for global travelers',
    pains: [
      'Complex multi-jurisdiction coverage requirements',
      'Poor claims experience abroad',
      'Low attachment rates on travel protection products',
      'Inability to offer contextual coverage at booking',
    ],
    capabilities: [
      'Multi-jurisdiction compliance engine',
      'Real-time contextual protection offers at booking',
      'Parametric flight delay and cancellation payouts',
      'Multi-language claim submission',
    ],
    journey: [
      'Traveler books on partner platform',
      'YAS delivers contextual protection offer',
      'Single-tap activation at checkout',
      'Parametric monitoring during trip',
      'Instant payout on qualifying event',
    ],
    outcomes: [
      '3x improvement in attachment rates',
      '< 200ms API response for offers',
      'Automatic multi-currency payouts',
      'Coverage across 15+ jurisdictions',
    ],
  },
  {
    id: 'marketplaces',
    slug: 'marketplaces-ecommerce',
    name: 'Marketplaces & E-commerce',
    tagline: 'Embedded protection for digital commerce',
    pains: [
      'No native protection in marketplace transactions',
      'Buyer and seller trust gaps',
      'Complex return and refund processes',
      'Missed revenue from protection products',
    ],
    capabilities: [
      'Checkout-embedded protection offers',
      'Product-specific coverage configuration',
      'Automated damage and loss claims',
      'Revenue share and commission management',
    ],
    journey: [
      'Buyer adds item to cart',
      'Protection offer embedded at checkout',
      'Coverage activated on purchase',
      'Claim submitted via marketplace interface',
      'Instant refund or replacement payout',
    ],
    outcomes: [
      '12% conversion on protection offers',
      'New revenue stream for marketplace operators',
      'Improved buyer confidence and retention',
      'Fully automated claims resolution',
    ],
  },
  {
    id: 'sme-gig',
    slug: 'sme-gig-protection',
    name: 'SME & Gig Protection',
    tagline: 'Scalable protection for small businesses and gig workers',
    pains: [
      'Underserved by traditional insurance products',
      'Complex and time-consuming purchase processes',
      'Inflexible coverage that doesn\'t match work patterns',
      'Slow claims affecting livelihood',
    ],
    capabilities: [
      'Modular protection products for gig economy',
      'Usage-based pricing aligned with work patterns',
      'Instant digital onboarding and activation',
      'Fast claims with livelihood-focused payouts',
    ],
    journey: [
      'Gig platform integrates YAS protection',
      'Worker selects coverage during onboarding',
      'Dynamic pricing based on activity',
      'Automated claim on qualifying event',
      'Instant payout to worker account',
    ],
    outcomes: [
      'Protection accessible to 100% of platform workers',
      'Coverage cost aligned with actual usage',
      '< 1-minute digital onboarding',
      'Same-day claims resolution',
    ],
  },
  {
    id: 'devices',
    slug: 'devices-robotics',
    name: 'Devices & Robotics',
    tagline: 'Protection for connected devices and autonomous systems',
    pains: [
      'High repair and replacement costs for IoT devices',
      'No standardized protection for robotics deployments',
      'Complex liability questions for autonomous systems',
      'Fragmented warranty and insurance processes',
    ],
    capabilities: [
      'Device telemetry-based risk pricing',
      'Automated damage detection via IoT signals',
      'Parametric triggers for device failure events',
      'Multi-device fleet coverage management',
    ],
    journey: [
      'Device fleet connected via IoT integration',
      'Risk priced per device based on usage data',
      'Coverage activated on deployment',
      'Anomaly detection triggers proactive alerts',
      'Automated claim and replacement payout',
    ],
    outcomes: [
      'Real-time device health monitoring',
      'Predictive risk scoring reduces losses',
      'Automated warranty and protection management',
      'Instant replacement payouts',
    ],
  },
];

export const regions = [
  { name: 'Hong Kong', status: 'Active' },
  { name: 'Singapore', status: 'Active' },
  { name: 'Thailand', status: 'Active' },
  { name: 'Vietnam', status: 'Active' },
  { name: 'Indonesia', status: 'Active' },
  { name: 'Malaysia', status: 'Active' },
  { name: 'Taiwan', status: 'Active' },
  { name: 'Japan', status: 'Expanding' },
  { name: 'South Korea', status: 'Expanding' },
  { name: 'Philippines', status: 'Expanding' },
  { name: 'Australia', status: 'Planned' },
  { name: 'Middle East', status: 'Planned' },
  { name: 'Europe', status: 'Planned' },
  { name: 'Latin America', status: 'Planned' },
  { name: 'North America', status: 'Planned' },
];

export const leadership = [
  {
    name: 'Andy Ann',
    role: 'Co-Founder & CEO',
    bio: 'Co-Founder and CEO of YAS, and a serial entrepreneur with successful prior venture exits. Andy leads the company\'s data strategy, marketing, go-to-market execution, and business development across Asia Pacific and beyond. He drives YAS\'s commercial growth — from building distribution partnerships with platforms like AlipayHK to shaping data-driven customer acquisition and market expansion strategies. With deep experience in fintech and digital marketing, he has established YAS as a category-defining brand in embedded protection, forging strategic relationships with enterprise partners and scaling go-to-market operations across multiple jurisdictions. Andy and co-founder William Lee have been close friends since their university days in Vancouver, and together they bring a unique dynamic to YAS — often rotating their roles as CEO and COO, creating a dual-leadership model that continues to inspire and attract top talent to the mission.',
  },
  {
    name: 'William Lee',
    role: 'Co-Founder & COO',
    bio: 'Co-Founder and Chief Operating Officer of YAS, a serial entrepreneur with successful prior venture exits and a hybrid leader who combines startup agility with global Fortune 100 experience scaling operations and managing billion-dollar P&L portfolios. William is responsible for product vision, company strategy, insurer development, underwriting capabilities, and client solutioning. He architects the end-to-end protection infrastructure — from building relationships with licensed insurers and reinsurers including Zurich Insurance, Generali, QBE, China Taiping, and Etiqa, to designing the underwriting frameworks and risk models that power YAS\'s platform. He leads client solutioning across verticals, ensuring each partner deployment is tailored to specific market, regulatory, and operational requirements. A university classmate of co-founder Andy Ann from Vancouver, William and Andy share a unique dual-leadership dynamic — often rotating between the CEO and COO roles — a partnership model that fuels YAS\'s culture and continues to attract exceptional talent drawn to the mission.',
  },
  { name: '[CTO Name]', role: 'Chief Technology Officer', bio: '[Placeholder: Technology leadership bio]' },
  { name: '[CPO Name]', role: 'Chief Product Officer', bio: '[Placeholder: Product leadership bio]' },
  { name: '[CRO Name]', role: 'Chief Revenue Officer', bio: '[Placeholder: Revenue leadership bio]' },
  { name: '[CLO Name]', role: 'Chief Legal & Compliance Officer', bio: '[Placeholder: Legal and compliance leadership bio]' },
];