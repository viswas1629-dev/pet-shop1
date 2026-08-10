import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Sparkles, Phone, Menu, X, ShieldCheck } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { cn } from '../../utils/cn'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pets', path: '/pets' },
    { name: 'Pet Food', path: '/food' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 transition-all duration-500 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Container */}
          <Link
            to="/"
            className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-lg shadow-black/5 hover:scale-105 transition-transform group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:rotate-12 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
                PAW & PALACE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mt-0.5">
                Luxury Boutique
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Floating Glass Box) */}
          <nav
            className={cn(
              'hidden md:flex items-center gap-1 px-3 rounded-full pointer-events-auto transition-all duration-500 glass-nav border border-white/80 shadow-lg shadow-black/5',
              isScrolled ? 'py-2 scale-95 shadow-xl' : 'py-3'
            )}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-5 py-2 text-sm font-bold transition-colors duration-300 rounded-full select-none',
                      isActive ? 'text-blue-700 font-extrabold' : 'text-slate-600 hover:text-slate-900'
                    )
                  }
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-blue-50/80 rounded-full border border-blue-200/60 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 pointer-events-auto">
            <Link to="/contact">
              <MagneticButton variant="primary" size="md" icon={<Sparkles className="w-4 h-4" />}>
                Book Sanctuary Visit
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden pointer-events-auto p-3 rounded-full bg-white/85 backdrop-blur-xl border border-white/90 shadow-md text-slate-800 hover:text-blue-600 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mega Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-2xl md:hidden pt-28 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Navigation Directory
              </div>
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'flex items-center justify-between py-4 px-6 rounded-2xl text-xl font-extrabold transition-all',
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                          : 'text-slate-800 hover:bg-slate-50'
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-5 h-5 text-blue-600" />}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100/60">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>24/7 VIP Pet Concierge</span>
                </div>
                <p className="text-xs text-slate-600">
                  Call our dedicated sanctuary advisors anytime for private visits or emergency advice.
                </p>
                <a
                  href="tel:+18005557297"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> +1 (800) 555-PAWS
                </a>
              </div>

              <Link to="/contact">
                <MagneticButton variant="primary" size="lg" className="w-full">
                  Book VIP Sanctuary Visit
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
