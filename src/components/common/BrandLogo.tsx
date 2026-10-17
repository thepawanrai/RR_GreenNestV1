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
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
  }[size];

  // For dark backgrounds (such as the Footer section), use the dedicated white transparent footer logo
  if (!isLight) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/greennest-footer-logo.png"
          alt="GreenNest Realtors - Selective Homes. Exclusive Living."
          className={`${heightClasses} w-auto object-contain block`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/images/greennest-logo-trimmed.png';
          }}
        />
      </div>
    );
  }

  // For light backgrounds (Header, Navigation, modals), use the primary main logo
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
