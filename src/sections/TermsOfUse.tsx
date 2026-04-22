import { motion } from 'framer-motion'
import { BookOpen, CheckCircle } from 'lucide-react'

const TermsOfUse = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl font-bold text-brand-dark mb-3">
            Terms of Use
          </h1>
          <p className="text-gray-600">
            Last updated: January 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Build 2 Trade – Terms of Use</h2>
            <p className="text-gray-600 font-medium mb-6">Last Updated: January 13, 2026</p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Agreement to Terms</h3>
            <p className="text-gray-600 mb-4">
              By accessing or using the Build 2 Trade mobile application, you agree to be bound by these Terms of Use.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Subscription Terms</h3>
            <p className="text-gray-600 mb-4">
              Build 2 Trade offers an auto-renewable subscription.<br />
              Price: $49.99 per month (AUD).<br />
              Payment will be charged to your Apple ID account at confirmation of purchase.<br />
              Subscription automatically renews unless cancelled at least 24 hours before the end of the current period.<br />
              You can manage or cancel subscriptions in your Apple ID account settings.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Services</h3>
            <p className="text-gray-600 mb-4">
              The subscription provides access to:<br />
              Builder and Tradie modules<br />
              Project creation and management<br />
              Sending and receiving quotations<br />
              In-app chat system<br />
              Dashboard insights and work management
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Cancellation & Refunds</h3>
            <p className="text-gray-600 mb-4">
              You may cancel your subscription anytime via Apple ID settings.<br />
              Cancellation takes effect at the end of the current billing period.<br />
              Refunds are subject to Apple's refund policy.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5. User Responsibilities</h3>
            <p className="text-gray-600 mb-4">
              You agree to use the app only for lawful purposes and not to misuse any features.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">6. Limitation of Liability</h3>
            <p className="text-gray-600 mb-4">
              Build 2 Trade shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">7. Changes to Terms</h3>
            <p className="text-gray-600 mb-4">
              We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">8. Contact Us</h3>
            <p className="text-gray-600 mb-4">
              For questions about these Terms, contact:<br />
              Email: admin@mediumseagreen-sardine-197208.hostingersite.com<br />
              Website: https://mediumseagreen-sardine-197208.hostingersite.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsOfUse
