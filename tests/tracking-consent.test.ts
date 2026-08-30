import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

describe('optional tracking consent', () => {
  it('keeps tracking out of the root layout', () => {
    const layout = read('src/app/layout.tsx');
    expect(layout).not.toContain('googletagmanager.com');
    expect(layout).not.toContain('<Analytics');
    expect(layout).not.toContain('<SpeedInsights');
    expect(layout).toContain('<TrackingScripts');
  });

  it('mounts optional trackers only after explicit acceptance', () => {
    expect(existsSync(new URL('../src/components/TrackingScripts.tsx', import.meta.url))).toBe(true);
    const tracking = read('src/components/TrackingScripts.tsx');
    expect(tracking).toContain("consent !== 'accepted'");
    expect(tracking).toContain('cookie-consent-changed');
    expect(tracking).toContain('ad_storage');
    expect(tracking).toContain('analytics_storage');
  });

  it('describes optional audience and advertising services accurately', () => {
    const banner = read('src/components/CookieBanner.tsx');
    const privacy = read('src/app/confidentialite/page.tsx');
    expect(banner).toMatch(/mesure d’audience|mesure d&apos;audience/);
    expect(privacy).toContain('Google Ads');
    expect(privacy).toContain('Vercel Analytics');
    expect(privacy).not.toContain('Aucun cookie publicitaire ou de traçage');
  });
});
