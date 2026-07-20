'use client';

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Send, Loader2, ShieldAlert, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useToast } from '@/components/Toast'

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  TO_EMAIL: 'admin@build2trade.com.au'
} as const

const DeleteAccount = () => {
  const [isSending, setIsSending] = useState(false)
  const [isEmailJSReady, setIsEmailJSReady] = useState(false)
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  })

  useEffect(() => {
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      setIsEmailJSReady(true)
    } catch {
      showToast('Email service not available. Please try again later.', 'error')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isEmailJSReady) {
      showToast('Email service not ready. Please refresh the page.', 'error')
      return
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.reason.trim()) {
      showToast('Please fill in all required fields.', 'error')
      return
    }

    setIsSending(true)

    try {
      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        phone: 'Account Deletion Request',
        message: `ACCOUNT DELETION REQUEST\n\nReason: ${formData.reason.trim()}`,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email.trim()
      }

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      if (result.status === 200) {
        showToast('Your deletion request has been submitted. We will process it within 30 days.', 'success')
        setFormData({ name: '', email: '', reason: '' })
      } else {
        throw new Error(`Unexpected status: ${result.status}`)
      }
    } catch (error: any) {
      let userMessage = 'Failed to submit request. '

      if (error?.text?.includes('template')) {
        userMessage += 'Configuration error. Please try contacting us directly.'
      } else if (error?.message?.includes('network') || error?.text?.includes('network')) {
        userMessage += 'Network error. Please check your internet connection.'
      } else {
        userMessage += 'Please try again or email us at admin@build2trade.com.au'
      }

      showToast(userMessage, 'error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 mb-6">
            <Trash2 className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Delete My Account
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Submit a request to permanently delete your Build2Trade account and all associated data.
          </p>
        </motion.div>

        {/* Warning box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10"
        >
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-red-800 mb-2">Before you proceed</h2>
              <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                <li>This action is permanent and cannot be undone.</li>
                <li>Your profile, listings, messages, and all activity will be erased.</li>
                <li>Requests are processed within 30 days of submission.</li>
                <li>You will receive a confirmation email once your data has been deleted.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                placeholder="Email address linked to your account"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must match the email address registered on your Build2Trade account.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">
                Reason for Deletion <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                placeholder="Please tell us why you want to delete your account (optional but appreciated)"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSending || !isEmailJSReady}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : !isEmailJSReady ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Initializing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Deletion Request
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-gray-100 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Mail className="w-4 h-4" />
            <span>
              Alternatively, email us directly at{' '}
              <a href="mailto:admin@build2trade.com.au" className="text-brand-blue hover:underline font-medium">
                admin@build2trade.com.au
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeleteAccount
