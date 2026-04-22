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
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> [Date of registration / sign up onto the application]<br /><br />
              <strong>Parties:</strong><br />
              Build 2 Trade Pty Ltd ABN 82 688 987 948 (“Build 2 Trade”, “we”, “us”, “our”)<br />
              User (individual or company) registering to use the Build 2 Trade platform (“User”, “you”, “your”)
            </p>

            <p className="text-gray-600 mb-6">
              By registering for, accessing, or using the Build 2 Trade Platform, you acknowledge and agree that:<br />
              • You have read and understood the terms of this Deed (including the Privacy Policy in Schedule 1);<br />
              • You have the authority to enter into this Deed personally or on behalf of your business or company;<br />
              • You agree to be legally bound by all terms, conditions, obligations, and policies set out in this Deed;<br />
              • This Deed is binding upon you from the date of registration and has the same force and effect as if it were signed in writing.
            </p>

            <p className="text-gray-600 mb-8 font-medium">
              If you do not agree to be bound by this Deed, you must not register for or use the Platform.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">1. DEFINITIONS AND INTERPRETATION</h3>
            <p className="text-gray-600 mb-6">
              1.1 “App” or “Platform” means the Build 2 Trade website, mobile application, and all related services and content.<br />
              1.2 “User Content” means all data, documents, profiles, reviews, messages, and materials uploaded or submitted by Users.<br />
              1.3 “Subscription Fees” means the monthly payments of $49.99 payable by the User to Build 2 Trade.<br />
              1.4 “Minimum Term” means the minimum 12-month subscription period.<br />
              1.5 “Dispute” means any disagreement or complaint between Users arising from the use of the Platform.<br />
              1.6 Headings do not affect interpretation. Words importing the singular include the plural and vice versa.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">2. USER AGREEMENT TO DEED</h3>
            <p className="text-gray-600 mb-6">
              2.1 By registering or using the App, you agree to be bound by this Deed including all its terms, conditions, obligations, warranties, and indemnities.<br />
              2.2 This Deed is a binding legal document executed as a deed.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">3. USER ELIGIBILITY AND REGISTRATION</h3>
            <p className="text-gray-600 mb-6">
              3.1 You warrant that you:<br />
              • Are at least 18 years old;<br />
              • Have full authority to enter this Deed on your own behalf or on behalf of your company;<br />
              • Will provide true, accurate, and complete information including licenses, ABN, insurance, and references;<br />
              • Consent to verification checks (company and social media reviews) by Build 2 Trade.<br />
              3.2 You agree to keep your registration details current and accurate.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">4. SERVICES AND PLATFORM USE</h3>
            <p className="text-gray-600 mb-6">
              4.1 Build 2 Trade operates as a facilitator connecting Builders, Tradies, Subcontractors, and Suppliers (“Users”).<br />
              4.2 Build 2 Trade does not enter into contracts on behalf of Users and is not responsible for work quality or disputes beyond mediation.<br />
              4.3 Users must conduct all communication and transactions through the App.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">5. SUBSCRIPTIONS, FEES AND PAYMENT TERMS</h3>
            <p className="text-gray-600 mb-6">
              5.1 You agree to pay all Subscription Fees via direct debit as invoiced, including monthly fees and per-quote fees.<br />
              5.2 Subscription has a minimum term of 12 months from registration date. Early termination will incur payment of outstanding fees for the remainder of the Minimum Term.<br />
              5.3 All fees are non-refundable.<br />
              5.4 Build 2 Trade may suspend or terminate access for non-payment.<br />
              5.5 Chargebacks or disputed payments without prior notice constitute breach of this Deed and may lead to immediate suspension and legal action.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">6. USER OBLIGATIONS AND CONDUCT</h3>
            <p className="text-gray-600 mb-6">
              6.1 You agree to:<br />
              • Upload truthful, accurate, and complete documents and project scopes;<br />
              • Provide fixed-price quotes based on uploaded scopes;<br />
              • Use the Platform respectfully without abusive, harassing, defamatory or explicit content;<br />
              • Maintain insurance (public liability, workers comp) and licenses as required;<br />
              • Comply with all applicable laws.<br />
              6.2 Build 2 Trade reserves the right to suspend or terminate accounts for misconduct, including but not limited to:<br />
              • Six (6) or more negative reviews;<br />
              • Failure to pay subscription fees;<br />
              • Uploading inappropriate content;<br />
              • Breach of this Deed.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">7. INTELLECTUAL PROPERTY</h3>
            <p className="text-gray-600 mb-6">
              7.1 You retain ownership of User Content but grant Build 2 Trade a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and publish User Content for operating and marketing the Platform.<br />
              7.2 All other intellectual property in the Platform belongs exclusively to Build 2 Trade.<br />
              7.3 You must not infringe or misuse Build 2 Trade’s IP.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">8. LIABILITY AND INDEMNITY</h3>
            <p className="text-gray-600 mb-6">
              <strong>8.1 Limitation of Liability:</strong><br />
              • Build 2 Trade excludes all liability for indirect, incidental, special, or consequential damages arising from Platform use.<br />
              • We do not guarantee the accuracy or reliability of User Content or workmanship of Users.<br />
              • We are not liable for losses resulting from disputes between Users.<br />
              <strong>8.2 Indemnity:</strong><br />
              You indemnify and hold harmless Build 2 Trade, its officers, employees, and agents from and against all claims, damages, losses, costs (including legal fees) and liabilities arising from:<br />
              • Your breach of this Deed;<br />
              • Non-payment of fees;<br />
              • Misconduct, negligence, or failure to hold required insurance;<br />
              • Any claim arising from your use of the Platform or User Content you upload;<br />
              • Any third-party claim arising from your acts or omissions.<br />
              <strong>8.3 This indemnity survives termination of this Deed.</strong>
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">9. DISPUTE RESOLUTION</h3>
            <p className="text-gray-600 mb-6">
              9.1 Users must seek to resolve disputes amicably in the first instance.<br />
              9.2 Build 2 Trade offers a mediation service through the App’s admin team.<br />
              9.3 Build 2 Trade is not liable for work quality or onsite conduct.<br />
              9.4 Any unresolved disputes may be referred to mediation, then to courts of Victoria as a last resort.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">10. TERMINATION AND SUSPENSION</h3>
            <p className="text-gray-600 mb-6">
              10.1 You may request termination by emailing admin@build2trade.com.au with at least 3 months’ notice.<br />
              10.2 If terminated before the Minimum Term, outstanding fees remain payable and may be charged.<br />
              10.3 Build 2 Trade may suspend or terminate your account for breach, non-payment, or misconduct without notice.<br />
              10.4 Upon termination, project data and plans uploaded by you will be deleted; personal information may be retained as per Privacy Policy.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">11. PRIVACY AND DATA PROTECTION</h3>
            <p className="text-gray-600 mb-6">
              11.1 Your personal information is collected, used, and stored as described in the attached Privacy Policy (Schedule 1).<br />
              11.2 You consent to Build 2 Trade using your data for platform operation, analytics, marketing, and compliance.<br />
              11.3 You have rights of access, correction, and deletion under applicable privacy laws, detailed in Schedule 1.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">12. GOVERNING LAW AND JURISDICTION</h3>
            <p className="text-gray-600 mb-6">
              12.1 This Deed is governed by the laws of Victoria, Australia.<br />
              12.2 Any disputes will be subject to mediation first and then resolved by courts in Victoria.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">13. GENERAL PROVISIONS</h3>
            <p className="text-gray-600 mb-6">
              13.1 Entire Agreement: This Deed and Schedule 1 constitute the entire agreement between you and Build 2 Trade.<br />
              13.2 Amendments: Build 2 Trade may update these terms; continued use constitutes acceptance.<br />
              13.3 Severability: If any clause is unenforceable, the remainder remains in force.<br />
              13.4 Waiver: Failure to enforce any right is not a waiver of that right.<br />
              13.5 Assignment: You may not assign this Deed without prior consent; Build 2 Trade may assign or subcontract rights and obligations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsAndConditions
