import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { CTABand } from '../components/aura/CTABand';
import { getLocalizedSolutions } from '../data/cms-i18n';
import { trackCTAClick } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLocale } from '../hooks/useLocale';

const solutionImages: Record<string, string> = {
  'mobility-fleets': 'https://images.unsplash.com/photo-1754388088242-9444d5d66710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrJTIwZmxlZXQlMjBhZXJpYWx8ZW58MXx8fHwxNzcwNzI3NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'travel-cross-border': 'https://images.unsplash.com/photo-1730084783279-5b51d3b6d49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhdmVsJTIwZGVwYXJ0dXJlJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzA3Mjc3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'marketplaces-ecommerce': 'https://images.unsplash.com/photo-1539278383962-a7774385fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc3MDcyNzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'sme-gig-protection': 'https://images.unsplash.com/photo-1632901402347-57736746ceb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwZ2lnJTIwd29ya2VyJTIwZGVsaXZlcnklMjBzY29vdGVyfGVufDF8fHx8MTc3MDcyNzcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'devices-robotics': 'https://images.unsplash.com/photo-1768323266311-cf654662e8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRldmljZSUyMHJvYm90aWNzJTIwdGVjaG5vbG9neSUyMGdhZGdldHxlbnwxfHx8fDE3NzA3Mjc3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

const solutionAccents: Record<string, string> = {
  'mobility-fleets': '#33a1de',
  'travel-cross-border': '#2ecc71',
  'marketplaces-ecommerce': '#e85d4a',
  'sme-gig-protection': '#33a1de',
  'devices-robotics': '#2ecc71',
};

export function SolutionsIndexPage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedSolutions = getLocalizedSolutions(locale);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Diagonal gradient stripes */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rotate-12 opacity-5"
              style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(51,161,222,0.1) 40px, rgba(51,161,222,0.1) 42px)' }} />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#2ecc71] mb-3">{t('solutionPage.heroKicker')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              {t('solutionPage.heroTitle')}
              <br />
              <span className="bg-gradient-to-r from-[#2ecc71] to-[#33a1de] bg-clip-text text-transparent">{t('solutionPage.heroGradient')}</span>
            </h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12 leading-relaxed">
              {t('solutionPage.heroSubtitle')}
            </p>
          </ScrollReveal>

          {/* Bridge paragraph */}
          <ScrollReveal delay={40}>
            <div className="mb-12 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-sm text-[#9999b0] leading-relaxed">
                YAS is building real time risk infrastructure. Today, we deliver it through market-ready protection products distributed with licensed partners and insurers. Every policy issued and every claim served improves our ability to price risk more accurately, make coverage fairer, and unlock dynamic protection that matches how people will live in a world of smart devices, robotics, and software agents.
              </p>
            </div>
          </ScrollReveal>

          {/* Solutions as image-backed cards in a staggered grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {localizedSolutions.map((sol, i) => {
              const img = solutionImages[sol.slug];
              const accent = solutionAccents[sol.slug] || '#33a1de';
              return (
                <ScrollReveal key={sol.id} delay={i * 70} className={i === 0 ? 'lg:row-span-2' : ''}>
                  <Link to={`/solutions/${sol.slug}`} className="group block h-full">
                    <div className={`relative rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${i === 0 ? 'h-full' : ''}`}>
                      {/* Image */}
                      {img && (
                        <div className={`relative overflow-hidden ${i === 0 ? 'h-56' : 'h-36'}`}>
                          <ImageWithFallback src={img} alt={sol.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                        </div>
                      )}
                      {/* Content */}
                      <div className="p-5 bg-white/[0.05]">
                        <h3 className="text-white mb-2">{sol.name}</h3>
                        <p className="text-sm text-[#8888a0] mb-3">{sol.tagline}</p>
                        {(i === 0) && (
                          <ul className="space-y-1.5 mb-4">
                            {sol.outcomes.slice(0, 3).map((o, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-[#8888a0]">
                                <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: accent }} />
                                {o}
                              </li>
                            ))}
                          </ul>
                        )}
                        <span className="inline-flex items-center gap-1 text-sm" style={{ color: accent }}>
                          {t('inner.explore')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const solution = getLocalizedSolutions(locale).find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[#8888a0]">Solution not found</p>
      </div>
    );
  }

  const img = solutionImages[solution.slug];
  const accent = solutionAccents[solution.slug] || '#33a1de';

  return (
    <div className="min-h-screen">
      {/* ── HERO WITH INDUSTRY IMAGE ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {img && (
          <div className="absolute inset-0 pointer-events-none">
            <ImageWithFallback src={img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/30" />
          </div>
        )}

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.15)',
            backdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
            WebkitBackdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pb-16 pt-32 w-full">
          <ScrollReveal>
            <Link to="/solutions" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.solutions')}
            </Link>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-4">{solution.name}</h1>
            <p className="text-lg text-[#8888a0] mb-8 leading-relaxed">{solution.tagline}</p>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <Link to="/contact" onClick={() => trackCTAClick('Get Started', `solution_${solution.slug}`)}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(51,161,222,0.3)]">
              {t('inner.getStarted')} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SPLIT-SCREEN: Pains vs Capabilities ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight text-center">{t('solutionPage.challengeVsSolution')}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* Pains - Left side (red tinted) */}
            <div className="p-8 bg-[#e85d4a]/[0.02] border-b md:border-b-0 md:border-r border-white/[0.04]">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#e85d4a]" />
                <h3 className="text-[#e85d4a]/80 text-sm uppercase tracking-wider">{t('solutionPage.challenges')}</h3>
              </div>
              <div className="space-y-3">
                {solution.pains.map((pain, i) => (
                  <ScrollReveal key={i} delay={i * 50}>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#e85d4a]/[0.03] border border-[#e85d4a]/[0.06]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e85d4a]/40 mt-2 shrink-0" />
                      <p className="text-sm text-[#8888a0]">{pain}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Capabilities - Right side (green tinted) */}
            <div className="p-8 bg-[#2ecc71]/[0.02]">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-[#2ecc71]" />
                <h3 className="text-[#2ecc71]/80 text-sm uppercase tracking-wider">{t('solutionPage.capabilities')}</h3>
              </div>
              <div className="space-y-3">
                {solution.capabilities.map((cap, i) => (
                  <ScrollReveal key={i} delay={i * 50}>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#2ecc71]/[0.03] border border-[#2ecc71]/[0.06]">
                      <CheckCircle className="w-4 h-4 text-[#2ecc71]/60 mt-0.5 shrink-0" />
                      <p className="text-sm text-white/80">{cap}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE (vertical with connected line) ── */}
      <section className="py-24 border-y border-white/[0.04] relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 50%, ${accent}04 0%, transparent 50%)` }} />
        <div className="max-w-3xl mx-auto px-6 relative">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight">{t('solutionPage.exampleJourney')}</h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-5 top-6 bottom-6 w-px"
              style={{ background: `linear-gradient(to bottom, ${accent}40, ${accent}10)` }} />
            <div className="space-y-6">
              {solution.journey.map((step, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center relative z-10"
                      style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}>
                      <span className="text-sm" style={{ color: accent }}>{i + 1}</span>
                    </div>
                    <div className="flex-1 p-4 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:border-white/[0.12] transition-colors">
                      <p className="text-white/80 text-sm">{step}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES GRID ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight">{t('solutionPage.outcomes')}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.outcomes.map((outcome, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="relative p-5 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor: `${accent}15`, background: `${accent}03` }}>
                  <div className="absolute top-0 left-0 w-1 h-full rounded-r" style={{ background: accent, opacity: 0.3 }} />
                  <p className="text-white/90 text-sm pl-3">{outcome}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={`Build for ${solution.name}`} subtitle="See how YAS infrastructure can power protection in your industry." />
    </div>
  );
}