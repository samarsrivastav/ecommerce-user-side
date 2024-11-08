import React from "react";
import Slider from "react-slick";
import { CarouselItem } from "./CarouselItem";

// Define the prop type for Carousel component
interface CarouselProps {
  images: string[];  // images should be an array of strings (URLs)
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="my-4">
      {images.map((imgSrc, index) => (
        <CarouselItem key={index} imgSrc={imgSrc} />
      ))}
    </Slider>
  );
};
