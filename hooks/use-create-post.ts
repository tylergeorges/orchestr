import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { usePostsMutation } from '@/hooks/use-posts';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return usePostsMutation('createPost', {
    onMutate: async newPost => {
      const queryKey = [newPost.reply_to ? 'getReplies' : 'posts'];

      await queryClient.cancelQueries({ queryKey });

      const previousPosts = queryClient.getQueryData(queryKey) ?? [];

      queryClient.setQueryData(queryKey, [newPost, ...previousPosts]);

      return { previousPosts };
    },

    // If the mutation fails, use the context we returned above
    onError: (err, newPost, context) => {
      const queryKey = [newPost.reply_to ? 'getReplies' : 'posts'];

      queryClient.setQueryData(queryKey, context?.previousPosts);

      toast.error(err.message);
    },

    onSettled: newPost => {
      const queryKey = [newPost?.reply_to ? 'getReplies' : 'posts'];

      queryClient.invalidateQueries({ queryKey });
    }
  });
};
