import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight, HandHeart } from 'lucide-react'

const STATS = [
  { value: '17', label: 'Years serving Smith County' },
  { value: '42,000+', label: 'Meals served since 2012' },
  { value: '3,800+', label: 'Backpacks given to students' },
  { value: '320', label: 'Active volunteers' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-forest-950">
      <img src="/images/banners/hero-worship.png" alt="Sunday worship service at San Carlos Community Church"
        className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/40 to-forest-950" />
      <div className="relative container-site py-28 text-center">
        <span className="inline-flex items-center gap-2 bg-forest-800/80 border border-gold-500/40 text-gold-300 text-sm font-semibold px-4 py-2 rounded-full">
          <ShieldCheck size={16} /> Registered 501(c)(3) Nonprofit · EIN 27-3389686
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mt-6 leading-tight">
          San Carlos Community Church
        </h1>
        <p className="text-forest-100 text-lg md:text-xl max-w-2xl mx-auto mt-5 leading-relaxed">
          Sharing the love of Christ in word and deed — worshiping God, discipling believers,
          and serving the practical needs of families in San Carlos and greater Smith County, Texas.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <Link to="/about" className="btn-primary">Discover Our Church <ArrowRight size={18} /></Link>
          <Link to="/donate" className="btn-outline"><HandHeart size={18} /> Give Today</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-6 backdrop-blur">
              <p className="font-serif text-3xl md:text-4xl text-gold-400 font-bold">{s.value}</p>
              <p className="text-forest-200 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
