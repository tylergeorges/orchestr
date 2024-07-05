'use server';

import type { PostsWithLikes, TypedSupabaseClient } from '@/lib/types';
import type { Posts, PostsWithMeta } from '@/lib/types/supabase';
import { createClient } from '@/lib/supabase/server';
import { createQueryBuilder } from '@/lib/quardian/create-query-builder';

function createPostsQuery(client: TypedSupabaseClient) {
  return client
    .from('posts_with_meta')
    .select('*, profiles ( id, username, display_name, created_at, avatar )');
}

export async function getPostsWithLikes(client: TypedSupabaseClient) {
  const posts = await createPostsQuery(client);

  return posts.data;
}

export const postQueries = createQueryBuilder()
  .query('posts', async () => {
    const client = await createClient();

    const postsRes = await createPostsQuery(client).is('reply_to', null);

    const posts = postsRes.data ?? [];

    return posts;
  })
  .query('postById', async (postId: string) => {
    const client = await createClient();

    const post = await createPostsQuery(client).eq('id', postId).single();

    return post.data as Defined<PostsWithMeta & PostsWithLikes>;
  })
  .query('getReplies', async (parentId: string) => {
    const client = await createClient();
    const posts = await createPostsQuery(client).eq('reply_to', parentId);

    // const post = await createPostsQuery(client).eq('id', post).single();

    return posts.data;
  })
  .mutation('createPost', async (post: Posts) => {
    const client = await createClient();

    const newPost: Posts = {
      author_id: post.author_id,
      content: post.content,
      like_count: post.like_count,
      id: post.id,
      reply_count: 0,
      created_at: post.created_at,
      reply_to: null
    };

    const createdPost = await client
      .from('posts')
      .insert({
        ...newPost
      })
      .returns()
      .select()
      .single();

    return createdPost.data;
  })
  .mutation('updatePost', async (post: Defined<PostsWithMeta> & { id: string }) => {
    const client = await createClient();

    const updated = await client
      .from('posts')
      .update({
        author_id: post.author_id,
        content: post.content,
        created_at: post.created_at,
        id: post.id,
        // is_liked: !!post.is_liked,
        like_count: post.like_count,
        reply_count: post.reply_count,
        reply_to: post.reply_to
      })
      .eq('id', post.id)
      .returns()
      .select()
      .throwOnError();

    return updated;
  })
  .mutation('createReply', async (post: Posts) => {
    const client = await createClient();

    const repliedPost = await client
      .from('posts')
      .insert({
        author_id: post.author_id,
        content: post.content,
        like_count: 0,
        id: post.id,
        reply_count: 0,
        created_at: post.created_at,
        reply_to: post.reply_to
      })
      .returns()
      .select()
      .single();

    return repliedPost;
  })
  .getServerActions();
