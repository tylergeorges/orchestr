import { z } from 'zod';

import { makeRoute } from '@/utils/make-route';

export const PostParams = z.object({
  postId: z.string()
});

export const Routes = {
  home: makeRoute(() => `/home`, z.object({}) /* no params */),

  post: makeRoute(({ postId }) => `/posts/${postId}`, PostParams)
} as const
