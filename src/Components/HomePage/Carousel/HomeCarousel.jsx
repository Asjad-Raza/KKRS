import React from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";
import "./HomeCarousel.scss";

export default function HomeCarousel() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="CarouselImage"
          src="Images/Carousel-3.jpg"
          alt="First slide"
        />
        <CarouselCaption className="CarouselCaptions">
          <p>Your Safety Our Priority</p>
          <h3>BEST SECURITY SERVICES</h3> 
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
}
