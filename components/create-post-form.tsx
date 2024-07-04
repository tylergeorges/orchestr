'use client';

import { v4 as uuid } from 'uuid';

import { generateTimestamp } from '@/utils/generate-timestamp';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ContentEditable } from '@/components/ui/content-editable';
import { useUser } from '@/components/providers/auth-provider';
import { useCreatePost } from '@/hooks/use-create-post';
import { Column } from '@/components/column';
import { Row } from '@/components/row';
import { PostDivider } from '@/components/post';
import { useCreateReply } from '@/hooks/use-create-reply';
import { UserAvatar } from '@/components/user-avatar';

interface CreatePostFormProps {
  parentId?: string | null;
}

export const CreatePostForm = ({ parentId = null }: CreatePostFormProps) => {
  const {
    user: { id: userId },
    profile
  } = useUser();

  const { mutateAsync: createPostMutation } = useCreatePost();
  const { mutateAsync: createReplyMutation } = useCreateReply();

  const createPost = async (text: string) => {
    if (!text.trim()) return;

    if (parentId) {
      await createReplyMutation({
        id: uuid(),
        author_id: userId,
        content: text,
        created_at: generateTimestamp(),
        like_count: 0,
        reply_count: 0,
        profiles: profile,
        reply_to: parentId
      });
    } else {
      await createPostMutation({
        id: uuid(),
        author_id: userId,
        content: text,
        created_at: generateTimestamp(),
        like_count: 0,
        reply_count: 0,
        profiles: profile,
        is_liked: false,
        reply_to: null
      });
    }
  };

  return (
    <Column className="w-full">
      <Row className="relative w-full gap-4 p-6">
        {/* <Avatar size="xl">
          {profile.avatar ? (
            <AvatarImage alt="" src={profile.avatar} />
          ) : (
            <AvatarFallback className="bg-brand" />
          )}
        </Avatar> */}

        <UserAvatar avatar={profile.avatar} size="xl" />

        <Column className="relative w-full flex-1 gap-2">
          <div className="relative w-full flex-1">
            <ContentEditable
              onSubmit={createPost}
              placeholder="What's on your mind?"
              className="border-0 text-base focus-visible:ring-0"
            />
          </div>

          <Row className="justify-between center-v">
            <Button variant="primary">Post</Button>
          </Row>
        </Column>
      </Row>

      <PostDivider />
    </Column>
  );
};
