import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { personJsonLd } from '../src/lib/seo';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');
const collectSource = (directory: URL): string => readdirSync(directory, { withFileTypes: true })
  .flatMap((entry) => {
    const child = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directory);
    if (entry.isDirectory()) return [collectSource(child)];
    return /\.(ts|tsx)$/.test(entry.name) ? [readFileSync(fileURLToPath(child), 'utf8')] : [];
  })
  .join('\n');
const source = collectSource(new URL('src/', root));

describe('public metadata consistency', () => {
  it('uses only the live hypnose-bayeux.fr domain', () => {
    expect(source).not.toContain('bayeuxhypnose.fr');
    expect(source).not.toContain('https://hypnose-bayeux.fr');
  });

  it('does not publish unsupported ratings, reviews, credentials or masked phones', () => {
    expect(source).not.toMatch(/aggregateRating|Marie L\.|Thomas D\.|recognizedBy/);
    expect(source).not.toContain('+336****2077');
  });

  it('keeps the stop-smoking offer aligned with its single-session format', () => {
    const home = read('src/app/page.tsx');
    const faq = read('src/app/faq/page.tsx');
    expect(home).toContain('programme en une séance');
    expect(home).not.toContain('protocole en 3 séances ciblant les mécanismes de la dépendance');
    expect(faq).toContain("Pour l'arrêt du tabac, le programme se déroule en une seule séance");
    const seo = read('src/lib/seo.ts');
    const stopSmoking = read('src/app/arret-tabac/page.tsx');
    expect(seo).toContain("name: 'Arrêt du tabac – 1 séance'");
    expect(seo).toContain("description: 'Programme d’arrêt du tabac en une seule séance'");
    expect(stopSmoking).toContain('Une seule séance d’hypnose personnalisée');
  });

  it('publishes Nadège Guignard as a Person with ten real sameAs profiles', () => {
    expect(personJsonLd['@type']).toBe('Person');
    expect(personJsonLd['@id']).toBe('https://www.hypnose-bayeux.fr/#nadege-guignard');
    expect(personJsonLd.url).toBe('https://www.hypnose-bayeux.fr/a-propos');
    expect(personJsonLd.sameAs).toHaveLength(10);
    expect(personJsonLd.sameAs).toEqual(expect.arrayContaining([
      'https://g.co/kgs/dGSS9Cj',
      'https://www.paralib.net/praticiens/nadege-guignard#prestations',
      'https://www.youtube.com/@hypnosebayeuxnadegeguignar2604/featured',
      'https://www.facebook.com/guignard14',
      'https://www.linkedin.com/in/nadege-guignard-7ba56435a/',
    ]));
    expect(personJsonLd.sameAs.join(' ')).not.toContain('URL_');
  });

  it('keeps the slimming offer aligned with the visible 3-session 210-euro price', () => {
    const tarifs = read('src/app/tarifs/page.tsx');
    const seo = read('src/lib/seo.ts');
    expect(tarifs).toContain('perte de poids (3 séances)');
    expect(seo).toContain("price: '210'");
    expect(`${tarifs}\n${seo}`).not.toMatch(/4 séances|price: ['"]260['"]/);
  });

  it('exports the FAQ page metadata from a server layout', () => {
    const faqLayout = read('src/app/faq/layout.tsx');
    expect(faqLayout).toContain('faqMetadata');
    expect(faqLayout).toContain('export const metadata');
  });

  it('keeps the sitemap and LLM index deterministic and limited to real routes', () => {
    const sitemap = read('src/app/sitemap.ts');
    const llms = read('public/llms.txt');
    expect(sitemap).not.toContain('lastModified');
    expect(llms).not.toContain('https://hypnose-bayeux.fr');
    expect(llms).toContain('/a-propos');
    expect(llms).not.toContain('/blog/');
  });

  it('references social assets that are present in public', () => {
    const metadata = read('src/app/metadata.tsx');
    const referencedAssets = [...metadata.matchAll(/https:\/\/www\.hypnose-bayeux\.fr\/(og-image\.[a-z]+|nadegeGuignard\.[a-z]+)|apple:\s*['"]\/(apple-icon\.[a-z]+)['"]/g)]
      .map((match) => match[1] ?? match[2]);
    expect(referencedAssets.length).toBeGreaterThan(0);
    for (const asset of referencedAssets) {
      expect(() => readFileSync(new URL(`public/${asset}`, root))).not.toThrow();
    }
  });
});
