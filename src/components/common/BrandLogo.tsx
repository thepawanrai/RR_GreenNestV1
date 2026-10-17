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
}) => {
  const isLight = theme === 'light';

  // Responsive image dimensions based on size prop
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  }[size];

  if (!isLight) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <div className="bg-white/95 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 shadow-sm hover:bg-white transition-colors">
          <img
            src="/images/greennest-logo-trimmed.png"
            alt="GreenNest Realtors - Selective Homes. Exclusive Living."
            className={`${heightClasses} w-auto object-contain block`}
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = '/images/greennest-logo.png';
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/greennest-logo-trimmed.png"
        alt="GreenNest Realtors - Selective Homes. Exclusive Living."
        className={`${heightClasses} w-auto object-contain block`}
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = '/images/greennest-logo.png';
        }}
      />
    </div>
  );
};
