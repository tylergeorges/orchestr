'use client';

import { v4 as uuid } from 'uuid';

import { generateTimestamp } from '@/utils/generate-timestamp';

import { useCreateReply } from '@/hooks/use-create-reply';
import { useCreatePost } from '@/hooks/use-create-post';
import { useUser } from '@/components/providers/auth-provider';

import { Button } from '@/components/ui/button';
import { Column } from '@/components/column';
import { Row } from '@/components/row';
import { PostDivider } from '@/components/post';
import { UserAvatar } from '@/components/user-avatar';
import { Input } from '@/components/ui/input';

interface CreatePostFormProps {
  parentId?: string | null;
}

export const CreatePostForm = ({ parentId = null }: CreatePostFormProps) => {
  const {
    user: { id: userId },
    profile
  } = useUser();

  const { mutate: createPostMutation } = useCreatePost();
  const { mutate: createReplyMutation } = useCreateReply();

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;

    if (!target) return;

    const form = new FormData(target);

    const text = form.get('Post Input') as string | null;

    if (!text || !text.trim()) return;

    if (parentId) {
      createReplyMutation({
        id: uuid(),
        author_id: userId,
        content: text,
        created_at: generateTimestamp(),
        like_count: 0,
        reply_count: 0,
        reply_to: parentId,

        // @ts-expect-error - profiles is defined client side, optimistic updates will error without
        profiles: profile
      });
    } else {
      createPostMutation({
        id: uuid(),
        author_id: userId,
        content: text,
        created_at: generateTimestamp(),
        like_count: 0,
        reply_count: 0,
        reply_to: null,

        // @ts-expect-error - profiles is defined client side, optimistic updates will error without
        profiles: profile
      });
    }

    target.reset(); // clear input
  };

  return (
    <Column className="w-full">
      <Row className="relative w-full gap-4 p-6">
        <UserAvatar avatar={profile.avatar} size="xl" />

        <form onSubmit={createPost} id="post-form" className="relative flex-1">
          <Column className="relative w-full flex-1 gap-2">
            <div className="relative w-full flex-1">
              <Input
                name="Post Input"
                type="text"
                placeholder="What's on your mind?"
                className="mb border-0 text-base focus-visible:ring-0"
              />
            </div>

            <Row className="justify-between center-v">
              <Button color="primary" type="submit">
                Post
              </Button>
            </Row>
          </Column>
        </form>
      </Row>

      <PostDivider />
    </Column>
  );
};
