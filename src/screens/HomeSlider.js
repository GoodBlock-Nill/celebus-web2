import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <Typography variant="h2">Slide 1</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Slide 2</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Slide 3</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Slide 4</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Slide 5</Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeSlider;
