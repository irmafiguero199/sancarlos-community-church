import { Helmet } from 'react-helmet-async'
import { Church, Soup, GraduationCap, Users, HandHeart, CloudSun, CalendarDays, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const PROGRAMS = [
  {
    icon: Church, title: 'Sunday Worship & Fellowship',
    text: 'Bilingual (English/Spanish) worship services every Sunday at 9:00 AM and 11:00 AM, with children\u2019s church, nursery care and a fellowship meal on the first Sunday of each month.',
    who: 'Everyone — all ages and backgrounds welcome', where: 'San Carlos Community Church sanctuary, San Carlos, TX',
  },
  {
    icon: Soup, title: 'San Carlos Food Pantry',
    text: 'Weekly distribution of groceries, fresh produce and household essentials. In 2025 the pantry served 1,240 families and prepared 6,200 hot summer meals. No ID or church membership required.',
    who: 'Any household in Smith County experiencing food insecurity', where: 'Weekly, Thursdays 3:00–6:00 PM',
  },
  {
    icon: GraduationCap, title: 'ESL & Citizenship Classes',
    text: 'Free English-as-a-Second-Language classes for adults at beginner, intermediate and advanced levels, plus U.S. citizenship test preparation. Childcare is provided during evening sessions.',
    who: 'Adults 18+ in Smith County; no documentation required', where: 'Tuesdays & Thursdays, 6:30–8:00 PM',
  },
  {
    icon: Users, title: 'Youth & Children\u2019s Ministry',
    text: 'Friday night youth group for grades 6–12 (worship, mentoring, sports), an after-school homework club, and a 6-week summer day camp. 410 backpacks with school supplies were distributed in August 2026.',
    who: 'Children and teens ages 5–18', where: 'Fridays 6:30–9:00 PM & weekday after-school hours',
  },
  {
    icon: HandHeart, title: 'Senior Care & Visitation',
    text: 'Weekly visits to homebound and hospitalized seniors, grocery delivery for those without transportation, and monthly birthday celebrations at assisted-living facilities in Tyler.',
    who: 'Seniors 65+ and their caregivers in Smith County', where: 'Visits scheduled weekly; coordinated from our Tyler office',
  },
  {
    icon: CloudSun, title: 'Disaster Relief & Community Aid',
    text: 'A trained volunteer team responding to storms and house fires across East Texas with debris cleanup, emergency meals and temporary supplies. Activated 11 times since 2021.',
    who: 'Families affected by disasters in East Texas', where: 'On-site response across Smith County and neighboring counties',
  },
]

const EVENTS = [
  { date: 'Sep 26, 2026', title: 'HopeFest Community Fundraiser', place: 'San Carlos Community Park, Tyler, TX', text: 'Our annual fundraiser supporting the food pantry — live music, food trucks and a silent auction from 4:00 to 9:00 PM.' },
  { date: 'Oct 3, 2026', title: 'Free Community Health & Resource Fair', place: 'San Carlos Community Church fellowship hall', text: 'Free health screenings, school physicals and benefit enrollment help, in partnership with local clinics.' },
  { date: 'Oct 14, 2026', title: 'ESL Fall Semester Begins', place: 'San Carlos Community Church classrooms', text: 'New student registration for beginner, intermediate and advanced English classes. Walk-ins welcome.' },
  { date: 'Nov 21, 2026', title: 'Thanksgiving Basket Distribution', place: 'San Carlos Community Church', text: 'Turkey dinners with all the trimmings for 300 families. Sign-up opens November 2 at the church office.' },
  { date: 'Dec 12, 2026', title: 'Christmas Toy & Coat Drive', place: 'San Carlos Community Park, Tyler, TX', text: 'Free toys, coats and blankets for children and seniors. Distribution begins at 10:00 AM while supplies last.' },
]

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs | San Carlos Community Church</title>
        <meta name="description" content="Free community programs from San Carlos Community Church (EIN 27-3389686): food pantry, youth ministry, ESL classes, senior care and disaster relief in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/programs" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Our Programs</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            Every program is free, open to all, and made possible by donors to our 501(c)(3) nonprofit (EIN 27-3389686).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeader eyebrow="Serving Smith County" title="Six Ministries, One Mission" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="card flex flex-col">
                <p.icon size={34} className="text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-forest-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.text}</p>
                <div className="mt-4 pt-4 border-t border-forest-100 space-y-2 text-xs text-forest-800">
                  <p><span className="font-semibold">Who:</span> {p.who}</p>
                  <p><span className="font-semibold">When/Where:</span> {p.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader eyebrow="Save the Date" title="Upcoming Events" />
          <div className="max-w-3xl mx-auto space-y-4">
            {EVENTS.map((e) => (
              <div key={e.title} className="card flex flex-col sm:flex-row gap-5 items-start">
                <div className="bg-forest-900 text-gold-300 rounded-lg px-4 py-3 text-center shrink-0 min-w-[110px]">
                  <CalendarDays size={20} className="mx-auto mb-1" />
                  <span className="text-sm font-semibold block">{e.date}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-forest-900">{e.title}</h3>
                  <p className="text-forest-700 text-sm flex items-center gap-1 mt-1"><MapPin size={14} /> {e.place}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            To register for an event or volunteer, call <a href="tel:+19035550184" className="text-forest-700 underline">(903) 555-0184</a> or email <a href="mailto:admin@sancarloscommunitychurch.bond" className="text-forest-700 underline">admin@sancarloscommunitychurch.bond</a>.
          </p>
        </div>
      </section>
    </>
  )
}
