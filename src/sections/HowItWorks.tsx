import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, MessageSquareText, HardHat } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "Post a Job",
    description: "Describe your project and exactly what skills you need."
  },
  {
    icon: <Users size={32} />,
    title: "Get Matched",
    description: "Our platform connects you with available, qualified tradespeople."
  },
  {
    icon: <MessageSquareText size={32} />,
    title: "Connect",
    description: "Review profiles, chat directly, and agree on terms."
  },
  {
    icon: <HardHat size={32} />,
    title: "Build with Confidence",
    description: "Start your project knowing you have the right team."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            How <span className="text-brand-blue">Build2Trade</span> Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simple, streamlined process to connect you with the trade professionals you need to get the job done right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-brand-blue mb-6 shadow-sm group-hover:shadow-md group-hover:border-brand-blue/30 transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="relative">
                  {step.icon}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center text-[10px] font-bold text-brand-dark">
                    {index + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
