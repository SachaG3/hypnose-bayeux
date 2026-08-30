'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.4321781733267!2d-0.7608520555725226!3d49.316852399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480babc40422e79f%3A0x54e470b69a61bc16!2sGuignard%20nadege!5e0!3m2!1sfr!2sfr!4v1742073744999!5m2!1sfr!2sfr';

export default function MapEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte du cabinet d'hypnothérapie à Maisons"
        className="rounded-xl"
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <MapPin className="mb-4 h-10 w-10 text-teal-700" aria-hidden="true" />
      <p className="mb-2 text-lg font-semibold text-gray-800">La Fosse Buhot, 14400 Maisons</p>
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600">
        La carte Google Maps n&apos;est chargée qu&apos;à votre demande. Son affichage peut transmettre des données de connexion à Google.
      </p>
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className="rounded-md bg-teal-700 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        Afficher la carte Google Maps
      </button>
    </div>
  );
}
