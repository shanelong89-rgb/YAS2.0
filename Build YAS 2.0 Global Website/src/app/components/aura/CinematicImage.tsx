import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CinematicImageProps {
  src: string;
  alt?: string;
  /** 0-1, how transparent the overlay. Higher = more darkened */
  overlayOpacity?: number;
  /** Parallax intensity in px */
  parallax?: number;
  /** Gradient direction for the overlay */
  gradientDirection?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  /** Additional class for the outer container */
  className?: string;
  /** Aspect ratio class, e.g. 'aspect-[16/9]' */
  aspect?: string;
  /** Optional color tint overlay, e.g. '#33a1de' */
  tint?: string;
  /** rounded corners */
  rounded?: string;
}

export function CinematicImage({
  src,
  alt = '',
  overlayOpacity = 0.6,
  parallax = 60,
  gradientDirection = 'bottom',
  className = '',
  aspect = 'aspect-[16/9]',
  tint,
  rounded = 'rounded-2xl',
}: CinematicImageProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [loaded, setLoaded] = useState(false);

  // Merge refs
  const setRefs = (el: HTMLDivElement | null) => {
    (outerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  // Reduce parallax on mobile for smoother scrolling
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const effectiveParallax = isMobile ? Math.min(parallax * 0.4, 20) : parallax;

  // Simple scroll-based parallax
  useEffect(() => {
    if (reducedMotion || !outerRef.current || !innerRef.current) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!outerRef.current || !innerRef.current) { ticking = false; return; }
        const rect = outerRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
        const offset = (progress - 0.5) * 2 * effectiveParallax;
        innerRef.current.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion, effectiveParallax]);

  const gradientMap: Record<string, string> = {
    top: `linear-gradient(to top, rgba(10,10,15,${overlayOpacity}) 0%, transparent 60%)`,
    bottom: `linear-gradient(to bottom, rgba(10,10,15,${overlayOpacity}) 0%, transparent 40%, rgba(10,10,15,${overlayOpacity}) 100%)`,
    left: `linear-gradient(to left, rgba(10,10,15,${overlayOpacity}) 0%, transparent 60%)`,
    right: `linear-gradient(to right, rgba(10,10,15,${overlayOpacity}) 0%, transparent 60%)`,
    center: `radial-gradient(ellipse, transparent 20%, rgba(10,10,15,${overlayOpacity}) 80%)`,
  };

  return (
    <div
      ref={setRefs}
      className={`relative overflow-hidden ${aspect} ${rounded} ${className}`}
    >
      {/* Parallax image */}
      <div
        ref={innerRef}
        className="absolute inset-[-20%] w-[140%] h-[140%]"
        style={{ willChange: 'transform' }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease-out',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradientMap[gradientDirection] }}
      />

      {/* Optional color tint */}
      {tint && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{ background: tint, opacity: 0.15 }}
        />
      )}

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Reveal animation mask */}
      {!reducedMotion && (
        <div
          className="absolute inset-0 bg-[#0a0a0f] pointer-events-none"
          style={{
            transform: isVisible ? 'scaleX(0)' : 'scaleX(1)',
            transformOrigin: 'right',
            transition: 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        />
      )}
    </div>
  );
}
