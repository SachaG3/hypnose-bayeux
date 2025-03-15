import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';
import Link from 'next/link';
import CarouselClient from '@/components/CarouselClient';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Galerie Photos | Hypnose Bayeux',
  description: 'Découvrez en images le cabinet d\'hypnothérapie à Maisons près de Bayeux. Un espace apaisant dédié à votre bien-être et votre transformation personnelle.',
  alternates: {
    canonical: 'https://bayeuxhypnose.fr/galerie',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Galerie Photos | Hypnose Bayeux',
    description: 'Découvrez en images le cabinet d\'hypnothérapie à Maisons près de Bayeux. Un espace apaisant dédié à votre bien-être.',
    url: 'https://bayeuxhypnose.fr/galerie',
    images: [
      {
        url: 'https://bayeuxhypnose.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Galerie Photos - Cabinet d\'Hypnothérapie à Bayeux',
      },
    ],
  },
};

// Définition des images à l'extérieur du composant pour pouvoir les utiliser à la fois dans le composant et dans les métadonnées JSON-LD
const galleryImages = [
  {
    src: '/images/IMG_1922.jpeg',
    alt: 'Jardin du cabinet d\'hypnothérapie',
    title: 'Le Jardin',
    description: 'Un espace extérieur apaisant et verdoyant'
  },
  {
    src: '/images/IMG_1923 2.jpeg',
    alt: 'Vue du jardin du cabinet d\'hypnothérapie',
    title: 'Espace Jardin',
    description: 'Un cadre naturel et relaxant'
  },
  {
    src: '/images/IMG_5816.jpeg',
    alt: 'Vue du jardin et de la végétation',
    title: 'Environnement Verdoyant',
    description: 'Un jardin paisible propice à la détente'
  },
  {
    src: '/images/SAM_0448.JPG',
    alt: 'Salle de consultation d\'hypnose',
    title: 'Salle d\'Hypnose',
    description: 'Un espace dédié à vos séances d\'hypnothérapie'
  },
  {
    src: '/images/71102913377__40CEE079-90F7-43AF-9EAF-DBDBFB4B99AF.jpeg',
    alt: 'Entrée du cabinet avec portail bordeaux',
    title: 'Entrée du Cabinet',
    description: 'Accueil chaleureux avec son portail bordeaux caractéristique'
  }
];

export default function GaleriePage() {
  return (
    <>
      <Script id="schema-galerie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Galerie Photos du Cabinet d'Hypnothérapie Hypnose Bayeux",
        "description": "Découvrez en images le cabinet d'hypnothérapie à Maisons près de Bayeux.",
        "image": galleryImages.map(img => `https://bayeuxhypnose.fr${img.src}`),
        "url": "https://bayeuxhypnose.fr/galerie",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Hypnose Bayeux",
          "image": "https://bayeuxhypnose.fr/og-image.jpg",
          "@id": "https://bayeuxhypnose.fr",
          "url": "https://bayeuxhypnose.fr"
        }
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Galerie Photos
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Découvrez en images le cabinet d'hypnothérapie, un espace conçu pour votre confort et votre bien-être
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section avec composant client */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <CarouselClient images={galleryImages} />

            <div className="mt-16 text-center">
              <p className="text-gray-700 mb-8">
                Vous souhaitez en savoir plus sur mon cabinet d'hypnothérapie ou prendre rendez-vous pour une séance ?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-300 font-medium"
                >
                  Prendre rendez-vous
                </Link>
                <Link 
                  href="/acces" 
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300 font-medium"
                >
                  Comment venir ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 