import { Clock, CreditCard, MapPin } from 'lucide-react';
import { tarifsMetadata } from '../metadata';
import Script from 'next/script';

export const metadata = tarifsMetadata;

export default function TarifsPage() {
  return (
    <>
      <Script id="schema-prices" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Hypnose Bayeux - Tarifs",
        "url": "https://bayeuxhypnose.fr/tarifs",
        "priceRange": "€€",
        "paymentAccepted": "Cash, Credit Card, Check",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "19:00",
            "description": "Sur rendez-vous uniquement"
          }
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "Séance d&apos;hypnose standard",
            "description": "Entretien approfondi ou première séance d&apos;hypnose (environ 1h30)",
            "price": "70",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Arrêt du Tabac",
            "description": "Séances pour arrêter de fumer durablement",
            "price": "90",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Programme Amincissement",
            "description": "Accompagnement personnalisé pour la perte de poids (4 séances)",
            "price": "260",
            "priceCurrency": "EUR"
          }
        ]
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Tarifs et Horaires
            </h1>
            <p className="text-xl opacity-90 font-light">
              Des séances d&apos;hypnothérapie adaptées à vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-teal-700 mb-12 text-center">
              Tarifs des séances
            </h2>
            
            <div className="space-y-8" itemScope itemType="https://schema.org/PriceSpecification">

              {/* Séance 2 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">Séance d&apos;hypnose standard</h3>
                    <p className="text-gray-600" itemProp="description">
                      Entretien approfondi ou première séance d&apos;hypnose (environ 1h30)
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-2xl font-serif text-teal-700 font-medium" itemProp="price">70€</p>
                  </div>
                </div>
              </div>
              
              {/* Séance 3 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">Programme Arrêt du Tabac</h3>
                    <p className="text-gray-700" itemProp="description">
                      Séance spécifique pour arrêter de fumer durablement
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-2xl font-serif text-teal-700 font-medium" itemProp="price">90€</p>
                  </div>
                </div>
              </div>
              
              {/* Séance 4 */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">Programme Amincissement</h3>
                    <p className="text-gray-700" itemProp="description">
                      Accompagnement personnalisé pour la perte de poids (3 séances)
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-2xl font-serif text-teal-700 font-medium" itemProp="price">210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <p className="text-gray-700">
                Les consultations peuvent être réglées par carte bancaire, chèque ou espèces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-teal-700 mb-12 text-center">
              Informations pratiques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Horaires */}
              <div className="bg-white p-8 rounded-xl shadow-sm" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Horaires d&apos;ouverture</h3>
                </div>
                
                <div className="pl-16 space-y-3 text-gray-600">
                  <p itemProp="dayOfWeek" content="https://schema.org/Monday https://schema.org/Tuesday https://schema.org/Wednesday https://schema.org/Thursday https://schema.org/Friday">
                    <span itemProp="opens" content="09:00:00">Lundi - Vendredi : 9h00</span> - <span itemProp="closes" content="19:00:00">19h00</span>
                  </p>
                  <p itemProp="dayOfWeek" content="https://schema.org/Saturday">
                    <span>Samedi : Sur rendez-vous</span>
                  </p>
                  <p itemProp="dayOfWeek" content="https://schema.org/Sunday">
                    <span>Dimanche : Fermé</span>
                  </p>
                  <p className="mt-6 italic">
                    Consultations uniquement sur rendez-vous
                  </p>
                </div>
              </div>
              
              {/* Paiement */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                    <CreditCard className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Modalités de paiement</h3>
                </div>
                
                <div className="pl-16 space-y-3 text-gray-600">
                  <p>Paiement par carte bancaire, chèque ou espèces.</p>
                  <p>Règlement demandé à la fin de chaque séance.</p>
                  <p>Facture disponible sur demande.</p>
                </div>
              </div>
              
              {/* Adresse */}
              <div className="bg-white p-8 rounded-xl shadow-sm" itemScope itemType="https://schema.org/Place">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Adresse</h3>
                </div>
                
                <div className="pl-16 space-y-3 text-gray-600" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p itemProp="name">Cabinet d&apos;Hypnothérapie</p>
                  <p itemProp="streetAddress">La Fosse Buhot</p>
                  <p><span itemProp="postalCode">14400</span> <span itemProp="addressLocality">Maisons</span></p>
                  <p>(À 10 minutes de Bayeux)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 