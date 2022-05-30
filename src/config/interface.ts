import { BoxProps } from '@mui/material';

export interface BoxProps1 extends BoxProps {
  arrowLine?: boolean;
  onNext?: any;
  onPrevious?: any;
  index?: number;
  total?: number;
}
