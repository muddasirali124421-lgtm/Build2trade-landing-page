import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, LayoutDashboard, Shield, FileText, Search, Layers, ArrowRight } from 'lucide-react';
import collaborationImg from '../assets/feature-collaboration.png';
import insightsImg from '../assets/feature-insights.png';
import trackingImg from '../assets/feature-tracking.jpg';
import verificationImg from '../assets/feature-verification.png';
import quotingImg from '../assets/feature-quoting.png';
import marketplaceImg from '../assets/feature-marketplace.png';
import managementImg from '../assets/feature-management.png';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
}

const FeatureSection = ({ title, description, image, icon, reverse = false, bgColor = 'bg-white' }: FeatureSectionProps) => {
  return (
    <section className={`py-20 lg:py-28 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex items-center justify-center ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative w-full flex items-center justify-center">
              <img 
                src={image} 
                alt={title}
                className="w-full max-w-full h-auto rounded-xl object-contain"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`flex items-center ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="w-full">
              {/* Icon badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-blue/25"
              >
                {icon}
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                {title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-dark transition-colors group"
              >
                Learn more 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FeatureShowcase = () => {
  const features = [
    {
      title: "Collaborate Seamlessly on Every Project",
      description: "Upload, share, and discuss project documents directly within your project chat. Keep all communication in one place and ensure everyone stays on the same page throughout the project lifecycle.",
      image: collaborationImg,
      icon: <MessageSquare className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Make Smarter Hiring Decisions",
      description: "View project specifics, assigned trades, budgets, and timelines. Read and submit reviews easily to build trust and make informed decisions about who to hire for your next project.",
      image: insightsImg,
      icon: <BarChart3 className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gray-50"
    },
    {
      title: "Track and Manage Projects Easily",
      description: "Monitor statuses, approvals, and communication from one centralized dashboard. Get real-time updates on project progress and never miss an important milestone or approval request.",
      image: trackingImg,
      icon: <LayoutDashboard className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Connect with Trusted Professionals",
      description: "Trades verify their profiles while clients review qualifications before hiring. Our verification system ensures you're working with qualified, reliable professionals every time.",
      image: verificationImg,
      icon: <Shield className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gradient-to-b from-blue-50 to-white"
    },
    {
      title: "Simplify Your Quoting Process",
      description: "Build, send, and approve project quotes quickly while keeping everything documented. Our streamlined quoting system helps you win more jobs and manage client expectations effectively.",
      image: quotingImg,
      icon: <FileText className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Find Projects or Hire Faster",
      description: "Discover renovation jobs or connect with contractors in one streamlined platform. Whether you're looking for work or need to hire, our marketplace makes it simple and efficient.",
      image: marketplaceImg,
      icon: <Search className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gray-50"
    },
    {
      title: "Manage Everything in One Place",
      description: "Track timelines, budgets, trades, and documents without switching tools. Our all-in-one project management solution brings everything together for maximum efficiency.",
      image: managementImg,
      icon: <Layers className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-gradient-to-b from-white to-blue-50"
    }
  ];

  return (
    <div id="features">
      {/* Section Header */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold mb-6"
          >
            Powerful Features
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Everything You Need to <span className="text-brand-yellow">Build Better</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            From collaboration to project management, Build2Trade provides all the tools you need to run your construction business efficiently.
          </motion.p>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
};
