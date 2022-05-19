import 'emoji-mart/css/emoji-mart.css';

import smilingFaceFill from '@iconify/icons-eva/smiling-face-fill';
import { Icon } from '@iconify/react';
import { ClickAwayListener, IconButton } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Picker } from 'emoji-mart';
import { useState } from 'react';

const RootStyle = styled('div')({
  position: 'relative'
});

const PickerStyle = styled('div')(({ theme }: any) => ({
  bottom: 40,
  overflow: 'hidden',
  position: 'absolute',
  left: theme.spacing(-2),
  boxShadow: theme.customShadows.z20,
  borderRadius: theme.shape.borderRadiusMd,
  '& .emoji-mart': {
    border: 'none',
    backgroundColor: theme.palette.background.paper
  },
  '& .emoji-mart-anchor': {
    color: theme.palette.text.disabled,
    '&:hover, &:focus, &.emoji-mart-anchor-selected': {
      color: theme.palette.text.primary
    }
  },
  '& .emoji-mart-bar': { borderColor: theme.palette.divider },
  '& .emoji-mart-search input': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    borderColor: theme.palette.grey[500_32],
    '&::placeholder': {
      ...theme.typography.body2,
      color: theme.palette.text.disabled
    }
  },
  '& .emoji-mart-search-icon svg': {
    opacity: 1,
    fill: theme.palette.text.disabled
  },
  '& .emoji-mart-category-label span': {
    ...theme.typography.subtitle2,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.background.paper, 0.8)
  },
  '& .emoji-mart-title-label': { color: theme.palette.text.primary },
  '& .emoji-mart-category .emoji-mart-emoji:hover:before': {
    backgroundColor: theme.palette.action.selected
  },
  '& .emoji-mart-emoji': { outline: 'none' },
  '& .emoji-mart-preview-name': {
    color: theme.palette.text.primary
  },
  '& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon': {
    color: theme.palette.text.secondary
  }
}));

export default function EmojiPicker({
  disabled,
  value,
  setValue,
  alignRight = false,
  ...other
}: any) {
  const theme = useTheme();
  const [emojiPickerState, SetEmojiPicker] = useState(false);

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        color={theme.palette.primary.main}
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={(emoji: any) => setValue(value + emoji.native)}
      />
    );
  }

  const triggerPicker = (e: any) => {
    e.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  };

  const handleClickAway = () => {
    SetEmojiPicker(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <RootStyle {...other}>
        <PickerStyle
          sx={{
            ...(alignRight && {
              right: -2,
              left: 'auto !important'
            })
          }}
        >
          {emojiPicker}
        </PickerStyle>
        <IconButton disabled={disabled} size="small" onClick={triggerPicker}>
          <Icon icon={smilingFaceFill} width={20} height={20} />
        </IconButton>
      </RootStyle>
    </ClickAwayListener>
  );
}
