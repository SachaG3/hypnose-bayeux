import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Anneau Gastrique Virtuel par Hypnose | Cabinet d\'Hypnose Bayeux',
  description: 'Perdez du poids naturellement avec l\'anneau gastrique virtuel par hypnose à Bayeux. Solution efficace et non chirurgicale pour une perte de poids durable.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/anneau-gastrique',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Anneau Gastrique Virtuel par Hypnose à Bayeux',
    description: 'Perdez du poids naturellement avec l\'anneau gastrique virtuel par hypnose à Bayeux. Solution efficace et non chirurgicale pour une perte de poids durable.',
    url: 'https://www.bayeuxhypnose.fr/anneau-gastrique',
  },
};

export default function AnneauGastriquePage() {
  return (
    <>
      <Script id="schema-anneau-gastrique" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Anneau Gastrique Virtuel par Hypnose - Bayeux",
        "description": "Programme de perte de poids par anneau gastrique virtuel à Bayeux. Alternative non chirurgicale pour des résultats durables.",
        "url": "https://www.bayeuxhypnose.fr/anneau-gastrique",
        "provider": {
          "@type": "Person",
          "name": "Nadège GUIGNARD"
        }
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Anneau Gastrique Virtuel par Hypnose
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Retrouvez votre poids idéal grâce à une solution efficace, naturelle et sans chirurgie
            </p>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif text-teal-700 mb-8">Qu&apos;est-ce que l&apos;anneau gastrique virtuel ?</h2>
              
              <p className="text-gray-700 mb-6">
                L&apos;anneau gastrique virtuel est une technique innovante d&apos;hypnose qui reproduit les effets bénéfiques d&apos;un anneau gastrique chirurgical, 
                mais sans aucune intervention médicale. Cette méthode agit directement sur votre inconscient pour reprogrammer votre relation avec la nourriture et votre sensation de satiété.
              </p>

              <p className="text-gray-700 mb-6">
                Contrairement à la chirurgie bariatrique, cette approche est totalement non invasive et travaille sur les aspects psychologiques et émotionnels de votre comportement alimentaire. 
                L&apos;hypnose permet de créer une sensation virtuelle de restriction gastrique, vous aidant ainsi à manger moins tout en vous sentant pleinement satisfait.
              </p>

              <div className="bg-teal-50 p-6 rounded-xl my-8 border border-teal-100">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Les principes de l&apos;anneau gastrique virtuel</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Modification de la perception de la faim et de la satiété</li>
                  <li>Reprogrammation des habitudes alimentaires inconscientes</li>
                  <li>Création d&apos;une sensation d&apos;estomac réduit</li>
                  <li>Développement d&apos;une relation saine avec la nourriture</li>
                  <li>Renforcement de la motivation et de l&apos;autodiscipline</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Déroulement du programme complet</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-700 font-bold">1</div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Évaluation personnalisée</h4>
                  <p className="text-gray-700">
                    Analyse de votre profil alimentaire, de vos déclencheurs émotionnels et de vos objectifs spécifiques. Nous créons ensemble une stratégie adaptée à vos besoins.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-700 font-bold">2</div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Installation de l&apos;anneau</h4>
                  <p className="text-gray-700">
                    Séance d&apos;hypnose profonde où votre inconscient intègre la sensation d&apos;un anneau gastrique, réduisant naturellement la taille de votre estomac et vos portions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-700 font-bold">3</div>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Suivi et renforcement</h4>
                  <p className="text-gray-700">
                    Ajustement et optimisation des résultats. Nous ancrons les nouveaux comportements alimentaires et développons des stratégies de maintien à long terme.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Les avantages de l&apos;anneau gastrique virtuel</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">100% non invasif</h4>
                  <p className="text-gray-700">Aucune chirurgie, aucune hospitalisation, aucune anesthésie, aucune cicatrice</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Zéro risque médical</h4>
                  <p className="text-gray-700">Sans complications post-opératoires ni effets secondaires indésirables</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Approche globale</h4>
                  <p className="text-gray-700">Traite les causes émotionnelles et psychologiques de la suralimentation</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Résultats durables</h4>
                  <p className="text-gray-700">Changements profonds des habitudes alimentaires pour une perte de poids pérenne</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prêt à transformer votre relation avec la nourriture ?
                </h3>
                <p className="text-gray-700 mb-6">
                  Commencez votre parcours vers un poids idéal et une alimentation équilibrée. Contactez-moi pour un rendez-vous personnalisé.
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
        </div>
      </section>
    </>
  );
} 