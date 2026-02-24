import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../../data/analytics';
import { useLocale } from '../../hooks/useLocale';

interface CTABandProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABand({
  title,
  subtitle,
  primaryLabel,
  primaryHref = '/products',
  secondaryLabel,
  secondaryHref = '/contact',
}: CTABandProps) {
  const { t } = useLocale();

  const resolvedTitle = title ?? t('cta.title');
  const resolvedSubtitle = subtitle ?? t('cta.subtitle');
  const resolvedPrimary = primaryLabel ?? t('cta.primary');
  const resolvedSecondary = secondaryLabel ?? t('cta.secondary');

  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      {/* Rich gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(51,161,222,0.08) 0%, rgba(10,10,15,0.95) 30%, rgba(10,10,15,0.95) 70%, rgba(46,204,113,0.06) 100%)',
        }}
      />

      {/* Large ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(51,161,222,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-[500px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(46,204,113,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,93,74,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Micro-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glass container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6">
        <div
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
            WebkitBackdropFilter: 'blur(60px) saturate(1.8) brightness(1.08)',
            boxShadow:
              '0 24px 80px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[0.5px] rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(51,161,222,0.45), rgba(46,204,113,0.35), transparent)',
            }}
          />

          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 tracking-tight">{resolvedTitle}</h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[#a0a0b8] text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto">{resolvedSubtitle}</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                to={primaryHref}
                onClick={() => trackCTAClick(resolvedPrimary, 'cta_band')}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(51,161,222,0.4)] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #e8e8f0 100%)',
                }}
              >
                {resolvedPrimary}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to={secondaryHref}
                onClick={() => trackCTAClick(resolvedSecondary, 'cta_band')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white/80 hover:text-white transition-all duration-200 active:scale-[0.98]"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                {resolvedSecondary}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
