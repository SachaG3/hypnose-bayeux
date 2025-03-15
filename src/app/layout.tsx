import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { baseMetadata } from "./metadata";
import { viewport } from "./metadata";
import Script from "next/script";

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
            "streetAddress": "La Fosse Buhot",
            "addressLocality": "Maisons",
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
        </Providers>
      </body>
    </html>
  );
}
