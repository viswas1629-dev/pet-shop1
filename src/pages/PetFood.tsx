import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, PhoneCall, ShieldCheck, Leaf, Heart, CheckCircle, Calculator } from 'lucide-react'

import { PageTransition } from '../components/ui/PageTransition'
import { SectionHeader } from '../components/ui/SectionHeader'
import { GlassCard } from '../components/ui/GlassCard'
import { Badge } from '../components/ui/Badge'
import { MagneticButton } from '../components/ui/MagneticButton'

import { foodData } from '../data/foodData'
import { getWhatsAppUrl, createFoodWhatsAppMessage } from '../utils/whatsapp'
import { formatCurrency } from '../utils/formatCurrency'

export const PetFood: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [calcSpecies, setCalcSpecies] = useState<'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Small Pet'>('Dog')
  const [calcAge, setCalcAge] = useState<string>('Adult (1-7 Yrs)')
  const [calcWeight, setCalcWeight] = useState<number>(10)
  const [calcResult, setCalcResult] = useState<string | null>(null)

  const foodCategories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish', 'Rabbits', 'Hamsters']

  const filteredFood = foodData.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.targetCategory === selectedCategory
  })

  const handleCalculateNutrition = (e: React.FormEvent) => {
    e.preventDefault()
    let recommendation = ''
    if (calcSpecies === 'Dog') {
      recommendation = `Recommended Daily Intake: ${(calcWeight * 25 + 70).toFixed(0)} kcal/day of Royal Heritage Raw Freeze-Dried Venison & Wild Salmon Oil.`
    } else if (calcSpecies === 'Cat') {
      recommendation = `Recommended Daily Intake: ${(calcWeight * 30 + 40).toFixed(0)} kcal/day of Crown Feline Salmon & Duck Pâté rich in Taurine.`
    } else {
      recommendation = `Recommended Daily Intake: Specialty Organic Nectar & Seed formulation enriched with Marigold petals and bee pollen.`
    }
    setCalcResult(recommendation)
  }

  return (
    <PageTransition>
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="emerald" icon={<Leaf className="w-3.5 h-3.5" />} pulse>
            100% Organic & Vet Formulated
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4"
        >
          Artisanal Organic Nutrition
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Nourish your companion with human-grade freeze-dried raw meats, wild salmon oils, organic botanicals, and zero synthetic fillers.
        </motion.p>
      </section>

      {/* ============================================================ */}
      {/* 2. CATEGORY TABS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 flex justify-center">
        <div className="flex items-center gap-2 overflow-x-auto p-2 bg-white/70 backdrop-blur-xl rounded-full border border-white/90 shadow-lg">
          {foodCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all select-none ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-105'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat} Diets
            </button>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. PRODUCT SHOWCASE GRID */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFood.map((food) => (
            <GlassCard key={food.id} className="p-0 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {food.isOrganic && <Badge variant="emerald">100% Organic</Badge>}
                    {food.isPopular && <Badge variant="amber">Best Seller</Badge>}
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                      {food.weight}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold text-emerald-600 mb-1">{food.brand}</div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{food.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {food.description}
                  </p>

                  {/* Dietary Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {food.dietaryTags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-emerald-50 text-[10px] font-bold text-emerald-800 border border-emerald-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ingredients Summary */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-4">
                    <span className="font-bold text-slate-800 block mb-1">Key Ingredients:</span>
                    <span>{food.ingredients.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Price</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-slate-900">{formatCurrency(food.price)}</span>
                    {food.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">{formatCurrency(food.originalPrice)}</span>
                    )}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(createFoodWhatsAppMessage(food))}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MagneticButton
                    variant="secondary"
                    size="sm"
                    icon={<PhoneCall className="w-4 h-4" />}
                  >
                    Enquire on WhatsApp
                  </MagneticButton>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE NUTRITION CALCULATOR */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <GlassCard className="p-8 sm:p-12 bg-gradient-to-r from-emerald-900/90 via-slate-900 to-teal-950/90 text-white rounded-3xl overflow-hidden relative">
          <div className="max-w-3xl relative z-10">
            <Badge variant="emerald" icon={<Calculator className="w-3.5 h-3.5" />}>
              Interactive Vet Tool
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Custom Dietary Calculator
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Select your companion's species, age, and weight to calculate their precise daily caloric needs and recommended organic formula.
            </p>

            <form onSubmit={handleCalculateNutrition} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Species
                </label>
                <select
                  value={calcSpecies}
                  onChange={(e) => setCalcSpecies(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400"
                >
                  <option value="Dog">Canine (Dog)</option>
                  <option value="Cat">Feline (Cat)</option>
                  <option value="Bird">Avian (Bird)</option>
                  <option value="Small Pet">Small Companion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Age Group
                </label>
                <select
                  value={calcAge}
                  onChange={(e) => setCalcAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400"
                >
                  <option value="Puppy/Kitten">Junior (Under 1 Yr)</option>
                  <option value="Adult (1-7 Yrs)">Adult (1 - 7 Yrs)</option>
                  <option value="Senior">Senior (7+ Yrs)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  min="1"
                  max="80"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="sm:col-span-3 mt-2">
                <MagneticButton type="submit" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Calculate Custom Portion
                </MagneticButton>
              </div>
            </form>

            {calcResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm font-semibold flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{calcResult}</span>
              </motion.div>
            )}
          </div>
        </GlassCard>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY QUALITY FOOD MATTERS */}
      {/* ============================================================ */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Scientific Wellness"
            eyebrowIcon={<ShieldCheck className="w-3.5 h-3.5" />}
            eyebrowVariant="emerald"
            title="Why Human-Grade Nutrition Matters"
            subtitle="Commercial pet foods rely on heat extrusion and corn fillers. Our cold-pressed and raw freeze-dried formulas preserve 99.8% of bio-available enzymes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">30% Increased Longevity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clean organic protein diets significantly reduce renal stress and systemic inflammation.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Radiant Fur & Skin</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wild Alaskan salmon oils high in Omega 3 & 6 eliminate shedding and dander.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Artificial Additives</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strictly free from synthetic dyes, chemical preservatives, corn meal, and soy derivatives.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
