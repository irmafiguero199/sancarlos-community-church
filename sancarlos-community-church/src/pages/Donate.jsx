import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { HandHeart, ShieldCheck, Mail, Landmark } from 'lucide-react'

const AMOUNTS = [25, 50, 100, 250, 500, 1000]

export default function Donate() {
  const [amount, setAmount] = useState(100)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('monthly')
  const finalAmount = custom ? Number(custom) : amount

  return (
    <>
      <Helmet>
        <title>Donate | San Carlos Community Church — 501(c)(3) EIN 27-3389686</title>
        <meta name="description" content="Give to San Carlos Community Church, a 501(c)(3) nonprofit (EIN 27-3389686). Your donation is tax-deductible and supports the food pantry, youth ministry, ESL classes and senior care in Smith County, Texas." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/donate" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <span className="inline-flex items-center gap-2 bg-forest-800/70 border border-gold-500/40 text-gold-300 text-sm font-semibold px-4 py-2 rounded-full">
            <ShieldCheck size={15} /> 501(c)(3) Nonprofit · EIN 27-3389686 · Tax-Deductible
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mt-5">Give Where It Counts</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            95 cents of every dollar goes directly to programs. Your gift feeds families, tutors children and comforts seniors across Smith County, Texas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-10 max-w-5xl">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <HandHeart size={30} className="text-gold-500" />
              <h2 className="font-serif text-2xl text-forest-900">Make a Donation</h2>
            </div>
            <div className="flex gap-2 mb-6">
              {['one-time', 'monthly', 'quarterly'].map((f) => (
                <button key={f} onClick={() => setFreq(f)}
                  className={`flex-1 py-2 rounded-md text-sm font-semibold capitalize transition-colors ${freq === f ? 'bg-forest-800 text-white' : 'bg-forest-50 text-forest-800 hover:bg-forest-100'}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {AMOUNTS.map((a) => (
                <button key={a} onClick={() => { setAmount(a); setCustom('') }}
                  className={`py-3 rounded-md font-serif font-bold text-lg transition-colors ${!custom && amount === a ? 'bg-gold-500 text-forest-950' : 'bg-forest-50 text-forest-900 hover:bg-forest-100'}`}>
                  ${a}
                </button>
              ))}
            </div>
            <label className="block text-sm text-gray-600 mb-2">Custom amount (USD)</label>
            <input type="number" min="1" value={custom} onChange={(e) => setCustom(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-md border border-gray-300 px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-forest-500" />
            <div className="bg-forest-50 rounded-lg p-4 text-sm text-forest-900 mb-6 space-y-1">
              <p><strong>Donation summary:</strong> ${finalAmount || 0} {freq}</p>
              <p>San Carlos Community Church — 501(c)(3) nonprofit</p>
              <p>EIN 27-3389686 · PO Box 131598, Tyler, TX 75713-1598</p>
              <p className="text-xs text-gray-500">Your donation is tax-deductible to the fullest extent allowed by law.</p>
            </div>
            <button
              onClick={() => window.location.href = `mailto:admin@sancarloscommunitychurch.bond?subject=${encodeURIComponent('Donation pledge: $' + (finalAmount || 0) + ' ' + freq)}&body=${encodeURIComponent('Hello, I would like to make a ' + freq + ' donation of $' + (finalAmount || 0) + ' to San Carlos Community Church (EIN 27-3389686). Please send me the secure giving instructions.\n\nName:\nAddress:')}`}
              className="btn-primary w-full justify-center text-lg">
              Complete My Pledge
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">Online card processing is being configured; pledges are confirmed by email within one business day.</p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-serif text-xl text-forest-900 mb-3">Other Ways to Give</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex gap-3">
                  <Mail size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>By check:</strong> Make checks payable to "San Carlos Community Church" and mail to PO Box 131598, Tyler, TX 75713-1598. Please include your email for a tax receipt.</span>
                </li>
                <li className="flex gap-3">
                  <Landmark size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Matching gifts:</strong> Many employers match charitable donations. Email us your employer's name and we will handle the paperwork.</span>
                </li>
                <li className="flex gap-3">
                  <HandHeart size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>Legacy giving:</strong> Name San Carlos Community Church (EIN 27-3389686) in your will or estate plan and leave a lasting impact on Smith County.</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>In-kind donations:</strong> Non-perishable food, school supplies and hygiene items are accepted Thursdays 3–6 PM at the food pantry.</span>
                </li>
              </ul>
            </div>
            <div className="card bg-forest-900 !text-forest-100">
              <h3 className="font-serif text-xl text-white mb-3">What Your Gift Makes Possible</h3>
              <ul className="text-sm text-forest-200 space-y-2 list-disc pl-5">
                <li>$25 — groceries for a family of four for a week</li>
                <li>$50 — a week of after-school tutoring for one child</li>
                <li>$100 — a month of ESL classes plus materials for two adults</li>
                <li>$250 — a full Thanksgiving basket for three families</li>
                <li>$1,000 — disaster relief supplies for an East Texas storm response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
