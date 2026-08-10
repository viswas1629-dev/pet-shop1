import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Crown } from 'lucide-react'

import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { AmbientBlobs } from './components/ui/FloatingElements'
import { useLenis } from './hooks/useLenis'

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Pets = lazy(() => import('./pages/Pets').then((module) => ({ default: module.Pets })))
const PetFood = lazy(() => import('./pages/PetFood').then((module) => ({ default: module.PetFood })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))

// Luxury Loading Screen
const LoadingFallback = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5]">
    <motion.div
      animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-xl shadow-blue-500/25 mb-4"
    >
      <Crown className="w-8 h-8" />
    </motion.div>
    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 animate-pulse">
      Paw & Palace Sanctuary
    </span>
  </div>
)

const AnimatedRoutes = () => {
  const location = useLocation()
  useLenis() // Integrated Lenis smooth scroll

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/food" element={<PetFood />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
        {/* Ambient Animated Blobs */}
        <AmbientBlobs />

        {/* Floating Glass Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Toast Notification Container */}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </BrowserRouter>
  )
}

export default App
