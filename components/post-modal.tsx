import { cn } from '@/utils/cn';
import type { PostsWithLikes } from '@/lib/types';

import { Icons } from '@/components/icons';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface PostModalProps {
  post: PostsWithLikes;
}

export const PostModal = ({ post }: PostModalProps) => {
  return (
    <Card className="min-w-[600px] border-none bg-background">
      <div className="h-full flex-1 gap-4 p-6 pb-3 horizontal">
        <div className="h-full min-w-fit select-none">
          <AvatarImage
            className="pointer-events-none select-none"
            alt=""
            src={post.profiles.avatar}
            size="xl"
          />
        </div>

        <div className="h-full gap-1 overflow-hidden vertical">
          <div className="gap-1 text-muted horizontal center-v">
            <h1 className="text-base font-medium text-primary">{post.profiles.display_name}</h1>

            <div className="relative bottom-[1px] mr-1" />

            <h3 className="text-sm font-normal text-muted">@{post.profiles.username}</h3>

            <span className="text-sm text-muted">·</span>
          </div>

          <p className="line-clamp-[10] break-words text-primary">{post.content}</p>

          <div className="mt-1 w-full items-center gap-2 horizontal">
            <Icons.message
              className={cn('size-5 text-muted transition hover:text-blue-500 active:scale-75')}
            />

            <span
              className={cn(
                'items-center justify-center gap-1 text-sm text-muted horizontal',
                'transition-colors',
                post.is_liked
                  ? 'fill-destructive text-destructive'
                  : 'fill-none text-muted hover:text-destructive'
              )}
            >
              <Icons.heart
                className={cn(
                  'size-5 transition-transform active:scale-75',
                  post.is_liked && 'fill-destructive'
                )}
              />

              <span className="select-none">{post.like_count > 0 && post.like_count}</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// export default PostModal
