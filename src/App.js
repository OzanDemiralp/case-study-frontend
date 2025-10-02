import './App.css';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCardSlider from './components/ProductCardSlider';
import { useEffect, useState } from 'react';
import Filters from './components/Filters';

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = (filters = {}) => {
    let url = 'http://localhost:8080/api/products';
    const params = new URLSearchParams(filters).toString();
    if (params) url += `?${params}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          position: 'relative',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: { xs: 25, sm: 50, md: 125, lg: 140 },
            fontFamily: 'AvenirBook, sans-serif',
            fontSize: 45,
          }}
        >
          Product List
        </Typography>

        <Box sx={{ mt: 4, width: '90vw', position: 'relative' }}>
          <ProductCardSlider products={products} />
        </Box>
        <Filters onApply={fetchProducts} />
      </Box>
    </Box>
  );
}
