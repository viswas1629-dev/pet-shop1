import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Crown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  Star,
  CheckCircle,
  PhoneCall,
  ChevronDown,
  Compass,
  MessageSquare
} from 'lucide-react'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { PageTransition } from '../components/ui/PageTransition'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { MagneticButton } from '../components/ui/MagneticButton'
import { Badge } from '../components/ui/Badge'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { PetModal } from '../components/ui/PetModal'
import { FloatingBadge } from '../components/ui/FloatingElements'
import { InstagramIcon } from '../components/ui/SocialIcons'

import { petsData } from '../data/petsData'
import { reviewsData } from '../data/reviewsData'
import { formatCurrency } from '../utils/formatCurrency'
import { getWhatsAppUrl, createPetCareSupportWhatsAppMessage } from '../utils/whatsapp'
import type { Pet } from '../types'

export const Home: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)

  const featuredCategories = [
    { name: 'Dogs', icon: '🐕', count: '2 Available', color: 'from-blue-500/10 to-indigo-500/10' },
    { name: 'Cats', icon: '🐈', count: '2 Available', color: 'from-rose-500/10 to-pink-500/10' },
    { name: 'Birds', icon: '🦜', count: '2 Available', color: 'from-amber-500/10 to-yellow-500/10' },
    { name: 'Fish', icon: '🐠', count: '2 Available', color: 'from-cyan-500/10 to-blue-500/10' },
    { name: 'Rabbits', icon: '🐇', count: '2 Available', color: 'from-emerald-500/10 to-teal-500/10' },
    { name: 'Hamsters', icon: '🐹', count: '2 Available', color: 'from-orange-500/10 to-amber-500/10' },
    { name: 'Reptiles', icon: '🦎', count: '2 Available', color: 'from-lime-500/10 to-emerald-500/10' },
    { name: 'Exotic Pets', icon: '🦘', count: '2 Rare', color: 'from-purple-500/10 to-indigo-500/10' }
  ]

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800', title: 'Royalty Purebred Care' },
    { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', title: 'Feline Luxury Suites' },
    { url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800', title: 'Puppy Socialization Labs' },
    { url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=800', title: 'Avian Play Havens' },
    { url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800', title: 'Aquascaping Masterpieces' },
    { url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800', title: 'Organic Nutrition Bar' }
  ]

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="blue" icon={<Crown className="w-3.5 h-3.5" />} pulse>
                International Premium Pet Shop 2025
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6"
            >
              Where Royalty Meets <br />
              <span className="gradient-text-primary">Companion Perfection.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Step into an extraordinary pet boutique for purebred companions, organic veterinary nutrition, and 5-star spa retreats. Every pet is DNA certified and health guaranteed.
            </motion.p>

            {/* CTAs & Micro-Proof */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link to="/pets">
                <MagneticButton variant="primary" size="xl" icon={<ArrowRight className="w-5 h-5" />}>
                  Explore Purebred Pets
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton variant="outline" size="xl">
                  Visit Our Pet Shop
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-slate-600 text-xs font-semibold pt-4 border-t border-slate-200/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Vet DNA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>1-Year Health Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Spacious & Clean Habitats</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual & Floating Elements */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Featured Illustration Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white glass-card"
            >
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000"
                alt="Royal Golden Retriever Companion"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  Featured Champion Line
                </span>
                <h3 className="text-xl font-extrabold">Winston • Golden Retriever</h3>
                <p className="text-xs text-white/80 mt-1">12 Weeks • DNA Tested • Vet Approved</p>
              </div>
            </motion.div>

            {/* Floating Decorative Badges */}
            <FloatingBadge className="absolute -top-4 -left-6 z-20" delay={0}>
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Health Clearance</div>
                <div className="text-xs font-bold text-slate-800">100% Certified</div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="absolute bottom-12 -right-6 z-20" delay={1.5}>
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Client Rating</div>
                <div className="text-xs font-bold text-slate-800">4.99 / 5.0 (4.8k Reviews)</div>
              </div>
            </FloatingBadge>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-400 text-xs font-semibold cursor-pointer"
          >
            <span>Scroll to discover</span>
            <ChevronDown className="w-4 h-4 text-blue-600" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED PET CATEGORIES */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Explore By Species"
            eyebrowIcon={<Compass className="w-3.5 h-3.5" />}
            eyebrowVariant="blue"
            title="Tailored Havens For Every Creature"
            subtitle="Select your preferred companion class to view available pedigrees, specialty diets, and care guidelines."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {featuredCategories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link to={`/pets?category=${cat.name}`}>
                  <GlassCard className="flex flex-col items-center text-center p-5 group hover:border-blue-400/60 transition-all">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 mt-1">{cat.count}</span>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. POPULAR PETS CAROUSEL */}
      {/* ============================================================ */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />} pulse>
                Curated Purebreds
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Our Most Adored Companions
              </h2>
            </div>
            <Link to="/pets">
              <MagneticButton variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                View All Available Pets
              </MagneticButton>
            </Link>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="pb-14"
          >
            {petsData.map((pet) => (
              <SwiperSlide key={pet.id}>
                <GlassCard className="h-full flex flex-col justify-between p-0 overflow-hidden group">
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <Badge variant="blue">{pet.category}</Badge>
                      {pet.isNewArrival && <Badge variant="emerald">New Arrival</Badge>}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {pet.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                        {pet.breed}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2">{pet.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{pet.description}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Price</div>
                        <div className="text-lg font-bold text-slate-900">{formatCurrency(pet.price)}</div>
                      </div>

                      <MagneticButton
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedPet(pet)}
                      >
                        View Details
                      </MagneticButton>
                    </div>
                  </div>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PET CARE PROMISE */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Our Sacred Vow"
            eyebrowIcon={<ShieldCheck className="w-3.5 h-3.5" />}
            eyebrowVariant="emerald"
            title="The Mr & Mrs Pet Care Guarantee"
            subtitle="We set the international standard for companion health, ethical care, and lifetime post-purchase concierge."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive DNA Health Passports</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Every kitten, puppy, bird, or exotic pet passes 50+ genetic disease screens before joining your family.
              </p>
              <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> 100% Transparency Included
              </span>
            </GlassCard>

            <GlassCard className="p-8 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Spacious & Hygienic Pet Habitats</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Our pets live in expansive, sunlit suites with soft memory bedding, play areas, and 24/7 human care.
              </p>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Ethical & Humane Standard
              </span>
            </GlassCard>

            <GlassCard className="p-8 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Post-Purchase Care & Guidance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Get direct assistance on feeding portions, daily care, and routine pet care questions whenever you need help.
              </p>
              <span className="text-xs font-bold text-orange-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Free Guidance Included
              </span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. AFTER-PURCHASE PET CARE SUPPORT */}
      {/* ============================================================ */}
      <section className="py-16 relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl my-12 overflow-hidden mx-4 sm:mx-8 shadow-2xl border border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Guidance CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5 text-emerald-400" /> Post-Purchase Support
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Need Help Caring for Your New Pet?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Bring your new companion home with confidence. Our team can guide you on basic feeding, food quantity, daily care, and other pet-care questions after your purchase.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 text-xs">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-0.5">Feeding & Portion Advice</strong>
                  <span className="text-slate-400">Recommended food types, quantity per meal, and daily feeding frequency.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-0.5">Daily Care & Home Setup</strong>
                  <span className="text-slate-400">Essential instructions for a smooth transition to your home.</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(createPetCareSupportWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
            >
              <MagneticButton
                variant="primary"
                size="xl"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Ask About Pet Care
              </MagneticButton>
            </a>
          </div>

          {/* Right Column: Hero Care Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/80 group">
              <img
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1000"
                alt="Owner caring for pet at home"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  100% Free Owner Support
                </div>
                <div className="text-lg font-extrabold">Pet Care Guidance</div>
                <p className="text-xs text-slate-300 mt-1">Direct WhatsApp assistance for all your pet care queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. ANIMATED STATISTICS */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <GlassCard className="p-8 text-center flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2 font-heading">
                <AnimatedCounter end={4800} suffix="+" />
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Happy Pets Welcomed</div>
              <div className="text-[11px] text-slate-500 mt-1">Across 32 Cities</div>
            </GlassCard>

            <GlassCard className="p-8 text-center flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 mb-2 font-heading">
                <AnimatedCounter end={99.4} decimals={1} suffix="%" />
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Client Satisfaction</div>
              <div className="text-[11px] text-slate-500 mt-1">Verified Audit 2025</div>
            </GlassCard>

            <GlassCard className="p-8 text-center flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2 font-heading">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Certified Vets & Specialists</div>
              <div className="text-[11px] text-slate-500 mt-1">On-Call Staff</div>
            </GlassCard>

            <GlassCard className="p-8 text-center flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-purple-600 mb-2 font-heading">
                <AnimatedCounter end={15} suffix=" Yrs" />
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Pet Store Excellence</div>
              <div className="text-[11px] text-slate-500 mt-1">Established 2012</div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CUSTOMER REVIEWS */}
      {/* ============================================================ */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-slate-100/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Discerning Voices"
            eyebrowIcon={<Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />}
            eyebrowVariant="amber"
            title="Loved By Extraordinary Families Worldwide"
            subtitle="Read authentic experiences from pet parents who found their soul companions at Mr & Mrs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((rev) => (
              <GlassCard key={rev.id} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-base italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{rev.author}</div>
                    <div className="text-xs text-slate-500">
                      Parent of {rev.petName} ({rev.petBreed}) • {rev.location}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. GALLERY & INSTAGRAM FEED */}
      {/* ============================================================ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Visual Chronicles"
            eyebrowIcon={<InstagramIcon className="w-3.5 h-3.5" />}
            eyebrowVariant="coral"
            title="Life Inside Mr & Mrs"
            subtitle="Follow our daily moments of warmth, play, and boutique joy."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <span className="text-xs font-bold text-white">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Detail Modal Trigger */}
      <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
    </PageTransition>
  )
}
