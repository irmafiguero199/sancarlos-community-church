import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, ShieldCheck, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:admin@sancarloscommunitychurch.bond?subject=${encodeURIComponent(form.subject)}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | San Carlos Community Church</title>
        <meta name="description" content="Contact San Carlos Community Church (EIN 27-3389686): PO Box 131598, Tyler, TX 75713-1598 · (903) 555-0184 · admin@sancarloscommunitychurch.bond. Office open Tuesday–Saturday." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/contact" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Contact Us</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">We would love to hear from you — whether you need help, want to volunteer, or are planning a visit.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="card">
              <h2 className="font-serif text-2xl text-forest-900 mb-5">Church Information</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span><strong>San Carlos Community Church</strong><br />PO Box 131598<br />Tyler, TX 75713-1598<br />United States</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={20} className="text-gold-500 shrink-0" />
                  <a href="tel:+19035550184" className="hover:text-forest-700 underline underline-offset-2">(903) 555-0184</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={20} className="text-gold-500 shrink-0" />
                  <a href="mailto:admin@sancarloscommunitychurch.bond" className="hover:text-forest-700 underline underline-offset-2 break-all">admin@sancarloscommunitychurch.bond</a>
                </li>
                <li className="flex gap-3">
                  <Clock size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Office hours:</strong> Tuesday – Saturday, 9:00 AM – 5:00 PM<br />
                    <strong>Sunday worship:</strong> 9:00 AM &amp; 11:00 AM<br />
                    <strong>Food pantry:</strong> Thursdays, 3:00 – 6:00 PM
                  </span>
                </li>
              </ul>
            </div>
            <div className="card bg-forest-900 !text-forest-100 border-l-4 border-gold-500">
              <div className="flex gap-3 items-start">
                <ShieldCheck size={28} className="text-gold-400 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-white">Nonprofit Information</h3>
                  <p className="text-sm mt-2 leading-relaxed">
                    San Carlos Community Church is a registered 501(c)(3) tax-exempt organization.
                    EIN: <strong className="text-gold-300">27-3389686</strong> · Incorporated in the State of Texas in 2009.
                    Mailing address: PO Box 131598, Tyler, TX 75713-1598.
                    Donations are tax-deductible to the fullest extent allowed by law.
                  </p>
                  <a href="/registration-information" className="text-gold-300 underline text-sm inline-block mt-3">View full registration details →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="font-serif text-2xl text-forest-900 mb-2">Send Us a Message</h2>
            <p className="text-sm text-gray-500 mb-6">Your message opens in your email app addressed to admin@sancarloscommunitychurch.bond.</p>
            {sent ? (
              <div className="bg-forest-50 border border-forest-200 rounded-lg p-5 text-forest-800">
                Thank you, {form.name.split(' ')[0] || 'friend'}! Your email draft has been opened. You can also reach us directly at (903) 555-0184.
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required onChange={update} placeholder="Full name" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                  <input name="email" type="email" required onChange={update} placeholder="Email address" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                </div>
                <input name="subject" required onChange={update} placeholder="Subject (e.g. Volunteering, Food pantry, Prayer request)" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                <textarea name="message" required rows={6} onChange={update} placeholder="Your message" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                <button type="submit" className="btn-forest w-full justify-center"><Send size={18} /> Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
