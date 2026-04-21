import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, CreditCard, XCircle, Sparkles } from 'lucide-react';

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full filter blur-[150px] translate-x-1/2 -translate-y-1/2"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full filter blur-[120px] -translate-x-1/2 translate-y-1/2"
      />
      {/* Floating particles - more visible and more dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${10 + (i * 8) % 85}%`,
            top: `${15 + (i * 7) % 70}%`,
            width: `${6 + (i % 3) * 2}px`,
            height: `${6 + (i % 3) * 2}px`,
            backgroundColor: i % 3 === 0 ? 'rgba(241, 179, 47, 0.7)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.4)',
          }}
          animate={{
            y: [-15 - (i % 3) * 10, 15 + (i % 3) * 10, -15 - (i % 3) * 10],
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Animated Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-2 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-brand-yellow" />
              </motion.div>
              <span className="text-brand-yellow font-semibold text-sm">3-Month Free Trial</span>
              <motion.span 
                className="w-2 h-2 bg-brand-yellow rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try Build2Trade with <span className="text-brand-yellow">Zero Risk</span>
            </h2>
            
            {/* Pricing Offer - Animated */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-3 md:gap-6 mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-500 line-through decoration-red-500 decoration-2"
              >
                $49.99
              </motion.span>
              <motion.div 
                className="flex flex-col items-center"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
              >
                <motion.span 
                  className="text-5xl md:text-7xl font-black text-white leading-none"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  $0
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-brand-yellow text-base md:text-lg font-bold"
                >
                  for 3 months
                </motion.span>
              </motion.div>
            </motion.div>
            
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              We understand that committing to a new platform can feel uncertain. That's why we offer a full 3-month free trial so you can explore everything without pressure.
            </p>
            <p className="text-lg text-brand-yellow mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our platform with no cost.
            </p>
            
            {/* Urgency Messaging - Animated */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-brand-yellow/20 via-brand-yellow/10 to-brand-yellow/20 border-2 border-brand-yellow/50 rounded-xl p-4 md:p-5 max-w-2xl mx-auto mb-8"
            >
              <motion.p 
                className="text-white text-center text-sm md:text-base font-medium"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-brand-yellow font-bold">Free for 3 months</span> if you sign up before <motion.span 
                  className="text-brand-yellow font-bold text-lg md:text-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >June 10</motion.span>
              </motion.p>
              <p className="text-gray-300 text-center text-xs md:text-sm mt-2">
                After trial: $49.99/month • Cancel anytime
              </p>
            </motion.div>
          </motion.div>

          {/* Reassurance Points - Staggered Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.8 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {reassurances.map((item, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 12 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer"
              >
                <motion.div 
                  className="flex-shrink-0 w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-white font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA - Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 50px rgba(241,179,47,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(241,179,47,0.3)",
                  "0 0 40px rgba(241,179,47,0.5)",
                  "0 0 20px rgba(241,179,47,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-10 py-5 rounded-xl transition-colors"
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: [0, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                Start Free 3-Month Trial
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.span>
            </motion.button>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Check size={16} className="text-green-400" />
              </motion.span>
              No payment required • Full access • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
