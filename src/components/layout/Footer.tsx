import React from 'react'
import { Link } from 'react-router-dom'
import { Crown, Heart, Send, Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../ui/SocialIcons'
import { MagneticButton } from '../ui/MagneticButton'
import toast from 'react-hot-toast'

export const Footer: React.FC = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you for subscribing to Paw & Palace VIP Dispatch!', {
      icon: '✨',
      style: {
        borderRadius: '16px',
        background: '#ffffff',
        color: '#1e293b'
      }
    })
  }

  return (
    <footer className="relative z-10 bg-slate-900 text-slate-300 pt-20 pb-12 overflow-hidden rounded-t-[2.5rem] mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Newsletter Card */}
        <div className="relative mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/90 via-slate-900 to-emerald-950/80 border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
              <Crown className="w-3.5 h-3.5" /> VIP Inner Circle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Receive Priority Access to Rare Companion Arrivals & Private Invitations
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Join 12,000+ discerning pet lovers. Zero spam, only pure luxury updates.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your personal email address..."
              className="w-full sm:w-80 px-5 py-3.5 rounded-full bg-slate-800/90 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 transition-colors"
            />
            <MagneticButton type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
              Subscribe VIP
            </MagneticButton>
          </form>
        </div>

        {/* Core Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-lg">
                <Crown className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">PAW & PALACE</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Luxury Companion Sanctuary
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Paw & Palace is an internationally acclaimed companion sanctuary. We curate ethically raised purebred pets, organic veterinary nutrition, and bespoke wellness care for elite pet families worldwide.
            </p>

            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <div className="flex items-center gap-1 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Vet Certified
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold">
                <Award className="w-4 h-4 text-blue-400" /> Awwwards 2025
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Sanctuary Pages</h4>
            <Link to="/" className="text-slate-400 text-sm hover:text-white transition-colors">Home Landing</Link>
            <Link to="/pets" className="text-slate-400 text-sm hover:text-white transition-colors">Companion Pets</Link>
            <Link to="/food" className="text-slate-400 text-sm hover:text-white transition-colors">Artisanal Nutrition</Link>
            <Link to="/about" className="text-slate-400 text-sm hover:text-white transition-colors">Our Ethos & Story</Link>
            <Link to="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">Contact & Location</Link>
          </div>

          {/* Col 3: Pet Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Pet Breeds</h4>
            <Link to="/pets?category=Dogs" className="text-slate-400 text-sm hover:text-white transition-colors">Royal Canine Breeds</Link>
            <Link to="/pets?category=Cats" className="text-slate-400 text-sm hover:text-white transition-colors">Regal Feline Kittens</Link>
            <Link to="/pets?category=Birds" className="text-slate-400 text-sm hover:text-white transition-colors">Exotic Birds</Link>
            <Link to="/pets?category=Fish" className="text-slate-400 text-sm hover:text-white transition-colors">Aquascaping Discus & Reef</Link>
            <Link to="/pets?category=Reptiles" className="text-slate-400 text-sm hover:text-white transition-colors">High-Morph Reptiles</Link>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Concierge Reach</h4>
            <div className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <span>740 Royal Avenue, Mayfair, London & Beverly Hills, CA</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+1 (800) 555-PAWS</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span>concierge@pawandpalace.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-pink-600 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Paw & Palace Companion Boutique Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for world-class pets.
          </div>
        </div>
      </div>
    </footer>
  )
}
