import { describe, expect, it } from 'vitest';
import { ContactRateLimiter, validateContactPayload } from '../src/lib/contact';

const now = 1_800_000_000_000;
const validPayload = {
  name: '  Jeanne Dupont  ',
  email: ' jeanne@example.fr ',
  phone: ' 06 00 00 00 00 ',
  message: ' Bonjour, je souhaite un rendez-vous. ',
  consent: true,
  website: '',
  startedAt: now - 5_000,
};

describe('contact payload validation', () => {
  it('normalizes a legitimate submission', () => {
    const result = validateContactPayload(validPayload, now);
    expect(result).toEqual({
      ok: true,
      value: {
        name: 'Jeanne Dupont',
        email: 'jeanne@example.fr',
        phone: '06 00 00 00 00',
        message: 'Bonjour, je souhaite un rendez-vous.',
      },
    });
  });

  it.each([
    [{ ...validPayload, consent: false }, 'consentement'],
    [{ ...validPayload, website: 'spam.example' }, 'envoyée'],
    [{ ...validPayload, startedAt: now - 500 }, 'quelques instants'],
    [{ ...validPayload, email: 'invalid' }, 'email valide'],
    [{ ...validPayload, phone: '' }, 'téléphone'],
    [{ ...validPayload, name: 'Jeanne\r\nBcc: spam@example.fr' }, 'caractères'],
    [{ ...validPayload, message: 'x'.repeat(5_001) }, 'trop long'],
  ])('rejects an invalid or automated submission', (payload, message) => {
    const result = validateContactPayload(payload, now);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.toLowerCase()).toContain(message);
  });
});

describe('contact rate limiter', () => {
  it('allows three requests then blocks until the window expires', () => {
    const limiter = new ContactRateLimiter(3, 60_000);
    expect(limiter.check('client', now).allowed).toBe(true);
    expect(limiter.check('client', now + 1).allowed).toBe(true);
    expect(limiter.check('client', now + 2).allowed).toBe(true);
    const blocked = limiter.check('client', now + 3);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBe(60);
    expect(limiter.check('client', now + 60_001).allowed).toBe(true);
  });
});
