import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | San Carlos Community Church</title>
        <meta name="description" content="Terms of Service of San Carlos Community Church (EIN 27-3389686), PO Box 131598, Tyler, TX 75713-1598." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/terms-of-service" />
      </Helmet>

      <section className="bg-forest-900 py-16 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl text-white font-bold">Terms of Service</h1>
          <p className="text-forest-200 mt-3">Effective date: January 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-3xl legal">
          <h2>1. Acceptance of These Terms</h2>
          <p>
            These Terms of Service govern your use of www.sancarloscommunitychurch.bond, operated by
            <strong> San Carlos Community Church</strong>, a registered 501(c)(3) nonprofit organization,
            EIN 27-3389686, with a registered mailing address at PO Box 131598, Tyler, TX 75713-1598,
            United States. By using this website, you accept these terms.
          </p>

          <h2>2. Organization Information</h2>
          <p>
            San Carlos Community Church is a religious nonprofit corporation incorporated in the State
            of Texas in 2009 and recognized by the IRS as a 501(c)(3) tax-exempt organization
            (EIN 27-3389686). The content of this website describes our worship services and charitable
            programs in Smith County, Texas.
          </p>

          <h2>3. Use of This Website</h2>
          <p>You agree to use this website lawfully and respectfully. You may not:</p>
          <ul>
            <li>misuse contact forms to send spam, threats or fraudulent requests;</li>
            <li>attempt to disrupt, scrape or reverse-engineer the website;</li>
            <li>misrepresent your affiliation with San Carlos Community Church.</li>
          </ul>

          <h2>4. Donations</h2>
          <p>
            All donations made to San Carlos Community Church are voluntary and tax-deductible to the
            fullest extent allowed by law, subject to our 501(c)(3) status (EIN 27-3389686). Donations
            are generally non-refundable; if you believe an error occurred, contact us within 30 days at
            admin@sancarloscommunitychurch.bond.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All text, images and logos on this website are the property of San Carlos Community Church
            unless otherwise noted. You may share links to our pages freely; reproduction of content
            requires prior written permission.
          </p>

          <h2>6. Accuracy of Information</h2>
          <p>
            We work hard to keep program schedules, event dates and contact information accurate, but
            details may change. Please confirm time-sensitive information by calling (903) 555-0184 or
            emailing admin@sancarloscommunitychurch.bond.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, United States, without regard to
            conflict-of-law principles. Any dispute will be resolved in the courts of Smith County, Texas.
          </p>

          <h2>8. Contact</h2>
          <p>
            San Carlos Community Church<br />
            PO Box 131598, Tyler, TX 75713-1598, United States<br />
            Email: <a className="text-forest-700 underline" href="mailto:admin@sancarloscommunitychurch.bond">admin@sancarloscommunitychurch.bond</a><br />
            Phone: <a className="text-forest-700 underline" href="tel:+19035550184">(903) 555-0184</a>
          </p>
        </div>
      </section>
    </>
  )
}
