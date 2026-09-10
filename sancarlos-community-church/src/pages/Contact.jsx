import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Clock, ShieldCheck } from 'lucide-react'

export default function Contact() {
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
        <div className="container-site max-w-3xl mx-auto">
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
        </div>
      </section>
    </>
  )
}
