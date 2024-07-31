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
import { MagicTextArea } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@/components/ui/icon-button';
import { getUser } from '@/utils/get-user';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

interface CreatePostFormProps {
  parentId?: string | null;
}

export const CreatePostForm = ({ parentId = null }: CreatePostFormProps) => {
  const userData = useUser();

  const fileReader = useRef<FileReader>();

  const router = useRouter();
  const { mutate: createPostMutation } = useCreatePost();
  const { mutate: createReplyMutation } = useCreateReply();

  const [imageAttachment, setImageAttachment] = useState<File | null>(null);
  const [imageUrl, SetImageUrl] = useState('');

  const fileAttachmentRef = useRef<HTMLInputElement>(null);

  const isReply = !!parentId;

  useEffect(() => {
    fileReader.current = new FileReader();

    const fileUploadCallback = () => {
      if (fileReader.current && fileReader.current.result) {
        SetImageUrl(fileReader.current.result as string);
      }
    };

    fileReader.current.onloadend = fileUploadCallback;

    return () => {
      if (fileReader.current) {
        fileReader.current.onloadend = null;
      }
    };
  }, []);

  if (!userData) return;

  const { profile } = userData;

  const createPost = async (text: string) => {
    if (!text || !text.trim()) return;

    const { data, error } = await getUser();

    if (!data || error) {
      if (error) {
        toast.error(error.message);
      }

      router.push('/');

      return;
    }

    const { user } = data;

    const userId = user.id;

    if (isReply) {
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
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target;

    const fileAttachmentElement = fileAttachmentRef.current;
    if (!target || !fileAttachmentElement) return;
  };

  const addAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { files } = e.currentTarget;

    if (files) {
      const fileToUpload = files[0];

      // 1 MB
      const maxUploadSize = 1_000_000;

      if (fileToUpload.size <= maxUploadSize && fileReader.current) {
        fileReader.current.readAsDataURL(fileToUpload);

        setImageAttachment(fileToUpload);
      }
    }

    // @ts-expect-error - resets file input so user can select same file multiple times
    e.target.value = null;
  };

  const removeAttachment = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setImageAttachment(null);
    SetImageUrl('');
  };

  if (!profile) {
    router.push('/');

    return null;
  }

  return (
    <Column className="w-full">
      <Row className="relative w-full gap-4 border-y px-6 py-4">
        <UserAvatar avatar={profile.avatar} size="xl" />

        <form
          onSubmit={handleFormSubmission}
          id="post-form"
          name="post-form"
          className="relative flex-1"
        >
          <Column className="relative w-full flex-1 gap-2">
            <div className="relative w-full flex-1">
              <MagicTextArea
                name="Post Input"
                form="post-form"
                onSubmit={createPost}
                variant="ghost"
                placeholder="What's on your mind?"
                className="mb border-0 text-base focus-visible:ring-0"
              />
            </div>

            <Row className="justify-between center-v">
              <div className="">
                <Button color="primary" type="submit" size="sm">
                  {isReply ? 'Reply' : 'Post'}
                </Button>
              </div>
            </Row>

            <input
              ref={fileAttachmentRef}
              multiple={false}
              accept="image/*,video/*"
              type="file"
              onChange={addAttachment}
              className="hidden"
            ></input>

            {imageAttachment?.type.includes('image') && (
              <div className="relative flex">
                <img
                  alt=""
                  className="h-96 w-full animate-scale-in rounded-xl object-cover"
                  src={imageUrl as string}
                />

                <IconButton
                  size="xs"
                  onClick={removeAttachment}
                  className="absolute left-2 top-2 rounded-full bg-background/50"
                >
                  <Icons.close className="text-primary" />
                </IconButton>
              </div>
            )}
          </Column>
        </form>
      </Row>

      <PostDivider />
    </Column>
  );
};
