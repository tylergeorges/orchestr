'use server';

import { postQueries } from '@/lib/queries/posts';

import { CreatePostForm } from '@/components/create-post-form';
import { Feed } from '@/components/feed';
import { getQueryClient } from '@/lib/get-query-client';
import { HydrationProvider } from '@/components/providers/hydration-provider';
import { dehydrate } from '@tanstack/react-query';
import { getUser } from '@/utils/get-user';

export default async function HomePage() {
  const {
    data: { user }
  } = await getUser();

  if (!user) return null;

  const queryClient = getQueryClient();

  const queries = await postQueries();

  const postsQueryKey = 'posts' as const;

  await queryClient.prefetchQuery({
    queryKey: [postsQueryKey],
    queryFn: () => queries.queries.posts()
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationProvider state={dehydratedState}>
      <CreatePostForm />
      <Feed queryKey={postsQueryKey} queryKeys={[]} />
    </HydrationProvider>
  );
}
