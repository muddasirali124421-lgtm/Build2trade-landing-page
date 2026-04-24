import React from 'react';

import logoUrl from '../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoUrl} alt="Build2Trade Logo" className="h-10 sm:h-14 md:h-20 w-auto max-w-[50vw] sm:max-w-[60vw] md:max-w-none object-contain object-left" />
    </div>
  );
};
