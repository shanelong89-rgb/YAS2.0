import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ delay });

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 320ms cubic-bezier(0.0, 0.0, 0.2, 1) ${delay}ms, transform 320ms cubic-bezier(0.0, 0.0, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
