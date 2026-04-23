import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useToast } from '../components/Toast'

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_j9qdr37',
  TEMPLATE_ID: 'template_vzlsdyr',
  PUBLIC_KEY: 'q4Z7dLk7zL-zZiIOV',
  TO_EMAIL: 'admin@build2trade.com.au'
} as const

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [isEmailJSReady, setIsEmailJSReady] = useState(false)
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      setIsEmailJSReady(true)
      console.log('✅ EmailJS initialized successfully')
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error)
      showToast('Email service not available. Please try again later.', 'error')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate EmailJS is ready
    if (!isEmailJSReady) {
      showToast('Email service not ready. Please refresh the page.', 'error')
      return
    }
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.', 'error')
      return
    }
    
    setIsSending(true)
    
    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone?.trim() || 'Not provided',
        message: formData.message.trim(),
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email.trim()
      }
      
      console.log('📧 Sending email with params:', templateParams)
      console.log('🔧 EmailJS Config:', EMAILJS_CONFIG)
      
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )
      
      console.log('✅ EmailJS Success:', result)
      console.log('📨 Status:', result.status)
      console.log('🔖 Text:', result.text)
      
      if (result.status === 200) {
        showToast('✅ Message sent successfully! We will get back to you soon.', 'success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(`Unexpected status: ${result.status}`)
      }
    } catch (error: any) {
      console.error('❌ EmailJS Error:', error)
      
      // Detailed error logging
      const errorInfo = {
        message: error?.message || 'Unknown error',
        text: error?.text || 'No error text',
        status: error?.status || 'No status',
        name: error?.name || 'No name'
      }
      
      console.error('❌ Error Details:', errorInfo)
      
      // User-friendly error message
      let userMessage = 'Failed to send message. '
      
      if (error?.text?.includes('template')) {
        userMessage += 'Template not found. Please verify EmailJS configuration.'
      } else if (error?.text?.includes('service')) {
        userMessage += 'Email service not found. Please verify EmailJS configuration.'
      } else if (error?.text?.includes('network') || error?.message?.includes('network')) {
        userMessage += 'Network error. Please check your internet connection.'
      } else if (error?.message?.includes('Unauthorized') || error?.status === 401) {
        userMessage += 'Invalid API key. Please verify EmailJS configuration.'
      } else {
        userMessage += error?.text || error?.message || 'Please try again or contact us directly.'
      }
      
      showToast(userMessage, 'error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question? We are here to help. Send us a message and we will reply soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Enter your phone (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSending || !isEmailJSReady}
                className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(241,179,47,0.3)] hover:shadow-[0_0_30px_rgba(241,179,47,0.5)] transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_20px_rgba(241,179,47,0.3)]"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : !isEmailJSReady ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Initializing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl font-bold mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-gray-300">+61 485 000 915</p>
                    <p className="text-sm text-gray-400">Mon-Fri, 9am-5pm AEST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-300">admin@build2trade.com.au</p>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">ABN</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">ABN</p>
                    <p className="text-gray-300">82 688 987 948</p>
                    <p className="text-sm text-gray-400">Australian Business Number</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  For urgent matters, please call us. For everything else, email works best.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
