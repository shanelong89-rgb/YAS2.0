import React from 'react';

interface YasLogoDarkProps {
  className?: string;
  height?: number;
}

/**
 * YAS Dark Mode Logo
 * Renders the official YAS brand logo as an inline SVG.
 * Tri-color block mark (blue #33a1de, red #e85d4a, green #2ecc71)
 * stacked vertically on the left + "YAS" wordmark in white on the right.
 *
 * Uses Inter 800 weight (loaded via fonts.css) for the wordmark,
 * matching the brand's geometric heavy sans-serif.
 *
 * The inline SVG approach guarantees the logo loads on every deploy
 * with zero external asset dependency.
 */
export function YasLogoDark({ className = '', height = 40 }: YasLogoDarkProps) {
  // viewBox aspect ratio → derive width from requested height
  const aspectRatio = 156 / 56;
  const width = Math.round(height * aspectRatio);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 156 56"
      width={width}
      height={height}
      role="img"
      aria-label="YAS"
      className={className}
      style={{ display: 'block' }}
    >
      {/* ── Tri-color block mark ── */}
      <rect x="0" y="11"  width="10" height="10" rx="1.8" fill="#33a1de" />
      <rect x="0" y="23"  width="10" height="10" rx="1.8" fill="#e85d4a" />
      <rect x="0" y="35"  width="10" height="10" rx="1.8" fill="#2ecc71" />

      {/* ── YAS wordmark ── */}
      <text
        x="20"
        y="44.5"
        fill="#ffffff"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="46"
        fontWeight="800"
        letterSpacing="3"
      >
        YAS
      </text>
    </svg>
  );
}
