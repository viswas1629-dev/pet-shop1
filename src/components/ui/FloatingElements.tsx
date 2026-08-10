import React from 'react'
import { motion } from 'framer-motion'

export const AmbientBlobs: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top Left Blue Glow */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"
      />

      {/* Center Right Coral Glow */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-orange-200/25 blur-3xl"
      />

      {/* Bottom Emerald Glow */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-emerald-200/20 blur-3xl"
      />
    </div>
  )
}

export const FloatingBadge: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      className={`glass-card rounded-2xl px-4 py-2.5 shadow-xl shadow-black/5 flex items-center gap-3 text-xs font-semibold text-slate-800 border border-white/80 ${className}`}
    >
      {children}
    </motion.div>
  )
}
