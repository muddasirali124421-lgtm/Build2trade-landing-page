import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, FileCheck, FolderOpen } from 'lucide-react';

const builderSteps = [
  {
    step: 1,
    icon: <UserPlus size={32} className="text-brand-blue" />,
    title: "Create Your Account",
    description: "Activate your free trial in seconds. No payment required to get started."
  },
  {
    step: 2,
    icon: <Search size={32} className="text-brand-yellow" />,
    title: "Post or Find Work",
    description: "List jobs or explore available opportunities that match your needs."
  },
  {
    step: 3,
    icon: <MessageSquare size={32} className="text-brand-blue" />,
    title: "Connect and Manage",
    description: "Message, organise, and complete jobs efficiently—all in one place."
  }
];

const tradieSteps = [
  {
    step: 1,
    icon: <UserPlus size={32} className="text-brand-blue" />,
    title: "Create Account",
    description: "Sign up in seconds and start your journey to finding great projects."
  },
  {
    step: 2,
    icon: <FileCheck size={32} className="text-brand-yellow" />,
    title: "Complete Profile",
    description: "Showcase your skills, experience, and certifications to stand out."
  },
  {
    step: 3,
    icon: <FolderOpen size={32} className="text-brand-blue" />,
    title: "Explore Project Leads",
    description: "Browse and connect with builders who need your expertise."
  }
];

const StepCard: React.FC<{ item: typeof builderSteps[0]; index: number; totalSteps: number }> = ({ item, index, totalSteps }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    className="relative text-center"
  >
    {/* Connector line (hidden on mobile) */}
    {index < totalSteps - 1 && (
      <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-blue/20 to-brand-yellow/20"></div>
    )}

    {/* Step Number Circle */}
    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-full mb-6 shadow-lg">
      <span className="text-white font-bold text-xl">{item.step}</span>
    </div>

    {/* Icon */}
    <div className="w-16 h-16 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-4">
      {item.icon}
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
      {item.description}
    </p>
  </motion.div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-sm font-semibold tracking-wider uppercase mb-2 block"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Get Started in <span className="text-brand-blue">Minutes</span>
          </motion.h2>
        </div>

        {/* For Builders Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-10 text-center"
          >
            For Builders
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {builderSteps.map((item, index) => (
              <StepCard key={index} item={item} index={index} totalSteps={builderSteps.length} />
            ))}
          </div>
        </div>

        {/* For Tradies Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-10 text-center"
          >
            For Tradies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tradieSteps.map((item, index) => (
              <StepCard key={index} item={item} index={index} totalSteps={tradieSteps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
