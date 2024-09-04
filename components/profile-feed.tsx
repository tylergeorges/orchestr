'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { PostsWithLikes } from '@/lib/types';
import type { PostsWithMeta } from '@/lib/types/supabase';
import { useProfilePostsQuery } from '@/hooks/use-profile-posts-query';

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
import { Icons } from '@/components/icons';

interface ProfileFeedProps {
  author: string;
}

export const ProfileFeed = ({ author }: ProfileFeedProps) => {
  const { data, error } = useSuspenseQuery(useProfilePostsQuery(author));

  if (error) {
    toast.error(error.message);

    return;
  }

  const posts = (data as Defined<PostsWithMeta & PostsWithLikes>[]) ?? [];

  return (
    <Column className="size-full flex-1 ">
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
                <div className="flex-1">
                  <LikeButton post={post} queryKey={author} />
                </div>

                <div className="flex-1">
                  <PostButton className="text-muted hover:text-blue-500">
                    <Icons.message className="size-5" />
                  </PostButton>
                </div>
              </PostButtonWrapper>
            </Column>
          </Row>

          <PostDivider />
        </Post>
      ))}
    </Column>
  );
};
