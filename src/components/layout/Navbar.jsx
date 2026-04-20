import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Clapperboard } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 ${isActive ? 'text-accent-cyan' : 'text-slate-300 hover:text-white'}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-base/90 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer" aria-label="EduCine AI 首頁">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center glow-brand">
            <Clapperboard size={18} className="text-accent-cyan" />
          </div>
          <span className="font-heading font-bold text-lg text-white">
            EduCine <span className="text-accent-cyan">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={linkCls}>展示頁</NavLink>
          <a href="/#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150">
            運作原理
          </a>
          <a href="/#tech" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150">
            技術架構
          </a>
          <NavLink
            to="/demo"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-200 cursor-pointer"
          >
            試用 Demo
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? '關閉選單' : '開啟選單'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-surface border-t border-dark-border px-4 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={linkCls} onClick={() => setOpen(false)}>展示頁</NavLink>
          <a href="/#how-it-works" className="text-sm font-medium text-slate-300" onClick={() => setOpen(false)}>
            運作原理
          </a>
          <a href="/#tech" className="text-sm font-medium text-slate-300" onClick={() => setOpen(false)}>
            技術架構
          </a>
          <NavLink
            to="/demo"
            className="inline-flex justify-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent-orange text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            試用 Demo
          </NavLink>
        </div>
      )}
    </header>
  )
}
