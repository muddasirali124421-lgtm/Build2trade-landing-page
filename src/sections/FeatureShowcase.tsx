import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, LayoutDashboard, Shield, FileText, Layers, Bell, Smartphone } from 'lucide-react';
import collaborationImg from '../assets/feature-collaboration.png';
import insightsImg from '../assets/feature-insights.png';
import trackingImg from '../assets/feature-tracking.png';
import verificationImg from '../assets/feature-verification.png';
import quotingImg from '../assets/feature-quoting.png';
import managementImg from '../assets/feature-management.png';
import notificationsImg from '../assets/WhatsApp Image 2026-04-17 at 5.16.48 AM-Photoroom.png';
import mobileAppImg from '../assets/WhatsApp Image 2026-04-17 at 5.16.49 AM-Photoroom.png';

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
                className="w-full max-w-[320px] lg:max-w-[380px] h-auto rounded-xl object-contain"
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
      description: "Upload, share, and discuss project documents directly within your project chat. Keep all communication in one place and ensure everyone stays on the same page throughout the project lifecycle. Our integrated messaging system supports file sharing, image uploads, and threaded conversations, making it easy to track decisions and maintain a complete project history. Real-time notifications ensure no message goes unnoticed.",
      image: collaborationImg,
      icon: <MessageSquare className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Make Smarter Hiring Decisions",
      description: "View project specifics, assigned trades, budgets, and timelines. Read and submit reviews easily to build trust and make informed decisions about who to hire for your next project. Access detailed performance metrics, past project portfolios, and verified credentials. Our intelligent matching algorithm recommends the best tradies based on your specific requirements, location, and project scope, saving you time and reducing hiring risks.",
      image: insightsImg,
      icon: <BarChart3 className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gray-50"
    },
    {
      title: "Track and Manage Projects Easily",
      description: "Monitor statuses, approvals, and communication from one centralized dashboard. Get real-time updates on project progress and never miss an important milestone or approval request. Visualize your project timeline with interactive Gantt charts, set automated reminders for deadlines, and track budget allocations across multiple trades. Our comprehensive reporting tools give you complete visibility into every aspect of your construction project.",
      image: trackingImg,
      icon: <LayoutDashboard className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Connect with Trusted Professionals",
      description: "Trades verify their profiles while clients review qualifications before hiring. Our verification system ensures you're working with qualified, reliable professionals every time. We validate ABN numbers, trade licenses, insurance coverage, and professional certifications. Plus, our transparent review system allows you to see detailed feedback from previous clients, helping you choose tradies with proven track records of quality work and reliability.",
      image: verificationImg,
      icon: <Shield className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gradient-to-b from-blue-50 to-white"
    },
    {
      title: "Simplify Your Quoting Process",
      description: "Build, send, and approve project quotes quickly while keeping everything documented. Our streamlined quoting system helps you win more jobs and manage client expectations effectively. Create professional quotes with itemized breakdowns, attach specifications and drawings, and track quote status in real-time. Clients can approve quotes digitally, and automatic follow-ups ensure no opportunity slips through the cracks.",
      image: quotingImg,
      icon: <FileText className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Manage Projects in One Place",
      description: "Track timelines, budgets, trades, and documents without switching tools. Our all-in-one project management solution brings everything together for maximum efficiency. From initial planning to final handover, manage every phase of your project within a single platform. Store contracts, permits, and specifications securely in the cloud, accessible from any device. Collaborate with your entire team including architects, engineers, and subcontractors seamlessly.",
      image: managementImg,
      icon: <Layers className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gradient-to-b from-white to-blue-50"
    },
    {
      title: "Real-Time Notifications & Alerts",
      description: "Never miss what matters. Get instant alerts for new quotes, messages, and project milestones the moment they happen. Stay connected to your work 24/7 with smart notifications delivered straight to your device. Customize your preferences to focus on what is urgent, act faster, and keep every project moving without delays.",
      image: notificationsImg,
      icon: <Bell className="w-7 h-7" />,
      reverse: false,
      bgColor: "bg-white"
    },
    {
      title: "Access Anywhere with Mobile App",
      description: "Communicate with tradies and builders directly from your smartphone. Digitalise your projects, grow your tradie network, and take control of every job from one platform.",
      image: mobileAppImg,
      icon: <Smartphone className="w-7 h-7" />,
      reverse: true,
      bgColor: "bg-gray-50"
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
