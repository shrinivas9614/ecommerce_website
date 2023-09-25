import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "../../Carousel/homeCarousel/mainCarousel";

const items = mainCarouselData.map((item) => (
  <img src={item.image} alt="" className="cursor-pointer" role="presentation" />
));

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1500}
    infinite
  />
  
);

export default MainCarousel;
