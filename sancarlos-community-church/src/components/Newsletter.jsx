import { useState } from 'react'
import { MailCheck } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSent(true)
  }
  return (
    <section className="bg-forest-900 py-16">
      <div className="container-site max-w-3xl text-center">
        <MailCheck size={36} className="text-gold-400 mx-auto mb-4" />
        <h2 className="font-serif text-3xl text-white font-bold">Stay Connected with San Carlos Community Church</h2>
        <p className="text-forest-200 mt-3">
          Receive our monthly community newsletter with worship schedules, volunteer opportunities,
          and program updates. San Carlos Community Church · EIN 27-3389686 · PO Box 131598, Tyler, TX 75713-1598.
        </p>
        {sent ? (
          <p className="text-gold-300 font-semibold mt-6">Thank you! You have been added to our newsletter list. You can unsubscribe at any time by emailing admin@sancarloscommunitychurch.bond.</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 mt-7 max-w-xl mx-auto">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            <button type="submit" className="btn-primary justify-center">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
