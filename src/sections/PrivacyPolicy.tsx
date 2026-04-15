import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'

const PrivacyPolicy = () => {
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
            <Shield className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl font-bold text-brand-dark mb-3">
            Privacy Policy
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
            <p className="text-gray-600 mb-8">
              We care about your privacy. This page explains what data we collect and how we use it. 
              We keep things simple so you can understand easily.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              What Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We only collect information that helps us run Build2Trade. Here is what we collect:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Your name and contact details (email, phone)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Your business information and trade skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Your location to show nearby jobs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">How you use the app (to make it better)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              How We Use Your Data
            </h2>
            <p className="text-gray-600 mb-4">
              We use your information to help you use Build2Trade. Here is how:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">To connect you with builders or tradies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">To show you jobs near your area</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">To send important messages about your account</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">To keep the app safe and working well</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Who Can See Your Data
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell your data to anyone. Here is who can see it:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Other users can see your profile and work history</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Our team can see it to help fix problems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We may share it if the law requires us to</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Keeping Your Data Safe
            </h2>
            <p className="text-gray-600 mb-4">
              We work hard to protect your information. We use security tools to keep your data safe. 
              However, no system is perfect. We recommend you also keep your password safe.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have control over your data. You can:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">See what data we have about you</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Fix any wrong information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Ask us to delete your account</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Say no to marketing emails</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              We use small files called cookies to make the app work better. 
              They help us remember your settings and keep you logged in.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this policy sometimes. If we make big changes, we will tell you by email 
              or through the app.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Questions?
            </h2>
            <p className="text-gray-600">
              If you have any questions about your privacy, email us at{' '}
              <a href="mailto:privacy@build2trade.com.au" className="text-brand-blue hover:underline">
                privacy@build2trade.com.au
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
