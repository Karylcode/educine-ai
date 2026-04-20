import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1800, className = '' }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  // Parse numeric portion
  const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ''))
  const isInt = Number.isInteger(numeric)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * numeric
            setDisplayed(isInt ? Math.round(current) : parseFloat(current.toFixed(1)))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [numeric, duration, isInt])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{displayed}{suffix}
    </span>
  )
}
