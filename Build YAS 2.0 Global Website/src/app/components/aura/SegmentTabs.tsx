import React, { useState, useRef, useEffect } from 'react';
import { trackEvent } from '../../data/analytics';

type Segment = 'consumer' | 'sme' | 'enterprise';

interface SegmentTabsProps {
  children: (segment: Segment) => React.ReactNode;
  productName?: string;
}

const segments: { key: Segment; label: string }[] = [
  { key: 'consumer', label: 'Consumer' },
  { key: 'sme', label: 'SME' },
  { key: 'enterprise', label: 'Enterprise' },
];

export function SegmentTabs({ children, productName }: SegmentTabsProps) {
  const [active, setActive] = useState<Segment>('consumer');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.querySelector(`[data-segment="${active}"]`) as HTMLElement;
    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  }, [active]);

  const handleSelect = (segment: Segment) => {
    setActive(segment);
    trackEvent('product_segment_tab', { segment, product: productName || '' });
  };

  return (
    <div>
      <div ref={tabsRef} className="relative inline-flex items-center gap-0 p-1 rounded-lg border border-white/[0.10] bg-white/[0.04] mb-8">
        {/* Sliding indicator */}
        <div
          className="absolute top-1 h-[calc(100%-8px)] rounded-md bg-[#33a1de]/15 transition-all duration-[220ms] ease-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
        {segments.map((seg) => (
          <button
            key={seg.key}
            data-segment={seg.key}
            onClick={() => handleSelect(seg.key)}
            className={`
              relative z-10 px-5 py-2 rounded-md text-sm transition-colors duration-[160ms]
              ${active === seg.key ? 'text-white' : 'text-[#8888a0] hover:text-white/70'}
            `}
          >
            {seg.label}
          </button>
        ))}
      </div>
      <div>{children(active)}</div>
    </div>
  );
}