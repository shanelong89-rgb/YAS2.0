import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Users, Briefcase, MapPin, Globe, Calendar, Rocket } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { CTABand } from '../components/aura/CTABand';
import { getLocalizedLeadership } from '../data/cms-i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MotionReveal } from '../components/aura/MotionReveal';
import { CinematicImage } from '../components/aura/CinematicImage';
import { FloatingParticles } from '../components/aura/FloatingParticles';
import { useLocale } from '../hooks/useLocale';

const officeImage = 'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0YXJ0dXB8ZW58MXx8fHwxNzcwNzI3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const hkSkyline = 'https://images.unsplash.com/photo-1673923927302-c4cff7d56c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMHZpY3RvcmlhJTIwaGFyYm91ciUyMHNreWxpbmV8ZW58MXx8fHwxNzcwNzEwNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const teamImage = 'https://images.unsplash.com/photo-1727857934741-93f20b9ffe71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBtb2Rlcm4lMjBvZmZpY2UlMjBnbGFzc3xlbnwxfHx8fDE3NzA3OTA1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const futuristicCityImage = 'https://images.unsplash.com/photo-1760013734442-e6adeb26766b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMHNreWxpbmUlMjBkdXNrJTIwZGFya3xlbnwxfHx8fDE3NzA3OTA1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const milestones = [
  { year: '2019', label: 'Founded', description: 'YAS Digital founded in Hong Kong', color: '#33a1de' },
  { year: '2020', label: 'First Partner', description: 'Signed first licensed insurer partner', color: '#2ecc71' },
  { year: '2021', label: 'Platform Launch', description: 'Full platform infrastructure live in production', color: '#e85d4a' },
  { year: '2022', label: 'AlipayHK', description: 'Embedded protection in super app ecosystem', color: '#33a1de' },
  { year: '2023', label: 'Zurich Partnership', description: 'Taxi insurance with Zurich as risk carrier', color: '#2ecc71' },
  { year: '2024', label: 'Series B', description: 'Raised Series B for APAC expansion', color: '#e85d4a' },
  { year: '2025', label: 'Global Expansion', description: 'Expanding to Japan, Korea, and ANZ', color: '#33a1de' },
];

export function AboutPage() {
  const reducedMotion = useReducedMotion();
  const { t, locale } = useLocale();
  const localizedLeadership = getLocalizedLeadership(locale);

  return (
    <div className="min-h-screen">
      {/* ── HERO WITH OFFICE IMAGE ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={officeImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/70 to-[#0a0a0f]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
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

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 py-20">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e85d4a] mb-4">{t('companyPage.aboutKicker')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]">
              {t('companyPage.aboutTitle')}
              <br />
              <span className="bg-gradient-to-r from-[#e85d4a] to-[#33a1de] bg-clip-text text-transparent">YAS</span>
            </h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-8 leading-relaxed">
              YAS is building real time risk infrastructure. We create and distribute innovative protection products through regulated carrier and partner rails, proving value in real customer moments and building revenue and trust.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT YAS IS / IS NOT: Side by Side ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* What YAS Is */}
            <div className="p-5 sm:p-8 bg-[#33a1de]/[0.02] border-b md:border-b-0 md:border-r border-white/[0.04]">
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#33a1de]" />
                  <h3 className="text-white">{t('companyPage.whatYasDoes')}</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Creates and distributes innovative protection products through licensed carriers',
                    'Real time risk scoring and dynamic pricing based on context',
                    'Embedded distribution rails inside partner platforms',
                    'Streamlined claims and automated settlement where applicable',
                    'Partner console, dashboards, and compliance controls',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8888a0]">
                      <div className="w-5 h-5 rounded-full bg-[#33a1de]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#33a1de]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* What YAS Is Not */}
            <div className="p-5 sm:p-8 bg-white/[0.01]">
              <ScrollReveal delay={60}>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#8888a0]" />
                  <h3 className="text-white">{t('companyPage.whatYasIsNot')}</h3>
                </div>
                <p className="text-sm text-[#8888a0] leading-relaxed">
                  YAS is not a licensed insurer. Where licensing is required, insurance risk is carried by licensed insurers and reinsurers. YAS builds the real time risk and distribution technology. We do not replace insurers — we make them more effective with better signals, simpler distribution, and dynamic product infrastructure.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 sm:py-24 border-y border-white/[0.04] relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(232,93,74,0.03) 0%, transparent 50%)' }} />
        <FloatingParticles count={10} color="#e85d4a" />
        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <ScrollReveal>
                <Rocket className="w-8 h-8 text-[#e85d4a] mb-6" />
                <h2 className="text-3xl text-white mb-6 tracking-tight">{t('companyPage.whatWeBelieve')}</h2>
                <p className="text-lg text-[#8888a0] leading-relaxed mb-6">
                  Real time data should make protection fairer, not creepier. Insurance should be seamless and contextual — appearing where the decision happens, not as paperwork after the fact.
                </p>
                <p className="text-[#8888a0] leading-relaxed">
                  We execute by shipping products now, learning from live signals, and expanding the infrastructure. Every policy and claim makes the platform smarter and fairer.
                </p>
              </ScrollReveal>
            </div>
            <MotionReveal type="fadeRight" delay={200}>
              <CinematicImage src={teamImage} alt="YAS team collaboration" aspect="aspect-[4/3]" overlayOpacity={0.4} tint="#e85d4a" />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ── BRIDGE PARAGRAPH ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-[#9999b0] leading-relaxed text-lg">
              YAS is building real time risk infrastructure. Today, we deliver it through market-ready protection products distributed with licensed partners and insurers. Every policy issued and every claim served improves our ability to price risk more accurately, make coverage fairer, and unlock dynamic protection that matches how people will live in a world of smart devices, robotics, and software agents.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHERE WE'RE GOING ── */}
      <section className="py-16 sm:py-24 border-y border-white/[0.04] relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(51,161,222,0.03) 0%, transparent 50%)' }} />
        <FloatingParticles count={10} color="#33a1de" />
        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <MotionReveal type="fadeLeft" delay={100} className="order-2 md:order-1">
              <CinematicImage src={futuristicCityImage} alt="Futuristic city" aspect="aspect-[4/3]" overlayOpacity={0.4} tint="#33a1de" />
            </MotionReveal>
            <div className="order-1 md:order-2">
              <ScrollReveal>
                <Globe className="w-8 h-8 text-[#33a1de] mb-6" />
                <h2 className="text-3xl text-white mb-6 tracking-tight">{t('companyPage.whereWeGo')}</h2>
                <p className="text-lg text-[#8888a0] leading-relaxed">
                  The autonomous economy — agents, devices, robotics, always-on data, always-on risk. We're building the reusable real time risk layer that plugs into platforms, devices, and emerging software agents to enable dynamic underwriting, parametric triggers, and automated settlement at scale.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY TIMELINE ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-12 tracking-tight">{t('companyPage.ourJourney')}</h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-[#33a1de]/30 via-[#2ecc71]/20 to-[#e85d4a]/10" />

            <div className="space-y-8">
              {milestones.map((ms, i) => (
                <ScrollReveal key={ms.year} delay={i * 60}>
                  <div className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center relative z-10"
                      style={{ background: `${ms.color}12`, border: `2px solid ${ms.color}30` }}>
                      <Calendar className="w-4 h-4" style={{ color: ms.color }} />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm" style={{ color: ms.color }}>{ms.year}</span>
                        <span className="text-white">{ms.label}</span>
                      </div>
                      <p className="text-sm text-[#8888a0]">{ms.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRESENCE: Map-style with HK Image ── */}
      <section className="py-16 sm:py-24 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={hkSkyline} alt="" className="absolute inset-0 w-full h-full object-cover opacity-8" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]/70" />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-[#33a1de]" />
              <p className="text-sm uppercase tracking-[0.15em] text-[#33a1de]">Global Presence</p>
            </div>
            <h2 className="text-3xl text-white mb-8 tracking-tight">{t('companyPage.presence')}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Headquarters', value: 'Hong Kong', icon: <MapPin className="w-4 h-4" />, color: '#33a1de' },
              { label: 'Markets Active', value: '7+ jurisdictions', icon: <Globe className="w-4 h-4" />, color: '#2ecc71' },
              { label: 'Expanding To', value: 'Japan, Korea, ANZ', icon: <Rocket className="w-4 h-4" />, color: '#e85d4a' },
            ].map((item) => (
              <ScrollReveal key={item.label}>
                <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <p className="text-xs text-[#8888a0]">{item.label}</p>
                  </div>
                  <p className="text-white text-lg">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}

export function LeadershipPage() {
  const teamColors = ['#33a1de', '#2ecc71', '#e85d4a', '#33a1de', '#2ecc71', '#e85d4a'];
  const { t, locale } = useLocale();
  const localizedLeadership = getLocalizedLeadership(locale);

  // Separate co-founders from placeholder entries
  const coFounders = localizedLeadership.filter((p) => p.name === 'Andy Ann' || p.name === 'William Lee');
  const otherLeaders = localizedLeadership.filter((p) => p.name !== 'Andy Ann' && p.name !== 'William Lee');

  return (
    <div className="min-h-screen">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e85d4a]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e85d4a] mb-3">{t('companyPage.aboutKicker')}</p>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6">{t('companyPage.leadershipTitle')}</h1>
            <p className="text-lg text-[#8888a0] max-w-2xl mb-12">
              {t('companyPage.leadershipSubtitle')}
            </p>
          </ScrollReveal>

          {/* Co-Founders — prominent 2-col layout */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {coFounders.map((person, i) => {
              const color = i === 0 ? '#33a1de' : '#2ecc71';
              return (
                <ScrollReveal key={person.name} delay={i * 80}>
                  <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-0.5">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${color}50, transparent)` }} />
                    {/* Side accent */}
                    <div className="absolute top-0 left-0 bottom-0 w-px"
                      style={{ background: `linear-gradient(to bottom, ${color}40, transparent)` }} />

                    <div className="flex items-start gap-5">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `linear-gradient(135deg, ${color}20, ${color}08)` }}>
                        <span className="text-2xl" style={{ color }}>{person.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-lg mb-1">{person.name}</h3>
                        <p className="text-sm mb-1" style={{ color }}>{person.role}</p>
                        {person.name === 'Andy Ann' && (
                          <a
                            href="https://www.linkedin.com/in/andy-ann"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#8888a0]/60 hover:text-[#33a1de] transition-colors mb-3"
                          >
                            LinkedIn &rarr;
                          </a>
                        )}
                        {person.name === 'William Lee' && (
                          <a
                            href="https://www.linkedin.com/in/inspirewilliamlee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#8888a0]/60 hover:text-[#2ecc71] transition-colors mb-3"
                          >
                            LinkedIn &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-[#9999b0] leading-relaxed mt-5">{person.bio}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Other leadership — 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherLeaders.map((person, i) => {
              const color = teamColors[(i + 2) % teamColors.length];
              return (
                <ScrollReveal key={person.name} delay={(i + 2) * 60}>
                  <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.10] hover:-translate-y-0.5">
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${color}30, transparent)` }} />
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
                      <span className="text-lg" style={{ color }}>{person.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-white mb-1">{person.name}</h3>
                    <p className="text-xs mb-2" style={{ color }}>{person.role}</p>
                    <p className="text-xs text-[#8888a0]">{person.bio}</p>
                  </div>
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

export function CareersPage() {
  const openings = [
    { title: 'Senior Backend Engineer', team: 'Platform', location: 'Hong Kong / Remote', type: 'Full-time', color: '#33a1de' },
    { title: 'ML Engineer - Risk Pricing', team: 'AI & Data', location: 'Hong Kong / Remote', type: 'Full-time', color: '#2ecc71' },
    { title: 'Product Manager - Claims', team: 'Product', location: 'Hong Kong', type: 'Full-time', color: '#e85d4a' },
    { title: 'Frontend Engineer', team: 'Platform', location: 'Hong Kong / Remote', type: 'Full-time', color: '#33a1de' },
    { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time', color: '#2ecc71' },
    { title: 'Compliance Analyst', team: 'Legal & Compliance', location: 'Hong Kong', type: 'Full-time', color: '#e85d4a' },
    { title: 'Solutions Engineer', team: 'Partnerships', location: 'Singapore', type: 'Full-time', color: '#33a1de' },
    { title: 'Technical Writer', team: 'Developer Experience', location: 'Remote', type: 'Contract', color: '#2ecc71' },
  ];
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#2ecc71] mb-3">Company</p>
            <h1 className="text-4xl md:text-5xl text-white tracking-tight mb-6">{t('companyPage.careersTitle')}</h1>
            <p className="text-lg text-[#8888a0] mb-12 leading-relaxed">
              {t('companyPage.careersSubtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={40}>
            <h2 className="text-2xl text-white mb-6 tracking-tight">{t('companyPage.openPositions')}</h2>
          </ScrollReveal>

          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={60 + i * 30}>
                <div className={`group p-5 hover:bg-white/[0.02] transition-colors ${i > 0 ? 'border-t border-white/[0.03]' : ''}`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: job.color }} />
                        <h3 className="text-white">{job.title}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#8888a0]">
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.team}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.04]">{job.type}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-sm" style={{ color: job.color }}>
                      Apply <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Don't See Your Role?" subtitle="We're always looking for exceptional people. Send us your profile." />
    </div>
  );
}

export function MediaKitPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e85d4a] mb-3">Company</p>
            <h1 className="text-4xl text-white tracking-tight mb-6">Media Kit</h1>
            <p className="text-lg text-[#8888a0] mb-12">Brand assets, logos, and guidelines for press and partners.</p>
          </ScrollReveal>

          <div className="space-y-3">
            {[
              { label: 'YAS Logo Pack', description: 'SVG, PNG, and dark/light variants', format: 'ZIP', color: '#33a1de' },
              { label: 'Brand Guidelines', description: 'Colors, typography, usage rules', format: 'PDF', color: '#2ecc71' },
              { label: 'Executive Bios', description: 'Leadership team bios and headshots', format: 'ZIP', color: '#e85d4a' },
              { label: 'Product Screenshots', description: 'Platform and product imagery', format: 'ZIP', color: '#33a1de' },
              { label: 'Fact Sheet', description: 'Company overview and key statistics', format: 'PDF', color: '#2ecc71' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 40}>
                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.10] hover:-translate-y-0.5">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ background: item.color, opacity: 0.3 }} />
                  <div className="flex items-center justify-between pl-3">
                    <div>
                      <h3 className="text-white mb-1">{item.label}</h3>
                      <p className="text-sm text-[#8888a0]">{item.description}</p>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] text-sm text-[#8888a0] hover:text-white hover:border-white/[0.12] transition-all">
                      <Download className="w-3.5 h-3.5" />
                      {item.format}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-12 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="text-white mb-2">Press Inquiries</h3>
              <p className="text-sm text-[#8888a0] mb-4">
                For press inquiries, interviews, or additional assets, contact our communications team.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-[#e85d4a]">
                Contact Press Team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}