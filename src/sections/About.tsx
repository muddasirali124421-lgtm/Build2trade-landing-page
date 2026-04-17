import { motion } from 'framer-motion'
import { ArrowRight, Download, QrCode, FileText, MessageSquare, FileCheck } from 'lucide-react'
import aboutImage from '../assets/WhatsApp Image 2026-04-15 at 7.05.02 AM (1).jpeg'

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            About Build2Trade
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help builders and tradies connect, find work, and grow their businesses
          </p>
        </motion.div>

        {/* Section 2: Our Story - Image Left, Content Right */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-brand-dark mb-10 text-center"
        >
          Our Story
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Mobile App Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center lg:sticky lg:top-8"
          >
            <img 
              src={aboutImage}
              alt="Download Build2Trade App" 
              className="rounded-2xl shadow-2xl max-w-full h-auto"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-brand-blue font-semibold text-lg leading-relaxed">
              Australia's First State-of-the-Art Construction App.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We are an Australian, construction-based company with over 20 years of real industry experience, proudly founded and based in Melbourne, Australia. Our journey began on construction sites and in project offices, working directly with builders, tradies and subcontractors across a wide range of residential and commercial projects. Through this hands-on experience, we gained a deep understanding of the daily challenges faced by the construction industry.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Over the years, we saw how fragmented processes, manual paperwork, poor communication and outdated systems continued to slow projects down, increase costs and create unnecessary stress. That insight led to one clear goal: to revolutionise the Australian construction industry through smart, practical and purpose-built technology.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              This vision became the foundation of our state-of-the-art mobile and web application, designed specifically for builders and tradies. Our platform digitises how projects are created, quoted, managed and delivered, bringing the entire workflow into one connected and easy-to-use system.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The app allows builders to publish projects, select required trades and sub-trades, receive quotes and communicate directly through built-in chat. Tradies benefit from targeted project leads, flexible quoting tools and greater visibility into genuine work opportunities. Everything is designed to save time, reduce admin and improve decision-making.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Builders gain access to powerful reporting tools that provide clear insights into project budgets, profit and loss, timelines and overall performance. With downloadable Excel and PDF project lifecycle reports, builders can analyse costs accurately, monitor financial health and maintain control throughout every stage of a project.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Trades and sub-trades are already structured within the platform, removing the need for manual setup. Users can simply select the services they need and get started immediately. A transparent ratings and reviews system for both builders and tradies helps promote trust, accountability and long-term professional relationships across the industry.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Verification plays a key role in our platform. ABN verification, profile verification and experience indicators help ensure users are dealing with legitimate, established professionals. This builds confidence, reduces risk and raises industry standards for everyone involved.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              As a company built by construction professionals, we don't believe in "one-size-fits-all" software. Every feature is designed with real-world use in mind—on site, in the office and on the go. Our focus is on clarity, reliability and practical value, rather than unnecessary complexity.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Looking ahead, we are committed to continuously evolving and expanding the platform. We will be gradually introducing new features, improving automation, expanding reporting capabilities and forming strategic partnerships to support the growth of both builders and tradies across Australia. Our goal is to create a long term digital ecosystem that supports the industry as it continues to grow and modernise.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              This platform represents more than just technology. It reflects decades of experience, industry knowledge and a genuine commitment to improving how construction operates in Australia. We are proud to be building a smarter, more connected future for the construction industry one project at a time.
            </p>

            <button className="bg-brand-blue hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors mt-4">
              Sign Up
            </button>
          </motion.div>
        </div>

        {/* Section 3: Vision & Founders - Light Theme */}
        <div className="mb-20">
          {/* MAC Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Our vision is to bring modern, practical technology into the construction industry. We're focused on making life easier for builders and tradies by delivering the tools, connections and clarity they need to manage projects confidently, efficiently and with complete transparency.
            </p>
            <h3 className="text-brand-blue font-bold text-xl mb-1">MAC</h3>
            <p className="text-gray-500 text-sm">Founder</p>
          </motion.div>

          {/* Kate Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              The idea for Build 2 Trade came directly from real job sites and real conversations with builders and tradies. We saw projects delayed by miscommunication, manual quoting, unreliable contacts and a lack of transparency. The vision was simple to create a single platform that removes friction, improves decision making and supports better outcomes on every build. Every feature has been shaped by real world examples and designed to solve practical problems faced on site every day.
            </p>
            <h3 className="text-brand-blue font-bold text-xl mb-1">Kate</h3>
            <p className="text-gray-500 text-sm">Founder</p>
          </motion.div>

          {/* Development Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              From the very beginning, we recognised that this was a truly innovative idea. Build 2 Trade set out to create the first state-of-the-art construction app to digitise an industry that had long needed a smarter solution. We clearly saw the gap in the market and shared the same vision of transforming how builders and tradies work together. The founders of Build 2 Trade were highly supportive and deeply involved throughout the process. They challenged us with complex, real-world construction workflows and trusted us to turn those ideas into a seamless mobile and web experience. Together, we pushed boundaries to deliver a powerful, user-friendly platform that brings modern technology into the construction industry. It was a rewarding experience to bring such an ambitious vision to life, and we're proud to have played a role in building a solution that genuinely adds value to builders and tradies across Australia.
            </p>
            <h3 className="text-brand-blue font-bold text-lg mb-1">Web & Mobile App Development Team</h3>
            <p className="text-brand-dark font-semibold">Taha Graphica Pro Artistry</p>
          </motion.div>
        </div>

        {/* Section 4: Why We Exist - Blue Highlighted Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-3xl p-8 lg:p-12 text-white shadow-xl mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-center">Why We Exist</h3>
          <p className="text-gray-200 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            The building industry was broken. Good tradies could not find work. 
            Builders could not find reliable workers. We fixed that by creating a platform that connects the right people at the right time.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
              <p className="text-4xl font-bold text-brand-yellow mb-2">10K+</p>
              <p className="text-sm text-gray-300">Active Users</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
              <p className="text-4xl font-bold text-brand-yellow mb-2">50K+</p>
              <p className="text-sm text-gray-300">Jobs Posted</p>
            </div>
          </div>
        </motion.div>

        {/* Section 5: App Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-brand-dark rounded-3xl p-8 lg:p-12 text-white overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Download App Now
              </h2>
              <p className="text-gray-300 mb-8">
                Get the full Build2Trade experience on your mobile device
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm text-gray-300">Get Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm text-gray-300">Project Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm text-gray-300">Get Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-yellow" />
                  <span className="text-sm text-gray-300">Live Chat</span>
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors border border-gray-700">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-2.96 1.78-2.46 5.98.22 7.13-.57 1.5-1.31 2.99-2.27 4.08zm-5.85-15.1c.07-1.76 1.5-3.3 3.24-3.47.25 1.96-1.64 3.78-3.24 3.47z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors border border-gray-700">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">GET IT ON</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: QR/Phone Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <QrCode className="w-32 h-32 text-white mx-auto mb-4" />
                <p className="text-center text-sm text-gray-300">Scan to Download</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-600 mb-6">
            Start using Build2Trade today and see how it helps your business
          </p>
          <button className="bg-brand-blue hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
