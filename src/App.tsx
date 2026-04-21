import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './sections/Footer';
import InviteForm from './sections/InviteForm';
import ScrollToTop from './components/ScrollToTop';
import { FloatingPromoButton } from './components/FloatingPromoButton';
import { PromoModal } from './components/PromoModal';

// Page sections
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { WhyChoose } from './sections/WhyChoose';
import { HowItWorks } from './sections/HowItWorks';
import { FeatureShowcase } from './sections/FeatureShowcase';
import { Services } from './sections/Services';
import { FreeTrial } from './sections/FreeTrial';
import { Trust } from './sections/Trust';
import { CTASection } from './sections/CTASection';

// New pages
import About from './sections/About';
import Giveaway from './sections/Giveaway';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsAndConditions from './sections/TermsAndConditions';
import TermsOfUse from './sections/TermsOfUse';
import CoreFeatures from './sections/CoreFeatures';

// Home page component with auto-popup
const HomePage = () => {
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
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-brand-blue selection:text-white pb-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/features" element={<CoreFeatures />} />
        </Routes>
        <Footer />
        <FloatingPromoButton />
      </div>
    </Router>
  );
}

export default App;
