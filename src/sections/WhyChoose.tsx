import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Verified, High-Quality Trades",
    description: "Every tradesperson goes through a rigorous vetting process to ensure reliability and excellence.",
    icon: <CheckCircle2 size={24} className="text-brand-blue" />
  },
  {
    title: "Fast & Accurate Matching",
    description: "Our proprietary algorithm connects you with the right skills in record time.",
    icon: <Zap size={24} className="text-brand-yellow" />
  },
  {
    title: "Trusted Network",
    description: "Join an ecosystem built on accountability, mutual respect, and shared success.",
    icon: <Shield size={24} className="text-brand-blue" />
  },
  {
    title: "Time & Cost Efficiency",
    description: "Reduce downtime and eliminate the hassle of traditional recruiting and bidding.",
    icon: <TrendingUp size={24} className="text-brand-yellow" />
  }
];

export const WhyChoose: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Why Choose <br/><span className="text-brand-blue">Build2Trade?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for an extra set of hands for the week or a dedicated team for a large-scale commercial project, Build2Trade is your ultimate staffing partner.
              </p>
              
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

          {/* Right Visual */}
          <div className="lg:w-1/2 relative w-full h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Construction professionals looking at plans" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end">
                <div className="p-8">
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=11" alt="avatar" />
                        <img className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=12" alt="avatar" />
                        <img className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=13" alt="avatar" />
                      </div>
                      <span className="text-sm font-semibold">Matched in 4 hours</span>
                    </div>
                    <p className="text-sm text-gray-200">"Build2Trade saved our timeline on the downtown high-rise project."</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow rounded-2xl -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmZiMyIvPjwvc3ZnPg==')] opacity-50"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
