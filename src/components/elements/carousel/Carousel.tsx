'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps extends React.ComponentProps<typeof Slider> {
  children: React.ReactNode;
}

const carouselDefaultProps = {
  speed: 500,
};

export const Carousel = (props: CarouselProps) => {
  return (
    <Slider {...carouselDefaultProps} {...props}>
      {React.Children.map(props.children, (child) => (
        <div>{child}</div>
      ))}
    </Slider>
  );
};
