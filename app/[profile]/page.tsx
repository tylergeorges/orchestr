'use server';

import { QueryClient, dehydrate } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

import { Routes } from '@/lib/routes';
import { getCurrentProfile } from '@/lib/queries/profile';
import { useProfileQuery } from '@/hooks/use-profile-query';
import { useProfilePostsQuery } from '@/hooks/use-profile-posts-query';
import { getUser } from '@/utils/get-user';

import { HydrationProvider } from '@/components/providers/hydration-provider';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Column } from '@/components/column';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ProfileFeed } from '@/components/profile-feed';
import { Row } from '@/components/row';

interface PageProps {
  params: typeof Routes.profile.params;
}

export default async function ProfilePage({ params }: PageProps) {
  const { profile: author } = params;
  const queryClient = new QueryClient();

  const {
    data: { user }
  } = await getUser();

  const userProfile = await getCurrentProfile(user?.id);

  const profile = await queryClient.fetchQuery(useProfileQuery(author ?? ''));

  await queryClient.prefetchQuery(useProfilePostsQuery(author));

  if (!profile) redirect('/error');

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="relative flex-1 horizontal center">
      <Column className="flex-1 flex-col overflow-auto md:max-w-xl">
        <div className="flex flex-col md:py-8">
          <Row className="w-full justify-between gap-4 px-4 py-4 md:px-8">
            <Column className="">
              <h1 className="m-0 text-2xl font-semibold">{profile.display_name}</h1>
              <h3 className="text-muted">@{profile.username}</h3>
            </Column>

            <Avatar className="size-24">
              <AvatarImage src={profile.avatar ?? ''} alt={`${profile.display_name}'s Avatar.`} />
            </Avatar>
          </Row>
        </div>

        <div className="flex flex-1 flex-col">
          <HydrationProvider state={dehydratedState}>
            <AuthProvider profile={userProfile} user={user}>
              <ProfileFeed author={author} />
            </AuthProvider>
          </HydrationProvider>
        </div>
      </Column>
    </div>
  );
}
