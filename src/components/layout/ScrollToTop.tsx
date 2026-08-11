import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', '')) || document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    // Reset standard browser scroll position to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Reset Lenis smooth scroll instance to top immediately if present
    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, hash])

  return null
}
