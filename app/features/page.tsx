import type { Metadata } from 'next';
import CoreFeatures from '@/sections/CoreFeatures';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Quotes, project management, tradie discovery, and more — all the tools you need to run your construction business.',
};

export default function Page() {
  return <CoreFeatures />;
}
