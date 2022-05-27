import { Avatar, AvatarProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { forwardRef } from 'react';

const MAvatar = forwardRef(
  ({ color = 'default', sx, children, ...other }: AvatarProps, ref: any) => {
    const theme: any = useTheme();

    if (color === 'default') {
      return (
        <Avatar ref={ref} {...other} sx={sx}>
          {children}
        </Avatar>
      );
    }

    return (
      <Avatar
        ref={ref}
        {...other}
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
          ...sx
        }}
      >
        {children}
      </Avatar>
    );
  }
);

export default MAvatar;
