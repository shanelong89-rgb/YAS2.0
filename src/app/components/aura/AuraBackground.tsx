import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// ──────────────────────────────────────────────
// AuraBackground — Animated CSS gradient orbs
// Pure CSS implementation with four drifting
// tri-color orbs. No external scripts or WebGL
// required — eliminates curtains.js errors.
// ──────────────────────────────────────────────

interface AuraBackgroundProps {
  /** Extra Tailwind / CSS classes on the wrapper */
  className?: string;
  /** Opacity of the dark vignette overlay drawn on top (0–1). Default 0.35 */
  overlayOpacity?: number;
}

export function AuraBackground({
  className = '',
  overlayOpacity = 0.35,
}: AuraBackgroundProps) {
  const reducedMotion = useReducedMotion();

  // In reduced-motion mode, show a static gradient only
  if (reducedMotion) {
    return (
      <div
        className={`aura-background-component absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(51,161,222,0.18) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(46,204,113,0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(232,93,74,0.10) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`aura-background-component absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 aura-css-fallback">
        <div className="aura-orb aura-orb-blue" />
        <div className="aura-orb aura-orb-green" />
        <div className="aura-orb aura-orb-red" />
        <div className="aura-orb aura-orb-cyan" />
      </div>

      {/* Dark vignette overlay so the animation never overwhelms text */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: `
            radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(10,10,15,${overlayOpacity}) 70%),
            linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, transparent 30%, transparent 70%, rgba(10,10,15,0.6) 100%)
          `,
        }}
      />

      <style>{`
        .aura-css-fallback {
          overflow: hidden;
        }
        .aura-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform, opacity;
        }
        .aura-orb-blue {
          width: 50%;
          height: 60%;
          top: 10%;
          left: 15%;
          background: radial-gradient(circle, rgba(51,161,222,0.35) 0%, rgba(51,161,222,0.08) 60%, transparent 80%);
          animation: auraFloat1 12s ease-in-out infinite alternate;
        }
        .aura-orb-green {
          width: 45%;
          height: 55%;
          top: 30%;
          right: 10%;
          background: radial-gradient(circle, rgba(46,204,113,0.25) 0%, rgba(46,204,113,0.06) 60%, transparent 80%);
          animation: auraFloat2 14s ease-in-out infinite alternate;
        }
        .aura-orb-red {
          width: 40%;
          height: 50%;
          bottom: 5%;
          left: 30%;
          background: radial-gradient(circle, rgba(232,93,74,0.20) 0%, rgba(232,93,74,0.05) 60%, transparent 80%);
          animation: auraFloat3 10s ease-in-out infinite alternate;
        }
        .aura-orb-cyan {
          width: 35%;
          height: 45%;
          top: 5%;
          right: 25%;
          background: radial-gradient(circle, rgba(72,219,251,0.15) 0%, rgba(72,219,251,0.03) 60%, transparent 80%);
          animation: auraFloat4 16s ease-in-out infinite alternate;
        }
        @keyframes auraFloat1 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(40px, -30px) scale(1.15); opacity: 1; }
        }
        @keyframes auraFloat2 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(-35px, 25px) scale(1.1); opacity: 0.95; }
        }
        @keyframes auraFloat3 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.6; }
          100% { transform: translate(25px, -20px) scale(1.2); opacity: 0.85; }
        }
        @keyframes auraFloat4 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.5; }
          100% { transform: translate(-30px, 15px) scale(1.08); opacity: 0.75; }
        }
        @media (prefers-reduced-motion: reduce) {
          .aura-orb { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
