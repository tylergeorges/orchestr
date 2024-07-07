import { useUser } from '@/components/providers/auth-provider';
import { Avatar, AvatarFallback, AvatarImage, AvatarVariants } from '@/components/ui/avatar';

interface UserAvatarProps extends AvatarVariants {
  avatar?: string;
}

export const UserAvatar = ({ avatar, size }: UserAvatarProps) => {
  if (avatar) {
    return (
      <Avatar size={size}>
        {avatar ? <AvatarImage alt="" src={avatar} /> : <AvatarFallback className="bg-brand" />}
      </Avatar>
    );
  }

  const { profile } = useUser();

  if (!profile) return null;

  return (
    <Avatar size={size}>
      {profile.avatar ? (
        <AvatarImage alt="" src={profile.avatar} />
      ) : (
        <AvatarFallback className="bg-brand" />
      )}
    </Avatar>
  );
};
