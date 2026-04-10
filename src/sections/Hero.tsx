import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Clock } from 'lucide-react';
import heroVideo from '../assets/WhatsApp Video 2026-04-10 at 4.54.59 AM (1).mp4';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Background styling elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/30"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-blue/30 border border-brand-blue/50 text-white text-sm font-semibold mb-6 tracking-wide backdrop-blur-md shadow-sm">
                The #1 Network for Construction Professionals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Connecting Builders to <span className="text-brand-yellow relative inline-block">Quality Trades
                  {/* Subtle underline SVG */}
                  <svg className="absolute -bottom-2 left-0 w-full text-brand-yellow/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-balance">
                Simplify your workflow and hire reliable, verified tradespeople in minutes. Build with confidence, scale your projects, and meet your deadlines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(241,179,47,0.3)] hover:shadow-[0_0_30px_rgba(241,179,47,0.5)] transform hover:-translate-y-1">
                  Find Trades
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1 hover:shadow-lg">
                  Post a Job
                </button>
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">100% Verified</div>
                    <div className="text-gray-400 text-xs mt-0.5">Vetted professionals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">Fast Matching</div>
                    <div className="text-gray-400 text-xs mt-0.5">Connect in minutes</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <div className="p-2.5 bg-brand-blue/30 backdrop-blur-sm rounded-lg text-brand-yellow shadow-inner">
                    <HardHat size={22} />
                  </div>
                  <div>
                    <div className="text-white font-bold leading-tight">500+ Trades</div>
                    <div className="text-gray-400 text-xs mt-0.5">Ready to work</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-md mx-auto relative mt-8 lg:mt-0"
          >
            {/* Glow effect behind the video */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-blue to-brand-yellow rounded-3xl blur-xl opacity-30 pointer-events-none"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[4px] border-white/10 bg-brand-dark/50 backdrop-blur-sm aspect-[9/16] flex items-center justify-center translate-z-0">
              <video 
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-[2.2rem]"
              />
              {/* Inner subtle shadow for depth */}
              <div className="absolute inset-0 rounded-[2.2rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
