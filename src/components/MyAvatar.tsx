import { MAvatar } from '@/components/@material-extend';
import useAuth from '@/hooks/useAuth';
import createAvatar from '@/utils/createAvatar';

export default function MyAvatar({ ...other }: any) {
  const { user } = useAuth();

  return (
    <MAvatar
      src={user?.photoURL}
      alt={user?.displayName}
      color={user?.photoURL ? 'default' : createAvatar(user?.displayName).color}
      {...other}
    >
      {createAvatar(user?.displayName).name}
    </MAvatar>
  );
}
