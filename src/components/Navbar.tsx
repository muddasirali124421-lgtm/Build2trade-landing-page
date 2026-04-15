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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">About Us</Link>
          <Link to="/giveaway" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Giveaway</Link>
          <Link to="/blogs" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Blogs</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Contact Us</Link>
          <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-gray-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <Link to="/giveaway" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Giveaway</Link>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Blogs</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Contact Us</Link>
              <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-semibold mt-2">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
