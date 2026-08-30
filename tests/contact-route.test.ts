import { describe, expect, it } from 'vitest';
import { POST } from '../src/app/api/send-email/route';

const request = (body: string, ip: string) => new Request('https://www.hypnose-bayeux.fr/api/send-email', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'content-length': String(Buffer.byteLength(body)),
    'x-forwarded-for': ip,
  },
  body,
});

describe('contact API boundary', () => {
  it('returns 400 for malformed JSON without exposing internals', async () => {
    const response = await POST(request('{', '192.0.2.1'));
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: 'Le contenu de la demande est invalide.' });
  });

  it('validates input before requiring the Resend configuration', async () => {
    const response = await POST(request('{}', '192.0.2.2'));
    expect(response.status).toBe(400);
    expect(await response.json()).toHaveProperty('error');
  });

  it('rejects an oversized body before parsing it', async () => {
    const body = JSON.stringify({ message: 'x'.repeat(16_001) });
    const response = await POST(request(body, '192.0.2.3'));
    expect(response.status).toBe(413);
  });
});
