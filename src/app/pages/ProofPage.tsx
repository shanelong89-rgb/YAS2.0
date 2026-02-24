import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ExternalLink, Quote, BarChart3, TrendingUp, Award } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { MetricBlock } from '../components/aura/MetricBlock';
import { LogoWall } from '../components/aura/LogoWall';
import { CTABand } from '../components/aura/CTABand';
import { caseStudies, logos, pressItems, getLocalizedMetrics } from '../data/cms-i18n';
import { trackEvent } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLocale } from '../hooks/useLocale';

const proofHeroImage = 'https://images.unsplash.com/photo-1725544014976-5c60cc9fc1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdmlzdWFsaXphdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzcwNzI3NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function CaseStudiesIndexPage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedMetrics = getLocalizedMetrics(locale);

  return (
    <div className="min-h-screen">
      {/* ── HERO WITH FLOATING METRICS ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={proofHeroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
        </div>

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.15)',
            backdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
            WebkitBackdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
          }}
        />

        {/* Data grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-[2]"
          style={{
            backgroundImage: 'linear-gradient(rgba(51,161,222,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(51,161,222,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-[#2ecc71]" />
                  <p className="text-sm uppercase tracking-[0.2em] text-[#2ecc71]">{t('nav.proof')}</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]">
                  {t('proofPage.heroTitle')}
                  <br />
                  <span className="bg-gradient-to-r from-[#2ecc71] to-[#33a1de] bg-clip-text text-transparent">{t('proofPage.heroGradient')}</span>
                </h1>
                <p className="text-lg text-[#8888a0] mb-8 leading-relaxed">
                  {t('proofPage.heroSubtitle')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="flex gap-3">
                  <Link to="/proof/outcomes"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)]">
                    {t('metrics.title')} <TrendingUp className="w-4 h-4" />
                  </Link>
                  <Link to="/proof/partners"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.12] text-white/80 hover:text-white hover:border-white/[0.24] transition-all duration-200">
                    {t('proofPage.partners')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Floating metric cards */}
            <ScrollReveal delay={120}>
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {(() => {
                  const icons = [<BarChart3 className="w-4 h-4" />, <TrendingUp className="w-4 h-4" />, <Award className="w-4 h-4" />, <BarChart3 className="w-4 h-4" />];
                  const colors = ['#33a1de', '#2ecc71', '#e85d4a', '#33a1de'];
                  // Pick first 4 metrics: policies-issued, claims-auto, api-response, uptime
                  const displayIds = ['policies-issued', 'claims-auto', 'api-response', 'uptime'];
                  const selected = displayIds.map((id) => localizedMetrics.find((m) => m.id === id)).filter(Boolean);
                  return selected.map((m, i) => (
                    <div key={m!.id}
                      className="p-5 rounded-2xl border border-white/[0.10] bg-white/[0.05] backdrop-blur-xl"
                      style={{
                        animation: !reducedMotion ? `proofFloat 5s ease-in-out ${i * 0.7}s infinite alternate` : 'none',
                      }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ color: colors[i] }}>{icons[i]}</span>
                        <p className="text-xs text-[#8888a0]">{m!.label}</p>
                      </div>
                      <p className="text-2xl text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {m!.prefix && <span>{m!.prefix} </span>}{m!.value}{m!.suffix}
                      </p>
                    </div>
                  ));
                })()}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @keyframes proofFloat {
            from { transform: translateY(0); }
            to { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* ── CASE STUDIES with image-based cards ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight">{t('caseStudies.title')}</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.filter((cs) => cs.published).map((cs, i) => (
              <ScrollReveal key={cs.id} delay={i * 80}>
                <Link to={`/proof/case-studies/${cs.slug}`}
                  onClick={() => trackEvent('case_study_open', { case_study: cs.slug })}
                  className="group block">
                  <div className="relative rounded-2xl border border-white/[0.10] bg-white/[0.05] overflow-hidden transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    {/* Accent header bar */}
                    <div className="h-1 w-full"
                      style={{ background: i === 0 ? 'linear-gradient(to right, #33a1de, #2ecc71)' : 'linear-gradient(to right, #e85d4a, #33a1de)' }} />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8888a0]">{cs.region}</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8888a0]">{cs.industry}</span>
                      </div>
                      <h3 className="text-white text-lg mb-3 group-hover:text-white/90 transition-colors">{cs.title}</h3>
                      <p className="text-[#8888a0] text-sm mb-6 leading-relaxed">{cs.context}</p>

                      {/* Results as mini bar chart */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {cs.results.map((r, j) => (
                          <div key={j} className="relative p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] overflow-hidden">
                            <div className="absolute bottom-0 left-0 h-0.5 rounded-r"
                              style={{
                                width: `${Math.min(parseInt(r.value.replace(/\D/g, '')) || 50, 100)}%`,
                                background: j % 2 === 0 ? '#33a1de' : '#2ecc71',
                                opacity: 0.3,
                              }} />
                            <p className="text-white text-lg" style={{ fontVariantNumeric: 'tabular-nums' }}>
                              {r.value}<span className="text-[#8888a0] text-sm ml-1">{r.suffix}</span>
                            </p>
                            <p className="text-[#8888a0] text-xs">{r.label}</p>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm text-[#33a1de]">
                        {t('common.readCase')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);
  const { t } = useLocale();

  if (!cs) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[#8888a0]">{t('caseStudy.notFound')}</p>
      </div>
    );
  }

  const accentGrad = cs.slug === 'zurich-taxi-insurance'
    ? 'from-[#33a1de] to-[#2ecc71]'
    : 'from-[#e85d4a] to-[#33a1de]';

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentGrad}`} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(51,161,222,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <ScrollReveal>
            <Link to="/proof/case-studies" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('caseStudies.kicker')}
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8888a0]">{cs.region}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8888a0]">{cs.industry}</span>
            </div>
            <h1 className="text-3xl md:text-4xl text-white tracking-tight mb-4">{cs.title}</h1>
            <p className="text-[#8888a0] mb-2">{t('caseStudy.client')}: <span className="text-white/70">{cs.client}</span></p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RESULTS DASHBOARD (shown prominently at top) ── */}
      <section className="py-12 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.results.map((r, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="relative p-5 rounded-2xl border border-white/[0.10] bg-white/[0.05] overflow-hidden text-center">
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at bottom, ${i % 2 === 0 ? 'rgba(51,161,222,0.04)' : 'rgba(46,204,113,0.04)'} 0%, transparent 70%)` }} />
                  <div className="relative">
                    <p className="text-3xl text-white mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {r.value}<span className="text-[#8888a0] text-sm ml-1">{r.suffix}</span>
                    </p>
                    <p className="text-[#8888a0] text-xs">{r.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NARRATIVE SECTIONS ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Context */}
          <ScrollReveal>
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              <h2 className="text-sm uppercase tracking-wider text-[#33a1de]">{t('caseStudy.context')}</h2>
              <p className="text-[#8888a0] leading-relaxed">{cs.context}</p>
            </div>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal delay={40}>
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              <h2 className="text-sm uppercase tracking-wider text-[#e85d4a]">{t('caseStudy.problem')}</h2>
              <p className="text-[#8888a0] leading-relaxed">{cs.problem}</p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal delay={80}>
            <div className="grid md:grid-cols-[200px_1fr] gap-6">
              <h2 className="text-sm uppercase tracking-wider text-[#2ecc71]">{t('caseStudy.solution')}</h2>
              <p className="text-[#8888a0] leading-relaxed">{cs.solution}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OPERATIONAL FLOW ── */}
      <section className="py-16 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl text-white mb-8 tracking-tight">{t('caseStudy.operationalFlow')}</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[#33a1de]/30 via-[#2ecc71]/20 to-transparent" />
            <div className="space-y-4">
              {cs.operationalFlow.map((step, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center relative z-10 bg-[#33a1de]/8 border border-[#33a1de]/15">
                      <span className="text-sm text-[#33a1de]">{i + 1}</span>
                    </div>
                    <div className="flex-1 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                      <p className="text-white/80 text-sm">{step}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className={`relative p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br ${cs.slug === 'zurich-taxi-insurance' ? 'from-[#33a1de]/[0.03]' : 'from-[#e85d4a]/[0.03]'} to-transparent overflow-hidden`}>
              <Quote className="w-10 h-10 text-white/5 absolute top-6 left-6" />
              <blockquote className="relative z-10 pl-6">
                <p className="text-white text-lg mb-6 italic leading-relaxed">&ldquo;{cs.quote.text}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center text-sm text-[#33a1de]">
                    {cs.quote.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm">{cs.quote.author}</p>
                    <p className="text-[#8888a0] text-xs">{cs.quote.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABand title={t('caseStudy.ctaTitle')} subtitle={t('caseStudy.ctaSubtitle')} />
    </div>
  );
}

export function OutcomesPage() {
  const { t, locale } = useLocale();
  return (
    <div className="min-h-screen">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(46,204,113,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#2ecc71]" />
              <p className="text-sm uppercase tracking-[0.2em] text-[#2ecc71]">{t('nav.proof')}</p>
            </div>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6">{t('metrics.title')}</h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12">{t('metrics.subtitle')}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getLocalizedMetrics(locale).map((m, i) => (
              <MetricBlock key={m.id} metric={m} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function PressPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#33a1de] mb-3">{t('nav.proof')}</p>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6">{t('proofPage.press')}</h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12">{t('proofPage.pressSubtitle')}</p>
          </ScrollReveal>

          <div className="space-y-4">
            {pressItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 60}>
                <a href={item.url} target="_blank" rel="noopener noreferrer"
                  onClick={() => trackEvent('outbound_link', { destination: item.url })}
                  className="group block">
                  <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-0.5">
                    {item.featured && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#33a1de]/30 to-transparent" />
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-[#33a1de]/10 text-[#33a1de]">{item.source}</span>
                          <span className="text-xs text-[#8888a0]">{item.date}</span>
                          {item.featured && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2ecc71]/10 text-[#2ecc71]">{t('proofPage.pressFeatured')}</span>
                          )}
                        </div>
                        <h3 className="text-white mb-2 group-hover:text-white/90">{item.title}</h3>
                        <p className="text-sm text-[#8888a0]">{item.excerpt}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#8888a0] shrink-0 mt-1 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function PartnersPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#33a1de] mb-3">{t('nav.proof')}</p>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6">{t('proofPage.partners')}</h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12">
              {t('proofPage.partnersSubtitle')}
            </p>
          </ScrollReveal>
          <LogoWall logos={logos} showFilters />
        </div>
      </section>
      <CTABand />
    </div>
  );
}