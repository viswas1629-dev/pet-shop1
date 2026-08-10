import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from './Badge'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  eyebrowIcon?: React.ReactNode
  eyebrowVariant?: 'blue' | 'emerald' | 'coral' | 'amber' | 'slate'
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon,
  eyebrowVariant = 'blue',
  title,
  subtitle,
  align = 'center',
  className
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignmentClasses[align], className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge variant={eyebrowVariant} icon={eyebrowIcon} pulse>
            {eyebrow}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
