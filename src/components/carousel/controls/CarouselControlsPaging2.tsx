import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const RootStyle = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'center',
  '& li': {
    width: 24,
    height: 24,
    opacity: 0.32,
    cursor: 'pointer',
    '&.slick-active': {
      opacity: 1,
      '& .dotActive': {
        width: 18,
        borderRadius: 8
      }
    }
  }
});

const DotStyle = styled('span')(({ theme }: any) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.easeInOut,
    duration: 360
  })
}));

export default function CarouselControlsPaging2({ color, ...other }: any) {
  return {
    appendDots: (dots: any) => (
      <>
        <RootStyle {...other}>{dots}</RootStyle>
      </>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <DotStyle
          className="dotActive"
          sx={{
            bgcolor: color || 'primary.main'
          }}
        />
      </Box>
    )
  };
}
