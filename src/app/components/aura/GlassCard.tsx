import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  glowColor?: string;
  /** Visual intensity: 'subtle' | 'medium' | 'strong' */
  intensity?: 'subtle' | 'medium' | 'strong';
}

/*
 * iOS 26 "Liquid Glass" material system
 * ──────────────────────────────────────
 * • Deep backdrop-blur (40-64px) with saturate + brightness for vibrancy
 * • Ultra-thin borders with luminous edge highlights
 * • Very low-opacity tinted backgrounds for ambient color bleed
 * • Inset highlight on top edge simulates light refraction
 * • Smooth hover: surface brightens, border glows, card lifts
 */
const intensityMap = {
  subtle: {
    bg: 'rgba(255,255,255,0.025)',
    bgHover: 'rgba(255,255,255,0.055)',
    border: 'rgba(255,255,255,0.07)',
    borderHover: 'rgba(255,255,255,0.14)',
    blur: 40,
    saturate: 1.6,
    brightness: 1.05,
    shimmerOpacity: 0.3,
    shadow: '0 2px 20px rgba(0,0,0,0.2)',
    shadowHover: '0 8px 40px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(255,255,255,0.08)',
    edgeHighlight: 0.08,
  },
  medium: {
    bg: 'rgba(255,255,255,0.035)',
    bgHover: 'rgba(255,255,255,0.07)',
    border: 'rgba(255,255,255,0.09)',
    borderHover: 'rgba(255,255,255,0.18)',
    blur: 48,
    saturate: 1.8,
    brightness: 1.08,
    shimmerOpacity: 0.5,
    shadow: '0 4px 24px rgba(0,0,0,0.25), 0 0 0 0.5px rgba(255,255,255,0.04)',
    shadowHover: '0 12px 48px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.1)',
    edgeHighlight: 0.12,
  },
  strong: {
    bg: 'rgba(255,255,255,0.05)',
    bgHover: 'rgba(255,255,255,0.09)',
    border: 'rgba(255,255,255,0.12)',
    borderHover: 'rgba(255,255,255,0.22)',
    blur: 64,
    saturate: 2.0,
    brightness: 1.1,
    shimmerOpacity: 0.7,
    shadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(255,255,255,0.06)',
    shadowHover: '0 16px 56px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.12)',
    edgeHighlight: 0.16,
  },
};

export function GlassCard({
  children,
  className = '',
  hover = true,
  onClick,
  glowColor,
  intensity = 'medium',
}: GlassCardProps) {
  const config = intensityMap[intensity];
  const filterValue = `blur(${config.blur}px) saturate(${config.saturate}) brightness(${config.brightness})`;

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden group
        ${hover ? 'transition-all duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        background: config.bg,
        border: `1px solid ${config.border}`,
        backdropFilter: filterValue,
        WebkitBackdropFilter: filterValue,
        boxShadow: config.shadow,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.background = config.bgHover;
          e.currentTarget.style.borderColor = config.borderHover;
          e.currentTarget.style.boxShadow = config.shadowHover;
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.background = config.bg;
          e.currentTarget.style.borderColor = config.border;
          e.currentTarget.style.boxShadow = config.shadow;
        }
      }}
    >
      {/* iOS 26 top-edge refraction highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[0.5px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 5%, rgba(255,255,255,${config.edgeHighlight}) 20%, rgba(255,255,255,${config.edgeHighlight * 1.5}) 50%, rgba(255,255,255,${config.edgeHighlight}) 80%, transparent 95%)`,
        }}
      />

      {/* Left-edge light refraction (subtle) */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[0.5px] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(255,255,255,${config.edgeHighlight * 0.8}) 0%, rgba(255,255,255,${config.edgeHighlight * 0.3}) 50%, transparent 100%)`,
        }}
      />

      {/* Inner vibrancy tint — iOS 26 "material" layer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(51,161,222,0.03) 0%, transparent 35%, transparent 65%, rgba(46,204,113,0.02) 100%)`,
          opacity: config.shimmerOpacity,
        }}
      />

      {/* Accent glow on hover — iOS 26 subtle color pooling */}
      {hover && glowColor && (
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${glowColor}12 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
