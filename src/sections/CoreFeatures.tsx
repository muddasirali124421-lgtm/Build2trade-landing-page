import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FeatureGrid } from './FeatureGrid'

const CoreFeatures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
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
                Start Building Better Connections Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-10"
              >
                Join builders and tradies already connecting, posting jobs, and managing projects in one place.
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
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-gold/25"
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
