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
  ArrowUpRight
} from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant messaging between builders and tradies for real-time project updates.',
    color: 'from-brand-gold to-brand-gold-light',
  },
  {
    icon: FileText,
    title: 'Quote Management',
    description: 'Create, send, and track quotes efficiently. Compare offers from multiple tradies.',
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: BarChart3,
    title: 'Project Reports',
    description: 'Detailed analytics and progress tracking for all your ongoing projects.',
    color: 'from-green-500 to-green-400',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Get matched with verified builders looking for your specific trade skills.',
    color: 'from-purple-500 to-purple-400',
  },
  {
    icon: Search,
    title: 'Tradie Discovery',
    description: 'Find the perfect tradie by location, specialty, ratings, and availability.',
    color: 'from-pink-500 to-pink-400',
  },
  {
    icon: Wallet,
    title: 'Budget Tracking',
    description: 'Monitor project costs, expenses, and stay within your budget with alerts.',
    color: 'from-orange-500 to-orange-400',
  },
  {
    icon: Download,
    title: 'Excel/PDF Reports',
    description: 'Export professional reports for accounting, compliance, and record keeping.',
    color: 'from-cyan-500 to-cyan-400',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Transparent feedback system helps you choose the best partners for your projects.',
    color: 'from-yellow-500 to-yellow-400',
  },
  {
    icon: ShieldCheck,
    title: 'Verification System',
    description: 'All members are verified for licenses, insurance, and professional credentials.',
    color: 'from-red-500 to-red-400',
  },
]

const Features = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-brand-navy">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-[150px]" />
      
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm font-semibold tracking-wider uppercase"
          >
            Platform Features
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-4 mb-6 text-white"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body max-w-2xl mx-auto"
          >
            Powerful tools designed specifically for the construction industry. 
            Streamline your workflow and grow your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="glass p-6 rounded-2xl h-full transition-all duration-300 group-hover:bg-brand-card/80 group-hover:border-brand-gold/30">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-brand-gray text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
