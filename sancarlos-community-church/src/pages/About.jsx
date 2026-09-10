import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Landmark, BookOpen, HeartHandshake, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const TIMELINE = [
  { year: '2009', title: 'Church Founded', text: 'San Carlos Community Church is founded by twelve families meeting in a living room in San Carlos, Smith County, Texas. The church incorporates in the State of Texas and receives EIN 27-3389686.' },
  { year: '2010', title: '501(c)(3) Recognition', text: 'The IRS recognizes the church as a 501(c)(3) tax-exempt organization, making all charitable donations fully tax-deductible.' },
  { year: '2012', title: 'Food Pantry Opens', text: 'The church launches its community food pantry with a single shelf of canned goods, serving 40 families in its first month.' },
  { year: '2015', title: 'Youth Ministry Launches', text: 'Friday night youth programs begin, combining Bible study, tutoring and sports for middle and high school students.' },
  { year: '2018', title: 'ESL Program Begins', text: 'Free English-as-a-Second-Language classes open for the growing Spanish-speaking community of Smith County.' },
  { year: '2021', title: 'Disaster Relief Team', text: 'Following severe East Texas storms, the church formalizes a disaster relief team trained in debris cleanup and emergency meal preparation.' },
  { year: '2024', title: 'Expanded Weekly Distribution', text: 'The food pantry moves to weekly distribution and serves its 40,000th meal since opening.' },
  { year: '2026', title: 'Serving Strong', text: 'The church now counts 320 active volunteers and serves more than 1,200 families annually across Smith County.' },
]

const VALUES = [
  { icon: HeartHandshake, title: 'Compassion in Action', text: 'We believe faith must be visible: a meal shared, a child mentored, a neighbor visited.' },
  { icon: BookOpen, title: 'Biblical Truth', text: 'We anchor everything we teach and do in the Scriptures, with clarity and grace.' },
  { icon: Users, title: 'Community First', text: 'The church belongs to the community it serves — every program is free and open to all.' },
  { icon: Landmark, title: 'Stewardship & Integrity', text: 'As a 501(c)(3) organization (EIN 27-3389686), we manage every donated dollar with transparency and accountability.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | San Carlos Community Church</title>
        <meta name="description" content="The history, values and legal information of San Carlos Community Church, a 501(c)(3) nonprofit church (EIN 27-3389686) founded in 2009 in San Carlos, Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/about" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">About San Carlos Community Church</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            A Christ-centered community church serving San Carlos and greater Smith County, Texas since 2009.
          </p>
        </div>
      </section>

      {/* Legal information in evidence */}
      <section className="py-10 bg-forest-950">
        <div className="container-site grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-3 bg-forest-900/60 rounded-lg px-4 py-3">
            <ShieldCheck className="text-gold-400 shrink-0" size={20} />
            <span className="text-forest-100">501(c)(3) Nonprofit<br /><strong className="text-gold-300">EIN 27-3389686</strong></span>
          </div>
          <div className="flex items-center gap-3 bg-forest-900/60 rounded-lg px-4 py-3">
            <Landmark className="text-gold-400 shrink-0" size={20} />
            <span className="text-forest-100">Founded 2009<br /><strong className="text-gold-300">Incorporated in Texas</strong></span>
          </div>
          <div className="flex items-center gap-3 bg-forest-900/60 rounded-lg px-4 py-3">
            <HeartHandshake className="text-gold-400 shrink-0" size={20} />
            <span className="text-forest-100">Mailing Address<br /><strong className="text-gold-300">PO Box 131598, Tyler, TX 75713-1598</strong></span>
          </div>
          <div className="flex items-center gap-3 bg-forest-900/60 rounded-lg px-4 py-3">
            <Users className="text-gold-400 shrink-0" size={20} />
            <span className="text-forest-100">Governed by an elected<br /><strong className="text-gold-300">Board of Directors</strong></span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <img src="/images/banners/church-sanctuary.png" alt="Inside the sanctuary of San Carlos Community Church" className="rounded-2xl shadow-xl w-full object-cover" />
          <div>
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
            <h2 className="font-serif text-3xl text-forest-900 mb-5">Seventeen Years of Faith and Service</h2>
            <p className="text-gray-700 leading-relaxed">
              San Carlos Community Church began in 2009 when twelve families in the unincorporated
              community of San Carlos, in Smith County, Texas, started meeting for prayer in a
              living room. They shared a simple conviction: a church should be the first to show up
              when a neighbor is hungry, a child needs tutoring, or a family loses everything in a storm.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Incorporated in the State of Texas and recognized by the IRS as a 501(c)(3)
              organization (EIN 27-3389686), the church has grown from those twelve families into a
              congregation of several hundred, with a food pantry, youth ministry, ESL program,
              senior visitation team and disaster relief unit — all free and open to the entire community.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our registered mailing address is PO Box 131598, Tyler, TX 75713-1598, and our office
              can be reached at (903) 555-0184 or admin@sancarloscommunitychurch.bond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader eyebrow="Milestones" title="Our Journey Since 2009" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest-200" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className={`relative flex flex-col md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                  <div className={`absolute top-1 left-4 md:left-auto ${i % 2 === 0 ? 'md:-right-[7px]' : 'md:-left-[7px]'} w-3.5 h-3.5 rounded-full bg-gold-500 ring-4 ring-forest-50`} />
                  <div className="ml-10 md:ml-0 card !p-5">
                    <span className="text-gold-600 font-serif font-bold text-lg">{t.year}</span>
                    <h3 className="font-semibold text-forest-900 mt-1">{t.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeader eyebrow="What We Believe" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card text-center">
                <v.icon size={34} className="text-gold-500 mx-auto mb-3" />
                <h3 className="font-serif text-lg text-forest-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
