import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Crown,
  Award,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Badge } from '../components/ui/Badge'

import { faqData, timelineEvents } from '../data/servicesData'

export const About: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1')

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id)
  }

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="blue" icon={<Crown className="w-3.5 h-3.5" />} pulse>
            Our Pet Shop Ethos
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          Redefining Companion Care <br />
          <span className="gradient-text-primary">With Uncompromising Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          Founded in 2012, Mr & Mrs emerged from a simple realization: companion pets deserve the exact same standard of luxury, medical precision, and comfortable living as human royalty.
        </motion.p>
      </section>

      {/* ============================================================ */}
      {/* 2. OUR STORY & MISSION/VISION */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white glass-card">
            <img
              src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1000"
              alt="Mr & Mrs Pet Shop Staff"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">Pet Shop Boutique</div>
              <h3 className="text-xl font-extrabold">Where Love Meets Medical Excellence</h3>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">
            <Badge variant="emerald">Mission & Vision</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ethical Breeding. Zero Cages. Lifetime Harmony.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We reject high-density breeding facilities and commercial cages. Every puppy, kitten, bird, and reptile under our care matures in sunlit suites with soft ambient classical music, organic nutrition, and dedicated daily care experts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">DNA Health Cleared</h4>
                  <p className="text-xs text-slate-600 mt-1">Multi-generational health passports for every pet.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Awwwards Winner</h4>
                  <p className="text-xs text-slate-600 mt-1">Voted #1 International Companion Boutique 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. STORE JOURNEY TIMELINE */}
      {/* ============================================================ */}
      <section className="py-16 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-8 mb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Pet Store Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our 15-Year Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {timelineEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-blue-400 font-heading block mb-2">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{evt.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{evt.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-700/80">
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {evt.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. STORE LOCATION MAP PLACEHOLDER & HOURS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <SectionHeader
          eyebrow="Store Location"
          eyebrowIcon={<MapPin className="w-3.5 h-3.5" />}
          eyebrowVariant="coral"
          title="Visit Our Mayfair & Beverly Hills Suites"
          subtitle="Experience white-glove pet introductions in person by scheduling a private appointment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Preview Graphic Box */}
          <div className="lg:col-span-8 glass-card p-0 rounded-3xl overflow-hidden min-h-[350px] relative flex items-center justify-center bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
              alt="Pet Store Location Map Preview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]" />

            <div className="absolute z-10 glass-card p-6 rounded-2xl max-w-sm text-center shadow-2xl border border-white">
              <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-2 animate-bounce" />
              <h3 className="text-lg font-extrabold text-slate-900">Mr & Mrs Pet Boutique</h3>
              <p className="text-xs text-slate-600 mt-1 mb-4">
                740 Royal Avenue, Mayfair, London W1J 7BR
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-md"
              >
                Open Google Maps Directions
              </a>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-6">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Showroom & Visit Hours</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-bold text-slate-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-bold text-slate-900">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-bold text-blue-600">Private VIP Appointments</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-emerald-50 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Valet Parking & Private Suite Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FAQ ACCORDION */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <SectionHeader
          eyebrow="Adoption Insights"
          eyebrowIcon={<Sparkles className="w-3.5 h-3.5" />}
          eyebrowVariant="blue"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our purchasing process, health guarantee, and transport protocol."
        />

        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = activeFaqId === faq.id
            return (
              <div key={faq.id} className="glass-card rounded-2xl overflow-hidden border border-white/80 transition-all">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-slate-900 text-base sm:text-lg hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>
    </PageTransition>
  )
}
