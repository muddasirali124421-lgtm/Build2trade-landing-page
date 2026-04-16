import { useRef, useState, useEffect } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const InviteForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = '-ikb4LLvBWDRQb_1-'
  const EMAILJS_SERVICE_ID = 'service_li1nkgh'
  const EMAILJS_TEMPLATE_ID = 'template_0e1v325'

  // Check if emailjs is available
  useEffect(() => {
    if (!emailjs) {
      console.error('EmailJS not loaded. Run: npm install @emailjs/browser')
      setIsError(true)
      setStatusMessage('EmailJS not loaded. Please install dependencies.')
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    // Get form data for validation
    const formData = new FormData(formRef.current)
    const email = formData.get('email') as string

    // Validation
    if (!email || !validateEmail(email)) {
      setIsError(true)
      setStatusMessage('Please enter a valid email address')
      return
    }

    // Check all required fields
    const invitedBy = formData.get('invited_by') as string
    const project = formData.get('project') as string
    const postcode = formData.get('postcode') as string

    if (!invitedBy || !project || !postcode) {
      setIsError(true)
      setStatusMessage('All fields are required')
      return
    }

    setIsSubmitting(true)
    setStatusMessage(null)
    setIsError(false)

    // Debug: Log form data being sent
    console.log('Sending EmailJS request:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      formData: {
        email,
        invited_by: invitedBy,
        project,
        postcode
      }
    })

    try {
      // Send form using EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      setStatusMessage('Invite sent successfully!')
      setIsError(false)
      formRef.current.reset()
    } catch (error: any) {
      console.error('EmailJS Error:', error)
      
      // Show detailed error message
      let errorMsg = 'Failed to send invite. Please try again.'
      if (error?.text) {
        errorMsg = `Error: ${error.text}`
      } else if (error?.message) {
        errorMsg = `Error: ${error.message}`
      }
      
      setIsError(true)
      setStatusMessage(errorMsg)
    } finally {
      setIsSubmitting(false)

      // Clear success message after 3 seconds
      if (!isError) {
        setTimeout(() => setStatusMessage(null), 3000)
      }
    }
  }

  const isSuccess = statusMessage && !isError

  return (
    <section className="bg-[#093370] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">
          Invite Preferred Tradies
        </h2>
        <p className="text-white/90 text-sm mb-8 max-w-xl mx-auto">
          Send an invite to your preferred builders or tradies and get them connected on Build 2 Trade. They'll receive the app download links and can join your network in minutes.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0056b3] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              placeholder="Email"
            />
            <input
              type="text"
              name="invited_by"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0056b3] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              placeholder="Invited by"
            />
            <input
              type="text"
              name="project"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0056b3] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              placeholder="Project Name / Reference"
            />
            <input
              type="text"
              name="postcode"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0056b3] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              placeholder="Post Code"
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`text-sm font-medium ${
                isError ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto min-w-[200px] px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto transition-all ${
              isSuccess
                ? 'bg-green-500 text-white'
                : 'bg-[#ffb800] text-white hover:bg-[#e6a600] hover:scale-105'
            } disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Sent!</span>
              </>
            ) : (
              <>
                <span>Send Invite</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default InviteForm
