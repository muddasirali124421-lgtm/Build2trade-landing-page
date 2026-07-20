import type { Metadata } from 'next';
import DeleteAccount from '@/sections/DeleteAccount';

export const metadata: Metadata = {
  title: 'Delete My Account',
  description: 'Submit a request to permanently delete your Build2Trade account and all associated data.',
};

export default function Page() {
  return <DeleteAccount />;
}
