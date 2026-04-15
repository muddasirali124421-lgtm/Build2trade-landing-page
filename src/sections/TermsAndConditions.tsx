import { motion } from 'framer-motion'
import { FileText, CheckCircle } from 'lucide-react'

const TermsAndConditions = () => {
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
            <FileText className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl font-bold text-brand-dark mb-3">
            Terms and Conditions
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
              Welcome to Build2Trade! These are the rules for using our platform. 
              Please read them so you know what to expect. We have kept the language simple.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Who Can Use Build2Trade
            </h2>
            <p className="text-gray-600 mb-4">
              To use our platform, you must:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Be at least 18 years old</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Live in Australia</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Work in the building or trade industry</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Give us true information about yourself</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Your Account
            </h2>
            <p className="text-gray-600 mb-4">
              When you make an account:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Keep your password safe</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not share your login with others</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Tell us right away if someone uses your account without permission</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Make sure your profile info stays correct and current</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              What You Can Do
            </h2>
            <p className="text-gray-600 mb-4">
              You are welcome to use Build2Trade to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Find building jobs or hire tradies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Send quotes and talk about projects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Share work updates and documents</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Leave honest reviews about work done</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              What You Cannot Do
            </h2>
            <p className="text-gray-600 mb-4">
              Please do not use Build2Trade for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Fake profiles or false information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Rude messages or harassment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Scams or fraud of any kind</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Trying to break or hack our system</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Using the app for illegal activities</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Payments and Fees
            </h2>
            <p className="text-gray-600 mb-4">
              Build2Trade offers both free and paid plans. Here is what you need to know:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Basic features are free to use</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Premium features require payment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">All fees are shown clearly before you pay</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">No refunds unless required by law</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Reviews and Ratings
            </h2>
            <p className="text-gray-600 mb-4">
              Honest reviews help everyone. When leaving reviews:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Only review people you have actually worked with</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Be honest and fair in your feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not use fake reviews to trick others</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              We Are Not Liable For
            </h2>
            <p className="text-gray-600 mb-4">
              Build2Trade helps you connect with others, but we are not responsible for:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">The quality of work done by tradies or builders</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Disputes between users</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Any money lost in deals between users</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Problems caused by things outside our control</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Ending Your Account
            </h2>
            <p className="text-gray-600 mb-4">
              You can stop using Build2Trade anytime. We can also end your account if you break these rules. 
              If your account is closed, you cannot make a new one without our permission.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Changes to These Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We may update these terms when needed. We will tell you about big changes. 
              Keep using the app means you accept the new terms.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Questions?
            </h2>
            <p className="text-gray-600">
              If you have questions about these terms, email us at{' '}
              <a href="mailto:legal@build2trade.com.au" className="text-brand-blue hover:underline">
                legal@build2trade.com.au
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsAndConditions
