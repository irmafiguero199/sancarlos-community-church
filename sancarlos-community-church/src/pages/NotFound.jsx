import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | San Carlos Community Church</title>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sancarloscommunitychurch.bond/" />
      </Helmet>
      <section className="py-32 text-center">
        <div className="container-site">
          <p className="font-serif text-7xl text-gold-500 font-bold">404</p>
          <h1 className="font-serif text-3xl text-forest-900 mt-4">Page Not Found</h1>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            The page you are looking for was moved or does not exist. San Carlos Community Church ·
            EIN 27-3389686 · PO Box 131598, Tyler, TX 75713-1598.
          </p>
          <Link to="/" className="btn-forest mt-8">Return to Homepage</Link>
        </div>
      </section>
    </>
  )
}
