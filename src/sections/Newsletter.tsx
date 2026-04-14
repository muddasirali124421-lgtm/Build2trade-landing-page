import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="relative py-16 bg-brand-navy border-t border-white/5">
      <div className="section-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 lg:p-12 rounded-2xl text-center border-brand-gold/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 mb-6"
          >
            <Mail className="w-8 h-8 text-brand-gold" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl lg:text-3xl font-bold text-white mb-4"
          >
            Stay Updated with{' '}
            <span className="gradient-text">Build2Trade</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-brand-gray mb-8 max-w-lg mx-auto"
          >
            Subscribe to our newsletter for the latest platform updates, industry insights, 
            and exclusive offers for builders and tradies.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl bg-brand-card/50 border border-white/10 text-white placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                placeholder="Enter your email"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all ${
                isSubmitted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black hover:shadow-lg hover:shadow-brand-gold/30'
              }`}
              whileHover={!isSubmitting && !isSubmitted ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting && !isSubmitted ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-brand-gray mt-6"
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
