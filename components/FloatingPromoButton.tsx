'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PromoModal } from './PromoModal';

export function FloatingPromoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Trigger animation after component mounts (only on homepage)
    if (!isHomePage) return;
    const timer = setTimeout(() => {
      // animation trigger placeholder
    }, 1000);
    return () => clearTimeout(timer);
  }, [isHomePage]);

  // Don't render on non-home pages
  if (!isHomePage) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-4 z-50 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
        aria-label="Get a promo code"
      >
        Get A Promo Code
      </button>

      {/* Modal */}
      <PromoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
