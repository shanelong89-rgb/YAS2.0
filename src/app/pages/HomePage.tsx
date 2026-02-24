import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { MetricBlock } from '../components/aura/MetricBlock';
import { LogoWall } from '../components/aura/LogoWall';
import { SystemDiagram } from '../components/aura/SystemDiagram';
import { CTABand } from '../components/aura/CTABand';
import { MotionReveal } from '../components/aura/MotionReveal';
import { CinematicImage } from '../components/aura/CinematicImage';
import { FloatingParticles } from '../components/aura/FloatingParticles';
import {
  getLocalizedProducts,
  getLocalizedMetrics,
  getLocalizedRegions,
  caseStudies,
  logos,
  approvedInsurerLogos,
} from '../data/cms-i18n';
import { trackCTAClick, trackEvent } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AuraBackground } from '../components/aura/AuraBackground';
import { useLocale } from '../hooks/useLocale';

const heroImage = 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGRhcmt8ZW58MXx8fHwxNzcwNzI1MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const hkImage = 'https://images.unsplash.com/photo-1769978563918-8c407c622f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMG5lb24lMjBjaXR5c2NhcGUlMjBuaWdodCUyMHZpYnJhbnR8ZW58MXx8fHwxNzcwNzg2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const networkImage = 'https://images.unsplash.com/photo-1746470427577-3520a681deab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmx1ZSUyMHB1cnBsZSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcwNzg2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const auroraImage = 'https://images.unsplash.com/photo-1715505535741-e20f2ea6c573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYXVyb3JhJTIwYm9yZWFsaXMlMjBjb2xvcmZ1bCUyMGRhcmt8ZW58MXx8fHwxNzcwNzg2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

// New cinematic images
const lightTrailsImage = 'https://images.unsplash.com/photo-1758468274726-1197049bbfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBsaWdodCUyMHRyYWlscyUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDc5MDU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const cityAerialImage = 'https://images.unsplash.com/photo-1762225121522-3d673eadafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwaW50ZXJzZWN0aW9uJTIwbmlnaHQlMjB0cmFmZmljfGVufDF8fHx8MTc3MDc5MDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const commuterImage = 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwYXBlcndvcmslMjBmcnVzdHJhdGlvbiUyMGJ1cmVhdWNyYWN5JTIwZm9ybXN8ZW58MXx8fHwxNzcwNzkxNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const sgSkylineImage = 'https://images.unsplash.com/photo-1722771919096-0f8a360df980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBza3lsaW5lJTIwbmlnaHQlMjBmaW5hbmNpYWwlMjBkaXN0cmljdHxlbnwxfHx8fDE3NzA3OTA1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const particleNetworkImage = 'https://images.unsplash.com/photo-1759771963975-8a4885746f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcnRpY2xlJTIwbmV0d29yayUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDc5MDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const deliveryRiderImage = 'https://images.unsplash.com/photo-1722985403113-091b05f48755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBydXNoaW5nJTIwY2l0eSUyMG1vdGlvbiUyMGJsdXIlMjB1cmJhbiUyMHNwZWVkfGVufDF8fHx8MTc3MDc5MTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const mobilePaymentImage = 'https://images.unsplash.com/photo-1551182164-8c86fde1af6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3lmdWwlMjBhc2lhbiUyMHdvbWFuJTIwSG9uZyUyMEtvbmclMjBzdHJlZXQlMjBjb25maWRlbnQlMjBjaXR5fGVufDF8fHx8MTc3MDc5MTk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const serverRoomImage = 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwYmx1ZSUyMGxpZ2h0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA3OTA1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function HomePage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();

  // Parse pipe-separated list items
  const nowItems = t('now.items').split('|');
  const nextItems = t('next.items').split('|');

  // Localized CMS content
  const localizedProducts = getLocalizedProducts(locale);
  const localizedMetrics = getLocalizedMetrics(locale);
  const localizedRegions = getLocalizedRegions(locale);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-[#0a0a0f]">

        {/* Aura animated background */}
        <AuraBackground overlayOpacity={0.15} />

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.18)',
            backdropFilter: 'blur(4px) saturate(1.6) brightness(1.05)',
            WebkitBackdropFilter: 'blur(4px) saturate(1.6) brightness(1.05)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#33a1de] mb-4 sm:mb-6">
              {t('hero.kicker')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.08]">
              {t('hero.headline')}
              <br />
              <span className="bg-gradient-to-r from-[#33a1de] via-[#2ecc71] to-[#e85d4a] bg-clip-text text-transparent">{t('hero.headlineGradient')}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="text-base sm:text-lg md:text-xl text-[#a0a0b8] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              {t('hero.subhead')}
              <span className="hidden sm:inline">{t('hero.subheadExtended')}</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                to="/products"
                onClick={() => trackCTAClick(t('hero.cta.primary'), 'hero')}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(51,161,222,0.4)] active:scale-[0.98]"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackCTAClick(t('hero.cta.secondary'), 'hero')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white/80 hover:text-white transition-all duration-200 active:scale-[0.98]"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {t('hero.cta.secondary')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <style>{`
          @keyframes heroDrift {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.15) translate(20px, -10px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .heroDrift { animation: none !important; }
          }
        `}</style>
      </section>

      {/* ── TRUST BAND ── */}
      <section className="relative py-10 sm:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(51,161,222,0.2), rgba(46,204,113,0.15), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.015)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {approvedInsurerLogos.length > 0 && (
              <LogoWall logos={logos.filter((l) => l.type === 'insurer' || l.type === 'reinsurer')} title={t('trust.insurers')} compact />
            )}
            <LogoWall logos={logos.filter((l) => l.type === 'customer' || l.type === 'distribution')} title={t('trust.customers')} compact />
            <ScrollReveal>
              <p className="text-xs text-[#8888a0]/60 text-center mt-4">
                {t('trust.footer')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROBLEM → PROMISE ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(232,93,74,0.04) 0%, transparent 50%)' }} />
        <FloatingParticles count={6} color="#e85d4a" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
          {/* Cinematic lifestyle panel */}
          <MotionReveal type="scale" className="mb-8 sm:mb-12">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-3 sm:gap-4 no-scrollbar">
              <div className="shrink-0 w-[72%] sm:w-auto snap-center">
                <CinematicImage src={commuterImage} alt="Insurance paperwork and bureaucracy" aspect="aspect-[3/4] sm:aspect-[4/5]" overlayOpacity={0.5} tint="#e85d4a" />
              </div>
              <div className="shrink-0 w-[72%] sm:w-auto snap-center">
                <CinematicImage src={deliveryRiderImage} alt="Person in motion through city" aspect="aspect-[3/4] sm:aspect-[4/5]" overlayOpacity={0.5} tint="#33a1de" />
              </div>
              <div className="shrink-0 w-[72%] sm:w-auto snap-center">
                <CinematicImage src={mobilePaymentImage} alt="Joyful person protected by digital infrastructure" aspect="aspect-[3/4] sm:aspect-[4/5]" overlayOpacity={0.5} tint="#2ecc71" />
              </div>
            </div>
            <p className="text-center text-xs text-[#8888a0]/50 mt-3">{t('problem.caption')}</p>
          </MotionReveal>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(40px) saturate(1.6)',
            WebkitBackdropFilter: 'blur(40px) saturate(1.6)',
            boxShadow: '0 0 0 0.5px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.2)',
          }}>
            {/* Problem */}
            <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-white/[0.04]" style={{ background: 'rgba(232,93,74,0.02)' }}>
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#e85d4a]" />
                  <h3 className="text-white">{t('problem.title')}</h3>
                </div>
                <p className="text-sm text-[#9999b0] leading-relaxed">
                  {t('problem.text')}
                </p>
              </ScrollReveal>
            </div>
            {/* Promise */}
            <div className="p-5 sm:p-8" style={{ background: 'rgba(46,204,113,0.02)' }}>
              <ScrollReveal delay={60}>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#2ecc71]" />
                  <h3 className="text-white">{t('promise.title')}</h3>
                </div>
                <p className="text-sm text-[#9999b0] leading-relaxed">
                  {t('promise.text')}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC INFRASTRUCTURE VISUAL ── */}
      <section className="relative py-0 overflow-hidden">
        <MotionReveal type="blur" duration={1.2}>
          <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh]">
            <ImageWithFallback
              src={lightTrailsImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/60" />
            <FloatingParticles count={8} color="#33a1de" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-5 sm:px-6">
                <MotionReveal type="fadeUp" delay={200}>
                  <p className="text-xl sm:text-2xl md:text-4xl text-white/90 tracking-tight">
                    {t('infra.headline')}
                    <span className="bg-gradient-to-r from-[#33a1de] to-[#2ecc71] bg-clip-text text-transparent">{t('infra.headlineGradient')}</span>
                  </p>
                </MotionReveal>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* ── NOW vs NEXT ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(51,161,222,0.04) 0%, transparent 50%)' }} />
        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-8 sm:mb-10 tracking-tight text-center">{t('nowNext.title')}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <ScrollReveal delay={40}>
              <div className="relative p-5 sm:p-8 rounded-2xl h-full" style={{
                background: 'rgba(46,204,113,0.02)',
                border: '1px solid rgba(46,204,113,0.12)',
                backdropFilter: 'blur(40px) saturate(1.6)',
                WebkitBackdropFilter: 'blur(40px) saturate(1.6)',
                boxShadow: '0 0 0 0.5px rgba(46,204,113,0.06), 0 4px 24px rgba(0,0,0,0.15)',
              }}>
                <div className="absolute top-0 left-0 right-0 h-[0.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(46,204,113,0.4), transparent)' }} />
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#2ecc71]" />
                  <h3 className="text-[#2ecc71] text-sm uppercase tracking-wider">{t('now.kicker')}</h3>
                </div>
                <p className="text-white text-sm sm:text-base mb-3 sm:mb-4">{t('now.title')}</p>
                {nowItems.length > 0 && nowItems[0] && (
                  <ul className="space-y-2">
                    {nowItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#9999b0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="relative p-5 sm:p-8 rounded-2xl h-full" style={{
                background: 'rgba(51,161,222,0.02)',
                border: '1px solid rgba(51,161,222,0.12)',
                backdropFilter: 'blur(40px) saturate(1.6)',
                WebkitBackdropFilter: 'blur(40px) saturate(1.6)',
                boxShadow: '0 0 0 0.5px rgba(51,161,222,0.06), 0 4px 24px rgba(0,0,0,0.15)',
              }}>
                <div className="absolute top-0 left-0 right-0 h-[0.5px]" style={{ background: 'linear-gradient(to right, transparent, rgba(51,161,222,0.4), transparent)' }} />
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#33a1de]" />
                  <h3 className="text-[#33a1de] text-sm uppercase tracking-wider">{t('next.kicker')}</h3>
                </div>
                <p className="text-white text-sm sm:text-base mb-3 sm:mb-4">{t('next.title')}</p>
                {nextItems.length > 0 && nextItems[0] && (
                  <ul className="space-y-2">
                    {nextItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#9999b0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#33a1de] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SUITE GRID ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(46,204,113,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de] mb-2 sm:mb-3">{t('products.kicker')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{t('products.title')}</h2>
            <p className="text-[#9999b0] text-sm sm:text-base mb-8 sm:mb-12 max-w-xl">
              {t('products.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {localizedProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 60}>
                <Link to={`/products/${product.slug}`} onClick={() => trackEvent('cta_click', { cta_name: product.name, location: 'product_grid' })}>
                  <GlassCard className="p-5 sm:p-6 h-full" intensity="medium" glowColor="#33a1de">
                    <p className="text-[#33a1de] text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">{product.name}</p>
                    <p className="text-white text-sm sm:text-base mb-3 sm:mb-4">{product.tagline}</p>
                    <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      {product.outcomes.slice(0, 2).map((outcome, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-[#9999b0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#33a1de] mt-1.5 sm:mt-2 shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#33a1de]">
                      {t('common.learnMore')} <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={networkImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(51,161,222,0.04) 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de] mb-2 sm:mb-3">{t('platform.kicker')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{t('platform.title')}</h2>
            <p className="text-[#9999b0] text-sm sm:text-base mb-8 sm:mb-12 max-w-xl">
              {t('platform.subtitle')}
            </p>
          </ScrollReveal>
          <SystemDiagram />
        </div>
      </section>

      {/* ── OUTCOMES METRICS ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={auroraImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.06) 0%, transparent 60%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de] mb-2 sm:mb-3">{t('metrics.kicker')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{t('metrics.title')}</h2>
            <p className="text-[#9999b0] text-sm sm:text-base mb-8 sm:mb-12 max-w-xl">
              {t('metrics.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {localizedMetrics.map((metric, i) => (
              <MetricBlock key={metric.id} metric={metric} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,93,74,0.15), rgba(51,161,222,0.15), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-[500px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(232,93,74,0.04) 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-0 w-[400px] h-[300px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de] mb-2 sm:mb-3">{t('caseStudies.kicker')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{t('caseStudies.title')}</h2>
            <p className="text-[#9999b0] text-sm sm:text-base mb-8 sm:mb-12 max-w-xl">{t('caseStudies.subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {caseStudies
              .filter((cs) => cs.published)
              .map((cs, i) => (
                <ScrollReveal key={cs.id} delay={i * 80}>
                  <Link to={`/proof/case-studies/${cs.slug}`} onClick={() => trackEvent('case_study_open', { case_study: cs.slug })}>
                    <GlassCard className="p-5 sm:p-6 h-full" intensity="medium" glowColor="#e85d4a">
                      <p className="text-xs uppercase tracking-wider text-[#9999b0] mb-2 sm:mb-3">
                        {cs.region} &middot; {cs.industry}
                      </p>
                      <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-3">{cs.title}</h3>
                      <p className="text-[#9999b0] text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-3">{cs.context}</p>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        {cs.results.slice(0, 4).map((r, j) => (
                          <div
                            key={j}
                            className="p-2 sm:p-3 rounded-lg"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            <p className="text-white text-sm sm:text-lg" style={{ fontVariantNumeric: 'tabular-nums' }}>
                              {r.value}
                              <span className="text-[#8888a0] text-xs sm:text-sm ml-0.5 sm:ml-1">{r.suffix}</span>
                            </p>
                            <p className="text-[#8888a0] text-[10px] sm:text-xs leading-snug">{r.label}</p>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#33a1de]">
                        {t('common.readCase')} <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
          </div>

          <LogoWall
            logos={logos.filter((l) => l.type === 'customer')}
            title={t('trust.customers')}
            compact
          />
        </div>
      </section>

      {/* ── GLOBAL READINESS ── */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={hkImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/85 to-[#0a0a0f]" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[300px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(46,204,113,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Globe className="w-4 h-4 text-[#33a1de]" />
              <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de]">{t('global.kicker')}</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{t('global.title')}</h2>
            <p className="text-[#9999b0] text-sm sm:text-base mb-8 sm:mb-12 max-w-xl">
              {t('global.subtitle')}
            </p>
          </ScrollReveal>

          {/* Cinematic dual-city panels */}
          <MotionReveal type="scale" className="mb-8 sm:mb-12">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <CinematicImage src={hkImage} alt="Hong Kong skyline" aspect="aspect-[16/9]" overlayOpacity={0.45} tint="#33a1de" />
              <CinematicImage src={sgSkylineImage} alt="Singapore skyline" aspect="aspect-[16/9]" overlayOpacity={0.45} tint="#2ecc71" />
            </div>
            <p className="text-center text-[10px] sm:text-xs text-[#8888a0]/50 mt-2 sm:mt-3">{t('global.cityCaption')}</p>
          </MotionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-10">
            {localizedRegions.map((region, i) => (
              <ScrollReveal key={region.name} delay={i * 30}>
                <div
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span className="text-white/80 text-xs sm:text-sm">{region.name}</span>
                  <span
                    className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                      region.statusKey === 'Active'
                        ? 'bg-green-500/15 text-green-400'
                        : region.statusKey === 'Expanding'
                        ? 'bg-yellow-500/15 text-yellow-400'
                        : 'bg-white/[0.06] text-[#8888a0]'
                    }`}
                  >
                    {region.status}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <GlassCard hover={false} intensity="medium" className="p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#33a1de] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base">{t('global.regulatory')}</p>
                  <p className="text-xs sm:text-sm text-[#9999b0] leading-relaxed">
                    {t('global.regulatoryExtended')}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <p className="text-xs sm:text-sm text-[#9999b0] mt-4 sm:mt-6">
              <span className="text-white/70">{t('global.languages')}</span>{' '}
              <span className="hidden sm:inline">English, 繁體中文, 简体中文, 日本語, Tiếng Việt, 한국어, ไทย, Bahasa Indonesia, Bahasa Melayu, Español, Français, Deutsch, العربية</span>
              <span className="sm:hidden">EN, 繁中, 简中, 日, VI, 一, TH, ID, MS, ES, FR, DE, AR</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRUST TEASER ── */}
      <section className="relative py-10 sm:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <Link
              to="/trust"
              className="group flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl transition-all duration-[220ms] hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
              }}
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(51,161,222,0.12)' }}
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#33a1de]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white mb-0.5 text-sm sm:text-base">{t('trustTeaser.title')}</p>
                <p className="text-xs sm:text-sm text-[#9999b0]">
                  {t('trustTeaser.subtitle')}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8888a0] group-hover:text-white group-hover:translate-x-1 transition-all duration-[160ms] shrink-0 mt-1 sm:mt-0" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABand />

      {/* Mobile scrollbar-hide utility */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}