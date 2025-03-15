import { MapPin, Car, Navigation } from 'lucide-react';
import { accesMetadata } from '../metadata';
import Script from 'next/script';

export const metadata = accesMetadata;

export default function AccesPage() {
  return (
    <>
      <Script id="schema-location" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Hypnose Bayeux - Plan d'accès",
        "image": "https://bayeuxhypnose.fr/og-image.jpg",
        "url": "https://bayeuxhypnose.fr/acces",
        "@id": "https://bayeuxhypnose.fr/acces",
        "telephone": "+33649292077",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "La Fosse Buhot",
          "addressLocality": "Maisons",
          "postalCode": "14400",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.2774,
          "longitude": -0.7335
        },
        "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10369.347158127243!2d-0.7335947767212842!3d49.27745889782615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a8a31000e6eaf%3A0x40c14484fbf9f90!2s14400%20Maisons!5e0!3m2!1sfr!2sfr!4v1701684562715!5m2!1sfr!2sfr"
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Plan d'accès
            </h1>
            <p className="text-xl opacity-90 font-light">
              Comment vous rendre au cabinet d'hypnothérapie
            </p>
          </div>
        </div>
      </section>

      {/* Adresse Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16" itemScope itemType="https://schema.org/Place">
              <div className="flex items-start mb-6">
                <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Adresse du cabinet</h2>
                  <p className="text-gray-600 text-lg" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="name">Cabinet d'Hypnothérapie</span><br />
                    <span itemProp="streetAddress">La Fosse Buhot</span><br />
                    <span itemProp="postalCode">14400</span> <span itemProp="addressLocality">Maisons</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                    <Car className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">En voiture</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• À 10 minutes de Bayeux</li>
                      <li>• À 30 minutes de Caen</li>
                      <li>• Parking gratuit sur place</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                    <Navigation className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Itinéraire</h3>
                    <p className="text-gray-600">
                      Depuis Bayeux, prendre la D6 en direction de Tilly-sur-Seulles. 
                      À Maisons, suivre les indications pour La Fosse Buhot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carte */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-medium text-teal-700 mb-8 text-center">
                Carte
              </h2>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm h-96" itemProp="hasMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.4321781733267!2d-0.7608520555725226!3d49.316852399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480babc40422e79f%3A0x54e470b69a61bc16!2sGuignard%20nadege!5e0!3m2!1sfr!2sfr!4v1742073744999!5m2!1sfr!2sfr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte du cabinet d'hypnothérapie"
                  className="rounded-xl"
                  aria-label="Google Maps - Localisation du cabinet d'hypnothérapie à Maisons"
                ></iframe>
              </div>
            </div>
            
            {/* Informations supplémentaires */}
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Informations supplémentaires
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Le cabinet est situé dans un environnement calme et verdoyant, idéal pour votre séance d'hypnothérapie.
                </p>
                <p>
                  Si vous avez des difficultés à trouver le cabinet, n'hésitez pas à me contacter par téléphone au 
                  <a href="tel:0649292077" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 mx-1">
                    06 49 29 20 77
                  </a>
                  pour que je puisse vous guider.
                </p>
                <p>
                  Je vous recommande d'arriver environ 5 minutes avant votre rendez-vous pour vous installer confortablement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 