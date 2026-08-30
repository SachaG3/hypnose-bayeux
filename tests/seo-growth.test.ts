import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');

describe('Search Console driven SEO growth', () => {
  it('targets the strongest local queries with trustworthy homepage metadata', () => {
    const metadata = read('src/app/metadata.tsx');
    expect(metadata).toContain('Hypnothérapeute à Bayeux | Nadège Guignard');
    expect(metadata).toContain('Cabinet d’hypnose près de Bayeux');
    expect(metadata).not.toMatch(/meta name=.keywords|keywords:\s*\[/);
    expect(metadata).not.toMatch(/meilleur hypnothérapeute|Plus de 10 ans|Hypnothérapeute Certifiée|Expert en hypnothérapie/i);
    expect(read('src/app/page.tsx')).toContain('hypnotiseur à Bayeux');
  });

  it('gives high-impression service pages intent-specific titles and descriptions', () => {
    const smoking = read('src/app/arret-tabac/page.tsx');
    const session = read('src/app/seance-hypnose/page.tsx');
    const prices = read('src/app/metadata.tsx');

    expect(smoking).toContain("Arrêt du tabac par hypnose à Bayeux | Nadège Guignard");
    expect(smoking).toMatch(/déroulement.*tarif|tarif.*déroulement/i);
    expect(smoking.slice(0, 2_500)).not.toMatch(/90%|réussite|garanti/i);
    expect(session).toContain("Séance d’hypnose à Bayeux : déroulement et tarif");
    expect(session).toMatch(/durée.*tarif|tarif.*durée/i);
    expect(prices).toContain('Tarifs hypnose à Bayeux : séances dès 70 €');
  });

  it('publishes a factual practitioner page and links it throughout the site', () => {
    const about = read('src/app/a-propos/page.tsx');
    expect(about).toContain("Nadège Guignard, hypnothérapeute près de Bayeux");
    expect(about).toContain("canonical: 'https://www.hypnose-bayeux.fr/a-propos'");
    expect(about).not.toMatch(/certifiée|10 ans|taux de réussite/i);
    const header = read('src/components/Header.tsx');
    expect(header).toContain('href="/a-propos"');
    expect(header).toContain('href="/galerie"');
    expect(read('src/components/Footer.tsx')).toContain('href="/a-propos"');
    expect(read('src/app/sitemap.ts')).toContain("'/a-propos'");
    expect(read('public/llms.txt')).toContain('https://www.hypnose-bayeux.fr/a-propos');
  });

  it('adds visible and structured breadcrumbs to the acquisition pages', () => {
    const component = read('src/components/Breadcrumbs.tsx');
    expect(component).toContain('BreadcrumbList');
    for (const page of ['arret-tabac', 'seance-hypnose', 'tarifs', 'a-propos']) {
      expect(read(`src/app/${page}/page.tsx`)).toContain('<Breadcrumbs');
    }
  });

  it('centralizes the business identity used by structured data', () => {
    const seo = read('src/lib/seo.ts');
    const layout = read('src/app/layout.tsx');
    expect(seo).toContain("'@type': 'HealthAndBeautyBusiness'");
    expect(seo).toContain("telephone: '+33649292077'");
    expect(seo).not.toContain('founder:');
    expect(layout).toContain('businessJsonLd');
    expect(read('src/app/page.tsx')).not.toContain('schema-local');
    expect(read('src/app/page.tsx')).not.toContain('schema-services');
  });

  it('records the Search Console baseline and a repeatable measurement protocol', () => {
    const playbook = read('docs/seo-search-console.md');
    expect(playbook).toContain('2 308 impressions');
    expect(playbook).toContain('118 clics');
    expect(playbook).toContain('hypnose bayeux');
    expect(playbook).toContain('J+28');
  });
});
