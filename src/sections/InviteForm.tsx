import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const InviteForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    invitedBy: '',
    projectName: '',
    postCode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ email: '', invitedBy: '', projectName: '', postCode: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative py-20 lg:py-32 bg-brand-gray-light">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[150px]" />
      
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-sm font-semibold tracking-wider uppercase"
            >
              Invite Network
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 mb-6 text-brand-navy"
            >
              Invite Your{' '}
              <span className="gradient-text">Preferred Tradies</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-body mb-8"
            >
              Know great tradies who aren't on Build2Trade yet? Invite them to join 
              your network and collaborate on projects through our platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">Quick and easy invitation process</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">Tradies get verified before joining</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">Build your trusted network faster</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border-brand-gold/20">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">
                    Tradie Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-card/50 border border-brand-blue/10 text-brand-navy placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                    placeholder="tradic@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="invitedBy" className="block text-sm font-medium text-brand-gray mb-2">
                    Invited By (Your Name) *
                  </label>
                  <input
                    type="text"
                    id="invitedBy"
                    name="invitedBy"
                    value={formData.invitedBy}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-card/50 border border-brand-blue/10 text-brand-navy placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-brand-gray mb-2">
                    Project Name / Reference
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-brand-card/50 border border-brand-blue/10 text-brand-navy placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                    placeholder="Optional project reference"
                  />
                </div>

                <div>
                  <label htmlFor="postCode" className="block text-sm font-medium text-brand-gray mb-2">
                    Post Code *
                  </label>
                  <input
                    type="text"
                    id="postCode"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-card/50 border border-brand-blue/10 text-brand-navy placeholder-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                    placeholder="2000"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isSubmitted ? 'bg-green-500' : ''
                  }`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Invitation Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Invite</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InviteForm
