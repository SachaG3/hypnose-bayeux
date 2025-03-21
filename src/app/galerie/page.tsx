import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';
import Image from 'next/image';
import CarouselClient from '@/components/CarouselClient';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Galerie Photos | Cabinet d\'Hypnose à Bayeux',
  description: 'Découvrez en images le cabinet d\'hypnothérapie situé à Maisons près de Bayeux. Un espace apaisant dédié à votre bien-être.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/galerie',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Photos du Cabinet d\'Hypnose près de Bayeux',
    description: 'Découvrez l\'environnement chaleureux et apaisant du cabinet d\'hypnothérapie de Nadège GUIGNARD à Maisons, près de Bayeux.',
    url: 'https://www.bayeuxhypnose.fr/galerie',
    images: [
      {
        url: 'https://www.bayeuxhypnose.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Galerie Photos - Cabinet d&apos;Hypnothérapie à Bayeux',
      },
    ],
  },
};

// Définition des images à l'extérieur du composant pour pouvoir les utiliser à la fois dans le composant et dans les métadonnées JSON-LD
const galleryImages = [
  {
    src: '/images/IMG_1922.jpeg',
    alt: 'Jardin du cabinet d&apos;hypnothérapie',
    title: 'Le Jardin',
    description: 'Un espace extérieur apaisant et verdoyant'
  },
  {
    src: '/images/IMG_1923 2.jpeg',
    alt: 'Vue du jardin du cabinet d&apos;hypnothérapie',
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
    alt: 'Salle de consultation d&apos;hypnose',
    title: 'Salle d&apos;Hypnose',
    description: 'Un espace dédié à vos séances d&apos;hypnothérapie'
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
        "author": {
          "@type": "Person",
          "name": "Nadège GUIGNARD"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Cabinet d'Hypnothérapie - Hypnose Bayeux"
        },
        "thumbnailUrl": galleryImages.map(img => `https://www.bayeuxhypnose.fr${img.src}`),
        "name": "Galerie photos du cabinet d'hypnose à Bayeux",
        "description": "Photos du cabinet d'hypnothérapie situé à Maisons près de Bayeux. Un espace professionnel et apaisant dédié au bien-être et à la thérapie par l'hypnose.",
        "image": galleryImages.map(img => `https://www.bayeuxhypnose.fr${img.src}`),
        "url": "https://www.bayeuxhypnose.fr/galerie",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Hypnose Bayeux - Nadège GUIGNARD",
          "image": "https://www.bayeuxhypnose.fr/og-image.jpg",
          "@id": "https://www.bayeuxhypnose.fr",
          "url": "https://www.bayeuxhypnose.fr"
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
              Découvrez en images le cabinet d&apos;hypnothérapie, un espace conçu pour votre confort et votre bien-être
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section avec composant client */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <CarouselClient images={galleryImages} />

            <div className="mt-16 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Besoin d&apos;un rendez-vous rapidement ?
              </h3>
              <p className="text-gray-600 mb-6">
                N&apos;hésitez pas à me contacter directement par téléphone pour obtenir un rendez-vous dans les meilleurs délais.
              </p>
              <a
                href="tel:0649292077"
                className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors duration-300 inline-flex items-center font-medium"
                aria-label="Appeler pour prendre rendez-vous"
              >
                <Phone className="w-5 h-5 mr-2" /> 
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 