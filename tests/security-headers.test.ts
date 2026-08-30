import { describe, expect, it } from 'vitest';
import nextConfig from '../next.config';

describe('production security headers', () => {
  it('serves browser protections from Next instead of Apache-only configuration', async () => {
    expect(nextConfig.headers).toBeTypeOf('function');
    const rules = await nextConfig.headers!();
    const global = rules.find((rule) => rule.source === '/(.*)');
    expect(global).toBeDefined();
    const headers = Object.fromEntries(global!.headers.map(({ key, value }) => [key, value]));

    expect(headers['Content-Security-Policy']).toContain("default-src 'self'");
    expect(headers['Content-Security-Policy']).toContain("frame-ancestors 'self'");
    expect(headers['X-Content-Type-Options']).toBe('nosniff');
    expect(headers['X-Frame-Options']).toBe('SAMEORIGIN');
    expect(headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['Permissions-Policy']).toContain('camera=()');
  });
});
