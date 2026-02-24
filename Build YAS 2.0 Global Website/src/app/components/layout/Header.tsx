import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, ArrowRight, Globe, Check } from 'lucide-react';
import { locales } from '../../data/i18n';
import { trackEvent, trackCTAClick } from '../../data/analytics';
import { YasLogoDark } from '../aura/YasLogoDark';
import { useLocale } from '../../hooks/useLocale';

interface HeaderProps {
  onSearchOpen: () => void;
}

interface NavItem {
  key: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export function Header({ onSearchOpen }: HeaderProps) {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpandedNav, setMobileExpandedNav] = useState<string | null>(null);
  const location = useLocation();

  // Build nav items from translations
  const navItems: NavItem[] = [
    {
      key: 'nav.platform',
      href: '/platform',
      children: [
        { label: t('nav.platform') + ' Overview', href: '/platform', description: t('platform.subtitle') },
        { label: 'Risk & Pricing Engine', href: '/platform/risk-pricing-engine' },
        { label: 'Embedded Distribution', href: '/platform/embedded-distribution' },
        { label: 'Policy Issuance & Lifecycle', href: '/platform/policy-issuance' },
        { label: 'Claims & Instant Payouts', href: '/platform/claims-automation' },
        { label: 'Payments & Ledger', href: '/platform/payments-ledger' },
        { label: 'Partner Console', href: '/platform/partner-console' },
        { label: 'Data Governance', href: '/platform/data-governance' },
      ],
    },
    {
      key: 'nav.products',
      href: '/products',
      children: [
        { label: 'Smart Transport', href: '/products/smart-transport' },
        { label: 'Sports & Lifestyle', href: '/products/sports-lifestyle' },
        { label: 'Payments & Wallets', href: '/products/payments-wallets' },
        { label: 'Liquidity & Lending', href: '/products/liquidity-lending' },
      ],
    },
    {
      key: 'nav.solutions',
      href: '/solutions',
      children: [
        { label: 'Mobility & Fleets', href: '/solutions/mobility-fleets' },
        { label: 'Travel & Cross-Border', href: '/solutions/travel-cross-border' },
        { label: 'Marketplaces & E-commerce', href: '/solutions/marketplaces-ecommerce' },
        { label: 'SME & Gig Protection', href: '/solutions/sme-gig-protection' },
        { label: 'Devices & Robotics', href: '/solutions/devices-robotics' },
      ],
    },
    {
      key: 'nav.proof',
      href: '/proof',
      children: [
        { label: t('caseStudies.title'), href: '/proof/case-studies' },
        { label: t('metrics.title'), href: '/proof/outcomes' },
        { label: t('proofPage.press'), href: '/proof/press' },
        { label: t('proofPage.partners'), href: '/proof/partners' },
      ],
    },
    {
      key: 'nav.developers',
      href: '/developers',
      children: [
        { label: 'API Overview', href: '/developers' },
        { label: 'SDKs', href: '/developers/sdks' },
        { label: 'Integration Guides', href: '/developers/guides' },
        { label: 'Sandbox', href: '/developers/sandbox' },
        { label: 'Status', href: '/developers/status' },
      ],
    },
    {
      key: 'nav.trust',
      href: '/trust',
      children: [
        { label: t('footer.security'), href: '/trust/security' },
        { label: t('footer.privacy'), href: '/trust/privacy' },
        { label: t('footer.compliance'), href: '/trust/compliance' },
        { label: 'Model Governance', href: '/trust/model-governance' },
        { label: 'Claims Fairness', href: '/trust/claims-fairness' },
        { label: 'Audit Logs', href: '/trust/audit-logs' },
      ],
    },
    {
      key: 'nav.company',
      href: '/company',
      children: [
        { label: t('companyPage.aboutTitle'), href: '/company/about' },
        { label: t('companyPage.leadershipTitle'), href: '/company/leadership' },
        { label: t('companyPage.careersTitle'), href: '/company/careers' },
        { label: t('companyPage.mediaKit'), href: '/company/media-kit' },
      ],
    },
    { key: 'nav.contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(null);
    setMobileOpen(false);
    setMobileExpandedNav(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(null);
        setMobileOpen(false);
        setLangOpen(false);
      }
    },
    []
  );

  const currentLocaleConfig = locales.find((l) => l.code === locale);

  // CJK locales need tighter nav padding since full-width chars are wider
  const isCJK = locale === 'ja' || locale === 'zh-TW' || locale === 'zh-CN' || locale === 'ko';

  return (
    <header
      onKeyDown={handleKeyDown}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          scrolled
            ? 'border-b shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }
      `}
      style={scrolled ? {
        background: 'rgba(10,10,15,0.45)',
        borderColor: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(60px) saturate(1.8) brightness(1.1)',
        WebkitBackdropFilter: 'blur(60px) saturate(1.8) brightness(1.1)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.06), 0 4px 30px rgba(0,0,0,0.4)',
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => trackEvent('nav_click', { target: 'home' })}>
            <YasLogoDark
              height={40}
              className="transition-all duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => {
              const label = t(item.key as any);
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.children && setMegaOpen(item.key)}
                  onMouseLeave={() => setMegaOpen(null)}
                >
                  <Link
                    to={item.href}
                    className={`
                      inline-flex items-center gap-1 whitespace-nowrap rounded-lg transition-all duration-200
                      ${isCJK ? 'px-2 py-2 text-xs' : 'px-3 py-2 text-sm'}
                      ${
                        location.pathname.startsWith(item.href) && item.href !== '/'
                          ? 'text-white bg-white/[0.04]'
                          : 'text-[#8888a0] hover:text-white hover:bg-white/[0.03]'
                      }
                    `}
                    onClick={() => trackEvent('nav_click', { target: label })}
                  >
                    {label}
                    {item.children && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${megaOpen === item.key ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega menu */}
                  {item.children && megaOpen === item.key && (
                    <div
                      className="absolute top-full left-0 pt-2"
                      style={{ minWidth: '300px' }}
                    >
                      <div
                        className="rounded-2xl p-2 shadow-2xl shadow-black/50"
                        style={{
                          background: 'rgba(14,14,22,0.55)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
                          WebkitBackdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
                          boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
                          animation: 'megaIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.05] group/item"
                            onClick={() => trackEvent('nav_click', { target: child.label })}
                          >
                            <span className="text-white/90 group-hover/item:text-white transition-colors">{child.label}</span>
                            {child.description && (
                              <span className="text-xs text-[#8888a0]/80">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            {/* Search */}
            <button
              onClick={() => {
                onSearchOpen();
                trackEvent('search_open');
              }}
              className="p-2 rounded-lg text-[#8888a0] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              aria-label={t('nav.search')}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[#8888a0] hover:text-white hover:bg-white/[0.04] text-sm transition-all duration-200"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLocaleConfig?.nativeName || locale.toUpperCase()}</span>
                <span className="sm:hidden">{currentLocaleConfig?.flag}</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 z-50 w-72 max-h-[70vh] overflow-y-auto rounded-2xl p-1.5 shadow-2xl shadow-black/50"
                    style={{
                      background: 'rgba(14,14,22,0.55)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
                      WebkitBackdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
                      boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
                      animation: 'megaIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Fully translated header */}
                    <div className="px-3 pt-2 pb-1.5">
                      <p className="text-[10px] uppercase tracking-wider text-[#8888a0]/60">
                        {locale === 'zh-TW' ? '選擇語言' : locale === 'zh-CN' ? '选择语言' : locale === 'ja' ? '言語を選択' : locale === 'vi' ? 'Chọn ngôn ngữ' : locale === 'ko' ? '언어 선택' : locale === 'th' ? 'เลือกภาษา' : locale === 'ar' ? 'اختر اللغة' : 'Select Language'}
                      </p>
                    </div>
                    {locales
                      .map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLocale(l.code);
                            setLangOpen(false);
                            trackEvent('locale_select', { locale: l.code });
                          }}
                          className={`
                            w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-left transition-all duration-200 min-h-[44px]
                            ${locale === l.code ? 'bg-[#33a1de]/10 text-white' : 'text-[#c0c0d0] hover:text-white hover:bg-white/[0.04]'}
                          `}
                        >
                          <span className="text-base">{l.flag}</span>
                          <span className="flex-1">{l.nativeName}</span>
                          {locale === l.code && <Check className="w-4 h-4 text-[#33a1de]" />}
                          <span className="text-xs text-[#8888a0]/60">{l.name}</span>
                        </button>
                      ))}
                  </div>
                </>
              )}
            </div>

            {/* Book a Demo CTA */}
            <Link
              to="/contact"
              onClick={() => trackCTAClick(t('nav.bookDemo'), 'header')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#0a0a0f] text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(51,161,222,0.3)] hover:bg-white/95 active:scale-[0.98]"
            >
              {t('nav.bookDemo')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#8888a0] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 overflow-y-auto overscroll-contain"
          style={{
            background: 'rgba(10,10,15,0.92)',
            backdropFilter: 'blur(60px) saturate(1.8) brightness(1.05)',
            WebkitBackdropFilter: 'blur(60px) saturate(1.8) brightness(1.05)',
            animation: 'mobileMenuIn 280ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <nav className="max-w-lg mx-auto px-5 py-4 space-y-0.5">
            {navItems.map((item) => {
              const label = t(item.key as any);
              const isExpanded = mobileExpandedNav === item.key;
              return (
                <div key={item.key}>
                  {item.children ? (
                    <button
                      onClick={() => setMobileExpandedNav(isExpanded ? null : item.key)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-white rounded-xl hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-150 min-h-[48px]"
                    >
                      <span>{label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-[#8888a0] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center justify-between px-4 py-3.5 text-white rounded-xl hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-150 min-h-[48px]"
                    >
                      <span>{label}</span>
                    </Link>
                  )}
                  {item.children && isExpanded && (
                    <div className="pl-4 space-y-0 mb-1" style={{ animation: 'mobileMenuIn 180ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      {/* Direct link to the section index */}
                      <Link
                        to={item.href}
                        className="flex items-center px-4 py-3 text-sm text-[#33a1de] rounded-xl hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-150 min-h-[44px]"
                      >
                        {label} Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex items-center px-4 py-3 text-sm text-[#8888a0] rounded-xl hover:text-white hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-150 min-h-[44px]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 pb-8">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-white text-[#0a0a0f] transition-all duration-200 active:scale-[0.98] min-h-[48px]"
              >
                {t('mobile.bookDemo')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes megaIn {
          from { opacity: 0; transform: scale(0.97) translateY(-6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}