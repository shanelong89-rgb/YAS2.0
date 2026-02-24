import React, { useRef, useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>({ threshold: 0.5 });
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current || reducedMotion) {
      if (reducedMotion) setCurrent(target);
      return;
    }
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? current.toFixed(decimals) : Math.round(current)}
      {suffix}
    </span>
  );
}
