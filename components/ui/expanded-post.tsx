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
  PostHeading
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
      <Column className="flex-1 gap-4 px-4 pb-4 md:p-0">
        <Row className="h-full flex-1 gap-4 pb-4 pt-2">
          <Avatar size="xl" className="select-none">
            <AvatarImage
              className="pointer-events-none select-none"
              alt=""
              src={post.profiles.avatar}
            />
          </Avatar>

          <Column className="text-muted center-v">
            <PostHeading>{post.profiles.display_name}</PostHeading>

            <PostCreatedAt post={post} />
          </Column>
        </Row>

        <Column className="h-full flex-1 gap-4 overflow-hidden">
          <PostContent className="line-clamp-[10]">{post.content}</PostContent>

          <Row className="justify-start center-h">
            <div className="flex-1 horizontal center">
              <PostButtonWrapper className="m-0 size-9 px-1">
                <LikeButton post={post} queryKey={queryKey} />
              </PostButtonWrapper>
            </div>
          </Row>
        </Column>

        <div className="w-full">
          <EmptyDivider className="absolute bottom-0 right-0 h-[1px] w-full bg-border" />
        </div>
      </Column>
    </Post>
  );
};
