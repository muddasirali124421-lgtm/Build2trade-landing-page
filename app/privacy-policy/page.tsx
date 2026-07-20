import type { Metadata } from 'next';
import PrivacyPolicy from '@/sections/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Build2Trade collects and protects your personal data.',
};

export default function Page() {
  return <PrivacyPolicy />;
}
