import React from 'react';
import { Link } from 'react-router-dom';
import { trackOutboundLink } from '../../data/analytics';
import { YasLogoDark } from '../aura/YasLogoDark';
import { useLocale } from '../../hooks/useLocale';

export function Footer() {
  const { t } = useLocale();

  const footerLinks = [
    {
      title: t('footer.platform'),
      links: [
        { label: 'Overview', href: '/platform' },
        { label: 'Risk & Pricing', href: '/platform/risk-pricing-engine' },
        { label: 'Distribution', href: '/platform/embedded-distribution' },
        { label: 'Claims', href: '/platform/claims-automation' },
        { label: 'Payments', href: '/platform/payments-ledger' },
      ],
    },
    {
      title: t('footer.products'),
      links: [
        { label: 'Smart Transport', href: '/products/smart-transport' },
        { label: 'Sports & Lifestyle', href: '/products/sports-lifestyle' },
        { label: 'Payments & Wallets', href: '/products/payments-wallets' },
        { label: 'Liquidity & Lending', href: '/products/liquidity-lending' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('nav.developers'), href: '/developers' },
        { label: t('caseStudies.title'), href: '/proof/case-studies' },
        { label: 'Press', href: '/proof/press' },
        { label: t('nav.trust'), href: '/trust' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: 'About', href: '/company/about' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Careers', href: '/company/careers' },
        { label: t('nav.contact'), href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border — iOS 26 luminous edge */}
      <div
        className="h-[0.5px] w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(51,161,222,0.35), rgba(46,204,113,0.25), rgba(232,93,74,0.25), transparent)',
        }}
      />

      {/* iOS 26 frosted glass background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(10,10,15,0.50)',
          backdropFilter: 'blur(48px) saturate(1.6) brightness(1.05)',
          WebkitBackdropFilter: 'blur(48px) saturate(1.6) brightness(1.05)',
        }}
      />

      {/* Subtle aurora glow in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(51,161,222,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[400px] h-[250px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(46,204,113,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <YasLogoDark
                height={36}
                className="opacity-90"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#9999b0] leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs sm:text-sm text-white/70 uppercase tracking-wider mb-3 sm:mb-4">{group.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#8888a0] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 sm:pt-8"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Disclaimer */}
          <p className="text-[10px] sm:text-xs text-[#8888a0]/70 mb-4 sm:mb-6 max-w-3xl">
            {t('footer.disclaimer')}
            <span className="hidden sm:inline">{t('footer.disclaimerExtended')}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#8888a0]/60">
              &copy; {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/trust/privacy" className="text-xs text-[#8888a0]/60 hover:text-[#8888a0] transition-colors duration-200">
                {t('footer.privacy')}
              </Link>
              <Link to="/trust/security" className="text-xs text-[#8888a0]/60 hover:text-[#8888a0] transition-colors duration-200">
                {t('footer.security')}
              </Link>
              <Link to="/trust/compliance" className="text-xs text-[#8888a0]/60 hover:text-[#8888a0] transition-colors duration-200">
                {t('footer.compliance')}
              </Link>
              <a
                href="#"
                onClick={() => trackOutboundLink('terms')}
                className="text-xs text-[#8888a0]/60 hover:text-[#8888a0] transition-colors duration-200"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
