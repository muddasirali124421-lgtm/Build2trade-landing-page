import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

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
            <p className="text-gray-600 font-bold mb-6">SCHEDULE 1 – PRIVACY POLICY</p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Introduction</h3>
            <p className="text-gray-600 mb-6">
              Welcome to Build 2 Trade Pty Ltd, trading as "Build 2 Trade" ("we", "us", "our"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose and safeguard your data when you use our website, mobile application, and services (collectively, "the Platform").
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Information We Collect</h3>
            <p className="text-gray-600 mb-2">We collect the following types of information:</p>
            <p className="text-gray-600 mb-6">
              • Personal Information: Name, contact details, ABN, license numbers, insurance documents, references, social media links.<br />
              • Business Information: Company name, business registration details, project information.<br />
              • Financial Information: Payment details (via Stripe), billing history.<br />
              • Sensitive Information: Trade licences, insurance certificates, building plans, project documentation.<br />
              • Usage Data: Device info, IP address, location/GPS data, log files.<br />
              • Reviews and Ratings: Submitted by users about each other.<br />
              • Communications: Messages exchanged via the platform.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. How We Use Your Information</h3>
            <p className="text-gray-600 mb-2">We use your data to:</p>
            <p className="text-gray-600 mb-6">
              • Verify user identity and credentials.<br />
              • Facilitate matching between builders, tradies, and suppliers.<br />
              • Process payments and subscriptions.<br />
              • Improve our services and user experience.<br />
              • Conduct internal analytics and marketing (with consent where required).<br />
              • Monitor and enforce platform compliance.<br />
              • Manage disputes and customer support.<br />
              • Comply with legal obligations.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Disclosure of Information</h3>
            <p className="text-gray-600 mb-2">We may share your data with:</p>
            <p className="text-gray-600 mb-2">
              • Our administrative and support staff.<br />
              • Payment processors (e.g. Stripe).<br />
              • Service providers involved in hosting, analytics, and data processing.<br />
              • Legal or regulatory authorities, when required.<br />
              • Other users of the platform (e.g. when your profile is shown).
            </p>
            <p className="text-gray-600 mb-6">
              We do not currently share data internationally.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5. Data Retention</h3>
            <p className="text-gray-600 mb-6">
              We retain personal data and job-related documents for up to 3 years, unless required longer by law. You may request deletion of your personal data after this period.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">6. Data Security</h3>
            <p className="text-gray-600 mb-6">
              We take reasonable steps to protect your data, including access controls and encryption. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">7. Your Rights</h3>
            <p className="text-gray-600 mb-2">You have the right to:</p>
            <p className="text-gray-600 mb-2">
              • Access your personal data.<br />
              • Request corrections or updates.<br />
              • Request deletion of your data (subject to contractual obligations).<br />
              • Withdraw consent for certain uses.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us via the admin portal for any privacy-related requests.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">8. Cookies & Analytics</h3>
            <p className="text-gray-600 mb-6">
              We may use cookies and third-party analytics tools to monitor usage patterns and improve the platform.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">9. Marketing Communications</h3>
            <p className="text-gray-600 mb-6">
              We may send you email or SMS messages about your account or promotions. You can opt out at any time.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">10. Age Restrictions</h3>
            <p className="text-gray-600 mb-6">
              You must be 18 years or older to use the platform.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">11. Contact Us</h3>
            <p className="text-gray-600">
              For privacy inquiries, contact us through the admin portal or by emailing admin@mediumseagreen-sardine-197208.hostingersite.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
