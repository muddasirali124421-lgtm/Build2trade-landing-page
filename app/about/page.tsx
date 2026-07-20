import type { Metadata } from 'next';
import About from '@/sections/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Build2Trade — founded by construction professionals with 20+ years of experience in the Australian building industry.',
};

export default function Page() {
  return <About />;
}
