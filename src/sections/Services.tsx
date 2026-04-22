import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Briefcase, Ruler } from 'lucide-react';

const services = [
  {
    role: "Builders",
    title: "Find Reliable Tradies Faster",
    description: "Find reliable tradies faster and keep projects moving. Post jobs and instantly connect with available, verified professionals.",
    icon: <Ruler size={40} className="text-brand-blue" />
  },
  {
    role: "Tradies",
    title: "Access Consistent Work",
    description: "Access consistent job opportunities and grow your network. Get matched with quality builders and steady work that fits your skills.",
    icon: <Hammer size={40} className="text-brand-blue" />
  },
  {
    role: "Suppliers",
    title: "Streamline Your Workflow",
    description: "Streamline your workflow and connect with builders and tradies actively looking for reliable suppliers.",
    icon: <Briefcase size={40} className="text-brand-blue" />
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full border-[30px] md:border-[40px] border-gray-50 opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full border-[30px] md:border-[40px] border-brand-blue/5 opacity-50 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      {/* Yellow floating dots for visual interest */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${5 + (i * 10) % 90}%`,
            top: `${10 + (i * 8) % 80}%`,
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(241, 179, 47, 0.5)' : 'rgba(59, 130, 246, 0.3)',
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Who are we <span className="text-brand-blue">networking with</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white border text-center border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-blue/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 group-hover:bg-brand-blue/10 transition-all duration-300">
                {service.icon}
              </div>
              <div className="mb-4">
                <h3 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2">{service.role}</h3>
                <div className="w-16 h-1 bg-brand-yellow mx-auto rounded-full"></div>
              </div>
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
