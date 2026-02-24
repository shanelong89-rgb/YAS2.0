import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import type { CMSMetric } from '../../data/cms';

interface MetricBlockProps {
  metric: CMSMetric;
  delay?: number;
}

export function MetricBlock({ metric, delay = 0 }: MetricBlockProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delay });
  const decimals = metric.value % 1 !== 0 ? 2 : 0;
  const displayValue = useCountUp(metric.value, isVisible, 1500, decimals);

  return (
    <div
      ref={ref}
      className="relative p-4 sm:p-6 rounded-xl group overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 320ms cubic-bezier(0,0,0.2,1) ${delay}ms, transform 320ms cubic-bezier(0,0,0.2,1) ${delay}ms`,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(20px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Top highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
        }}
      />

      {/* Ambient glow on view */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(51,161,222,0.08) 0%, transparent 70%)',
          opacity: isVisible ? 0.8 : 0,
        }}
      />

      {/* Color accent bar at top */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #33a1de, #2ecc71)',
          opacity: isVisible ? 0.5 : 0,
          transition: `opacity 600ms ease ${delay + 300}ms`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
          {metric.prefix && (
            <span className="text-[#8888a0] text-sm sm:text-base" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {metric.prefix}
            </span>
          )}
          <span
            className="text-2xl sm:text-3xl md:text-4xl text-white tracking-tight"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {displayValue}
          </span>
          <span className="text-[#8888a0] text-xs sm:text-base">{metric.suffix}</span>
        </div>
        <p className="text-white/80 mb-0.5 sm:mb-1 text-sm sm:text-base">{metric.label}</p>
        <p className="text-[#8888a0] text-xs sm:text-sm leading-relaxed">{metric.context}</p>
        {metric.isPlaceholder && (
          <span className="inline-block mt-2 px-2 py-0.5 text-[10px] sm:text-xs rounded bg-white/[0.08] text-[#8888a0]">
            Placeholder — verify before publish
          </span>
        )}
      </div>
    </div>
  );
}