'use server';

import { QueryClient, dehydrate } from '@tanstack/react-query';

import { postQueries } from '@/lib/queries/posts';

import { CreatePostForm } from '@/components/create-post-form';
import { Feed } from '@/components/feed';
import { HydrationProvider } from '@/components/providers/hydration-provider';

export default async function HomePage() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
  });

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
