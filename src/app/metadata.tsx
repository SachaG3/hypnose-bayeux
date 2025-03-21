import { Metadata, Viewport } from 'next';

// Configuration du viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Métadonnées de base pour tout le site
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.bayeuxhypnose.fr'),
  title: {
    default: 'Hypnothérapeute Bayeux | Nadège Guignard - Bien-être',
    template: '%s | Hypnothérapie Bayeux - Nadège GUIGNARD',
  },
  description: 'Expert en hypnothérapie à Bayeux : séances pour arrêt du tabac, gestion du stress et perte de poids. Plus de 10 ans d\'expérience depuis 2014.',
  keywords: [
    'hypnothérapeute bayeux', 
    'hypnose bayeux',
    'cabinet hypnose bayeux', 
    'hypnothérapie certifiée bayeux',
    'arrêt tabac hypnose bayeux',
    'expert hypnose bayeux',
    'hypnothérapeute certifié bayeux',
    'meilleur hypnothérapeute bayeux',
    'hypnothérapie bayeux',
    'hypnose bayeux',
    'cabinet hypnose bayeux',
    'hypnothérapie certifiée bayeux',
    'arrêt tabac hypnose bayeux',
    'expert hypnose bayeux',
    'nadege guignard',
    'nadege guignard hypnothérapeute',
    'nadege guignard hypnose',
    'nadege guignard cabinet hypnose',
    'nadege guignard hypnothérapie',
    'nadege guignard arrêt tabac',
    'nadege guignard expert hypnose',
  ],
  authors: [{ 
    name: 'Nadège GUIGNARD', 
    url: 'https://www.bayeuxhypnose.fr/a-propos' 
  }],
  creator: 'Nadège GUIGNARD - Hypnothérapeute Certifiée',
  publisher: 'Cabinet d\'Hypnose Bayeux',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.bayeuxhypnose.fr',
    siteName: 'Cabinet d\'Hypnose Bayeux - Nadège GUIGNARD',
    title: 'Hypnose à Bayeux | Cabinet Certifié - Nadège GUIGNARD',
    description: 'Expert en hypnothérapie à Bayeux : arrêt du tabac, perte de poids et gestion du stress. Plus de 10 ans d\'expérience depuis 2014.',
    images: [
      {
        url: 'https://www.bayeuxhypnose.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hypnose Bayeux - Cabinet d\'Hypnothérapie',
      },
      {
        url: 'https://www.bayeuxhypnose.fr/nadegeGuignard.png',
        width: 400,
        height: 400,
        alt: 'Nadège GUIGNARD - Hypnothérapeute à Bayeux',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Hypnothérapeute à Bayeux | Nadège GUIGNARD',
    description: 'Hypnothérapeute certifiée à Bayeux : expertise en arrêt du tabac, perte de poids et gestion du stress. Plus de 10 ans d\'expérience depuis 2014.',
    images: ['https://www.bayeuxhypnose.fr/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr',
  },
  verification: {
    google: 'à_remplacer_par_votre_code_de_vérification',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr',
  },
};

// Métadonnées pour la page des tarifs
export const tarifsMetadata: Metadata = {
  ...baseMetadata,
  title: 'Tarifs et Horaires | Hypnose Bayeux',
  description: 'Découvrez les tarifs des séances d\'hypnothérapie à Bayeux. Consultations d\'hypnose, programmes arrêt du tabac et perte de poids. Horaires d\'ouverture du cabinet.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/tarifs',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Tarifs et Horaires | Hypnose Bayeux',
    description: 'Découvrez les tarifs des séances d\'hypnothérapie à Bayeux. Consultations d\'hypnose, programmes arrêt du tabac et perte de poids. Horaires d\'ouverture du cabinet.',
    url: 'https://www.bayeuxhypnose.fr/tarifs',
  },
};

// Métadonnées pour la page de contact
export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: 'Contact | Hypnose Bayeux',
  description: 'Contactez Nadège GUIGNARD, hypnothérapeute à Maisons près de Bayeux. Prenez rendez-vous par téléphone au 06 49 29 20 77 ou par email.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/contact',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Contact | Hypnose Bayeux',
    description: 'Contactez Nadège GUIGNARD, hypnothérapeute à Maisons près de Bayeux. Prenez rendez-vous par téléphone au 06 49 29 20 77 ou par email.',
    url: 'https://www.bayeuxhypnose.fr/contact',
  },
};

// Métadonnées pour la page d'accès
export const accesMetadata: Metadata = {
  ...baseMetadata,
  title: 'Plan d\'Accès | Hypnose Bayeux',
  description: 'Plan d\'accès au cabinet d\'hypnothérapie à Maisons près de Bayeux. Situé à La Fosse Buhot, 14400 Maisons, à 10 minutes de Bayeux et 30 minutes de Caen.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/acces',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Plan d\'Accès | Hypnose Bayeux',
    description: 'Plan d\'accès au cabinet d\'hypnothérapie à Maisons près de Bayeux. Situé à La Fosse Buhot, 14400 Maisons, à 10 minutes de Bayeux et 30 minutes de Caen.',
    url: 'https://www.bayeuxhypnose.fr/acces',
  },
}; 