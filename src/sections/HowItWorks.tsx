import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, Calendar, MessageSquareText, Star, Download } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "Create a project",
    description: "Tap the big yellow '+' button on your screen to start a new job.",
    imageDesc: "Screenshot: Dashboard showing the '+' button to start a project"
  },
  {
    icon: <Users size={32} />,
    title: "Choose trades",
    description: "Look at the list and pick who you need. Just tap on things like 'Plumbing' or 'Concrete Slabs'.",
    imageDesc: "Screenshot: Screen with a list of trades to choose from"
  },
  {
    icon: <Calendar size={32} />,
    title: "Set budget & timeline",
    description: "Type in how much money you want to spend and the dates the work must be finished by.",
    imageDesc: "Screenshot: Project screen showing timeline and budget"
  },
  {
    icon: <MessageSquareText size={32} />,
    title: "Get quotes",
    description: "Tradies will tell you their price. You can view them and pick the best one for your job."
  },
  {
    icon: <Star size={32} />,
    title: "Approve work",
    description: "When the job is done, you check it. You can leave a star review to let others know they did a great job.",
    imageDesc: "Screenshot: Review screen with stars to rate tradies"
  },
  {
    icon: <Download size={32} />,
    title: "Track everything",
    description: "Want to save your project records? Just tap 'Download PDF' or 'Download Excel' to keep everything safe forever.",
    imageDesc: "Screenshot: Screen showing 'Download PDF' and 'Download Excel' buttons"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            How <span className="text-brand-blue">It</span> Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A very easy way to connect and get the job done. Just follow these simple steps!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
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
              
              {step.imageDesc && (
                <div className="mt-6 w-full max-w-[280px] border border-gray-200 rounded-lg p-3 bg-gray-50 flex flex-col items-center">
                  <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 mb-3">
                    <span className="text-sm font-semibold">[ Image Placement ]</span>
                  </div>
                  <p className="text-xs text-gray-500 italic text-center">{step.imageDesc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
