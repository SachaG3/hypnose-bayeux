"use client";

import { Phone, Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      <Script id="schema-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact - Hypnose Bayeux",
        "url": "https://bayeuxhypnose.fr/contact",
        "mainEntity": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Hypnose Bayeux - Cabinet d'Hypnothérapie",
          "telephone": "+33649292077",
          "email": "contact@bayeuxhypnose.fr",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "La Fosse Buhot",
            "addressLocality": "Maisons",
            "postalCode": "14400",
            "addressCountry": "FR"
          },
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
          ]
        }
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Contact
            </h1>
            <p className="text-xl opacity-90 font-light">
              Prenez rendez-vous ou demandez des informations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Coordonnées */}
              <div itemScope itemType="https://schema.org/HealthAndBeautyBusiness">
                <h2 className="text-3xl font-serif font-medium text-teal-700 mb-8">
                  Informations de contact
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Téléphone</h3>
                      <a href="tel:0649292077" className="text-gray-600 hover:text-teal-700 transition-colors duration-300" itemProp="telephone" content="+33649292077">
                        06 49 29 20 77
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                      <a href="mailto:contact@bayeuxhypnose.fr" className="text-gray-600 hover:text-teal-700 transition-colors duration-300" itemProp="email">
                        contact@bayeuxhypnose.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Adresse</h3>
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <p className="text-gray-600">
                          <span itemProp="name">Cabinet d'Hypnothérapie</span><br />
                          <span itemProp="streetAddress">La Fosse Buhot</span><br />
                          <span itemProp="postalCode">14400</span> <span itemProp="addressLocality">Maisons</span>
                        </p>
                      </div>
                      <Link href="/acces" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                        Voir le plan d'accès →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-50 rounded-full p-3 mr-4 shrink-0">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Horaires</h3>
                      <div itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                        <meta itemProp="dayOfWeek" content="https://schema.org/Monday https://schema.org/Tuesday https://schema.org/Wednesday https://schema.org/Thursday https://schema.org/Friday" />
                        <meta itemProp="opens" content="09:00:00" />
                        <meta itemProp="closes" content="19:00:00" />
                        <p className="text-gray-600">
                          Lundi - Vendredi : 9h00 - 19h00<br />
                          Samedi : Sur rendez-vous<br />
                          Dimanche : Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Formulaire de contact */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h2 className="text-3xl font-serif font-medium text-teal-700 mb-8">
                  Envoyez-moi un message
                </h2>
                
                <form className="space-y-6" id="contactForm" itemScope itemType="https://schema.org/ContactPoint">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                      itemProp="name"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                      itemProp="email"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                      placeholder="Votre numéro de téléphone"
                      itemProp="telephone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                      placeholder="Votre message ou demande de rendez-vous..."
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors duration-300 w-full font-medium flex items-center justify-center"
                    aria-label="Envoyer le message de contact"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Ce formulaire est une démonstration. Pour un véritable contact, veuillez m'appeler ou m'envoyer un email directement.
                  </p>
                </form>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Besoin d'un rendez-vous rapidement ?
              </h3>
              <p className="text-gray-600 mb-6">
                N'hésitez pas à me contacter directement par téléphone pour obtenir un rendez-vous dans les meilleurs délais.
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