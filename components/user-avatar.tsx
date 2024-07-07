import { useUser } from '@/components/providers/auth-provider';
import { Avatar, AvatarFallback, AvatarImage, AvatarVariants } from '@/components/ui/avatar';

interface UserAvatarProps extends AvatarVariants {
  avatar?: string;
}

export const UserAvatar = ({ avatar, size }: UserAvatarProps) => {
  const user = useUser();

  if (avatar) {
    return (
      <Avatar size={size}>
        {avatar ? <AvatarImage alt="" src={avatar} /> : <AvatarFallback className="bg-brand" />}
      </Avatar>
    );
  }

  if (!user) return null;

  return (
    <Avatar size={size}>
      {user.profile.avatar ? (
        <AvatarImage alt="" src={user.profile.avatar} />
      ) : (
        <AvatarFallback className="bg-brand" />
      )}
    </Avatar>
  );
};
