'use client';

import { toast } from 'sonner';
import { useDeleteMutation } from '@supabase-cache-helpers/postgrest-react-query';

import { useSupabaseBrowser } from '@/lib/supabase/client';
import { useUpdatePostLikes } from '@/hooks/use-update-post-likes';
import { PostsWithMeta } from '@/lib/types/supabase';

export function useRemoveLike(post: Defined<PostsWithMeta>, postKey: string) {
  const client = useSupabaseBrowser();

  const { mutate: updatePostMutation } = useUpdatePostLikes(postKey);

  return useDeleteMutation(
    // @ts-expect-error - typescript being weird
    client.from('likes'),
    ['post_id', 'user_id'],
    null,

    {
      onMutate: async variables => {
        updatePostMutation({
          like_count: Math.max(post?.like_count - 1, 0),
          is_liked: false,
          author_id: post.author_id,
          content: post.content,
          created_at: post.created_at,
          reply_count: post.reply_count,
          id: post.id,
          reply_to: post.reply_to,
          is_author: post.is_author
        });

        return { ...variables };
      },

      onError(error) {
        toast.error(error.message);
      }
    }
  );
}
