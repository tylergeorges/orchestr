'use client';

import { toast } from 'sonner';

import {
  EmptyDivider,
  LikeButton,
  Post,
  PostButton,
  PostButtonWrapper,
  PostContent,
  PostCreatedAt,
  PostDivider,
  PostHeading,
  PostSubHeading
} from '@/components/post';
import { Column } from '@/components/column';
import { Row } from '@/components/row';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { PostsWithLikes } from '@/lib/types';
import { usePostsQuery } from '@/hooks/use-posts';
import { PostsWithMeta } from '@/lib/types/supabase';

type PostsQueryType = Parameters<typeof usePostsQuery>;

interface FeedProps {
  queryKey: PostsQueryType[0];
  queryKeys: PostsQueryType[1];
}

export const Feed = ({ queryKey, queryKeys }: FeedProps) => {
  const { data, error } = usePostsQuery(queryKey, queryKeys);

  if (error) {
    toast.error(error.message);

    return;
  }

  const posts = (data as (PostsWithMeta & PostsWithLikes)[]) ?? [];

  return (
    <Column className="flex-1">
      {posts.map(post => (
        <Post post={post} key={post.id}>
          <Row className="h-full flex-1 gap-4 p-6">
            <Avatar size="xl" className="select-none">
              <AvatarImage
                className="pointer-events-none select-none"
                alt=""
                src={post.profiles.avatar}
              />
            </Avatar>

            <Column className="h-full flex-1 gap-1 overflow-hidden">
              <Row className="gap-1 text-muted center-v">
                <PostHeading>{post.profiles.display_name}</PostHeading>

                <EmptyDivider className="relative bottom-[1px] mr-1" />

                <PostSubHeading>@{post.profiles.username}</PostSubHeading>

                <PostSubHeading>·</PostSubHeading>

                <PostCreatedAt post={post} />
              </Row>

              <PostContent className="line-clamp-[10]">{post.content}</PostContent>

              <EmptyDivider />

              <PostButtonWrapper>
                <PostButton color="blue-500" icon="message" isActive={false}>
                  {post.reply_count}
                </PostButton>

                <LikeButton post={post} queryKey={queryKey} />
              </PostButtonWrapper>
            </Column>
          </Row>

          <PostDivider />
        </Post>
      ))}
    </Column>
  );
};
