import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const packageJson = JSON.parse(read('package.json')) as { dependencies: Record<string, string>; devDependencies: Record<string, string> };

describe('dependency and type hygiene', () => {
  it('uses the currently patched Next.js release', () => {
    expect(packageJson.dependencies.next).toBe('16.3.3');
    expect(packageJson.devDependencies['eslint-config-next']).toBe('16.3.3');
  });

  it('does not ship unused or deprecated UI stacks', () => {
    for (const dependency of ['@heroicons/react', '@heroui/react', '@nextui-org/react', 'framer-motion', 'react-jsonld']) {
      expect(packageJson.dependencies).not.toHaveProperty(dependency);
    }
    expect(read('src/app/layout.tsx')).not.toContain('<Providers>');
  });

  it('does not mix Tailwind 4 directives into the Tailwind 3 stylesheet', () => {
    expect(read('src/app/globals.css')).not.toContain('@theme');
  });

  it('does not suppress the Card link type error', () => {
    expect(read('src/components/Card.tsx')).not.toContain('@ts-expect-error');
  });
});
