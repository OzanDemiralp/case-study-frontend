import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from '@mui/material';
import { useState } from 'react';

function ProductCard({ product }) {
  const colorKeys = Object.keys(product.images);
  const [selectedColor, setSelectedColor] = useState(colorKeys[0]);

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 'none',
        border: 'none',
      }}
    >
      <CardMedia
        component='img'
        height='200px'
        image={product.images[selectedColor]}
        alt={product.name}
        sx={{ border: 'none', borderRadius: '20px' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {' '}
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'MontserratMedium, sans-serif',
            fontSize: 15,
            padding: 0,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            fontFamily: 'MontserratRegular, sans-serif',
            fontSize: 15,
            padding: '3px 0 12px 0',
          }}
        >
          ${product.price.toFixed(2)} USD
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '40%',
            padding: '0 0 8px 0',
          }}
        >
          {colorKeys.map((color) => (
            <Box
              key={color}
              onClick={() => setSelectedColor(color)}
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                position: 'relative',
                cursor: 'pointer',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  backgroundColor:
                    color === 'yellow'
                      ? '#E6CA97'
                      : color === 'rose'
                      ? '#E1A4A9'
                      : color === 'white'
                      ? '#D9D9D9'
                      : 'transparent',
                  margin: '3px',
                },
                outline:
                  selectedColor === color ? '1px solid black' : 'transparent',
              }}
            />
          ))}
        </Box>
        <Typography
          sx={{
            fontFamily: 'AvenirBook',
            fontSize: 15,
            padding: '0 0 10px 0',
          }}
        >
          {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} Gold
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Rating
              value={product.popularityScore * 5}
              precision={0.5}
              readOnly
            ></Rating>
          </Box>
          <Typography sx={{ fontFamily: 'AvenirBook', fontSize: 14 }}>
            {(product.popularityScore * 5).toFixed(1)}/5
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
