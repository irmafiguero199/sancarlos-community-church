import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="container-site py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="San Carlos Community Church logo" className="w-11 h-11" />
            <span className="font-serif font-bold text-white text-lg leading-tight">San Carlos<br />Community Church</span>
          </div>
          <p className="text-forest-200 text-sm leading-relaxed">
            A Christ-centered, community-focused church and registered 501(c)(3) nonprofit
            organization serving San Carlos and greater Smith County, Texas since 2009.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/sancarloscommunitychurch" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/sancarloscommunitychurch" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Instagram size={16} /></a>
            <a href="https://www.youtube.com/@sancarloscommunitychurch" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-forest-800 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-serif font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-gold-300" to="/about">About Us</Link></li>
            <li><Link className="hover:text-gold-300" to="/mission">Mission &amp; Vision</Link></li>
            <li><Link className="hover:text-gold-300" to="/programs">Our Programs</Link></li>
            <li><Link className="hover:text-gold-300" to="/impact">Impact Report</Link></li>
            <li><Link className="hover:text-gold-300" to="/registration-information">Registration Information</Link></li>
            <li><Link className="hover:text-gold-300" to="/donate">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-serif font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" /><span>San Carlos Community Church<br />PO Box 131598<br />Tyler, TX 75713-1598, USA</span></li>
            <li className="flex gap-2 items-center"><Phone size={16} className="text-gold-400 shrink-0" /><a href="tel:+19035550184" className="hover:text-gold-300">(903) 555-0184</a></li>
            <li className="flex gap-2 items-center"><Mail size={16} className="text-gold-400 shrink-0" /><a href="mailto:admin@sancarloscommunitychurch.bond" className="hover:text-gold-300 break-all">admin@sancarloscommunitychurch.bond</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-serif font-bold text-lg mb-4">Nonprofit Information</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><ShieldCheck size={16} className="text-gold-400 shrink-0 mt-0.5" /><span>501(c)(3) tax-exempt nonprofit<br />EIN: 27-3389686</span></li>
            <li>Incorporated in the State of Texas in 2009.</li>
            <li>All donations are tax-deductible to the fullest extent allowed by law.</li>
            <li><Link className="text-gold-300 underline underline-offset-2" to="/registration-information">View federal &amp; state registration details</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-800">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-forest-300">
          <p>© 2026 San Carlos Community Church · EIN 27-3389686 · PO Box 131598, Tyler, TX 75713-1598</p>
          <div className="flex gap-5">
            <Link className="hover:text-gold-300" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-gold-300" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
