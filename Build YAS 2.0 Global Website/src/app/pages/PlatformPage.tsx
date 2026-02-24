import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Brain, Route, FileCheck, Zap, BookOpen, LayoutDashboard, ShieldCheck, Layers, Clock, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { MetricBlock } from '../components/aura/MetricBlock';
import { SystemDiagram } from '../components/aura/SystemDiagram';
import { CTABand } from '../components/aura/CTABand';
import { getLocalizedPlatformModules, getLocalizedMetrics } from '../data/cms-i18n';
import { trackCTAClick } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingParticles } from '../components/aura/FloatingParticles';
import { MotionReveal } from '../components/aura/MotionReveal';
import { useLocale } from '../hooks/useLocale';

const heroImage = 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwYmx1ZSUyMGxpZ2h0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA3OTA1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-6 h-6" />,
  route: <Route className="w-6 h-6" />,
  'file-check': <FileCheck className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  'book-open': <BookOpen className="w-6 h-6" />,
  'layout-dashboard': <LayoutDashboard className="w-6 h-6" />,
  'shield-check': <ShieldCheck className="w-6 h-6" />,
};

const accentColors = ['#33a1de', '#2ecc71', '#e85d4a', '#33a1de', '#2ecc71', '#e85d4a', '#33a1de'];

export function PlatformOverviewPage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedModules = getLocalizedPlatformModules(locale);
  const localizedMetrics = getLocalizedMetrics(locale);

  return (
    <div className="min-h-screen">
      {/* ── CINEMATIC HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.18)',
            backdropFilter: 'blur(4px) saturate(1.6) brightness(1.05)',
            WebkitBackdropFilter: 'blur(4px) saturate(1.6) brightness(1.05)',
          }}
        />

        {/* Blueprint grid */}
        <div className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage: 'linear-gradient(rgba(51,161,222,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(51,161,222,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated circuit lines */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#33a1de]/25 to-transparent"
              style={{ animation: 'circuitPulse 4s ease-in-out infinite' }} />
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ecc71]/20 to-transparent"
              style={{ animation: 'circuitPulse 5s ease-in-out 1s infinite' }} />
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#e85d4a]/12 to-transparent"
              style={{ animation: 'circuitPulse 6s ease-in-out 2s infinite' }} />
          </div>
        )}

        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.08) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(46,204,113,0.05) 0%, transparent 70%)' }} />
        </div>
        <FloatingParticles count={18} color="#33a1de" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-[#33a1de]" />
                  <p className="text-sm uppercase tracking-[0.2em] text-[#33a1de]">{t('nav.platform')}</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]">
                  {t('platformPage.heroTitle')}
                  <br />
                  <span className="bg-gradient-to-r from-[#33a1de] to-[#2ecc71] bg-clip-text text-transparent">{t('platformPage.heroGradient')}</span>
                </h1>
                <p className="text-base sm:text-lg text-[#8888a0] max-w-xl mb-8 leading-relaxed">
                  {t('platformPage.heroSubtitle')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" onClick={() => trackCTAClick('Book a Demo', 'platform_hero')}
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

            {/* Right side: Floating stats cards */}
            <ScrollReveal delay={120}>
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'API Response', value: '< 200ms', color: '#33a1de' },
                    { label: 'Uptime SLA', value: '99.95%', color: '#2ecc71' },
                    { label: 'Claims Auto', value: '92%', color: '#e85d4a' },
                    { label: 'Modules', value: '7', color: '#33a1de' },
                  ].map((stat, i) => (
                    <div key={stat.label}
                      className="p-5 rounded-2xl overflow-hidden"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(20px) saturate(1.3)',
                        WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                        animation: !reducedMotion ? `floatCard 4s ease-in-out ${i * 0.5}s infinite alternate` : 'none',
                      }}>
                      <p className="text-xs text-[#9999b0] mb-1">{stat.label}</p>
                      <p className="text-2xl text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>{stat.value}</p>
                      <div className="w-8 h-0.5 rounded-full mt-2" style={{ background: stat.color, opacity: 0.6 }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @keyframes circuitPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes floatCard {
            from { transform: translateY(0); }
            to { transform: translateY(-6px); }
          }
        `}</style>
      </section>

      {/* ── PIPELINE VISUALIZATION ── */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(51,161,222,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.015)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <p className="text-center text-sm text-[#9999b0] mb-6 sm:mb-8 uppercase tracking-widest">{t('platformPage.pipeline')}</p>
          </ScrollReveal>
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
            {['Signal Ingestion', 'Risk Scoring', 'Policy Issuance', 'Event Monitoring', 'Claims Decision', 'Payout Settlement'].map((step, i) => (
              <ScrollReveal key={step} delay={i * 80}>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="px-4 py-2.5 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      backdropFilter: 'blur(12px)',
                    }}>
                    <span className="text-xs text-[#33a1de] block mb-0.5">0{i + 1}</span>
                    <span className="text-sm text-white whitespace-nowrap">{step}</span>
                  </div>
                  {i < 5 && <ChevronRight className="w-4 h-4 text-[#33a1de]/40 shrink-0" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN PLAIN TERMS (Consumer Layer) ── */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(46,204,113,0.03) 0%, transparent 50%)' }} />
        <div className="max-w-3xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <h2 className="text-2xl text-white mb-8 tracking-tight text-center">{t('platformPage.inPlainTerms')}</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { step: '1', text: 'We read real time context signals — with consent and partner integrations.', color: '#33a1de' },
              { step: '2', text: 'We score risk for that moment.', color: '#2ecc71' },
              { step: '3', text: 'We activate the right coverage instantly.', color: '#e85d4a' },
              { step: '4', text: 'If an insured event happens, we streamline the claim — and where applicable, trigger automated payouts.', color: '#33a1de' },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                    <span className="text-sm" style={{ color: item.color }}>{item.step}</span>
                  </div>
                  <p className="text-[#9999b0] text-sm leading-relaxed pt-1">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA ETHICS & PRIVACY ── */}
      <section className="py-12 sm:py-16 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <ShieldCheck className="w-5 h-5 text-[#2ecc71] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white mb-2">{t('platformPage.dataEthics')}</h3>
                <p className="text-sm text-[#9999b0] leading-relaxed">
                  YAS only uses signals that are relevant to the protection you choose — with consent. We design data minimization into every product and monitor for fairness across all risk models. Personalization focuses on context relevant to the insured event, not irrelevant personal attributes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PLATFORM MODULES: Bento Grid ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.05) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(232,93,74,0.03) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">{t('platformPage.modules')}</h2>
            <p className="text-[#8888a0] mb-12 max-w-xl">{t('platformPage.modulesSubtitle')}</p>
          </ScrollReveal>

          {/* Bento grid layout: large card for first, smaller for rest */}
          <div className="grid md:grid-cols-3 gap-4">
            {localizedModules.map((mod, i) => {
              const accent = accentColors[i] || '#33a1de';
              const isLarge = i === 0 || i === 3;
              return (
                <ScrollReveal key={mod.id} delay={i * 50} className={isLarge ? 'md:col-span-2' : ''}>
                  <Link to={`/platform/${mod.slug}`}>
                    <GlassCard className="p-6 h-full group relative overflow-hidden">
                      {/* Accent glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)` }} />
                      <div className="relative z-10">
                        <div className="mb-4" style={{ color: accent }}>
                          {iconMap[mod.icon] || <Zap className="w-6 h-6" />}
                        </div>
                        <h3 className="text-white mb-2">{mod.name}</h3>
                        <p className="text-sm text-[#8888a0] mb-4">{mod.tagline}</p>
                        {isLarge && (
                          <ul className="space-y-1.5 mb-4">
                            {mod.capabilities.slice(0, 3).map((cap, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-[#8888a0]">
                                <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: accent }} />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs" style={{ color: accent }}>
                          {t('inner.explore')} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SYSTEM ARCHITECTURE ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(51,161,222,0.15), rgba(46,204,113,0.1), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(51,161,222,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">{t('platformPage.architecture')}</h2>
            <p className="text-[#8888a0] mb-12 max-w-xl">Interactive system flow. Click any node to explore the module.</p>
          </ScrollReveal>
          <SystemDiagram />
        </div>
      </section>

      {/* ── PERFORMANCE METRICS ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(46,204,113,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight">{t('platformPage.performance')}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localizedMetrics.map((m, i) => (
              <MetricBlock key={m.id} metric={m} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION TIMELINE ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-4 tracking-tight">{t('platformPage.integration')}</h2>
            <p className="text-[#8888a0] mb-12 max-w-xl">{t('platformPage.integrationSubtitle')}</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Visual Timeline */}
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-[#33a1de]/30 via-[#2ecc71]/30 to-[#e85d4a]/30" />
              {[
                { label: 'API Integration', time: '2-4 weeks', color: '#33a1de' },
                { label: 'SDK Integration', time: '1-2 weeks', color: '#2ecc71' },
                { label: 'Full Platform Deployment', time: '4-8 weeks', color: '#e85d4a' },
                { label: 'Custom Enterprise Setup', time: '8-12 weeks', color: '#33a1de' },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 60}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center border-2"
                      style={{ borderColor: item.color, background: `${item.color}10` }}>
                      <Clock className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{item.label}</span>
                        <span className="text-sm" style={{ color: item.color }}>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* What You Get */}
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full">
                <h3 className="text-white mb-6">{t('platformPage.whatYouGet')}</h3>
                <ul className="space-y-4">
                  {[
                    'Dedicated sandbox environment',
                    'API keys and authentication',
                    'Sample integrations and code',
                    'Technical integration support',
                    'Compliance documentation',
                    'Go-live readiness review',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#8888a0]">
                      <div className="w-5 h-5 rounded-full bg-[#2ecc71]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ecc71]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}

export function PlatformModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const localizedModules = getLocalizedPlatformModules(locale);
  const mod = localizedModules.find((m) => m.slug === slug);
  const modIndex = localizedModules.findIndex((m) => m.slug === slug);
  const accent = accentColors[modIndex] || '#33a1de';

  if (!mod) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[#8888a0]">Module not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero with accent glow */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}08 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <ScrollReveal>
            <Link to="/platform" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.platform')}
            </Link>
            <div className="mb-4" style={{ color: accent }}>{iconMap[mod.icon] || <Zap className="w-8 h-8" />}</div>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-4">{mod.name}</h1>
            <p className="text-lg text-[#8888a0] mb-8 leading-relaxed">{mod.tagline}</p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <p className="text-[#8888a0] leading-relaxed mb-12">{mod.description}</p>
          </ScrollReveal>

          {/* Capabilities as numbered cards */}
          <ScrollReveal delay={100}>
            <h2 className="text-2xl text-white mb-6 tracking-tight">Capabilities</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3 mb-16">
            {mod.capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={120 + i * 40}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:border-white/[0.12] transition-colors duration-200">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0"
                    style={{ background: `${accent}15`, color: accent }}>
                    {i + 1}
                  </span>
                  <p className="text-white/80 text-sm pt-0.5">{cap}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Metrics */}
          <ScrollReveal delay={200}>
            <h2 className="text-2xl text-white mb-6 tracking-tight">Performance</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {getLocalizedMetrics(locale).slice(0, 4).map((m, i) => (
              <MetricBlock key={m.id} metric={m} delay={220 + i * 50} />
            ))}
          </div>

          <CTABand title="Explore This Module" subtitle="See how this module fits into your integration plan." />
        </div>
      </section>
    </div>
  );
}