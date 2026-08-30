import Link from 'next/link';
import type { Route } from 'next';
import JsonLd from './JsonLd';
import { siteConfig } from '@/lib/seo';

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems: BreadcrumbItem[] = [{ name: 'Accueil', href: '/' }, ...items];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `${siteConfig.url}${item.href === '/' ? '' : item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <nav aria-label="Fil d’Ariane" className="border-b border-gray-100 bg-white">
        <ol className="container mx-auto flex flex-wrap items-center gap-2 px-6 py-3 text-sm text-gray-600">
          {allItems.map((item, index) => (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-gray-400">/</span>}
              {item.href ? (
                <Link href={item.href as Route} className="hover:text-teal-700 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-gray-800">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
