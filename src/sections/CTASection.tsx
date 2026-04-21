import React from 'react';
import { motion } from 'framer-motion';
import { FloatingDots } from '../components/FloatingDots';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark"></div>
      {/* Floating dots background */}
      <FloatingDots count={15} variant="blue" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Networking <span className="text-brand-yellow">Smarter</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Join a growing network of builders and tradies simplifying how they connect, manage jobs, and grow their business.
            </p>
            <p className="text-lg text-brand-yellow mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Start your 3-month free trial today — no payment required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Now
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
              No charges during trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
