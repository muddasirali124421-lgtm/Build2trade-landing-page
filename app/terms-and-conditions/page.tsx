import type { Metadata } from 'next';
import TermsAndConditions from '@/sections/TermsAndConditions';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Build2Trade Terms and Conditions — legal agreement for platform use.',
};

export default function Page() {
  return <TermsAndConditions />;
}
