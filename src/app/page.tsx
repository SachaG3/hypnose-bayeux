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
            "@id": "https://www.hypnose-bayeux.fr/#business",
            "name": "Cabinet d'Hypnothérapie Bayeux",
            "image": "https://www.hypnose-bayeux.fr/og-image.jpg",
            "url": "https://www.hypnose-bayeux.fr",
            "telephone": "+33649292077",
            "priceRange": "€€",
            "description": "Cabinet d'hypnothérapie à Bayeux spécialisé dans l'arrêt du tabac, la gestion du stress et l'amincissement. Hypnothérapeute certifiée.",
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
              "credentialCategory": "Certification",
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
                "reviewBody": "Grâce à Nadège, j&apos;ai réussi à arrêter de fumer après 15 ans de tabagisme. Son approche est efficace."
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
            "image": "https://www.hypnose-bayeux.fr/og-image.jpg",
            "@id": "https://www.hypnose-bayeux.fr",
            "url": "https://www.hypnose-bayeux.fr",
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
                "description": "Séance spécifique pour arrêter de fumer durablement",
                "price": "90",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "name": "Programme Amincissement",
                "description": "Accompagnement personnalisé pour la perte de poids (3 séances)",
                "price": "210",
                "priceCurrency": "EUR"
              }
            ],
            "employee": {
              "@type": "Person",
              "name": "Nadège GUIGNARD",
              "jobTitle": "Hypnothérapeute",
              "image": "https://www.hypnose-bayeux.fr/nadegeGuignard.webp",
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
              Cabinet d&apos;Hypnose à Bayeux | Votre Hypnothérapeute
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
                    src="/nadegeGuignard.webp"
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
                <h3 className="text-xl text-gray-700 mb-4">Cabinet d&apos;hypnose à Bayeux</h3>
                <div className="bg-teal-50 px-4 py-2 rounded-md inline-block mb-2">
                  <p className="text-teal-700 font-medium">Certifiée en hypnothérapie</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              En tant qu&apos;hypnothérapeute à Bayeux, je mets mon expertise au service de votre bien-être. 
              Spécialisée dans les techniques d&apos;hypnose thérapeutique, j&apos;accompagne mes patients dans leur transformation personnelle.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Mon cabinet d&apos;hypnose à Bayeux vous accueille dans un cadre apaisant. 
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
                <a href="mailto:contact@hypnose-bayeux.fr" className="flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@hypnose-bayeux.fr</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-center mb-4 text-teal-700">Mes services</h2>
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
              <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
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
              <Link href="/arret-tabac" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
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
              <Link href="/anneau-gastrique" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mt-auto font-medium">
                Découvrir l&apos;offre →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-center mb-4 text-teal-700">Pourquoi consulter ?</h2>
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
                    <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                      Découvrir comment l&apos;hypnose aide à gérer le stress →
                    </Link>
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
                    <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                      En savoir plus sur le développement de la confiance →
                    </Link>
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
                    <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                      Comment l&apos;hypnose améliore votre sommeil →
                    </Link>
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
                    <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                      Comment vaincre vos phobies avec l&apos;hypnose →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypnose Ericksonienne Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center mb-8 text-teal-700">
              L&apos;Hypnose Ericksonienne : Une Approche Bienveillante
            </h2>
            
            <div className="bg-gray-100 p-8 rounded-xl mb-8">
              <p className="text-gray-800 leading-relaxed mb-4">
                L&apos;hypnose ericksonienne, développée par le psychiatre américain Milton Erickson, est une approche thérapeutique douce et respectueuse. Contrairement aux idées reçues, vous ne perdez jamais le contrôle pendant une séance.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Cette méthode utilise le langage métaphorique et la communication indirecte pour accéder à l&apos;inconscient, là où se trouvent vos ressources naturelles de guérison et de changement.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Pendant une séance, vous restez parfaitement conscient et participez activement au processus. Vous atteindrez simplement un état de concentration focalisée et de relaxation profonde, propice aux transformations positives.
                <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-4">
                  Tout savoir sur le déroulement d&apos;une séance →
                </Link>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Principes clés</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Approche sur-mesure adaptée à chaque personne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Utilisation des ressources propres à chaque individu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Communication avec l&apos;inconscient par la suggestion indirecte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Absence de manipulation : vous gardez toujours le contrôle</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bénéfices observés</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Résultats rapides et durables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Développement de nouvelles ressources mentales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Amélioration de la confiance et de l&apos;estime de soi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Réduction significative du stress et de l&apos;anxiété</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/contact" className="inline-block text-teal-600 hover:text-teal-800 font-medium transition-colors duration-300">
                En savoir plus sur mes méthodes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center mb-4 text-teal-700">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-800 text-center mb-12 max-w-2xl mx-auto">
              Découvrez les réponses aux questions les plus courantes
            </p>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Comment fonctionne l&apos;hypnose thérapeutique ?
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  L&apos;hypnose thérapeutique est un état naturel de conscience modifiée qui permet d&apos;accéder aux ressources de l&apos;inconscient. Durant une séance, vous restez conscient et gardez le contrôle tout en étant dans un état de relaxation profonde, propice au changement thérapeutique.
                  <Link href="/seance-hypnose" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                    Découvrir le déroulement d&apos;une séance →
                  </Link>
                </p>
              </div>
              
              {/* Question 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Combien de séances sont nécessaires ?
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  En général, une seule séance est suffisante pour la plupart des problématiques. Pour l&apos;arrêt du tabac, une séance peut suffire dans de nombreux cas. Pour l&apos;amaigrissement, un protocole de 3 séances est recommandé afin d&apos;obtenir des résultats durables.
                  <span className="block mt-2">
                    <Link href="/arret-tabac" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mr-4">
                      Programme arrêt du tabac →
                    </Link>
                    <Link href="/anneau-gastrique" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block">
                      Programme minceur →
                    </Link>
                  </span>
                </p>
              </div>
              
              {/* Question 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Est-ce que tout le monde peut être hypnotisé ?
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  Oui, toute personne capable de concentration et désireuse de changement peut entrer en état d&apos;hypnose. C&apos;est un état naturel que nous expérimentons quotidiennement, par exemple en conduisant ou en lisant un livre captivant.
                  <Link href="/faq" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                    Plus de réponses à vos questions →
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/faq" 
                className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-300 inline-block font-medium"
              >
                Voir toutes les questions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center mb-4 text-teal-700">
              Témoignages de clients satisfaits
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Découvrez les retours d&apos;expérience de personnes qui ont fait appel à mes services d&apos;hypnose
            </p>
            
            {/* Données structurées pour Schema.org */}
            <div className="hidden" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Hypnose Bayeux - Nadège Guignard" />
              <meta itemProp="telephone" content="+33649292077" />
              <meta itemProp="priceRange" content="€€" />
              <meta itemProp="image" content="https://hypnose-bayeux.fr/nadegeGuignard.webp" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="streetAddress" content="La Fosse Buhot" />
                <meta itemProp="addressLocality" content="Maisons" />
                <meta itemProp="postalCode" content="14400" />
                <meta itemProp="addressCountry" content="FR" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Témoignage 1 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm" itemScope itemType="https://schema.org/Review">
                <meta itemProp="datePublished" content="2023-12-01" />
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">Cedric Benoit</span>
                    </h3>
                    <div className="flex items-center mt-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600" itemProp="reviewBody">
                  <p>
                    Très belle rencontre, Venu pour arrêter de fumer.
                    Ça fait un mois aujourd&apos;hui et tout va bien.
                    Super rendez vous avec Mme Guignard.
                    Bref ! Je recommande vivement 👍
                  </p>
                  <p className="mt-4 italic text-sm">
                    Après mon premier avis, Voilà 1 an que j&apos;ai arrêté de fumer et franchement c&apos;est vraiment Top.
                    Merci encore pour ce que vous avez fait pour Moi.
                  </p>
                </div>
              </div>
              
              {/* Témoignage 2 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm" itemScope itemType="https://schema.org/Review">
                <meta itemProp="datePublished" content="2023-11-15" />
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">Chantal Malherbe</span>
                    </h3>
                    <div className="flex items-center mt-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600" itemProp="reviewBody">
                  <p>
                    Bonjour, il y a maintenant 8 jours que je vous ai rencontré. Depuis je n&apos;ai pas fumé du tout. 
                    Je me sens en pleine forme. Après les patchs, suivi médical rien ne fonctionnait. 
                    Je vous recommande vivement.
                  </p>
                </div>
              </div>
              
              {/* Témoignage 3 */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm" itemScope itemType="https://schema.org/Review">
                <meta itemProp="datePublished" content="2021-05-20" />
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">Vincent Doutre</span>
                    </h3>
                    <div className="flex items-center mt-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600" itemProp="reviewBody">
                  <p>
                    Déjà presque 3 ans d&apos;arrêt suite à notre séance. Sans &quot;grosse&quot; difficulté. 
                    Quelques envies très rares par moment. Toutefois, c&apos;est comme si je n&apos;avais jamais 
                    fumé et je ne suis pas sous tension chaque jour. Vraiment efficace.
                  </p>
                  <p className="mt-2">
                    Merci encore pour cette libération.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a
                href="https://g.co/kgs/dGSS9Cj"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Voir plus d&apos;avis sur Google
              </a>
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
