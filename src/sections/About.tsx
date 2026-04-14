import { motion } from 'framer-motion'
import { Download, QrCode, ArrowRight, CheckCircle } from 'lucide-react'

const About = () => {
  const highlights = [
    'Built by construction industry experts',
    'Real solutions for real problems',
    'Australia-wide network coverage',
    'Free basic membership available',
  ]

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[150px]" />
      
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - App Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent blur-3xl" />
              
              {/* Phone Mockup */}
              <motion.div
                className="relative glass rounded-3xl p-6 max-w-sm mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-blue-light" />
                    <span className="text-sm font-semibold text-brand-navy">Build2Trade</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <div className="w-2 h-2 rounded-full bg-brand-gray" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-light" />
                      <div>
                        <div className="text-sm font-medium text-brand-navy">Elite Builders Co.</div>
                        <div className="text-xs text-brand-gray">Sydney, NSW</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-gray">Rating</span>
                      <div className="flex text-brand-gold">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-sm font-medium text-brand-navy mb-2">Project Completion</div>
                    <div className="w-full h-2 bg-brand-gray-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-gold rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-brand-gray">
                      <span>Progress</span>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR Code Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass p-4 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <QrCode className="w-16 h-16 text-brand-blue" />
                <p className="text-xs text-brand-gray mt-2 text-center">Scan to Download</p>
              </motion.div>
            </div>

            {/* Download Buttons */}
            <div className="flex justify-center space-x-4 mt-12">
              <motion.button
                className="flex items-center space-x-3 glass px-6 py-3 rounded-xl hover:border-brand-blue/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Download className="w-5 h-5 text-brand-blue" />
                <div className="text-left">
                  <div className="text-[10px] text-brand-gray">Download on the</div>
                  <div className="text-sm font-semibold text-brand-navy">App Store</div>
                </div>
              </motion.button>
              <motion.button
                className="flex items-center space-x-3 glass px-6 py-3 rounded-xl hover:border-brand-blue/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Download className="w-5 h-5 text-brand-blue" />
                <div className="text-left">
                  <div className="text-[10px] text-brand-gray">Get it on</div>
                  <div className="text-sm font-semibold text-brand-navy">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue text-sm font-semibold tracking-wider uppercase"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 mb-6 text-brand-navy"
            >
              A Safe App Where{' '}
              <span className="gradient-text">Builders & Tradies Meet</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body mb-6"
            >
              Managing a building site is hard and messy. We made Build2Trade to make it simple. We want to stop the stress and confusion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-body mb-8"
            >
              Our app is for builders who need great workers, and tradies who want good jobs. Our mission is to make construction teamwork easy, clear, and fair for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl p-6 mb-8 text-left"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                <span role="img" aria-label="gift">🎁</span> Special Offer!
              </h3>
              <p className="text-gray-700 text-sm">
                Join today and get your first 3 months totally free! Try the app right now and see how much time it saves you.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="btn-secondary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
