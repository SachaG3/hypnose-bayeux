import { Metadata } from 'next';
import { baseMetadata } from '../metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'FAQ Hypnothérapie | Questions Fréquentes sur l\'Hypnose à Bayeux',
  description: 'Découvrez les réponses à vos questions sur l\'hypnothérapie à Bayeux. Informations expertes sur l\'hypnose, son fonctionnement, ses bienfaits et applications thérapeutiques.',
  alternates: {
    canonical: 'https://www.bayeuxhypnose.fr/faq',
  },
}; 