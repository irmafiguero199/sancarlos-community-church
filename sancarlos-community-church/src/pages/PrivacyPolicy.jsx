import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | San Carlos Community Church</title>
        <meta name="description" content="Privacy Policy of San Carlos Community Church (EIN 27-3389686), PO Box 131598, Tyler, TX 75713-1598." />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/privacy-policy" />
      </Helmet>

      <section className="bg-forest-900 py-16 text-center">
        <div className="container-site">
          <h1 className="font-serif text-4xl text-white font-bold">Privacy Policy</h1>
          <p className="text-forest-200 mt-3">Effective date: January 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-3xl legal">
          <p>
            This Privacy Policy describes how <strong>San Carlos Community Church</strong>, a registered
            501(c)(3) nonprofit organization (EIN 27-3389686), located at PO Box 131598, Tyler, TX
            75713-1598, United States, collects, uses and protects your information when you visit
            www.sancarloscommunitychurch.bond or interact with our ministries.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Contact details (name, email address, phone number) submitted through our contact form, newsletter signup or volunteer registration.</li>
            <li>Donation information (amount, frequency) when you pledge a gift. We never store full payment card numbers on this website.</li>
            <li>Prayer requests and ministry inquiries you choose to share with our pastoral team.</li>
          </ul>
          <p>We also collect basic technical data (browser type, pages visited) to improve the website. We do not use advertising trackers or sell your data.</p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your messages, prayer requests and volunteer applications.</li>
            <li>To send the newsletter you subscribed to; every email includes an unsubscribe option.</li>
            <li>To process donations and issue tax-deductible receipts referencing our EIN 27-3389686.</li>
            <li>To coordinate food pantry, ESL and disaster relief services you register for.</li>
          </ul>

          <h2>3. How We Share Information</h2>
          <p>
            We do not sell, rent or trade your personal information. Limited information may be shared
            with trusted service providers (email delivery, accounting) under confidentiality agreements,
            or when required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We apply reasonable administrative and technical safeguards to protect your information.
            Access to personal records is restricted to authorized ministry staff and officers of the church.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access, correction or deletion of your personal information at any time by
            contacting us at the address below. We will respond within 30 days.
          </p>

          <h2>6. Contact</h2>
          <p>
            San Carlos Community Church<br />
            PO Box 131598, Tyler, TX 75713-1598, United States<br />
            Email: <a className="text-forest-700 underline" href="mailto:admin@sancarloscommunitychurch.bond">admin@sancarloscommunitychurch.bond</a><br />
            Phone: <a className="text-forest-700 underline" href="tel:+19035550184">(903) 555-0184</a>
          </p>
          <p className="text-sm text-gray-500">This policy was adopted by the Board of Directors of San Carlos Community Church and is reviewed annually.</p>
        </div>
      </section>
    </>
  )
}
