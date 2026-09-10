import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShieldCheck, Church, Soup, GraduationCap, Users, HeartHandshake, ArrowRight, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Newsletter from '../components/Newsletter'

const PROGRAMS = [
  { icon: Church, title: 'Sunday Worship & Fellowship', text: 'Weekly bilingual worship services at 9:00 and 11:00 AM, followed by fellowship and prayer.' },
  { icon: Soup, title: 'San Carlos Food Pantry', text: 'Weekly grocery distribution serving over 1,200 families each year in Smith County.' },
  { icon: GraduationCap, title: 'ESL & Citizenship Classes', text: 'Free English classes and citizenship preparation for adults, taught by certified volunteers.' },
  { icon: Users, title: 'Youth & Children\u2019s Ministry', text: 'After-school programs, mentoring and summer camps for children and teenagers.' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>San Carlos Community Church | 501(c)(3) Nonprofit Church in Tyler, TX</title>
        <meta name="description" content="San Carlos Community Church is a registered 501(c)(3) nonprofit church (EIN 27-3389686) serving San Carlos and Smith County, Texas since 2009 through worship, food pantry, youth and ESL programs." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/" />
      </Helmet>
      <Hero />

      {/* Mission summary */}
      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-900 mb-5">A Church Built to Serve Its Neighbors</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Since 2009, San Carlos Community Church has been a spiritual home and a practical
              lifeline for families across San Carlos and greater Smith County, Texas. As a
              registered 501(c)(3) nonprofit organization (EIN 27-3389686), every program we run —
              from our weekly food pantry to our youth mentorship nights — exists to demonstrate
              the love of Christ through tangible action.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you are looking for a place to worship, a community to belong to, or a way
              to give back, there is a seat for you here.
            </p>
            <Link to="/mission" className="btn-forest mt-7">Read Our Mission &amp; Vision <ArrowRight size={18} /></Link>
          </div>
          <img src="/images/banners/church-sanctuary.png" alt="Sanctuary of San Carlos Community Church"
            className="rounded-2xl shadow-xl w-full object-cover" />
        </div>
      </section>

      {/* Programs preview */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader eyebrow="What We Do" title="Programs That Transform Lives"
            subtitle="Every program is free, open to the community, and funded entirely by the generosity of our donors and volunteers." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="card hover:shadow-lg transition-shadow">
                <p.icon size={36} className="text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-forest-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-forest">Explore All Programs <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Legal band */}
      <section className="bg-forest-900 py-10">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4 text-forest-100">
          <div className="flex items-center gap-3">
            <ShieldCheck size={28} className="text-gold-400" />
            <div>
              <p className="font-semibold text-white">San Carlos Community Church is a registered 501(c)(3) nonprofit organization</p>
              <p className="text-sm">EIN 27-3389686 · Incorporated in Texas in 2009 · All donations are tax-deductible</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-gold-400" /> PO Box 131598, Tyler, TX 75713-1598
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-20">
        <div className="container-site">
          <SectionHeader eyebrow="Get Involved" title="Worship With Us. Serve With Us." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <HeartHandshake size={36} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-forest-900 mb-2">Give</h3>
              <p className="text-gray-600 text-sm mb-5">Your gift keeps the food pantry stocked, the lights on, and programs free for every family.</p>
              <Link to="/donate" className="btn-primary w-full justify-center">Donate</Link>
            </div>
            <div className="card text-center">
              <Users size={36} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-forest-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-5">Join 320 volunteers serving meals, tutoring students, and visiting seniors across Smith County.</p>
              <Link to="/contact" className="btn-forest w-full justify-center">Become a Volunteer</Link>
            </div>
            <div className="card text-center">
              <Church size={36} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-forest-900 mb-2">Visit</h3>
              <p className="text-gray-600 text-sm mb-5">Sunday worship at 9:00 and 11:00 AM. Office open Tuesday through Saturday, 9 AM – 5 PM.</p>
              <Link to="/contact" className="btn-forest w-full justify-center">Plan Your Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
