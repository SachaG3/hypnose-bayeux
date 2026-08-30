import type { ReactNode } from 'react';
import { faqMetadata } from './metadata';

export const metadata = faqMetadata;

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
