import { Metadata } from 'next';
import { baseMetadata } from '../metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Mentions Légales | Cabinet d\'Hypnose Bayeux',
  description: 'Mentions légales du cabinet d\'hypnose à Bayeux. Informations sur l\'éditeur et l\'hébergeur du site.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/mentions-legales',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Mentions Légales | Cabinet d\'Hypnose Bayeux',
    description: 'Mentions légales du cabinet d\'hypnose à Bayeux. Informations sur l\'éditeur et l\'hébergeur du site.',
    url: 'https://www.bayeuxhypnose.fr/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Mentions Légales
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 font-light">
              Informations légales concernant ce site web
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif text-teal-700 mb-8">Éditeur du site</h2>
              
              <p className="text-gray-700 mb-6">
                Le site bayeuxhypnose.fr est édité par :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 mb-2">
                  <strong>Nadège GUIGNARD</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Entreprise individuelle
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> LA FOSSE BUHOT, 14400 MAISONS
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Téléphone :</strong> <a href="tel:0649292077" className="text-teal-600 hover:text-teal-800">06 49 29 20 77</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email :</strong> <a href="mailto:contact@bayeuxhypnose.fr" className="text-teal-600 hover:text-teal-800">contact@bayeuxhypnose.fr</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>SIRET :</strong> 39784234500043
                </p>
              </div>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Hébergeur du site</h2>
              
              <p className="text-gray-700 mb-6">
                Le site bayeuxhypnose.fr est hébergé par :
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 mb-2">
                  <strong>Vercel Inc.</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  440 N Barranca Ave #4133
                </p>
                <p className="text-gray-700 mb-2">
                  Covina, CA 91723
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Site Internet :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">vercel.com</a>
                </p>
              </div>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Propriété intellectuelle</h2>
              
              <p className="text-gray-700 mb-6">
                L&apos;ensemble du contenu du site bayeuxhypnose.fr (textes, images, vidéos, logos, etc.) est protégé par 
                le droit d&apos;auteur. Toute reproduction, représentation, modification, publication, transmission, ou plus 
                généralement toute exploitation non autorisée du site ou de ses contenus, par quelque procédé que ce soit, 
                est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Responsabilité</h2>
              
              <p className="text-gray-700 mb-6">
                L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le site, 
                dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, l&apos;éditeur ne 
                peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              
              <p className="text-gray-700 mb-6">
                En conséquence, l&apos;utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. 
                L&apos;éditeur ne saurait être tenu pour responsable des dommages directs ou indirects résultant de l&apos;accès 
                à ce site ou de l&apos;utilisation de son contenu.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Liens hypertextes</h2>
              
              <p className="text-gray-700 mb-6">
                Le site bayeuxhypnose.fr peut contenir des liens hypertextes vers d&apos;autres sites internet ou d&apos;autres 
                ressources disponibles sur internet. L&apos;éditeur ne dispose d&apos;aucun moyen pour contrôler les sites en 
                connexion avec son site. L&apos;éditeur ne répond pas de la disponibilité de tels sites et sources externes, 
                ni ne la garantit. Il ne peut être tenu pour responsable de tout dommage, de quelque nature que ce soit, 
                résultant du contenu de ces sites ou sources externes.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Données personnelles</h2>
              
              <p className="text-gray-700 mb-6">
                Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre 
                <a href="/confidentialite" className="text-teal-600 hover:text-teal-800 mx-1">Politique de Confidentialité</a>.
              </p>
              
              <h2 className="text-3xl font-serif text-teal-700 mt-12 mb-6">Droit applicable et juridiction compétente</h2>
              
              <p className="text-gray-700 mb-6">
                Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à l&apos;interprétation 
                ou à l&apos;exécution des présentes, les tribunaux français seront seuls compétents.
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