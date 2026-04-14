import { motion } from 'framer-motion'
import { Clock, MessageSquare, Eye, Zap, Users, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Saves Time',
    description: 'Reduce hours spent searching for tradies and managing quotes. Everything in one place.',
    stat: '10+ hrs',
    statLabel: 'saved weekly',
  },
  {
    icon: MessageSquare,
    title: 'Reduces Miscommunication',
    description: 'Centralized messaging keeps all project conversations organized and accessible.',
    stat: '90%',
    statLabel: 'fewer errors',
  },
  {
    icon: Eye,
    title: 'Improves Transparency',
    description: 'Clear pricing, verified reviews, and project history for informed decision making.',
    stat: '100%',
    statLabel: 'verified profiles',
  },
  {
    icon: Zap,
    title: 'Faster Project Decisions',
    description: 'Quick quotes, instant messaging, and real-time updates keep projects moving.',
    stat: '3x',
    statLabel: 'faster decisions',
  },
  {
    icon: Users,
    title: 'Better Subcontractor Management',
    description: 'Organize your network, track performance, and build lasting partnerships.',
    stat: '25K+',
    statLabel: 'verified tradies',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Verified licenses, insurance checks, and rating system ensure reliable partnerships.',
    stat: '5★',
    statLabel: 'average rating',
  },
]

const Benefits = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-brand-gray-light">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]" />
      
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm font-semibold tracking-wider uppercase"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-4 mb-6 text-brand-navy"
          >
            Why Builders{' '}
            <span className="gradient-text">Love Build2Trade</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-2xl h-full relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 group-hover:from-brand-gold/30 group-hover:to-brand-gold/10 transition-all">
                      <benefit.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-gold">{benefit.stat}</div>
                      <div className="text-xs text-brand-gray">{benefit.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-brand-navy mb-3">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
