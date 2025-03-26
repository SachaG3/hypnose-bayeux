"use client";

import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { useState, FormEvent } from 'react';

export default function ContactFormClient() {
  // États pour gérer le formulaire
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  
  // État pour gérer les statuts de soumission
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: ''
  });

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormState(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier que le consentement a été donné
    if (!formState.consent) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'Veuillez accepter le traitement de vos données pour envoyer le formulaire.'
      });
      return;
    }
    
    // Mettre à jour l'état pour indiquer que le formulaire est en cours d'envoi
    setStatus({ submitting: true, submitted: false, success: false, error: '' });
    
    try {
      // Envoyer les données du formulaire à notre API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du message');
      }
      
      // Réinitialiser le formulaire en cas de succès
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
      
      // Mettre à jour l'état pour indiquer que la soumission a réussi
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: ''
      });
      
    } catch (error) {
      // Gérer les erreurs
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: error instanceof Error ? error.message : 'Une erreur est survenue'
      });
    }
  };

  return (
    <>
      <Script id="schema-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Contactez Nadège GUIGNARD, hypnothérapeute à Bayeux, pour prendre rendez-vous ou obtenir des informations sur les séances d'hypnose.",
        "name": "Contact - Hypnose Bayeux",
        "url": "https://www.bayeuxhypnose.fr/contact",
        "mainEntity": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Cabinet d'Hypnose Bayeux - Nadège GUIGNARD",
          "telephone": "+33649292077",
          "email": "contact@bayeuxhypnose.fr",
          "image": "https://www.bayeuxhypnose.fr/nadegeGuignard.webp",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "name": "Cabinet d'Hypnothérapie",
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
                      <a href="tel:0649292077" className="text-gray-700 hover:text-teal-700 transition-colors duration-300" itemProp="telephone" content="+33649292077">
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
                      <a href="mailto:contact@bayeuxhypnose.fr" className="text-gray-700 hover:text-teal-700 transition-colors duration-300" itemProp="email">
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
                        <p className="text-gray-700">
                          <span itemProp="name">Cabinet d&apos;Hypnothérapie</span><br />
                          <span itemProp="streetAddress">La Fosse Buhot</span><br />
                          <span itemProp="postalCode">14400</span> <span itemProp="addressLocality">Maisons</span>
                        </p>
                      </div>
                      <Link href="/acces" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block mt-2">
                        Voir le plan d&apos;accès →
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
                        <p className="text-gray-700">
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
                
                {/* Message de succès */}
                {status.submitted && status.success && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                    <p className="text-center font-medium">
                      Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                )}
                
                {/* Message d'erreur */}
                {status.submitted && !status.success && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                    <p className="text-center font-medium">
                      {status.error || "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."}
                    </p>
                  </div>
                )}
                
                <form className="space-y-6" id="contactForm" itemScope itemType="https://schema.org/ContactPoint" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nom complet*</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email*</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Votre adresse email"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Téléphone*</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder="Décrivez votre demande"
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start space-x-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formState.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 transition-all duration-300 cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-gray-700 text-sm">
                        J&apos;accepte le traitement de mes données personnelles*
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-teal-700 text-white py-3 px-6 rounded-md font-medium 
                    hover:bg-teal-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md 
                    active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Besoin d&apos;un rendez-vous rapidement ?
              </h3>
              <p className="text-gray-700 mb-6">
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