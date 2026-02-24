import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Globe, Clock, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { trackEvent } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLocale } from '../hooks/useLocale';

const hkSkyline = 'https://images.unsplash.com/photo-1673923927302-c4cff7d56c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMHZpY3RvcmlhJTIwaGFyYm91ciUyMHNreWxpbmV8ZW58MXx8fHwxNzcwNzEwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const contactChannels = [
  { icon: <Mail className="w-5 h-5" />, label: 'Partnerships', value: 'partnerships@yas.io', color: '#33a1de' },
  { icon: <Phone className="w-5 h-5" />, label: 'Sales', value: 'sales@yas.io', color: '#2ecc71' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Headquarters', value: 'Hong Kong', color: '#e85d4a' },
  { icon: <Globe className="w-5 h-5" />, label: 'Global Offices', value: 'HK, SG, TH', color: '#33a1de' },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const reducedMotion = useReducedMotion();
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('demo_form_complete', { type: 'contact' });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO WITH HK SKYLINE ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background skyline */}
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={hkSkyline} alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40" />
        </div>

        {/* Subtle warm gradient orb */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full opacity-30"
              style={{ background: 'radial-gradient(ellipse, rgba(232,93,74,0.10) 0%, transparent 60%)' }} />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full opacity-25"
              style={{ background: 'radial-gradient(ellipse, rgba(51,161,222,0.08) 0%, transparent 70%)' }} />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left column: Info (2 cols) */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-[#e85d4a] mb-4">{t('contactPage.heroKicker')}</p>
                <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6 leading-[1.1]">
                  {t('contactPage.heroTitle')}
                  <br />
                  <span className="bg-gradient-to-r from-[#e85d4a] to-[#33a1de] bg-clip-text text-transparent">{t('contactPage.heroGradient')}</span>
                </h1>
                <p className="text-[#8888a0] mb-10 leading-relaxed">
                  {t('contactPage.heroSubtitle')}
                </p>
              </ScrollReveal>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactChannels.map((ch, i) => (
                  <ScrollReveal key={ch.label} delay={40 + i * 40}>
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(16px) saturate(1.3)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
                      }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${ch.color}15`, color: ch.color }}>
                        {ch.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[#9999b0]">{ch.label}</p>
                        <p className="text-white text-sm">{ch.value}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Response time indicator */}
              <ScrollReveal delay={200}>
                <div className="mt-6 flex items-center gap-2 text-xs text-[#8888a0]">
                  <Clock className="w-3.5 h-3.5 text-[#2ecc71]" />
                  {t('contactPage.responseTime')}
                </div>
              </ScrollReveal>
            </div>

            {/* Right column: Form (3 cols) */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={80}>
                <div className="relative p-8 md:p-10 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(24px) saturate(1.4)',
                    WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e85d4a]/30 to-transparent" />

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-white text-2xl mb-3">{t('contactPage.thankYou')}</h3>
                      <p className="text-[#8888a0] max-w-sm mx-auto">
                        {t('contactPage.thankYouMsg')}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl text-white mb-8 tracking-tight">{t('contactPage.formTitle')}</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.firstName')}</label>
                            <input className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/40 outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors" />
                          </div>
                          <div>
                            <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.lastName')}</label>
                            <input className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/40 outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.workEmail')}</label>
                          <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/40 outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.company')}</label>
                          <input className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/40 outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.role')}</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors">
                            <option value="" className="bg-[#111118]">Select your role</option>
                            <option value="insurer" className="bg-[#111118]">Licensed Insurer / Reinsurer</option>
                            <option value="platform" className="bg-[#111118]">Platform / Distribution Partner</option>
                            <option value="developer" className="bg-[#111118]">Developer / Technical Team</option>
                            <option value="enterprise" className="bg-[#111118]">Enterprise / Corporate</option>
                            <option value="other" className="bg-[#111118]">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-[#8888a0] mb-1.5">{t('contactPage.message')}</label>
                          <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/40 outline-none focus:border-[#33a1de]/40 focus:bg-white/[0.06] transition-colors resize-none" />
                        </div>
                        <button type="submit"
                          className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(51,161,222,0.3)] active:scale-[0.98]">
                          {t('contactPage.submit')}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <p className="text-xs text-[#8888a0]/50 text-center">
                          By submitting, you agree to our Privacy Policy. YAS is not meant for collecting PII or securing sensitive data through this form.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}