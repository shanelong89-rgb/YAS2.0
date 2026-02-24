import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Truck, Activity, Wallet, Landmark, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { SegmentTabs } from '../components/aura/SegmentTabs';
import { MetricBlock } from '../components/aura/MetricBlock';
import { CTABand } from '../components/aura/CTABand';
import { getLocalizedProducts, getLocalizedMetrics, logos } from '../data/cms-i18n';
import { LogoWall } from '../components/aura/LogoWall';
import { trackCTAClick } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLocale } from '../hooks/useLocale';

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="w-8 h-8" />,
  activity: <Activity className="w-8 h-8" />,
  wallet: <Wallet className="w-8 h-8" />,
  landmark: <Landmark className="w-8 h-8" />,
};

const productImages: Record<string, string> = {
  'smart-transport': 'https://images.unsplash.com/photo-1642331395578-62fc20996c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXhpJTIwZmxlZXQlMjBjaXR5JTIwbmlnaHQlMjB1cmJhbiUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NzA3Mjc3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'sports-lifestyle': 'https://images.unsplash.com/photo-1761026532885-c70637807881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRyZW1lJTIwc3BvcnRzJTIwYWR2ZW50dXJlJTIwbW91bnRhaW4lMjBhY3Rpdml0eXxlbnwxfHx8fDE3NzA3Mjc3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'payments-wallets': 'https://images.unsplash.com/photo-1728044849242-516700295875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwZGlnaXRhbCUyMHdhbGxldCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwNzI3NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'liquidity-lending': 'https://images.unsplash.com/photo-1652337037919-62e284ff2839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjBmaW5hbmNlJTIwdHJhZGluZ3xlbnwxfHx8fDE3NzA3Mjc3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

const productAccents: Record<string, { primary: string; secondary: string }> = {
  'smart-transport': { primary: '#33a1de', secondary: '#2ecc71' },
  'sports-lifestyle': { primary: '#2ecc71', secondary: '#33a1de' },
  'payments-wallets': { primary: '#33a1de', secondary: '#e85d4a' },
  'liquidity-lending': { primary: '#e85d4a', secondary: '#33a1de' },
};

export function ProductsIndexPage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedProducts = getLocalizedProducts(locale);

  return (
    <div className="min-h-screen">
      {/* ── HERO WITH VISUAL CARDS ── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Ambient gradient orbs */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-1/4 w-[500px] h-[350px] rounded-full opacity-30"
              style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.15) 0%, transparent 70%)', animation: 'prodDrift 20s ease-in-out infinite alternate' }} />
            <div className="absolute bottom-20 left-1/3 w-[400px] h-[300px] rounded-full opacity-25"
              style={{ background: 'radial-gradient(ellipse, rgba(46,204,113,0.12) 0%, transparent 70%)', animation: 'prodDrift 18s ease-in-out 2s infinite alternate-reverse' }} />
            <div className="absolute top-1/2 left-1/4 w-[350px] h-[250px] rounded-full opacity-20"
              style={{ background: 'radial-gradient(ellipse, rgba(232,93,74,0.10) 0%, transparent 70%)', animation: 'prodDrift 22s ease-in-out 1s infinite alternate' }} />
          </div>
        )}

        {/* Micro-grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#33a1de] mb-3">{t('productPage.heroKicker')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              {t('productPage.heroTitle')}
            </h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12 leading-relaxed">
              {t('productPage.heroSubtitle')}
            </p>
          </ScrollReveal>

          {/* Product cards with hero images */}
          <div className="grid md:grid-cols-2 gap-6">
            {localizedProducts.map((product, i) => {
              const accent = productAccents[product.slug]?.primary || '#33a1de';
              const img = productImages[product.slug];
              return (
                <ScrollReveal key={product.id} delay={i * 80}>
                  <Link to={`/products/${product.slug}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(20px) saturate(1.3)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
                      }}>
                      {/* Product image */}
                      {img && (
                        <div className="relative h-44 overflow-hidden">
                          <ImageWithFallback src={img} alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                          <div className="absolute bottom-4 left-6">
                            <div style={{ color: accent }} className="mb-2">{iconMap[product.icon] || <Activity className="w-6 h-6" />}</div>
                            <h3 className="text-white text-xl">{product.name}</h3>
                          </div>
                        </div>
                      )}
                      {/* Content */}
                      <div className="p-6 pt-4">
                        <p className="text-sm text-[#8888a0] mb-4">{product.tagline}</p>
                        <ul className="space-y-2 mb-4">
                          {product.outcomes.map((o, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-[#8888a0]">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: accent }} />
                              {o}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-flex items-center gap-1 text-sm" style={{ color: accent }}>
                          {t('inner.explore')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                      {/* Bottom accent line */}
                      <div className="h-[2px] w-full" style={{ background: `linear-gradient(to right, transparent, ${accent}40, transparent)` }} />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes prodDrift {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.1) translate(15px, -10px); }
          }
        `}</style>
      </section>
      <CTABand />
    </div>
  );
}

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedProducts = getLocalizedProducts(locale);
  const localizedMetrics = getLocalizedMetrics(locale);
  const product = localizedProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[#8888a0]">Product not found</p>
      </div>
    );
  }

  const accent = productAccents[product.slug] || { primary: '#33a1de', secondary: '#2ecc71' };
  const heroImg = productImages[product.slug];

  return (
    <div className="min-h-screen">
      {/* ── CINEMATIC PRODUCT HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image */}
        {heroImg && (
          <div className="absolute inset-0 pointer-events-none">
            <ImageWithFallback src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/70 to-[#0a0a0f]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 to-transparent" />
          </div>
        )}

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.12)',
            backdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
            WebkitBackdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pb-16 pt-32 w-full">
          <ScrollReveal>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.products')}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={40}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${accent.primary}15`, color: accent.primary }}>
                {iconMap[product.icon] || <Activity className="w-6 h-6" />}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">{product.name}</h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-4 leading-relaxed">{product.tagline}</p>
            <p className="text-[#8888a0] max-w-3xl mb-4 leading-relaxed">{product.description}</p>
            <p className="text-sm text-[#33a1de]/70 mb-8">Powered by YAS real time risk scoring and partner insurer rails.</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" onClick={() => trackCTAClick('Book a Demo', `product_${product.slug}`)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(51,161,222,0.3)] active:scale-[0.98]">
                {t('inner.bookDemo')} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/developers"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.12] text-white/80 hover:text-white hover:border-white/[0.24] transition-all duration-200">
                {t('inner.apiDocs')} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── KEY OUTCOMES STRIP ── */}
      <section className="py-8 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6 justify-center">
            {product.outcomes.map((outcome, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-center gap-2 text-sm text-[#8888a0]">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: accent.primary }} />
                  {outcome}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGMENT TABS (unique layout with visual cards) ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-2 tracking-tight">{t('productPage.bySegment')}</h2>
            <p className="text-[#8888a0] mb-8">{t('productPage.segmentSubtitle')}</p>
          </ScrollReveal>

          <SegmentTabs productName={product.name}>
            {(segment) => {
              const data = product.segments[segment];
              return (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                    <h3 className="text-white mb-5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: accent.primary }} />
                      {t('productPage.useCases')}
                    </h3>
                    <ul className="space-y-3">
                      {data.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#8888a0]">
                          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 mt-0.5"
                            style={{ background: `${accent.primary}10`, color: accent.primary }}>
                            {i + 1}
                          </span>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                    <h3 className="text-white mb-5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: accent.secondary }} />
                      {t('productPage.features')}
                    </h3>
                    <ul className="space-y-3">
                      {data.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#8888a0]">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent.secondary }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }}
          </SegmentTabs>
        </div>
      </section>

      {/* ── HOW IT WORKS: Visual Process Flow ── */}
      <section className="py-24 border-y border-white/[0.04] relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${accent.primary}04 0%, transparent 50%)` }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-8 tracking-tight">{t('productPage.howItWorks')}</h2>
          </ScrollReveal>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-6 left-0 right-0 h-px"
              style={{ background: `linear-gradient(to right, ${accent.primary}20, ${accent.secondary}20, ${accent.primary}20)` }} />
            <div className="grid sm:grid-cols-3 gap-6">
              {product.outcomes.map((outcome, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative text-center">
                    <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center relative z-10"
                      style={{ background: `${accent.primary}10`, border: `1px solid ${accent.primary}20` }}>
                      <span className="text-sm" style={{ color: accent.primary }}>0{i + 1}</span>
                    </div>
                    <p className="text-white/80 text-sm">{outcome}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-8 tracking-tight">{t('productPage.performanceProof')}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localizedMetrics.slice(0, 3).map((m, i) => (
              <MetricBlock key={m.id} metric={m} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-20 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <LogoWall logos={logos} title={t('productPage.ecosystem')} compact />
        </div>
      </section>

      <CTABand />
    </div>
  );
}