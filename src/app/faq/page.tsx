import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'FAQ Hypnothérapie | Questions Fréquentes sur l\'Hypnose à Bayeux',
  description: 'Découvrez les réponses à vos questions sur l\'hypnothérapie à Bayeux. Informations expertes sur l\'hypnose, son fonctionnement, ses bienfaits et applications thérapeutiques.',
  alternates: {
    canonical: 'https://bayeuxhypnose.fr/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Comment fonctionne l'hypnose thérapeutique ?",
      answer: "L'hypnose thérapeutique est un état naturel de conscience modifiée qui permet d'accéder aux ressources de l'inconscient. Durant une séance, vous restez conscient et gardez le contrôle tout en étant dans un état de relaxation profonde, propice au changement thérapeutique."
    },
    {
      question: "Combien de séances sont nécessaires pour voir des résultats ?",
      answer: "Le nombre de séances varie selon la problématique et la personne. Pour l'arrêt du tabac, un protocole de 3 séances est généralement suffisant. Pour la perte de poids, nous recommandons 4 séances. Pour d'autres problématiques, 1 à 5 séances peuvent être nécessaires."
    },
    {
      question: "L'hypnose est-elle efficace pour l'arrêt du tabac ?",
      answer: "Oui, l'hypnose est particulièrement efficace pour l'arrêt du tabac. Notre protocole en 3 séances affiche un taux de réussite de plus de 80% chez nos patients motivés. L'hypnose aide à reprogrammer les automatismes et à gérer le stress sans cigarette."
    },
    {
      question: "Est-ce que tout le monde peut être hypnotisé ?",
      answer: "Oui, toute personne capable de concentration et désireuse de changement peut entrer en état d'hypnose. C'est un état naturel que nous expérimentons quotidiennement, par exemple en conduisant ou en lisant un livre captivant."
    },
    {
      question: "L'hypnose peut-elle aider avec l'anxiété et le stress ?",
      answer: "Absolument. L'hypnose est très efficace pour la gestion du stress et de l'anxiété. Elle permet d'accéder à un état de calme profond et d'apprendre des techniques d'auto-hypnose pour gérer les situations stressantes au quotidien."
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

        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-serif font-medium text-center mb-8">
              Questions Fréquentes sur l'Hypnothérapie à Bayeux
            </h1>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Découvrez les réponses aux questions les plus fréquentes sur l'hypnose thérapeutique et ses applications
            </p>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-medium text-gray-800 mb-4">
                      {faq.question}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-8">
                Vous avez d'autres questions ? N'hésitez pas à me contacter
              </p>
              <a
                  href="/contact"
                  className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors duration-300 inline-block font-medium"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </>
  );
}