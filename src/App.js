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
            fontFamily: 'AvenirBook, sans-serif',
            fontSize: { xs: 28, sm: 36, md: 45, lg: 50 },
            mt: { xs: 6, sm: 8 },
          }}
        >
          Product List
        </Typography>

        <Box sx={{ mt: 4, width: '90vw', position: 'relative' }}>
          {products.length > 0 ? (
            <ProductCardSlider products={products} />
          ) : (
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 24, md: 28 },
                textAlign: 'center',
              }}
            >
              No products match your filters.
            </Typography>
          )}
        </Box>
        <Filters onApply={fetchProducts} />
      </Box>
    </Box>
  );
}
