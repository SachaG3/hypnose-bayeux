'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export type CookieConsent = 'accepted' | 'refused' | null;
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed';

function storedConsent(): CookieConsent {
  const value = localStorage.getItem('cookie-consent');
  if (value === 'accepted' || value === 'true') return 'accepted';
  if (value === 'refused' || value === 'false') return 'refused';
  return null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export function useCookieConsent() {
  return useSyncExternalStore(subscribeToConsent, storedConsent, () => null);
}

export function redactVercelUrl(event: BeforeSendEvent): BeforeSendEvent {
  const url = new URL(event.url);
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

function VercelInsights() {
  return (
    <>
      <Analytics beforeSend={redactVercelUrl} />
      <SpeedInsights />
    </>
  );
}

export default function TrackingScripts() {
  const consent = useCookieConsent();

  return (
    <>
      <VercelInsights />
      {consent === 'accepted' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-16943869327"
            strategy="afterInteractive"
          />
          <Script id="google-consented-tracking" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted'
              });
              gtag('config', 'AW-16943869327');
            `}
          </Script>
        </>
      )}
    </>
  );
}
