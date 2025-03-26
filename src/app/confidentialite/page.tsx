import { Metadata } from 'next';
import { baseMetadata } from '../metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Politique de Confidentialité | Cabinet d\'Hypnose Bayeux',
  description: 'Politique de confidentialité et protection des données personnelles du cabinet d\'hypnose à Bayeux.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/confidentialite',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Politique de Confidentialité | Cabinet d\'Hypnose Bayeux',
    description: 'Politique de confidentialité et protection des données personnelles du cabinet d\'hypnose à Bayeux.',
    url: 'https://www.bayeuxhypnose.fr/confidentialite',
  },
};

export default function ConfidentialitePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Protection de vos données personnelles
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif text-teal-700 mb-8">Introduction</h2>
              
              <p className="text-gray-700 mb-6">
                Nadège GUIGNARD, exploitant le site hypnose-bayeux.fr, accorde une importance particulière à la protection 
                de vos données personnelles. Cette politique de confidentialité vous informe sur la façon dont vos données sont 
                collectées, utilisées et protégées conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Données collectées</h2>
              
              <p className="text-gray-700 mb-4">
                Dans le cadre de mon activité d&apos;hypnothérapeute, je peux collecter les données suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Données d&apos;identification : nom, prénom, adresse email, numéro de téléphone</li>
                <li>Données de santé : informations médicales pertinentes pour la thérapie</li>
                <li>Données de connexion : adresse IP, cookies techniques</li>
              </ul>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Finalités du traitement</h2>
              
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Gestion des rendez-vous et du suivi thérapeutique</li>
                <li>Communication relative à votre accompagnement</li>
                <li>Gestion administrative (facturation, comptabilité)</li>
                <li>Amélioration de mes services et du site web</li>
              </ul>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Base légale</h2>
              
              <p className="text-gray-700 mb-6">
                Le traitement de vos données personnelles est fondé sur :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Votre consentement explicite</li>
                <li>L&apos;exécution du contrat de prestation de services d&apos;hypnothérapie</li>
                <li>Le respect des obligations légales (notamment comptables et fiscales)</li>
                <li>Mon intérêt légitime en tant que thérapeute</li>
              </ul>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Conservation des données</h2>
              
              <p className="text-gray-700 mb-6">
                Vos données sont conservées pour la durée strictement nécessaire à la réalisation des finalités pour 
                lesquelles elles ont été collectées, et notamment :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Données de santé et dossiers thérapeutiques : 5 ans à compter de la dernière séance</li>
                <li>Données de facturation : 10 ans (obligation légale)</li>
                <li>Données de contact pour communication : 3 ans à compter du dernier contact</li>
              </ul>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Destinataires des données</h2>
              
              <p className="text-gray-700 mb-6">
                Je m&apos;engage à ne pas vendre, louer ou céder vos données personnelles à des tiers. 
                Vos données peuvent être transmises uniquement aux destinataires suivants :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Prestataires techniques (hébergement du site, maintenance)</li>
                <li>Organismes publics (uniquement sur demande et dans le cadre d&apos;obligations légales)</li>
              </ul>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Formulaire de contact</h2>
              
              <p className="text-gray-700 mb-4">
                Lorsque vous utilisez le formulaire de contact sur notre site, nous collectons les données suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Nom complet</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Contenu de votre message</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                Ces informations sont nécessaires pour répondre à votre demande et sont traitées sur la base de votre 
                consentement explicite, que vous accordez en cochant la case prévue à cet effet dans le formulaire.
                Elles sont conservées pour une durée maximale de 3 ans à compter de notre dernier contact.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Sécurité des données</h2>
              
              <p className="text-gray-700 mb-6">
                Je mets en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité 
                de vos données personnelles, notamment contre leur perte, leur altération et leur divulgation non autorisée.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Vos droits</h2>
              
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Droit d&apos;accès et de rectification</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                Pour exercer ces droits, vous pouvez m&apos;adresser votre demande par email à <a href="mailto:contact@hypnose-bayeux.fr" className="text-teal-600 hover:text-teal-800">contact@hypnose-bayeux.fr</a> ou 
                par courrier à l&apos;adresse du cabinet.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Cookies</h2>
              
              <p className="text-gray-700 mb-6">
                Le site hypnose-bayeux.fr utilise des cookies techniques strictement nécessaires au fonctionnement du site. 
                Aucun cookie publicitaire ou de traçage n&apos;est utilisé. Vous pouvez paramétrer votre navigateur pour 
                refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Modification de la politique de confidentialité</h2>
              
              <p className="text-gray-700 mb-6">
                Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications 
                prendront effet dès leur publication sur le site. Je vous invite à consulter régulièrement cette page.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Contact</h2>
              
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, vous pouvez me contacter :
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Par email : <a href="mailto:contact@hypnose-bayeux.fr" className="text-teal-600 hover:text-teal-800">contact@hypnose-bayeux.fr</a></li>
                <li>Par téléphone : <a href="tel:0649292077" className="text-teal-600 hover:text-teal-800">06 49 29 20 77</a></li>
                <li>Par courrier : Cabinet d&apos;Hypnothérapie, LA FOSSE BUHOT, 14400 MAISONS</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                Si vous estimez, après m&apos;avoir contactée, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation 
                à la CNIL (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
              
              <p className="text-gray-700 italic mt-12">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 