import React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Info,
  Clock,
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  MessageSquare,
  Mail,
  Scale
} from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'

export const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'purpose', label: '1. Website Purpose' },
    { id: 'availability', label: '2. Pet Listings & Availability' },
    { id: 'pet-info', label: '3. Pet Information Disclaimer' },
    { id: 'food-info', label: '4. Pet Food & Pricing' },
    { id: 'whatsapp', label: '5. WhatsApp Enquiries' },
    { id: 'contact-form', label: '6. Contact Form Terms' },
    { id: 'content', label: '7. Website Content' },
    { id: 'links', label: '8. External Links' },
    { id: 'changes', label: '9. Changes to Website' },
    { id: 'limitation', label: '10. Limitation of Liability' },
    { id: 'contact-info', label: '11. Contact Information' }
  ]

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="blue" icon={<Scale className="w-3.5 h-3.5" />} pulse>
            Pet Shop Terms & Governance
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          Terms of Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          Welcome to Paw & Palace. Please review these Terms of Service governing your use of our website, companion pet listings, artisanal food catalog, and enquiry workflows.
        </motion.p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/80 text-xs font-semibold text-slate-600">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>Effective & Last Updated: August 2026</span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN TERMS CONTENT CONTAINER */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <GlassCard className="p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Terms Navigation
              </h3>
              <nav className="space-y-1.5 text-xs">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 font-semibold transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent Pet Shop Operation Standards</span>
              </div>
            </GlassCard>
          </div>

          {/* Core Terms Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* SECTION 1: WEBSITE PURPOSE */}
            <div id="purpose" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Section 1</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Website Purpose</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  The Paw & Palace website is designed as an informational showcase and enquiry portal for our luxury companion pets, artisanal organic nutrition formulas, and pet shop concierge services. This website does not directly process automated e-commerce payments, online card checkouts, or binding automated sales transactions.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 2: PET LISTINGS AND AVAILABILITY */}
            <div id="availability" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">Section 2</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Pet Listings & Availability</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  All pet profiles displayed on this website represent active or recent companion arrivals at our pet shop. Please note:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-600 list-disc list-inside leading-relaxed pl-1">
                  <li>Companion listings, status tags (e.g. Available, Reserved), and pricing are subject to real-time update and modification.</li>
                  <li>Pet availability is strictly confirmed upon direct communication with our pet shop management via WhatsApp or email.</li>
                  <li>Viewing a pet listing on the website does not guarantee that the specific companion remains unreserved until confirmed directly with our team.</li>
                </ul>
              </GlassCard>
            </div>

            {/* SECTION 3: PET INFORMATION DISCLAIMER */}
            <div id="pet-info" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">Section 3</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Pet Information Disclaimer</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Information regarding pet breed, age, weight, temperament traits, health clearances, and origin is published for general information and preliminary evaluation. Prospective pet parents are encouraged to confirm current veterinary passports and health records during their direct consultation or in-person visit.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 4: PET FOOD INFORMATION */}
            <div id="food-info" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-orange-50 text-orange-600">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">Section 4</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Pet Food & Pricing Information</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Descriptions, ingredient lists, dietary tags, and displayed prices for artisanal pet food products are provided for informational and ordering enquiries. Product packaging, weights, ingredient availability, and prices may change based on organic ingredient supply cycles.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 5: WHATSAPP ENQUIRIES */}
            <div id="whatsapp" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-teal-50 text-teal-600">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">Section 5</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">WhatsApp Enquiries</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our website utilizes WhatsApp action buttons to facilitate direct customer communication with our team.
                </p>

                <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-100 text-xs text-teal-900 space-y-2">
                  <p className="font-semibold">
                    • Sending a WhatsApp message constitutes a request for information or consultation inquiry.
                  </p>
                  <p className="font-semibold">
                    • A pre-filled or sent WhatsApp message does NOT automatically constitute a binding sale, financial agreement, or confirmed companion reservation.
                  </p>
                  <p className="font-semibold">
                    • All pet purchases, store visits, and orders are finalized through mutual direct agreement with our management.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* SECTION 6: CONTACT FORM TERMS */}
            <div id="contact-form" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">Section 6</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Contact Form Terms</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  When submitting an enquiry through our Contact form, the information provided (Name, Email, Phone, Primary Interest, Message) is transmitted securely via EmailJS to enable our staff to respond to your specific request. Submitting a form does not subscribe you to automated marketing lists without consent.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 7: WEBSITE CONTENT */}
            <div id="content" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-purple-50 text-purple-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">Section 7</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Website Content & Intellectual Property</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  All trademarks, logos, brand names, visual designs, imagery, graphics, and textual content on this website are the property of Paw & Palace Companion Boutique Ltd. Unauthorized reproduction, scraping, or commercial reuse without written permission is strictly prohibited.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 8: EXTERNAL LINKS */}
            <div id="links" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-50 text-sky-600">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">Section 8</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">External Links</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  This website may contain links to external third-party platforms (such as WhatsApp, Google Maps, Instagram, Facebook, and YouTube). We are not responsible for the privacy practices, availability, or content of third-party external services.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 9: CHANGES TO WEBSITE */}
            <div id="changes" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-rose-50 text-rose-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">Section 9</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Changes to Website & Terms</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  We reserve the right to update, modify, suspend, or discontinue any feature, pet listing, product catalog entry, or terms of service on this website at any time without prior notice.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 10: LIMITATION OF LIABILITY */}
            <div id="limitation" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 text-slate-700">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Section 10</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Limitation of Liability & General Disclaimer</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  This website and its content are provided on an "as-is" and "as-available" basis for general informational purposes. To the fullest extent permitted by law, Paw & Palace disclaims all warranties, express or implied, and shall not be liable for any indirect or consequential damages arising from website usage or temporary service interruptions.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 11: CONTACT INFORMATION */}
            <div id="contact-info" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10 bg-gradient-to-r from-blue-900/90 via-slate-900 to-slate-900 text-white rounded-3xl overflow-hidden relative border border-slate-700/60 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Section 11</span>
                    <h2 className="text-2xl font-extrabold text-white">Contact Information</h2>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  For inquiries regarding these Terms of Service or official pet shop communication, please contact us:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-200">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">Email Reach</span>
                    <span>[OWNER EMAIL]</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Business Phone</span>
                    <span>[BUSINESS PHONE]</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Showroom Address</span>
                    <span>[BUSINESS ADDRESS]</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
