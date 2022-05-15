import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../../Block';
import ProgressCircular from './ProgressCircular';
import ProgressLinear from './ProgressLinear';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function ProgressComponent() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <RootStyle title={`组件: Progress${title_main}`}>
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
            heading="Progress"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Progress' }]}
            moreLink="https://mui.com/zh/material-ui/react-progress/"
          />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="Circular">
            <ProgressCircular progress={progress} />
          </Block>

          <Block title="Linear">
            <ProgressLinear progress={progress} buffer={buffer} />
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
