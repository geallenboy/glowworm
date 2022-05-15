import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

function ShadowCard({ sx, title }: any) {
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: 'calc((100%/2) - 24px)',
          sm: 'calc((100%/4) - 24px)',
          md: 'calc((100%/6) - 24px)'
        },
        ...sx
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
    </Paper>
  );
}

export default function FoundationShadows() {
  const theme: any = useTheme();
  const systemShadows = theme.shadows.slice(1, theme.shadows.length);
  const customShadows = Object.entries(theme.customShadows).slice(
    0,
    Object.entries(theme.customShadows).length - 6
  );

  const colorShadows = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

  return (
    <RootStyle title={`基础：Shadows${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Shadows"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Shadows' }]}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="System" sx={style}>
            {systemShadows.map((shadow: any, index: number) => (
              <ShadowCard key={shadow} title={`z${index + 1}`} sx={{ boxShadow: shadow }} />
            ))}
          </Block>

          <Block title="Customs" sx={style}>
            {customShadows.map((shadow: any) => (
              <ShadowCard key={shadow} title={shadow[0]} sx={{ boxShadow: shadow[1] }} />
            ))}
          </Block>

          <Block title="Colors" sx={style}>
            {colorShadows.map((color: any) => (
              <ShadowCard
                key={color}
                title={color}
                sx={{
                  color: theme.palette[color].contrastText,
                  bgcolor: theme.palette[color].main,
                  boxShadow: theme.customShadows[color]
                }}
              />
            ))}
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
