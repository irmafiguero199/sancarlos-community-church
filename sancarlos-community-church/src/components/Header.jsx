import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/mission', label: 'Mission' },
  { to: '/programs', label: 'Programs' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top bar with legal information */}
      <div className="bg-forest-950 text-forest-100 text-xs sm:text-sm">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gold-400 shrink-0" />
            <span>Registered 501(c)(3) Nonprofit · EIN 27-3389686</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold-400" /> PO Box 131598, Tyler, TX 75713-1598</span>
            <a href="mailto:admin@sancarloscommunitychurch.bond" className="flex items-center gap-1.5 hover:text-gold-300"><Mail size={14} className="text-gold-400" /> admin@sancarloscommunitychurch.bond</a>
            <a href="tel:+19035550184" className="flex items-center gap-1.5 hover:text-gold-300"><Phone size={14} className="text-gold-400" /> (903) 555-0184</a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur shadow">
        <div className="container-site flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="San Carlos Community Church logo" className="w-10 h-10" />
            <div className="leading-tight">
              <span className="font-serif font-bold text-forest-900 text-lg block">San Carlos Community Church</span>
              <span className="text-[11px] text-forest-600 tracking-wide">Serving Smith County, Texas since 2009</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'}
                className={({ isActive }) => isActive ? 'text-gold-600 font-semibold text-sm' : 'text-forest-900 hover:text-gold-600 font-medium text-sm transition-colors'}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-forest-900 p-2" aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-forest-100 bg-white px-4 py-3 space-y-1">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'block px-3 py-2 rounded bg-forest-50 text-gold-600 font-semibold' : 'block px-3 py-2 rounded text-forest-900 hover:bg-forest-50')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
