import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

import { usePostsMutation } from '@/hooks/use-posts';
import { PostsWithMeta } from '@/lib/types/supabase';

export const useUpdatePostLikes = (key: string) => {
  const queryClient = useQueryClient();

  return usePostsMutation('updatePost', {
    onMutate: async updatedPost => {
      const queryKey = [key];

      await queryClient.cancelQueries({ queryKey });

      const previousPosts = queryClient.getQueryData<PostsWithMeta[]>(queryKey);

      const updatedPosts = previousPosts?.map(p => {
        if (p.id === updatedPost.id) {
          return {
            ...p,
            ...updatedPost
          };
        }

        return p;
      });

      queryClient.setQueryData(queryKey, updatedPosts);

      return { previousPosts, updatedPosts };
    },

    onError: (err, updatedPost, context) => {
      const queryKey = [key];

      queryClient.setQueryData(queryKey, context?.previousPosts);

      toast.error(err.message);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    }
  });
};
