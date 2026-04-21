import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, FileText, Smartphone } from 'lucide-react';
import logoImage from '../assets/Build-2-Trade-FF-01-768x599.png';

const benefits = [
  {
    title: "It Saves You Time",
    description: "No more long phone calls or searching for numbers. Find the right people fast.",
    icon: <Clock size={24} className="text-brand-blue" />
  },
  {
    title: "Find Builders & Tradies Easily",
    description: "Builders and tradies complete a full profile during sign-up with verified details, making it easier to connect with the right people.",
    icon: <Users size={24} className="text-brand-yellow" />
  },
  {
    title: "No More Lost Paperwork",
    description: "Project details kept safe inside the app",
    icon: <FileText size={24} className="text-brand-blue" />
  },
  {
    title: "Tracking Your Projects Has Never Been Easier",
    description: "Build2Trade makes it easier to track your projects anytime, anywhere.",
    icon: <Smartphone size={24} className="text-brand-yellow" />
  }
];

export const WhyChoose: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Still Chasing Tradies <br/><span className="text-brand-blue">Or Chasing Work?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Builders struggle to find reliable tradies when they need them. Tradies struggle to secure consistent, quality jobs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Endless calls, delays, and miscommunication slows projects down, costing valuable time and money.
              </p>
              
              {/* Solution Box */}
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-blue mb-3">One Platform. Stay Connected.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build2Trade brings builders and tradies together in a single, easy-to-use platform. Post jobs, connect instantly, and manage your work without the usual back-and-forth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 h-fit">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Logo */}
          <div className="lg:w-1/2 relative w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-lg"
            >
              <img 
                src={logoImage}
                alt="Build2Trade Logo" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
