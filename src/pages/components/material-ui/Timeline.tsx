import { Fastfood, Hotel, LaptopMac, Repeat } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { last, slice } from 'lodash';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const TIMELINES: any = [
  {
    key: 1,
    title: 'Default',
    des: 'Morbi mattis ullamcorper',
    time: '09:30 am',
    icon: <Fastfood />
  },
  {
    key: 2,
    title: 'Primary',
    des: 'Morbi mattis ullamcorper',
    time: '10:00 am',
    color: 'primary',
    icon: <LaptopMac />
  },
  {
    key: 3,
    title: 'Secondary',
    des: 'Morbi mattis ullamcorper',
    time: '10:00 am',
    color: 'secondary',
    icon: <LaptopMac />
  },
  {
    key: 4,
    title: 'Info',
    des: 'Morbi mattis ullamcorper',
    time: '10:30 am',
    color: 'info',
    icon: <Hotel />
  },
  {
    key: 5,
    title: 'Success',
    des: 'Morbi mattis ullamcorper',
    time: '11:00 am',
    color: 'success',
    icon: <Repeat />
  },
  {
    key: 6,
    title: 'Warning',
    des: 'Morbi mattis ullamcorper',
    time: '11:30 am',
    color: 'warning',
    icon: <Fastfood />
  },
  {
    key: 7,
    title: 'Error',
    des: 'Morbi mattis ullamcorper',
    time: '12:00 am',
    color: 'error',
    icon: <Fastfood />
  }
];

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function TimelineComponent() {
  const lastItem: any = last(TIMELINES).key;
  const reduceTimeLine = slice(TIMELINES, TIMELINES.length - 3);

  return (
    <RootStyle title={`组件: Timeline${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Timeline"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Timeline' }]}
            moreLink="https://mui.com/zh/material-ui/react-timeline/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Block title="Default">
              <Timeline>
                {reduceTimeLine.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Right">
              <Timeline position="right">
                {reduceTimeLine.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Alternating">
              <Timeline position="alternate">
                {reduceTimeLine.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Filled">
              <Timeline position="alternate">
                {TIMELINES.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Outlined">
              <Timeline position="alternate">
                {TIMELINES.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>{item.title}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Opposite content">
              <Timeline position="alternate">
                {TIMELINES.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineOppositeContent>
                      <Typography sx={{ color: 'text.secondary' }}>{item.time}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color={item.color} />
                      {lastItem === item.key ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography> {item.title}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>

          <Grid item xs={12}>
            <Block title="Customized">
              <Timeline position="alternate">
                {TIMELINES.map((item: any) => (
                  <TimelineItem key={item.key}>
                    <TimelineOppositeContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.time}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper
                        sx={{
                          p: 3,
                          bgcolor: 'grey.50012'
                        }}
                      >
                        <Typography variant="subtitle2">{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.des}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
