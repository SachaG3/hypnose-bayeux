import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { baseMetadata } from '../metadata';
import { professionalProfiles, siteConfig } from '@/lib/seo';

const pageTitle = 'Nadège Guignard, hypnothérapeute près de Bayeux';
const pageDescription = 'Découvrez Nadège Guignard, son approche personnalisée de l’hypnose et son cabinet situé à Maisons, à 10 minutes de Bayeux.';

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: 'https://www.hypnose-bayeux.fr/a-propos',
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: pageTitle,
    description: pageDescription,
    url: 'https://www.hypnose-bayeux.fr/a-propos',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/a-propos#nadege-guignard`,
  name: siteConfig.practitioner,
  jobTitle: 'Hypnothérapeute',
  url: `${siteConfig.url}/a-propos`,
  image: `${siteConfig.url}/nadegeGuignard.webp`,
  sameAs: professionalProfiles.map((profile) => profile.url),
  worksFor: { '@id': `${siteConfig.url}/#business` },
  workLocation: {
    '@type': 'Place',
    name: 'Cabinet d’hypnose près de Bayeux',
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <Breadcrumbs items={[{ name: 'À propos' }]} />

      <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Nadège Guignard, hypnothérapeute près de Bayeux
            </h1>
            <p className="text-xl font-light leading-relaxed opacity-90">
              Une approche personnalisée dans un cabinet calme situé à Maisons, à 10 minutes de Bayeux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[320px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-72 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/nadegeGuignard.webp"
                alt="Portrait de Nadège Guignard, hypnothérapeute près de Bayeux"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="mb-5 text-lg leading-relaxed text-gray-700">
                Je reçois au cabinet les personnes qui souhaitent avancer sur un objectif personnel avec l’hypnose.
                Chaque rendez-vous commence par un échange permettant de préciser la demande, le contexte et les attentes.
              </p>
              <p className="mb-5 text-lg leading-relaxed text-gray-700">
                La séance est ensuite adaptée à la personne et à son rythme. Vous restez consciente ou conscient,
                libre d’échanger et d’interrompre l’exercice à tout moment.
              </p>
              <p className="mb-5 text-lg leading-relaxed text-gray-700">
                Le mot « hypnotiseur » est parfois employé pour rechercher ce type d’accompagnement à Bayeux ;
                je présente ici mon activité sous le terme d’hypnothérapeute et j’explique concrètement le déroulement des séances.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                L’hypnose proposée au cabinet s’inscrit dans une démarche d’accompagnement et ne remplace pas un diagnostic,
                un traitement ou un suivi par un professionnel de santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center font-serif text-3xl font-medium text-teal-700">
              Les accompagnements proposés au cabinet
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/seance-hypnose" className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Séance d’hypnose</h3>
                <p className="mb-4 text-gray-600">Déroulement, durée, sujets abordés et réponses aux questions courantes.</p>
                <span className="inline-flex items-center font-medium text-teal-700">Découvrir <ArrowRight className="ml-2 h-4 w-4" /></span>
              </Link>
              <Link href="/arret-tabac" className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Arrêt du tabac</h3>
                <p className="mb-4 text-gray-600">Un accompagnement centré sur votre rapport au tabac et vos motivations.</p>
                <span className="inline-flex items-center font-medium text-teal-700">Découvrir <ArrowRight className="ml-2 h-4 w-4" /></span>
              </Link>
              <Link href="/anneau-gastrique" className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Gestion du poids</h3>
                <p className="mb-4 text-gray-600">Le programme en trois séances présenté par le cabinet.</p>
                <span className="inline-flex items-center font-medium text-teal-700">Découvrir <ArrowRight className="ml-2 h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="profils-professionnels">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <h2 id="profils-professionnels" className="mb-4 text-center font-serif text-3xl font-medium text-teal-700">
              Profils professionnels de Nadège Guignard
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
              Retrouvez le cabinet sur les principaux annuaires et services professionnels qui le référencent.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {professionalProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-teal-200 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  aria-label={`Consulter la fiche ${profile.label} de Nadège Guignard`}
                >
                  <span>
                    <strong className="block text-lg text-gray-900">{profile.label}</strong>
                    <span className="mt-1 block text-sm text-gray-600">{profile.description}</span>
                  </span>
                  <ExternalLink className="ml-4 h-5 w-5 shrink-0 text-teal-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-xl border border-teal-100 bg-teal-50 p-8 text-center">
            <h2 className="mb-5 font-serif text-3xl font-medium text-teal-700">Le cabinet près de Bayeux</h2>
            <p className="mb-6 text-gray-700">
              <MapPin className="mr-2 inline h-5 w-5 text-teal-700" aria-hidden="true" />
              La Fosse Buhot, 14400 Maisons. Consultations uniquement sur rendez-vous.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0649292077" className="inline-flex items-center rounded-md bg-teal-700 px-6 py-3 font-medium text-white hover:bg-teal-800">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                {siteConfig.telephoneDisplay}
              </a>
              <Link href="/contact" className="rounded-md border border-teal-700 px-6 py-3 font-medium text-teal-700 hover:bg-white">
                Prendre rendez-vous
              </Link>
              <Link href="/acces" className="rounded-md border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-white">
                Voir l’itinéraire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
