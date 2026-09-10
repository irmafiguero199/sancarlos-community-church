import { Helmet } from 'react-helmet-async'
import { CalendarDays, Tag } from 'lucide-react'

const ARTICLES = [
  {
    date: 'September 8, 2026', cat: 'Outreach',
    title: 'Church Launches Weekly Food Pantry Expansion',
    text: 'Beginning this month, the San Carlos Food Pantry moves from monthly to weekly distribution. "We kept meeting families who had run out of food by week two," said Associate Pastor Ana Beltrán. "Weekly distribution closes that gap." The expansion was approved by the Board of Directors in August and is funded by this year\u2019s HopeFest fundraiser on September 26.',
  },
  {
    date: 'August 28, 2026', cat: 'Community',
    title: '320 Volunteers Serve Record 6,200 Summer Meals',
    text: 'Our summer community meal program concluded its largest season ever, serving 6,200 hot lunches to children and families at San Carlos Community Park. Volunteer coordinator Grace Liu thanked corporate teams and UT Tyler student groups who staffed the serving line six days a week from June through August.',
  },
  {
    date: 'August 15, 2026', cat: 'Education',
    title: 'Back-to-School Drive Delivers 410 Backpacks to Students',
    text: 'Families lined up early at the fellowship hall as volunteers distributed 410 backpacks filled with notebooks, pencils, calculators and hygiene kits to students from kindergarten through high school. The drive is funded entirely by individual donations to our 501(c)(3) nonprofit (EIN 27-3389686).',
  },
  {
    date: 'July 30, 2026', cat: 'Education',
    title: 'ESL Program Celebrates Its 640th Graduate',
    text: 'Thirty-two adults walked across the classroom-turned-stage at our summer ESL graduation, bringing the program\u2019s total to 640 graduates since 2018. Five graduates also passed their U.S. citizenship interviews this summer. Fall registration opens October 14 for beginner, intermediate and advanced classes.',
  },
  {
    date: 'July 12, 2026', cat: 'Outreach',
    title: 'Disaster Relief Team Assists East Texas Storm Recovery',
    text: 'After severe storms swept through East Texas in early July, our trained disaster relief team spent nine days removing fallen trees, tarping damaged roofs and serving hot meals to affected families. The team is recruiting new volunteers for its October certification training — no experience required.',
  },
]

export default function News() {
  return (
    <>
      <Helmet>
        <title>News &amp; Updates | San Carlos Community Church</title>
        <meta name="description" content="Latest news from San Carlos Community Church (EIN 27-3389686): food pantry expansion, summer meal records, backpack drive and ESL graduations in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/news" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">News &amp; Updates</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">The latest from our ministries across San Carlos and Smith County, Texas.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site max-w-4xl space-y-6">
          {ARTICLES.map((a) => (
            <article key={a.title} className="card">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><CalendarDays size={13} /> {a.date}</span>
                <span className="flex items-center gap-1 text-gold-600 font-semibold"><Tag size={13} /> {a.cat}</span>
              </div>
              <h2 className="font-serif text-2xl text-forest-900 mb-3">{a.title}</h2>
              <p className="text-gray-700 leading-relaxed">{a.text}</p>
            </article>
          ))}
          <p className="text-center text-sm text-gray-500">
            Media inquiries: <a href="mailto:admin@sancarloscommunitychurch.bond" className="text-forest-700 underline">admin@sancarloscommunitychurch.bond</a>
          </p>
        </div>
      </section>
    </>
  )
}
