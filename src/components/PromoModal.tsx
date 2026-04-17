import { useEffect, useRef, useState } from 'react';
import { X, Apple, Smartphone, Gift, Clock, CheckCircle, Sparkles } from 'lucide-react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoModal({ isOpen, onClose }: PromoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const copyPromoCode = () => {
    navigator.clipboard.writeText('3MONTHSFREE');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 ease-out animate-in fade-in"
    >
      {/* Modal Container with premium glass effect - Compact fit */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 rounded-2xl border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out animate-in zoom-in-95 slide-in-from-bottom-4">
        {/* Decorative top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-t-2xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="relative p-4 sm:p-6">
          {/* Hero Badge */}
          <div className="flex justify-center mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 text-yellow-300 border border-yellow-400/30 rounded-full">
              <Gift className="w-3 h-3" />
              <span className="text-[10px] font-semibold tracking-wide">EXCLUSIVE OFFER</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-0.5">
            Get{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              3 Months
            </span>{' '}
            Free
          </h2>
          <p className="text-base font-bold text-white/90 text-center mb-1">
            Full Access Pass
          </p>

          {/* Subheading */}
          <p className="text-white/70 text-center mb-2 max-w-md mx-auto leading-relaxed text-xs">
            Enjoy complete access to all premium features for three months at absolutely no cost.
          </p>

          {/* Countdown Badge */}
          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-400/30 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span className="text-red-300 font-bold text-xs">Offer Valid Until June 10</span>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-3">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <h3 className="text-sm font-bold text-white">How It Works</h3>
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            </div>

            {/* Cards Grid - Side by Side */}
            <div className="grid md:grid-cols-2 gap-3">
            {/* Android Card */}
            <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-400/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-500/20 rounded-lg">
                  <Smartphone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Android Users</h4>
                  <p className="text-green-400/80 text-[10px]">Google Play Store</p>
                </div>
              </div>
              <ol className="space-y-1 text-[10px] text-white/80">
                <li className="flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">1</span>
                  <span>Click Sign Up and proceed to subscription</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">2</span>
                  <span>Enter promo code at checkout:</span>
                </li>
              </ol>
              {/* Promo Code Box */}
              <div className="mt-2 p-2 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 border-2 border-dashed border-yellow-400/50 rounded-lg text-center cursor-pointer group hover:border-yellow-400 transition-colors"
                   onClick={copyPromoCode}>
                <p className="text-[10px] text-yellow-300/80 mb-0.5 uppercase tracking-wider">Tap to Copy</p>
                <p className="text-lg font-black text-yellow-400 tracking-wider">3MONTHSFREE</p>
                {copied && (
                  <p className="text-[10px] text-green-400 mt-1 flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Copied!
                  </p>
                )}
              </div>
            </div>

            {/* Apple Card */}
            <div className="p-3 bg-gradient-to-br from-gray-500/10 to-slate-500/5 border border-gray-400/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gray-500/20 rounded-lg">
                  <Apple className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Apple Users</h4>
                  <p className="text-gray-400/80 text-[10px]">App Store</p>
                </div>
              </div>
              <ol className="space-y-1 text-[10px] text-white/80">
                <li className="flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center bg-gray-500/20 text-white text-[10px] font-bold rounded-full">1</span>
                  <span>Click Sign Up and proceed to subscription</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center bg-gray-500/20 text-white text-[10px] font-bold rounded-full">2</span>
                  <span>See the 3-month free trial on payment screen</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center bg-gray-500/20 text-white text-[10px] font-bold rounded-full">3</span>
                  <span>Click subscribe to activate</span>
                </li>
              </ol>
              <div className="mt-2 p-2 bg-green-500/10 border border-green-400/30 rounded-lg">
                <p className="text-green-400 text-[10px] font-medium flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3" />
                  No promo code required for iOS
                </p>
              </div>
            </div>
            </div>

            {/* Website Note */}
            <p className="text-white/50 text-center text-[10px] mt-2 italic">
              Subscriptions can also be completed through the website using the launch code.
            </p>
          </div>

            {/* CTA Section */}
          <div className="pt-3 border-t border-white/10">
            <button className="w-full py-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-gray-900 font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25 transform hover:-translate-y-0.5">
              Claim Your Free Access
            </button>

            {/* Store Buttons */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <a
                href="https://build2trade-customer-frontend-production.up.railway.app/role-selection"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
              >
                <span className="text-white/80 text-[10px] font-medium underline">Sign Up</span>
              </a>
              <a
                href="https://apps.apple.com/au/app/build-2-trade/id6752311076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
              >
                <Apple className="w-3.5 h-3.5 text-white/80" />
                <span className="text-white/80 text-[10px] font-medium">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.build2trade&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.18,10.82C20.16,10.81 20.16,10.81 20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-white/80 text-[10px] font-medium">Play Store</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 mt-2">
              {/* Instagram */}
              <a
                href="#"
                className="text-white/40 hover:text-yellow-400 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583031629872"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-yellow-400 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Build2Trade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-yellow-400 transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-white/40 hover:text-yellow-400 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
