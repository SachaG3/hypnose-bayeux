import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Arrêt du Tabac par Hypnose | Cabinet d\'Hypnose Bayeux',
  description: 'Arrêtez de fumer naturellement avec l\'hypnose à Bayeux. Programme efficace d\'arrêt du tabac en une seule séance. Plus de 90% de réussite.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/arret-tabac',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Arrêt du Tabac par Hypnose à Bayeux',
    description: 'Arrêtez de fumer naturellement avec l\'hypnose à Bayeux. Programme efficace d\'arrêt du tabac en une seule séance. Plus de 90% de réussite.',
    url: 'https://www.bayeuxhypnose.fr/arret-tabac',
  },
};

export default function ArretTabacPage() {
  return (
    <>
      <Script id="schema-arret-tabac" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Arrêt du Tabac par Hypnose - Bayeux",
        "description": "Programme d'arrêt du tabac par hypnose à Bayeux en une seule séance. Plus de 90% de réussite.",
        "url": "https://www.bayeuxhypnose.fr/arret-tabac",
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
              Arrêt du Tabac par Hypnose
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Libérez-vous du tabac définitivement en une seule séance grâce à l&apos;hypnose
            </p>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif text-teal-700 mb-8">Comment fonctionne l&apos;arrêt du tabac par hypnose ?</h2>
              
              <p className="text-gray-700 mb-6">
                L&apos;arrêt du tabac par hypnose est une méthode naturelle et efficace qui agit directement sur votre inconscient pour modifier votre relation avec la cigarette. 
                Cette approche permet de vous libérer du tabac en une seule séance intensive d&apos;environ 1h30.
              </p>

              <p className="text-gray-700 mb-6">
                La méthode que j&apos;utilise cible à la fois la dépendance psychologique et comportementale au tabac. Elle permet de désactiver les automatismes liés à la cigarette et de reprogrammer votre inconscient pour qu&apos;il considère le tabac comme un élément étranger et non désirable.
              </p>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Déroulement de la séance</h3>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-xl font-medium text-gray-800 mb-3">Une séance complète et efficace</h4>
                <p className="text-gray-700 mb-4">
                  La séance d&apos;arrêt du tabac se décompose en plusieurs temps forts :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Entretien initial</strong> : nous identifions votre profil de fumeur, vos déclencheurs et motivations</li>
                  <li><strong>Travail en hypnose</strong> : modification profonde de votre rapport à la cigarette</li>
                  <li><strong>Ancrage des nouvelles ressources</strong> : installation de nouveaux comportements sains</li>
                  <li><strong>Remise d&apos;outils</strong> : techniques d&apos;auto-hypnose pour maintenir les résultats</li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Les avantages de l&apos;hypnose pour arrêter de fumer</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Efficacité immédiate</h4>
                  <p className="text-gray-700">Résultats dès la première et unique séance, sans période d&apos;adaptation progressive</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Réduction des symptômes de manque</h4>
                  <p className="text-gray-700">Minimise considérablement les sensations de manque et l&apos;irritabilité</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Contrôle du poids</h4>
                  <p className="text-gray-700">Évite la compensation alimentaire souvent associée à l&apos;arrêt du tabac</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Méthode 100% naturelle</h4>
                  <p className="text-gray-700">Sans médicaments, sans substituts nicotiniques, sans effets secondaires</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prêt à vous libérer définitivement du tabac ?
                </h3>
                <p className="text-gray-700 mb-6">
                  Une seule séance peut changer votre vie ! Contactez-moi pour prendre rendez-vous.
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