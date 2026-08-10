import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  onClick?: () => void
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * 0.25
    const y = (e.clientY - (top + height / 2)) * 0.25
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-full gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold rounded-full gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-full gap-2.5',
    xl: 'px-10 py-5 text-lg font-bold rounded-full gap-3 shadow-xl'
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-sky-700 active:scale-95',
    secondary:
      'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-700 hover:to-teal-600 active:scale-95',
    accent:
      'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:from-orange-600 hover:to-rose-600 active:scale-95',
    outline:
      'bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 active:scale-95',
    glass:
      'bg-white/70 backdrop-blur-xl text-blue-900 border border-white/90 shadow-lg shadow-black/5 hover:bg-white/90 active:scale-95'
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.5 }}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden select-none group',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {/* Shine wave overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>
      )}

      <span className="relative z-10">{children}</span>

      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </motion.button>
  )
}
