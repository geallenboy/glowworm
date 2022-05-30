import heartFill from '@iconify/icons-eva/heart-fill';
import { Icon } from '@iconify/react';
import { Avatar, AvatarGroup, Box, Checkbox, Chip, FormControlLabel } from '@mui/material';

import { fShortenNumber } from '@/utils/formatNumber';

export default function PostTags({ post, sx }: any) {
  const { favorite, tags, favoritePerson } = post;

  return (
    <Box sx={{ py: 3, ...sx }}>
      {tags.map((tag: any) => (
        <Chip key={tag} label={tag} sx={{ m: 0.5 }} />
      ))}

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              color="error"
              icon={<Icon icon={heartFill} width={20} height={20} />}
              checkedIcon={<Icon icon={heartFill} width={20} height={20} />}
            />
          }
          label={fShortenNumber(favorite)}
        />
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
          {favoritePerson.map((person: any) => (
            <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
}
