import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-brand-gold/20" />
      <div className="absolute inset-0 bg-brand-navy/80" />
      
      {/* Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(244, 180, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
          >
            Ready to Modernise Your{' '}
            <span className="gradient-text">Construction Workflow?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-lg max-w-2xl mx-auto mb-10"
          >
            Join thousands of builders and tradies who are already streamlining their projects, 
            finding better partners, and growing their businesses with Build2Trade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="btn-primary flex items-center justify-center space-x-2 group text-lg px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>Join Build2Trade Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="btn-secondary flex items-center justify-center space-x-2 text-lg px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-brand-gray mt-8"
          >
            Free to join • No credit card required • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
