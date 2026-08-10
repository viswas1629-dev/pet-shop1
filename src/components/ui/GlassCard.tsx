import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card rounded-3xl p-6 relative overflow-hidden',
        hoverEffect && 'glass-card-hover',
        className
      )}
      {...props}
    >
      {/* Light sheen border glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl border border-white/80 transition duration-300" />
      {children}
    </motion.div>
  )
}
