import emailjs from '@emailjs/browser'

export interface ContactFormInput {
  name: string
  email: string
  phone?: string
  interest: string
  message: string
}

export const sendContactEnquiry = async (formData: ContactFormInput): Promise<boolean> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
    console.warn(
      'EmailJS credentials missing or unconfigured. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env or Vercel Environment Variables.'
    )
    throw new Error('Email service configuration missing.')
  }

  const templateParams = {
    customer_name: formData.name.trim(),
    customer_email: formData.email.trim(),
    customer_phone: (formData.phone || '').trim() || 'N/A',
    primary_interest: formData.interest,
    customer_message: formData.message.trim(),
    submission_date: new Date().toLocaleDateString('en-US', { dateStyle: 'full' }),
    submission_time: new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }),
    reply_to: formData.email.trim()
  }

  const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
  return response.status === 200
}
