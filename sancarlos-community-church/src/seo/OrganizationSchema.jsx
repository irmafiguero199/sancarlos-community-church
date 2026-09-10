export default function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'San Carlos Community Church',
    alternateName: 'SC3 Church',
    url: 'https://www.sancarloscommunitychurch.bond',
    logo: 'https://www.sancarloscommunitychurch.bond/logo.svg',
    description: 'San Carlos Community Church is a registered 501(c)(3) nonprofit church serving families in San Carlos and greater Smith County, Texas through worship services, a community food pantry, youth ministry, ESL classes, senior care and disaster relief.',
    email: 'admin@sancarloscommunitychurch.bond',
    telephone: '+1-903-555-0184',
    taxID: '27-3389686',
    foundingDate: '2009',
    nonprofitStatus: 'NonprofitType',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 131598',
      addressLocality: 'Tyler',
      addressRegion: 'TX',
      postalCode: '75713-1598',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Tyler' },
      { '@type': 'AdministrativeArea', name: 'Smith County, Texas' },
    ],
    sameAs: [
      'https://www.facebook.com/sancarloscommunitychurch',
      'https://www.instagram.com/sancarloscommunitychurch',
      'https://www.youtube.com/@sancarloscommunitychurch',
    ],
  }
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}
