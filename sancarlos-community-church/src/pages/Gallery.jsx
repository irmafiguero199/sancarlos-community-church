import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, CalendarDays } from 'lucide-react'

const ITEMS = [
  { img: '/images/gallery/worship-sanctuary.png', cat: 'Worship', title: 'Sunday Worship Service', date: 'September 6, 2026', place: 'San Carlos Community Church sanctuary', text: 'Congregants gather for bilingual worship during our fall kickoff Sunday.' },
  { img: '/images/gallery/youth-night.png', cat: 'Youth', title: 'Youth Night Worship', date: 'August 21, 2026', place: 'San Carlos Community Church fellowship hall', text: 'Students from grades 6–12 lead worship at the monthly youth night.' },
  { img: '/images/gallery/community-meal.png', cat: 'Outreach', title: 'Summer Community Meal Program', date: 'July 18, 2026', place: 'San Carlos Community Park, Tyler, TX', text: 'Volunteers serve the 6,200th hot meal of the 2026 summer program.' },
  { img: '/images/gallery/esl-class.png', cat: 'Education', title: 'ESL Graduation Ceremony', date: 'July 25, 2026', place: 'San Carlos Community Church classrooms', text: 'Thirty-two adults completed advanced English and citizenship classes.' },
  { img: '/images/gallery/senior-care.png', cat: 'Seniors', title: 'Senior Visitation Ministry', date: 'June 13, 2026', place: 'Assisted-living community, Tyler, TX', text: 'Volunteers spend Saturday mornings visiting homebound seniors.' },
  { img: '/images/gallery/worship-service.png', cat: 'Worship', title: 'Easter Sunrise Service', date: 'April 5, 2026', place: 'San Carlos Community Park, Tyler, TX', text: 'The congregation celebrated Easter at sunrise with the community.' },
]

const CATS = ['All', 'Worship', 'Outreach', 'Youth', 'Education', 'Seniors']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === cat)
  return (
    <>
      <Helmet>
        <title>Gallery | San Carlos Community Church</title>
        <meta name="description" content="Photos from worship services, food pantry distributions, youth nights and community events at San Carlos Community Church (EIN 27-3389686) in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/gallery" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Gallery</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">Moments of worship, service and community from San Carlos Community Church.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${cat === c ? 'bg-forest-800 text-white' : 'bg-forest-50 text-forest-800 hover:bg-forest-100'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((i) => (
              <figure key={i.title} className="card !p-0 overflow-hidden group">
                <img src={i.img} alt={i.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <figcaption className="p-5">
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wide">{i.cat}</span>
                  <h3 className="font-serif text-lg text-forest-900 mt-1">{i.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1.5"><CalendarDays size={13} /> {i.date}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><MapPin size={13} /> {i.place}</p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{i.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
