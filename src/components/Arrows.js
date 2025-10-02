import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const NextArrow = ({ onClick, style }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: { xs: -20, sm: -35, md: -55, lg: -65 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'black',
      backgroundColor: 'white',
      '&:hover': { backgroundColor: '#eee' },
      ...style,
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

export const PrevArrow = ({ onClick, style }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: { xs: -20, sm: -35, md: -55, lg: -65 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'black',
      backgroundColor: 'white',
      '&:hover': { backgroundColor: '#eee' },
      ...style,
    }}
  >
    <ArrowBackIos />
  </IconButton>
);
