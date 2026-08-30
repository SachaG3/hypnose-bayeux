export const professionalProfiles = [
  {
    label: 'Google',
    description: 'Fiche d’établissement et avis',
    url: 'https://g.co/kgs/dGSS9Cj',
  },
  {
    label: 'PagesJaunes',
    description: 'Coordonnées et horaires',
    url: 'https://www.pagesjaunes.fr/pros/56197235',
  },
  {
    label: 'Liberlo',
    description: 'Annuaire d’hypnothérapeutes',
    url: 'https://liberlo.com/profil/nadege-guignard/',
  },
  {
    label: 'Resalib',
    description: 'Annuaire de praticiens',
    url: 'https://www.resalib.fr/praticien/108302-nadege-guignard-hypnotherapeute-maisons',
  },
  {
    label: 'Crenolibre',
    description: 'Profil professionnel',
    url: 'https://www.crenolibre.fr/therapeute/hypnotherapeute/maisons/cp/25404-nadege_guignard',
  },
] as const;

export const siteConfig = {
  name: 'Hypnose Bayeux',
  url: 'https://www.hypnose-bayeux.fr',
  practitioner: 'Nadège Guignard',
  telephone: '+33649292077',
  telephoneDisplay: '06 49 29 20 77',
  email: 'contact@hypnose-bayeux.fr',
  address: {
    streetAddress: 'La Fosse Buhot',
    addressLocality: 'Maisons',
    postalCode: '14400',
    addressRegion: 'Normandie',
    addressCountry: 'FR',
  },
} as const;

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: 'Cabinet d’hypnose de Nadège Guignard',
  alternateName: 'Hypnose Bayeux',
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
  telephone: siteConfig.telephone,
  email: siteConfig.email,
  sameAs: professionalProfiles.map((profile) => profile.url),
  priceRange: '70 € – 210 €',
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '19:00',
      description: 'Sur rendez-vous uniquement',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Séances d’hypnose',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Séance d’hypnose',
        price: '70',
        priceCurrency: 'EUR',
        url: `${siteConfig.url}/seance-hypnose`,
      },
      {
        '@type': 'Offer',
        name: 'Accompagnement arrêt du tabac',
        price: '90',
        priceCurrency: 'EUR',
        url: `${siteConfig.url}/arret-tabac`,
      },
      {
        '@type': 'Offer',
        name: 'Programme amincissement – 3 séances',
        price: '210',
        priceCurrency: 'EUR',
        url: `${siteConfig.url}/anneau-gastrique`,
      },
    ],
  },
};

export function serviceJsonLd(name: string, description: string, path: string, price?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: { '@id': `${siteConfig.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Bayeux',
    },
    ...(price ? {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${siteConfig.url}${path}`,
      },
    } : {}),
  };
}
