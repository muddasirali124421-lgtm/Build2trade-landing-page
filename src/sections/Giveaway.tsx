import { motion } from 'framer-motion'
import { Gift, CheckCircle, ArrowRight } from 'lucide-react'

const Giveaway = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-dark to-brand-blue">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-brand-yellow" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Win Big With Build2Trade
          </h1>
          <p className="text-xl text-gray-300">
            Join our giveaway and get amazing prizes
          </p>
        </motion.div>

        {/* Current Giveaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 lg:p-12 mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow text-brand-dark text-sm font-bold mb-4">
            Current Giveaway
          </span>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Get 3 Months Free
          </h2>
          <p className="text-gray-600 mb-6">
            New members can win 3 months of free premium access to Build2Trade. 
            Use all our tools without paying anything.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Free Premium Access</p>
                <p className="text-sm text-gray-500">Use all paid features</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Find Unlimited Jobs</p>
                <p className="text-sm text-gray-500">No job search limits</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Send More Quotes</p>
                <p className="text-sm text-gray-500">Quote on any project</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Priority Support</p>
                <p className="text-sm text-gray-500">Get help when you need</p>
              </div>
            </div>
          </div>

          <button className="btn-primary flex items-center gap-2">
            Enter Giveaway
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* How to Enter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur rounded-3xl p-8 lg:p-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            How to Join
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-dark font-bold text-xl flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <p className="text-white font-semibold mb-1">Download the App</p>
              <p className="text-gray-300 text-sm">Get Build2Trade on your phone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-dark font-bold text-xl flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <p className="text-white font-semibold mb-1">Make Your Profile</p>
              <p className="text-gray-300 text-sm">Add your details and skills</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-dark font-bold text-xl flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <p className="text-white font-semibold mb-1">Complete Tasks</p>
              <p className="text-gray-300 text-sm">Finish simple steps to enter</p>
            </div>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Winners picked every month. Open to all new members in Australia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Giveaway
