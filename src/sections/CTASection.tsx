import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue rounded-full filter blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow rounded-full filter blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Building <span className="text-brand-yellow">Smarter</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the fastest-growing network of builders and quality tradespeople. Transform how you staff your projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Join Build2Trade
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400">Takes less than 2 minutes • No credit card required</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
