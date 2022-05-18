import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { Icon } from '@iconify/react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { MotionInView, varFadeIn } from '@/components/animate';
import mockData from '@/utils/mock-data';

const MOCK_FAQS = [...Array(8)].map((_, index) => ({
  id: mockData.id(index),
  value: `panel${index + 1}`,
  heading: `问题 ${index + 1}`,
  detail: `问题${index + 1} 详细说明 `
}));

export default function List() {
  return (
    <MotionInView variants={varFadeIn}>
      {MOCK_FAQS.map((accordion: any) => (
        <Accordion key={accordion.value}>
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
    </MotionInView>
  );
}
