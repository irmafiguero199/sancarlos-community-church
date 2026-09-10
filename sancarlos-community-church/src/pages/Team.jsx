import { Helmet } from 'react-helmet-async'
import { CalendarClock } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const BOARD = [
  { name: 'Rev. Miguel Ángel Santos', role: 'Senior Pastor & Board Chair', bio: 'Founding pastor since 2009. Leads preaching, vision and community partnerships across Smith County.' },
  { name: 'Maria Elena Torres', role: 'President of the Board', bio: 'Small business owner in Tyler and member since 2011. Chairs board meetings and strategic planning.' },
  { name: 'James Okafor', role: 'Vice President', bio: 'Retired school principal. Oversees the youth ministry and education programs.' },
  { name: 'Rosa Jiménez', role: 'Board Secretary', bio: 'Paralegal and bilingual community advocate. Keeps official minutes and records.' },
  { name: 'David Chen', role: 'Board Treasurer', bio: 'CPA. Supervises bookkeeping, the annual budget and Form 990 filings.' },
  { name: 'Sarah Mitchell', role: 'Board Member at Large', bio: 'Registered nurse. Champions the senior care and health-fair initiatives.' },
]

const STAFF = [
  { name: 'Pastor Ana Beltrán', role: 'Associate Pastor, Outreach', bio: 'Leads the food pantry, disaster relief team and volunteer training.' },
  { name: 'Mark Reynolds', role: 'Program Director, Food Pantry', bio: 'Manages weekly distributions and partnerships with regional food banks.' },
  { name: 'Grace Liu', role: 'Volunteer Coordinator', bio: 'Recruits and schedules 320 volunteers across all six ministries.' },
  { name: 'Tomás Rivera', role: 'Facilities & Operations Manager', bio: 'Maintains the sanctuary, classrooms and fellowship hall.' },
]

function Avatar({ name }) {
  const initials = name.replace('Rev. ', '').replace('Pastor ', '').split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <div className="w-20 h-20 rounded-full bg-forest-800 text-gold-300 font-serif font-bold text-2xl flex items-center justify-center mx-auto">
      {initials}
    </div>
  )
}

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team &amp; Board | San Carlos Community Church</title>
        <meta name="description" content="Meet the board of directors and staff of San Carlos Community Church (EIN 27-3389686), a 501(c)(3) nonprofit church in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/team" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Leadership &amp; Team</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            Servant leaders elected and appointed to steward the mission of San Carlos Community Church.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeader eyebrow="Governance" title="Board of Directors" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD.map((m) => (
              <div key={m.name} className="card text-center">
                <Avatar name={m.name} />
                <h3 className="font-serif text-lg text-forest-900 mt-4 mb-1">{m.name}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader eyebrow="Staff" title="Ministry Staff" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAFF.map((m) => (
              <div key={m.name} className="card text-center">
                <Avatar name={m.name} />
                <h3 className="font-serif text-lg text-forest-900 mt-4 mb-1">{m.name}</h3>
                <p className="text-gold-600 text-sm font-semibold mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-3xl">
          <div className="card flex flex-col sm:flex-row items-start gap-5">
            <CalendarClock size={40} className="text-gold-500 shrink-0" />
            <div>
              <h2 className="font-serif text-2xl text-forest-900 mb-2">Board Meetings</h2>
              <p className="text-gray-700 leading-relaxed">
                The Board of Directors of San Carlos Community Church meets on the first Tuesday of
                every month at 7:00 PM in the church fellowship hall in San Carlos, TX. Meetings are
                open to church members, and minutes are available upon request by emailing
                admin@sancarloscommunitychurch.bond or writing to PO Box 131598, Tyler, TX 75713-1598.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
