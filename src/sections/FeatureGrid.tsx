import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { FloatingDots } from '../components/FloatingDots';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 120;
  const shouldTruncate = description.length > maxLength;
  const displayText = isExpanded || !shouldTruncate
    ? description
    : description.substring(0, maxLength).trim() + '...';

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
            {displayText}
          </p>

          {/* Read More Link */}
          {shouldTruncate && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer"
              animate={{ color: isHovered ? '#F1B32F' : '#60A5FA' }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <motion.span
                animate={{ x: isHovered ? 4 : 0, rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          )}
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
    description: 'Builders can send quote requests directly from posted projects, while tradies respond instantly through the app. All quotes are stored in one place, making it easy to compare options, communicate through chat and keep everyone aligned. This streamlined process reduces back-and-forth, saves time and helps projects move forward faster with clear decisions.'
  },
  {
    image: tradiesImg,
    title: 'Tradies, Builders & Suppliers Using Build 2 Trade',
    description: 'Tradies build a clear professional reputation through verified ratings and reviews. Builders can review this feedback to confidently decide who to hire, accept quotes or reject them with clear reasons. Tradies can also request rating updates from builders through the admin portal, helping ensure feedback remains fair, current and reflective of completed work.'
  },
  {
    image: projectReportImg,
    title: 'Project Lifecycle Report',
    description: 'Builders can generate a complete project lifecycle report by entering key project details, including estimated budgets, trade allocations and project dates. Quotes can be assigned against each trade to provide accurate cost tracking from the start. The platform allows builders to download detailed project overview reports in Excel and PDF format, giving clear visibility into total costs, trade breakdowns and timelines. These reports make it easy to analyse budgets, monitor spending and identify whether a project is running at a profit or a loss, helping builders stay in control throughout the entire project lifecycle.'
  },
  {
    image: leadGenerationImg,
    title: 'Smart Lead Generation',
    description: 'Find quality work faster with intelligent lead generation designed for builders and tradies. Builders post projects directly in the app, giving tradies instant access to genuine opportunities without cold calls or chasing quotes. Tradies receive leads based on their selected trade and location preferences, ensuring only relevant work is shown.'
  },
  {
    image: tradieDiscoveryImg,
    title: 'Seamless Project Management',
    description: 'Manage projects from start to finish in one place. Builders can post projects by selecting required trades and sub-trades, receive quotes and communicate through in-app chat. Quotes can be accepted or rejected after reviewing tradie ratings, reviews and verified profiles, including ABN and email verification. Builders can also download project overview reports in Excel and PDF format to track budgets, costs and progress throughout the project lifecycle.'
  },
  {
    image: budgetTrackingImg,
    title: 'Premium Support & Guidance',
    description: 'Members receive priority support and ongoing guidance to get the most from the platform. Whether setting up projects, managing subscriptions or using advanced reporting tools, help is always available. Subscription pricing may increase in the coming months. Joining early ensures access to current rates and full feature availability as the platform continues to grow.'
  },
  {
    image: verificationImg,
    title: 'ABN Verification',
    description: 'Both builders and tradies are required to provide their ABN during sign-up. Once verified, a verified ABN badge is displayed on their profile, helping build trust and transparency across the platform. ABN verification allows users to confidently connect, quote and work with verified businesses, ensuring greater credibility and professionalism for everyone involved.'
  },
  {
    image: excelReportsImg,
    title: 'Smart Alerts & Notifications',
    description: 'The Alerts tab keeps users informed with real-time notifications for chats, quotes, projects and other important updates. Everything is organised in one place, so nothing is missed. Additional tabs within Alerts separate quotes, messages and unread notifications, making it easy to review updates quickly and respond on time.'
  },
  {
    image: ratingsImg,
    title: 'Dashboard Overview',
    description: 'The dashboard gives builders a clear overview of all active projects, including hired tradies and received quotes. Everything is organised in one place, making it easy to track progress and manage ongoing work. For tradies, the dashboard displays applied jobs, pending quotes and hired projects, with clear counts for each. This provides a quick snapshot of current workload and upcoming opportunities at a glance.'
  },
  {
    image: budgetTrackingImg,
    title: 'Priority Job Access',
    description: 'Members receive early access to newly posted projects through priority job visibility. Tradies see relevant leads first based on their selected trade and location range, helping them respond faster and secure more work. Builders benefit from quicker responses and better engagement from available, verified tradies, keeping projects moving without delays.'
  },
  {
    image: quotesImg,
    title: 'Unlimited Project Posting',
    description: 'Builders can publish unlimited projects with automatic trade and sub-trade setup. While creating a project, simply select the required trades and sub-trades with a tap, no manual entry required.'
  },
  {
    image: projectReportImg,
    title: 'Exclusive Member Tools',
    description: 'Members unlock advanced tools designed to support complete project control. Builders can generate full project lifecycle reports, download Excel and PDF summaries, track budgets, analyse profit or loss, and collect trade invoices directly through the app. Tradies can send quotes, requote rejected jobs, issue invoices and manage multiple projects efficiently from one place.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-dark via-brand-blue to-brand-dark relative overflow-hidden">
      {/* Floating dots background */}
      <FloatingDots count={20} variant="blue" />
      <div className="container mx-auto px-4 relative z-10">
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
