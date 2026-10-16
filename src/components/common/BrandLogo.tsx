import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light',
  showTagline = true,
}) => {
  const isLight = theme === 'light';

  // Responsive size presets
  const sizeClasses = {
    sm: {
      brand: 'text-2xl',
      tagline: 'text-[9px] tracking-[0.22em]',
    },
    md: {
      brand: 'text-2xl sm:text-3xl',
      tagline: 'text-[10px] sm:text-[11px] tracking-[0.24em]',
    },
    lg: {
      brand: 'text-3xl sm:text-4xl lg:text-5xl',
      tagline: 'text-xs sm:text-sm tracking-[0.28em]',
    },
  }[size];

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Brand Wordmark matching exact GreenNest PNG layout */}
      <span
        className={`font-serif font-bold tracking-tight leading-none ${sizeClasses.brand} ${
          isLight ? 'text-[#305d3f]' : 'text-white'
        }`}
      >
        Green
        <span className="relative inline-block bg-gradient-to-r from-[#305d3f] via-[#B8934A] to-[#C8AD78] bg-clip-text text-transparent">
          Nest
        </span>
      </span>

      {/* Official Tagline as in PNG */}
      {showTagline && (
        <span
          className={`uppercase font-sans font-medium mt-1 ${sizeClasses.tagline} ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}
        >
          Selective Homes. Exclusive Living.
        </span>
      )}
    </div>
  );
};
