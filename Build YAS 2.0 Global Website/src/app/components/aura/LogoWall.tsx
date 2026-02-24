import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import type { CMSLogo, LogoType } from '../../data/cms';
import { trackEvent } from '../../data/analytics';

interface LogoWallProps {
  logos: CMSLogo[];
  title?: string;
  showFilters?: boolean;
  compact?: boolean;
}

const typeLabels: Record<LogoType, string> = {
  insurer: 'Insurers',
  reinsurer: 'Reinsurers',
  distribution: 'Distribution',
  customer: 'Customers',
};

export function LogoWall({ logos, title, showFilters = false, compact = false }: LogoWallProps) {
  const [activeType, setActiveType] = useState<LogoType | 'all'>('all');
  const [activeRegion, setActiveRegion] = useState<string>('all');

  // Only render approved logos
  const approved = logos.filter((l) => l.approvalStatus);

  const allRegions = [...new Set(approved.flatMap((l) => l.regionTags))];
  const allTypes = [...new Set(approved.map((l) => l.type))] as LogoType[];

  const filtered = approved.filter((l) => {
    if (activeType !== 'all' && l.type !== activeType) return false;
    if (activeRegion !== 'all' && !l.regionTags.includes(activeRegion)) return false;
    return true;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    trackEvent('logo_wall_filter', { filter_type: filterType, value });
  };

  return (
    <div>
      {title && (
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-[#8888a0] mb-6">{title}</p>
        </ScrollReveal>
      )}

      {showFilters && (
        <ScrollReveal delay={40}>
          <div className="flex flex-wrap gap-2 mb-8">
            <FilterPill
              active={activeType === 'all'}
              onClick={() => {
                setActiveType('all');
                handleFilterChange('type', 'all');
              }}
            >
              All
            </FilterPill>
            {allTypes.map((type) => (
              <FilterPill
                key={type}
                active={activeType === type}
                onClick={() => {
                  setActiveType(type);
                  handleFilterChange('type', type);
                }}
              >
                {typeLabels[type]}
              </FilterPill>
            ))}
            <span className="w-px h-6 bg-white/10 mx-2 self-center" />
            <FilterPill
              active={activeRegion === 'all'}
              onClick={() => {
                setActiveRegion('all');
                handleFilterChange('region', 'all');
              }}
            >
              All Regions
            </FilterPill>
            {allRegions.map((region) => (
              <FilterPill
                key={region}
                active={activeRegion === region}
                onClick={() => {
                  setActiveRegion(region);
                  handleFilterChange('region', region);
                }}
              >
                {region}
              </FilterPill>
            ))}
          </div>
        </ScrollReveal>
      )}

      <div className={`grid ${compact ? 'grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4'}`}>
        {filtered
          .sort((a, b) => a.featuredPriority - b.featuredPriority)
          .map((logo, i) => (
            <ScrollReveal key={logo.id} delay={i * 50}>
              <div
                className={`
                  group relative flex items-center justify-center
                  ${compact ? 'h-12 sm:h-16' : 'h-16 sm:h-20'} 
                  rounded-lg
                  transition-all duration-[220ms] ease-out
                  hover:-translate-y-0.5
                `}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {logo.assetUrl ? (
                  <img
                    src={logo.assetUrl}
                    alt={logo.name}
                    className="max-h-6 sm:max-h-8 max-w-[80%] object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-[160ms]"
                    style={{ filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' }}
                  />
                ) : (
                  <span className="text-[#8888a0] text-xs sm:text-sm group-hover:text-white/70 transition-colors duration-[160ms] text-center px-1">
                    {logo.name}
                  </span>
                )}
                {logo.hasCaseStudy && (
                  <span className="absolute bottom-1 right-1 text-[10px] text-[#33a1de] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Case Study
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
      </div>
    </div>
  );
}

function FilterPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-3 py-1 text-sm rounded-full border transition-all duration-[160ms] ease-out
        ${
          active
            ? 'border-[#33a1de]/40 bg-[#33a1de]/10 text-white'
            : 'border-white/[0.06] bg-transparent text-[#8888a0] hover:text-white hover:border-white/[0.12]'
        }
      `}
    >
      {children}
    </button>
  );
}