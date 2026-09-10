import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Landmark, FileText, HeartHandshake, Mail } from 'lucide-react'

export default function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information | San Carlos Community Church</title>
        <meta name="description" content="Federal and state registration details of San Carlos Community Church: 501(c)(3) nonprofit, EIN 27-3389686, incorporated in Texas in 2009, PO Box 131598, Tyler, TX 75713-1598." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/registration-information" />
      </Helmet>

      <section className="bg-forest-900 py-20 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Registration Information</h1>
          <p className="text-forest-200 max-w-2xl mx-auto mt-4 text-lg">
            Official federal and state registration details for San Carlos Community Church, provided for donors, grantmakers and verification purposes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site max-w-4xl space-y-8">

          <div className="card border-t-4 border-gold-500">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={30} className="text-gold-500" />
              <h2 className="font-serif text-2xl md:text-3xl text-forest-900">Federal Tax Information</h2>
            </div>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Legal Name</dt><dd className="font-semibold text-forest-900">San Carlos Community Church</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Federal Tax ID (EIN)</dt><dd className="font-serif text-3xl text-gold-600 font-bold">27-3389686</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Federal Tax Status</dt><dd className="font-semibold text-forest-900">501(c)(3) tax-exempt organization</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">IRS Determination</dt><dd className="font-semibold text-forest-900">Recognized by the IRS in 2010; EIN assigned in 2009</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Deductibility</dt><dd className="font-semibold text-forest-900">All donations are tax-deductible under IRC Section 170</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Public Records</dt><dd className="font-semibold text-forest-900">IRS Tax Exempt Organization Search (TEOS) and IRS Pub. 78</dd></div>
            </dl>
            <p className="text-sm text-gray-600 mt-5 leading-relaxed border-t border-forest-100 pt-5">
              As a church recognized under IRC Section 501(c)(3), San Carlos Community Church is classified
              by the IRS as a religious organization. Our EIN 27-3389686 can be verified through the IRS
              Tax Exempt Organization Search tool at irs.gov. A copy of our IRS determination letter is
              available upon request.
            </p>
          </div>

          <div className="card border-t-4 border-forest-700">
            <div className="flex items-center gap-3 mb-4">
              <Landmark size={30} className="text-forest-700" />
              <h2 className="font-serif text-2xl md:text-3xl text-forest-900">State Registration — Texas</h2>
            </div>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">State of Incorporation</dt><dd className="font-semibold text-forest-900">Texas</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Year Incorporated</dt><dd className="font-semibold text-forest-900">2009</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Entity Type</dt><dd className="font-semibold text-forest-900">Texas nonprofit corporation (religious)</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Entity / File Number</dt><dd className="font-semibold text-forest-900">Available upon request — email admin@sancarloscommunitychurch.bond</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Registered Address</dt><dd className="font-semibold text-forest-900">PO Box 131598, Tyler, TX 75713-1598</dd></div>
              <div><dt className="text-xs uppercase tracking-wide text-gray-500">Verification</dt><dd className="font-semibold text-forest-900">Texas Secretary of State — SOSDirect search</dd></div>
            </dl>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={30} className="text-gold-500" />
              <h2 className="font-serif text-2xl text-forest-900">Governance &amp; Financial Transparency</h2>
            </div>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed list-disc pl-5">
              <li><strong>Governing board:</strong> Board of Directors chaired by Rev. Miguel Ángel Santos, with elected officers (President, Vice President, Secretary, Treasurer). See our <a href="/team" className="text-forest-700 underline">Team page</a>.</li>
              <li><strong>Annual filings:</strong> The church files annual information returns (Form 990 series) with the IRS as applicable to its classification, and maintains annual financial reviews.</li>
              <li><strong>Annual report:</strong> Our yearly impact and financial summary is published each January and is available on request.</li>
              <li><strong>Determination letter &amp; filings:</strong> Copies of our IRS determination letter, Texas incorporation certificate and recent annual reports are available to donors and grantmakers upon written request.</li>
            </ul>
            <div className="flex items-start gap-3 bg-forest-50 rounded-lg p-4 mt-5 text-sm text-forest-900">
              <Mail size={20} className="text-gold-500 shrink-0 mt-0.5" />
              <p>
                Request documents: email <a href="mailto:admin@sancarloscommunitychurch.bond" className="underline font-semibold">admin@sancarloscommunitychurch.bond</a>, call{' '}
                <a href="tel:+19035550184" className="underline font-semibold">(903) 555-0184</a>, or write to San Carlos Community Church, PO Box 131598, Tyler, TX 75713-1598.
              </p>
            </div>
          </div>

          <div className="card bg-forest-900 !text-forest-100">
            <div className="flex items-center gap-3 mb-3">
              <HeartHandshake size={30} className="text-gold-400" />
              <h2 className="font-serif text-2xl text-white">Donation Deductibility Statement</h2>
            </div>
            <p className="text-forest-200 text-sm leading-relaxed">
              San Carlos Community Church is a 501(c)(3) nonprofit organization, EIN 27-3389686. No goods
              or services are provided in exchange for donations unless expressly stated. Donations are
              tax-deductible to the fullest extent permitted by law. Please consult your tax advisor for
              guidance specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
