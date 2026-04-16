import { useState } from 'react';
import { PromoModal } from './PromoModal';

export function FloatingPromoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
        aria-label="Get a promo code"
      >
        Get A Promo Code
      </button>

      {/* Modal */}
      <PromoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
