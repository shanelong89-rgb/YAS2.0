import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Brain, Scale, FileText, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { CTABand } from '../components/aura/CTABand';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingParticles } from '../components/aura/FloatingParticles';
import { useLocale } from '../hooks/useLocale';

const securityImage = 'https://images.unsplash.com/photo-1580077910645-a6fd54032e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2hpZWxkJTIwY3liZXJzZWN1cml0eSUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzA3OTA1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const trustAreas = [
  {
    slug: 'security',
    icon: <Lock className="w-6 h-6" />,
    title: 'Security',
    description: 'Enterprise-grade security architecture protecting data at rest and in transit.',
    color: '#33a1de',
    items: [
      'SOC 2 Type II compliance',
      'End-to-end encryption (AES-256 at rest, TLS 1.3 in transit)',
      'Zero-trust network architecture',
      'Continuous vulnerability scanning and penetration testing',
      'Incident response with < 1-hour SLA',
      'Multi-factor authentication for all platform access',
      'IP allowlisting and API key rotation',
      'Audit logging for all data access events',
    ],
  },
  {
    slug: 'privacy',
    icon: <Eye className="w-6 h-6" />,
    title: 'Privacy',
    description: 'Privacy-first design with comprehensive data subject rights and consent management.',
    color: '#2ecc71',
    items: [
      'GDPR and PDPA compliance framework',
      'Privacy by design and default',
      'Consent management platform integration',
      'Data subject access request (DSAR) automation',
      'Data minimization and purpose limitation',
      'Cross-border data transfer controls',
      'Data residency options per jurisdiction',
      'Regular privacy impact assessments',
    ],
  },
  {
    slug: 'compliance',
    icon: <Scale className="w-6 h-6" />,
    title: 'Compliance Posture',
    description: 'Multi-jurisdictional compliance framework supporting regulatory requirements across markets.',
    color: '#e85d4a',
    items: [
      'Multi-jurisdiction regulatory monitoring',
      'Insurance regulatory compliance support',
      'Anti-money laundering (AML) controls',
      'Know Your Customer (KYC) integration',
      'Sanctions screening',
      'Regulatory reporting automation',
      'License and authorization tracking',
      'Regulatory change management process',
    ],
  },
  {
    slug: 'model-governance',
    icon: <Brain className="w-6 h-6" />,
    title: 'Model Governance',
    description: 'Responsible AI practices with explainability, fairness monitoring, and human oversight.',
    color: '#33a1de',
    items: [
      'Model risk management framework',
      'Explainable AI (XAI) outputs for all pricing decisions',
      'Bias detection and fairness monitoring',
      'Model versioning and change control',
      'A/B testing with statistical rigor',
      'Human-in-the-loop for high-impact decisions',
      'Model performance monitoring and drift detection',
      'Regular third-party model audits',
    ],
  },
  {
    slug: 'claims-fairness',
    icon: <Shield className="w-6 h-6" />,
    title: 'Claims Fairness',
    description: 'Fair and transparent claims processing with built-in safeguards against bias.',
    color: '#2ecc71',
    items: [
      'Claims decision explainability',
      'Automated fairness testing across demographics',
      'Appeals and escalation workflows',
      'Human review for denied or flagged claims',
      'Outcome monitoring for disparate impact',
      'Regular claims fairness audits',
      'Policyholder communication standards',
      'Regulatory reporting on claims outcomes',
    ],
  },
  {
    slug: 'audit-logs',
    icon: <FileText className="w-6 h-6" />,
    title: 'Audit Logs & Controls',
    description: 'Comprehensive audit trail with role-based access controls and tamper-proof logging.',
    color: '#e85d4a',
    items: [
      'Immutable audit logs for all system events',
      'Role-based access control (RBAC)',
      'Separation of duties enforcement',
      'Change management and approval workflows',
      'Real-time alerting on anomalous access patterns',
      'Log retention per regulatory requirements',
      'Export and reporting for compliance audits',
      'Third-party audit support and readiness',
    ],
  },
];

export function TrustHubPage() {
  const reducedMotion = useReducedMotion();
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* ── VAULT-STYLE HERO ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={securityImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-12" />
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

        {/* Hexagonal grid */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none opacity-20 z-[2]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                  <path d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z" fill="none" stroke="rgba(51,161,222,0.04)" strokeWidth="0.5" />
                  <path d="M28 36 L56 52 L56 84 L28 100 L0 84 L0 52 Z" fill="none" stroke="rgba(51,161,222,0.04)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexGrid)" />
            </svg>
          </div>
        )}
        <FloatingParticles count={15} color="#33a1de" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#33a1de]" />
                  <p className="text-sm uppercase tracking-[0.2em] text-[#33a1de]">Trust</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]">
                  {t('trustPage.heroTitle')}
                  <br />
                  <span className="bg-gradient-to-r from-[#33a1de] via-[#2ecc71] to-[#33a1de] bg-clip-text text-transparent">{t('trustPage.heroGradient')}</span>
                </h1>
                <p className="text-lg text-[#8888a0] max-w-xl mb-8 leading-relaxed">
                  {t('trustPage.heroSubtitle')}
                </p>
              </ScrollReveal>
            </div>

            {/* Trust badges */}
            <ScrollReveal delay={100}>
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {[
                  { label: 'SOC 2 Type II', icon: <Lock className="w-5 h-5" />, color: '#33a1de' },
                  { label: 'GDPR Compliant', icon: <Eye className="w-5 h-5" />, color: '#2ecc71' },
                  { label: 'Explainable AI', icon: <Brain className="w-5 h-5" />, color: '#e85d4a' },
                  { label: '99.95% Uptime', icon: <Shield className="w-5 h-5" />, color: '#33a1de' },
                ].map((badge, i) => (
                  <div key={badge.label}
                    className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                    style={{ animation: !reducedMotion ? `trustFloat 5s ease-in-out ${i * 0.6}s infinite alternate` : 'none' }}>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${badge.color}08 0%, transparent 70%)` }} />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${badge.color}10`, color: badge.color }}>
                        {badge.icon}
                      </div>
                      <span className="text-white text-sm">{badge.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @keyframes trustFloat {
            from { transform: translateY(0); }
            to { transform: translateY(-6px); }
          }
        `}</style>
      </section>

      {/* ── REGULATORY DISCLAIMER ── */}
      <section className="py-8 border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <Shield className="w-5 h-5 text-[#33a1de] mt-0.5 shrink-0" />
              <p className="text-sm text-[#8888a0] leading-relaxed">
                YAS provides technology infrastructure. Where licensing is required, insurance risk is carried by licensed insurers and reinsurers. This Trust Hub documents the controls, governance, and practices that YAS maintains as a technology platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMMON QUESTIONS (Objections from brief) ── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-10 tracking-tight">{t('trustPage.commonQuestions')}</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {[
              { q: 'Are you an insurance company?', a: 'We work with licensed insurers to underwrite policies. YAS builds the real time risk and distribution layer that makes protection simpler to buy, fairer to price, and easier to manage.' },
              { q: 'Why should I trust dynamic pricing?', a: 'Traditional pricing treats you like an average. Dynamic pricing reflects your real time context, so coverage and price can better match your actual risk in that moment.' },
              { q: 'Are you tracking me?', a: 'We only use signals that are relevant to the protection you choose, with consent, and we design data minimization into every product.' },
              { q: 'Will my price jump unpredictably?', a: 'Pricing is tied to transparent factors, and we design coverage windows and terms so customers understand what changes and when.' },
              { q: 'What happens when something goes wrong?', a: 'Claims have a clear, simple process. When triggers are available, we automate parts of settlement to reduce waiting and paperwork.' },
              { q: 'Is this only for tech-savvy people?', a: 'No. Our goal is to make protection feel as easy as paying for anything else, with simple language and instant activation.' },
              { q: 'Do you replace insurers?', a: 'No. Insurers provide underwriting capacity. YAS provides real time risk scoring, distribution, and automation that improves experience and efficiency.' },
              { q: 'Will personalization discriminate?', a: 'YAS designs personalization around fairness and explainability. We focus on context that is relevant to the insured event, not irrelevant personal attributes.' },
              { q: "What's the difference vs a normal broker?", a: 'A traditional broker distributes products. YAS distributes and also builds the data, pricing, and automation rails that make protection dynamic and embedded inside platforms.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-white hover:bg-white/[0.02] transition-colors list-none">
                    <span className="text-sm">{faq.q}</span>
                    <ArrowRight className="w-4 h-4 text-[#8888a0] rotate-90 group-open:rotate-270 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-[#9999b0] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST AREAS: 2-Column with accent borders ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustAreas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={i * 60}>
                <Link to={`/trust/${area.slug}`} className="group block h-full">
                  <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 h-full overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${area.color}40, transparent)` }} />
                    <div className="mb-4" style={{ color: area.color }}>{area.icon}</div>
                    <h3 className="text-white mb-2">{area.title}</h3>
                    <p className="text-sm text-[#8888a0] mb-5">{area.description}</p>
                    {/* Mini checklist preview */}
                    <div className="space-y-1.5 mb-4">
                      {area.items.slice(0, 3).map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-[#8888a0]/70">
                          <CheckCircle className="w-3 h-3 shrink-0" style={{ color: area.color, opacity: 0.5 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm" style={{ color: area.color }}>
                      View details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Questions About Trust?" subtitle="Contact our security and compliance team for detailed documentation." />
    </div>
  );
}

export function TrustDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = trustAreas.find((a) => a.slug === slug);
  const { t } = useLocale();

  if (!area) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[#8888a0]">Page not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ── HERO with colored accent ── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${area.color}40, transparent)` }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${area.color}06 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative">
          <ScrollReveal>
            <Link to="/trust" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.trust')}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${area.color}10`, color: area.color }}>
                {area.icon}
              </div>
              <h1 className="text-4xl md:text-5xl text-white tracking-tight">{area.title}</h1>
            </div>
            <p className="text-lg text-[#8888a0] mb-12 leading-relaxed">{area.description}</p>
          </ScrollReveal>

          {/* Items as checklist cards */}
          <div className="grid sm:grid-cols-2 gap-3 mb-16">
            {area.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] transition-colors duration-200">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: area.color }} />
                  <p className="text-white/80 text-sm">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Documentation CTA */}
          <ScrollReveal delay={300}>
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${area.color}30, transparent)` }} />
              <h3 className="text-white mb-3">{t('trustPage.documentation')}</h3>
              <p className="text-sm text-[#8888a0] mb-4">
                Detailed documentation is available under NDA for enterprise partners and regulated entities.
              </p>
              <Link to="/contact"
                className="inline-flex items-center gap-1 text-sm hover:gap-2 transition-all"
                style={{ color: area.color }}>
                Request Documentation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTABand />
    </div>
  );
}