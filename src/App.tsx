
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { WhyChoose } from './sections/WhyChoose';
import { Services } from './sections/Services';
import { Trust } from './sections/Trust';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-brand-blue selection:text-white pb-0">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <Services />
        <Trust />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
