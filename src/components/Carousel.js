import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselComp = ({ img1, img2 }) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link
          className="text-gray-200 hover:text-indigo-300 hover:underline h-60"
          to="/stats_preview"
        >
          <img className="d-block w-100 h-1/2" src={img1} alt="First slide" />
        </Link>

        <Carousel.Caption>
          <h1 className="text-sm">Desktop View</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          className="text-gray-200 hover:text-indigo-300 hover:underline h-60"
          to="/profile_card"
        >
          <img className="d-block w-100 h-1/2" src={img2} alt="Second slide" />
        </Link>
        <Carousel.Caption>
          <h1 className="text-sm">Mobile View</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
