import searchFill from '@iconify/icons-eva/search-fill';
import { Icon } from '@iconify/react';
import { Box, ClickAwayListener, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }: any) => ({
  transition: theme.transitions.create('box-shadow', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

export default function ChatContactSearch({
  query,
  onChange,
  onFocus,
  onClickAway,
  ...other
}: any) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <RootStyle {...other}>
        <FormControl fullWidth size="small">
          <SearchStyle
            value={query}
            onFocus={onFocus}
            onChange={onChange}
            placeholder="搜索联系人..."
            startAdornment={
              <InputAdornment position="start">
                <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </RootStyle>
    </ClickAwayListener>
  );
}
