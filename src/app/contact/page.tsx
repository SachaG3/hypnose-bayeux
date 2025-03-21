import { contactMetadata } from '../metadata';
import ContactFormClient from './ContactFormClient';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <ContactFormClient />
  );
} 