import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, CreditCard, XCircle } from 'lucide-react';

const reassurances = [
  {
    icon: <CreditCard size={20} className="text-brand-yellow" />,
    text: "No payment required to start"
  },
  {
    icon: <Calendar size={20} className="text-brand-yellow" />,
    text: "No charges during the 3 months"
  },
  {
    icon: <XCircle size={20} className="text-brand-yellow" />,
    text: "Cancel anytime before billing"
  }
];

export const FreeTrial: React.FC = () => {
  return (
    <section id="free-trial" className="py-24 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full filter blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full filter blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-2 mb-6">
              <span className="text-brand-yellow font-semibold text-sm">3-Month Free Trial</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try Build2Trade with <span className="text-brand-yellow">Zero Risk</span>
            </h2>
            
            {/* Pricing Offer - Enhanced Visual Hierarchy */}
            <div className="flex items-center justify-center gap-3 md:gap-6 mb-6">
              <span className="text-xl md:text-2xl text-gray-500 line-through decoration-red-500 decoration-2">$49.99</span>
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-black text-white leading-none">$0</span>
                <span className="text-brand-yellow text-base md:text-lg font-bold">for 3 months</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              We understand that committing to a new platform can feel uncertain. That's why we offer a full 3-month free trial so you can explore everything without pressure.
            </p>
            
            {/* Urgency Messaging */}
            <div className="bg-gradient-to-r from-brand-yellow/20 via-brand-yellow/10 to-brand-yellow/20 border-2 border-brand-yellow/50 rounded-xl p-4 md:p-5 max-w-2xl mx-auto mb-8">
              <p className="text-white text-center text-sm md:text-base font-medium">
                <span className="text-brand-yellow font-bold">Free for 3 months</span> if you sign up before <span className="text-brand-yellow font-bold text-lg md:text-xl">June 10</span>
              </p>
              <p className="text-gray-300 text-center text-xs md:text-sm mt-2">
                After trial: $49.99/month • Cancel anytime
              </p>
            </div>
          </motion.div>

          {/* Reassurance Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {reassurances.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-white font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-[0_0_30px_rgba(241,179,47,0.3)] hover:shadow-[0_0_40px_rgba(241,179,47,0.5)] transform hover:-translate-y-1">
              Start Free 3-Month Trial
            </button>
            <p className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2">
              <Check size={16} className="text-green-400" />
              No payment required • Full access • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
