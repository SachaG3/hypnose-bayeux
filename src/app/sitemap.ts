import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.hypnose-bayeux.fr';
const routes = [
  '',
  '/a-propos',
  '/tarifs',
  '/galerie',
  '/contact',
  '/acces',
  '/faq',
  '/seance-hypnose',
  '/arret-tabac',
  '/anneau-gastrique',
  '/mentions-legales',
  '/confidentialite',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/mentions-legales' || route === '/confidentialite' ? 0.3 : 0.8,
  }));
}
