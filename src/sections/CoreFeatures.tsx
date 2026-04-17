import { motion } from 'framer-motion'
import {
  MessageCircle,
  FileText,
  BarChart3,
  Users,
  Search,
  Wallet,
  Download,
  Star,
  ShieldCheck,
  ArrowRight,
  Zap,
  Clock,
  CheckCircle2
} from 'lucide-react'
import { useState } from 'react'
import { FeatureGrid } from './FeatureGrid'

const features = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant messaging between builders and tradies for real-time project updates and seamless communication.',
    color: 'from-amber-400 to-yellow-300',
    bgColor: 'bg-amber-500/10',
    benefits: ['Real-time messaging', 'File sharing', 'Group chats', 'Push notifications']
  },
  {
    icon: FileText,
    title: 'Quote Management',
    description: 'Create, send, and track quotes efficiently. Compare offers from multiple tradies in one place.',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    benefits: ['Digital quotes', 'Price comparison', 'Auto reminders', 'Quote history']
  },
  {
    icon: BarChart3,
    title: 'Project Reports',
    description: 'Detailed analytics and progress tracking for all your ongoing projects with visual dashboards.',
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-500/10',
    benefits: ['Visual dashboards', 'Progress tracking', 'Cost analysis', 'Export reports']
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Get matched with verified builders looking for your specific trade skills and expertise.',
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-500/10',
    benefits: ['Smart matching', 'Verified leads', 'Direct contact', 'Job alerts']
  },
  {
    icon: Search,
    title: 'Tradie Discovery',
    description: 'Find the perfect tradie by location, specialty, ratings, and availability in seconds.',
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-500/10',
    benefits: ['Advanced filters', 'Location search', 'Rating system', 'Availability check']
  },
  {
    icon: Wallet,
    title: 'Budget Tracking',
    description: 'Monitor project costs, expenses, and stay within your budget with smart alerts.',
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-500/10',
    benefits: ['Cost monitoring', 'Expense tracking', 'Budget alerts', 'Payment tracking']
  },
  {
    icon: Download,
    title: 'Excel/PDF Reports',
    description: 'Export professional reports for accounting, compliance, and record keeping.',
    color: 'from-cyan-500 to-sky-400',
    bgColor: 'bg-cyan-500/10',
    benefits: ['One-click export', 'Multiple formats', 'Custom templates', 'Auto-scheduling']
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Transparent feedback system helps you choose the best partners for your projects.',
    color: 'from-yellow-400 to-orange-300',
    bgColor: 'bg-yellow-500/10',
    benefits: ['Verified reviews', 'Rating system', 'Performance metrics', 'Trust scores']
  },
  {
    icon: ShieldCheck,
    title: 'Verification System',
    description: 'All members are verified for licenses, insurance, and professional credentials.',
    color: 'from-red-500 to-pink-400',
    bgColor: 'bg-red-500/10',
    benefits: ['License check', 'Insurance verify', 'ID verification', 'Background check']
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
}

const CoreFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-brand-gold/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue">Powerful Platform Features</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight"
            >
              Core Features Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">
                Construction Success
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Discover the powerful tools and features that make Build2Trade the #1 platform
              for builders and tradies across Australia.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: Clock, label: 'Save 10+ hrs/week', desc: 'On admin tasks' },
                { icon: CheckCircle2, label: '100% Verified', desc: 'All members' },
                { icon: Zap, label: 'Instant Connect', desc: 'Real-time chat' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg shadow-brand-blue/5 border border-gray-100"
                >
                  <div className="p-2 bg-brand-blue/10 rounded-xl">
                    <stat.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-brand-dark">{stat.label}</p>
                    <p className="text-xs text-gray-500">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, height: hoveredIndex === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {feature.benefits.map((benefit, i) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Arrow Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                    className="absolute bottom-8 right-8"
                  >
                    <ArrowRight className="w-5 h-5 text-brand-blue" />
                  </motion.div>

                  {/* Corner Decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${feature.bgColor} blur-2xl opacity-50`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Grid with Images */}
      <FeatureGrid />

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-12 lg:p-20 overflow-hidden"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to Transform Your Construction Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-10"
              >
                Join thousands of builders and tradies already using Build2Trade to streamline their workflow.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://build2trade-customer-frontend-production.up.railway.app/role-selection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-gold/25"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://build2trade-customer-frontend-production.up.railway.app/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm border border-white/20"
                >
                  Sign In
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CoreFeatures
