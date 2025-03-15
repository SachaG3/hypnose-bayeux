'use client';

import Script from 'next/script';
import { Accordion, AccordionItem } from "@nextui-org/react";

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
  },
  {
    question: "Comment se déroule une séance d'hypnose ?",
    answer: "Une séance débute par un entretien pour comprendre vos objectifs. Ensuite, je vous guide vers un état de relaxation profonde tout en restant en communication avec vous. La séance se termine par un débriefing et des conseils personnalisés."
  },
  {
    question: "L'hypnose est-elle remboursée ?",
    answer: "Les séances d'hypnothérapie ne sont pas prises en charge par la Sécurité Sociale. Cependant, certaines mutuelles peuvent rembourser partiellement les séances. N'hésitez pas à vous renseigner auprès de votre complémentaire santé."
  },
  {
    question: "Quelle est la différence entre l'hypnose de spectacle et l'hypnothérapie ?",
    answer: "L'hypnose de spectacle vise le divertissement, tandis que l'hypnothérapie est une approche thérapeutique sérieuse et encadrée. En hypnothérapie, vous restez conscient et en contrôle, travaillant en collaboration avec le thérapeute pour atteindre vos objectifs de changement."
  },
  {
    question: "L'hypnose peut-elle aider à perdre du poids ?",
    answer: "Oui, l'hypnose est très efficace pour la perte de poids car elle permet de travailler sur les comportements alimentaires, la relation à la nourriture et la motivation. Notre programme personnalisé en 4 séances aide à installer de nouvelles habitudes alimentaires saines et durables."
  },
  {
    question: "Y a-t-il des contre-indications à l'hypnose ?",
    answer: "L'hypnose est contre-indiquée pour les personnes souffrant de troubles psychiatriques graves ou de psychoses. En cas de doute, consultez votre médecin traitant. Pour toute autre situation, nous évaluerons ensemble si l'hypnose est adaptée à votre cas lors de la première consultation."
  }
];

export default function FAQPage() {
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

      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-medium text-center mb-8 text-gray-900">
              Questions Fréquentes sur l'Hypnothérapie
            </h1>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Découvrez les réponses aux questions les plus fréquentes sur l'hypnose thérapeutique et ses applications
            </p>

            <Accordion 
              variant="bordered"
              selectionMode="multiple"
              className="px-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  className="text-gray-800"
                >
                  <div className="text-gray-600 pb-4">
                    {faq.answer}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>

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
      </div>
    </>
  );
} 