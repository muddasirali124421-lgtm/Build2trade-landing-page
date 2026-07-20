import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Build2Trade — Australia\'s First Digital Networking Platform For Builders & Tradies',
  description: "Australia's First Digital Networking Platform For Builders & Tradies. Connect, find work, and grow your business.",
};

export default function Page() {
  return <HomePage />;
}
