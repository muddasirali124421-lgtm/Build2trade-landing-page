import type { Metadata } from 'next';
import Blogs from '@/sections/Blogs';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Construction industry tips, guides and insights for builders and tradies.',
};

export default function Page() {
  return <Blogs />;
}
