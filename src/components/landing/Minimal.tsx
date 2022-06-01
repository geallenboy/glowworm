import { alpha, Box, Card, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { MotionInView, varFadeInDown, varFadeInUp } from 'src/components/animate';

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: '设计',
    description:
      '它是建立在原子设计系统原则之上的. 帮助您以最快的速度创建项目，并为您的项目轻松定制.'
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: '开发',
    description: '易于定制和扩展每个组件, 节省你的时间和金钱.'
  },
  {
    icon: '/static/logo.svg',
    title: '品牌',
    description: '颜色、字体的一致性设计. 使品牌识别变得容易.'
  }
];

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }:any) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }:any) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

export default function MinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              component="p"
              variant="overline"
              sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}
            >
              萤火虫
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              如何帮助你？
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index: number) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle className={index === 0 ? 'cardLeft' : 'cardCenter'}>
                  <CardIconStyle
                    src={card.icon}
                    alt={card.title}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main)
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main)
                      })
                    }}
                  />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
