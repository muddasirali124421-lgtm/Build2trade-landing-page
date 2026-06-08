import type { Metadata } from 'next';
import TermsOfUse from '@/sections/TermsOfUse';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Build2Trade Terms of Use — subscription terms and user responsibilities.',
};

export default function Page() {
  return <TermsOfUse />;
}
