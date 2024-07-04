'use client';

import type { PostsWithLikes } from '@/lib/types';

import {
  EmptyDivider,
  LikeButton,
  Post,
  PostButton,
  PostButtonWrapper,
  PostContent,
  PostCreatedAt,
  PostHeading,
  PostSubHeading
} from '@/components/post';
import { Column } from '@/components/column';
import { Row } from '@/components/row';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface ExpandedPostProps {
  post: Defined<PostsWithLikes>;
}

export const ExpandedPost = ({ post }: ExpandedPostProps) => {
  return (
    <Post post={post} key={post.id}>
      <Row className="h-full flex-1 gap-4 p-6">
        <Avatar size="xl" className="select-none">
          <AvatarImage
            className="pointer-events-none select-none"
            alt=""
            src={post.profiles.avatar}
          />
        </Avatar>

        <Column className="h-full flex-1 gap-4 overflow-hidden">
          <Row className="gap-1 text-muted center-v">
            <PostHeading>{post.profiles.display_name}</PostHeading>

            <EmptyDivider className="relative bottom-[1px] mr-1" />

            <PostSubHeading>@{post.profiles.username}</PostSubHeading>

            <PostSubHeading>·</PostSubHeading>

            <PostCreatedAt post={post} />
          </Row>

          <Column className="">
            <PostContent className="line-clamp-[10]">{post.content}</PostContent>

            <EmptyDivider />

            <PostButtonWrapper className="mt-2">
              <PostButton color="blue-500" icon="message" isActive={false}>
                {post.reply_count}
              </PostButton>

              <LikeButton post={post} />
            </PostButtonWrapper>
          </Column>
        </Column>
      </Row>

      <EmptyDivider className="absolute bottom-0 right-0 h-[1px] w-full bg-border" />
    </Post>
  );
};
