import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Building2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 bg-brand-blue/5 border-y border-brand-blue/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-gray-600 font-medium">
            Join a growing network of builders and tradies across Australia
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <ShieldCheck className="w-5 h-5 text-brand-blue" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Verified professionals</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Zap className="w-5 h-5 text-brand-yellow" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Fast and reliable connections</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <Building2 className="w-5 h-5 text-brand-blue" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Built for the construction industry</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
