'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings } from 'lucide-react';

// Déclaration de type pour window.gtag
declare global {
  interface Window {
    gtag: any;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsButton, setShowSettingsButton] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait un choix concernant les cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
      setShowSettingsButton(false);
    } else {
      setShowBanner(false);
      setShowSettingsButton(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    
    // On active Google Analytics si c'est accepté
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    setShowBanner(false);
    setShowSettingsButton(true);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    
    // On désactive Google Analytics si c'est refusé
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    setShowBanner(false);
    setShowSettingsButton(true);
  };

  const openSettings = () => {
    setShowBanner(true);
    setShowSettingsButton(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-teal-100 shadow-md z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-700 md:pr-6 text-center md:text-left">
                <p className="mb-2">
                  Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. 
                  Pour en savoir plus, consultez notre{' '}
                  <Link href="/confidentialite" className="text-teal-600 hover:text-teal-800 underline">
                    politique de confidentialité
                  </Link>.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={refuseCookies}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                  aria-label="Refuser les cookies"
                >
                  Refuser
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
                  aria-label="Accepter les cookies"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettingsButton && (
        <button
          onClick={openSettings}
          className="fixed bottom-4 right-4 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition-colors z-40"
          aria-label="Paramètres des cookies"
          title="Paramètres des cookies"
        >
          <Settings className="w-5 h-5" />
        </button>
      )}
    </>
  );
} 