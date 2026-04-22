import React from 'react';

import logoUrl from '../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoUrl} alt="Build2Trade Logo" className="h-16 md:h-20 w-auto max-w-[65vw] md:max-w-none object-contain object-left" />
    </div>
  );
};
