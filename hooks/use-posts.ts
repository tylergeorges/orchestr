import { createQueryHooks } from '@/lib/quardian/create-query-hooks';
import { postQueries } from '@/lib/queries/posts';

export const { useQuery: usePostsQuery, useMutation: usePostsMutation } =
  createQueryHooks(postQueries);
