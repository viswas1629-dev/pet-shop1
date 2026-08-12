import React from 'react'
import { Link } from 'react-router-dom'
import { Crown, Heart, Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../ui/SocialIcons'

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-slate-900 text-slate-300 pt-14 pb-10 overflow-hidden rounded-t-[2.5rem] mt-16">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Core Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-lg">
                <Crown className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">Mr & Mrs Pet Boutique</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Luxury Pet Boutique
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Mr & Mrs Pet Boutique is a premium pet store. We curate ethically raised purebred pets, organic veterinary nutrition, and bespoke care for pet lovers worldwide.
            </p>

            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <div className="flex items-center gap-1 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Vet Certified
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Pet Shop</h4>
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
              <span>123/A xxx, coimbatore , tamilnadu</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 6381793062</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span>concierge@mrandmrspetboutique.com</span>
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
            © {new Date().getFullYear()} Mr & Mrs Pet Boutique Ltd. All Rights Reserved.
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
