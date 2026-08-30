'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import {
  COOKIE_CONSENT_EVENT,
  type CookieConsent,
  useCookieConsent,
} from './TrackingScripts';

export default function CookieBanner() {
  const consent = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const showBanner = consent === null || settingsOpen;

  const saveConsent = (choice: Exclude<CookieConsent, null>) => {
    localStorage.setItem('cookie-consent', choice);
    window.dispatchEvent(new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, { detail: choice }));
    setSettingsOpen(false);
  };

  return (
    <>
      {showBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 max-h-[70vh] overflow-y-auto border-t border-teal-100 bg-white shadow-lg"
          role="dialog"
          aria-label="Préférences de confidentialité"
        >
          <div className="container mx-auto px-5 py-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm leading-relaxed text-gray-700 md:pr-6 md:text-left md:text-base">
                Vercel Analytics et Speed Insights réalisent des mesures anonymisées, sans cookie publicitaire.
                Avec votre accord, Google Ads mesure aussi l&apos;efficacité des campagnes. Vous pouvez refuser
                Google Ads sans perdre l&apos;accès au site.{' '}
                <Link href="/confidentialite" className="text-teal-700 underline hover:text-teal-900">
                  En savoir plus
                </Link>.
              </p>
              <div className="flex w-full gap-3 md:w-auto md:shrink-0">
                <button
                  type="button"
                  onClick={() => saveConsent('refused')}
                  className="flex-1 rounded-md bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-800 md:flex-none"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent('accepted')}
                  className="flex-1 rounded-md bg-teal-700 px-4 py-2 text-white transition-colors hover:bg-teal-800 md:flex-none"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {consent !== null && !settingsOpen && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 right-4 z-40 rounded-full bg-gray-700 p-2 text-white shadow-md transition-colors hover:bg-gray-800"
          aria-label="Modifier les préférences de confidentialité"
          title="Préférences de confidentialité"
        >
          <Settings className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
