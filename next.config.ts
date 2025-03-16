import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Certaines options expérimentales peuvent ne pas être reconnues par TypeScript
  experimental: {
    // Personnalisation de la gestion des métadonnées
    typedRoutes: true
  }
};

export default nextConfig;
