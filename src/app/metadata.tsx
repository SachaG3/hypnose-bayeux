import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/lib/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const homeTitle = 'Hypnothérapeute à Bayeux | Nadège Guignard';
const homeDescription = 'Cabinet d’hypnose près de Bayeux, à Maisons. Nadège Guignard propose des séances personnalisées pour l’arrêt du tabac, le stress et la gestion du poids.';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: '%s | Nadège Guignard',
  },
  description: homeDescription,
  applicationName: 'Hypnose Bayeux',
  authors: [{
    name: siteConfig.practitioner,
    url: `${siteConfig.url}/a-propos`,
  }],
  creator: `${siteConfig.practitioner}, hypnothérapeute`,
  publisher: 'Cabinet d’hypnose de Nadège Guignard',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: 'Hypnose Bayeux – Nadège Guignard',
    title: homeTitle,
    description: homeDescription,
    images: [{
      url: `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Cabinet d’hypnose près de Bayeux – Nadège Guignard',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: { absolute: homeTitle },
  alternates: { canonical: siteConfig.url },
};

const tarifsTitle = 'Tarifs hypnose à Bayeux : séances dès 70 €';
const tarifsDescription = 'Tarifs du cabinet près de Bayeux : séance d’hypnose 70 €, arrêt du tabac 90 € et programme amincissement de 3 séances 210 €. Horaires et modalités.';

export const tarifsMetadata: Metadata = {
  ...baseMetadata,
  title: { absolute: tarifsTitle },
  description: tarifsDescription,
  alternates: { canonical: `${siteConfig.url}/tarifs` },
  openGraph: {
    ...baseMetadata.openGraph,
    title: tarifsTitle,
    description: tarifsDescription,
    url: `${siteConfig.url}/tarifs`,
  },
};

const contactTitle = 'Contact et rendez-vous | Hypnose Bayeux';
const contactDescription = `Contactez ${siteConfig.practitioner}, hypnothérapeute à Maisons près de Bayeux. Rendez-vous par téléphone au ${siteConfig.telephoneDisplay} ou par formulaire.`;

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: { absolute: contactTitle },
  description: contactDescription,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    ...baseMetadata.openGraph,
    title: contactTitle,
    description: contactDescription,
    url: `${siteConfig.url}/contact`,
  },
};

const accessTitle = 'Cabinet d’hypnose près de Bayeux : adresse et accès';
const accessDescription = 'Adresse et itinéraire vers le cabinet de Nadège Guignard, La Fosse Buhot à Maisons, à 10 minutes de Bayeux. Parking gratuit sur place.';

export const accesMetadata: Metadata = {
  ...baseMetadata,
  title: { absolute: accessTitle },
  description: accessDescription,
  alternates: { canonical: `${siteConfig.url}/acces` },
  openGraph: {
    ...baseMetadata.openGraph,
    title: accessTitle,
    description: accessDescription,
    url: `${siteConfig.url}/acces`,
  },
};
