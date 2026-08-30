import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { redactVercelUrl } from '../src/components/TrackingScripts';

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

describe('optional tracking consent', () => {
  it('keeps tracking out of the root layout', () => {
    const layout = read('src/app/layout.tsx');
    expect(layout).not.toContain('googletagmanager.com');
    expect(layout).not.toContain('<Analytics');
    expect(layout).not.toContain('<SpeedInsights');
    expect(layout).toContain('<TrackingScripts');
  });

  it('always mounts anonymized Vercel measurements while keeping Google behind consent', () => {
    expect(existsSync(new URL('../src/components/TrackingScripts.tsx', import.meta.url))).toBe(true);
    const tracking = read('src/components/TrackingScripts.tsx');
    expect(tracking).toContain('<VercelInsights />');
    expect(tracking).toContain("consent === 'accepted'");
    expect(tracking).toContain('<Analytics beforeSend={redactVercelUrl} />');
    expect(tracking).toContain('<SpeedInsights />');
    expect(tracking).toContain('cookie-consent-changed');
    expect(tracking).toContain('ad_storage');
    expect(tracking).toContain('analytics_storage');
  });

  it('removes query parameters and fragments from Vercel Analytics URLs', () => {
    const event = redactVercelUrl({
      type: 'pageview',
      url: 'https://www.hypnose-bayeux.fr/contact?email=personne@example.fr#formulaire',
    });

    expect(event.url).toBe('https://www.hypnose-bayeux.fr/contact');
  });

  it('describes optional audience and advertising services accurately', () => {
    const banner = read('src/components/CookieBanner.tsx');
    const privacy = read('src/app/confidentialite/page.tsx');
    expect(banner).toContain('Google Ads');
    expect(privacy).toContain('Google Ads');
    expect(privacy).toContain('Vercel Analytics');
    expect(banner).toContain('mesures anonymisées');
    expect(privacy).toContain('sans cookie publicitaire');
    expect(privacy).not.toContain('Aucun cookie publicitaire ou de traçage');
  });
});
