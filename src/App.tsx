
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { WhyChoose } from './sections/WhyChoose';
import { HowItWorks } from './sections/HowItWorks';
import { FeatureShowcase } from './sections/FeatureShowcase';
import { Services } from './sections/Services';
import { FreeTrial } from './sections/FreeTrial';
import { Trust } from './sections/Trust';
import { CTASection } from './sections/CTASection';
import InviteForm from './sections/InviteForm';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-brand-blue selection:text-white pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyChoose />
        <HowItWorks />
        <FeatureShowcase />
        <Services />
        <FreeTrial />
        <Trust />
        <CTASection />
      </main>
      <InviteForm />
      <Footer />
    </div>
  );
}

export default App;
