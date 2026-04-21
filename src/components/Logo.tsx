import React from 'react';

import logoUrl from '../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoUrl} alt="Build2Trade Logo" className="h-32 md:h-15 w-auto object-contain" />
    </div>
  );
};
