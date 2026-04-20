import { Link } from 'react-router-dom'

export default function GlowButton({ children, to, href, onClick, variant = 'primary', size = 'md', disabled, className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:   'bg-accent-orange text-white glow-orange hover:bg-orange-400 focus-visible:outline-accent-orange active:scale-95',
    secondary: 'bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 focus-visible:outline-accent-cyan active:scale-95',
    ghost:     'bg-white/8 border border-white/15 text-white hover:bg-white/15 active:scale-95',
    brand:     'bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600 active:scale-95',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
