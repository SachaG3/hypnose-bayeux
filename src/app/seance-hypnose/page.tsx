import { Metadata } from 'next';
import { baseMetadata } from '../metadata';
import Script from 'next/script';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Séance d\'Hypnose Classique | Cabinet d\'Hypnose Bayeux',
  description: 'Découvrez la séance d\'hypnose thérapeutique à Bayeux. Approche sur-mesure pour gérer stress, phobies, sommeil, confiance en soi. Résultats durables dès la première séance.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/seance-hypnose',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Séance d\'Hypnose Thérapeutique à Bayeux',
    description: 'Découvrez la séance d\'hypnose thérapeutique à Bayeux. Approche sur-mesure pour gérer stress, phobies, sommeil, confiance en soi. Résultats durables dès la première séance.',
    url: 'https://www.bayeuxhypnose.fr/seance-hypnose',
  },
};

export default function SeanceHypnosePage() {
  return (
    <>
      <Script id="schema-seance-hypnose" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Séance d'Hypnose Thérapeutique - Bayeux",
        "description": "Séances d'hypnose thérapeutique personnalisées à Bayeux pour le bien-être, la gestion du stress et le développement personnel.",
        "url": "https://www.bayeuxhypnose.fr/seance-hypnose",
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
              Séance d&apos;Hypnose Thérapeutique
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Libérez votre potentiel et transformez votre vie grâce à l&apos;hypnose ericksonienne
            </p>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif text-teal-700 mb-8">L&apos;hypnose thérapeutique : une clé pour votre transformation</h2>
              
              <p className="text-gray-700 mb-6">
                L&apos;hypnose thérapeutique est un puissant levier de changement qui vous permet d&apos;accéder à vos ressources intérieures 
                et de lever les blocages qui vous empêchent d&apos;avancer. Cette approche douce et respectueuse s&apos;adapte parfaitement 
                à votre situation unique et travaille en profondeur au niveau de votre inconscient.
              </p>

              <p className="text-gray-700 mb-6">
                J&apos;utilise principalement l&apos;hypnose ericksonienne, une méthode conversationnelle et permissive qui respecte votre libre arbitre 
                et s&apos;appuie sur vos propres ressources. Pendant toute la séance, vous restez conscient et en contrôle, dans un état de concentration 
                focalisée favorable au changement.
              </p>

              <div className="bg-teal-50 p-6 rounded-xl my-8 border border-teal-100">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Les mythes sur l&apos;hypnose</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span><strong>Mythe</strong> : Vous perdez le contrôle pendant l&apos;hypnose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span><strong>Réalité</strong> : Vous restez toujours conscient et gardez le contrôle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span><strong>Mythe</strong> : L&apos;hypnose est un sommeil profond</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    <span><strong>Réalité</strong> : C&apos;est un état naturel de concentration focalisée que vous expérimentez quotidiennement</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Le déroulement d&apos;une séance personnalisée</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">1. Entretien initial</h4>
                  <p className="text-gray-700">
                    Je prends le temps d&apos;explorer votre demande, votre histoire et vos objectifs. Cet échange est essentiel pour construire 
                    une séance véritablement adaptée à vos besoins spécifiques et à votre façon d&apos;être.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">2. Induction personnalisée</h4>
                  <p className="text-gray-700">
                    Je vous guide vers un état de relaxation profonde et de concentration intérieure, en respectant votre rythme 
                    et vos préférences. Cette étape crée les conditions optimales pour accéder à votre inconscient.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">3. Transformation thérapeutique</h4>
                  <p className="text-gray-700">
                    En utilisant des métaphores, des suggestions indirectes et d&apos;autres techniques adaptées à votre situation, 
                    nous travaillons en profondeur sur vos blocages pour créer de nouveaux schémas positifs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-medium text-gray-800 mb-3">4. Intégration et autonomisation</h4>
                  <p className="text-gray-700">
                    La séance se termine par un retour progressif à l&apos;état d&apos;éveil, suivi d&apos;un temps d&apos;échange et de 
                    conseils pour ancrer les changements dans votre quotidien.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-teal-700 mt-12 mb-6">Des solutions pour de nombreux défis</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Gestion du stress et de l&apos;anxiété</h4>
                  <p className="text-gray-700">Retrouvez calme et sérénité face aux situations stressantes du quotidien</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Amélioration du sommeil</h4>
                  <p className="text-gray-700">Dites adieu aux insomnies et aux réveils nocturnes pour des nuits réparatrices</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Libération des phobies</h4>
                  <p className="text-gray-700">Surmontez vos peurs irrationnelles qui limitent votre quotidien</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Renforcement de la confiance</h4>
                  <p className="text-gray-700">Développez une solide confiance en vous pour réaliser votre plein potentiel</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Gestion des émotions</h4>
                  <p className="text-gray-700">Apprenez à réguler vos émotions et à trouver votre équilibre émotionnel</p>
                </div>
                
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Accompagnement du changement</h4>
                  <p className="text-gray-700">Traversez les périodes de transition avec plus de sérénité et d&apos;adaptabilité</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-100 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prêt à vivre votre transformation personnelle ?
                </h3>
                <p className="text-gray-700 mb-6">
                  Une séance d&apos;hypnose peut être le premier pas vers le changement que vous souhaitez. 
                  Contactez-moi pour un rendez-vous personnalisé.
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
              
              {/* Autres services */}
              <div className="mt-16">
                <h3 className="text-2xl font-serif text-center font-medium text-teal-700 mb-8">
                  Découvrez mes autres accompagnements
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Arrêt du tabac</h4>
                    <p className="text-gray-700 mb-4">Programme spécifique pour arrêter de fumer durablement en travaillant sur les mécanismes de la dépendance.</p>
                    <Link href="/arret-tabac" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block font-medium">
                      Découvrir le programme →
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Anneau gastrique virtuel</h4>
                    <p className="text-gray-700 mb-4">Accompagnement complet pour la perte de poids avec l'installation d'un anneau gastrique virtuel par hypnose.</p>
                    <Link href="/anneau-gastrique" className="text-teal-600 hover:text-teal-800 transition-colors duration-300 inline-block font-medium">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 