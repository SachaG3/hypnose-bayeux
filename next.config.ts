import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Certaines options expérimentales peuvent ne pas être reconnues par TypeScript
  experimental: {
    // Personnalisation de la gestion des métadonnées
    typedRoutes: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
};

export default nextConfig;
