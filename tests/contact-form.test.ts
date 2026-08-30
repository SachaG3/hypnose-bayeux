import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const form = readFileSync(new URL('../src/app/contact/ContactFormClient.tsx', import.meta.url), 'utf8');

describe('contact form anti-abuse contract', () => {
  it('submits a timestamp and an off-screen honeypot', () => {
    expect(form).toContain("website: ''");
    expect(form).toContain('startedAt:');
    expect(form).toContain('name="website"');
    expect(form).toContain('tabIndex={-1}');
  });

  it('mirrors server field limits in the browser', () => {
    expect(form).toContain('maxLength={100}');
    expect(form).toContain('maxLength={254}');
    expect(form).toContain('maxLength={30}');
    expect(form).toContain('maxLength={5000}');
  });
});
