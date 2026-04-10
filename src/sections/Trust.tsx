import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Build2Trade has completely transformed how we staff our projects. The quality of tradespeople is unmatched.",
    name: "Sarah Jenkins",
    role: "Project Manager, Skyline Construction",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "Finding consistent work used to be a headache. Since joining B2T, my schedule has been fully booked with great builders.",
    name: "Marcus Thorne",
    role: "Master Electrician",
    avatar: "https://i.pravatar.cc/150?img=59"
  }
];

export const Trust: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "500+", label: "Trades Onboarded" },
            { value: "1,000+", label: "Jobs Completed" },
            { value: "$5M+", label: "In Project Value" },
            { value: "4.9/5", label: "Average Rating" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-black text-brand-blue mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Trusted by Industry <span className="text-brand-blue">Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 relative"
            >
              <div className="flex gap-1 text-brand-yellow mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-light" />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
