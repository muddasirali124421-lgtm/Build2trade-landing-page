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
            <p className="text-gray-600 mb-8">
              These Terms of Use explain how to use Build2Trade properly. 
              By using our app, you agree to follow these rules. We have written them in simple words.
            </p>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Using Our App
            </h2>
            <p className="text-gray-600 mb-4">
              Build2Trade is a tool to help builders and tradies connect. You can use it to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Create a profile to show your skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Search for jobs or workers in your area</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Send and receive quotes for work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Chat with other members</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Manage your projects and documents</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Your Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              When you use Build2Trade, you agree to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Follow all Australian laws</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Have proper licenses for your trade work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Pay taxes on money you earn through jobs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Keep your insurance up to date</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Work safely and follow building rules</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Content You Share
            </h2>
            <p className="text-gray-600 mb-4">
              You can add text, photos, and other content to Build2Trade. When you do:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">You own your content, but we can show it to other users</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Only share content you have the right to share</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not share anything illegal or harmful</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We may remove content that breaks our rules</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              App Features
            </h2>
            <p className="text-gray-600 mb-4">
              Build2Trade has different features depending on your plan:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Free users get basic features like profile and job search</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Paid users get extra features like unlimited quotes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Features may change as we improve the app</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Messaging and Communication
            </h2>
            <p className="text-gray-600 mb-4">
              You can message other users through our app. When you do:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Be polite and professional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not send spam or unwanted messages</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not try to take conversations outside the app to avoid fees</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Job Postings and Quotes
            </h2>
            <p className="text-gray-600 mb-4">
              When posting jobs or sending quotes:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Give clear and honest details about the work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not post fake jobs or jobs that do not exist</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Quotes should be fair and realistic</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Technical Stuff
            </h2>
            <p className="text-gray-600 mb-4">
              About using the app technically:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not try to hack or break our app</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not use bots or automated tools without permission</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Do not copy or scrape our content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We may block access if you abuse the system</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Disputes Between Users
            </h2>
            <p className="text-gray-600 mb-4">
              If you have a problem with another user:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Try to solve it directly with the other person first</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We are not responsible for fixing disputes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We may help by sharing information if needed</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Updates to the App
            </h2>
            <p className="text-gray-600 mb-4">
              We are always making Build2Trade better. This means:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We add new features and fix bugs regularly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">The app may be down sometimes for maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">We may remove features that do not work well</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about using Build2Trade, email us at{' '}
              <a href="mailto:support@build2trade.com.au" className="text-brand-blue hover:underline">
                support@build2trade.com.au
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsOfUse
