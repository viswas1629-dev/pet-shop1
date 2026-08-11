import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Sparkles, ChevronLeft, ChevronRight, Scale, Calendar } from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'
import { MagneticButton } from '../components/ui/MagneticButton'
import { PetModal } from '../components/ui/PetModal'

import { petsData } from '../data/petsData'
import { formatCurrency } from '../utils/formatCurrency'
import type { Pet, PetCategory } from '../types'

export const Pets: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') as PetCategory | null

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 8

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish', 'Rabbits', 'Hamsters', 'Reptiles', 'Exotic Pets']

  // Filter logic
  const filteredPets = useMemo(() => {
    return petsData.filter((pet) => {
      const matchesCategory = selectedCategory === 'All' || pet.category === selectedCategory
      const matchesSearch =
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Newest Pets Highlight
  const newestArrivals = useMemo(() => {
    return petsData.filter((pet) => pet.isNewArrival)
  }, [])

  // Pagination logic
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage)
  const paginatedPets = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredPets.slice(start, start + itemsPerPage)
  }, [filteredPets, currentPage])

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="blue" icon={<Sparkles className="w-3.5 h-3.5" />} pulse>
            Companion Collection
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          Meet Your Soul Companion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Browse our DNA-verified purebred companions. Every pet comes with complete veterinary records, microchip identification, and a 1-year health guarantee.
        </motion.p>
      </section>

      {/* ============================================================ */}
      {/* 2. SEARCH & CATEGORY FILTERS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/70 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-white/90 shadow-xl shadow-black/5">
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              placeholder="Search by breed, name, category..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-100/80 border border-slate-200/80 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. NEWEST ARRIVALS HIGHLIGHT (TOP FEATURE) */}
      {/* ============================================================ */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="emerald" pulse>
              Newest Arrivals Showcase
            </Badge>
            <h2 className="text-xl font-bold text-slate-900">Recently Arrived Companions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newestArrivals.slice(0, 3).map((pet) => (
              <GlassCard key={pet.id} className="p-0 overflow-hidden group flex flex-col justify-between">
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="emerald">New Arrival</Badge>
                    <Badge variant="blue">{pet.category}</Badge>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs font-bold text-blue-600 mb-1">{pet.breed}</div>
                  <h3 className="text-lg font-extrabold text-slate-900">{pet.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" /> {pet.age}
                    </span>
                    <span className="flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5 text-emerald-500" /> {pet.weight}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">{formatCurrency(pet.price)}</span>
                    <MagneticButton variant="primary" size="sm" onClick={() => setSelectedPet(pet)}>
                      View Details
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 4. COMPREHENSIVE CARD GRID */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Available Companions ({filteredPets.length})
          </h2>
        </div>

        {filteredPets.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-slate-300">
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Companions Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any pets matching your criteria. Try adjusting your search query or filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedPets.map((pet) => (
              <GlassCard key={pet.id} className="p-0 overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {pet.isFeatured && <Badge variant="amber">Featured</Badge>}
                      {pet.isNewArrival && <Badge variant="emerald">New</Badge>}
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                        {pet.gender}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                        {pet.category}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{pet.breed}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{pet.name}</h3>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pet.temperament.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100/80 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Price</div>
                    <div className="text-base font-extrabold text-slate-900">{formatCurrency(pet.price)}</div>
                  </div>

                  <MagneticButton variant="primary" size="sm" onClick={() => setSelectedPet(pet)}>
                    View Details
                  </MagneticButton>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* 5. PAGINATION */}
        {/* ============================================================ */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${
                    currentPage === page
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* Pet Modal */}
      <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
    </PageTransition>
  )
}
