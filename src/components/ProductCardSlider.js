import { useRef } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import ProductCard from './ProductCard';
import { NextArrow, PrevArrow } from './Arrows';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function ProductCardSlider({ products }) {
  const swiperRef = useRef(null);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
      <NextArrow onClick={() => swiperRef.current?.slideNext()} />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
          1440: { slidesPerView: 4, spaceBetween: 60 },
          2560: { slidesPerView: 6, spaceBetween: 70 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ width: '100%' }}>
              <ProductCard product={product} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ProductCardSlider;
