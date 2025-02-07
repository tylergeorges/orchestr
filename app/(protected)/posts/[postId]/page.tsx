'use server';

import { dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/get-query-client';
import { Routes } from '@/lib/routes';
import { postQueries } from '@/lib/queries/posts';

import { HydrationProvider } from '@/components/providers/hydration-provider';
import { ExpandedPost } from '@/components/ui/expanded-post';
import { CreatePostForm } from '@/components/create-post-form';
import { PostDivider } from '@/components/post';
import { Column } from '@/components/column';
import { BackButton } from '@/components/back-button';
import { Feed } from '@/components/feed';

interface PostPostProps {
  params: typeof Routes.post.params;
}

export default async function PostPage({ params }: PostPostProps) {
  const { postId } = Routes.post.parse(params);

  const queryClient = getQueryClient();

  const queries = await postQueries();

  const post = await queryClient.fetchQuery({
    queryKey: ['postById', postId],
    queryFn: () => queries.queries.postById(postId)
  });

  await queryClient.prefetchQuery({
    queryKey: ['getReplies'],
    queryFn: () => queries.queries.getReplies(postId)
  });

  if (!post) return null;

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationProvider state={dehydratedState}>
      <Column className="relative w-full">
        <BackButton />

        <PostDivider />
      </Column>

      <ExpandedPost post={post} queryKey={'postById'} />

      <CreatePostForm parentId={postId} />

      <Feed queryKey="getReplies" queryKeys={[postId]} />
    </HydrationProvider>
  );
}
