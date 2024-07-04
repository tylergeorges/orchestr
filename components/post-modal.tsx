import { Icons } from "@/components/icons";
import { AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PostsWithLikes } from "@/lib/types";
import { cn } from "@/utils/cn";

interface PostModalProps {
  post: PostsWithLikes;
}

export const PostModal = ({ post }: PostModalProps) => {
  return (
    <Card className="bg-background min-w-[600px] border-none">
      <div className="h-full p-6 pb-3 flex-1 gap-4 horizontal">
        <div className="h-full  min-w-fit select-none">
          <AvatarImage
            className="select-none pointer-events-none"
            alt=""
            src={post.profiles.avatar}
            size="xl"
          />
        </div>

        <div className="vertical h-full gap-1  overflow-hidden">
          <div className="horizontal gap-1 center-v text-muted">
            <h1 className="text-base font-medium text-primary">
              {post.profiles.display_name}
            </h1>

            <div className="relative bottom-[1px] mr-1" />

            <h3 className="text-sm text-muted font-normal">
              @{post.profiles.username}
            </h3>

            <span className="text-muted text-sm">·</span>

            {/* <span className="text-muted text-sm" suppressHydrationWarning>
              {createdAt}
            </span> */}
          </div>

          <p className=" text-primary break-words  line-clamp-[10]">
            {post.content}
          </p>

          <div className="w-full horizontal gap-2 items-center mt-1">
            <Icons.message
              className={cn(
                "size-5 text-muted transition hover:text-blue-500 active:scale-75"
              )}
            />

            <span
              className={cn(
                "horizontal text-sm text-muted gap-1 items-center justify-center",
                "transition-colors",
                post.is_liked
                  ? "fill-destructive text-destructive"
                  : "text-muted fill-none hover:text-destructive"
              )}
              // onClick={likePost}
            >
              <Icons.heart
                className={cn(
                  "size-5  transition-transform  active:scale-75",
                  post.is_liked && "fill-destructive"
                )}
              />

              <span className="select-none">
                {post.like_count > 0 && post.like_count}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

// export default PostModal
