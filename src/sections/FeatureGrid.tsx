import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Import feature images from assets
import quotesImg from '../assets/1-1.png';
import tradiesImg from '../assets/1.png';
import projectReportImg from '../assets/3-1.png';
import leadGenerationImg from '../assets/5 (1).png';
import tradieDiscoveryImg from '../assets/5-1 (1).png';
import budgetTrackingImg from '../assets/6-1.png';
import excelReportsImg from '../assets/Untitled-design-7 (1).png';
import ratingsImg from '../assets/Untitled-design-21-Photoroom.png';
import verificationImg from '../assets/project_comment_file698f07ffa8837-image_hestk-Photoroom (1).png';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ image, title, description, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full bg-gradient-to-b from-brand-dark to-brand-blue rounded-2xl overflow-hidden border border-white/10 shadow-xl"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-b from-slate-800 to-brand-dark">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-center p-4"
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.4 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 pt-2">
          {/* Title */}
          <motion.h3
            className="text-lg font-bold mb-3 leading-tight"
            animate={{ color: isHovered ? '#F1B32F' : '#FFFFFF' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Read More Link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            animate={{ color: isHovered ? '#F1B32F' : '#60A5FA' }}
            transition={{ duration: 0.3 }}
          >
            Read More
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? '0 0 30px rgba(241, 179, 47, 0.15), inset 0 0 30px rgba(241, 179, 47, 0.05)'
              : '0 0 0px rgba(241, 179, 47, 0)'
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-yellow/10 to-transparent rounded-bl-full" />
      </motion.div>
    </motion.div>
  );
};

const features = [
  {
    image: quotesImg,
    title: 'Send & Receive Quotes Instantly',
    description: 'Builders can send quote requests directly from posted projects, while tradies respond instantly through the app. All quotes are stored in one place for easy comparison.'
  },
  {
    image: tradiesImg,
    title: 'Tradies, Builders & Suppliers Network',
    description: 'Tradies build a clear professional reputation through verified ratings and reviews. Builders can confidently decide who to hire based on transparent feedback.'
  },
  {
    image: projectReportImg,
    title: 'Project Lifecycle Reports',
    description: 'Builders can generate complete project lifecycle reports by entering key project details. Track budgets, trade allocations and project dates with accurate cost tracking.'
  },
  {
    image: leadGenerationImg,
    title: 'Smart Lead Generation',
    description: 'Get matched with verified builders looking for your specific trade skills. Receive targeted project leads that match your expertise and location preferences.'
  },
  {
    image: tradieDiscoveryImg,
    title: 'Verified Tradie Discovery',
    description: 'Find the perfect tradie by location, specialty, ratings, and availability. Our verification system ensures all members have valid licenses and insurance.'
  },
  {
    image: budgetTrackingImg,
    title: 'Real-Time Budget Tracking',
    description: 'Monitor project costs, expenses, and stay within your budget with smart alerts. Get notifications when spending approaches your set limits.'
  },
  {
    image: excelReportsImg,
    title: 'Export Professional Reports',
    description: 'Download professional reports in Excel and PDF formats for accounting, compliance, and record keeping. One-click export with custom templates.'
  },
  {
    image: ratingsImg,
    title: 'Transparent Ratings & Reviews',
    description: 'Build trust with a transparent feedback system. Verified reviews help builders choose the best partners and tradies showcase their quality work.'
  },
  {
    image: verificationImg,
    title: 'ABN & License Verification',
    description: 'All members are verified for ABN, licenses, insurance, and professional credentials. Work with confidence knowing everyone meets industry standards.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-dark via-brand-blue to-brand-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-brand-yellow text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            Platform Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-300">
              Modern Construction
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            Everything you need to manage projects, connect with professionals, and grow your construction business.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://build2trade-customer-frontend-production.up.railway.app/role-selection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-amber-400 text-brand-dark font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-brand-yellow/25"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { FeatureGrid };
export default FeatureGrid;
