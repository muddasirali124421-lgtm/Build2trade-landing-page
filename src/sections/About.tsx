import { motion } from 'framer-motion'
import { Users, Target, Heart, Shield, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            About Build2Trade
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help builders and tradies connect, find work, and grow their businesses
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Build2Trade started with a simple idea. We saw builders struggling to find good tradies. 
              And we saw skilled tradies looking for more work. There had to be a better way to connect them.
            </p>
            <p className="text-gray-600 mb-4">
              So we made an app that brings builders and tradies together. No more phone calls that go nowhere. 
              No more waiting for quotes that never come. Just a simple way to find the right person for the job.
            </p>
            <p className="text-gray-600">
              Today, thousands of builders and tradies use Build2Trade across Australia. 
              We are proud to help them work better and grow their businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-3xl p-8 lg:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Why We Exist</h3>
            <p className="text-gray-200 mb-6">
              The building industry was broken. Good tradies could not find work. 
              Builders could not find reliable workers. We fixed that.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-brand-yellow">10K+</p>
                <p className="text-sm text-gray-300">Active Users</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-brand-yellow">50K+</p>
                <p className="text-sm text-gray-300">Jobs Posted</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make tools that help the building industry work better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="font-bold text-brand-dark mb-2">Connect People</h3>
            <p className="text-gray-600 text-sm">
              We bring builders and tradies together so they can work on projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="font-bold text-brand-dark mb-2">Find Jobs</h3>
            <p className="text-gray-600 text-sm">
              Builders post jobs. Tradies find work that matches their skills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="font-bold text-brand-dark mb-2">Build Trust</h3>
            <p className="text-gray-600 text-sm">
              Reviews and ratings help everyone find reliable people to work with
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="font-bold text-brand-dark mb-2">Stay Safe</h3>
            <p className="text-gray-600 text-sm">
              We check profiles and keep your information secure
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 lg:p-12 text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Fairness</h3>
              <p className="text-gray-300 text-sm">
                Everyone deserves a fair chance to find work and workers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Transparency</h3>
              <p className="text-gray-300 text-sm">
                No hidden fees. No surprises. Just honest business
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Efficiency</h3>
              <p className="text-gray-300 text-sm">
                Save time and get more done with less hassle
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-600 mb-6">
            Start using Build2Trade today and see how it helps your business
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
