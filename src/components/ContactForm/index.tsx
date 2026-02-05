'use client'

import React, { useState, useRef } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Track form start time for bot detection
  const formStartTime = useRef<number>(Date.now())

  // Honeypot field (hidden from users, bots will fill it)
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.')
      setSubmitStatus('error')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.')
      setSubmitStatus('error')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      setSubmitStatus('error')
      return false
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please enter a subject.')
      setSubmitStatus('error')
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.')
      setSubmitStatus('error')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    // Check honeypot field (if filled, it's a bot)
    if (honeypotRef.current && honeypotRef.current.value !== '') {
      // Silently fail - don't let bots know they were detected
      return
    }

    // Time-based validation - bots fill forms too quickly (less than 3 seconds)
    const timeTaken = Date.now() - formStartTime.current
    if (timeTaken < 3000) {
      setSubmitStatus('error')
      setErrorMessage('Please take your time filling out the form.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Send email using FormSubmit (no registration required!)
      // Use encrypted token from NEXT_PUBLIC_FORMSUBMIT_TOKEN (recommended for security)
      // Or fallback to email(s) from NEXT_PUBLIC_RECIPIENT_EMAIL
      // For multiple recipients, use comma-separated emails: email1@example.com,email2@example.com
      const formsubmitToken = process.env.NEXT_PUBLIC_FORMSUBMIT_TOKEN || process.env.NEXT_PUBLIC_RECIPIENT_EMAIL
      if (!formsubmitToken) {
        throw new Error('FormSubmit configuration is missing.')
      }

      // Encode the token/email(s) for URL (handles comma-separated emails)
      const encodedRecipient = encodeURIComponent(formsubmitToken)
      const response = await fetch(`https://formsubmit.co/ajax/${encodedRecipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: false, // Disable FormSubmit's captcha (we have our own protection)
          _template: 'table', // Nice formatted email template
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.')
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message. Please try again.')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Reset form start time for next submission
      formStartTime.current = Date.now()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error: any) {
      console.error('FormSubmit error:', error)
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      <div>
        <label htmlFor="name" className="text-container-foreground mb-2 block text-sm font-medium">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border-muted focus:ring-accent bg-background text-container-foreground w-full rounded-xs border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-container-foreground mb-2 block text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border-muted focus:ring-accent bg-background text-container-foreground w-full rounded-xs border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-container-foreground mb-2 block text-sm font-medium">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="border-muted focus:ring-accent bg-background text-container-foreground w-full rounded-xs border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
          placeholder="What is your message about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-container-foreground mb-2 block text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="border-muted focus:ring-accent bg-background text-container-foreground w-full resize-y rounded-xs border px-4 py-3 transition-colors focus:border-transparent focus:ring-2"
          placeholder="Your message..."
        />
      </div>

      {/* Honeypot field - hidden from users but visible to bots */}
      <input
        type="text"
        ref={honeypotRef}
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {submitStatus === 'error' && errorMessage && (
        <div className="rounded-xs border border-red-200 bg-red-50 px-4 py-3 text-red-700">{errorMessage}</div>
      )}

      {submitStatus === 'success' && (
        <div className="rounded-xs border border-green-200 bg-green-50 px-4 py-3 text-green-700">
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border-muted bg-container hover:bg-background mt-2 rounded-xs border px-10 py-4 text-sm font-semibold shadow-sm transition hover:cursor-pointer"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
