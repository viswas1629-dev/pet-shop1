import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Mail,
  MessageSquare,
  Server,
  FileText,
  UserCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'

export const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'collection', label: '1. Information We Collect' },
    { id: 'usage', label: '2. How We Use Information' },
    { id: 'whatsapp', label: '3. WhatsApp Communication' },
    { id: 'email', label: '4. Email Communication' },
    { id: 'sharing', label: '5. Information Sharing' },
    { id: 'security', label: '6. Data Security' },
    { id: 'retention', label: '7. Data Retention' },
    { id: 'rights', label: '8. Customer Rights' },
    { id: 'children', label: '9. Children\'s Privacy' },
    { id: 'changes', label: '10. Policy Changes' },
    { id: 'contact', label: '11. Contact Us' }
  ]

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="blue" icon={<ShieldCheck className="w-3.5 h-3.5" />} pulse>
            Data Privacy & Trust Governance
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          Your privacy is paramount. This policy outlines how Mr & Mrs handles customer enquiries, protects personal contact details, and maintains transparent communication standards across our pet shop services.
        </motion.p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/80 text-xs font-semibold text-slate-600">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>Effective & Last Updated: August 2026</span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN POLICY CONTENT CONTAINER */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <GlassCard className="p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Policy Directory
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
                <span>100% Commitment to Zero Data Commercialization</span>
              </div>
            </GlassCard>
          </div>

          {/* Core Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* SECTION 1: INFORMATION WE COLLECT */}
            <div id="collection" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Section 1</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Information We Collect</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We collect personal information that you voluntarily provide to us when expressing interest in our companion pets, artisanal nutrition products, store visits, or general services.
                </p>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Full Name:</strong> Provided when submitting contact forms or initiating WhatsApp enquiries.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Email Address:</strong> Submitted through our website contact form for enquiry correspondence.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Phone / WhatsApp Number:</strong> Provided voluntarily for direct phone or messaging updates.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Message & Enquiry Details:</strong> Specific companion preferences, dietary requests, or questions submitted in form fields.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">WhatsApp Information:</strong> Any message text, profile name, or contact details voluntarily transmitted when messaging our official WhatsApp number.
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* SECTION 2: HOW WE USE INFORMATION */}
            <div id="usage" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">Section 2</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">How We Use Information</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We use collected information solely to provide concierge companion services and respond to your requests:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-600 list-disc list-inside leading-relaxed pl-1">
                  <li><strong className="text-slate-900">Enquiry Response:</strong> To answer questions regarding companion pets, availability, pricing, and health passports.</li>
                  <li><strong className="text-slate-900">Nutritional Guidance:</strong> To process Pet Food enquiries and assist with custom dietary calculations.</li>
                  <li><strong className="text-slate-900">Store Visits:</strong> To coordinate private appointments, showroom tours, and VIP introductions.</li>
                  <li><strong className="text-slate-900">Direct Customer Communication:</strong> To send follow-up correspondence regarding ongoing requests.</li>
                </ul>
              </GlassCard>
            </div>

            {/* SECTION 3: WHATSAPP COMMUNICATION */}
            <div id="whatsapp" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-teal-50 text-teal-600">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">Section 3</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">WhatsApp Communication</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Our website provides optional deep links allowing customers to voluntarily contact our shop owner via WhatsApp. When clicking a WhatsApp action, you initiate communication directly through the official WhatsApp platform. Conversations conducted via WhatsApp are governed by WhatsApp’s standard Terms of Service and Privacy Policy. We use message content sent over WhatsApp exclusively to answer your specific pet or product questions.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 4: EMAIL COMMUNICATION */}
            <div id="email" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-orange-50 text-orange-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">Section 4</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Email Communication</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Contact-form enquiries submitted through our website are transmitted directly to our business email address using our configured email delivery service (EmailJS). Your email address is used solely to respond to your inquiry. We do not subscribe your email address to unauthorized mailing lists without explicit consent.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 5: INFORMATION SHARING */}
            <div id="sharing" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">Section 5</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Information Sharing</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <strong className="text-slate-900 font-bold">We never sell, rent, or trade customer personal information to third parties.</strong>
                </p>

                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  We share information only with third-party service providers essential for operating our website infrastructure:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1">EmailJS</h4>
                    <p className="text-slate-500 leading-normal">Processes contact form submissions for direct email dispatch.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1">Vercel</h4>
                    <p className="text-slate-500 leading-normal">Provides web application hosting, SSL/TLS security, and delivery infrastructure.</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* SECTION 6: DATA SECURITY */}
            <div id="security" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">Section 6</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Data Security</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  We employ industry-standard technical security measures—including HTTPS encryption via TLS/SSL—to safeguard your information during transmission. While no internet transmission is 100% secure, we maintain strict administrative procedures to prevent unauthorized access to customer records.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 7: DATA RETENTION */}
            <div id="retention" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">Section 7</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Data Retention</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Customer enquiry records are retained only for as long as necessary to fulfill the relevant communication, assist with store visits, or comply with legal and accounting standards.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 8: CUSTOMER CHOICES AND RIGHTS */}
            <div id="rights" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-purple-50 text-purple-600">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">Section 8</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Customer Choices & Rights</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  You have the right to request access to, correction of, or deletion of any personal contact information you have previously provided to us. To submit a request, please reach out to us using the contact details below.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 9: CHILDREN'S PRIVACY */}
            <div id="children" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-rose-50 text-rose-600">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">Section 9</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Children's Privacy</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Our services are intended for adult pet owners and families. We do not knowingly collect or solicit personal information from individuals under the age of 13. If you believe a minor has provided us with personal information, please contact us for immediate removal.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 10: CHANGES TO THIS PRIVACY POLICY */}
            <div id="changes" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-50 text-sky-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">Section 10</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">Changes to This Privacy Policy</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  We reserve the right to update this Privacy Policy periodically to reflect changes in our operational procedures or legal requirements. Updates will be posted directly to this page with an updated revision date.
                </p>
              </GlassCard>
            </div>

            {/* SECTION 11: CONTACT US */}
            <div id="contact" className="scroll-mt-28">
              <GlassCard className="p-8 sm:p-10 bg-gradient-to-r from-blue-900/90 via-slate-900 to-slate-900 text-white rounded-3xl overflow-hidden relative border border-slate-700/60 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Section 11</span>
                    <h2 className="text-2xl font-extrabold text-white">Contact Us</h2>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us directly:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-200">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">Email Inquiry</span>
                    <span>[OWNER EMAIL]</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Business Phone</span>
                    <span>[BUSINESS PHONE]</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Store Address</span>
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
