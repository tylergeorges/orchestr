import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';

import { postQueries } from '@/lib/queries/posts';

export const profilePostsQueryKey = ['postsByAuthor'];

interface Post {
  author_id: string;
  content: string;
  created_at: string;
  id: string;
  is_author: boolean;
  is_liked: boolean;
  like_count: number;
  reply_count: number;
  reply_to: string;
  profiles: {
    id: string;
    username: string;
    display_name: string;
    created_at: string;
    avatar: string;
  };
}

export const useProfilePostsQuery = (
  username: string,
  queryOptions?: UseQueryOptions<Post[], Error, Post[], QueryKey>
) => {
  const queryFn = async (): Promise<Post[]> => {
    const queries = await postQueries();

    const posts = (await queries.queries.postsByAuthor(username)) as Post[];

    return posts;
  };

  return {
    queryKey: [...profilePostsQueryKey, username],
    queryFn,
    ...queryOptions
  };
};
