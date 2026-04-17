import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './sections/Footer';
import InviteForm from './sections/InviteForm';
import ScrollToTop from './components/ScrollToTop';
import { FloatingPromoButton } from './components/FloatingPromoButton';

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

// Home page component
const HomePage = () => (
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
  </>
);

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
        </Routes>
        <Footer />
        <FloatingPromoButton />
      </div>
    </Router>
  );
}

export default App;
