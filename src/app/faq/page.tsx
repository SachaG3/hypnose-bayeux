"use client";

import Script from 'next/script';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

export default function FAQPage() {
  // Suivre quelle FAQ est actuellement ouverte
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment fonctionne l'hypnose thérapeutique ?",
      answer: "L'hypnose thérapeutique est un état naturel de conscience modifiée qui permet d'accéder aux ressources de l'inconscient. Durant une séance, vous restez conscient et gardez le contrôle tout en étant dans un état de relaxation profonde, propice au changement thérapeutique."
    },
    {
      question: "Combien de séances sont nécessaires pour voir des résultats ?",
      answer: "En général, une seule séance est suffisante pour la plupart des problématiques. Pour l'arrêt du tabac, une séance peut suffire dans de nombreux cas. Pour l'amaigrissement, un protocole de 3 séances est recommandé afin d'obtenir des résultats durables."
    },
    {
      question: "L'hypnose est-elle efficace pour l'arrêt du tabac ?",
      answer: "Oui, l'hypnose est particulièrement efficace pour l'arrêt du tabac. Une séance spécifique peut suffire dans la majorité des cas. L'hypnose aide à reprogrammer les automatismes et à gérer le stress sans cigarette."
    },
    {
      question: "Est-ce que tout le monde peut être hypnotisé ?",
      answer: "Oui, toute personne capable de concentration et désireuse de changement peut entrer en état d'hypnose. C'est un état naturel que nous expérimentons quotidiennement, par exemple en conduisant ou en lisant un livre captivant."
    },
    {
      question: "L'hypnose peut-elle aider avec l'anxiété et le stress ?",
      answer: "Absolument. L'hypnose est très efficace pour la gestion du stress et de l'anxiété. Elle permet d'accéder à un état de calme profond et d'apprendre des techniques d'auto-hypnose pour gérer les situations stressantes au quotidien."
    },
    {
      question: "Combien coûte une séance d'hypnose ?",
      answer: "Le prix d'une séance standard est de 70€. Des forfaits spécifiques existent pour l'arrêt du tabac (90€ pour une séance) et la perte de poids (210€ pour 3 séances). Pour plus de détails, consultez la page Tarifs."
    },
    {
      question: "Est-ce que l'hypnose est dangereuse ?",
      answer: "Non, l'hypnose thérapeutique pratiquée par un professionnel formé n'est pas dangereuse. Vous restez conscient tout au long de la séance et ne ferez rien contre votre volonté. C'est une méthode douce qui respecte votre intégrité."
    }
  ];

  return (
      <>
        <Script
            id="schema-faq"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
        />

        {/* Section héro avec image de fond */}
        <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Questions Fréquentes
              </h1>
              <p className="text-xl opacity-90 font-light">
                Tout ce que vous devez savoir sur l'hypnothérapie et mes services
              </p>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-gray-800 text-center mb-8">
                Découvrez les réponses aux questions les plus fréquentes sur l'hypnose thérapeutique, son fonctionnement et ses applications
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'ring-2 ring-teal-400' : 'hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={openFaqIndex === index}
                  >
                    <h2 className="text-xl font-medium text-gray-800 pr-8">
                      {faq.question}
                    </h2>
                    <div className={`text-teal-600 transition-transform duration-300 ${
                      openFaqIndex === index ? 'transform rotate-180' : ''
                    }`}>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Vous avez d'autres questions ?
              </h3>
              <p className="text-gray-700 mb-6">
              N'hésitez pas à me contacter directement pour obtenir des réponses personnalisées à vos interrogations.
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
        </section>
      </>
  );
}