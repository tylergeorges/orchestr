import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Posts } from '@/lib/types/supabase';
import { usePostsMutation } from '@/hooks/use-posts';

export const useCreateReply = () => {
  const queryClient = useQueryClient();

  return usePostsMutation('createReply', {
    onMutate: async (newPost: Posts) => {
      await queryClient.cancelQueries({ queryKey: ['getReplies'] });

      const previousPosts = queryClient.getQueryData<Posts[]>(['getReplies']);

      queryClient.setQueryData(['getReplies'], () => [newPost, ...previousPosts]);

      return { previousPosts };
    },

    // If the mutation fails, use the context we returned above
    onError: (err, updatedPost, context) => {
      queryClient.setQueryData(['getReplies'], context?.previousPosts);

      toast.error(err.message);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getReplies'] });
    }
  });
};
