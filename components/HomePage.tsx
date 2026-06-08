'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/sections/Hero';
import { TrustStrip } from '@/sections/TrustStrip';
import { WhyChoose } from '@/sections/WhyChoose';
import { HowItWorks } from '@/sections/HowItWorks';
import { FeatureShowcase } from '@/sections/FeatureShowcase';
import { Services } from '@/sections/Services';
import { FreeTrial } from '@/sections/FreeTrial';
import { Trust } from '@/sections/Trust';
import { CTASection } from '@/sections/CTASection';
import InviteForm from '@/sections/InviteForm';
import { PromoModal } from '@/components/PromoModal';

export default function HomePage() {
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown
    const hasSeenPopup = localStorage.getItem('build2trade_promo_shown');

    if (!hasSeenPopup) {
      // Show popup after a short delay (2 seconds)
      const timer = setTimeout(() => {
        setIsPromoModalOpen(true);
        // Mark as shown
        localStorage.setItem('build2trade_promo_shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <FreeTrial />
        <WhyChoose />
        <HowItWorks />
        <FeatureShowcase />
        <Services />
        <CTASection />
        <Trust />
      </main>
      <InviteForm />
      <PromoModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
    </>
  );
}
