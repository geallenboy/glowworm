import { Box, Button, Card, OutlinedInput, Stack, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const ContentStyle = styled(Card)(({ theme }) => ({
  marginTop: -120,
  boxShadow: 'none',
  padding: theme.spacing(5),
  paddingTop: theme.spacing(16),
  color: theme.palette.common.white,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`
}));

export default function InviteFriends() {
  return (
    <div>
      <Box
        component="img"
        src="/static/illustrations/illustration_invite.png"
        sx={{
          zIndex: 9,
          position: 'relative',
          left: 40,
          width: 140,
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))'
        }}
      />
      <ContentStyle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">
            邀请朋友 <br /> 赚取更多收入
          </Typography>
          <Typography variant="h2">¥50</Typography>
        </Stack>

        <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
          总统非常难过。他将指挥两个以上的单词
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <OutlinedInput
            size="small"
            placeholder="邮箱"
            sx={{
              width: 1,
              color: 'common.white',
              fontWeight: 'fontWeightMedium',
              bgcolor: (theme) => alpha(theme.palette.common.black, 0.16),
              '& input::placeholder': {
                color: (theme) => alpha(theme.palette.common.white, 0.48)
              },
              '& fieldset': { display: 'none' }
            }}
          />
          <Button color="warning" variant="contained">
            邀请
          </Button>
        </Stack>
      </ContentStyle>
    </div>
  );
}
