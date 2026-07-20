import type { Metadata } from 'next';
import Giveaway from '@/sections/Giveaway';

export const metadata: Metadata = {
  title: 'Giveaway',
  description: 'Win big — 3 months free access to Build2Trade. Join our giveaway today.',
};

export default function Page() {
  return <Giveaway />;
}
