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
  {
    label: 'Paralib',
    description: 'Annuaire de praticiens',
    url: 'https://www.paralib.net/praticiens/nadege-guignard#prestations',
  },
  {
    label: 'Guide des médecines douces',
    description: 'Annuaire spécialisé en hypnose',
    url: 'https://guide-medecines-douces.com/dep/14/hypnose-eft-pnl-aromatherapie-magnetisme-coherence-cardiaque-dans-le-14-calvados-bayeux',
  },
] as const;

export const socialProfiles = [
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@hypnosebayeuxnadegeguignar2604/featured',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/guignard14',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nadege-guignard-7ba56435a/',
  },
] as const;

export const practitionerProfiles = [...professionalProfiles, ...socialProfiles] as const;

export const siteConfig = {
  name: 'Hypnose Bayeux',
  url: 'https://www.hypnose-bayeux.fr',
  practitioner: 'Nadège Guignard',
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

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#nadege-guignard`,
  name: siteConfig.practitioner,
  jobTitle: 'Hypnothérapeute',
  url: `${siteConfig.url}/a-propos`,
  image: `${siteConfig.url}/nadegeGuignard.webp`,
  sameAs: practitionerProfiles.map((profile) => profile.url),
  worksFor: { '@id': `${siteConfig.url}/#business` },
  workLocation: {
    '@type': 'Place',
    name: 'Cabinet d’hypnose près de Bayeux',
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
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
        name: 'Arrêt du tabac – 1 séance',
        description: 'Programme d’arrêt du tabac en une seule séance',
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
