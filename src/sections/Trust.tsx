import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import logo1 from '../assets/image_cvqxv.jpg.jpeg';
import logo2 from '../assets/image_jdqwf.jpg.jpeg';
import logo3 from '../assets/image_siyst.jpg.jpeg';
import logo4 from '../assets/image_wbmls.jpg.jpeg';
import logo5 from '../assets/project_comment_file6995b5577a418-Perfect-power-logo-Edited.webp';
import logo6 from '../assets/project_comment_file6995b5577a2e9-image_rgpdl.webp';
import logo7 from '../assets/image_ykfhv.jpg.jpeg';

// Client logos data
const clientLogos = [
  { src: logo1, alt: 'MYM Construction' },
  { src: logo2, alt: 'The Turners' },
  { src: logo3, alt: 'L&W Group' },
  { src: logo4, alt: 'Board' },
  { src: logo5, alt: 'Perfect Power' },
  { src: logo6, alt: 'Eco Sure' },
  { src: logo7, alt: 'Eco Sure Logo' },
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const logoWidth = trackRef.current.children[0]?.clientWidth || 200;
      const gap = 48;
      trackRef.current.scrollTo({
        left: index * (logoWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? clientLogos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === clientLogos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev >= clientLogos.length - 1 ? 0 : prev + 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      {/* Client Showcase Section */}
      <section className="py-20 bg-[#093370] relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Builders, Tradies & Suppliers Using Build 2 Trade
            </h2>
          </motion.div>

          {/* Logo Carousel */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            {/* Logos Track */}
            <div className="overflow-hidden mx-16">
              <div
                ref={trackRef}
                className="flex gap-12 items-center"
                style={{
                  transform: `translateX(-${currentIndex * (200 + 48)}px)`,
                  transition: 'transform 0.5s ease-out'
                }}
              >
                {duplicatedLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-40 h-24 flex items-center justify-center rounded-lg bg-transparent hover:bg-brand-blue transition-colors duration-300 ease"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {clientLogos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    scrollToIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-brand-yellow w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-brand-light relative">
        <div className="container mx-auto px-4">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "500+", label: "Trades Onboarded" },
              { value: "500+", label: "Jobs Completed" },
              { value: "100+ user", label: "In Project Value" },
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
            <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm mb-2 block">Social Proof</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Trusted by Builders and Tradies <span className="text-brand-blue">Across Australia</span>
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
    </>
  );
};
