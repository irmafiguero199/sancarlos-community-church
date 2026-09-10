import { Helmet } from 'react-helmet-async'
import { Quote, Handshake } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const NUMBERS = [
  { value: '42,000+', label: 'Meals served since 2012' },
  { value: '1,240', label: 'Families served in 2025' },
  { value: '3,800+', label: 'Backpacks & school supplies distributed' },
  { value: '640', label: 'ESL & citizenship graduates' },
  { value: '320', label: 'Trained active volunteers' },
  { value: '95¢', label: 'Of every donated dollar goes to programs' },
]

const TESTIMONIALS = [
  {
    quote: 'When I lost my job, the food pantry carried us through four months. Nobody asked questions, nobody judged us. They just helped. That is what church should look like.',
    name: 'Marisol G.', role: 'Food pantry recipient, San Carlos, TX',
  },
  {
    quote: 'The ESL class changed my life. I passed my citizenship interview in 2025, and my teacher from the church was there cheering at the ceremony.',
    name: 'Ahmed K.', role: 'ESL graduate & U.S. citizen, Tyler, TX',
  },
  {
    quote: 'Our company\u2019s employees have volunteered at the summer meal program for three years. San Carlos Community Church is one of the most organized, transparent nonprofits we work with.',
    name: 'Jennifer P.', role: 'Corporate volunteer coordinator, Tyler, TX',
  },
]

const PARTNERS = [
  'East Texas Food Bank — Tyler, TX',
  'PATH (People Attempting To Help) — Tyler, TX',
  'The Salvation Army of Tyler',
  'University of Texas at Tyler — student service groups',
  'Smith County Volunteer Organizations Active in Disaster',
  'Local clinics & physician volunteers of Smith County',
]

export default function Impact() {
  return (
    <>
      <Helmet>
        <title>Our Impact | San Carlos Community Church</title>
        <meta name="description" content="Impact report of San Carlos Community Church (EIN 27-3389686): 42,000+ meals served, 1,240 families helped in 2025, 640 ESL graduates in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/impact" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Our Impact</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            Real numbers from a real community — reported annually by San Carlos Community Church, a 501(c)(3) nonprofit (EIN 27-3389686).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid grid-cols-2 lg:grid-cols-3 gap-6">
          {NUMBERS.map((n) => (
            <div key={n.label} className="card text-center">
              <p className="font-serif text-4xl text-gold-600 font-bold">{n.value}</p>
              <p className="text-gray-600 text-sm mt-2">{n.label}</p>
            </div>
          ))}
        </div>
        <p className="container-site text-xs text-gray-500 mt-8 text-center">
          Figures reflect program records from January 2025 through August 2026 and are reviewed annually by the Board of Directors.
          A full annual report is available on request from admin@sancarloscommunitychurch.bond.
        </p>
      </section>

      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader eyebrow="Voices" title="What Our Community Says" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card">
                <Quote size={28} className="text-gold-400 mb-4" />
                <blockquote className="text-gray-700 leading-relaxed text-sm">{t.quote}</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-forest-100">
                  <p className="font-semibold text-forest-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeader eyebrow="Together" title="Community Partners" subtitle="Our work is multiplied by the institutions and volunteers who stand with us." />
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {PARTNERS.map((p) => (
              <div key={p} className="card !py-4 flex items-center gap-3">
                <Handshake size={22} className="text-gold-500 shrink-0" />
                <span className="text-forest-900 font-medium text-sm">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Interested in partnering with us? Contact <a href="mailto:admin@sancarloscommunitychurch.bond" className="text-forest-700 underline">admin@sancarloscommunitychurch.bond</a>.
          </p>
        </div>
      </section>
    </>
  )
}
