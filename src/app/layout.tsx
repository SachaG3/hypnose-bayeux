import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { baseMetadata } from "./metadata";
import { viewport } from "./metadata";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = baseMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16943869327" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configuration par défaut - attendre le consentement
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            // Vérifier si l'utilisateur a déjà donné son consentement
            const cookieConsent = localStorage.getItem('cookie-consent');
            if (cookieConsent === 'true') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }
            
            gtag('config', 'AW-16943869327');
          `}
        </Script>
        
        {/* Schema.org pour Local Business */}
        <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hypnose Bayeux",
          "image": "https://hypnose-bayeux.fr/og-image.jpg",
          "@id": "https://hypnose-bayeux.fr",
          "url": "https://hypnose-bayeux.fr",
          "telephone": "+33649292077",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "LA FOSSE BUHOT",
            "addressLocality": "MAISONS",
            "postalCode": "14400",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.2774,
            "longitude": -0.7335
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "19:00",
              "description": "Sur rendez-vous uniquement"
            }
          ],
          "description": "Cabinet d&apos;hypnothérapie à Maisons près de Bayeux. Séances d&apos;hypnose pour l&apos;arrêt du tabac, gestion du stress, perte de poids, confiance en soi et sommeil."
        })}}/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
