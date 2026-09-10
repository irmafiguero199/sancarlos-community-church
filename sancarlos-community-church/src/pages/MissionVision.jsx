import { Helmet } from 'react-helmet-async'
import { Eye, Target, CheckCircle2 } from 'lucide-react'

const GOALS = [
  { title: 'Expand the Food Pantry', text: 'Move to twice-weekly distribution and add a mobile pantry route reaching rural Smith County by 2028.', by: '2028' },
  { title: 'Double ESL Capacity', text: 'Grow from 4 to 8 weekly ESL and citizenship classes, adding childcare so parents can attend.', by: '2027' },
  { title: 'Launch Youth Leadership Academy', text: 'A 3-year mentorship track preparing teens for college, trade school and community leadership.', by: '2028' },
  { title: 'Strengthen Disaster Preparedness', text: 'Train 100 certified disaster relief volunteers and stock a full emergency supply trailer.', by: '2027' },
  { title: 'Senior Wellness Partnership', text: 'Partner with local clinics to host monthly health screenings for homebound seniors we visit.', by: '2029' },
  { title: 'Facility Stewardship', text: 'Complete energy-efficiency and accessibility upgrades to our fellowship hall and classrooms.', by: '2030' },
]

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission &amp; Vision | San Carlos Community Church</title>
        <meta name="description" content="The mission, vision and 2026-2030 strategic goals of San Carlos Community Church, a 501(c)(3) nonprofit church (EIN 27-3389686) in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/mission" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Mission &amp; Vision</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">Why San Carlos Community Church exists, and where we believe God is leading us next.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid md:grid-cols-2 gap-8">
          <div className="card border-t-4 border-gold-500">
            <Target size={36} className="text-gold-500 mb-4" />
            <h2 className="font-serif text-3xl text-forest-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              San Carlos Community Church exists to share the love of Christ in word and deed by
              worshiping God, discipling believers, and meeting the practical needs of families in
              San Carlos and greater Smith County, Texas — regardless of their ability to pay,
              their background, or their church membership.
            </p>
          </div>
          <div className="card border-t-4 border-forest-700">
            <Eye size={36} className="text-forest-700 mb-4" />
            <h2 className="font-serif text-3xl text-forest-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a Smith County where no family faces hunger, isolation or crisis alone —
              where the church is the most trusted bridge between people in need and the help they
              deserve, and where every generation encounters the hope of the Gospel through
              authentic community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">Strategic Plan</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-900 mb-4">Six Goals for 2026–2030</h2>
            <p className="text-gray-600 text-lg">Approved by the Board of Directors in January 2026, these objectives guide our ministry and our budget.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOALS.map((g) => (
              <div key={g.title} className="card">
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 size={26} className="text-gold-500" />
                  <span className="text-xs font-semibold bg-forest-100 text-forest-800 px-2.5 py-1 rounded-full">By {g.by}</span>
                </div>
                <h3 className="font-serif text-xl text-forest-900 mb-2">{g.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Questions about our strategic plan? Email <a className="text-forest-700 underline" href="mailto:admin@sancarloscommunitychurch.bond">admin@sancarloscommunitychurch.bond</a> or call (903) 555-0184.
          </p>
        </div>
      </section>
    </>
  )
}
