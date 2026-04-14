import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Image, X } from 'lucide-react';

// Import available images
import img1 from '../assets/1-1-Mobile.png';
import img2 from '../assets/3-1-Mobile.png';
import img3 from '../assets/5-1-Mobile.png';
import img4 from '../assets/5-Mobile.png';
import img5 from '../assets/6-1-Mobile.png';
import img6 from '../assets/12-mobile.png';
import img7 from '../assets/project_comment_file698da1989bf39-Untitled-A4-Landscape-2--169x300.webp';
import img8 from '../assets/project_comment_file698f07ffa8837-image_hestk-Photoroom.png';
import img9 from '../assets/Untitled-design-7.png';
import img10 from '../assets/Untitled-design-21-Photoroom-Mobile.png';
import img11 from '../assets/Untitled-design-7.png';

interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    image: img1,
    title: "Send & Receive Quotes",
    description: "Builders send quote requests directly from projects. Tradies respond quickly. All quotes stored in one place for easy comparison."
  },
  {
    image: img2,
    title: "Find Trusted Pros",
    description: "Connect with verified tradies and builders. Check reviews and ratings. Choose the right people with confidence."
  },
  {
    image: img3,
    title: "Project Reports",
    description: "Generate complete reports with budgets and timelines. Track progress from start to finish. Stay organized always."
  },
  {
    image: img4,
    title: "Easy Messaging",
    description: "Keep all chats in one place. No missed messages or confusion. Everything stays simple and trackable."
  },
  {
    image: img5,
    title: "Track Projects",
    description: "Monitor all jobs and stay updated. Manage multiple projects without stress. Everything visible and controlled."
  },
  {
    image: img6,
    title: "Stay Organized",
    description: "Keep work, updates, and communication structured. No lost information. Everything stored safely in one place."
  },
  {
    image: img7,
    title: "Grow Business",
    description: "Get more work and build connections. Expand your network. Save time and grow faster with better opportunities."
  },
  {
    image: img8,
    title: "Manage Teams",
    description: "Coordinate with your team easily. Share updates and tasks. Keep everyone on the same page always."
  },
  {
    image: img9,
    title: "Secure Payments",
    description: "Handle payments safely through the app. Track invoices and receipts. Financial records stay organized."
  },
  {
    image: img10,
    title: "Instant Notifications",
    description: "Get real-time alerts for quotes, messages, and updates. Never miss important information. Stay connected always."
  },
  {
    image: img11,
    title: "Compare Quotes",
    description: "View multiple quotes side by side. Compare pricing and details clearly. Choose the best option quickly."
  },
  {
    image: img8,
    title: "Build Network",
    description: "Connect with more clients and tradies. Build your reputation. Create lasting business relationships."
  }
];

// Lightbox Modal Component
const Lightbox: React.FC<{
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ image, title, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              style={{ imageRendering: 'auto' }}
            />
            <p className="text-white text-center mt-4 text-lg font-medium">{title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{ 
  feature: FeatureItem; 
  index: number;
  onImageClick: (image: string, title: string) => void;
}> = ({ feature, index, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative group"
    >
      <div className="flex flex-col transition-all duration-500 group-hover:-translate-y-2">
        
        {/* Image - Clean, no background, floating */}
        <div className="relative w-full flex items-center justify-center mb-4">
          {feature.image === "placeholder" ? (
            <div className="w-full aspect-[4/5] flex flex-col items-center justify-center bg-gradient-to-b from-blue-900/20 to-transparent rounded-2xl">
              <Image className="w-12 h-12 text-blue-400/50 mb-2" />
              <span className="text-blue-400/50 text-sm">Feature Preview</span>
            </div>
          ) : (
            <button
              onClick={() => onImageClick(feature.image, feature.title)}
              className="w-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-auto max-h-[280px] object-contain drop-shadow-lg"
                style={{ 
                  imageRendering: 'auto',
                  maxWidth: '100%'
                }}
              />
            </button>
          )}
        </div>

        {/* Text Card - Background only here */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1b2a] rounded-2xl p-5 border border-blue-500/20 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-400/40">
          {/* Title */}
          <h3 className="font-bold text-brand-yellow text-lg mb-3 leading-tight">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {feature.description}
          </p>

          {/* Read More Link */}
          <a 
            href="#" 
            className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-yellow transition-colors duration-300 group/link"
          >
            Read More
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const FeatureShowcase: React.FC = () => {
  // Split features for layout: 3, 3, 3, 3
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3, 6);
  const thirdRow = features.slice(6, 9);
  const fourthRow = features.slice(9, 12);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ image: '', title: '' });

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ image, title });
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="features-showcase" className="py-24 mt-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue text-sm font-semibold rounded-full mb-4"
          >
            Platform Features
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight"
          >
            Powerful Features to Run Your Work Better
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Everything you need in one simple platform
          </motion.p>
        </div>

        {/* Features Grid - 3x4 Layout */}
        <div className="space-y-10">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {firstRow.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} onImageClick={handleImageClick} />
            ))}
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {secondRow.map((feature, index) => (
              <FeatureCard key={index + 3} feature={feature} index={index + 3} onImageClick={handleImageClick} />
            ))}
          </div>

          {/* Third Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {thirdRow.map((feature, index) => (
              <FeatureCard key={index + 6} feature={feature} index={index + 6} onImageClick={handleImageClick} />
            ))}
          </div>

          {/* Fourth Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {fourthRow.map((feature, index) => (
              <FeatureCard key={index + 9} feature={feature} index={index + 9} onImageClick={handleImageClick} />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          image={selectedImage.image}
          title={selectedImage.title}
          isOpen={lightboxOpen}
          onClose={handleCloseLightbox}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-5 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-gray-900 font-semibold">Ready to get started?</p>
              <p className="text-gray-500 text-sm">Join thousands of builders and tradies today</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
