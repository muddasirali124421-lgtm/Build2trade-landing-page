import type { Metadata } from 'next';
import Contact from '@/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Build2Trade — phone, email, and contact form. We reply within 24 hours.',
};

export default function Page() {
  return <Contact />;
}
