import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Briefcase, Ruler } from 'lucide-react';

const services = [
  {
    role: "Builders",
    title: "Find reliable trades quickly",
    description: "Keep your projects on schedule. Post jobs and instantly connect with available tradespeople who have the exact skills you need.",
    icon: <Ruler size={40} className="text-brand-blue" />
  },
  {
    role: "Contractors",
    title: "Scale your workforce efficiently",
    description: "Whether you need a specialized crew or extra labor, easily expand your team without the long-term overhead of recruiting.",
    icon: <Briefcase size={40} className="text-brand-blue" />
  },
  {
    role: "Tradespeople",
    title: "Get consistent, quality leads",
    description: "Say goodbye to downtime. Get matched with top builders and steady work that fits your schedule and expertise.",
    icon: <Hammer size={40} className="text-brand-blue" />
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full border-[40px] border-gray-50 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full border-[40px] border-brand-blue/5 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm mb-2 block">Who It's For</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Built for the Entire <span className="text-brand-blue">Ecosystem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white border text-center border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 group-hover:bg-brand-blue/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3">{service.role}</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
