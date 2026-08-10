import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2.5,
  className
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const count = useMotionValue(0)

  const formattedValue = useTransform(count, (latest) => {
    const formatted = latest.toFixed(decimals)
    const parts = formatted.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `${prefix}${parts.join('.')}${suffix}`
  })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, {
        duration,
        ease: [0.16, 1, 0.3, 1]
      })
      return () => controls.stop()
    }
  }, [inView, count, end, duration])

  return (
    <span ref={ref} className={className}>
      <motion.span>{formattedValue}</motion.span>
    </span>
  )
}
