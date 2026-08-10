import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'emerald' | 'coral' | 'amber' | 'slate'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
  pulse?: boolean
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  icon,
  pulse = false,
  className
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    coral: 'bg-orange-50 text-orange-700 border-orange-200/60',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/60',
    slate: 'bg-slate-100 text-slate-700 border-slate-200/60'
  }

  const pulseColors = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    coral: 'bg-orange-500',
    amber: 'bg-amber-500',
    slate: 'bg-slate-500'
  }

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs font-semibold rounded-full gap-1.5',
    md: 'px-3.5 py-1.5 text-xs font-bold tracking-wide rounded-full gap-2'
  }

  return (
    <span
      className={cn(
        'inline-flex items-center border font-medium backdrop-blur-md shadow-xs transition-colors duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              pulseColors[variant]
            )}
          />
          <span className={cn('relative inline-flex rounded-full h-2 w-2', pulseColors[variant])} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
