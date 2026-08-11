import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles
} from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'
import { MagneticButton } from '../components/ui/MagneticButton'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/ui/SocialIcons'

import toast from 'react-hot-toast'

interface ContactFormInput {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInput>()

  const onSubmit = async (data: ContactFormInput) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.success(`Thank you, ${data.name}! Your VIP consultation inquiry has been routed to our senior concierge.`, {
      duration: 5000,
      icon: '✨',
      style: {
        borderRadius: '16px',
        background: '#ffffff',
        color: '#1e293b'
      }
    })
    reset()
  }

  const quickCards = [
    {
      title: 'WhatsApp Concierge',
      desc: 'Instant 24/7 direct chat',
      value: '+1 (800) 555-PAWS',
      icon: MessageSquare,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      link: 'https://wa.me/6381793062'
    },
    {
      title: 'Direct VIP Line',
      desc: 'Sanctuary booking line',
      value: '+1 (800) 555-7297',
      icon: Phone,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      link: 'tel:+18005557297'
    },
    {
      title: 'Email Support',
      desc: 'Response within 2 hours',
      value: 'concierge@pawandpalace.com',
      icon: Mail,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
      link: 'mailto:concierge@pawandpalace.com'
    },
    {
      title: 'Instagram Dispatch',
      desc: 'Daily behind-the-scenes stories',
      value: '@PawAndPalaceOfficial',
      icon: InstagramIcon,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
      link: 'https://instagram.com'
    }
  ]

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="coral" icon={<Sparkles className="w-3.5 h-3.5" />} pulse>
            VIP Concierge Dispatch
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          We Are Here To Assist Your Family
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Schedule a private sanctuary consultation, arrange VIP pet transport, or speak directly with our veterinary nutritionists.
        </motion.p>
      </section>

      {/* ============================================================ */}
      {/* 2. QUICK CONTACT CARDS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <a key={idx} href={card.link} target="_blank" rel="noreferrer" className="block">
                <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-blue-400/60 transition-all">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl border ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-xs text-slate-500 mb-3">{card.desc}</p>
                  </div>
                  <div className="text-xs font-bold text-blue-600 tracking-tight">{card.value}</div>
                </GlassCard>
              </a>
            )
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTACT FORM & STORE DETAILS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Send a personal Mail
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Fill in your details below. Our sanctuary director will respond within 2 business hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="e.g. Lady Victoria Vance"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                    {errors.name && <span className="text-xs text-rose-600 mt-1 block">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      placeholder="victoria@palace.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                    {errors.email && <span className="text-xs text-rose-600 mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Interest
                    </label>
                    <select
                      {...register('interest')}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    >
                      <option value="Pet Adoption">Companion Pet Adoption</option>
                      <option value="Organic Nutrition">Artisanal Pet Food & Diets</option>
                      <option value="Luxury Spa & Grooming">Spa & Grooming Retreat</option>
                      <option value="Hotel Boarding">Palace Resort Boarding</option>
                      <option value="General Inquiry">General Concierge Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Message / Special Requests *
                  </label>
                  <textarea
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Tell us about your home, family, and companion preferences..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                  />
                  {errors.message && <span className="text-xs text-rose-600 mt-1 block">{errors.message.message}</span>}
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send className="w-4 h-4" />}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit VIP Request'}
                </MagneticButton>
              </form>
            </GlassCard>
          </div>

          {/* Details & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Store Details & Location</h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">London Headquarters</span>
                    <span>740 Royal Avenue, Mayfair, London W1J 7BR, United Kingdom</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Beverly Hills Haven</span>
                    <span>450 North Rodeo Drive, Beverly Hills, CA 90210, USA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Business Hours</span>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM | Sun: VIP Only</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-pink-600 hover:text-white transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-red-600 hover:text-white transition-all">
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Embedded Google Map Placeholder */}
            <div className="glass-card p-0 rounded-3xl overflow-hidden aspect-16/10 relative flex items-center justify-center bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                alt="Map Graphic Placeholder"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" /> Mayfair Showroom Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
