import { useInsertMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { toast } from 'sonner';

import { useSupabaseBrowser } from '@/lib/supabase/client';
import { useUpdatePostLikes } from '@/hooks/use-update-post-likes';
import { PostsWithMeta } from '@/lib/types/supabase';

export function useLikePost(post: Defined<PostsWithMeta>, postKey: string) {
  const supabase = useSupabaseBrowser();

  const { mutate: updatePostMutation } = useUpdatePostLikes(postKey);

  // @ts-expect-error - typescript being weird 
  return useInsertMutation(supabase.from('likes'), ['user_id', 'post_id'], null, {
    onMutate: async ([likeData]) => {
      updatePostMutation({
        // ...post,
        like_count: Math.max(post?.like_count + 1, 1),
        is_liked: true,
        author_id: post.author_id,
        id: post.id,
        reply_to: post.reply_to,
        reply_count: post.reply_count,
        is_author: post.is_author,
        content: post.content,
        created_at: post.created_at
      });

      return { ...likeData };
    },
    onError(error) {
      toast.error(error.message);
    }
  });
}
