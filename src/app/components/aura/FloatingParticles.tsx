import React, { useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  className?: string;
}

export function FloatingParticles({ count = 20, color = '#33a1de', className = '' }: FloatingParticlesProps) {
  const reducedMotion = useReducedMotion();

  // Reduce particle count on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const effectiveCount = isMobile ? Math.min(count, 4) : count;

  const particles = useMemo(() => {
    return Array.from({ length: effectiveCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, [effectiveCount]);

  if (reducedMotion) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <style>{`
        @keyframes floatParticle {
          0% { transform: translate(0, 0); opacity: var(--p-opacity); }
          25% { transform: translate(15px, -30px); opacity: calc(var(--p-opacity) * 1.5); }
          50% { transform: translate(-10px, 10px); opacity: calc(var(--p-opacity) * 0.5); }
          75% { transform: translate(20px, -20px); opacity: calc(var(--p-opacity) * 1.2); }
          100% { transform: translate(0, 0); opacity: var(--p-opacity); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px ${color}40`,
            '--p-opacity': p.opacity,
            animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
