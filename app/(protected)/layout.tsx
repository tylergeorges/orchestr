'use server';

import { redirect } from 'next/navigation';

import { Column } from '@/components/column';
import { AuthProvider } from '@/components/providers/auth-provider';
import { getCurrentProfile } from '@/lib/queries/profile';
import { getUser } from '@/utils/get-user';

interface ProtectedPageProps {}

export default async function ProtectedPage({
  children
}: React.PropsWithChildren<ProtectedPageProps>) {
  const {
    data: { user },
    error
  } = await getUser();

  if (!user || error) return redirect('/login');

  const profile = await getCurrentProfile(user.id);

  if (!profile) return redirect('/login');

  return (
    <Column className="relative h-full w-full flex-1">
      <Column className="relative mx-auto h-full w-full max-w-xl flex-1">
        <AuthProvider profile={profile} user={user}>
          {children}
        </AuthProvider>
      </Column>
    </Column>
  );
}
