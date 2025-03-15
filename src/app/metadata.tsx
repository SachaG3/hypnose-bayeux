import { Metadata, Viewport } from 'next';

// Configuration du viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Métadonnées de base pour tout le site
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://bayeuxhypnose.fr'),
  title: {
    default: 'Hypnothérapeute Bayeux | Cabinet d&apos;Hypnose Certifié - Nadège GUIGNARD',
    template: '%s | Expert en Hypnothérapie à Bayeux - Nadège GUIGNARD',
  },
  description: 'Expert en hypnothérapie à Bayeux : Nadège GUIGNARD, hypnothérapeute certifiée, vous accompagne avec des séances personnalisées. Spécialiste de l&apos;arrêt du tabac, gestion du stress et perte de poids. Plus de 500 patients accompagnés.',
  keywords: [
    'hypnothérapeute bayeux', 
    'hypnose bayeux',
    'cabinet hypnose bayeux', 
    'hypnothérapie certifiée bayeux',
    'arrêt tabac hypnose bayeux',
    'expert hypnose bayeux',
    'hypnothérapeute certifié bayeux',
    'meilleur hypnothérapeute bayeux'
  ],
  authors: [{ 
    name: 'Nadège GUIGNARD', 
    url: 'https://bayeuxhypnose.fr/a-propos' 
  }],
  creator: 'Nadège GUIGNARD - Hypnothérapeute Certifiée',
  publisher: 'Cabinet d&apos;Hypnose Bayeux',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bayeuxhypnose.fr',
    siteName: 'Cabinet d&apos;Hypnose Bayeux - Nadège GUIGNARD',
    title: 'Expert en Hypnothérapie à Bayeux | Cabinet Certifié - Nadège GUIGNARD',
    description: 'Découvrez l&apos;expertise de Nadège GUIGNARD, hypnothérapeute certifiée à Bayeux. Spécialiste de l&apos;hypnose thérapeutique : arrêt du tabac, perte de poids, gestion du stress. Résultats prouvés.',
    images: [
      {
        url: 'https://bayeuxhypnose.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hypnose Bayeux - Cabinet d&apos;Hypnothérapie',
      },
      {
        url: 'https://bayeuxhypnose.fr/nadegeGuignard.png',
        width: 400,
        height: 400,
        alt: 'Nadège GUIGNARD - Hypnothérapeute à Bayeux',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Hypnothérapeute à Bayeux | Nadège GUIGNARD',
    description: 'Hypnothérapeute certifiée à Bayeux : expertise en arrêt du tabac, perte de poids et gestion du stress. Séances personnalisées, résultats prouvés.',
    images: ['https://bayeuxhypnose.fr/og-image.jpg'],
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
    canonical: 'https://bayeuxhypnose.fr',
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
    canonical: 'https://bayeuxhypnose.fr',
  },
};

// Métadonnées pour la page des tarifs
export const tarifsMetadata: Metadata = {
  ...baseMetadata,
  title: 'Tarifs et Horaires | Hypnose Bayeux',
  description: 'Découvrez les tarifs des séances d&apos;hypnothérapie à Bayeux. Consultations d&apos;hypnose, programmes arrêt du tabac et perte de poids. Horaires d&apos;ouverture du cabinet.',
  alternates: {
    canonical: 'https://bayeuxhypnose.fr/tarifs',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Tarifs et Horaires | Hypnose Bayeux',
    description: 'Découvrez les tarifs des séances d&apos;hypnothérapie à Bayeux. Consultations d&apos;hypnose, programmes arrêt du tabac et perte de poids. Horaires d&apos;ouverture du cabinet.',
    url: 'https://bayeuxhypnose.fr/tarifs',
  },
};

// Métadonnées pour la page de contact
export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: 'Contact | Hypnose Bayeux',
  description: 'Contactez Nadège GUIGNARD, hypnothérapeute à Maisons près de Bayeux. Prenez rendez-vous par téléphone au 06 49 29 20 77 ou par email.',
  alternates: {
    canonical: 'https://bayeuxhypnose.fr/contact',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Contact | Hypnose Bayeux',
    description: 'Contactez Nadège GUIGNARD, hypnothérapeute à Maisons près de Bayeux. Prenez rendez-vous par téléphone au 06 49 29 20 77 ou par email.',
    url: 'https://bayeuxhypnose.fr/contact',
  },
};

// Métadonnées pour la page d'accès
export const accesMetadata: Metadata = {
  ...baseMetadata,
  title: 'Plan d&apos;Accès | Hypnose Bayeux',
  description: 'Plan d&apos;accès au cabinet d&apos;hypnothérapie à Maisons près de Bayeux. Situé à La Fosse Buhot, 14400 Maisons, à 10 minutes de Bayeux et 30 minutes de Caen.',
  alternates: {
    canonical: 'https://bayeuxhypnose.fr/acces',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Plan d&apos;Accès | Hypnose Bayeux',
    description: 'Plan d&apos;accès au cabinet d&apos;hypnothérapie à Maisons près de Bayeux. Situé à La Fosse Buhot, 14400 Maisons, à 10 minutes de Bayeux et 30 minutes de Caen.',
    url: 'https://bayeuxhypnose.fr/acces',
  },
}; 