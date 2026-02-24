import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur' | 'stagger';

interface MotionRevealProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const hiddenStyles: Record<AnimationType, React.CSSProperties> = {
  fadeUp: { opacity: 0, transform: 'translateY(40px)' },
  fadeDown: { opacity: 0, transform: 'translateY(-40px)' },
  fadeLeft: { opacity: 0, transform: 'translateX(-60px)' },
  fadeRight: { opacity: 0, transform: 'translateX(60px)' },
  scale: { opacity: 0, transform: 'scale(0.85)' },
  blur: { opacity: 0, filter: 'blur(12px)' },
  stagger: { opacity: 0, transform: 'translateY(30px)' },
};

const visibleStyles: Record<AnimationType, React.CSSProperties> = {
  fadeUp: { opacity: 1, transform: 'translateY(0)' },
  fadeDown: { opacity: 1, transform: 'translateY(0)' },
  fadeLeft: { opacity: 1, transform: 'translateX(0)' },
  fadeRight: { opacity: 1, transform: 'translateX(0)' },
  scale: { opacity: 1, transform: 'scale(1)' },
  blur: { opacity: 1, filter: 'blur(0px)' },
  stagger: { opacity: 1, transform: 'translateY(0)' },
};

export function MotionReveal({
  children,
  type = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}: MotionRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once, threshold: 0.15 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const currentStyle = isVisible ? visibleStyles[type] : hiddenStyles[type];
  const transitionProps = type === 'blur'
    ? `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay / 1000}s, filter ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay / 1000}s`
    : `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay / 1000}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay / 1000}s`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentStyle,
        transition: transitionProps,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
}

/* Stagger container for child animations */
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true, threshold: 0.1 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}s`,
              willChange: 'opacity, transform',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function StaggerChild({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
