"use client";

import Script from 'next/script';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  // Suivre quelle FAQ est actuellement ouverte
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("general");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categories = [
    { id: "general", name: "Questions générales" },
    { id: "seance", name: "Séances d'hypnose" },
    { id: "tabac", name: "Arrêt du tabac" },
    { id: "poids", name: "Perte de poids" },
    { id: "tarifs", name: "Tarifs et séances" }
  ];

  const faqsByCategory = {
    general: [
      {
        question: "Qu'est-ce que l'hypnose thérapeutique ?",
        answer: "L'hypnose thérapeutique est un état naturel de conscience modifiée qui permet d'accéder aux ressources de l'inconscient. Durant une séance, vous restez conscient et gardez le contrôle tout en étant dans un état de relaxation profonde, propice au changement thérapeutique. L'hypnose est reconnue comme une approche efficace pour traiter diverses problématiques comme le stress, les phobies, la confiance en soi ou les addictions."
      },
      {
        question: "Est-ce que tout le monde peut être hypnotisé ?",
        answer: "Oui, toute personne capable de concentration et désireuse de changement peut entrer en état d'hypnose. C'est un état naturel que nous expérimentons quotidiennement, par exemple en conduisant (hypnose de la route), en lisant un livre captivant ou en regardant un film. La capacité à être hypnotisé varie d'une personne à l'autre, mais avec une approche personnalisée, chacun peut bénéficier de l'hypnose."
      },
      {
        question: "Est-ce que l'hypnose est dangereuse ?",
        answer: "Non, l'hypnose thérapeutique n'est pas dangereuse. Vous restez conscient tout au long de la séance et ne ferez rien contre votre volonté. C'est une méthode douce qui respecte votre intégrité. Contrairement aux idées reçues véhiculées par les shows télévisés, l'hypnose thérapeutique est un processus respectueux où vous gardez toujours le contrôle."
      },
      {
        question: "Quelle est la différence entre l'hypnose de spectacle et l'hypnose thérapeutique ?",
        answer: "L'hypnose de spectacle vise à divertir un public en créant des situations amusantes ou surprenantes avec des volontaires. L'hypnose thérapeutique, en revanche, est une approche sérieuse et respectueuse qui se pratique en cabinet dans un cadre confidentiel. Elle a pour objectif de vous aider à résoudre des problématiques précises et à activer vos ressources intérieures pour un mieux-être durable."
      },
      {
        question: "L'hypnose est-elle scientifiquement reconnue ?",
        answer: "Oui, l'hypnose est aujourd'hui reconnue scientifiquement. De nombreuses études cliniques ont démontré son efficacité pour diverses problématiques comme la gestion de la douleur, les troubles anxieux, les addictions ou les phobies. L'imagerie cérébrale a permis d'observer que l'état hypnotique correspond à un état neurologique particulier, différent de l'éveil ordinaire et du sommeil."
      },
      {
        question: "Ai-je besoin de croire en l'hypnose pour que ça fonctionne ?",
        answer: "Non, vous n'avez pas besoin d'y croire. La réceptivité à l'hypnose ne dépend pas de votre croyance mais plutôt de votre capacité à vous concentrer et à suivre les suggestions. Même les personnes sceptiques peuvent entrer en état d'hypnose si elles sont ouvertes à l'expérience et suivent les consignes. Ce qui compte vraiment, c'est votre motivation au changement."
      }
    ],
    seance: [
      {
        question: "Comment se déroule une séance d'hypnose ?",
        answer: "Une séance d'hypnose se déroule en quatre étapes principales : 1) L'entretien initial où nous explorons votre demande et vos objectifs, 2) L'induction hypnotique qui vous guide vers un état de concentration focalisée et de relaxation, 3) Le travail thérapeutique utilisant diverses techniques adaptées à votre situation, et 4) Le retour à l'état d'éveil ordinaire suivi d'un temps d'échange. Une séance dure généralement entre 1h et 1h30."
      },
      {
        question: "Comment saurai-je si je suis en état d'hypnose ?",
        answer: "L'état d'hypnose varie selon les personnes, mais il s'accompagne généralement d'une profonde relaxation, d'une attention accrue et focalisée, et parfois d'une distorsion du temps (l'impression que la séance a été plus courte qu'en réalité). Vous pourriez ressentir une lourdeur ou légèreté dans le corps, une respiration plus lente et profonde. Vous resterez conscient et pourrez entendre tout ce qui se passe autour de vous."
      },
      {
        question: "Est-ce que je peux rester bloqué en hypnose ?",
        answer: "Non, il est impossible de rester bloqué en état d'hypnose. Si une séance était interrompue pour une raison quelconque, vous reviendriez naturellement à votre état de conscience ordinaire, comme lorsque vous sortez d'une rêverie ou d'un état de concentration intense. L'hypnose est un état naturel que nous traversons plusieurs fois par jour, comme juste avant de s'endormir ou au réveil."
      },
      {
        question: "Quels problèmes peut-on traiter avec l'hypnose ?",
        answer: "L'hypnose est efficace pour de nombreuses problématiques : gestion du stress et de l'anxiété, amélioration du sommeil, confiance en soi, arrêt du tabac, perte de poids, gestion des phobies et peurs, préparation aux examens, gestion de la douleur, accompagnement du changement, préparation à l'accouchement, troubles digestifs fonctionnels, et bien d'autres. Si vous avez une question spécifique sur votre situation, n'hésitez pas à me contacter."
      },
      {
        question: "Combien de séances sont nécessaires pour voir des résultats ?",
        answer: "Le nombre de séances varie selon les problématiques. Pour l'arrêt du tabac, une seule séance peut suffire. Pour la perte de poids avec l'anneau gastrique virtuel, un protocole de 3 séances est recommandé. Pour les troubles anxieux ou les phobies, généralement 1 à 3 séances sont nécessaires. Les résultats sont souvent perceptibles dès la première séance, mais certaines problématiques plus complexes peuvent nécessiter un suivi plus long."
      }
    ],
    tabac: [
      {
        question: "L'hypnose est-elle efficace pour arrêter de fumer ?",
        answer: "Oui, l'hypnose est particulièrement efficace pour l'arrêt du tabac, avec un taux de réussite très élevé. La méthode que j'utilise agit sur les aspects psychologiques et comportementaux de la dépendance, ce qui permet de se libérer du tabac sans substituts nicotiniques et avec un minimum de symptômes de sevrage. Une séance spécifique est généralement suffisante pour arrêter de fumer définitivement."
      },
      {
        question: "Comment fonctionne l'arrêt du tabac par hypnose ?",
        answer: "L'arrêt du tabac par hypnose fonctionne en reprogrammant votre inconscient pour modifier votre relation avec la cigarette. Pendant la séance, nous travaillons à désactiver les automatismes liés au tabac, renforcer votre motivation, et installer de nouvelles ressources pour gérer les situations qui déclenchaient l'envie de fumer. L'hypnose permet également de réduire considérablement les symptômes de manque, facilitant ainsi la transition vers une vie sans tabac."
      },
      {
        question: "En combien de temps peut-on arrêter de fumer avec l'hypnose ?",
        answer: "Avec la méthode que j'utilise, vous arrêtez de fumer dès la fin de la première séance qui dure environ 1h30. Il s'agit d'un arrêt immédiat et non progressif. La majorité des personnes n'ont besoin que d'une seule séance pour arrêter définitivement. Une séance de renforcement peut parfois être proposée dans les semaines suivantes pour consolider les résultats, mais elle est rarement nécessaire."
      },
      {
        question: "Vais-je prendre du poids après avoir arrêté de fumer grâce à l'hypnose ?",
        answer: "Non, avec l'hypnose, la prise de poids souvent associée à l'arrêt du tabac est spécifiquement traitée pendant la séance. Nous travaillons à empêcher le transfert d'addiction vers la nourriture et à maintenir un métabolisme sain. Des suggestions spécifiques sont faites pour éviter le grignotage compensatoire, rendant l'arrêt du tabac par hypnose particulièrement avantageux par rapport à d'autres méthodes."
      },
      {
        question: "Dois-je me préparer avant une séance d'arrêt du tabac ?",
        answer: "Il est recommandé d'être motivé à arrêter de fumer, même si vous avez des craintes ou des doutes. Venez avec vos cigarettes à la séance, car vous arrêterez à la fin de celle-ci. Il est préférable de ne pas réduire votre consommation avant la séance pour maintenir vos habitudes habituelles. Prévoyez de ne pas conduire immédiatement après la séance et d'avoir un peu de temps pour vous."
      }
    ],
    poids: [
      {
        question: "Qu'est-ce que l'anneau gastrique virtuel par hypnose ?",
        answer: "L'anneau gastrique virtuel par hypnose est une technique qui reproduit, au niveau de l'inconscient, les effets d'un anneau gastrique chirurgical, mais sans aucune intervention médicale. Cette méthode permet de reprogrammer votre relation avec la nourriture, de créer une sensation naturelle de satiété plus rapide et de réduire le volume de l'estomac. C'est une approche 100% naturelle et non invasive pour la perte de poids."
      },
      {
        question: "Comment se déroule le programme d'anneau gastrique virtuel ?",
        answer: "Le programme se déroule en 3 séances : 1) La préparation et l'évaluation, où nous analysons vos habitudes alimentaires et travaillons sur vos motivations, 2) L'installation de l'anneau virtuel, qui est la séance principale d'hypnose profonde créant la sensation d'un estomac réduit, et 3) Le suivi et l'ajustement, qui permet de renforcer les résultats et d'adapter l'approche. Les séances sont espacées d'environ 2 à 3 semaines."
      },
      {
        question: "Quels résultats peut-on attendre de l'anneau gastrique virtuel ?",
        answer: "Les résultats varient selon les personnes, mais la plupart des clients observent une perte de poids régulière et progressive, généralement entre 2 et 4 kg par mois. Cette perte de poids est durable car elle s'accompagne d'un changement profond dans la relation à la nourriture et de nouvelles habitudes alimentaires. L'objectif n'est pas une perte de poids rapide mais une transformation durable du comportement alimentaire."
      },
      {
        question: "L'hypnose peut-elle m'aider si j'ai des compulsions alimentaires ?",
        answer: "Absolument, l'hypnose est particulièrement efficace pour les compulsions alimentaires car elle permet d'accéder aux racines émotionnelles et inconscientes de ces comportements. En séance, nous travaillons à identifier les déclencheurs émotionnels de vos compulsions et à installer de nouvelles réponses plus adaptées. L'hypnose permet également de renforcer votre sentiment de contrôle et d'améliorer votre relation à la nourriture."
      },
      {
        question: "Dois-je suivre un régime particulier avec l'anneau gastrique virtuel ?",
        answer: "Non, il n'y a pas de régime strict à suivre. L'objectif est de vous reconnecter à vos sensations naturelles de faim et de satiété, et de développer une relation saine avec la nourriture. Des conseils d'alimentation équilibrée vous seront proposés, mais il ne s'agit pas d'un régime restrictif. Vous apprendrez à manger en pleine conscience, à apprécier de plus petites portions et à choisir des aliments qui vous font du bien."
      }
    ],
    tarifs: [
      {
        question: "Combien coûte une séance d'hypnose ?",
        answer: "Le prix d'une séance standard est de 70€. Des forfaits spécifiques existent pour l'arrêt du tabac (90€ pour une séance) et pour l'anneau gastrique virtuel (210€ pour le programme complet de 3 séances). Ces tarifs comprennent l'ensemble de la prise en charge, y compris l'entretien préalable et les outils d'auto-hypnose fournis. Pour plus de détails, consultez la page Tarifs."
      },
      {
        question: "Les séances d'hypnose sont-elles remboursées par la Sécurité Sociale ?",
        answer: "Non, les séances d'hypnose ne sont pas remboursées par la Sécurité Sociale actuellement. Cependant, certaines mutuelles proposent une prise en charge partielle dans le cadre de médecines douces ou de thérapies alternatives. Je vous invite à vous renseigner auprès de votre complémentaire santé. Une facture peut vous être délivrée sur demande."
      },
      {
        question: "Comment se déroule la prise de rendez-vous ?",
        answer: "Vous pouvez prendre rendez-vous par téléphone au 06 49 29 20 77 ou via le formulaire de contact sur ce site. Je vous répondrai dans les meilleurs délais pour convenir d'un créneau qui vous convient. Les consultations se font uniquement sur rendez-vous, du lundi au vendredi de 9h à 19h et le samedi sur demande spécifique."
      },
      {
        question: "Quelle est la durée d'une séance d'hypnose ?",
        answer: "Une séance d'hypnose dure généralement entre 1h et 1h30, selon la problématique traitée. La première séance inclut un temps d'entretien préalable plus important pour bien comprendre votre demande et vos objectifs. Pour l'arrêt du tabac, prévoyez environ 1h30. Pour l'anneau gastrique virtuel, chaque séance dure environ 1h15."
      },
      {
        question: "Puis-je annuler ou reporter mon rendez-vous ?",
        answer: "Oui, vous pouvez annuler ou reporter votre rendez-vous en me prévenant au moins 24h à l'avance par téléphone ou email. En cas d'annulation tardive (moins de 24h) ou d'absence sans prévenir, la séance pourra être facturée. Je comprends que des imprévus peuvent survenir, n'hésitez pas à me contacter dès que possible."
      }
    ]
  };

  // Sélectionner les faqs pour la catégorie active
  const activeFaqs = faqsByCategory[activeCategory as keyof typeof faqsByCategory];
  
  // Créer un tableau avec toutes les questions pour le schema JSON-LD
  const allFaqs = [
    ...faqsByCategory.general,
    ...faqsByCategory.seance,
    ...faqsByCategory.tabac,
    ...faqsByCategory.poids,
    ...faqsByCategory.tarifs
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
                "mainEntity": allFaqs.map(faq => ({
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
                Questions Fréquentes sur l&apos;Hypnose
              </h1>
              <p className="text-xl opacity-90 font-light">
                Toutes les réponses à vos questions sur l&apos;hypnothérapie, l&apos;arrêt du tabac, la perte de poids, et bien plus
              </p>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-800 text-center mb-8">
                Découvrez les réponses aux questions les plus fréquentes sur l&apos;hypnose thérapeutique, son fonctionnement et ses applications
              </p>
              
              {/* Navigation par catégories */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenFaqIndex(null);
                    }}
                    className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                      activeCategory === category.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-teal-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {activeFaqs.map((faq, index) => (
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
            
            {/* Liens vers les pages détaillées */}
            <div className="max-w-3xl mx-auto mt-12 mb-12">
              <h3 className="text-2xl font-serif text-teal-700 mb-6 text-center">
                En savoir plus sur nos services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/seance-hypnose"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Séance d&apos;Hypnose
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Découvrez le déroulement d&apos;une séance personnalisée
                  </p>
                  <span className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
                    En savoir plus &rarr;
                  </span>
                </Link>
                
                <Link 
                  href="/arret-tabac"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Arrêt du Tabac
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Libérez-vous définitivement de la cigarette
                  </p>
                  <span className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
                    En savoir plus &rarr;
                  </span>
                </Link>
                
                <Link 
                  href="/anneau-gastrique"
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Anneau Gastrique Virtuel
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Retrouvez votre poids idéal sans chirurgie
                  </p>
                  <span className="text-teal-600 hover:text-teal-700 transition-colors duration-300">
                    En savoir plus &rarr;
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Vous avez d&apos;autres questions ?
              </h3>
              <p className="text-gray-700 mb-6">
                N&apos;hésitez pas à me contacter directement pour obtenir des réponses personnalisées à vos interrogations.
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