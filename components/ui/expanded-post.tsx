import type { PostsWithLikes } from '@/lib/types';
import { PostsWithMeta } from '@/lib/types/supabase';
import { usePostsQuery } from '@/hooks/use-posts';

import {
  EmptyDivider,
  LikeButton,
  Post,
  PostButtonWrapper,
  PostContent,
  PostCreatedAt,
  PostHeading,
  PostSubHeading
} from '@/components/post';
import { Column } from '@/components/column';
import { Row } from '@/components/row';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

type PostsQueryType = Parameters<typeof usePostsQuery>;

interface ExpandedPostProps {
  post: Defined<PostsWithLikes & PostsWithMeta>;
  queryKey: PostsQueryType[0];
}

export const ExpandedPost = ({ post, queryKey }: ExpandedPostProps) => {
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
              <LikeButton post={post} queryKey={queryKey} />
            </PostButtonWrapper>
          </Column>
        </Column>
      </Row>

      <EmptyDivider className="absolute bottom-0 right-0 h-[1px] w-full bg-border" />
    </Post>
  );
};
