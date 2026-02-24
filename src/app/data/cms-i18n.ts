// ──────────────────────────────────────────────
// CMS Content Localization Layer
// Provides translated CMS body content (product names,
// taglines, descriptions, metric labels, etc.)
// for all 13 supported locales.
// ──────────────────────────────────────────────

import type { Locale } from './i18n';
import type {
  CMSProduct,
  CMSPlatformModule,
  CMSMetric,
  CMSCaseStudy,
  CMSPressItem,
} from './cms';
import {
  products as baseProducts,
  platformModules as basePlatformModules,
  metrics as baseMetrics,
  caseStudies as baseCaseStudies,
  pressItems as basePressItems,
  solutions as baseSolutions,
  leadership as baseLeadership,
  regions as baseRegions,
} from './cms';

// ──────────────────────────────────────────────
// Product translations
// ──────────────────────────────────────────────
type ProductL10n = {
  name: string;
  tagline: string;
  description: string;
  outcomes: string[];
};

const productTranslations: Record<string, Record<Locale, ProductL10n>> = {
  'smart-transport': {
    en: { name: 'Smart Transport', tagline: 'Protection infrastructure for mobility and fleets', description: 'End-to-end protection technology for ride-hailing, taxi fleets, logistics, and micro-mobility. AI-powered risk pricing adapts to driver behavior, route patterns, and fleet performance data.', outcomes: ['Real-time risk pricing per trip or shift', 'Automated claims with instant driver payouts', 'Fleet-wide analytics and loss ratio optimization'] },
    'zh-TW': { name: '智慧交通', tagline: '出行與車隊保障基礎設施', description: '面向網約車、出租車隊、物流和微型出行的端到端保障科技。AI驅動的風險定價根據駕駛行為、路線模式和車隊表現數據進行調整。', outcomes: ['按行程或班次的即時風險定價', '自動化理賠與即時駕駛員賠付', '全車隊分析與賠付率優化'] },
    'zh-CN': { name: '智慧交通', tagline: '出行与车队保障基础设施', description: '面向网约车、出租车队、物流和微型出行的端到端保障科技。AI驱动的风险定价根据驾驶行为、路线模式和车队表现数据进行调整。', outcomes: ['按行程或班次的实时风险定价', '自动化理赔与即时驾驶员赔付', '全车队分析与赔付率优化'] },
    ja: { name: 'スマート交通', tagline: 'モビリティとフリートの保障インフラ', description: 'ライドヘイリング、タクシーフリート、物流、マイクロモビリティ向けのエンドツーエンド保障テクノロジー。AIによるリスク価格設定がドライバーの行動、ルートパターン、フリートパフォーマンスデータに適応します。', outcomes: ['トリップまたはシフトごとのリアルタイムリスク価格設定', '即時ドライバー支払いによる自動請求処理', 'フリート全体の分析と損害率最適化'] },
    ko: { name: '스마트 교통', tagline: '모빌리티 및 차량 보호 인프라', description: '차량 호출, 택시 플릿, 물류, 마이크로 모빌리티를 위한 엔드투엔드 보호 기술. AI 기반 리스크 가격 책정이 운전자 행동, 경로 패턴, 플릿 성과 데이터에 적응합니다.', outcomes: ['트립 또는 교대별 실시간 리스크 가격 책정', '즉시 운전자 지급을 통한 자동 청구 처리', '플릿 전체 분석 및 손해율 최적화'] },
    th: { name: 'ระบบขนส่งอัจฉริยะ', tagline: 'โครงสร้างพื้นฐานด้านการคุ้มครองสำหรับการเดินทางและกองยาน', description: 'เทคโนโลยีการคุ้มครองแบบครบวงจรสำหรับรถเรียก แท็กซี่ ขนส่ง และไมโครโมบิลิตี้ การกำหนดราคาความเสี่ยงด้วย AI ปรับตามพฤติกรรมการขับขี่ รูปแบบเส้นทาง และข้อมูลประสิทธิภาพกองยาน', outcomes: ['การกำหนดราคาความเสี่ยงแบบเรียลไทม์ต่อเที่ยว', 'การเคลมอัตโนมัติพร้อมจ่ายเงินทันที', 'การวิเคราะห์กองยานและเพิ่มประสิทธิภาพอัตราการจ่ายสินไหม'] },
    id: { name: 'Transportasi Cerdas', tagline: 'Infrastruktur perlindungan untuk mobilitas dan armada', description: 'Teknologi perlindungan end-to-end untuk ride-hailing, armada taksi, logistik, dan mikro-mobilitas. Penetapan harga risiko berbasis AI menyesuaikan dengan perilaku pengemudi, pola rute, dan data kinerja armada.', outcomes: ['Penetapan harga risiko real-time per perjalanan', 'Klaim otomatis dengan pembayaran instan ke pengemudi', 'Analitik armada dan optimalisasi rasio kerugian'] },
    vi: { name: 'Giao Thông Thông Minh', tagline: 'Hạ tầng bảo vệ cho di chuyển và đội xe', description: 'Công nghệ bảo vệ toàn diện cho gọi xe, đội taxi, logistics và vi di chuyển. Định giá rủi ro AI thích ứng với hành vi lái xe, mẫu tuyến đường và dữ liệu hiệu suất đội xe.', outcomes: ['Định giá rủi ro thời gian thực theo chuyến', 'Bồi thường tự động với thanh toán tức thì cho tài xế', 'Phân tích toàn đội xe và tối ưu tỷ lệ tổn thất'] },
    ms: { name: 'Pengangkutan Pintar', tagline: 'Infrastruktur perlindungan untuk mobiliti dan armada', description: 'Teknologi perlindungan hujung ke hujung untuk e-hailing, armada teksi, logistik dan mikro-mobiliti. Penetapan harga risiko berkuasa AI menyesuaikan dengan tingkah laku pemandu, corak laluan dan data prestasi armada.', outcomes: ['Penetapan harga risiko masa nyata setiap perjalanan', 'Tuntutan automatik dengan pembayaran segera kepada pemandu', 'Analitik armada dan pengoptimuman nisbah kerugian'] },
    es: { name: 'Transporte Inteligente', tagline: 'Infraestructura de protección para movilidad y flotas', description: 'Tecnología de protección integral para plataformas de transporte, flotas de taxis, logística y micromovilidad. La fijación de precios de riesgo impulsada por IA se adapta al comportamiento del conductor, patrones de ruta y datos de rendimiento de la flota.', outcomes: ['Precio de riesgo en tiempo real por viaje o turno', 'Reclamaciones automatizadas con pagos instantáneos al conductor', 'Análisis de flota y optimización del ratio de siniestralidad'] },
    fr: { name: 'Transport Intelligent', tagline: 'Infrastructure de protection pour la mobilité et les flottes', description: 'Technologie de protection de bout en bout pour les VTC, flottes de taxis, la logistique et la micro-mobilité. La tarification des risques par IA s\'adapte au comportement des conducteurs, aux modèles de parcours et aux données de performance de flotte.', outcomes: ['Tarification du risque en temps réel par trajet ou shift', 'Réclamations automatisées avec paiements instantanés aux conducteurs', 'Analytique de flotte et optimisation du ratio sinistres'] },
    de: { name: 'Intelligenter Transport', tagline: 'Schutzinfrastruktur für Mobilität und Flotten', description: 'End-to-End-Schutztechnologie für Ride-Hailing, Taxiflotten, Logistik und Mikromobilität. KI-gestützte Risikopreisgestaltung passt sich dem Fahrerverhalten, Routenmustern und Flottenleistungsdaten an.', outcomes: ['Echtzeit-Risikobepreisung pro Fahrt oder Schicht', 'Automatisierte Schadenbearbeitung mit sofortiger Fahrerzahlung', 'Flottenweite Analytik und Schadenquotenoptimierung'] },
    ar: { name: 'النقل الذكي', tagline: 'بنية تحتية للحماية في التنقل والأساطيل', description: 'تقنية حماية شاملة لخدمات النقل التشاركي وأساطيل سيارات الأجرة والخدمات اللوجستية والتنقل الصغير. يتكيف تسعير المخاطر المدعوم بالذكاء الاصطناعي مع سلوك السائق وأنماط المسار وبيانات أداء الأسطول.', outcomes: ['تسعير مخاطر فوري لكل رحلة أو وردية', 'مطالبات آلية مع دفع فوري للسائقين', 'تحليلات شاملة للأسطول وتحسين نسبة الخسارة'] },
  },
  'sports-lifestyle': {
    en: { name: 'Sports & Lifestyle', tagline: 'Event-driven protection for active lifestyles', description: 'Contextual protection products for sports events, fitness activities, travel adventures, and lifestyle experiences. Coverage activates based on activity signals and location data.', outcomes: ['Activity-triggered policy activation', 'Parametric payouts on qualifying events', 'Seamless integration with booking platforms'] },
    'zh-TW': { name: '運動與生活', tagline: '活躍生活方式的事件驅動保障', description: '面向體育賽事、健身活動、旅行探險和生活體驗的情境保障產品。保障根據活動信號和位置數據自動啟動。', outcomes: ['活動觸發的保單啟動', '符合條件事件的參數化賠付', '與預訂平台的無縫整合'] },
    'zh-CN': { name: '运动与生活', tagline: '活跃生活方式的事件驱动保障', description: '面向体育赛事、健身活动、旅行探险和生活体验的情境保障产品。保障根据活动信号和位置数据自动激活。', outcomes: ['活动触发的保单激活', '符合条件事件的参数化赔付', '与预订平台的无缝整合'] },
    ja: { name: 'スポーツ＆ライフスタイル', tagline: 'アクティブなライフスタイルのためのイベント駆動型保障', description: 'スポーツイベント、フィットネス活動、旅行アドベンチャー、ライフスタイル体験のためのコンテキスチュアル保障商品。アクティビティシグナルと位置情報に基づいて保障が有効になります。', outcomes: ['アクティビティトリガーによる保険自動有効化', '条件イベントでのパラメトリック支払い', '予約プラットフォームとのシームレス統合'] },
    ko: { name: '스포츠 & 라이프스타일', tagline: '활동적 생활을 위한 이벤트 기반 보호', description: '스포츠 이벤트, 피트니스 활동, 여행, 라이프스타일 경험을 위한 맥락 기반 보호 상품. 활동 신호와 위치 데이터에 따라 보장이 자동 활성화됩니다.', outcomes: ['활동 트리거 기반 보험 활성화', '적격 이벤트에 대한 파라메트릭 지급', '예약 플랫폼과의 원활한 통합'] },
    th: { name: 'กีฬาและไลฟ์สไตล์', tagline: 'การคุ้มครองตามเหตุการณ์สำหรับไลฟ์สไตล์เชิงรุก', description: 'ผลิตภัณฑ์การคุ้มครองตามบริบทสำหรับกิจกรรมกีฬา ฟิตเนส การผจญภัย และประสบการณ์ชีวิต ความคุ้มครองเปิดใช้งานตามสัญญาณกิจกรรมและข้อมูลตำแหน่ง', outcomes: ['การเปิดกรมธรรม์ตามกิจกรรม', 'การจ่ายเงินพาราเมตริกเมื่อเกิดเหตุการณ์ที่เข้าเงื่อนไข', 'การผสานรวมกับแพลตฟอร์มจองอย่างไร้รอยต่อ'] },
    id: { name: 'Olahraga & Gaya Hidup', tagline: 'Perlindungan berbasis peristiwa untuk gaya hidup aktif', description: 'Produk perlindungan kontekstual untuk acara olahraga, aktivitas kebugaran, petualangan perjalanan, dan pengalaman gaya hidup. Perlindungan diaktifkan berdasarkan sinyal aktivitas dan data lokasi.', outcomes: ['Aktivasi polis dipicu oleh aktivitas', 'Pembayaran parametrik pada peristiwa yang memenuhi syarat', 'Integrasi mulus dengan platform pemesanan'] },
    vi: { name: 'Thể Thao & Phong Cách Sống', tagline: 'Bảo vệ theo sự kiện cho lối sống năng động', description: 'Sản phẩm bảo vệ theo ngữ cảnh cho sự kiện thể thao, hoạt động thể dục, phiêu lưu du lịch và trải nghiệm cuộc sống. Bảo hiểm kích hoạt dựa trên tín hiệu hoạt động và dữ liệu vị trí.', outcomes: ['Kích hoạt hợp đồng theo hoạt động', 'Chi trả tham số cho sự kiện đủ điều kiện', 'Tích hợp liền mạch với nền tảng đặt chỗ'] },
    ms: { name: 'Sukan & Gaya Hidup', tagline: 'Perlindungan berasaskan acara untuk gaya hidup aktif', description: 'Produk perlindungan kontekstual untuk acara sukan, aktiviti kecergasan, pengembaraan perjalanan dan pengalaman gaya hidup. Perlindungan diaktifkan berdasarkan isyarat aktiviti dan data lokasi.', outcomes: ['Pengaktifan polisi dicetuskan oleh aktiviti', 'Pembayaran parametrik pada acara yang layak', 'Integrasi lancar dengan platform tempahan'] },
    es: { name: 'Deportes y Estilo de Vida', tagline: 'Protección basada en eventos para estilos de vida activos', description: 'Productos de protección contextual para eventos deportivos, actividades de fitness, aventuras de viaje y experiencias de estilo de vida. La cobertura se activa según señales de actividad y datos de ubicación.', outcomes: ['Activación de póliza por actividad', 'Pagos paramétricos en eventos calificados', 'Integración perfecta con plataformas de reserva'] },
    fr: { name: 'Sports & Lifestyle', tagline: 'Protection événementielle pour les modes de vie actifs', description: 'Produits de protection contextuelle pour les événements sportifs, activités fitness, aventures de voyage et expériences lifestyle. La couverture s\'active selon les signaux d\'activité et données de localisation.', outcomes: ['Activation de police déclenchée par l\'activité', 'Paiements paramétriques sur événements qualifiants', 'Intégration transparente avec les plateformes de réservation'] },
    de: { name: 'Sport & Lifestyle', tagline: 'Ereignisbasierter Schutz für aktive Lebensstile', description: 'Kontextuelle Schutzprodukte für Sportveranstaltungen, Fitnessaktivitäten, Reiseabenteuer und Lifestyle-Erlebnisse. Der Schutz aktiviert sich basierend auf Aktivitätssignalen und Standortdaten.', outcomes: ['Aktivitätsgesteuerte Policenaktivierung', 'Parametrische Auszahlungen bei qualifizierenden Ereignissen', 'Nahtlose Integration mit Buchungsplattformen'] },
    ar: { name: 'الرياضة وأسلوب الحياة', tagline: 'حماية مبنية على الأحداث لأنماط الحياة النشطة', description: 'منتجات حماية سياقية للفعاليات الرياضية وأنشطة اللياقة البدنية ومغامرات السفر وتجارب نمط الحياة. يتم تفعيل التغطية بناءً على إشارات النشاط وبيانات الموقع.', outcomes: ['تفعيل وثيقة التأمين بناءً على النشاط', 'مدفوعات بارامترية عند الأحداث المؤهلة', 'تكامل سلس مع منصات الحجز'] },
  },
  'payments-wallets': {
    en: { name: 'Payments & Wallets', tagline: 'Embedded protection at the point of transaction', description: 'Protection infrastructure for payment platforms, digital wallets, and financial super apps. Deliver contextual coverage offers within existing payment flows with sub-200ms API response times.', outcomes: ['Sub-200ms protection offer at checkout', 'Single-tap policy activation within payment flow', '92% automated claims resolution'] },
    'zh-TW': { name: '支付與錢包', tagline: '交易節點的嵌入式保障', description: '面向支付平台、數字錢包和金融超級應用的保障基礎設施。在現有支付流程中提供情境化保障方案，API 回應時間低於 200 毫秒。', outcomes: ['結帳時低於 200 毫秒的保障方案', '支付流程中一鍵啟動保單', '92% 自動化理賠解決'] },
    'zh-CN': { name: '支付与钱包', tagline: '交易节点的嵌入式保障', description: '面向支付平台、数字钱包和金融超级应用的保障基础设施。在现有支付流程中提供情境化保障方案，API 响应时间低于 200 毫秒。', outcomes: ['结账时低于 200 毫秒的保障方案', '支付流程中一键激活保单', '92% 自动化理赔解决'] },
    ja: { name: '決済＆ウォレット', tagline: '取引時点での組込型保障', description: '決済プラットフォーム、デジタルウォレット、金融スーパーアプリのための保障インフラ。既存の決済フローの中で200ミリ秒以下のAPI応答時間でコンテキスチュアルな保障を提供。', outcomes: ['チェックアウト時200ミリ秒以下の保障提案', '決済フロー内でのワンタップ保険有効化', '92%の自動請求処理'] },
    ko: { name: '결제 & 지갑', tagline: '거래 시점의 임베디드 보호', description: '결제 플랫폼, 디지털 지갑, 금융 슈퍼앱을 위한 보호 인프라. 기존 결제 흐름 내에서 200ms 미만의 API 응답 시간으로 맥락 기반 보장 제안을 제공합니다.', outcomes: ['결제 시 200ms 미만의 보호 제안', '결제 흐름 내 원탭 보험 활성화', '92% 자동 청구 해결'] },
    th: { name: 'การชำระเงินและกระเป๋าเงิน', tagline: 'การคุ้มครองแบบฝังตัว ณ จุดทำรายการ', description: 'โครงสร้างพื้นฐานการคุ้มครองสำหรับแพลตฟอร์มการชำระเงิน กระเป๋าเงินดิจิทัล และซูเปอร์แอปทางการเงิน มอบข้อเสนอความคุ้มครองตามบริบทภายในขั้นตอนการชำระเงินที่มีอยู่ด้วยเวลาตอบสนอง API ต่ำกว่า 200 มิลลิวินาที', outcomes: ['ข้อเสนอการคุ้มครองภายใน 200 มิลลิวินาที ณ จุดชำระเงิน', 'เปิดใช้กรมธรรม์แตะครั้งเดียวในขั้นตอนชำระเงิน', 'การแก้ไขการเคลมอัตโนมัติ 92%'] },
    id: { name: 'Pembayaran & Dompet', tagline: 'Perlindungan tertanam di titik transaksi', description: 'Infrastruktur perlindungan untuk platform pembayaran, dompet digital, dan super app keuangan. Tawarkan perlindungan kontekstual dalam alur pembayaran yang ada dengan waktu respons API di bawah 200ms.', outcomes: ['Penawaran perlindungan di bawah 200ms saat checkout', 'Aktivasi polis satu ketukan dalam alur pembayaran', '92% resolusi klaim otomatis'] },
    vi: { name: 'Thanh Toán & Ví Điện Tử', tagline: 'Bảo vệ tích hợp tại điểm giao dịch', description: 'Hạ tầng bảo vệ cho nền tảng thanh toán, ví điện tử và siêu ứng dụng tài chính. Cung cấp đề xuất bảo hiểm theo ngữ cảnh trong luồng thanh toán hiện có với thời gian phản hồi API dưới 200ms.', outcomes: ['Đề xuất bảo vệ dưới 200ms tại thanh toán', 'Kích hoạt hợp đồng một chạm trong luồng thanh toán', '92% giải quyết bồi thường tự động'] },
    ms: { name: 'Pembayaran & Dompet', tagline: 'Perlindungan terbenam di titik transaksi', description: 'Infrastruktur perlindungan untuk platform pembayaran, dompet digital dan aplikasi super kewangan. Tawarkan perlindungan kontekstual dalam aliran pembayaran sedia ada dengan masa respons API bawah 200ms.', outcomes: ['Tawaran perlindungan bawah 200ms semasa checkout', 'Pengaktifan polisi satu sentuhan dalam aliran pembayaran', '92% penyelesaian tuntutan automatik'] },
    es: { name: 'Pagos y Billeteras', tagline: 'Protección integrada en el punto de transacción', description: 'Infraestructura de protección para plataformas de pago, billeteras digitales y super apps financieras. Entrega ofertas de cobertura contextual dentro de flujos de pago existentes con tiempos de respuesta API inferiores a 200ms.', outcomes: ['Oferta de protección en menos de 200ms en checkout', 'Activación de póliza con un toque en el flujo de pago', '92% resolución automatizada de reclamaciones'] },
    fr: { name: 'Paiements & Portefeuilles', tagline: 'Protection intégrée au point de transaction', description: 'Infrastructure de protection pour les plateformes de paiement, portefeuilles numériques et super apps financières. Offres de couverture contextuelle dans les flux de paiement existants avec des temps de réponse API inférieurs à 200ms.', outcomes: ['Offre de protection en moins de 200ms au checkout', 'Activation de police en un clic dans le flux de paiement', '92% de résolution automatisée des sinistres'] },
    de: { name: 'Zahlungen & Wallets', tagline: 'Eingebetteter Schutz am Transaktionspunkt', description: 'Schutzinfrastruktur für Zahlungsplattformen, digitale Wallets und Finanz-Super-Apps. Kontextuelle Deckungsangebote innerhalb bestehender Zahlungsflüsse mit API-Antwortzeiten unter 200ms.', outcomes: ['Schutzangebot unter 200ms beim Checkout', 'Ein-Klick-Policenaktivierung im Zahlungsfluss', '92% automatisierte Schadensregulierung'] },
    ar: { name: 'المدفوعات والمحافظ', tagline: 'حماية مدمجة عند نقطة المعاملة', description: 'بنية تحتية للحماية لمنصات الدفع والمحافظ الرقمية والتطبيقات المالية الفائقة. تقديم عروض تغطية سياقية ضمن تدفقات الدفع الحالية مع أوقات استجابة API أقل من 200 مللي ثانية.', outcomes: ['عرض حماية في أقل من 200 مللي ثانية عند الدفع', 'تفعيل وثيقة بلمسة واحدة ضمن تدفق الدفع', '92% حل تلقائي للمطالبات'] },
  },
  'liquidity-lending': {
    en: { name: 'Liquidity Pool & Lending', tagline: 'Protection for decentralized finance and lending', description: 'Risk infrastructure for lending platforms, liquidity pools, and DeFi protocols. Automated protection against default events, smart contract failures, and market volatility.', outcomes: ['Automated default protection triggers', 'Real-time collateral monitoring', 'Programmable payout logic via smart contracts'] },
    'zh-TW': { name: '流動性池與借貸', tagline: '去中心化金融與借貸的保障', description: '面向借貸平台、流動性池和 DeFi 協議的風險基礎設施。針對違約事件、智能合約故障和市場波動的自動化保障。', outcomes: ['自動化違約保障觸發', '即時抵押品監控', '透過智能合約的可編程賠付邏輯'] },
    'zh-CN': { name: '流动性池与借贷', tagline: '去中心化金融与借贷的保障', description: '面向借贷平台、流动性池和 DeFi 协议的风险基础设施。针对违约事件、智能合约故障和市场波动的自动化保障。', outcomes: ['自动化违约保障触发', '实时抵押品监控', '通过智能合约的可编程赔付逻辑'] },
    ja: { name: '流動性プール＆レンディング', tagline: '分散型金融とレンディングのための保障', description: 'レンディングプラットフォーム、流動性プール、DeFiプロトコルのためのリスクインフラ。デフォルトイベント、スマートコントラクトの障害、市場のボラティリティに対する自動保障。', outcomes: ['自動化されたデフォルト保障トリガー', 'リアルタイム担保モニタリング', 'スマートコントラクトによるプログラム可能な支払いロジック'] },
    ko: { name: '유동성 풀 & 대출', tagline: '탈중앙 금융 및 대출을 위한 보호', description: '대출 플랫폼, 유동성 풀, DeFi 프로토콜을 위한 리스크 인프라. 채무불이행, 스마트 컨트랙트 오류, 시장 변동성에 대한 자동화된 보호.', outcomes: ['자동화된 채무불이행 보호 트리거', '실시간 담보 모니터링', '스마트 컨트랙트를 통한 프로그래머블 지급 로직'] },
    th: { name: 'สภาพคล่องและสินเชื่อ', tagline: 'การคุ้มครองสำหรับการเงินแบบกระจายศูนย์และสินเชื่อ', description: 'โครงสร้างพื้นฐานด้านความเสี่ยงสำหรับแพลตฟอร์มสินเชื่อ สระสภาพคล่อง และโปรโตคอล DeFi การคุ้มครองอัตโนมัติต่อเหตุการณ์ผิดนัดชำระ ความล้มเหลวของสัญญาอัจฉริยะ และความผันผวนของตลาด', outcomes: ['ทริกเกอร์การคุ้มครองการผิดนัดชำระอัตโนมัติ', 'การติดตามหลักประกันแบบเรียลไทม์', 'ตรรกะการจ่ายเงินที่โปรแกรมได้ผ่านสัญญาอัจฉริยะ'] },
    id: { name: 'Pool Likuiditas & Pinjaman', tagline: 'Perlindungan untuk keuangan terdesentralisasi dan pinjaman', description: 'Infrastruktur risiko untuk platform pinjaman, pool likuiditas, dan protokol DeFi. Perlindungan otomatis terhadap peristiwa gagal bayar, kegagalan kontrak pintar, dan volatilitas pasar.', outcomes: ['Pemicu perlindungan gagal bayar otomatis', 'Pemantauan agunan real-time', 'Logika pembayaran yang dapat diprogram melalui kontrak pintar'] },
    vi: { name: 'Pool Thanh Khoản & Cho Vay', tagline: 'Bảo vệ cho tài chính phi tập trung và cho vay', description: 'Hạ tầng rủi ro cho nền tảng cho vay, pool thanh khoản và giao thức DeFi. Bảo vệ tự động chống lại sự kiện vỡ nợ, lỗi hợp đồng thông minh và biến động thị trường.', outcomes: ['Kích hoạt bảo vệ vỡ nợ tự động', 'Giám sát tài sản thế chấp thời gian thực', 'Logic thanh toán lập trình được qua hợp đồng thông minh'] },
    ms: { name: 'Kumpulan Kecairan & Pinjaman', tagline: 'Perlindungan untuk kewangan terdesentralisasi dan pinjaman', description: 'Infrastruktur risiko untuk platform pinjaman, kumpulan kecairan dan protokol DeFi. Perlindungan automatik terhadap peristiwa mungkir, kegagalan kontrak pintar dan ketidaktentuan pasaran.', outcomes: ['Pencetus perlindungan mungkir automatik', 'Pemantauan cagaran masa nyata', 'Logik pembayaran boleh atur cara melalui kontrak pintar'] },
    es: { name: 'Pool de Liquidez y Préstamos', tagline: 'Protección para finanzas descentralizadas y préstamos', description: 'Infraestructura de riesgo para plataformas de préstamos, pools de liquidez y protocolos DeFi. Protección automatizada contra eventos de incumplimiento, fallos de contratos inteligentes y volatilidad del mercado.', outcomes: ['Activadores automáticos de protección contra incumplimiento', 'Monitoreo de garantías en tiempo real', 'Lógica de pago programable vía contratos inteligentes'] },
    fr: { name: 'Pools de Liquidité & Prêts', tagline: 'Protection pour la finance décentralisée et les prêts', description: 'Infrastructure de risque pour les plateformes de prêt, pools de liquidité et protocoles DeFi. Protection automatisée contre les défauts de paiement, pannes de contrats intelligents et volatilité du marché.', outcomes: ['Déclencheurs automatiques de protection contre le défaut', 'Surveillance des garanties en temps réel', 'Logique de paiement programmable via contrats intelligents'] },
    de: { name: 'Liquiditätspools & Kreditvergabe', tagline: 'Schutz für dezentrale Finanzen und Kreditvergabe', description: 'Risikoinfrastruktur für Kreditplattformen, Liquiditätspools und DeFi-Protokolle. Automatisierter Schutz gegen Ausfälle, Smart-Contract-Fehler und Marktvolatilität.', outcomes: ['Automatisierte Ausfallschutz-Trigger', 'Echtzeit-Sicherheitenüberwachung', 'Programmierbare Auszahlungslogik über Smart Contracts'] },
    ar: { name: 'مجمعات السيولة والإقراض', tagline: 'حماية للتمويل اللامركزي والإقراض', description: 'بنية تحتية للمخاطر لمنصات الإقراض ومجمعات السيولة وبروتوكولات التمويل اللامركزي. حماية آلية ضد أحداث التخلف عن السداد وإخفاقات العقود الذكية وتقلبات السوق.', outcomes: ['محفزات حماية آلية ضد التخلف عن السداد', 'مراقبة الضمانات في الوقت الفعلي', 'منطق دفع قابل للبرمجة عبر العقود الذكية'] },
  },
};

// ──────────────────────────────────────────────
// Platform module translations
// ──────────────────────────────────────────────
type ModuleL10n = { name: string; tagline: string; description: string };

const moduleTranslations: Record<string, Record<Locale, ModuleL10n>> = {
  'risk-pricing': {
    en: { name: 'Risk & Pricing Engine', tagline: 'AI-powered risk assessment and dynamic pricing', description: 'Real-time risk scoring and dynamic pricing powered by machine learning models. Processes behavioral signals, contextual data, and historical patterns to generate accurate, fair pricing in milliseconds.' },
    'zh-TW': { name: '風險與定價引擎', tagline: 'AI 驅動的風險評估與動態定價', description: '由機器學習模型驅動的即時風險評分與動態定價。處理行為信號、情境數據和歷史模式，在毫秒內生成準確、公平的定價。' },
    'zh-CN': { name: '风险与定价引擎', tagline: 'AI 驱动的风险评估与动态定价', description: '由机器学习模型驱动的实时风险评分与动态定价。处理行为信号、情境数据和历史模式，在毫秒内生成准确、公平的定价。' },
    ja: { name: 'リスク＆プライシングエンジン', tagline: 'AI駆動のリスク評価と動的価格設定', description: '機械学習モデルによるリアルタイムリスクスコアリングと動的価格設定。行動シグナル、コンテキストデータ、履歴パターンを処理し、ミリ秒で正確かつ公正な価格設定を生成します。' },
    ko: { name: '리스크 & 가격 엔진', tagline: 'AI 기반 리스크 평가 및 동적 가격 책정', description: '머신러닝 모델 기반의 실시간 리스크 스코어링 및 동적 가격 책정. 행동 신호, 맥락 데이터, 과거 패턴을 처리하여 밀리초 내에 정확하고 공정한 가격을 생성합니다.' },
    th: { name: 'เอนจินความเสี่ยงและการกำหนดราคา', tagline: 'การประเมินความเสี่ยงด้วย AI และการกำหนดราคาแบบไดนามิก', description: 'การให้คะแนนความเสี่ยงแบบเรียลไทม์และการกำหนดราคาแบบไดนามิกด้วยโมเดล Machine Learning' },
    id: { name: 'Mesin Risiko & Harga', tagline: 'Penilaian risiko berbasis AI dan penetapan harga dinamis', description: 'Penilaian risiko real-time dan penetapan harga dinamis yang didukung model machine learning.' },
    vi: { name: 'Công Cụ Rủi Ro & Định Giá', tagline: 'Đánh giá rủi ro AI và định giá động', description: 'Chấm điểm rủi ro thời gian thực và định giá động bởi mô hình học máy.' },
    ms: { name: 'Enjin Risiko & Penetapan Harga', tagline: 'Penilaian risiko berkuasa AI dan penetapan harga dinamik', description: 'Pemarkahan risiko masa nyata dan penetapan harga dinamik dikuasakan model pembelajaran mesin.' },
    es: { name: 'Motor de Riesgo y Precios', tagline: 'Evaluación de riesgos con IA y precios dinámicos', description: 'Puntuación de riesgo en tiempo real y precios dinámicos impulsados por modelos de aprendizaje automático.' },
    fr: { name: 'Moteur Risque & Tarification', tagline: 'Évaluation des risques par IA et tarification dynamique', description: 'Scoring de risque en temps réel et tarification dynamique par modèles de machine learning.' },
    de: { name: 'Risiko- & Pricing-Engine', tagline: 'KI-gestützte Risikobewertung und dynamische Preisgestaltung', description: 'Echtzeit-Risikobewertung und dynamische Preisgestaltung durch Machine-Learning-Modelle.' },
    ar: { name: 'محرك المخاطر والتسعير', tagline: 'تقييم المخاطر بالذكاء الاصطناعي والتسعير الديناميكي', description: 'تقييم المخاطر في الوقت الفعلي والتسعير الديناميكي المدعوم بنماذج التعلم الآلي.' },
  },
  distribution: {
    en: { name: 'Embedded Distribution & Journey Builder', tagline: 'Drop-in protection flows for any digital platform', description: 'Pre-built and customizable protection journeys that embed directly into partner platforms via API or SDK.' },
    'zh-TW': { name: '嵌入式分銷與旅程建構器', tagline: '任何數碼平台的即插即用保障流程', description: '預建且可自訂的保障旅程，透過 API 或 SDK 直接嵌入合作夥伴平台。' },
    'zh-CN': { name: '嵌入式分销与旅程构建器', tagline: '任何数字平台的即插即用保障流程', description: '预建且可自定义的保障旅程，通过 API 或 SDK 直接嵌入合作伙伴平台。' },
    ja: { name: '組込配信＆ジャーニービルダー', tagline: 'あらゆるデジタルプラットフォーム向けのドロップイン保障フロー', description: 'APIまたはSDKを通じてパートナープラットフォームに直接組み込める、構築済みでカスタマイズ可能な保障ジャーニー。' },
    ko: { name: '임베디드 배포 & 여정 빌더', tagline: '모든 디지털 플랫폼을 위한 드롭인 보호 흐름', description: 'API 또는 SDK를 통해 파트너 플랫폼에 직접 임베드되는 사전 구축된 맞춤형 보호 여정.' },
    th: { name: 'การกระจายแบบฝังตัวและตัวสร้างเส้นทาง', tagline: 'ขั้นตอนการคุ้มครองแบบพร้อมใช้สำหรับทุกแพลตฟอร์มดิจิทัล', description: 'เส้นทางการคุ้มครองสำเร็จรูปและปรับแต่งได้ที่ฝังตรงเข้าในแพลตฟอร์มพันธมิตรผ่าน API หรือ SDK' },
    id: { name: 'Distribusi Tertanam & Journey Builder', tagline: 'Alur perlindungan plug-in untuk platform digital apa pun', description: 'Perjalanan perlindungan siap pakai dan dapat disesuaikan yang tertanam langsung ke platform mitra melalui API atau SDK.' },
    vi: { name: 'Phân Phối Tích Hợp & Trình Xây Dựng Hành Trình', tagline: 'Luồng bảo vệ cắm-chạy cho mọi nền tảng số', description: 'Hành trình bảo vệ được xây dựng sẵn và có thể tùy chỉnh, tích hợp trực tiếp vào nền tảng đối tác qua API hoặc SDK.' },
    ms: { name: 'Pengedaran Terbenam & Pembina Perjalanan', tagline: 'Aliran perlindungan sedia guna untuk mana-mana platform digital', description: 'Perjalanan perlindungan sedia dibina dan boleh disesuaikan yang dibenamkan terus ke platform rakan kongsi melalui API atau SDK.' },
    es: { name: 'Distribución Integrada & Constructor de Viaje', tagline: 'Flujos de protección plug-in para cualquier plataforma digital', description: 'Viajes de protección preconstruidos y personalizables que se integran directamente en plataformas de socios vía API o SDK.' },
    fr: { name: 'Distribution Intégrée & Constructeur de Parcours', tagline: 'Flux de protection prêts à l\'emploi pour toute plateforme digitale', description: 'Parcours de protection préconstruits et personnalisables qui s\'intègrent directement dans les plateformes partenaires via API ou SDK.' },
    de: { name: 'Eingebettete Distribution & Journey Builder', tagline: 'Plug-in-Schutzflüsse für jede digitale Plattform', description: 'Vorgefertigte und anpassbare Schutzreisen, die sich direkt über API oder SDK in Partnerplattformen integrieren.' },
    ar: { name: 'التوزيع المدمج وبناء الرحلات', tagline: 'تدفقات حماية جاهزة لأي منصة رقمية', description: 'رحلات حماية مبنية مسبقاً وقابلة للتخصيص تندمج مباشرة في منصات الشركاء عبر API أو SDK.' },
  },
  'policy-lifecycle': {
    en: { name: 'Policy Issuance & Lifecycle', tagline: 'Automated policy management from issuance to renewal', description: 'End-to-end policy lifecycle management including real-time issuance, amendments, renewals, and cancellations.' },
    'zh-TW': { name: '保單簽發與生命週期', tagline: '從簽發到續保的自動化保單管理', description: '端到端保單生命週期管理，包括即時簽發、修改、續保和取消。' },
    'zh-CN': { name: '保单签发与生命周期', tagline: '从签发到续保的自动化保单管理', description: '端到端保单生命周期管理，包括实时签发、修改、续保和取消。' },
    ja: { name: '保険証券発行＆ライフサイクル', tagline: '発行から更新までの自動化された保険証券管理', description: 'リアルタイム発行、変更、更新、解約を含むエンドツーエンドの保険証券ライフサイクル管理。' },
    ko: { name: '보험증권 발행 & 생명주기', tagline: '발행에서 갱신까지 자동화된 보험증권 관리', description: '실시간 발행, 변경, 갱신, 해지를 포함한 엔드투엔드 보험증권 생명주기 관리.' },
    th: { name: 'การออกกรมธรรม์และวงจรชีวิต', tagline: 'การจัดการกรมธรรม์อัตโนมัติตั้งแต่ออกจนถึงต่ออายุ', description: 'การจัดการวงจรชีวิตกรมธรรม์แบบครบวงจร รวมถึงการออก แก้ไข ต่ออายุ และยกเลิกแบบเรียลไทม์' },
    id: { name: 'Penerbitan & Siklus Hidup Polis', tagline: 'Manajemen polis otomatis dari penerbitan hingga perpanjangan', description: 'Manajemen siklus hidup polis end-to-end termasuk penerbitan, amandemen, perpanjangan, dan pembatalan real-time.' },
    vi: { name: 'Phát Hành & Vòng Đời Hợp Đồng', tagline: 'Quản lý hợp đồng tự động từ phát hành đến gia hạn', description: 'Quản lý vòng đời hợp đồng toàn diện bao gồm phát hành, sửa đổi, gia hạn và hủy bỏ theo thời gian thực.' },
    ms: { name: 'Penerbitan & Kitaran Hayat Polisi', tagline: 'Pengurusan polisi automatik dari penerbitan hingga pembaharuan', description: 'Pengurusan kitaran hayat polisi hujung ke hujung termasuk penerbitan, pindaan, pembaharuan dan pembatalan masa nyata.' },
    es: { name: 'Emisión y Ciclo de Vida de Pólizas', tagline: 'Gestión automatizada de pólizas desde emisión hasta renovación', description: 'Gestión integral del ciclo de vida de pólizas incluyendo emisión, enmiendas, renovaciones y cancelaciones en tiempo real.' },
    fr: { name: 'Émission & Cycle de Vie des Polices', tagline: 'Gestion automatisée des polices de l\'émission au renouvellement', description: 'Gestion complète du cycle de vie des polices incluant émission, amendements, renouvellements et annulations en temps réel.' },
    de: { name: 'Policenausstellung & Lebenszyklus', tagline: 'Automatisierte Policenverwaltung von Ausstellung bis Erneuerung', description: 'End-to-End-Policenlebenszyklusmanagement einschließlich Echtzeit-Ausstellung, Änderungen, Erneuerungen und Stornierungen.' },
    ar: { name: 'إصدار الوثائق ودورة حياتها', tagline: 'إدارة آلية للوثائق من الإصدار إلى التجديد', description: 'إدارة شاملة لدورة حياة الوثائق بما في ذلك الإصدار والتعديلات والتجديدات والإلغاءات في الوقت الفعلي.' },
  },
  claims: {
    en: { name: 'Claims Automation & Instant Payouts', tagline: 'From event to payout in minutes, not weeks', description: 'Automated claims processing powered by parametric triggers, document AI, and configurable decision rules.' },
    'zh-TW': { name: '理賠自動化與即時賠付', tagline: '從事件到賠付只需幾分鐘，而非幾週', description: '由參數觸發、文件 AI 和可配置決策規則驅動的自動化理賠處理。' },
    'zh-CN': { name: '理赔自动化与即时赔付', tagline: '从事件到赔付只需几分钟，而非几周', description: '由参数触发、文件 AI 和可配置决策规则驱动的自动化理赔处理。' },
    ja: { name: '請求自動化＆即時支払い', tagline: 'イベントから支払いまで数週間ではなく数分で', description: 'パラメトリックトリガー、ドキュメントAI、設定可能な決定ルールによる自動請求処理。' },
    ko: { name: '청구 자동화 & 즉시 지급', tagline: '이벤트에서 지급까지 몇 주가 아닌 몇 분', description: '파라메트릭 트리거, 문서 AI, 구성 가능한 결정 규칙에 의한 자동 청구 처리.' },
    th: { name: 'การเคลมอัตโนมัติและการจ่ายเงินทันที', tagline: 'จากเหตุการณ์ถึงการจ่ายเงินในไม่กี่นาที ไม่ใช่หลายสัปดาห์', description: 'การประมวลผลการเคลมอัตโนมัติด้วยทริกเกอร์พาราเมตริก เอกสาร AI และกฎการตัดสินใจที่กำหนดค่าได้' },
    id: { name: 'Otomasi Klaim & Pembayaran Instan', tagline: 'Dari kejadian ke pembayaran dalam menit, bukan minggu', description: 'Pemrosesan klaim otomatis didukung pemicu parametrik, AI dokumen, dan aturan keputusan yang dapat dikonfigurasi.' },
    vi: { name: 'Tự Động Hóa Bồi Thường & Thanh Toán Tức Thì', tagline: 'Từ sự kiện đến thanh toán trong vài phút, không phải vài tuần', description: 'Xử lý bồi thường tự động bởi kích hoạt tham số, AI tài liệu và quy tắc quyết định có thể cấu hình.' },
    ms: { name: 'Automasi Tuntutan & Bayaran Segera', tagline: 'Dari peristiwa ke pembayaran dalam minit, bukan minggu', description: 'Pemprosesan tuntutan automatik dikuasakan pencetus parametrik, AI dokumen dan peraturan keputusan boleh konfigurasi.' },
    es: { name: 'Automatización de Reclamaciones y Pagos Instantáneos', tagline: 'Del evento al pago en minutos, no semanas', description: 'Procesamiento automatizado de reclamaciones con disparadores paramétricos, IA documental y reglas de decisión configurables.' },
    fr: { name: 'Automatisation des Sinistres & Paiements Instantanés', tagline: 'De l\'événement au paiement en minutes, pas en semaines', description: 'Traitement automatisé des sinistres par déclencheurs paramétriques, IA documentaire et règles de décision configurables.' },
    de: { name: 'Schadenautomatisierung & Sofortauszahlungen', tagline: 'Vom Ereignis zur Auszahlung in Minuten, nicht Wochen', description: 'Automatisierte Schadenbearbeitung durch parametrische Trigger, Dokument-KI und konfigurierbare Entscheidungsregeln.' },
    ar: { name: 'أتمتة المطالبات والدفع الفوري', tagline: 'من الحدث إلى الدفع في دقائق وليس أسابيع', description: 'معالجة مطالبات آلية مدعومة بمحفزات بارامترية وذكاء اصطناعي للمستندات وقواعد قرار قابلة للتكوين.' },
  },
  'payments-ledger': {
    en: { name: 'Payments, Ledger & Reconciliation', tagline: 'Financial operations infrastructure for protection', description: 'Complete financial operations layer including premium collection, commission management, claims payouts, and multi-party reconciliation.' },
    'zh-TW': { name: '支付、帳簿與對帳', tagline: '保障領域的金融營運基礎設施', description: '完整的金融營運層，包括保費收取、佣金管理、理賠賠付和多方對帳。' },
    'zh-CN': { name: '支付、账本与对账', tagline: '保障领域的金融运营基础设施', description: '完整的金融运营层，包括保费收取、佣金管理、理赔赔付和多方对账。' },
    ja: { name: '決済、台帳＆照合', tagline: '保障のための金融オペレーションインフラ', description: '保険料徴収、手数料管理、請求支払い、マルチパーティ照合を含む完全な金融オペレーションレイヤー。' },
    ko: { name: '결제, 원장 & 정산', tagline: '보호를 위한 금융 운영 인프라', description: '보험료 수금, 수수료 관리, 보험금 지급, 다자간 정산을 포함한 완전한 금융 운영 레이어.' },
    th: { name: 'การชำระเงิน บัญชีแยกประเภท และการกระทบยอด', tagline: 'โครงสร้างพื้นฐานการดำเนินงานทางการเงินสำหรับการคุ้มครอง', description: 'ชั้นการดำเนินงานทางการเงินที่สมบูรณ์ รวมถึงการเก็บเบี้ยประกัน การจัดการค่าคอมมิชชั่น การจ่ายสินไหม และการกระทบยอดหลายฝ่าย' },
    id: { name: 'Pembayaran, Buku Besar & Rekonsiliasi', tagline: 'Infrastruktur operasi keuangan untuk perlindungan', description: 'Lapisan operasi keuangan lengkap termasuk pengumpulan premi, manajemen komisi, pembayaran klaim, dan rekonsiliasi multi-pihak.' },
    vi: { name: 'Thanh Toán, Sổ Cái & Đối Soát', tagline: 'Hạ tầng vận hành tài chính cho bảo vệ', description: 'Lớp vận hành tài chính hoàn chỉnh bao gồm thu phí bảo hiểm, quản lý hoa hồng, chi trả bồi thường và đối soát đa bên.' },
    ms: { name: 'Pembayaran, Lejar & Penyesuaian', tagline: 'Infrastruktur operasi kewangan untuk perlindungan', description: 'Lapisan operasi kewangan lengkap termasuk kutipan premium, pengurusan komisen, pembayaran tuntutan dan penyesuaian pelbagai pihak.' },
    es: { name: 'Pagos, Libro Mayor y Conciliación', tagline: 'Infraestructura de operaciones financieras para protección', description: 'Capa completa de operaciones financieras que incluye cobro de primas, gestión de comisiones, pagos de reclamaciones y conciliación multipartita.' },
    fr: { name: 'Paiements, Grand Livre & Réconciliation', tagline: 'Infrastructure d\'opérations financières pour la protection', description: 'Couche complète d\'opérations financières incluant collecte de primes, gestion des commissions, paiements de sinistres et réconciliation multipartite.' },
    de: { name: 'Zahlungen, Hauptbuch & Abstimmung', tagline: 'Finanzoperations-Infrastruktur für Schutz', description: 'Vollständige Finanzoperationsschicht einschließlich Prämieneinzug, Provisionsmanagement, Schadenzahlungen und Multi-Party-Abstimmung.' },
    ar: { name: 'المدفوعات والدفاتر والتسوية', tagline: 'بنية تحتية للعمليات المالية للحماية', description: 'طبقة عمليات مالية كاملة تشمل تحصيل الأقساط وإدارة العمولات ودفع المطالبات والتسوية متعددة الأطراف.' },
  },
  'partner-console': {
    en: { name: 'Partner Console & Reporting', tagline: 'Visibility and control for every stakeholder', description: 'Role-based dashboards for insurers, distribution partners, and internal teams. Real-time analytics, portfolio monitoring, and operational controls.' },
    'zh-TW': { name: '合作夥伴控制台與報告', tagline: '為每位利害關係人提供可視性和控制', description: '為保險公司、分銷合作夥伴和內部團隊提供基於角色的儀表板。即時分析、投資組合監控和營運控制。' },
    'zh-CN': { name: '合作伙伴控制台与报告', tagline: '为每位利益相关者提供可视性和控制', description: '为保险公司、分销合作伙伴和内部团队提供基于角色的仪表板。实时分析、投资组合监控和运营控制。' },
    ja: { name: 'パートナーコンソール＆レポーティング', tagline: 'すべてのステークホルダーへの可視性と制御', description: '保険会社、配信パートナー、内部チーム向けのロールベースダッシュボード。リアルタイム分析、ポートフォリオ監視、運用制御。' },
    ko: { name: '파트너 콘솔 & 리포팅', tagline: '모든 이해관계자를 위한 가시성과 통제', description: '보험사, 유통 파트너, 내부 팀을 위한 역할 기반 대시보드. 실시간 분석, 포트폴리오 모니터링, 운영 통제.' },
    th: { name: 'คอนโซลพันธมิตรและรายงาน', tagline: 'การมองเห็นและการควบคุมสำหรับผู้มีส่วนได้ส่วนเสียทุกราย', description: 'แดชบอร์ดตามบทบาทสำหรับผู้ประกันภัย พันธมิตรการจัดจำหน่าย และทีมภายใน' },
    id: { name: 'Konsol Mitra & Pelaporan', tagline: 'Visibilitas dan kontrol untuk setiap pemangku kepentingan', description: 'Dasbor berbasis peran untuk perusahaan asuransi, mitra distribusi, dan tim internal.' },
    vi: { name: 'Bảng Điều Khiển Đối Tác & Báo Cáo', tagline: 'Khả năng hiển thị và kiểm soát cho mọi bên liên quan', description: 'Bảng điều khiển theo vai trò cho công ty bảo hiểm, đối tác phân phối và đội ngũ nội bộ.' },
    ms: { name: 'Konsol Rakan Kongsi & Pelaporan', tagline: 'Keterlihatan dan kawalan untuk setiap pihak berkepentingan', description: 'Papan pemuka berasaskan peranan untuk syarikat insurans, rakan kongsi pengedaran dan pasukan dalaman.' },
    es: { name: 'Consola de Socios y Reportes', tagline: 'Visibilidad y control para cada parte interesada', description: 'Paneles basados en roles para aseguradoras, socios de distribución y equipos internos.' },
    fr: { name: 'Console Partenaires & Reporting', tagline: 'Visibilité et contrôle pour chaque partie prenante', description: 'Tableaux de bord basés sur les rôles pour assureurs, partenaires de distribution et équipes internes.' },
    de: { name: 'Partner-Konsole & Reporting', tagline: 'Transparenz und Kontrolle für alle Stakeholder', description: 'Rollenbasierte Dashboards für Versicherer, Vertriebspartner und interne Teams.' },
    ar: { name: 'وحدة تحكم الشركاء والتقارير', tagline: 'رؤية وتحكم لكل صاحب مصلحة', description: 'لوحات معلومات قائمة على الأدوار لشركات التأمين وشركاء التوزيع والفرق الداخلية.' },
  },
  'data-governance': {
    en: { name: 'Data Governance & Monitoring', tagline: 'Trust, transparency, and compliance by design', description: 'Enterprise-grade data governance including consent management, data residency controls, model monitoring, and comprehensive audit logging.' },
    'zh-TW': { name: '數據治理與監控', tagline: '信任、透明度和合規設計', description: '企業級數據治理，包括同意管理、數據駐留控制、模型監控和全面審計日誌。' },
    'zh-CN': { name: '数据治理与监控', tagline: '信任、透明度和合规设计', description: '企业级数据治理，包括同意管理、数据驻留控制、模型监控和全面审计日志。' },
    ja: { name: 'データガバナンス＆モニタリング', tagline: '設計による信頼、透明性、コンプライアンス', description: '同意管理、データ居住管理、モデル監視、包括的な監査ログを含む企業グレードのデータガバナンス。' },
    ko: { name: '데이터 거버넌스 & 모니터링', tagline: '설계에 의한 신뢰, 투명성, 컴플라이언스', description: '동의 관리, 데이터 거주 통제, 모델 모니터링, 종합 감사 로깅을 포함한 엔터프라이즈 등급 데이터 거버넌스.' },
    th: { name: 'ธรรมาภิบาลข้อมูลและการตรวจสอบ', tagline: 'ความไว้วางใจ ความโปร่งใส และการปฏิบัติตามข้อกำหนดตั้งแต่การออกแบบ', description: 'ธรรมาภิบาลข้อมูลระดับองค์กร รวมถึงการจัดการความยินยอม การควบคุมที่อยู่ข้อมูล และบันทึกการตรวจสอบ' },
    id: { name: 'Tata Kelola & Pemantauan Data', tagline: 'Kepercayaan, transparansi, dan kepatuhan by design', description: 'Tata kelola data tingkat enterprise termasuk manajemen persetujuan, kontrol residensi data, dan pencatatan audit.' },
    vi: { name: 'Quản Trị & Giám Sát Dữ Liệu', tagline: 'Tin cậy, minh bạch và tuân thủ theo thiết kế', description: 'Quản trị dữ liệu cấp doanh nghiệp bao gồm quản lý đồng ý, kiểm soát lưu trú dữ liệu và ghi nhật ký kiểm toán.' },
    ms: { name: 'Tadbir Urus & Pemantauan Data', tagline: 'Kepercayaan, ketelusan dan pematuhan mengikut reka bentuk', description: 'Tadbir urus data gred perusahaan termasuk pengurusan persetujuan, kawalan residensi data dan pengelogan audit.' },
    es: { name: 'Gobernanza y Monitoreo de Datos', tagline: 'Confianza, transparencia y cumplimiento por diseño', description: 'Gobernanza de datos de nivel empresarial que incluye gestión de consentimiento, controles de residencia de datos y registro de auditoría.' },
    fr: { name: 'Gouvernance & Surveillance des Données', tagline: 'Confiance, transparence et conformité by design', description: 'Gouvernance des données de niveau enterprise incluant gestion du consentement, contrôles de résidence des données et journalisation d\'audit.' },
    de: { name: 'Daten-Governance & Monitoring', tagline: 'Vertrauen, Transparenz und Compliance by Design', description: 'Enterprise-Daten-Governance einschließlich Einwilligungsmanagement, Datenresidenz-Kontrollen und umfassende Audit-Protokollierung.' },
    ar: { name: 'حوكمة ومراقبة البيانات', tagline: 'الثقة والشفافية والامتثال بالتصميم', description: 'حوكمة بيانات بمستوى المؤسسات تشمل إدارة الموافقة وضوابط إقامة البيانات وتسجيل التدقيق الشامل.' },
  },
};

// ──────────────────────────────────────────────
// Metric translations
// ──────────────────────────────────────────────
type MetricL10n = { label: string; context: string; suffix: string };

const metricTranslations: Record<string, Record<Locale, MetricL10n>> = {
  'api-response': {
    en: { label: 'API Response Time', context: 'Average response time for pricing and offer APIs', suffix: 'ms' },
    'zh-TW': { label: 'API 回應時間', context: '定價和報價 API 的平均回應時間', suffix: '毫秒' },
    'zh-CN': { label: 'API 响应时间', context: '定价和报价 API 的平均响应时间', suffix: '毫秒' },
    ja: { label: 'API応答時間', context: '価格設定・オファーAPIの平均応答時間', suffix: 'ミリ秒' },
    ko: { label: 'API 응답 시간', context: '가격 책정 및 제안 API의 평균 응답 시간', suffix: 'ms' },
    th: { label: 'เวลาตอบสนอง API', context: 'เวลาตอบสนองเฉลี่ยสำหรับ API กำหนดราคาและข้อเสนอ', suffix: 'มิลลิวินาที' },
    id: { label: 'Waktu Respons API', context: 'Waktu respons rata-rata untuk API penetapan harga dan penawaran', suffix: 'ms' },
    vi: { label: 'Thời Gian Phản Hồi API', context: 'Thời gian phản hồi trung bình cho API định giá và đề xuất', suffix: 'ms' },
    ms: { label: 'Masa Respons API', context: 'Masa respons purata untuk API penetapan harga dan tawaran', suffix: 'ms' },
    es: { label: 'Tiempo de Respuesta API', context: 'Tiempo de respuesta promedio para APIs de precios y ofertas', suffix: 'ms' },
    fr: { label: 'Temps de Réponse API', context: 'Temps de réponse moyen pour les APIs de tarification et d\'offres', suffix: 'ms' },
    de: { label: 'API-Antwortzeit', context: 'Durchschnittliche Antwortzeit für Preis- und Angebots-APIs', suffix: 'ms' },
    ar: { label: 'زمن استجابة API', context: 'متوسط وقت الاستجابة لواجهات التسعير والعروض', suffix: 'مللي ثانية' },
  },
  'claims-auto': {
    en: { label: 'Claims Automated', context: 'Percentage of claims resolved without manual intervention', suffix: '%' },
    'zh-TW': { label: '自動化理賠', context: '無需人工干預即解決的理賠百分比', suffix: '%' },
    'zh-CN': { label: '自动化理赔', context: '无需人工干预即解决的理赔百分比', suffix: '%' },
    ja: { label: '自動化請求', context: '人的介入なしに解決された請求の割合', suffix: '%' },
    ko: { label: '자동 처리 청구', context: '수동 개입 없이 해결된 청구 비율', suffix: '%' },
    th: { label: 'เคลมอัตโนมัติ', context: 'เปอร์เซ็นต์ของการเคลมที่แก้ไขโดยไม่ต้องมีการแทรกแซงด้วยมือ', suffix: '%' },
    id: { label: 'Klaim Otomatis', context: 'Persentase klaim yang diselesaikan tanpa intervensi manual', suffix: '%' },
    vi: { label: 'Bồi Thường Tự Động', context: 'Tỷ lệ bồi thường được giải quyết không cần can thiệp thủ công', suffix: '%' },
    ms: { label: 'Tuntutan Automatik', context: 'Peratusan tuntutan yang diselesaikan tanpa campur tangan manual', suffix: '%' },
    es: { label: 'Reclamaciones Automatizadas', context: 'Porcentaje de reclamaciones resueltas sin intervención manual', suffix: '%' },
    fr: { label: 'Sinistres Automatisés', context: 'Pourcentage de sinistres résolus sans intervention manuelle', suffix: '%' },
    de: { label: 'Automatisierte Schäden', context: 'Prozentsatz der ohne manuelle Eingriffe gelösten Schäden', suffix: '%' },
    ar: { label: 'مطالبات آلية', context: 'نسبة المطالبات المحلولة دون تدخل يدوي', suffix: '%' },
  },
  'policies-issued': {
    en: { label: 'Policies Processed', context: 'Total policies processed through YAS infrastructure', suffix: 'M+' },
    'zh-TW': { label: '已處理保單', context: '透過 YAS 基礎設施處理的總保單數', suffix: 'M+' },
    'zh-CN': { label: '已处理保单', context: '通过 YAS 基础设施处理的总保单数', suffix: 'M+' },
    ja: { label: '処理済み保険証券', context: 'YASインフラを通じて処理された総保険証券数', suffix: 'M+' },
    ko: { label: '처리된 보험증권', context: 'YAS 인프라를 통해 처리된 총 보험증권 수', suffix: 'M+' },
    th: { label: 'กรมธรรม์ที่ประมวลผล', context: 'จำนวนกรมธรรม์ทั้งหมดที่ประมวลผลผ่านโครงสร้างพื้นฐาน YAS', suffix: 'M+' },
    id: { label: 'Polis Diproses', context: 'Total polis yang diproses melalui infrastruktur YAS', suffix: 'M+' },
    vi: { label: 'Hợp Đồng Đã Xử Lý', context: 'Tổng hợp đồng được xử lý qua hạ tầng YAS', suffix: 'M+' },
    ms: { label: 'Polisi Diproses', context: 'Jumlah polisi yang diproses melalui infrastruktur YAS', suffix: 'M+' },
    es: { label: 'Pólizas Procesadas', context: 'Total de pólizas procesadas a través de la infraestructura YAS', suffix: 'M+' },
    fr: { label: 'Polices Traitées', context: 'Total des polices traitées via l\'infrastructure YAS', suffix: 'M+' },
    de: { label: 'Verarbeitete Policen', context: 'Gesamtzahl der über die YAS-Infrastruktur verarbeiteten Policen', suffix: 'M+' },
    ar: { label: 'الوثائق المعالَجة', context: 'إجمالي الوثائق المعالجة عبر بنية YAS التحتية', suffix: '+M' },
  },
  'payout-time': {
    en: { label: 'Payout Speed', context: 'Average time from claim approval to payout delivery', suffix: 'sec' },
    'zh-TW': { label: '賠付速度', context: '從理賠批准到賠付交付的平均時間', suffix: '秒' },
    'zh-CN': { label: '赔付速度', context: '从理赔批准到赔付交付的平均时间', suffix: '秒' },
    ja: { label: '支払速度', context: '請求承認から支払い完了までの平均時間', suffix: '秒' },
    ko: { label: '지급 속도', context: '청구 승인에서 지급까지 평균 시간', suffix: '초' },
    th: { label: 'ความเร็วการจ่ายเงิน', context: 'เวลาเฉลี่ยจากการอนุมัติการเคลมถึงการจ่ายเงิน', suffix: 'วินาที' },
    id: { label: 'Kecepatan Pembayaran', context: 'Waktu rata-rata dari persetujuan klaim hingga pembayaran', suffix: 'detik' },
    vi: { label: 'Tốc Độ Chi Trả', context: 'Thời gian trung bình từ phê duyệt đến chi trả', suffix: 'giây' },
    ms: { label: 'Kelajuan Pembayaran', context: 'Masa purata dari kelulusan tuntutan hingga pembayaran', suffix: 'saat' },
    es: { label: 'Velocidad de Pago', context: 'Tiempo promedio desde la aprobación hasta la entrega del pago', suffix: 'seg' },
    fr: { label: 'Vitesse de Paiement', context: 'Temps moyen de l\'approbation à la livraison du paiement', suffix: 'sec' },
    de: { label: 'Auszahlungsgeschwindigkeit', context: 'Durchschnittliche Zeit von Genehmigung bis Auszahlung', suffix: 'Sek' },
    ar: { label: 'سرعة الدفع', context: 'متوسط الوقت من الموافقة على المطالبة إلى تسليم الدفع', suffix: 'ثانية' },
  },
  markets: {
    en: { label: 'Markets Ready', context: 'Regulatory frameworks supported across Asia Pacific and beyond', suffix: '+' },
    'zh-TW': { label: '已就緒市場', context: '覆蓋亞太及更廣泛地區的監管框架', suffix: '+' },
    'zh-CN': { label: '已就绪市场', context: '覆盖亚太及更广泛地区的监管框架', suffix: '+' },
    ja: { label: '対応市場', context: 'アジア太平洋およびそれ以外の地域で対応する規制フレームワーク', suffix: '+' },
    ko: { label: '준비된 시장', context: '아시아 태평양 및 그 이상의 지역에서 지원되는 규제 프레임워크', suffix: '+' },
    th: { label: 'ตลาดที่พร้อม', context: 'กรอบกำกับดูแลที่รองรับทั่วเอเชียแปซิฟิกและอื่นๆ', suffix: '+' },
    id: { label: 'Pasar Siap', context: 'Kerangka regulasi yang didukung di seluruh Asia Pasifik dan sekitarnya', suffix: '+' },
    vi: { label: 'Thị Trường Sẵn Sàng', context: 'Khung pháp lý được hỗ trợ trên khắp châu Á-Thái Bình Dương', suffix: '+' },
    ms: { label: 'Pasaran Bersedia', context: 'Rangka kerja kawal selia yang disokong di seluruh Asia Pasifik', suffix: '+' },
    es: { label: 'Mercados Listos', context: 'Marcos regulatorios soportados en Asia Pacífico y más allá', suffix: '+' },
    fr: { label: 'Marchés Prêts', context: 'Cadres réglementaires pris en charge en Asie-Pacifique et au-delà', suffix: '+' },
    de: { label: 'Bereite Märkte', context: 'Regulierungsrahmen im gesamten asiatisch-pazifischen Raum', suffix: '+' },
    ar: { label: 'أسواق جاهزة', context: 'أُطر تنظيمية مدعومة عبر آسيا والمحيط الهادئ وما وراءها', suffix: '+' },
  },
  uptime: {
    en: { label: 'Platform Uptime', context: 'Trailing 12-month platform availability', suffix: '%' },
    'zh-TW': { label: '平台正常運行', context: '過去 12 個月平台可用性', suffix: '%' },
    'zh-CN': { label: '平台正常运行', context: '过去 12 个月平台可用性', suffix: '%' },
    ja: { label: 'プラットフォーム稼働率', context: '過去12ヶ月のプラットフォーム可用性', suffix: '%' },
    ko: { label: '플랫폼 가동률', context: '최근 12개월 플랫폼 가용성', suffix: '%' },
    th: { label: 'เวลาทำงานแพลตฟอร์ม', context: 'ความพร้อมใช้งานแพลตฟอร์ม 12 เดือนย้อนหลัง', suffix: '%' },
    id: { label: 'Waktu Aktif Platform', context: 'Ketersediaan platform 12 bulan terakhir', suffix: '%' },
    vi: { label: 'Thời Gian Hoạt Động', context: 'Khả dụng nền tảng 12 tháng gần nhất', suffix: '%' },
    ms: { label: 'Masa Aktif Platform', context: 'Ketersediaan platform 12 bulan terakhir', suffix: '%' },
    es: { label: 'Tiempo Activo de Plataforma', context: 'Disponibilidad de plataforma en los últimos 12 meses', suffix: '%' },
    fr: { label: 'Disponibilité Plateforme', context: 'Disponibilité de la plateforme sur les 12 derniers mois', suffix: '%' },
    de: { label: 'Plattform-Verfügbarkeit', context: 'Plattformverfügbarkeit der letzten 12 Monate', suffix: '%' },
    ar: { label: 'وقت تشغيل المنصة', context: 'توفر المنصة خلال الـ 12 شهراً الماضية', suffix: '%' },
  },
};

// ──────────────────────────────────────────────
// Solution translations (name + tagline only for cards)
// ──────────────────────────────────────────────
type SolutionL10n = { name: string; tagline: string };

const solutionTranslations: Record<string, Record<Locale, SolutionL10n>> = {
  mobility: {
    en: { name: 'Mobility & Fleets', tagline: 'Protection infrastructure for the future of transportation' },
    'zh-TW': { name: '出行與車隊', tagline: '面向未來交通的保障基礎設施' },
    'zh-CN': { name: '出行与车队', tagline: '面向未来交通的保障基础设施' },
    ja: { name: 'モビリティ＆フリート', tagline: '交通の未来のための保障インフラ' },
    ko: { name: '모빌리티 & 차량', tagline: '미래 교통을 위한 보호 인프라' },
    th: { name: 'การเดินทางและกองยาน', tagline: 'โครงสร้างพื้นฐานการคุ้มครองสำหรับอนาคตของการขนส่ง' },
    id: { name: 'Mobilitas & Armada', tagline: 'Infrastruktur perlindungan untuk masa depan transportasi' },
    vi: { name: 'Di Chuyển & Đội Xe', tagline: 'Hạ tầng bảo vệ cho tương lai giao thông' },
    ms: { name: 'Mobiliti & Armada', tagline: 'Infrastruktur perlindungan untuk masa depan pengangkutan' },
    es: { name: 'Movilidad y Flotas', tagline: 'Infraestructura de protección para el futuro del transporte' },
    fr: { name: 'Mobilité & Flottes', tagline: 'Infrastructure de protection pour le futur du transport' },
    de: { name: 'Mobilität & Flotten', tagline: 'Schutzinfrastruktur für die Zukunft des Transports' },
    ar: { name: 'التنقل والأساطيل', tagline: 'بنية تحتية للحماية لمستقبل النقل' },
  },
  travel: {
    en: { name: 'Travel & Cross-Border', tagline: 'Seamless protection for global travelers' },
    'zh-TW': { name: '旅行與跨境', tagline: '全球旅行者的無縫保障' },
    'zh-CN': { name: '旅行与跨境', tagline: '全球旅行者的无缝保障' },
    ja: { name: 'トラベル＆クロスボーダー', tagline: 'グローバル旅行者のためのシームレスな保障' },
    ko: { name: '여행 & 국경 간', tagline: '글로벌 여행자를 위한 원활한 보호' },
    th: { name: 'การเดินทางและข้ามพรมแดน', tagline: 'การคุ้มครองที่ราบรื่นสำหรับนักเดินทางทั่วโลก' },
    id: { name: 'Perjalanan & Lintas Batas', tagline: 'Perlindungan mulus untuk pelancong global' },
    vi: { name: 'Du Lịch & Xuyên Biên Giới', tagline: 'Bảo vệ liền mạch cho du khách toàn cầu' },
    ms: { name: 'Perjalanan & Rentas Sempadan', tagline: 'Perlindungan lancar untuk pengembara global' },
    es: { name: 'Viajes y Transfronterizo', tagline: 'Protección sin fisuras para viajeros globales' },
    fr: { name: 'Voyage & Transfrontalier', tagline: 'Protection fluide pour les voyageurs internationaux' },
    de: { name: 'Reise & Grenzüberschreitend', tagline: 'Nahtloser Schutz für globale Reisende' },
    ar: { name: 'السفر وعبر الحدود', tagline: 'حماية سلسة للمسافرين حول العالم' },
  },
  marketplaces: {
    en: { name: 'Marketplaces & E-commerce', tagline: 'Embedded protection for digital commerce' },
    'zh-TW': { name: '市場與電商', tagline: '數碼商務的嵌入式保障' },
    'zh-CN': { name: '市场与电商', tagline: '数字商务的嵌入式保障' },
    ja: { name: 'マーケットプレイス＆EC', tagline: 'デジタルコマースのための組込型保障' },
    ko: { name: '마켓플레이스 & 전자상거래', tagline: '디지털 커머스를 위한 임베디드 보호' },
    th: { name: 'ตลาดออนไลน์และอีคอมเมิร์ซ', tagline: 'การคุ้มครองแบบฝังตัวสำหรับการค้าดิจิทัล' },
    id: { name: 'Marketplace & E-commerce', tagline: 'Perlindungan tertanam untuk perdagangan digital' },
    vi: { name: 'Sàn Thương Mại & E-commerce', tagline: 'Bảo vệ tích hợp cho thương mại số' },
    ms: { name: 'Pasaran & E-dagang', tagline: 'Perlindungan terbenam untuk perdagangan digital' },
    es: { name: 'Marketplaces y E-commerce', tagline: 'Protección integrada para el comercio digital' },
    fr: { name: 'Marketplaces & E-commerce', tagline: 'Protection intégrée pour le commerce numérique' },
    de: { name: 'Marktplätze & E-Commerce', tagline: 'Eingebetteter Schutz für den digitalen Handel' },
    ar: { name: 'الأسواق والتجارة الإلكترونية', tagline: 'حماية مدمجة للتجارة الرقمية' },
  },
  'sme-gig': {
    en: { name: 'SME & Gig Protection', tagline: 'Scalable protection for small businesses and gig workers' },
    'zh-TW': { name: '中小企及零工保障', tagline: '面向中小企業和零工從業者的可擴展保障' },
    'zh-CN': { name: '中小企及零工保障', tagline: '面向中小企业和零工从业者的可扩展保障' },
    ja: { name: 'SME＆ギグ保障', tagline: '中小企業とギグワーカーのためのスケーラブルな保障' },
    ko: { name: '중소기업 & 긱 보호', tagline: '중소기업과 긱 근로자를 위한 확장 가능한 보호' },
    th: { name: 'SME และแรงงานกิ๊ก', tagline: 'การคุ้มครองที่ขยายได้สำหรับธุรกิจขนาดเล็กและแรงงานกิ๊ก' },
    id: { name: 'UMKM & Perlindungan Gig', tagline: 'Perlindungan skalabel untuk bisnis kecil dan pekerja gig' },
    vi: { name: 'SME & Bảo Vệ Lao Động Tự Do', tagline: 'Bảo vệ có thể mở rộng cho doanh nghiệp nhỏ và lao động tự do' },
    ms: { name: 'PKS & Perlindungan Gig', tagline: 'Perlindungan berskala untuk perniagaan kecil dan pekerja gig' },
    es: { name: 'PyMEs y Protección Gig', tagline: 'Protección escalable para pequeñas empresas y trabajadores gig' },
    fr: { name: 'PME & Protection Gig', tagline: 'Protection évolutive pour PME et travailleurs indépendants' },
    de: { name: 'KMU & Gig-Schutz', tagline: 'Skalierbarer Schutz für Kleinunternehmen und Gig-Arbeiter' },
    ar: { name: 'المشاريع الصغيرة وحماية العمل المؤقت', tagline: 'حماية قابلة للتوسع للشركات الصغيرة والعمال المؤقتين' },
  },
  devices: {
    en: { name: 'Devices & Robotics', tagline: 'Protection for connected devices and autonomous systems' },
    'zh-TW': { name: '裝置與機器人', tagline: '聯網裝置和自主系統的保障' },
    'zh-CN': { name: '设备与机器人', tagline: '联网设备和自主系统的保障' },
    ja: { name: 'デバイス＆ロボティクス', tagline: 'コネクテッドデバイスと自律システムのための保障' },
    ko: { name: '디바이스 & 로보틱스', tagline: '연결된 디바이스와 자율 시스템을 위한 보호' },
    th: { name: 'อุปกรณ์และหุ่นยนต์', tagline: 'การคุ้มครองสำหรับอุปกรณ์เชื่อมต่อและระบบอัตโนมัติ' },
    id: { name: 'Perangkat & Robotika', tagline: 'Perlindungan untuk perangkat terhubung dan sistem otonom' },
    vi: { name: 'Thiết Bị & Robot', tagline: 'Bảo vệ cho thiết bị kết nối và hệ thống tự động' },
    ms: { name: 'Peranti & Robotik', tagline: 'Perlindungan untuk peranti bersambung dan sistem autonomi' },
    es: { name: 'Dispositivos y Robótica', tagline: 'Protección para dispositivos conectados y sistemas autónomos' },
    fr: { name: 'Appareils & Robotique', tagline: 'Protection pour appareils connectés et systèmes autonomes' },
    de: { name: 'Geräte & Robotik', tagline: 'Schutz für vernetzte Geräte und autonome Systeme' },
    ar: { name: 'الأجهزة والروبوتات', tagline: 'حماية للأجهزة المتصلة والأنظمة المستقلة' },
  },
};

// ─��────────────────────────────────────────────
// Region translations
// ──────────────────────────────────────────────
const regionStatusTranslations: Record<string, Record<Locale, string>> = {
  Active: {
    en: 'Active', 'zh-TW': '已啟用', 'zh-CN': '已启用', ja: '稼働中', ko: '활성', th: 'ใช้งาน', id: 'Aktif', vi: 'Hoạt động', ms: 'Aktif', es: 'Activo', fr: 'Actif', de: 'Aktiv', ar: 'نشط',
  },
  Expanding: {
    en: 'Expanding', 'zh-TW': '擴展中', 'zh-CN': '扩展中', ja: '拡大中', ko: '확장 중', th: 'กำลังขยาย', id: 'Berkembang', vi: 'Đang mở rộng', ms: 'Berkembang', es: 'En expansión', fr: 'En expansion', de: 'In Expansion', ar: 'في التوسع',
  },
  Planned: {
    en: 'Planned', 'zh-TW': '計劃中', 'zh-CN': '计划中', ja: '計画中', ko: '계획 중', th: 'วางแผน', id: 'Direncanakan', vi: 'Đang kế hoạch', ms: 'Dirancang', es: 'Planificado', fr: 'Planifié', de: 'Geplant', ar: 'مخطط',
  },
};

// ──────────────────────────────────────────────
// Leadership role translations
// ──────────────────────────────────────────────
const roleTranslations: Record<string, Record<Locale, string>> = {
  'Co-Founder & CEO': {
    en: 'Co-Founder & CEO', 'zh-TW': '聯合創辦人兼行政總裁', 'zh-CN': '联合创始人兼首席执行官', ja: '共同創業者兼CEO', ko: '공동 창업자 겸 CEO', th: 'ผู้ร่วมก่อตั้งและ CEO', id: 'Co-Founder & CEO', vi: 'Đồng sáng lập & CEO', ms: 'Pengasas Bersama & CEO', es: 'Cofundador y CEO', fr: 'Cofondateur & CEO', de: 'Mitgründer & CEO', ar: 'المؤسس المشارك والرئيس التنفيذي',
  },
  'Co-Founder & COO': {
    en: 'Co-Founder & COO', 'zh-TW': '聯合創辦人兼營運總裁', 'zh-CN': '联合创始人兼首席运营官', ja: '共同創業者兼COO', ko: '공동 창업자 겸 COO', th: 'ผู้ร่วมก่อตั้งและ COO', id: 'Co-Founder & COO', vi: 'Đồng sáng lập & COO', ms: 'Pengasas Bersama & COO', es: 'Cofundador y COO', fr: 'Cofondateur & COO', de: 'Mitgründer & COO', ar: 'المؤسس المشارك ومدير العمليات',
  },
  'Chief Technology Officer': {
    en: 'Chief Technology Officer', 'zh-TW': '技術總監', 'zh-CN': '首席技术官', ja: '最高技術責任者', ko: '최고 기술 책임자', th: 'ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี', id: 'Chief Technology Officer', vi: 'Giám đốc Công nghệ', ms: 'Ketua Pegawai Teknologi', es: 'Director de Tecnología', fr: 'Directeur Technique', de: 'Chief Technology Officer', ar: 'الرئيس التنفيذي للتكنولوجيا',
  },
  'Chief Product Officer': {
    en: 'Chief Product Officer', 'zh-TW': '產品總監', 'zh-CN': '首席产品官', ja: '最高プロダクト責任者', ko: '최고 제품 책임자', th: 'ประธานเจ้าหน้าที่ฝ่ายผลิตภัณฑ์', id: 'Chief Product Officer', vi: 'Giám đốc Sản phẩm', ms: 'Ketua Pegawai Produk', es: 'Director de Producto', fr: 'Directeur Produit', de: 'Chief Product Officer', ar: 'الرئيس التنفيذي للمنتجات',
  },
  'Chief Revenue Officer': {
    en: 'Chief Revenue Officer', 'zh-TW': '營收總監', 'zh-CN': '首席营收官', ja: '最高収益責任者', ko: '최고 매출 책임자', th: 'ประธานเจ้าหน้าที่ฝ่ายรายได้', id: 'Chief Revenue Officer', vi: 'Giám đốc Doanh thu', ms: 'Ketua Pegawai Hasil', es: 'Director de Ingresos', fr: 'Directeur des Revenus', de: 'Chief Revenue Officer', ar: 'الرئيس التنفيذي للإيرادات',
  },
  'Chief Legal & Compliance Officer': {
    en: 'Chief Legal & Compliance Officer', 'zh-TW': '法務合規總監', 'zh-CN': '首席法律与合规官', ja: '最高法務コンプライアンス責任者', ko: '최고 법무 및 준법 책임자', th: 'ประธานเจ้าหน้าที่ฝ่ายกฎหมายและการปฏิบัติตามข้อกำหนด', id: 'Chief Legal & Compliance Officer', vi: 'Giám đốc Pháp lý & Tuân thủ', ms: 'Ketua Pegawai Undang-undang & Pematuhan', es: 'Director Legal y de Cumplimiento', fr: 'Directeur Juridique & Conformité', de: 'Chief Legal & Compliance Officer', ar: 'الرئيس التنفيذي للشؤون القانونية والامتثال',
  },
};

// ──────────────────────────────────────────────
// Public API — localized getters
// ──────────────────────────────────────────────

export function getLocalizedProducts(locale: Locale): CMSProduct[] {
  return baseProducts.map((product) => {
    const l10n = productTranslations[product.id]?.[locale];
    if (!l10n) return product;
    return {
      ...product,
      name: l10n.name,
      tagline: l10n.tagline,
      description: l10n.description,
      outcomes: l10n.outcomes,
    };
  });
}

export function getLocalizedPlatformModules(locale: Locale): CMSPlatformModule[] {
  return basePlatformModules.map((mod) => {
    const l10n = moduleTranslations[mod.id]?.[locale];
    if (!l10n) return mod;
    return {
      ...mod,
      name: l10n.name,
      tagline: l10n.tagline,
      description: l10n.description,
    };
  });
}

export function getLocalizedMetrics(locale: Locale): CMSMetric[] {
  return baseMetrics.map((metric) => {
    const l10n = metricTranslations[metric.id]?.[locale];
    if (!l10n) return metric;
    return {
      ...metric,
      label: l10n.label,
      context: l10n.context,
      suffix: l10n.suffix,
    };
  });
}

export function getLocalizedSolutions(locale: Locale) {
  return baseSolutions.map((solution) => {
    const l10n = solutionTranslations[solution.id]?.[locale];
    if (!l10n) return solution;
    return {
      ...solution,
      name: l10n.name,
      tagline: l10n.tagline,
    };
  });
}

export function getLocalizedRegions(locale: Locale) {
  return baseRegions.map((region) => ({
    ...region,
    /** Original English status key — use for CSS class conditionals */
    statusKey: region.status,
    /** Translated status label — use for display */
    status: regionStatusTranslations[region.status]?.[locale] ?? region.status,
  }));
}

export function getLocalizedLeadership(locale: Locale) {
  return baseLeadership.map((person) => ({
    ...person,
    role: roleTranslations[person.role]?.[locale] ?? person.role,
  }));
}

// Re-export items that don't need localization
export { baseCaseStudies as caseStudies, basePressItems as pressItems };
export { approvedInsurerLogos, approvedCustomerLogos, approvedLogos, logos } from './cms';
