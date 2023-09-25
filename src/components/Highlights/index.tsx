// 3rd parties
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// App
import { Cards } from 'components/Cards';
import { Movie } from 'types';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type HighlightsProps = {
  categoryTitle: string
  values: Movie[]
}

export const Highlights: FC<HighlightsProps> = ({
  categoryTitle,
  values
}) => (
  <>
    <Typography variant='h3' sx={{color:"white", mt:5, ml:3, mb:4}}>
      {categoryTitle}
    </Typography>

    <Swiper
      spaceBetween={50}
      pagination={{ type: 'progressbar' }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        375: { slidesPerView: 1},
        768: {slidesPerView: 2},
        1200: {slidesPerView: 3},
        1366: {slidesPerView: 4},
        1600: {slidesPerView: 5}
      }}
    >
      {values?.map((movie: Movie) => (
        <SwiperSlide key={movie.id}>
          <Cards
            minWidthCustom={"380px"}
            key={movie.id}
            movie={movie}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
)
