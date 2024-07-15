'use server';

import { dehydrate } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

import { Routes } from '@/lib/routes';
import { getQueryClient } from '@/lib/get-query-client';
import { getCurrentProfile, getProfileByUsername } from '@/lib/queries/profile';
import { postQueries } from '@/lib/queries/posts';

import { HydrationProvider } from '@/components/providers/hydration-provider';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Feed } from '@/components/feed';
import { Column } from '@/components/column';
import { getUser } from '@/utils/get-user';
import { AuthProvider } from '@/components/providers/auth-provider';

interface PageProps {
  params: typeof Routes.profile.params;
}

export default async function ProfilePage({ params }: PageProps) {
  const { profile: author } = params;
  const queryClient = getQueryClient();

  const queries = await postQueries();

  const {
    data: { user }
  } = await getUser();

  const userProfile = await getCurrentProfile(user?.id);

  const profileRes = await queryClient.fetchQuery({
    queryKey: ['authorProfile', author],
    queryFn: () => getProfileByUsername(author)
  });

  await queryClient.prefetchQuery({
    queryKey: ['postsByAuthor', author],
    queryFn: () => queries.queries.postsByAuthor(author)
  });

  if (!profileRes || !profileRes.data) redirect('/error');

  const profile = profileRes.data;

  const dehydratedState = dehydrate(queryClient);

  return (
    <AuthProvider profile={userProfile} user={user}>
      <HydrationProvider state={dehydratedState}>
        <Column className="mx-auto flex flex-col md:max-w-3xl md:p-8">
          <div className="flex flex-col md:py-8">
            <Column className="gap-4 px-4 py-4 md:px-8">
              <Avatar className="size-24">
                <AvatarImage src={profile.avatar ?? ''} alt={`${profile.display_name}'s Avatar.`} />
              </Avatar>

              <Column className="">
                <h1 className="m-0 text-xl font-semibold">{profile.display_name}</h1>
                <h3 className="text-sm text-muted">@{profile.username}</h3>
              </Column>
            </Column>
          </div>

          <div className="flex flex-1 flex-col">
            <Feed queryKey="postsByAuthor" queryKeys={[author]} />
          </div>
        </Column>
      </HydrationProvider>
    </AuthProvider>
  );
}
