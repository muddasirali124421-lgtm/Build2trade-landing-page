import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 relative z-50">
          <Logo />
        </Link>

        {/* Desktop Nav - Shows Get Started button */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">About Us</Link>
          <Link to="/features" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">Features</Link>
          <Link to="/giveaway" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">Giveaway</Link>
          <Link to="/blogs" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">Blogs</Link>
          <Link to="/contact" className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors">Contact Us</Link>
          <a
            href="https://build2trade-customer-frontend-production.up.railway.app/role-selection"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-6 md:hidden"
            >
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">About Us</Link>
              <Link to="/features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Features</Link>
              <Link to="/giveaway" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Giveaway</Link>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Blogs</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Contact Us</Link>

              {/* Divider */}
              <div className="border-t border-gray-200 my-2" />

              {/* Sign In / Sign Up Buttons - At bottom of mobile menu */}
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-500 text-center">Already have an account?</p>
                <div className="flex gap-3">
                  <a
                    href="https://build2trade-customer-frontend-production.up.railway.app/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium text-brand-blue border-2 border-brand-blue/30 hover:border-brand-blue px-4 py-3 rounded-xl transition-all"
                  >
                    Sign In
                  </a>
                  <a
                    href="https://build2trade-customer-frontend-production.up.railway.app/role-selection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium bg-brand-blue hover:bg-brand-dark text-white px-4 py-3 rounded-xl transition-all"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
