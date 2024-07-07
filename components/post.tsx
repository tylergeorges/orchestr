'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import dayjsTwitter from '@/lib/dayjs-twitter';
import { cn } from '@/utils/cn';
import { useLikePost } from '@/hooks/use-like-post';
import { useRemoveLike } from '@/hooks/use-remove-like';
import { useUser } from '@/components/providers/auth-provider';
import type { Likes, PostsWithMeta } from '@/lib/types/supabase';
import type { PostsWithLikes } from '@/lib/types';

import { Icons } from '@/components/icons';
import { Time } from '@/components/ui/time';

dayjs.extend(dayjsTwitter);

interface PostProps {
  post: Defined<PostsWithMeta>;
}

export const Post = ({ post, children }: WithChildren<PostProps>) => {
  const router = useRouter();

  const goToPost = () => {
    if (post.reply_to) return;

    router.push(`/posts/${post.id}`);
  };

  return (
    <div className="relative w-full text-[15px]">
      <div
        className={cn('w-full max-w-full', !post.reply_to && 'cursor-pointer')}
        onClick={goToPost}
      >
        {children}
      </div>
    </div>
  );
};

interface PostLikeButtonProps {
  post: Defined<PostsWithMeta>;
  queryKey: string;
}

export const LikeButton = ({ post, queryKey }: PostLikeButtonProps) => {
  const { user } = useUser();

  const { mutate: addLike } = useLikePost(post, queryKey);
  const { mutate: removeLike } = useRemoveLike(post, queryKey);

  const likePost = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    const likeData: Partial<Likes> & { post_id: string } = {
      post_id: post.id,
      user_id: user.id
    };

    if (post.is_liked) {
      removeLike(likeData);
    } else {
      addLike([likeData]);
    }
  };

  return (
    <PostButton color="destructive" icon="heart" isActive={post.is_liked} onClick={likePost}>
      {post.like_count}
    </PostButton>
  );
};

export const PostCreatedAt = ({
  className,
  post,
  ...props
}: PostBaseProps & { post: PostsWithLikes }) => {
  const [createdAt] = useState(() => dayjs(post.created_at).twitter());

  return (
    <Time dateTime={post.created_at} className={cn('text-sm text-muted', className)} {...props}>
      {createdAt}
    </Time>
  );
};

export const EmptyDivider = ({ className, ...props }: PostBaseProps) => (
  <div className={cn('', className)} {...props} />
);

interface PostBaseProps extends React.HTMLAttributes<HTMLElement> {}

export const PostButtonWrapper = ({ children, className, ...props }: PostBaseProps) => {
  return (
    <div className={cn('mt-1.5 w-full items-center gap-2 horizontal', className)} {...props}>
      {children}
    </div>
  );
};

export const PostSubHeading = ({ children, className, ...props }: PostBaseProps) => {
  return (
    <span className={cn('text-sm text-muted', className)} {...props}>
      {children}
    </span>
  );
};

export const PostHeading = ({ children, className, ...props }: PostBaseProps) => {
  return (
    <h1 className={cn('text-[15px] font-medium text-primary', className)} {...props}>
      {children}
    </h1>
  );
};

export const PostContent = ({ children, className, ...props }: PostBaseProps) => {
  return (
    <p
      className={cn('line-clamp-[10] whitespace-pre-wrap break-words text-primary', className)}
      {...props}
    >
      {children}
    </p>
  );
};

interface PostButtonProps {
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  icon: keyof typeof Icons;
  color: string;
  isActive: boolean;
}

export const PostButton = ({
  children,
  icon,
  onClick,
  className,
  color,
  isActive
}: WithChildren<PostButtonProps>) => {
  const Icon = Icons[icon];

  return (
    <button
      className={cn(
        'items-center justify-center gap-1 text-sm text-muted horizontal',
        'transition-colors',
        className,
        isActive ? `fill-${color} text-${color}` : `fill-none text-muted hover:text-${color}`
      )}
      onClick={onClick}
    >
      <Icon
        className={cn('size-5 transition-transform active:scale-75', isActive && `fill-${color}`)}
      />

      <span className="select-none">
        {children && typeof children === 'number' ? children > 0 && children : null}
      </span>
    </button>
  );
};

export const PostDivider = () => {
  return <EmptyDivider className="absolute bottom-0 right-0 h-[1px] w-full bg-border" />;
};
