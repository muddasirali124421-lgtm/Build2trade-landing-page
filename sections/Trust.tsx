'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FloatingDots } from '@/components/FloatingDots';

// Client logos data using public/images paths
const clientLogos = [
  { src: '/images/team-1.jpeg', alt: 'MYM Construction' },
  { src: '/images/team-2.jpeg', alt: 'The Turners' },
  { src: '/images/team-3.jpeg', alt: 'L&W Group' },
  { src: '/images/team-4.jpeg', alt: 'Board' },
  { src: '/images/trust-webp-4.webp', alt: 'Perfect Power' },
  { src: '/images/trust-webp-3.webp', alt: 'Eco Sure' },
  { src: '/images/team-5.jpeg', alt: 'Eco Sure Logo' },
  { src: '/images/trust-platinum-edge.jpg', alt: 'Platinum Edge Waterproofing Solutions' },
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
        {/* Floating dots background */}
        <FloatingDots count={15} variant="blue" />
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
              Builders, Tradies &amp; Suppliers Using Build 2 Trade
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </>
  );
};
