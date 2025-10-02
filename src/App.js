import './App.css';
import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { NextArrow, PrevArrow } from './components/Arrows';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import ProductCardSlider from './components/ProductCardSlider';

const dummyProducts = Array.from({ length: 12 }, (_, i) => ({
  name: `Engagement Ring ${1 + i}`,
  popularityScore: 0.89,
  weight: 2.1,
  images: {
    yellow:
      'https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-Y.jpg?v=1696588368',
    rose: 'https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-R.jpg?v=1696588406',
    white:
      'https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-W.jpg?v=1696588402',
  },
  price: 482.94590400000004,
}));

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function App() {
  const swiperRef = useRef(null);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography>Product List</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box sx={{ mt: 4, width: '90vw', position: 'relative' }}>
          <ProductCardSlider products={dummyProducts} />
        </Box>
      </Box>
    </Box>
  );
}
