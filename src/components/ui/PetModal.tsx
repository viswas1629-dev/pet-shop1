import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, ShieldCheck, Award, Sparkles, CheckCircle2, PhoneCall, Calendar, MapPin, Scale } from 'lucide-react'
import type { Pet } from '../../types'
import { Badge } from './Badge'
import { MagneticButton } from './MagneticButton'
import { getWhatsAppUrl, createPetWhatsAppMessage } from '../../utils/whatsapp'
import toast from 'react-hot-toast'

interface PetModalProps {
  pet: Pet | null
  onClose: () => void
}

export const PetModal: React.FC<PetModalProps> = ({ pet, onClose }) => {
  if (!pet) return null

  const [activeImage, setActiveImage] = useState(pet.image)
  const [isLiked, setIsLiked] = useState(false)

  const handleToggleLike = () => {
    setIsLiked(!isLiked)
    if (!isLiked) {
      toast(`${pet.name} added to your favorites!`, { icon: '❤️' })
    }
  }

  const petWhatsAppUrl = getWhatsAppUrl(createPetWhatsAppMessage(pet))

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-white/90 backdrop-blur-2xl border border-white/90 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Close & Like */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={handleToggleLike}
              className={`p-3 rounded-full backdrop-blur-md transition-all ${
                isLiked ? 'bg-rose-50 text-rose-600' : 'bg-white/80 text-slate-600 hover:text-slate-900'
              } shadow-sm hover:scale-105`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/80 text-slate-600 hover:text-slate-900 backdrop-blur-md shadow-sm hover:scale-105 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Column: Gallery */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-slate-100 group">
                  <img
                    src={activeImage}
                    alt={pet.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {pet.isNewArrival && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
                        New Arrival
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {pet.galleryImages && pet.galleryImages.length > 0 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {pet.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                          activeImage === img ? 'border-blue-600 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Health & Origin Badges */}
                <div className="glass-card rounded-2xl p-4 flex flex-col gap-2.5 text-xs text-slate-700 mt-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{pet.healthCheck}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>{pet.vaccinationStatus}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Origin: {pet.origin}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Adoption Action */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {pet.category} • {pet.breed}
                    </span>
                    <Badge variant={pet.availability === 'Available' ? 'emerald' : 'amber'}>
                      {pet.availability}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{pet.name}</h2>

                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    ${pet.price.toLocaleString()}
                    <span className="text-xs font-normal text-slate-500 ml-2">Inc. Complete Vet Package</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{pet.description}</p>

                  {/* Attributes Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Age</div>
                        <div className="text-xs font-bold text-slate-800">{pet.age}</div>
                      </div>
                    </div>

                    <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Scale className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Weight</div>
                        <div className="text-xs font-bold text-slate-800">{pet.weight}</div>
                      </div>
                    </div>
                  </div>

                  {/* Temperament Tags */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Temperament & Personality
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pet.temperament.map((trait, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-medium border border-blue-100 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                  <a
                    href={petWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <MagneticButton
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      icon={<PhoneCall className="w-4 h-4" />}
                    >
                      Book via WhatsApp
                    </MagneticButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
