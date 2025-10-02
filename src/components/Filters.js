import { Box, TextField, Slider, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function Filters({ onApply }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [popularity, setPopularity] = useState(0);

  const handleApply = () => {
    const filters = {};
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;
    if (popularity > 0) filters.minPopularity = popularity;
    onApply(filters);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        mt: 4,
        flexWrap: 'wrap',
        marginLeft: { xs: 2, sm: 2, md: 1 },
      }}
    >
      <TextField
        label='Min Price ($)'
        variant='outlined'
        size='small'
        type='number'
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <TextField
        label='Max Price ($)'
        variant='outlined'
        size='small'
        type='number'
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Box sx={{ width: 200 }}>
        <Typography variant='body2'>Min Popularity</Typography>
        <Slider
          value={popularity}
          onChange={(_, value) => setPopularity(value)}
          step={0.5}
          min={0}
          max={5}
          valueLabelDisplay='auto'
          color='#D9D9D9'
        />
      </Box>
      <Button variant='contained' onClick={handleApply} color='#D9D9D9'>
        Apply
      </Button>
    </Box>
  );
}
