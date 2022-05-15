import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { Icon } from '@iconify/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';
import mockData from '@/utils/mock-data';

import { Block } from '../Block';

const MOCK_ACCORDIONS = [...Array(4)].map((_, index) => ({
  id: mockData.id(index),
  value: `panel${index + 1}`,
  heading: `Accordion ${index + 1}`,
  subHeading: mockData.text.title(index),
  detail: mockData.text.description(index)
}));

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function AccordionComponent() {
  const [controlled, setControlled] = useState(false);

  const handleChangeControlled = (panel: any) => (event: any, isExpanded: any) => {
    setControlled(isExpanded ? panel : false);
  };

  return (
    <RootStyle title={`基础：Accordion${title_main}`}>
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
            heading="Accordion"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Accordion' }]}
            moreLink="https://mui.com/zh/material-ui/react-accordion/"
          />
        </Container>
      </Box>

      <Container>
        <Block title="Simple" sx={{ mb: 5 }}>
          {MOCK_ACCORDIONS.map((accordion, index) => (
            <Accordion key={accordion.value} disabled={index === 3}>
              <AccordionSummary
                expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}
              >
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Block>

        <Block title="Controlled">
          {MOCK_ACCORDIONS.map((item: any, index: number) => (
            <Accordion
              key={item.value}
              disabled={index === 3}
              expanded={controlled === item.value}
              onChange={handleChangeControlled(item.value)}
            >
              <AccordionSummary
                expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}
              >
                <Typography variant="subtitle1" sx={{ width: '33%', flexShrink: 0 }}>
                  {item.heading}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{item.subHeading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Block>
      </Container>
    </RootStyle>
  );
}
