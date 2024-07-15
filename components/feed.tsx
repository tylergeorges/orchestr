'use client';

import { toast } from 'sonner';

import { usePostsQuery } from '@/hooks/use-posts';
import type { PostsWithLikes } from '@/lib/types';
import type { PostsWithMeta } from '@/lib/types/supabase';

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
import { Link } from '@/components/ui/link';

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

  const posts = (data as Defined<PostsWithMeta & PostsWithLikes>[]) ?? [];

  return (
    <Column className="relative w-full flex-1">
      {posts.map(post => (
        <Post post={post} key={post.id}>
          <Row className="h-full flex-1 gap-4 p-6">
            <Link
              href={`${post.profiles.username}`}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <Avatar size="xl" className="select-none">
                <AvatarImage
                  className="pointer-events-none select-none"
                  alt=""
                  src={post.profiles.avatar}
                />
              </Avatar>
            </Link>

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
                <PostButton icon="message" />

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
