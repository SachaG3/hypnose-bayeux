import Link from 'next/link';
import Image from 'next/image';
import { 
  Lightbulb, 
  Heart, 
  PhoneCall, 
  Mail, 
  SunMedium, 
  Shield,
  Moon
} from 'lucide-react';
import { homeMetadata } from './metadata';
import Script from 'next/script';

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-local"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://bayeuxhypnose.fr/#business",
            "name": "Cabinet d&apos;Hypnose Bayeux - Nadège GUIGNARD",
            "image": "https://bayeuxhypnose.fr/og-image.jpg",
            "url": "https://bayeuxhypnose.fr",
            "telephone": "+33649292077",
            "priceRange": "€€",
            "description": "Cabinet d&apos;hypnothérapie certifié à Bayeux. Nadège GUIGNARD, experte en hypnose thérapeutique, propose des séances personnalisées avec plus de 500 patients accompagnés. Spécialiste de l&apos;arrêt du tabac, stress et perte de poids.",
            "slogan": "Expertise et résultats en hypnothérapie à Bayeux",
            "knowsAbout": [
              "Hypnothérapie",
              "Arrêt du tabac",
              "Gestion du stress",
              "Perte de poids",
              "Confiance en soi",
              "Sommeil",
              "Phobies"
            ],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Certification professionnelle",
              "name": "Certification en Hypnothérapie",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Institut de Formation en Hypnose"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Marie L."
                },
                "reviewBody": "Grâce à Nadège, j&apos;ai réussi à arrêter de fumer après 15 ans de tabagisme. Son approche est professionnelle et efficace."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Thomas D."
                },
                "reviewBody": "Une expérience très positive pour la gestion du stress. Les séances sont personnalisées et les résultats sont là."
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "La Fosse Buhot",
              "addressLocality": "Maisons",
              "postalCode": "14400",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.2683",
              "longitude": "-0.7006"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "49.2683",
                "longitude": "-0.7006"
              },
              "geoRadius": "30000"
            }
          })
        }}
      />
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Hypnose Bayeux",
            "image": "https://bayeuxhypnose.fr/og-image.jpg",
            "@id": "https://bayeuxhypnose.fr",
            "url": "https://bayeuxhypnose.fr",
            "telephone": "+33649292077",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "La Fosse Buhot",
              "addressLocality": "Maisons",
              "postalCode": "14400",
              "addressCountry": "FR"
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Séance d&apos;hypnose standard",
                "description": "Séance d&apos;hypnose pour stress, anxiété, phobies, confiance en soi",
                "price": "70",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "name": "Programme Arrêt du Tabac",
                "description": "Protocole complet en 3 séances pour arrêter de fumer durablement",
                "price": "210",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "name": "Programme Amincissement",
                "description": "Accompagnement personnalisé pour la perte de poids (4 séances)",
                "price": "260",
                "priceCurrency": "EUR"
              }
            ],
            "employee": {
              "@type": "Person",
              "name": "Nadège GUIGNARD",
              "jobTitle": "Hypnothérapeute",
              "image": "https://bayeuxhypnose.fr/nadegeGuignard.png",
              "description": "Hypnothérapeute certifiée spécialisée dans l'accompagnement des personnes souhaitant se libérer de leurs blocages"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Cabinet d&apos;Hypnose à Bayeux | Votre Hypnothérapeute Professionnelle
            </h1>
            <p className="text-xl mb-10 leading-relaxed opacity-90 font-light">
              Découvrez les bienfaits de l&apos;hypnose à Bayeux avec une hypnothérapeute certifiée. 
              Séances personnalisées pour arrêt du tabac, perte de poids, gestion du stress et plus encore.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-teal-700 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                Prendre rendez-vous
              </Link>
              <Link 
                href="/tarifs" 
                className="bg-transparent border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-300 font-medium"
              >
                Tarifs et horaires
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-50 p-10 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-teal-100 shadow-md" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content="Nadège GUIGNARD" />
                  <meta itemProp="jobTitle" content="Hypnothérapeute" />
                  <Image 
                    src="/nadegeGuignard.png" 
                    alt="Nadège GUIGNARD - Hypnothérapeute à Bayeux" 
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    style={{objectFit: 'cover'}}
                    priority
                    className="hover:scale-105 transition-transform duration-300"
                    itemProp="image"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-serif font-medium text-teal-700 mb-3">
                  Nadège GUIGNARD - Hypnothérapeute à Bayeux
                </h2>
                <h3 className="text-xl text-gray-700 mb-4">Cabinet d&apos;hypnose professionnel à Bayeux</h3>
                <div className="bg-teal-50 px-4 py-2 rounded-md inline-block mb-2">
                  <p className="text-teal-700 font-medium">Certifiée en hypnothérapie</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              En tant qu&apos;hypnothérapeute professionnelle à Bayeux, je mets mon expertise au service de votre bien-être. 
              Spécialisée dans les techniques d&apos;hypnose thérapeutique, j&apos;accompagne mes patients dans leur transformation personnelle.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Mon cabinet d&apos;hypnose à Bayeux vous accueille dans un cadre apaisant et professionnel. 
              Je propose des séances d&apos;hypnothérapie adaptées à vos besoins spécifiques, que ce soit pour l&apos;arrêt du tabac, 
              la perte de poids, ou la gestion du stress.
            </p>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Mon approche</h4>
              <p className="text-gray-700">
                L&apos;hypnose est un état naturel de conscience modifiée qui permet d&apos;accéder aux ressources de votre inconscient. 
                Par un accompagnement sur mesure, je vous guide pour résoudre vos problématiques et atteindre vos objectifs de changement.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-4">
              <p className="text-center text-gray-600 mb-4">Pour prendre rendez-vous ou obtenir plus d&apos;informations :</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a href="tel:0649292077" className="flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-300">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  <span>06 49 29 20 77</span>
                </a>
                <a href="mailto:contact@bayeuxhypnose.fr" className="flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@bayeuxhypnose.fr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">Mes services</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Des techniques d&apos;hypnose adaptées à vos besoins spécifiques
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                <Lightbulb className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">HYPNOSE</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Technique douce permettant d&apos;accéder à votre inconscient pour résoudre divers problèmes : stress, anxiété, phobies, confiance en soi...
              </p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
                En savoir plus →
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                <SunMedium className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">TABAC</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Programme spécifique pour arrêter de fumer durablement grâce à un protocole en 3 séances ciblant les mécanismes de la dépendance.
              </p>
              <Link href="/tarifs" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
                Voir le programme →
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                <Heart className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">MINCEUR</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Retrouvez une relation saine avec l&apos;alimentation et changez durablement vos habitudes pour atteindre votre poids de forme.
              </p>
              <Link href="/tarifs" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
                Découvrir l&apos;offre →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">Pourquoi consulter ?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            L&apos;hypnose peut vous aider dans de nombreux domaines
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-3 mr-5 shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Gestion du stress et de l&apos;anxiété</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apprenez à réduire votre niveau de stress et à gérer votre anxiété pour retrouver calme et sérénité au quotidien.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Reason 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-3 mr-5 shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Confiance en soi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Renforcez votre confiance et votre estime personnelle pour vivre pleinement et réaliser vos ambitions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Reason 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-3 mr-5 shrink-0">
                  <Moon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Amélioration du sommeil</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Retrouvez un sommeil de qualité et dites adieu aux insomnies et aux réveils nocturnes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Reason 4 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-3 mr-5 shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Dépassement des phobies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Libérez-vous de vos peurs irrationnelles qui limitent votre quotidien et votre épanouissement personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-medium mb-6">Prêt à commencer votre transformation ?</h2>
          <p className="max-w-2xl mx-auto text-xl mb-10 opacity-90 font-light">
            Prenez rendez-vous dès aujourd&apos;hui pour une première consultation et découvrez comment l&apos;hypnothérapie peut vous aider.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-teal-700 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block font-medium"
          >
            Contactez-moi
          </Link>
        </div>
      </section>
    </>
  );
}
